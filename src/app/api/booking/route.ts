import { NextResponse } from 'next/server';

interface BookingPayload {
  fullName?: string;
  phone?: string;
  clinic?: string;
  concern?: string;
  note?: string;
  source?: string;
}

function isValidVietnamPhone(rawPhone: string): boolean {
  const cleaned = rawPhone.replace(/[\s.\-()]/g, '');
  return /^(0|\+84|84)(2|3|5|7|8|9)\d{8,9}$/.test(cleaned);
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as BookingPayload;
    const fullName = (body.fullName || '').trim();
    const phone = (body.phone || '').trim();
    const clinic = (body.clinic || 'TP. Cần Thơ').trim();
    const concern = (body.concern || 'Tư vấn chuyên khoa Cơ Xương Khớp').trim();
    const note = (body.note || '').trim();
    const source = (body.source || 'homepage').trim();

    if (!fullName || fullName.length < 2) {
      return NextResponse.json(
        {
          ok: false,
          message: 'Vui lòng nhập đầy đủ họ và tên bệnh nhân.',
        },
        { status: 400 }
      );
    }

    if (!phone || !isValidVietnamPhone(phone)) {
      return NextResponse.json(
        {
          ok: false,
          message: 'Số điện thoại chưa hợp lệ. Vui lòng kiểm tra lại (VD: 0912 345 678).',
        },
        { status: 400 }
      );
    }

    const bookingRecord = {
      bookingCode: `TM-${Date.now().toString().slice(-6)}`,
      fullName,
      phone,
      clinic,
      concern,
      note,
      source,
      createdAt: new Date().toISOString(),
    };

    // 1. Optional Webhook Integration (Google Sheets Apps Script / Make / n8n)
    const webhookUrl = process.env.BOOKING_WEBHOOK_URL;
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(bookingRecord),
        });
      } catch (webhookErr) {
        console.error('Webhook notification error:', webhookErr);
      }
    }

    // 2. Optional Telegram Bot Notification
    const tgToken = process.env.TELEGRAM_BOT_TOKEN;
    const tgChatId = process.env.TELEGRAM_CHAT_ID;
    if (tgToken && tgChatId) {
      const text = [
        `🏥 *ĐĂNG KÝ LỊCH KHÁM MỚI (${bookingRecord.bookingCode})*`,
        `👤 *Bệnh nhân:* ${bookingRecord.fullName}`,
        `📞 *Điện thoại:* ${bookingRecord.phone}`,
        `📍 *Cơ sở:* ${bookingRecord.clinic}`,
        `🩺 *Vấn đề:* ${bookingRecord.concern}`,
        bookingRecord.note ? `📝 *Ghi chú:* ${bookingRecord.note}` : '',
        `⏰ *Thời gian:* ${new Date().toLocaleString('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh' })}`,
      ]
        .filter(Boolean)
        .join('\n');

      try {
        await fetch(`https://api.telegram.org/bot${tgToken}/sendMessage`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            chat_id: tgChatId,
            text,
            parse_mode: 'Markdown',
          }),
        });
      } catch (tgErr) {
        console.error('Telegram notification error:', tgErr);
      }
    }

    return NextResponse.json({
      ok: true,
      booking: bookingRecord,
      message:
        'Đội ngũ trợ lý Bác sĩ Minh sẽ gọi điện trực tiếp qua số điện thoại của quý khách trong vòng 15-30 phút để xác nhận khung giờ chính xác.',
    });
  } catch (error) {
    console.error('Booking API error:', error);
    return NextResponse.json(
      {
        ok: false,
        message: 'Hệ thống đang bận, quý khách vui lòng thử lại hoặc gọi trực tiếp Hotline 0292 22 00 777.',
      },
      { status: 500 }
    );
  }
}

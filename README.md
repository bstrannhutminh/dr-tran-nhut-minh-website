# Website Cá Nhân Chính Thức — ThS.BS. Trần Nhựt Minh (`drtrannhutminh.com`)

Dự án website thương hiệu cá nhân và đặt lịch khám chuyên khoa **Cơ Xương Khớp & Phục hồi chức năng** của **ThS.BS. Trần Nhựt Minh**, được xây dựng trên nền tảng **Next.js 15 (App Router) + TypeScript + Tailwind CSS**, tối ưu triển khai trên **Vercel**.

---

## 1. Kiến trúc & Tính năng nổi bật

- **Hệ thống thiết kế (Design System):** Tuân thủ chuẩn *"Premium Clinical Authority"* từ [DESIGN.md](file:///F:/WEB/stitch_dr._tran_minh_medical_website/DESIGN.md) và [code.html](file:///F:/WEB/stitch_dr._tran_minh_medical_website/code.html) (Font `Plus Jakarta Sans`, bảng màu Navy `#002C43` - Medical Blue `#006781` - Accent Red `#FF5442`, cỡ chữ & độ tương phản thân thiện với người trung niên và cao tuổi).
- **14 Phân khu Trang chủ hoàn chỉnh:**
  1. **Hero Section:** Thông điệp định vị thương hiệu, 3 trụ cột niềm tin y khoa, chân dung Bác sĩ & chỉ số kinh nghiệm (`10+ năm`, `10.000+ bệnh nhân`).
  2. **Hồ sơ năng lực chuyên gia:** 4 trụ cột năng lực & trích dẫn Triết lý hành nghề Y đức.
  3. **Hành trình nghề Y:** Timeline cột mốc từ `2013` → `2019` → `2019-2023` → `HIỆN TẠI`.
  4. **Lĩnh vực chuyên môn & Dịch vụ điều trị:** 8 thẻ chuyên khoa (tích hợp Modal xem chi tiết triệu chứng, phác đồ bảo tồn & nút đặt lịch theo đúng bệnh lý).
  5. **Chuyên đề PRP — Y học tái tạo sinh học:** Chi tiết liệu pháp huyết tương giàu tiểu cầu chuẩn vô khuẩn dưới hướng dẫn siêu âm.
  6. **Chăm sóc sức khỏe chủ động (Y học lối sống):** 6 trụ cột dự phòng thoái hóa sớm (tích hợp Modal lời khuyên thực hành).
  7. **Hoạt động chuyên môn & Hội nghị CME:** Cập nhật liên tục kiến thức y khoa.
  8. **Bằng cấp & Chứng chỉ xác thực:** Tích hợp Lightbox phóng to văn bằng/chứng chỉ hành nghề rõ nét.
  9. **Video giáo dục sức khỏe:** Trình phát video nổi bật + danh sách phát (Playlist) chuyển đổi trực tiếp kèm tóm tắt 3 điểm cốt lõi.
  10. **Câu chuyện khách hàng & Phục hồi:** Chia sẻ thực tế từ bệnh nhân tại Cần Thơ, Vĩnh Long.
  11. **Thư viện Kiến thức Y khoa (Blog):** Bộ lọc danh mục tức thời (`Tất cả bài viết`, `Khớp Gối`, `Cột Sống`, `Dinh dưỡng`) + Modal đọc bài viết chi tiết.
  12. **Kết nối Mạng xã hội chính thức:** YouTube, Fanpage, TikTok Y Khoa, Zalo OA.
  13. **Đăng ký lịch khám trực tuyến:** Thông tin 2 cơ sở (TP. Cần Thơ & TP. Hồ Chí Minh) + Form đăng ký kết nối API `/api/booking`.
  14. **Popup Modal Đặt lịch khám nhanh + Thanh Sticky Mobile:** Hỗ trợ người lớn tuổi bấm gọi Hotline `0292 22 00 777` hoặc Đặt lịch chỉ với 1 chạm trên điện thoại.

---

## 2. Cấu trúc thư mục

```text
F:\WEB\
├── public/
│   └── images/                  # Toàn bộ 33 hình ảnh y khoa đã tải cục bộ và chuẩn hóa tên file
├── src/
│   ├── app/
│   │   ├── api/booking/route.ts # API xử lý đặt lịch khám (validate SĐT VN + Webhook/Telegram)
│   │   ├── globals.css          # Tailwind CSS & Material Symbols styles
│   │   ├── layout.tsx           # Root Layout, Google Fonts, Metadata & JSON-LD Schema.org
│   │   ├── page.tsx             # Trang chủ
│   │   ├── robots.ts            # Cấu hình robots.txt tự động
│   │   └── sitemap.ts           # Cấu hình sitemap.xml tự động
│   ├── components/
│   │   ├── Header.tsx           # Header cố định + Dropdown Chuyên môn + Mobile Drawer Menu
│   │   ├── HomeClient.tsx       # Giao diện & tương tác 14 phân khu trang chủ
│   │   ├── BookingModal.tsx     # Modal đặt lịch khám chuyên khoa
│   │   └── Footer.tsx           # Footer 5 cột + Nút nổi Desktop + Sticky Bar Mobile
│   └── data/
│       └── siteData.ts          # Dữ liệu tập trung (dễ dàng chỉnh sửa nội dung & mở rộng trang con)
├── stitch_dr._tran_minh_medical_website/ # Thư mục thiết kế gốc từ Google Stitch
├── .env.example                 # Mẫu biến môi trường cho Vercel
├── vercel.json                  # Cấu hình triển khai Vercel (region Singapore sin1)
└── package.json
```

---

## 3. Hướng dẫn chạy локал (Local Development)

```bash
# Chạy máy chủ phát triển tại http://localhost:3000
npm.cmd run dev

# Kiểm tra đóng gói Production
npm.cmd run build
npm.cmd run start
```

---

## 4. Triển khai lên Vercel

1. **Cách 1 (Qua GitHub/GitLab):**
   - Đẩy mã nguồn tại `F:\WEB` lên GitHub repository.
   - Truy cập [vercel.com/new](https://vercel.com/new), chọn repository và nhấn **Deploy** (Vercel tự động nhận diện Next.js).
2. **Cách 2 (Qua Vercel CLI trực tiếp từ máy):**
   ```bash
   npx.cmd vercel
   ```
3. **Cấu hình Biến môi trường trên Vercel (Tùy chọn):**
   - `NEXT_PUBLIC_SITE_URL`: `https://drtrannhutminh.com`
   - `BOOKING_WEBHOOK_URL`: URL Webhook (Google Apps Script / Make / n8n) để lưu danh sách bệnh nhân đặt lịch vào Google Sheets hoặc CRM.
   - `TELEGRAM_BOT_TOKEN` & `TELEGRAM_CHAT_ID`: Nhận thông báo đặt lịch ngay lập tức qua Telegram của trợ lý bác sĩ.

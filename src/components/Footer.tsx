'use client';

import React from 'react';
import { DOCTOR_INFO } from '@/data/siteData';

interface FooterProps {
  onOpenBooking: (defaultConcern?: string) => void;
}

export default function Footer({ onOpenBooking }: FooterProps) {
  return (
    <>
      {/* Floating Action Buttons (Desktop & Tablet) */}
      <aside
        className="fixed right-5 bottom-24 z-40 hidden sm:flex flex-col gap-3"
        aria-label="Công cụ liên hệ nhanh"
      >
        <a
          className="w-13 h-13 p-3.5 bg-primary-container text-on-primary rounded-full shadow-[0_12px_28px_rgba(0,44,67,0.2)] hover:scale-105 transition-transform flex items-center justify-center"
          href={`tel:${DOCTOR_INFO.hotlinePrimaryTel}`}
          title={`Gọi Hotline ${DOCTOR_INFO.hotlinePrimary}`}
        >
          <span className="material-symbols-outlined text-[24px]">call</span>
        </a>
        <a
          className="w-13 h-13 p-3.5 bg-secondary text-on-secondary rounded-full shadow-[0_12px_28px_rgba(0,103,129,0.25)] hover:scale-105 transition-transform flex items-center justify-center"
          data-path="lien-he"
          href="#booking-section"
          title="Nhắn tin tư vấn"
        >
          <span className="material-symbols-outlined text-[24px]">chat</span>
        </a>
        <button
          type="button"
          onClick={() => onOpenBooking()}
          className="w-13 h-13 p-3.5 bg-on-tertiary-container text-on-tertiary rounded-full shadow-[0_12px_28px_rgba(215,31,23,0.3)] hover:scale-105 transition-transform flex items-center justify-center"
          data-path="dat-lich-kham"
          title="Đặt lịch khám"
        >
          <span className="material-symbols-outlined text-[24px]">
            calendar_month
          </span>
        </button>
      </aside>

      {/* Quick Floating Hotline / Appointment Bar (Mobile Sticky Ribbon per DESIGN.md) */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-surface-container-lowest border-t border-[#E4EAF0] shadow-[0_-12px_32px_rgba(0,44,67,0.12)] px-4 py-2.5">
        <div className="grid grid-cols-2 gap-3">
          <a
            href={`tel:${DOCTOR_INFO.hotlinePrimaryTel}`}
            className="h-13 px-4 rounded-xl bg-primary-container text-on-primary font-label-md text-label-md flex items-center justify-center gap-2 shadow-sm"
          >
            <span className="material-symbols-outlined text-[20px] text-secondary-fixed">
              call
            </span>
            <span>GỌI BÁC SĨ</span>
          </a>
          <button
            type="button"
            onClick={() => onOpenBooking()}
            className="h-13 px-4 rounded-full bg-[#D71F17] hover:bg-[#bd160f] text-on-tertiary font-label-md text-label-md flex items-center justify-center gap-2 shadow-[0_4px_14px_rgba(215,31,23,0.3)]"
          >
            <span className="material-symbols-outlined text-[20px]">
              calendar_month
            </span>
            <span>ĐẶT LỊCH KHÁM</span>
          </button>
        </div>
      </div>

      {/* Main Footer */}
      <footer className="w-full bg-primary-container text-on-primary pt-16 pb-24 sm:pb-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Column 1: Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-surface-container-lowest flex items-center justify-center text-primary font-headline-sm text-headline-sm font-black">
                <span className="text-[#ff5442]">T</span>M
                <span className="text-xs text-on-tertiary-container">+</span>
              </div>
              <span className="font-title-md text-title-md font-bold tracking-tight text-surface-bright">
                DR. TRẦN NHỰT MINH
              </span>
            </div>
            <p className="font-body-sm text-body-sm text-on-primary-container leading-relaxed">
              Thạc sĩ, Bác sĩ chuyên khoa sâu về Cơ Xương Khớp &amp; Phục hồi chức năng. Áp dụng các giải pháp y khoa can thiệp tối thiểu chuẩn y khoa Hoa Kỳ nhằm tối ưu hóa chức năng vận động và chất lượng sống.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                className="w-9 h-9 rounded-lg bg-surface-variant/10 hover:bg-surface-variant/20 flex items-center justify-center text-secondary-fixed transition-colors"
                href="#video-section"
                aria-label="Kênh Video Bác sĩ Minh"
              >
                <span className="material-symbols-outlined text-[18px]">
                  play_circle
                </span>
              </a>
              <a
                className="w-9 h-9 rounded-lg bg-surface-variant/10 hover:bg-surface-variant/20 flex items-center justify-center text-secondary-fixed transition-colors"
                href="#ket-noi-mang-xa-hoi"
                aria-label="Chia sẻ mạng xã hội"
              >
                <span className="material-symbols-outlined text-[18px]">
                  share
                </span>
              </a>
              <a
                className="w-9 h-9 rounded-lg bg-surface-variant/10 hover:bg-surface-variant/20 flex items-center justify-center text-secondary-fixed transition-colors"
                href="#booking-section"
                aria-label="Tư vấn trực tuyến"
              >
                <span className="material-symbols-outlined text-[18px]">
                  forum
                </span>
              </a>
            </div>
          </div>

          {/* Column 2: Chuyên môn mũi nhọn */}
          <div className="space-y-3">
            <h3 className="font-title-md text-title-md font-bold text-surface-bright">
              Chuyên môn mũi nhọn
            </h3>
            <ul className="space-y-2 font-body-sm text-body-sm text-on-primary-container">
              <li className="hover:text-surface-bright transition-colors">
                <a data-path="chuyen-khoa-co-xuong-khop" href="#chuyen-mon">
                  Thoái hóa khớp gối &amp; háng
                </a>
              </li>
              <li className="hover:text-surface-bright transition-colors">
                <a data-path="thoat-vi-dia-dem-cot-song" href="#chuyen-mon">
                  Thoát vị đĩa đệm cổ &amp; lưng
                </a>
              </li>
              <li className="hover:text-surface-bright transition-colors">
                <a data-path="prp-chuyen-sau" href="#prp-section">
                  Liệu pháp Huyết tương giàu tiểu cầu (PRP)
                </a>
              </li>
              <li className="hover:text-surface-bright transition-colors">
                <a data-path="phuc-hoi-chuc-nang" href="#chuyen-mon">
                  Phục hồi chức năng sau chấn thương
                </a>
              </li>
              <li className="hover:text-surface-bright transition-colors">
                <a data-path="cham-soc-suc-khoe-chu-dong" href="#lifestyle-medicine">
                  Y học tái tạo khớp sinh học
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Thư viện kiến thức */}
          <div className="space-y-3">
            <h3 className="font-title-md text-title-md font-bold text-surface-bright">
              Thư viện kiến thức
            </h3>
            <ul className="space-y-2 font-body-sm text-body-sm text-on-primary-container">
              <li className="hover:text-surface-bright transition-colors">
                <a data-path="kien-thuc-y-khoa" href="#kien-thuc-y-khoa">
                  Cẩm nang thoát vị đĩa đệm
                </a>
              </li>
              <li className="hover:text-surface-bright transition-colors">
                <a data-path="kien-thuc-y-khoa" href="#kien-thuc-y-khoa">
                  Khi nào nên tiêm PRP khớp gối?
                </a>
              </li>
              <li className="hover:text-surface-bright transition-colors">
                <a data-path="kien-thuc-y-khoa" href="#video-section">
                  Bài tập phục hồi chức năng tại nhà
                </a>
              </li>
              <li className="hover:text-surface-bright transition-colors">
                <a data-path="cham-soc-suc-khoe-chu-dong" href="#kien-thuc-y-khoa">
                  Dinh dưỡng chống viêm xương khớp
                </a>
              </li>
              <li className="hover:text-surface-bright transition-colors">
                <a data-path="video-hoat-dong" href="#video-section">
                  Chuyên mục tư vấn Bác sĩ Minh
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Cơ sở phòng khám */}
          <div className="space-y-3">
            <h3 className="font-title-md text-title-md font-bold text-surface-bright">
              Cơ sở phòng khám
            </h3>
            <div className="space-y-3 font-body-sm text-body-sm text-on-primary-container">
              <p>
                <span className="font-label-md text-label-md text-surface-bright block">
                  Cơ sở Cần Thơ:
                </span>
                51 Cách Mạng Tháng Tám, Phường Cái Khế, Quận Ninh Kiều, TP. Cần Thơ
              </p>
              <p>
                <span className="font-label-md text-label-md text-surface-bright block">
                  Cơ sở TP. Hồ Chí Minh:
                </span>
                Hệ thống phòng khám liên kết chuyên khoa Cột sống - Xương khớp trung tâm TP.HCM
              </p>
              <p>
                <span className="font-label-md text-label-md text-surface-bright block">
                  Lịch khám chuyên gia:
                </span>
                Thứ 2 - Thứ 7 (Theo lịch hẹn trước)
              </p>
            </div>
          </div>

          {/* Column 5: Liên hệ & Hỗ trợ */}
          <div className="space-y-3">
            <h3 className="font-title-md text-title-md font-bold text-surface-bright">
              Liên hệ &amp; Hỗ trợ
            </h3>
            <div className="space-y-2 font-body-sm text-body-sm text-on-primary-container">
              <p>
                Tổng đài tư vấn chuyên môn:{' '}
                <a
                  href={`tel:${DOCTOR_INFO.hotlinePrimaryTel}`}
                  className="text-surface-bright font-semibold block hover:text-secondary-fixed transition-colors"
                >
                  {DOCTOR_INFO.hotlinePrimary}
                </a>
              </p>
              <p>
                Hotline đặt hẹn ưu tiên:{' '}
                <a
                  href={`tel:${DOCTOR_INFO.hotlineSecondaryTel}`}
                  className="text-surface-bright font-semibold block hover:text-secondary-fixed transition-colors"
                >
                  {DOCTOR_INFO.hotlineSecondary}
                </a>
              </p>
              <p>
                Email:{' '}
                <a
                  href={`mailto:${DOCTOR_INFO.email}`}
                  className="text-surface-bright block hover:text-secondary-fixed transition-colors"
                >
                  {DOCTOR_INFO.email}
                </a>
              </p>
              <p>
                Website:{' '}
                <span className="text-secondary-fixed block">
                  {DOCTOR_INFO.domain}
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 mt-12 pt-8 border-t border-surface-variant/10 text-on-primary-container font-body-sm text-body-sm flex flex-col md:flex-row items-center justify-between gap-4">
          <p>
            © {new Date().getFullYear()} {DOCTOR_INFO.fullName} ({DOCTOR_INFO.domain}). Tất cả quyền được bảo lưu.
          </p>
          <p className="text-xs text-on-primary-container/80 text-center md:text-right max-w-xl">
            Miễn trừ trách nhiệm y tế: Nội dung trên website chỉ phục vụ mục đích cung cấp thông tin y khoa chính thống, không thay thế cho chẩn đoán hoặc phác đồ điều trị trực tiếp từ bác sĩ chuyên khoa.
          </p>
        </div>
      </footer>
    </>
  );
}

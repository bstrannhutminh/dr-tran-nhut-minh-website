'use client';

import React, { useEffect, useState } from 'react';

interface BookingModalProps {
  isOpen: boolean;
  defaultConcern?: string;
  onClose: () => void;
}

const CONCERN_OPTIONS = [
  'Khớp gối',
  'Cột sống / Đĩa đệm',
  'Khớp vai',
  'Tư vấn tiêm PRP',
  'Khác',
];

export default function BookingModal({
  isOpen,
  defaultConcern = 'Khớp gối',
  onClose,
}: BookingModalProps) {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [clinic, setClinic] = useState('TP. Cần Thơ');
  const [concern, setConcern] = useState(defaultConcern);
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [bookingCode, setBookingCode] = useState<string | null>(null);

  useEffect(() => {
    if (defaultConcern && CONCERN_OPTIONS.includes(defaultConcern)) {
      setConcern(defaultConcern);
    }
  }, [defaultConcern]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    setSubmitting(true);

    try {
      const res = await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName,
          phone,
          clinic,
          concern,
          source: 'modal',
        }),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) {
        setErrorMsg(data.message || 'Vui lòng kiểm tra lại thông tin.');
      } else {
        setBookingCode(data.booking?.bookingCode || 'TM-OK');
      }
    } catch {
      setErrorMsg(
        'Không thể kết nối máy chủ. Quý khách vui lòng gọi trực tiếp 0292 22 00 777.'
      );
    } finally {
      setSubmitting(false);
    }
  };

  const handleResetAndClose = () => {
    setBookingCode(null);
    setErrorMsg(null);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-primary/60 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
      id="booking-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) handleResetAndClose();
      }}
    >
      <div className="relative w-full max-w-xl rounded-3xl bg-surface-container-lowest p-6 lg:p-8 shadow-2xl space-y-6">
        {/* Close button */}
        <button
          type="button"
          className="absolute top-5 right-5 w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:text-on-surface transition-colors"
          onClick={handleResetAndClose}
          aria-label="Đóng cửa sổ đặt lịch"
        >
          <span className="material-symbols-outlined text-[22px]">close</span>
        </button>

        <div className="space-y-2 pr-8">
          <span className="font-label-sm text-label-sm text-on-tertiary-container font-bold uppercase tracking-wider">
            Hỗ trợ đặt hẹn nhanh
          </span>
          <h3
            id="booking-modal-title"
            className="font-headline-sm text-headline-sm text-primary-container"
          >
            ĐẶT LỊCH KHÁM CHUYÊN KHOA
          </h3>
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            Vui lòng để lại thông tin, Bác sĩ Minh và cộng sự sẽ liên hệ tư vấn sơ bộ và sắp xếp lịch khám chu đáo cho quý vị.
          </p>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="space-y-1">
            <label className="font-label-sm text-label-sm text-primary font-bold">
              Họ và tên của bạn <span className="text-on-tertiary-container">*</span>
            </label>
            <input
              className="w-full h-12 px-4 rounded-xl bg-surface-container-low text-on-surface font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-secondary"
              placeholder="Họ và tên..."
              required
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>

          <div className="space-y-1">
            <label className="font-label-sm text-label-sm text-primary font-bold">
              Số điện thoại liên hệ <span className="text-on-tertiary-container">*</span>
            </label>
            <input
              className="w-full h-12 px-4 rounded-xl bg-surface-container-low text-on-surface font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-secondary"
              placeholder="Số điện thoại nhận cuộc gọi..."
              required
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="space-y-1">
              <label className="font-label-sm text-label-sm text-primary font-bold">
                Cơ sở khám
              </label>
              <select
                className="w-full h-12 px-3 rounded-xl bg-surface-container-low text-on-surface font-body-sm text-body-sm focus:outline-none focus:ring-2 focus:ring-secondary"
                value={clinic}
                onChange={(e) => setClinic(e.target.value)}
              >
                <option value="TP. Cần Thơ">TP. Cần Thơ</option>
                <option value="TP. Hồ Chí Minh">TP. Hồ Chí Minh</option>
              </select>
            </div>

            <div className="space-y-1">
              <label className="font-label-sm text-label-sm text-primary font-bold">
                Vấn đề xương khớp
              </label>
              <select
                className="w-full h-12 px-3 rounded-xl bg-surface-container-low text-on-surface font-body-sm text-body-sm focus:outline-none focus:ring-2 focus:ring-secondary"
                value={concern}
                onChange={(e) => setConcern(e.target.value)}
              >
                {CONCERN_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {errorMsg && (
            <div className="p-3 rounded-xl bg-error-container text-on-error-container font-body-sm text-body-sm flex items-center gap-2">
              <span className="material-symbols-outlined text-[20px]">error</span>
              <span>{errorMsg}</span>
            </div>
          )}

          <button
            className="w-full py-3.5 rounded-xl bg-on-tertiary-container hover:bg-[#bd160f] disabled:opacity-60 text-on-tertiary font-label-md text-label-md transition-all shadow-md mt-2 flex items-center justify-center gap-2"
            type="submit"
            disabled={submitting}
          >
            <span className="material-symbols-outlined text-[20px]">
              calendar_month
            </span>
            <span>
              {submitting ? 'ĐANG GỬI THÔNG TIN...' : 'XÁC NHẬN ĐĂNG KÝ HẸN'}
            </span>
          </button>
        </form>

        {bookingCode && (
          <div
            className="p-4 rounded-xl bg-secondary-fixed text-on-secondary-fixed text-center space-y-1 animate-fade-in"
            id="modal-success"
          >
            <p className="font-title-md text-title-md font-bold text-secondary">
              Đã nhận thông tin đăng ký! (Mã hẹn: {bookingCode})
            </p>
            <p className="font-body-sm text-body-sm">
              Phòng khám sẽ gọi lại cho bạn sớm nhất để xếp lịch bác sĩ.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

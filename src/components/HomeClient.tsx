'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BookingModal from '@/components/BookingModal';
import {
  ABOUT_PILLARS,
  ACTIVITIES,
  BLOG_POSTS,
  BlogPostItem,
  CERTIFICATES,
  CertificateItem,
  CLINIC_LOCATIONS,
  DOCTOR_INFO,
  HERO_TRUST_PILLARS,
  LIFESTYLE_PILLARS,
  LifestyleItem,
  SOCIAL_CHANNELS,
  SPECIALTIES,
  SpecialtyItem,
  TESTIMONIALS,
  TIMELINE_STEPS,
  VIDEOS,
  VideoItem,
} from '@/data/siteData';

export default function HomeClient() {
  // Booking Modal State
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [bookingDefaultConcern, setBookingDefaultConcern] = useState<string>('Khớp gối');

  // Interactive Detail Modals State
  const [selectedSpecialty, setSelectedSpecialty] = useState<SpecialtyItem | null>(null);
  const [selectedLifestyle, setSelectedLifestyle] = useState<LifestyleItem | null>(null);
  const [selectedCertificate, setSelectedCertificate] = useState<CertificateItem | null>(null);
  const [selectedBlogPost, setSelectedBlogPost] = useState<BlogPostItem | null>(null);

  // Section 9: Video Player State
  const [activeVideo, setActiveVideo] = useState<VideoItem>(VIDEOS[0]);
  const [isPlayingVideoModal, setIsPlayingVideoModal] = useState(false);

  // Section 11: Blog Filter State
  const [activeBlogCategory, setActiveBlogCategory] = useState<string>('Tất cả bài viết');

  // Section 13: Main Inline Appointment Form State
  const [inlineFullName, setInlineFullName] = useState('');
  const [inlinePhone, setInlinePhone] = useState('');
  const [inlineSubmitting, setInlineSubmitting] = useState(false);
  const [inlineError, setInlineError] = useState<string | null>(null);
  const [inlineSuccessCode, setInlineSuccessCode] = useState<string | null>(null);

  const handleOpenBooking = (concern?: string) => {
    if (concern) {
      setBookingDefaultConcern(concern);
    }
    setBookingModalOpen(true);
  };

  const handleSelectSpecialtyById = (specialtyId: string) => {
    const found = SPECIALTIES.find((item) => item.id === specialtyId);
    if (found) {
      setSelectedSpecialty(found);
    }
  };

  const filteredBlogPosts =
    activeBlogCategory === 'Tất cả bài viết'
      ? BLOG_POSTS
      : BLOG_POSTS.filter((post) => post.category === activeBlogCategory);

  const playlistVideos = VIDEOS.slice(1);

  const handleInlineBookingSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setInlineError(null);
    setInlineSubmitting(true);

    try {
      const res = await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: inlineFullName,
          phone: inlinePhone,
          clinic: 'TP. Cần Thơ',
          concern: 'Tư vấn chuyên khoa Cơ Xương Khớp',
          source: 'homepage-section-13',
        }),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) {
        setInlineError(data.message || 'Vui lòng kiểm tra lại thông tin.');
      } else {
        setInlineSuccessCode(data.booking?.bookingCode || 'TM-OK');
        setInlineFullName('');
        setInlinePhone('');
      }
    } catch {
      setInlineError(
        'Không thể kết nối máy chủ. Quý khách vui lòng gọi trực tiếp 0292 22 00 777.'
      );
    } finally {
      setInlineSubmitting(false);
    }
  };

  return (
    <>
      <Header
        onOpenBooking={handleOpenBooking}
        onSelectSpecialty={handleSelectSpecialtyById}
      />

      <main className="w-full pt-20 bg-surface">
        <div className="flex flex-col w-full">
          {/* SECTION 1: HERO SECTION */}
          <section
            id="trang-chu"
            className="relative w-full overflow-hidden bg-gradient-to-b from-surface-container-low via-surface to-surface pb-16 pt-6 lg:py-24"
          >
            {/* Subtle Medical Grid Background Pattern */}
            <div className="absolute inset-0 opacity-25 pointer-events-none">
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern
                    height="32"
                    id="medical-dots"
                    patternUnits="userSpaceOnUse"
                    width="32"
                  >
                    <circle cx="2" cy="2" fill="#006781" opacity="0.3" r="1.5" />
                    <circle cx="18" cy="18" fill="#ff5442" opacity="0.25" r="1" />
                  </pattern>
                </defs>
                <rect fill="url(#medical-dots)" height="100%" width="100%" />
              </svg>
            </div>

            <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
                {/* Left Column: Clinical Credibility & Messaging */}
                <div className="lg:col-span-7 flex flex-col space-y-6">
                  <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-surface-container-high/80 backdrop-blur shadow-sm w-fit">
                    <span className="w-2.5 h-2.5 rounded-full bg-on-tertiary-container animate-pulse" />
                    <span className="font-label-sm text-label-sm tracking-wider uppercase text-secondary font-bold">
                      ThS.BS. Trần Nhựt Minh • Chuyên khoa Cơ Xương Khớp
                    </span>
                  </div>

                  <h1 className="font-headline-xl text-headline-xl-mobile sm:text-headline-xl text-primary-container leading-tight tracking-tight">
                    ĐỒNG HÀNH CÙNG BẠN TRÊN HÀNH TRÌNH{' '}
                    <span className="text-secondary">CHĂM SÓC</span> VÀ{' '}
                    <span className="text-on-tertiary-container">PHỤC HỒI</span>{' '}
                    SỨC KHỎE
                  </h1>

                  <div className="p-4 rounded-xl bg-surface-container-lowest shadow-sm">
                    <p className="font-title-md text-title-md text-secondary font-bold">
                      Chăm sóc sức khỏe chủ động — Chuyên sâu cơ xương khớp — Phục hồi chức năng — Ứng dụng tiến bộ y khoa sinh học.
                    </p>
                  </div>

                  <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                    Với mong muốn mang những kiến thức y khoa khoa học và dễ hiểu đến gần hơn với cộng đồng, Bác sĩ Trần Minh luôn hướng đến việc giúp mỗi người hiểu rõ cơ thể mình, chủ động phòng ngừa biến chứng và tiếp cận phác đồ điều trị bảo tồn ít xâm lấn chuẩn mực.
                  </p>

                  <div className="flex flex-wrap items-center gap-4 pt-2">
                    <button
                      type="button"
                      className="px-8 py-4 rounded-xl bg-on-tertiary-container hover:bg-[#bd160f] text-on-tertiary font-label-lg text-label-lg transition-all shadow-[0_6px_20px_rgba(255,84,66,0.3)] flex items-center gap-3"
                      onClick={() => handleOpenBooking()}
                    >
                      <span className="material-symbols-outlined text-[22px]">
                        calendar_month
                      </span>
                      <span>ĐẶT LỊCH KHÁM NGAY</span>
                    </button>

                    <a
                      className="px-7 py-4 rounded-xl bg-primary-container hover:bg-[#003e5e] text-on-primary font-label-lg text-label-lg transition-all flex items-center gap-2"
                      href="#about-doctor"
                    >
                      <span>TÌM HIỂU VỀ BÁC SĨ</span>
                      <span className="material-symbols-outlined text-[20px]">
                        arrow_downward
                      </span>
                    </a>
                  </div>

                  {/* 3 Clinical Trust Pillars */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6">
                    {HERO_TRUST_PILLARS.map((pillar) => (
                      <div
                        key={pillar.title}
                        className="flex items-start gap-3 p-4 rounded-xl bg-surface-container-lowest/80 shadow-sm"
                      >
                        <span
                          className={`material-symbols-outlined symbol-filled text-[26px] shrink-0 ${
                            pillar.accentColor === 'secondary'
                              ? 'text-secondary'
                              : 'text-on-tertiary-container'
                          }`}
                        >
                          {pillar.icon}
                        </span>
                        <div className="flex flex-col">
                          <span className="font-label-md text-label-md text-primary font-bold">
                            {pillar.title}
                          </span>
                          <span className="font-body-sm text-body-sm text-on-surface-variant">
                            {pillar.description}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Column: Visual Portrait & Clinical Metrics */}
                <div className="lg:col-span-5 relative">
                  {/* Ambient Decorative Ring */}
                  <div className="absolute -top-12 -right-12 w-72 h-72 rounded-full bg-secondary-container/20 blur-3xl pointer-events-none" />
                  <div className="absolute -bottom-8 -left-8 w-60 h-60 rounded-full bg-tertiary-fixed/30 blur-2xl pointer-events-none" />

                  <div className="relative rounded-3xl bg-surface-container-lowest p-4 shadow-xl overflow-hidden">
                    <div className="relative rounded-2xl overflow-hidden bg-gradient-to-t from-primary-container via-surface-container-high to-transparent aspect-[4/5] flex items-end justify-center">
                      <img
                        className="w-full h-full object-cover object-top"
                        alt={DOCTOR_INFO.heroPortraitAlt}
                        src={DOCTOR_INFO.heroPortrait}
                      />
                      {/* Floating Doctor Label Card */}
                      <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-primary-container/90 backdrop-blur-md text-on-primary flex items-center justify-between shadow-lg">
                        <div>
                          <h2 className="font-title-md text-title-md font-bold text-surface-bright">
                            {DOCTOR_INFO.fullName}
                          </h2>
                          <p className="font-body-sm text-body-sm text-secondary-fixed">
                            Chuyên khoa Cơ Xương Khớp - Phục hồi chức năng
                          </p>
                        </div>
                        <div className="w-10 h-10 rounded-lg bg-surface-container-lowest text-primary font-bold flex items-center justify-center shrink-0">
                          <span className="text-on-tertiary-container text-xs font-black">
                            DR+
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Stats Highlight Ribbons */}
                    <div className="grid grid-cols-2 gap-3 mt-3">
                      <div className="p-4 rounded-xl bg-surface-container-low flex flex-col justify-center">
                        <div className="flex items-baseline gap-1 text-primary">
                          <span className="font-headline-lg text-headline-lg font-black text-secondary">
                            10+
                          </span>
                          <span className="font-label-sm text-label-sm font-bold">
                            Năm
                          </span>
                        </div>
                        <span className="font-body-sm text-body-sm text-on-surface-variant font-medium">
                          Kinh nghiệm lâm sàng chuyên sâu
                        </span>
                      </div>

                      <div className="p-4 rounded-xl bg-surface-container-low flex flex-col justify-center">
                        <div className="flex items-baseline gap-1 text-primary">
                          <span className="font-headline-lg text-headline-lg font-black text-on-tertiary-container">
                            10.000+
                          </span>
                        </div>
                        <span className="font-body-sm text-body-sm text-on-surface-variant font-medium">
                          Bệnh nhân phục hồi vận động
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 2: GIỚI THIỆU NGẮN VỀ BÁC SĨ (ABOUT) */}
          <section
            className="w-full py-20 bg-surface-container-lowest"
            id="about-doctor"
          >
            <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-14">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div className="space-y-3 max-w-2xl">
                  <span className="font-label-md text-label-md text-secondary uppercase font-bold tracking-widest flex items-center gap-2">
                    <span className="w-6 h-0.5 bg-secondary" />
                    Hồ sơ năng lực chuyên gia
                  </span>
                  <h2 className="font-headline-lg text-headline-lg-mobile sm:text-headline-lg text-primary-container">
                    HIỂU HƠN VỀ BÁC SĨ TRẦN MINH
                  </h2>
                  <p className="font-body-lg text-body-lg text-on-surface-variant">
                    Người bác sĩ luôn đặt trọng tâm vào việc bảo tồn chức năng tự nhiên của hệ vận động, ưu tiên các liệu pháp can thiệp tối thiểu và giáo dục nhận thức sức khỏe chủ động cho cộng đồng.
                  </p>
                </div>

                <a
                  className="px-6 py-3.5 rounded-xl bg-surface-container hover:bg-surface-container-high text-primary font-label-md text-label-md transition-colors flex items-center gap-2 self-start md:self-auto shrink-0"
                  href="#credentials"
                >
                  <span>XEM HỒ SƠ &amp; BẰNG CẤP</span>
                  <span className="material-symbols-outlined text-[18px]">
                    verified
                  </span>
                </a>
              </div>

              {/* 4 Pillars Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {ABOUT_PILLARS.map((pillar) => (
                  <a
                    key={pillar.title}
                    href={pillar.href}
                    className="p-6 rounded-2xl bg-surface-container-low shadow-sm flex flex-col justify-between space-y-4 hover:-translate-y-1 transition-transform block"
                  >
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        pillar.accentColor === 'secondary'
                          ? 'bg-secondary/10 text-secondary'
                          : 'bg-on-tertiary-container/10 text-on-tertiary-container'
                      }`}
                    >
                      <span className="material-symbols-outlined text-[28px]">
                        {pillar.icon}
                      </span>
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-title-lg text-title-lg text-primary font-bold">
                        {pillar.title}
                      </h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        {pillar.description}
                      </p>
                    </div>
                    <span
                      className={`font-label-sm text-label-sm font-bold ${
                        pillar.accentColor === 'secondary'
                          ? 'text-secondary'
                          : 'text-on-tertiary-container'
                      }`}
                    >
                      {pillar.footerLabel}
                    </span>
                  </a>
                ))}
              </div>

              {/* Philosophy Quote Box */}
              <div className="rounded-3xl bg-gradient-to-r from-primary-container to-[#023b59] p-8 lg:p-12 text-on-primary shadow-lg relative overflow-hidden">
                <div className="absolute -right-10 -bottom-10 opacity-10 pointer-events-none">
                  <span className="material-symbols-outlined text-[240px]">
                    format_quote
                  </span>
                </div>
                <div className="relative z-10 max-w-4xl space-y-4">
                  <div className="inline-flex items-center gap-2 text-secondary-fixed font-label-md text-label-md font-semibold">
                    <span className="material-symbols-outlined text-[20px]">
                      format_quote
                    </span>
                    <span>TRIẾT LÝ HÀNH NGHỀ Y ĐỨC</span>
                  </div>
                  <blockquote className="font-headline-md text-title-lg sm:text-headline-md font-medium italic text-surface-bright leading-relaxed">
                    “Điều quý giá nhất mà người bác sĩ có thể trao cho bệnh nhân không chỉ là một toa thuốc hay một thủ thuật can thiệp, mà còn là sự thấu cảm, niềm tin vào khả năng tự phục hồi và thói quen chủ động làm chủ sức khỏe của chính bản thân họ.”
                  </blockquote>
                  <div className="pt-2 flex items-center gap-4">
                    <div className="w-12 h-0.5 bg-secondary-fixed" />
                    <span className="font-title-md text-title-md font-bold tracking-wider text-surface-bright uppercase">
                      {DOCTOR_INFO.fullName}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 3: HÀNH TRÌNH NGHỀ Y (HORIZONTAL TIMELINE) */}
          <section className="w-full py-20 bg-surface" id="hanh-trinh-nghe-y">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-12">
              <div className="text-center max-w-3xl mx-auto space-y-3">
                <span className="font-label-md text-label-md text-secondary uppercase font-bold tracking-widest">
                  Kinh nghiệm &amp; Cột mốc
                </span>
                <h2 className="font-headline-lg text-headline-lg-mobile sm:text-headline-lg text-primary-container">
                  HÀNH TRÌNH THEO ĐUỔI GIÁ TRỊ CỦA NGHỀ Y
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Quá trình trui rèn chuyên môn qua các bệnh viện lớn và liên tục nghiên cứu để đem lại giải pháp y khoa tối ưu cho cộng đồng người bệnh.
                </p>
              </div>

              {/* Timeline Component */}
              <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
                {TIMELINE_STEPS.map((step) => (
                  <div
                    key={step.year}
                    className="p-6 rounded-2xl bg-surface-container-lowest shadow-sm space-y-4 relative flex flex-col justify-between"
                  >
                    <div className="flex items-center justify-between">
                      <span
                        className={`font-headline-lg text-headline-lg font-black ${step.yearColorClass}`}
                      >
                        {step.year}
                      </span>
                      <span
                        className={`px-3 py-1 rounded-full text-label-sm font-bold ${step.badgeClass}`}
                      >
                        {step.badge}
                      </span>
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-title-md text-title-md text-primary font-bold">
                        {step.title}
                      </h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        {step.description}
                      </p>
                    </div>
                    <div
                      className={`w-full h-1.5 rounded-full mt-4 ${step.barClass}`}
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* SECTION 4: LĨNH VỰC CHUYÊN MÔN VÀ CHĂM SÓC SỨC KHỎE (GRID CARDS) */}
          <section
            className="w-full py-20 bg-surface-container-lowest"
            id="chuyen-mon"
          >
            <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-12">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div className="space-y-3 max-w-2xl">
                  <span className="font-label-md text-label-md text-on-tertiary-container uppercase font-bold tracking-widest flex items-center gap-2">
                    <span className="w-6 h-0.5 bg-on-tertiary-container" />
                    Điều trị chuẩn y khoa
                  </span>
                  <h2 className="font-headline-lg text-headline-lg-mobile sm:text-headline-lg text-primary-container">
                    LĨNH VỰC CHUYÊN MÔN &amp; DỊCH VỤ ĐIỀU TRỊ
                  </h2>
                  <p className="font-body-lg text-body-lg text-on-surface-variant">
                    Giải pháp toàn diện từ chẩn đoán chính xác đến can thiệp sinh học không phẫu thuật, giúp bệnh nhân lấy lại biên độ vận động vững chãi.
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    className="px-6 py-3 rounded-xl bg-on-tertiary-container hover:bg-[#bd160f] text-on-tertiary font-label-md text-label-md shadow-sm transition-all flex items-center gap-2"
                    onClick={() => handleOpenBooking()}
                  >
                    <span className="material-symbols-outlined text-[18px]">
                      medical_information
                    </span>
                    <span>TƯ VẤN PHÁC ĐỒ PHÙ HỢP</span>
                  </button>
                </div>
              </div>

              {/* 8 Specialty Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {SPECIALTIES.map((spec) => (
                  <div
                    key={spec.id}
                    onClick={() => setSelectedSpecialty(spec)}
                    className="rounded-2xl bg-surface-container-low shadow-sm overflow-hidden flex flex-col justify-between hover:-translate-y-1 transition-all group cursor-pointer"
                  >
                    <div className="h-44 w-full overflow-hidden bg-surface-container-high relative">
                      <img
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        src={spec.image}
                        alt={spec.alt}
                      />
                      <div
                        className={`absolute top-3 left-3 w-10 h-10 rounded-xl bg-surface-container-lowest/90 backdrop-blur shadow-sm flex items-center justify-center ${
                          spec.accentColor === 'secondary'
                            ? 'text-secondary'
                            : 'text-on-tertiary-container'
                        }`}
                      >
                        <span className="material-symbols-outlined text-[24px]">
                          {spec.icon}
                        </span>
                      </div>
                    </div>

                    <div className="p-5 flex flex-col justify-between flex-1 gap-4">
                      <h3 className="font-title-lg text-title-lg text-primary font-bold">
                        {spec.title}
                      </h3>
                      <div
                        className={`pt-2 flex items-center justify-between border-t border-surface-variant/10 font-bold font-label-sm text-label-sm ${
                          spec.accentColor === 'secondary'
                            ? 'text-secondary hover:text-on-secondary-fixed-variant'
                            : 'text-on-tertiary-container hover:text-[#bd160f]'
                        }`}
                      >
                        <span>{spec.ctaLabel}</span>
                        <span className="material-symbols-outlined text-[20px]">
                          chevron_right
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* SECTION 5: CHUYÊN ĐỀ PRP - ỨNG DỤNG Y HỌC TIẾN BỘ */}
          <section className="w-full py-20 bg-surface" id="prp-section">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
              <div className="p-8 lg:p-12 rounded-3xl bg-surface-container-lowest shadow-xl">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                  <div className="lg:col-span-7 space-y-6">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm font-bold">
                      <span className="material-symbols-outlined text-[18px]">
                        verified
                      </span>
                      Y HỌC TÁI TẠO SINH HỌC
                    </div>

                    <h2 className="font-headline-lg text-headline-lg-mobile sm:text-headline-lg text-primary-container leading-tight">
                      Y HỌC TÁI TẠO SINH HỌC — ỨNG DỤNG Y HỌC TIẾN BỘ TRONG CHĂM SÓC CƠ XƯƠNG KHỚP
                    </h2>

                    <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                      Liệu pháp huyết tương giàu tiểu cầu (PRP) là kỹ thuật y học tái tạo tự thân tiên tiến, chiết xuất trực tiếp từ chính mẫu máu của người bệnh qua quy trình ly tâm chuẩn vô khuẩn. Các yếu tố tăng trưởng tự nhiên (PDGF, TGF-β) phóng thích giúp kích thích tái tạo mô sụn, phục hồi tổn thương gân cơ mà tuyệt đối không lo nguy cơ đào thải hay phản ứng phụ.
                    </p>

                    <p className="font-body-md text-body-md text-on-surface leading-relaxed font-medium">
                      Phương pháp can thiệp bảo tồn tối ưu cho các bệnh lý thoái hóa khớp gối, viêm điểm bám gân, rách bán phần cơ bắp mà không cần phẫu thuật xâm lấn.
                    </p>

                    <div className="pt-4 flex flex-wrap items-center gap-4">
                      <button
                        type="button"
                        className="px-7 py-3.5 rounded-xl bg-on-tertiary-container hover:bg-[#bd160f] text-on-tertiary font-label-md text-label-md transition-all shadow-[0_4px_16px_rgba(255,84,66,0.35)] flex items-center gap-2.5"
                        onClick={() => handleOpenBooking('Tư vấn tiêm PRP')}
                      >
                        <span className="material-symbols-outlined text-[20px]">
                          help_center
                        </span>
                        <span>TƯ VẤN PHÁC ĐỒ PRP PHÙ HỢP</span>
                      </button>

                      <div className="flex items-center gap-2 text-secondary font-label-sm text-label-sm font-bold">
                        <span className="material-symbols-outlined text-[20px]">
                          verified_user
                        </span>
                        <span>Chuẩn hóa vô khuẩn 100%</span>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-5 flex flex-col space-y-4">
                    <div className="rounded-2xl overflow-hidden shadow-lg bg-surface-container-high aspect-[4/3] lg:aspect-square relative group">
                      <img
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        alt="Quy trình chiết tách ly tâm huyết tương giàu tiểu cầu PRP trong lab y học tái tạo hiện đại"
                        src="/images/prp-feature.jpg"
                      />
                    </div>
                    <div className="p-4 rounded-xl bg-surface-container-low text-on-surface text-center">
                      <p className="font-body-sm text-body-sm italic text-on-surface-variant">
                        * Liệu pháp được thực hiện dưới hướng dẫn của siêu âm định vị bởi Bác sĩ chuyên khoa nhằm đưa hoạt chất chính xác tới vị trí tổn thương.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 6: CHĂM SÓC SỨC KHỎE CHỦ ĐỘNG (PREVENTIVE HEALTHCARE) */}
          <section
            className="w-full py-20 bg-gradient-to-b from-[#f0f7fd] via-[#f7faff] to-surface text-on-surface border-t border-surface-variant/30"
            id="lifestyle-medicine"
          >
            <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-12">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div className="space-y-3 max-w-2xl">
                  <span className="font-label-md text-label-md text-secondary uppercase font-bold tracking-widest flex items-center gap-2">
                    <span className="w-6 h-0.5 bg-secondary" />Y học lối sống &amp; Dự phòng
                  </span>
                  <h2 className="font-headline-lg text-headline-lg-mobile sm:text-headline-lg text-primary-container">
                    CHỦ ĐỘNG CHĂM SÓC SỨC KHỎE — NÂNG CAO CHẤT LƯỢNG CUỘC SỐNG
                  </h2>
                  <p className="font-body-lg text-body-lg text-on-surface-variant">
                    Sáu trụ cột thiết yếu giúp bảo vệ hệ vận động dẻo dai, ngăn ngừa thoái hóa sớm và duy trì sự chủ động vận động dài lâu.
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href="#booking-section"
                    className="px-6 py-3 rounded-xl bg-secondary hover:bg-on-secondary-container text-on-secondary font-label-md text-label-md shadow-sm transition-all flex items-center gap-2"
                  >
                    <span className="material-symbols-outlined text-[18px]">
                      health_and_safety
                    </span>
                    <span>TƯ VẤN SỨC KHỎE CHỦ ĐỘNG</span>
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {LIFESTYLE_PILLARS.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => setSelectedLifestyle(item)}
                    className="rounded-2xl bg-surface-container-low shadow-sm overflow-hidden flex flex-col justify-between hover:-translate-y-1 transition-all group cursor-pointer"
                  >
                    <div className="h-44 w-full overflow-hidden bg-surface-container-high relative">
                      <img
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        src={item.image}
                        alt={item.alt}
                      />
                      <div
                        className={`absolute top-3 left-3 w-10 h-10 rounded-xl bg-surface-container-lowest/90 backdrop-blur shadow-sm flex items-center justify-center ${
                          item.accentColor === 'secondary'
                            ? 'text-secondary'
                            : 'text-on-tertiary-container'
                        }`}
                      >
                        <span className="material-symbols-outlined text-[24px]">
                          {item.icon}
                        </span>
                      </div>
                    </div>

                    <div className="p-5 flex flex-col justify-between flex-1 gap-4">
                      <h3 className="font-title-lg text-title-lg text-primary font-bold">
                        {item.title}
                      </h3>
                      <div
                        className={`pt-2 flex items-center justify-between border-t border-surface-variant/10 font-bold font-label-sm text-label-sm ${
                          item.accentColor === 'secondary'
                            ? 'text-secondary'
                            : 'text-on-tertiary-container'
                        }`}
                      >
                        <span className="flex items-center gap-1">
                          <span className="material-symbols-outlined text-[16px]">
                            {item.badgeIcon}
                          </span>
                          {item.badgeText}
                        </span>
                        <span className="material-symbols-outlined text-[20px]">
                          chevron_right
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* SECTION 7: HOẠT ĐỘNG CHUYÊN MÔN & HỘI NGHỊ */}
          <section
            className="w-full py-20 bg-surface-container-lowest"
            id="hoat-dong-chuyen-mon"
          >
            <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-12">
              <div className="text-center max-w-3xl mx-auto space-y-3">
                <span className="font-label-md text-label-md text-secondary uppercase font-bold tracking-widest">
                  Nghiên cứu &amp; Đào tạo liên tục
                </span>
                <h2 className="font-headline-lg text-headline-lg-mobile sm:text-headline-lg text-primary-container">
                  KHÔNG NGỪNG HỌC HỎI ĐỂ CHĂM SÓC SỨC KHỎE TỐT HƠN
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Bác sĩ Trần Minh thường xuyên tham dự các hội nghị chuyên ngành Cơ Xương Khớp, Phục hồi chức năng và Y học thể thao toàn quốc nhằm cập nhật tiến bộ mới nhất.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {ACTIVITIES.map((act) => (
                  <div
                    key={act.id}
                    className="rounded-2xl overflow-hidden bg-surface-container-low shadow-sm flex flex-col"
                  >
                    <div className="aspect-[16/10] overflow-hidden bg-surface-container-high">
                      <img
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        alt={act.alt}
                        src={act.image}
                      />
                    </div>
                    <div className="p-6 space-y-2 flex-1 flex flex-col justify-between">
                      <div className="space-y-1">
                        <span
                          className={`font-label-sm text-label-sm font-bold ${
                            act.accentColor === 'secondary'
                              ? 'text-secondary'
                              : 'text-on-tertiary-container'
                          }`}
                        >
                          {act.category}
                        </span>
                        <h3 className="font-title-md text-title-md text-primary font-bold">
                          {act.title}
                        </h3>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">
                          {act.description}
                        </p>
                      </div>
                      <span className="font-label-sm text-label-sm text-on-surface-variant font-medium pt-2">
                        {act.locationMeta}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* SECTION 8: BẰNG CẤP & CHỨNG CHỈ XÁC THỰC */}
          <section className="w-full py-20 bg-surface" id="credentials">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-12">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div className="space-y-3 max-w-2xl">
                  <span className="font-label-md text-label-md text-primary font-bold tracking-widest uppercase flex items-center gap-2">
                    <span className="w-6 h-0.5 bg-primary" />
                    Minh bạch học thuật &amp; Pháp lý hành nghề
                  </span>
                  <h2 className="font-headline-lg text-headline-lg-mobile sm:text-headline-lg text-primary-container">
                    NỀN TẢNG CHUYÊN MÔN VÀ BẰNG CẤP XÁC THỰC
                  </h2>
                  <p className="font-body-lg text-body-lg text-on-surface-variant">
                    Mọi phác đồ điều trị đều được xây dựng trên bằng cấp chuyên môn chính quy và chứng chỉ hành nghề được cơ quan y tế có thẩm quyền cấp phép.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {CERTIFICATES.map((cert) => (
                  <div
                    key={cert.id}
                    onClick={() => setSelectedCertificate(cert)}
                    className="p-6 rounded-2xl bg-surface-container-lowest shadow-sm space-y-4 hover:shadow-md transition-all cursor-pointer group"
                  >
                    <div className="aspect-[4/3] rounded-xl bg-surface-container-high overflow-hidden relative">
                      <img
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        alt={cert.alt}
                        src={cert.image}
                      />
                      <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-lg bg-primary-container/80 backdrop-blur text-surface-bright font-label-sm text-label-sm flex items-center gap-1 opacity-90 group-hover:opacity-100">
                        <span className="material-symbols-outlined text-[16px]">
                          zoom_in
                        </span>
                        <span>Xem rõ</span>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <span
                        className={`font-label-sm text-label-sm font-bold ${
                          cert.accentColor === 'secondary'
                            ? 'text-secondary'
                            : 'text-on-tertiary-container'
                        }`}
                      >
                        {cert.issuer}
                      </span>
                      <h3 className="font-title-md text-title-md text-primary font-bold">
                        {cert.title}
                      </h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        {cert.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* SECTION 9: VIDEO GIÁO DỤC SỨC KHỎE TỪ BÁC SĨ */}
          <section
            className="w-full py-20 bg-surface-container-lowest"
            id="video-section"
          >
            <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-12">
              <div className="text-center max-w-3xl mx-auto space-y-3">
                <span className="font-label-md text-label-md text-on-tertiary-container uppercase font-bold tracking-widest">
                  Video Y Khoa Trực Quan
                </span>
                <h2 className="font-headline-lg text-headline-lg-mobile sm:text-headline-lg text-primary-container">
                  LẮNG NGHE NHỮNG CHIA SẺ TỪ BÁC SĨ TRẦN MINH
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Theo dõi các video hướng dẫn động tác phục hồi, phân tích nguyên nhân đau nhức và lời khuyên y khoa chuẩn xác, dễ hiểu dành cho mọi gia đình.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Main Featured Video Player */}
                <div className="lg:col-span-8 rounded-3xl overflow-hidden bg-primary-container text-on-primary shadow-xl">
                  <div
                    onClick={() => setIsPlayingVideoModal(true)}
                    className="relative aspect-[16/9] bg-surface-variant/30 flex items-center justify-center group cursor-pointer"
                  >
                    <img
                      className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500"
                      alt={activeVideo.alt}
                      src={activeVideo.thumbnail}
                    />
                    <div className="absolute inset-0 bg-primary/30 flex items-center justify-center">
                      <div className="w-20 h-20 rounded-full bg-on-tertiary-container text-on-tertiary flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                        <span className="material-symbols-outlined symbol-filled text-[40px]">
                          play_arrow
                        </span>
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 px-4 py-2 rounded-xl bg-primary-container/80 backdrop-blur text-surface-bright flex items-center justify-between gap-2">
                      <span className="font-label-md text-label-md font-bold truncate">
                        {activeVideo.badgeTitle}
                      </span>
                      <span className="font-label-sm text-label-sm text-secondary-fixed shrink-0">
                        {activeVideo.duration} Phút
                      </span>
                    </div>
                  </div>
                  <div className="p-6 space-y-3">
                    <h3 className="font-title-lg text-title-lg font-bold text-surface-bright">
                      {activeVideo.title}
                    </h3>
                    <p className="font-body-md text-body-md text-on-primary-container leading-relaxed">
                      {activeVideo.description}
                    </p>
                  </div>
                </div>

                {/* Video Playlist Column */}
                <div className="lg:col-span-4 space-y-4">
                  <div className="p-4 rounded-2xl bg-surface-container flex items-center justify-between">
                    <span className="font-title-md text-title-md font-bold text-primary">
                      Video Tư Vấn Mới Nhất
                    </span>
                    <span className="font-label-sm text-label-sm text-secondary font-bold">
                      120+ Video
                    </span>
                  </div>

                  <div className="space-y-3">
                    {playlistVideos.map((vid) => {
                      const isSelected = activeVideo.id === vid.id;
                      return (
                        <div
                          key={vid.id}
                          onClick={() => setActiveVideo(vid)}
                          className={`p-3 rounded-2xl transition-colors flex gap-3 cursor-pointer group ${
                            isSelected
                              ? 'bg-surface-container ring-2 ring-secondary'
                              : 'bg-surface-container-low hover:bg-surface-container'
                          }`}
                        >
                          <div className="w-28 h-20 rounded-xl overflow-hidden bg-surface-container-high shrink-0 relative">
                            <img
                              className="w-full h-full object-cover"
                              alt={vid.alt}
                              src={vid.thumbnail}
                            />
                            <div className="absolute bottom-1 right-1 px-1.5 py-0.5 rounded bg-primary/80 text-[10px] text-white font-bold">
                              {vid.duration}
                            </div>
                          </div>
                          <div className="flex flex-col justify-between py-1">
                            <h4 className="font-label-md text-label-md text-primary font-bold line-clamp-2 group-hover:text-secondary transition-colors">
                              {vid.title}
                            </h4>
                            <span className="font-body-sm text-body-sm text-on-surface-variant text-xs">
                              {vid.viewsMeta}
                            </span>
                          </div>
                        </div>
                      );
                    })}

                    {activeVideo.id !== VIDEOS[0].id && (
                      <button
                        type="button"
                        onClick={() => setActiveVideo(VIDEOS[0])}
                        className="w-full py-2.5 rounded-xl bg-surface-container-low hover:bg-surface-container text-secondary font-label-sm text-label-sm font-bold transition-colors"
                      >
                        ← Quay lại Video Nổi Bật (Đĩa đệm L4-L5)
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 10: CÂU CHUYỆN KHÁCH HÀNG & PHỤC HỒI (RECOVERY STORIES) */}
          <section className="w-full py-20 bg-surface" id="cau-chuyen-khach-hang">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-12">
              <div className="text-center max-w-3xl mx-auto space-y-3">
                <span className="font-label-md text-label-md text-secondary uppercase font-bold tracking-widest">
                  Hiệu quả thực tế
                </span>
                <h2 className="font-headline-lg text-headline-lg-mobile sm:text-headline-lg text-primary-container">
                  MỖI HÀNH TRÌNH PHỤC HỒI LÀ MỘT CÂU CHUYỆN ĐÁNG TRÂN TRỌNG
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Không có niềm vui nào lớn hơn việc nhìn thấy bệnh nhân tìm lại những bước đi thảnh thơi, tự chủ sinh hoạt mà không còn bị cơn đau hành hạ.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {TESTIMONIALS.map((story) => (
                  <div
                    key={story.id}
                    className="p-6 rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col justify-between space-y-6"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center gap-1 text-on-tertiary-container">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <span
                            key={star}
                            className="material-symbols-outlined symbol-filled text-[20px]"
                          >
                            star
                          </span>
                        ))}
                      </div>
                      <p className="font-body-md text-body-md text-on-surface-variant italic leading-relaxed">
                        {story.quote}
                      </p>
                    </div>

                    <div className="pt-4 flex items-center gap-3 border-t-0">
                      <div className="w-12 h-12 rounded-full bg-surface-container-high overflow-hidden shrink-0">
                        <img
                          className="w-full h-full object-cover"
                          alt={story.alt}
                          src={story.avatar}
                        />
                      </div>
                      <div>
                        <h3 className="font-title-md text-title-md text-primary font-bold">
                          {story.patientName}
                        </h3>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">
                          {story.patientMeta}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-xl bg-surface-container-low text-center max-w-xl mx-auto">
                <p className="font-body-sm text-body-sm text-on-surface-variant italic">
                  * Ghi chú y khoa: Kết quả điều trị có thể khác nhau tùy theo mức độ tổn thương thực thể và sự tuân thủ hướng dẫn tập luyện của từng người bệnh.
                </p>
              </div>
            </div>
          </section>

          {/* SECTION 11: THƯ VIỆN KIẾN THỨC Y KHOA (BLOG) */}
          <section
            className="w-full py-20 bg-surface-container-lowest"
            id="kien-thuc-y-khoa"
          >
            <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-12">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div className="space-y-3 max-w-2xl">
                  <span className="font-label-md text-label-md text-secondary uppercase font-bold tracking-widest flex items-center gap-2">
                    <span className="w-6 h-0.5 bg-secondary" />
                    Cẩm nang y khoa thường thức
                  </span>
                  <h2 className="font-headline-lg text-headline-lg-mobile sm:text-headline-lg text-primary-container">
                    KIẾN THỨC Y KHOA CÙNG BÁC SĨ TRẦN MINH
                  </h2>
                  <p className="font-body-lg text-body-lg text-on-surface-variant">
                    Bài viết chia sẻ kiến thức chuẩn xác, ngôn từ bình dân, dễ hiểu giúp cộng đồng nhận diện bệnh sớm và tránh các phương pháp chữa mẹo nguy hiểm.
                  </p>
                </div>

                {/* Category Filter Pills */}
                <div className="flex flex-wrap items-center gap-2">
                  {['Tất cả bài viết', 'Khớp Gối', 'Cột Sống', 'Dinh dưỡng'].map(
                    (cat) => {
                      const isActive = activeBlogCategory === cat;
                      return (
                        <button
                          key={cat}
                          type="button"
                          onClick={() => setActiveBlogCategory(cat)}
                          className={`px-4 py-2 rounded-full font-label-sm text-label-sm transition-colors ${
                            isActive
                              ? 'bg-secondary-fixed text-on-secondary-fixed font-bold'
                              : 'bg-surface-container text-on-surface-variant font-semibold hover:bg-surface-container-high cursor-pointer'
                          }`}
                        >
                          {cat}
                        </button>
                      );
                    }
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {filteredBlogPosts.map((article) => (
                  <article
                    key={article.id}
                    onClick={() => setSelectedBlogPost(article)}
                    className="rounded-2xl bg-surface-container-low shadow-sm overflow-hidden flex flex-col justify-between hover:-translate-y-1 transition-transform cursor-pointer group"
                  >
                    <div>
                      <div className="aspect-[16/10] overflow-hidden bg-surface-container-high">
                        <img
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          alt={article.alt}
                          src={article.image}
                        />
                      </div>
                      <div className="p-6 space-y-3">
                        <div
                          className={`flex items-center gap-2 font-label-sm text-label-sm font-bold ${
                            article.accentColor === 'secondary'
                              ? 'text-secondary'
                              : 'text-on-tertiary-container'
                          }`}
                        >
                          <span className="material-symbols-outlined text-[16px]">
                            schedule
                          </span>
                          <span>{article.readTimeMeta}</span>
                        </div>
                        <h3
                          className={`font-title-lg text-title-lg text-primary font-bold transition-colors ${
                            article.accentColor === 'secondary'
                              ? 'group-hover:text-secondary'
                              : 'group-hover:text-on-tertiary-container'
                          }`}
                        >
                          {article.title}
                        </h3>
                        <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-3">
                          {article.excerpt}
                        </p>
                      </div>
                    </div>

                    <div className="p-6 pt-0 flex items-center justify-between">
                      <span
                        className={`font-label-sm text-label-sm font-bold ${
                          article.accentColor === 'secondary'
                            ? 'text-secondary'
                            : 'text-on-tertiary-container'
                        }`}
                      >
                        ĐỌC CHI TIẾT
                      </span>
                      <span
                        className={`material-symbols-outlined text-[20px] ${
                          article.accentColor === 'secondary'
                            ? 'text-secondary'
                            : 'text-on-tertiary-container'
                        }`}
                      >
                        arrow_forward
                      </span>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* SECTION 12: KẾT NỐI MẠNG XÃ HỘI CHÍNH THỨC */}
          <section className="w-full py-16 bg-surface" id="ket-noi-mang-xa-hoi">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
              <div className="p-8 lg:p-12 rounded-3xl bg-surface-container-high/60 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-8">
                <div className="space-y-3 text-center lg:text-left max-w-xl">
                  <span className="font-label-md text-label-md text-secondary font-bold uppercase tracking-wider">
                    Cộng đồng sức khỏe trực tuyến
                  </span>
                  <h2 className="font-headline-md text-headline-md text-primary-container">
                    THEO DÕI VÀ KẾT NỐI VỚI BÁC SĨ MINH
                  </h2>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Nhận lời khuyên y khoa hàng ngày, đặt câu hỏi trực tiếp và tham gia cộng đồng người cao tuổi sống vui sống khỏe cùng Bác sĩ Trần Minh.
                  </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full lg:w-auto">
                  {SOCIAL_CHANNELS.map((ch) => {
                    const iconBoxClass =
                      ch.colorVariant === 'tertiary'
                        ? 'bg-on-tertiary-container/10 text-on-tertiary-container group-hover:bg-on-tertiary-container group-hover:text-on-tertiary'
                        : ch.colorVariant === 'primary'
                        ? 'bg-primary-container/10 text-primary-container group-hover:bg-primary-container group-hover:text-on-primary'
                        : 'bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-on-secondary';

                    return (
                      <a
                        key={ch.id}
                        className="p-4 rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col items-center text-center space-y-2 hover:scale-105 transition-transform group"
                        href={ch.href}
                      >
                        <div
                          className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${iconBoxClass}`}
                        >
                          <span className="material-symbols-outlined text-[28px]">
                            {ch.icon}
                          </span>
                        </div>
                        <span className="font-label-md text-label-md text-primary font-bold">
                          {ch.name}
                        </span>
                        <span className="font-body-sm text-body-sm text-on-surface-variant text-xs">
                          {ch.stats}
                        </span>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 13: ĐĂNG KÝ LỊCH KHÁM TRỰC TUYẾN */}
          <section
            className="w-full py-20 bg-surface-container-lowest"
            id="booking-section"
          >
            <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-12">
              <div className="text-center max-w-3xl mx-auto space-y-3">
                <span className="font-label-md text-label-md text-on-tertiary-container uppercase font-bold tracking-widest">
                  Tiếp nhận &amp; Đặt hẹn chuyên gia
                </span>
                <h2 className="font-headline-lg text-headline-lg-mobile sm:text-headline-lg text-primary-container">
                  ĐĂNG KÝ LỊCH KHÁM CÙNG BÁC SĨ TRẦN MINH
                </h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant">
                  Để đảm bảo thời gian thăm khám chu đáo và không phải chờ đợi lâu, kính mời quý bệnh nhân vui lòng đăng ký lịch hẹn trước qua hệ thống.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                {/* Clinic Information Card */}
                <div className="lg:col-span-5 rounded-3xl bg-primary-container text-on-primary p-8 lg:p-10 flex flex-col justify-between space-y-8 shadow-xl">
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <span className="font-label-sm text-label-sm text-secondary-fixed uppercase tracking-wider font-bold">
                        Cơ sở hoạt động
                      </span>
                      <h3 className="font-headline-sm text-headline-sm text-surface-bright">
                        Phòng khám chuyên khoa
                      </h3>
                    </div>

                    {CLINIC_LOCATIONS.map((loc) => (
                      <div
                        key={loc.id}
                        className="p-5 rounded-2xl bg-[#033b59] space-y-2"
                      >
                        <div className="flex items-center gap-2 text-surface-bright font-title-md text-title-md font-bold">
                          <span className="material-symbols-outlined text-secondary-fixed text-[22px]">
                            {loc.icon}
                          </span>
                          <span>{loc.name}</span>
                        </div>
                        <p className="font-body-md text-body-md text-on-primary-container leading-relaxed">
                          {loc.address}
                        </p>
                        <p className="font-label-sm text-label-sm text-secondary-fixed pt-1">
                          {loc.schedule}
                        </p>
                      </div>
                    ))}

                    {/* Hotline Support */}
                    <div className="space-y-2 pt-2">
                      <span className="font-label-sm text-label-sm text-on-primary-container">
                        Tổng đài tiếp nhận trực tiếp:
                      </span>
                      <div className="flex flex-col gap-1">
                        <a
                          className="font-headline-sm text-headline-sm text-surface-bright font-extrabold hover:text-secondary-fixed transition-colors"
                          href={`tel:${DOCTOR_INFO.hotlinePrimaryTel}`}
                        >
                          {DOCTOR_INFO.hotlinePrimary}
                        </a>
                        <a
                          className="font-headline-sm text-headline-sm text-secondary-fixed font-extrabold hover:text-white transition-colors"
                          href={`tel:${DOCTOR_INFO.hotlineSecondaryTel}`}
                        >
                          {DOCTOR_INFO.hotlineSecondary}
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-surface-container-high/10 text-on-primary-container font-body-sm text-body-sm flex items-center gap-3">
                    <span className="material-symbols-outlined text-[24px] text-secondary-fixed shrink-0">
                      verified_user
                    </span>
                    <span>
                      Mọi thông tin bệnh án và số điện thoại được bảo mật 100% theo tiêu chuẩn y khoa.
                    </span>
                  </div>
                </div>

                {/* Interactive Booking Form */}
                <div className="lg:col-span-7 rounded-3xl bg-surface-container-low p-8 lg:p-10 shadow-lg flex flex-col justify-between">
                  <form
                    className="space-y-6"
                    id="main-appointment-form"
                    onSubmit={handleInlineBookingSubmit}
                  >
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <label className="font-label-md text-label-md text-primary font-bold block">
                          Họ và tên bệnh nhân{' '}
                          <span className="text-on-tertiary-container">*</span>
                        </label>
                        <input
                          className="w-full h-14 px-4 rounded-xl bg-surface-container-lowest text-on-surface font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-secondary transition-all shadow-sm"
                          placeholder="Ví dụ: Nguyễn Văn An"
                          required
                          type="text"
                          value={inlineFullName}
                          onChange={(e) => setInlineFullName(e.target.value)}
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="font-label-md text-label-md text-primary font-bold block">
                          Số điện thoại liên hệ{' '}
                          <span className="text-on-tertiary-container">*</span>
                        </label>
                        <input
                          className="w-full h-14 px-4 rounded-xl bg-surface-container-lowest text-on-surface font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-secondary transition-all shadow-sm"
                          placeholder="Ví dụ: 0912 345 678"
                          required
                          type="tel"
                          value={inlinePhone}
                          onChange={(e) => setInlinePhone(e.target.value)}
                        />
                      </div>
                    </div>

                    {inlineError && (
                      <div className="p-4 rounded-xl bg-error-container text-on-error-container font-body-sm text-body-sm flex items-center gap-2">
                        <span className="material-symbols-outlined text-[20px]">
                          error
                        </span>
                        <span>{inlineError}</span>
                      </div>
                    )}

                    <div className="pt-2">
                      <button
                        className="w-full py-4 rounded-xl bg-on-tertiary-container hover:bg-[#bd160f] disabled:opacity-60 text-on-tertiary font-label-lg text-label-lg transition-all shadow-[0_4px_16px_rgba(255,84,66,0.35)] flex items-center justify-center gap-3"
                        type="submit"
                        disabled={inlineSubmitting}
                      >
                        <span className="material-symbols-outlined text-[22px]">
                          how_to_reg
                        </span>
                        <span>
                          {inlineSubmitting
                            ? 'ĐANG TIẾP NHẬN HỒ SƠ...'
                            : 'ĐĂNG KÝ TƯ VẤN NGAY'}
                        </span>
                      </button>
                    </div>

                    <p className="font-body-sm text-body-sm text-center text-on-surface-variant pt-1">
                      Bác sĩ Minh và trợ lý sẽ liên hệ lại trực tiếp qua điện thoại trong vòng 15-30 phút.
                    </p>
                  </form>

                  {/* Success Notification Banner */}
                  {inlineSuccessCode && (
                    <div
                      className="mt-4 p-5 rounded-2xl bg-secondary-fixed text-on-secondary-fixed flex items-start gap-3 animate-fade-in"
                      id="booking-success-msg"
                    >
                      <span className="material-symbols-outlined text-[28px] text-secondary shrink-0">
                        check_circle
                      </span>
                      <div className="space-y-1">
                        <h4 className="font-title-md text-title-md font-bold">
                          Đã tiếp nhận yêu cầu khám bệnh thành công! (Mã hồ sơ:{' '}
                          {inlineSuccessCode})
                        </h4>
                        <p className="font-body-sm text-body-sm leading-relaxed">
                          Đội ngũ trợ lý Bác sĩ Minh sẽ gọi điện trực tiếp qua số điện thoại của quý khách trong vòng 15-30 phút để xác nhận khung giờ chính xác. Trân trọng cảm ơn!
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* SECTION 14: POPUP/MODAL ĐẶT LỊCH KHÁM TÍCH HỢP */}
      <BookingModal
        isOpen={bookingModalOpen}
        defaultConcern={bookingDefaultConcern}
        onClose={() => setBookingModalOpen(false)}
      />

      {/* INTERACTIVE MODAL: CHI TIẾT CHUYÊN KHOA (Section 4) */}
      {selectedSpecialty && (
        <div
          className="fixed inset-0 z-50 bg-primary/60 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
          role="dialog"
          aria-modal="true"
          onClick={(e) => {
            if (e.target === e.currentTarget) setSelectedSpecialty(null);
          }}
        >
          <div className="relative w-full max-w-2xl rounded-3xl bg-surface-container-lowest p-6 lg:p-8 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto">
            <button
              type="button"
              onClick={() => setSelectedSpecialty(null)}
              className="absolute top-5 right-5 w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:text-on-surface"
              aria-label="Đóng"
            >
              <span className="material-symbols-outlined text-[22px]">close</span>
            </button>

            <div className="flex items-center gap-3 pr-10">
              <div className="w-12 h-12 rounded-2xl bg-secondary/10 text-secondary flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[28px]">
                  {selectedSpecialty.icon}
                </span>
              </div>
              <div>
                <span className="font-label-sm text-label-sm text-secondary uppercase font-bold">
                  Chuyên môn điều trị bảo tồn
                </span>
                <h3 className="font-headline-sm text-headline-sm text-primary-container font-bold">
                  {selectedSpecialty.title}
                </h3>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden aspect-[16/9] bg-surface-container-high">
              <img
                src={selectedSpecialty.image}
                alt={selectedSpecialty.alt}
                className="w-full h-full object-cover"
              />
            </div>

            <p className="font-body-lg text-body-lg text-on-surface leading-relaxed">
              {selectedSpecialty.summary}
            </p>

            <div className="p-5 rounded-2xl bg-surface-container-low space-y-3">
              <h4 className="font-title-md text-title-md text-primary font-bold flex items-center gap-2">
                <span className="material-symbols-outlined text-on-tertiary-container text-[22px]">
                  clinical_notes
                </span>
                <span>Triệu chứng thường gặp cần thăm khám sớm:</span>
              </h4>
              <ul className="space-y-2">
                {selectedSpecialty.symptoms.map((sym) => (
                  <li
                    key={sym}
                    className="font-body-md text-body-md text-on-surface-variant flex items-start gap-2"
                  >
                    <span className="material-symbols-outlined text-secondary text-[20px] shrink-0 mt-0.5">
                      check_circle
                    </span>
                    <span>{sym}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-5 rounded-2xl bg-primary-container text-on-primary space-y-2">
              <span className="font-label-sm text-label-sm text-secondary-fixed uppercase font-bold">
                Hướng tiếp cận của ThS.BS. Trần Nhựt Minh
              </span>
              <p className="font-body-md text-body-md text-surface-bright leading-relaxed">
                {selectedSpecialty.approach}
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={() => setSelectedSpecialty(null)}
                className="px-5 py-3 rounded-xl bg-surface-container text-primary font-label-md text-label-md"
              >
                Đóng
              </button>
              <button
                type="button"
                onClick={() => {
                  const topic = selectedSpecialty.bookingTopic;
                  setSelectedSpecialty(null);
                  handleOpenBooking(topic);
                }}
                className="px-6 py-3.5 rounded-xl bg-on-tertiary-container hover:bg-[#bd160f] text-on-tertiary font-label-md text-label-md shadow-md flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-[20px]">
                  calendar_month
                </span>
                <span>ĐẶT LỊCH KHÁM CHUYÊN KHOA NÀY</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* INTERACTIVE MODAL: Y HỌC LỐI SỐNG (Section 6) */}
      {selectedLifestyle && (
        <div
          className="fixed inset-0 z-50 bg-primary/60 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
          role="dialog"
          aria-modal="true"
          onClick={(e) => {
            if (e.target === e.currentTarget) setSelectedLifestyle(null);
          }}
        >
          <div className="relative w-full max-w-xl rounded-3xl bg-surface-container-lowest p-6 lg:p-8 shadow-2xl space-y-5">
            <button
              type="button"
              onClick={() => setSelectedLifestyle(null)}
              className="absolute top-5 right-5 w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:text-on-surface"
              aria-label="Đóng"
            >
              <span className="material-symbols-outlined text-[22px]">close</span>
            </button>

            <div className="space-y-1 pr-10">
              <span className="font-label-sm text-label-sm text-secondary uppercase font-bold">
                Lời khuyên Y học lối sống • {selectedLifestyle.badgeText}
              </span>
              <h3 className="font-headline-sm text-headline-sm text-primary-container font-bold">
                {selectedLifestyle.title}
              </h3>
            </div>

            <div className="rounded-2xl overflow-hidden aspect-[16/9] bg-surface-container-high">
              <img
                src={selectedLifestyle.image}
                alt={selectedLifestyle.alt}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-5 rounded-2xl bg-surface-container-low">
              <p className="font-body-lg text-body-lg text-on-surface leading-relaxed">
                {selectedLifestyle.advice}
              </p>
            </div>

            <div className="flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setSelectedLifestyle(null)}
                className="px-5 py-3 rounded-xl bg-surface-container text-primary font-label-md text-label-md"
              >
                Đã hiểu
              </button>
              <button
                type="button"
                onClick={() => {
                  setSelectedLifestyle(null);
                  handleOpenBooking();
                }}
                className="px-6 py-3 rounded-xl bg-secondary text-on-secondary font-label-md text-label-md"
              >
                Đặt lịch tầm soát định kỳ
              </button>
            </div>
          </div>
        </div>
      )}

      {/* INTERACTIVE LIGHTBOX: BẰNG CẤP & CHỨNG CHỈ (Section 8) */}
      {selectedCertificate && (
        <div
          className="fixed inset-0 z-50 bg-primary/75 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in"
          role="dialog"
          aria-modal="true"
          onClick={(e) => {
            if (e.target === e.currentTarget) setSelectedCertificate(null);
          }}
        >
          <div className="relative w-full max-w-2xl rounded-3xl bg-surface-container-lowest p-6 lg:p-8 shadow-2xl space-y-5">
            <button
              type="button"
              onClick={() => setSelectedCertificate(null)}
              className="absolute top-5 right-5 w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:text-on-surface"
              aria-label="Đóng"
            >
              <span className="material-symbols-outlined text-[22px]">close</span>
            </button>

            <div className="space-y-1 pr-10">
              <span className="font-label-sm text-label-sm text-secondary font-bold uppercase">
                {selectedCertificate.issuer}
              </span>
              <h3 className="font-headline-sm text-headline-sm text-primary-container font-bold">
                {selectedCertificate.title}
              </h3>
            </div>

            <div className="rounded-2xl overflow-hidden bg-surface-container-high border border-outline-variant/30">
              <img
                src={selectedCertificate.image}
                alt={selectedCertificate.alt}
                className="w-full max-h-[60vh] object-contain mx-auto"
              />
            </div>

            <div className="p-4 rounded-xl bg-surface-container-low flex items-start gap-3">
              <span className="material-symbols-outlined text-secondary text-[24px] shrink-0">
                verified
              </span>
              <div className="space-y-1">
                <p className="font-body-md text-body-md text-primary font-semibold">
                  {selectedCertificate.verificationNote}
                </p>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  {selectedCertificate.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* INTERACTIVE MODAL: VIDEO BÀI GIẢNG Y KHOA (Section 9) */}
      {isPlayingVideoModal && (
        <div
          className="fixed inset-0 z-50 bg-primary/75 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in"
          role="dialog"
          aria-modal="true"
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsPlayingVideoModal(false);
          }}
        >
          <div className="relative w-full max-w-2xl rounded-3xl bg-primary-container text-on-primary p-6 lg:p-8 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto">
            <button
              type="button"
              onClick={() => setIsPlayingVideoModal(false)}
              className="absolute top-5 right-5 w-10 h-10 rounded-full bg-surface-variant/20 flex items-center justify-center text-surface-bright hover:bg-surface-variant/30"
              aria-label="Đóng video"
            >
              <span className="material-symbols-outlined text-[22px]">close</span>
            </button>

            <div className="space-y-1 pr-10">
              <span className="font-label-sm text-label-sm text-secondary-fixed uppercase font-bold">
                {activeVideo.badgeTitle} • Thời lượng {activeVideo.duration}
              </span>
              <h3 className="font-headline-sm text-headline-sm text-surface-bright font-bold">
                {activeVideo.title}
              </h3>
            </div>

            <div className="relative rounded-2xl overflow-hidden aspect-[16/9] bg-primary">
              <img
                src={activeVideo.thumbnail}
                alt={activeVideo.alt}
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-container via-primary/40 to-transparent flex flex-col items-center justify-center p-6 text-center space-y-3">
                <span className="material-symbols-outlined text-secondary-fixed text-[48px]">
                  smart_display
                </span>
                <p className="font-title-md text-title-md text-surface-bright max-w-md">
                  Tóm tắt nội dung thực hành chính từ video của {DOCTOR_INFO.fullName}
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#033b59] space-y-3">
              <h4 className="font-title-md text-title-md text-secondary-fixed font-bold">
                3 Điểm cốt lõi người bệnh cần nhớ:
              </h4>
              <ul className="space-y-2.5">
                {activeVideo.keyTakeaways.map((point) => (
                  <li
                    key={point}
                    className="font-body-md text-body-md text-surface-bright flex items-start gap-2.5"
                  >
                    <span className="material-symbols-outlined text-secondary-fixed text-[20px] shrink-0 mt-0.5">
                      check_circle
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className="font-body-sm text-body-sm text-on-primary-container">
                {activeVideo.viewsMeta}
              </span>
              <button
                type="button"
                onClick={() => {
                  setIsPlayingVideoModal(false);
                  handleOpenBooking();
                }}
                className="px-6 py-3 rounded-xl bg-on-tertiary-container hover:bg-[#bd160f] text-on-tertiary font-label-md text-label-md flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-[20px]">
                  calendar_month
                </span>
                <span>ĐẶT LỊCH KHÁM TRỰC TIẾP VỚI BÁC SĨ</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* INTERACTIVE MODAL: ĐỌC BÀI VIẾT Y KHOA (Section 11) */}
      {selectedBlogPost && (
        <div
          className="fixed inset-0 z-50 bg-primary/60 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
          role="dialog"
          aria-modal="true"
          onClick={(e) => {
            if (e.target === e.currentTarget) setSelectedBlogPost(null);
          }}
        >
          <div className="relative w-full max-w-2xl rounded-3xl bg-surface-container-lowest p-6 lg:p-8 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto">
            <button
              type="button"
              onClick={() => setSelectedBlogPost(null)}
              className="absolute top-5 right-5 w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:text-on-surface"
              aria-label="Đóng bài viết"
            >
              <span className="material-symbols-outlined text-[22px]">close</span>
            </button>

            <div className="space-y-2 pr-10">
              <div className="flex items-center gap-2 text-secondary font-label-sm text-label-sm font-bold">
                <span className="material-symbols-outlined text-[16px]">
                  schedule
                </span>
                <span>{selectedBlogPost.readTimeMeta}</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-primary-container font-bold leading-snug">
                {selectedBlogPost.title}
              </h3>
            </div>

            <div className="rounded-2xl overflow-hidden aspect-[16/9] bg-surface-container-high">
              <img
                src={selectedBlogPost.image}
                alt={selectedBlogPost.alt}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-4">
              {selectedBlogPost.content.map((para, idx) => (
                <p
                  key={idx}
                  className="font-body-lg text-body-lg text-on-surface leading-relaxed"
                >
                  {para}
                </p>
              ))}
            </div>

            <div className="p-4 rounded-2xl bg-surface-container-low flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <p className="font-title-md text-title-md text-primary font-bold">
                  Tác giả: {DOCTOR_INFO.fullName}
                </p>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  {DOCTOR_INFO.specialtySubtitle}
                </p>
              </div>
              <button
                type="button"
                onClick={() => {
                  setSelectedBlogPost(null);
                  handleOpenBooking();
                }}
                className="px-5 py-3 rounded-xl bg-on-tertiary-container hover:bg-[#bd160f] text-on-tertiary font-label-md text-label-md shrink-0"
              >
                Đặt lịch tư vấn cùng Bác sĩ
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer onOpenBooking={handleOpenBooking} />
    </>
  );
}

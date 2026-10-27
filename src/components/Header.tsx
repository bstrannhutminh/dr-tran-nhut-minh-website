'use client';

import React, { useState } from 'react';
import { DOCTOR_INFO, NAV_ITEMS } from '@/data/siteData';

interface HeaderProps {
  onOpenBooking: (defaultConcern?: string) => void;
  onSelectSpecialty?: (specialtyId: string) => void;
}

export default function Header({ onOpenBooking, onSelectSpecialty }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState(false);

  const handleSubItemClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
    specialtyId?: string
  ) => {
    setMobileMenuOpen(false);
    if (specialtyId && onSelectSpecialty) {
      e.preventDefault();
      const targetEl = document.querySelector(href);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: 'smooth' });
      }
      onSelectSpecialty(specialtyId);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface-container-lowest/95 backdrop-blur-xl shadow-[0_4px_24px_-4px_rgba(0,44,67,0.06)]">
      <div className="h-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between gap-space-lg">
        {/* Brand Logo */}
        <a
          className="flex items-center gap-3 shrink-0"
          data-path="trang-chu"
          href="#trang-chu"
        >
          <div className="w-11 h-11 rounded-xl bg-primary-container flex items-center justify-center text-on-primary font-headline-md text-headline-md tracking-tighter relative select-none">
            <span className="text-[#ff5442] font-extrabold">T</span>
            <span>M</span>
            <span className="absolute -top-1 -right-1 text-on-tertiary-container text-xs font-black">
              +
            </span>
          </div>
          <div className="flex flex-col">
            <span className="font-title-md text-title-md tracking-tight text-primary leading-tight uppercase">
              {DOCTOR_INFO.fullName}
            </span>
            <span className="font-label-sm text-label-sm text-secondary font-medium tracking-normal hidden sm:inline">
              {DOCTOR_INFO.specialtySubtitle}
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav
          className="hidden xl:flex items-center gap-6 font-label-md text-label-md"
          aria-label="Điều hướng chính"
        >
          {NAV_ITEMS.map((item) =>
            item.children ? (
              <div key={item.dataPath} className="relative group py-2">
                <a
                  className="flex items-center gap-1 text-on-surface-variant group-hover:text-on-surface transition-colors cursor-pointer"
                  data-path={item.dataPath}
                  href={item.href}
                >
                  {item.label}
                  <span className="material-symbols-outlined text-[18px]">
                    expand_more
                  </span>
                </a>
                <div className="absolute top-full left-0 hidden group-hover:block w-72 bg-surface-container-lowest rounded-xl shadow-[0_16px_36px_-6px_rgba(0,44,67,0.12)] p-3 space-y-1 border border-outline-variant/20">
                  {item.children.map((sub) => (
                    <a
                      key={sub.dataPath}
                      className="block px-3 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface transition-colors font-body-sm text-body-sm"
                      data-path={sub.dataPath}
                      href={sub.href}
                      onClick={(e) => handleSubItemClick(e, sub.href, sub.specialtyId)}
                    >
                      {sub.label}
                    </a>
                  ))}
                </div>
              </div>
            ) : (
              <a
                key={item.dataPath}
                className="text-on-surface-variant hover:text-on-surface transition-colors py-2"
                data-path={item.dataPath}
                href={item.href}
              >
                {item.label}
              </a>
            )
          )}
        </nav>

        {/* Right Hotline + CTA + Mobile Menu Button */}
        <div className="flex items-center gap-3 sm:gap-space-md shrink-0">
          <div className="hidden lg:flex flex-col text-right">
            <span className="font-label-sm text-label-sm text-on-surface-variant">
              Hotline 24/7 Bác sĩ
            </span>
            <a
              href={`tel:${DOCTOR_INFO.hotlinePrimaryTel}`}
              className="font-label-md text-label-md text-primary font-bold tracking-tight hover:text-secondary transition-colors"
            >
              {DOCTOR_INFO.hotlinePrimary} - {DOCTOR_INFO.hotlineSecondary}
            </a>
          </div>

          <button
            type="button"
            onClick={() => onOpenBooking()}
            className="hidden sm:flex px-5 lg:px-6 py-3 rounded-xl bg-on-tertiary-container hover:bg-[#bd160f] text-on-tertiary font-label-lg text-label-lg transition-all shadow-[0_4px_14px_rgba(215,31,23,0.25)] items-center gap-2"
            data-path="dat-lich-kham"
          >
            <span>ĐẶT LỊCH KHÁM</span>
          </button>

          <img
            alt={DOCTOR_INFO.fullName}
            className="w-8 h-8 rounded-full object-cover shrink-0 ml-1 hidden sm:block"
            src={DOCTOR_INFO.avatarNav}
          />

          {/* Mobile Drawer Toggle Button (Touch target >= 48px for elder accessibility) */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="xl:hidden w-12 h-12 rounded-xl bg-surface-container-low hover:bg-surface-container flex items-center justify-center text-primary transition-colors"
            aria-label={mobileMenuOpen ? 'Đóng menu' : 'Mở menu điều hướng'}
            aria-expanded={mobileMenuOpen}
          >
            <span className="material-symbols-outlined text-[28px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile & Tablet Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-surface-container-lowest border-t border-outline-variant/30 shadow-2xl max-h-[calc(100vh-5rem)] overflow-y-auto animate-fade-in">
          <div className="max-w-7xl mx-auto px-6 py-6 space-y-4">
            <div className="flex flex-col space-y-1">
              {NAV_ITEMS.map((item) =>
                item.children ? (
                  <div key={item.dataPath} className="border-b border-surface-container py-1">
                    <button
                      type="button"
                      onClick={() => setMobileSubmenuOpen((prev) => !prev)}
                      className="w-full flex items-center justify-between py-3 text-left font-title-md text-title-md text-primary font-semibold"
                    >
                      <span>{item.label}</span>
                      <span className="material-symbols-outlined text-[22px] text-secondary">
                        {mobileSubmenuOpen ? 'expand_less' : 'expand_more'}
                      </span>
                    </button>
                    {mobileSubmenuOpen && (
                      <div className="pl-4 pb-3 space-y-2">
                        {item.children.map((sub) => (
                          <a
                            key={sub.dataPath}
                            href={sub.href}
                            onClick={(e) => handleSubItemClick(e, sub.href, sub.specialtyId)}
                            className="block py-2.5 px-3 rounded-xl bg-surface-container-low text-on-surface font-body-md text-body-md hover:bg-surface-container transition-colors"
                          >
                            {sub.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    key={item.dataPath}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="py-3 border-b border-surface-container font-title-md text-title-md text-primary font-semibold hover:text-secondary transition-colors block"
                  >
                    {item.label}
                  </a>
                )
              )}
            </div>

            <div className="pt-2 space-y-3">
              <div className="p-4 rounded-2xl bg-surface-container-low flex items-center justify-between">
                <div>
                  <span className="font-label-sm text-label-sm text-on-surface-variant block">
                    Tổng đài tư vấn 24/7
                  </span>
                  <a
                    href={`tel:${DOCTOR_INFO.hotlinePrimaryTel}`}
                    className="font-title-lg text-title-lg text-primary font-bold"
                  >
                    {DOCTOR_INFO.hotlinePrimary}
                  </a>
                </div>
                <a
                  href={`tel:${DOCTOR_INFO.hotlinePrimaryTel}`}
                  className="w-12 h-12 rounded-xl bg-secondary text-on-secondary flex items-center justify-center shadow-sm"
                  aria-label="Gọi ngay"
                >
                  <span className="material-symbols-outlined text-[24px]">call</span>
                </a>
              </div>

              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-4 rounded-xl bg-on-tertiary-container hover:bg-[#bd160f] text-on-tertiary font-label-lg text-label-lg shadow-md flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined text-[22px]">
                  calendar_month
                </span>
                <span>ĐẶT LỊCH KHÁM NGAY</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

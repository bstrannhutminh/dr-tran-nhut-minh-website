'use client';

import React, { useEffect, useState } from 'react';
import { DOCTOR_INFO, NAV_ITEMS } from '@/data/siteData';

interface HeaderProps {
  onOpenBooking: (defaultConcern?: string) => void;
  onSelectSpecialty?: (specialtyId: string) => void;
}

export default function Header({ onOpenBooking }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeHref, setActiveHref] = useState<string>('#trang-chu');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 12);

      // Update active menu item based on scroll position
      const scrollPosition = window.scrollY + 140;
      for (let i = NAV_ITEMS.length - 1; i >= 0; i--) {
        const item = NAV_ITEMS[i];
        const sectionEl = document.querySelector(item.href) as HTMLElement | null;
        if (sectionEl && sectionEl.offsetTop <= scrollPosition) {
          setActiveHref(item.href);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-surface-container-lowest/95 backdrop-blur-xl shadow-[0_6px_28px_-4px_rgba(0,44,67,0.08)] border-b border-outline-variant/20'
          : 'bg-surface-container-lowest/90 backdrop-blur-md shadow-[0_2px_16px_-4px_rgba(0,44,67,0.04)]'
      }`}
    >
      <div className="h-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 flex items-center justify-between gap-4">
        {/* Left: Brand Identity (Logo + Doctor Name only) */}
        <a
          className="flex items-center gap-3 shrink-0 group"
          data-path="trang-chu"
          href="#trang-chu"
          onClick={() => setActiveHref('#trang-chu')}
        >
          <div className="w-10 h-10 rounded-xl bg-primary-container flex items-center justify-center text-on-primary font-headline-sm text-headline-sm tracking-tighter relative select-none shadow-sm group-hover:scale-105 transition-transform">
            <span className="text-[#ff5442] font-extrabold">T</span>
            <span>M</span>
            <span className="absolute -top-1 -right-1 text-on-tertiary-container text-xs font-black">
              +
            </span>
          </div>
          <span className="font-title-md text-[17px] sm:text-title-md font-bold tracking-tight text-primary uppercase whitespace-nowrap group-hover:text-secondary transition-colors">
            {DOCTOR_INFO.fullName}
          </span>
        </a>

        {/* Center: Horizontal Navigation Bar */}
        <nav
          className="hidden lg:flex items-center justify-center gap-1 xl:gap-1.5 flex-1 px-2"
          aria-label="Điều hướng chính"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = activeHref === item.href;
            return (
              <a
                key={item.dataPath}
                href={item.href}
                data-path={item.dataPath}
                onClick={() => setActiveHref(item.href)}
                className={`relative px-3.5 py-2 rounded-xl font-label-md text-[14.5px] xl:text-[15px] whitespace-nowrap transition-all duration-200 ${
                  isActive
                    ? 'text-secondary bg-surface-container-low/90 font-bold'
                    : 'text-on-surface-variant hover:text-primary hover:bg-surface-container-low/50 font-semibold'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-1 left-3.5 right-3.5 h-0.5 rounded-full bg-secondary" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right: Primary Action CTA + Avatar + Mobile Menu Toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => onOpenBooking()}
            className="hidden sm:inline-flex px-5 py-2.5 rounded-xl bg-on-tertiary-container hover:bg-[#bd160f] text-on-tertiary font-label-md text-label-md font-bold transition-all shadow-[0_4px_14px_rgba(215,31,23,0.24)] hover:shadow-[0_6px_20px_rgba(215,31,23,0.34)] hover:-translate-y-0.5 items-center gap-2 whitespace-nowrap"
            data-path="dat-lich-kham"
          >
            <span className="material-symbols-outlined text-[19px]">
              calendar_month
            </span>
            <span>ĐẶT LỊCH KHÁM</span>
          </button>

          <img
            alt={DOCTOR_INFO.fullName}
            className="w-9 h-9 rounded-full object-cover shrink-0 ring-2 ring-surface-container-high hidden sm:block"
            src={DOCTOR_INFO.avatarNav}
          />

          {/* Mobile Drawer Toggle Button (Touch target >= 48px) */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="lg:hidden w-11 h-11 rounded-xl bg-surface-container-low hover:bg-surface-container flex items-center justify-center text-primary transition-colors"
            aria-label={mobileMenuOpen ? 'Đóng menu' : 'Mở menu điều hướng'}
            aria-expanded={mobileMenuOpen}
          >
            <span className="material-symbols-outlined text-[26px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer (< lg) */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-surface-container-lowest border-t border-outline-variant/25 shadow-2xl max-h-[calc(100vh-5rem)] overflow-y-auto animate-fade-in">
          <div className="max-w-7xl mx-auto px-5 py-5 space-y-4">
            <div className="flex flex-col space-y-1">
              {NAV_ITEMS.map((item) => {
                const isActive = activeHref === item.href;
                return (
                  <a
                    key={item.dataPath}
                    href={item.href}
                    onClick={() => {
                      setActiveHref(item.href);
                      setMobileMenuOpen(false);
                    }}
                    className={`px-4 py-3 rounded-xl font-title-md text-title-md transition-colors flex items-center justify-between ${
                      isActive
                        ? 'bg-surface-container-low text-secondary font-bold'
                        : 'text-primary font-semibold hover:bg-surface-container-low/60'
                    }`}
                  >
                    <span>{item.label}</span>
                    <span className="material-symbols-outlined text-[20px] opacity-60">
                      chevron_right
                    </span>
                  </a>
                );
              })}
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3.5 rounded-xl bg-on-tertiary-container hover:bg-[#bd160f] text-on-tertiary font-label-lg text-label-lg shadow-md flex items-center justify-center gap-2"
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

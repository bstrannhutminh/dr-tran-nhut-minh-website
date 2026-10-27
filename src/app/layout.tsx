import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { DOCTOR_INFO } from '@/data/siteData';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin', 'vietnamese'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-plus-jakarta',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#002c43',
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://drtrannhutminh.com'),
  title: 'ThS.BS. Trần Nhựt Minh - Chuyên sâu Cơ Xương Khớp & Phục hồi chức năng',
  description:
    'Trang thông tin y khoa và đặt lịch khám chính thức của ThS.BS. Trần Nhựt Minh. Chuyên sâu điều trị bảo tồn Cơ Xương Khớp, Thoái hóa khớp gối, Thoát vị đĩa đệm, Liệu pháp PRP Huyết tương giàu tiểu cầu và Phục hồi chức năng tại Cần Thơ & TP.HCM.',
  keywords: [
    'ThS.BS Trần Nhựt Minh',
    'Bác sĩ Trần Minh',
    'Bác sĩ Cơ Xương Khớp Cần Thơ',
    'Phục hồi chức năng',
    'Tiêm PRP khớp gối',
    'Thoát vị đĩa đệm L4 L5',
    'Thoái hóa khớp gối',
    'Y học tái tạo sinh học',
    'drtrannhutminh.com',
  ],
  authors: [{ name: DOCTOR_INFO.fullName, url: 'https://drtrannhutminh.com' }],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'vi_VN',
    url: 'https://drtrannhutminh.com',
    siteName: 'ThS.BS. Trần Nhựt Minh - Cơ Xương Khớp & Phục Hồi Chức Năng',
    title: 'ThS.BS. Trần Nhựt Minh - Chuyên sâu Cơ Xương Khớp & Phục hồi chức năng',
    description:
      'Chăm sóc sức khỏe chủ động — Chuyên sâu cơ xương khớp — Phục hồi chức năng — Ứng dụng tiến bộ y khoa sinh học PRP không phẫu thuật.',
    images: [
      {
        url: '/images/doctor-hero.jpg',
        width: 800,
        height: 1000,
        alt: DOCTOR_INFO.heroPortraitAlt,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Physician',
        '@id': 'https://drtrannhutminh.com/#physician',
        name: DOCTOR_INFO.fullName,
        alternateName: 'Bác sĩ Trần Minh',
        url: 'https://drtrannhutminh.com',
        image: 'https://drtrannhutminh.com/images/doctor-hero.jpg',
        description:
          'Thạc sĩ, Bác sĩ chuyên khoa sâu về Cơ Xương Khớp & Phục hồi chức năng. Áp dụng các giải pháp y khoa can thiệp tối thiểu và liệu pháp tái tạo sinh học PRP.',
        medicalSpecialty: [
          'Musculoskeletal',
          'PhysicalMedicine',
          'Rheumatology',
        ],
        telephone: '+84-292-2200-777',
        email: DOCTOR_INFO.email,
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Số 51 Cách Mạng Tháng Tám, Phường Cái Khế, Quận Ninh Kiều',
          addressLocality: 'Cần Thơ',
          addressCountry: 'VN',
        },
      },
      {
        '@type': 'MedicalClinic',
        '@id': 'https://drtrannhutminh.com/#clinic',
        name: 'Phòng khám Chuyên khoa Cơ Xương Khớp - ThS.BS. Trần Nhựt Minh',
        url: 'https://drtrannhutminh.com',
        telephone: '+84-292-2200-777',
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: [
              'Monday',
              'Tuesday',
              'Wednesday',
              'Thursday',
              'Friday',
              'Saturday',
            ],
            opens: '08:00',
            closes: '18:00',
          },
        ],
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Số 51 Cách Mạng Tháng Tám, Phường Cái Khế, Quận Ninh Kiều',
          addressLocality: 'Cần Thơ',
          addressCountry: 'VN',
        },
      },
    ],
  };

  return (
    <html lang="vi" className={plusJakartaSans.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-surface font-body-md text-on-surface antialiased selection:bg-secondary/20 selection:text-primary">
        {children}
      </body>
    </html>
  );
}

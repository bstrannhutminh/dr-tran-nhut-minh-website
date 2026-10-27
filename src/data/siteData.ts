export interface NavSubItem {
  label: string;
  href: string;
  dataPath: string;
  specialtyId?: string;
}

export interface NavItem {
  label: string;
  href: string;
  dataPath: string;
  children?: NavSubItem[];
}

export interface SpecialtyItem {
  id: string;
  title: string;
  image: string;
  alt: string;
  icon: string;
  accentColor: 'secondary' | 'tertiary';
  ctaLabel: string;
  bookingTopic: string;
  summary: string;
  symptoms: string[];
  approach: string;
}

export interface LifestyleItem {
  id: string;
  title: string;
  image: string;
  alt: string;
  icon: string;
  accentColor: 'secondary' | 'tertiary';
  badgeIcon: string;
  badgeText: string;
  advice: string;
}

export interface ActivityItem {
  id: string;
  category: string;
  title: string;
  description: string;
  locationMeta: string;
  image: string;
  alt: string;
  accentColor: 'secondary' | 'tertiary';
}

export interface CertificateItem {
  id: string;
  issuer: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  accentColor: 'secondary' | 'tertiary';
  verificationNote: string;
}

export interface VideoItem {
  id: string;
  badgeTitle: string;
  title: string;
  description: string;
  duration: string;
  viewsMeta: string;
  thumbnail: string;
  alt: string;
  keyTakeaways: string[];
}

export interface TestimonialItem {
  id: string;
  quote: string;
  patientName: string;
  patientMeta: string;
  avatar: string;
  alt: string;
}

export interface BlogPostItem {
  id: string;
  category: 'Khớp Gối' | 'Cột Sống' | 'Dinh dưỡng';
  readTimeMeta: string;
  title: string;
  excerpt: string;
  image: string;
  alt: string;
  accentColor: 'secondary' | 'tertiary';
  content: string[];
}

export const DOCTOR_INFO = {
  fullName: 'ThS.BS. Trần Nhựt Minh',
  shortName: 'Bác sĩ Trần Minh',
  specialtySubtitle: 'Chuyên sâu Cơ Xương Khớp & Phục hồi chức năng',
  domain: 'drtrannhutminh.com',
  email: 'contact@drtrannhutminh.com',
  hotlinePrimary: '0292 22 00 777',
  hotlinePrimaryTel: '02922200777',
  hotlineSecondary: '0292 88 89 899',
  hotlineSecondaryTel: '02928889899',
  avatarNav: '/images/avatar-nav.jpg',
  heroPortrait: '/images/doctor-hero.jpg',
  heroPortraitAlt:
    'Chân dung trang trọng Thạc sĩ Bác sĩ Trần Nhựt Minh mặc áo blouse trắng bác sĩ, đeo kính, mỉm cười thân thiện và tự tin trong phòng khám cơ xương khớp chuẩn y khoa hiện đại, ánh sáng lâm sàng ấm áp, phong thái uy tín và tận tâm.',
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'Trang chủ', href: '#trang-chu', dataPath: 'trang-chu' },
  { label: 'Giới thiệu', href: '#about-doctor', dataPath: 'gioi-thieu' },
  {
    label: 'Chuyên môn',
    href: '#chuyen-mon',
    dataPath: 'chuyen-mon',
    children: [
      {
        label: 'Bệnh lý Cơ Xương Khớp',
        href: '#chuyen-mon',
        dataPath: 'chuyen-khoa-co-xuong-khop',
        specialtyId: 'knee-hip',
      },
      {
        label: 'Cột sống & Thoát vị đĩa đệm',
        href: '#chuyen-mon',
        dataPath: 'thoat-vi-dia-dem-cot-song',
        specialtyId: 'spine-disc',
      },
      {
        label: 'Vật lý trị liệu & Phục hồi chức năng',
        href: '#chuyen-mon',
        dataPath: 'phuc-hoi-chuc-nang',
        specialtyId: 'physio',
      },
      {
        label: 'Can thiệp ít xâm lấn đa mô thức',
        href: '#prp-section',
        dataPath: 'dieu-tri-khong-phau-thuat',
        specialtyId: 'prp',
      },
    ],
  },
  { label: 'PRP Chuyên sâu', href: '#prp-section', dataPath: 'prp-chuyen-sau' },
  { label: 'Chăm sóc chủ động', href: '#lifestyle-medicine', dataPath: 'cham-soc-suc-khoe-chu-dong' },
  { label: 'Kiến thức', href: '#kien-thuc-y-khoa', dataPath: 'kien-thuc-y-khoa' },
  { label: 'Câu chuyện điều trị', href: '#cau-chuyen-khach-hang', dataPath: 'cau-chuyen-khach-hang' },
  { label: 'Video', href: '#video-section', dataPath: 'video-hoat-dong' },
  { label: 'Liên hệ', href: '#booking-section', dataPath: 'lien-he' },
];

export const HERO_TRUST_PILLARS = [
  {
    icon: 'science',
    accentColor: 'secondary' as const,
    title: 'Y học thực chứng',
    description: 'Dựa trên nền tảng khoa học quốc tế & chỉ định thận trọng',
  },
  {
    icon: 'person_check',
    accentColor: 'tertiary' as const,
    title: 'Phác đồ cá nhân',
    description: 'Thiết kế chuẩn xác theo từng cấp độ thoái hóa và thể trạng',
  },
  {
    icon: 'favorite',
    accentColor: 'secondary' as const,
    title: 'Đồng hành tận tâm',
    description: 'Theo dõi sát sao từng tiến trình phục hồi vận động tự nhiên',
  },
];

export const ABOUT_PILLARS = [
  {
    icon: 'school',
    accentColor: 'secondary' as const,
    title: 'Học vị Thạc sĩ Y khoa',
    description:
      'Tốt nghiệp Thạc sĩ Y học chính quy chuyên ngành Y học lâm sàng, đào tạo bài bản và liên tục cập nhật phác đồ quốc tế.',
    footerLabel: 'Trình độ chuyên môn →',
    href: '#credentials',
  },
  {
    icon: 'medical_services',
    accentColor: 'tertiary' as const,
    title: 'Thực hành Cơ Xương Khớp',
    description:
      'Kinh nghiệm xử trí thành công hàng ngàn ca thoái hóa khớp gối nặng, thoát vị đĩa đệm cột sống, đau rễ thần kinh mà không cần mổ.',
    footerLabel: 'Kinh nghiệm lâm sàng →',
    href: '#chuyen-mon',
  },
  {
    icon: 'record_voice_over',
    accentColor: 'secondary' as const,
    title: 'Chia sẻ Y khoa cộng đồng',
    description:
      'Tác giả của hàng trăm video giáo dục phòng ngừa loãng xương, bài tập tự phục hồi tại nhà được đón nhận rộng rãi trên mạng xã hội.',
    footerLabel: 'Truyền thông sức khỏe →',
    href: '#video-section',
  },
  {
    icon: 'shield_with_heart',
    accentColor: 'tertiary' as const,
    title: 'Chăm sóc chủ động',
    description:
      'Tiên phong định hướng chăm sóc phòng ngừa sớm: dinh dưỡng kháng viêm, tối ưu chuyển hóa và bài tập bảo tồn trục vận động.',
    footerLabel: 'Định hướng y tế bền vững →',
    href: '#lifestyle-medicine',
  },
];

export const TIMELINE_STEPS = [
  {
    year: '2013',
    badge: 'Khởi đầu',
    yearColorClass: 'text-secondary',
    badgeClass: 'bg-secondary-fixed text-on-secondary-fixed',
    barClass: 'bg-secondary/30',
    title: 'Tốt nghiệp Bác sĩ Đa khoa',
    description:
      'Tốt nghiệp chính quy chương trình đào tạo Bác sĩ Đa khoa tại trường Đại học Y Dược uy tín, định hình nền tảng y học lâm sàng vững chắc.',
  },
  {
    year: '2019',
    badge: 'Học vị',
    yearColorClass: 'text-primary-container',
    badgeClass: 'bg-primary-fixed text-on-primary-fixed',
    barClass: 'bg-primary-container',
    title: 'Hoàn thành Thạc sĩ Y khoa',
    description:
      'Bảo vệ thành công luận văn Thạc sĩ Y khoa, nghiên cứu sâu về các phương pháp chẩn đoán hình ảnh và can thiệp bảo tồn bệnh lý cơ xương khớp.',
  },
  {
    year: '2019-2023',
    badge: 'Thực hành',
    yearColorClass: 'text-secondary',
    badgeClass: 'bg-surface-container text-primary',
    barClass: 'bg-secondary',
    title: 'Bệnh viện Đa khoa TW Cần Thơ',
    description:
      'Từng công tác và cống hiến tại BV Đa khoa Trung ương Cần Thơ cùng các cơ sở y tế chuyên sâu, tham gia khám chữa bệnh cho hàng nghìn lượt người dân miền Tây.',
  },
  {
    year: 'HIỆN TẠI',
    badge: 'Tiên phong',
    yearColorClass: 'text-on-tertiary-container',
    badgeClass: 'bg-tertiary-fixed text-on-tertiary-fixed',
    barClass: 'bg-on-tertiary-container',
    title: 'Phát triển Y học Tái tạo & PRP',
    description:
      'Tập trung thực hành can thiệp PRP chuyên sâu, phục hồi chức năng cá nhân hóa và dẫn dắt phong trào Chăm sóc sức khỏe chủ động phòng ngừa thoái hóa sớm.',
  },
];

export const SPECIALTIES: SpecialtyItem[] = [
  {
    id: 'knee-hip',
    title: 'Thoái hóa khớp gối & Khớp háng',
    image: '/images/specialty-knee-hip.jpg',
    alt: 'Thoái hóa khớp gối & Khớp háng',
    icon: 'assist_walker',
    accentColor: 'secondary',
    ctaLabel: 'Chi tiết bệnh học',
    bookingTopic: 'Khớp gối',
    summary:
      'Chẩn đoán phân độ thoái hóa khớp gối (Độ 1 đến Độ 4) và khớp háng bằng siêu âm khớp chuyên sâu, X-quang tư thế chịu lực, từ đó xây dựng phác đồ bảo tồn tối đa sụn khớp tự nhiên.',
    symptoms: [
      'Đau nhức khớp gối khi lên xuống cầu thang, đứng lên ngồi xuống',
      'Khớp phát tiếng kêu lạo xạo, lụp cụp hoặc cứng khớp buổi sáng',
      'Sưng nề tràn dịch khớp gối tái phát hoặc lệch trục chân',
    ],
    approach:
      'Kết hợp tiêm huyết tương giàu tiểu cầu (PRP) / chất nhờn sinh học dưới hướng dẫn siêu âm, vật lý trị liệu giảm tải khớp và bài tập làm mạnh cơ tứ đầu đùi.',
  },
  {
    id: 'spine-disc',
    title: 'Thoát vị đĩa đệm & Cột sống',
    image: '/images/specialty-spine-disc.jpg',
    alt: 'Thoát vị đĩa đệm & Cột sống',
    icon: 'accessibility_new',
    accentColor: 'tertiary',
    ctaLabel: 'Chi tiết bệnh học',
    bookingTopic: 'Cột sống / Đĩa đệm',
    summary:
      'Điều trị bảo tồn không phẫu thuật cho trên 90% trường hợp thoát vị đĩa đệm cột sống cổ (C4-C7) và cột sống thắt lưng (L4-L5, L5-S1), thoái hóa đốt sống, trượt đốt sống nhẹ.',
    symptoms: [
      'Đau âm ỉ hoặc đau cấp tính vùng thắt lưng, cổ vai gáy khi cúi ngửa',
      'Đau lan dọc mông xuống đùi, bắp chân hoặc tê mỏi cánh tay',
      'Căng cứng cơ cạnh sống, hạn chế xoay trở mình khi nằm ngủ',
    ],
    approach:
      'Giải phóng chèn ép rễ thần kinh bằng vật lý trị liệu công nghệ cao, kéo giãn giải áp cột sống chuẩn y khoa và tập phục hồi nhóm cơ lõi (Core stability).',
  },
  {
    id: 'sciatica',
    title: 'Đau dây thần kinh tọa & Chèn ép',
    image: '/images/specialty-sciatica.jpg',
    alt: 'Đau dây thần kinh tọa & Chèn ép',
    icon: 'airline_seat_legroom_extra',
    accentColor: 'secondary',
    ctaLabel: 'Chi tiết bệnh học',
    bookingTopic: 'Cột sống / Đĩa đệm',
    summary:
      'Chẩn đoán phân biệt chính xác đau thần kinh tọa do thoát vị đĩa đệm hay hội chứng cơ hình lê, hẹp ống sống và hội chứng ống cổ tay.',
    symptoms: [
      'Đau buốt chạy dọc từ thắt lưng - mông xuống mặt sau đùi và gót chân',
      'Tê rần, châm chích như kiến bò ở bàn chân hoặc 5 đầu ngón tay',
      'Đau tăng khi ngồi lâu, ho, hắt hơi hoặc đi bộ quãng ngắn phải nghỉ',
    ],
    approach:
      'Can thiệp kháng viêm - giảm phù nề rễ thần kinh có định vị siêu âm kết hợp kỹ thuật trượt thần kinh (Neurodynamic mobilization) an toàn.',
  },
  {
    id: 'physio',
    title: 'Vật lý trị liệu & Phục hồi vận động',
    image: '/images/specialty-physio.jpg',
    alt: 'Vật lý trị liệu & Phục hồi vận động',
    icon: 'fitness_center',
    accentColor: 'tertiary',
    ctaLabel: 'Chi tiết dịch vụ',
    bookingTopic: 'Khác',
    summary:
      'Thiết kế chương trình vận động trị liệu 1 kèm 1 cá nhân hóa cho người bệnh sau chấn thương thể thao, sau phẫu thuật dây chằng, thay khớp hoặc cứng khớp kéo dài.',
    symptoms: [
      'Hạn chế tầm vận động khớp vai (viêm chu vai, đông cứng khớp vai)',
      'Yếu cơ, teo cơ sau bất động bột hoặc sau phẫu thuật chỉnh hình',
      'Mất cân bằng trục cơ thể, đau mỏi cơ mạn tính ở dân văn phòng',
    ],
    approach:
      'Ứng dụng sóng xung kích, siêu âm trị liệu, điện xung giảm đau kết hợp bài tập kiểm soát vận động có giám sát trực tiếp từ Bác sĩ và Kỹ thuật viên.',
  },
  {
    id: 'prp',
    title: 'Liệu pháp PRP Huyết tương giàu tiểu cầu',
    image: '/images/specialty-prp.jpg',
    alt: 'Liệu pháp PRP Huyết tương giàu tiểu cầu',
    icon: 'bloodtype',
    accentColor: 'secondary',
    ctaLabel: 'Tìm hiểu chuyên đề',
    bookingTopic: 'Tư vấn tiêm PRP',
    summary:
      'Ứng dụng công nghệ y học tái tạo tự thân sử dụng chính máu của người bệnh chiết tách nồng độ tiểu cầu cao gấp 4-6 lần bình thường, kích thích lành thương tự nhiên.',
    symptoms: [
      'Thoái hóa khớp gối độ 1, 2, 3 muốn bảo tồn khớp không phẫu thuật',
      'Viêm điểm bám gân gót (Achilles), viêm cân gan chân, khuỷu tay tennis',
      'Rách bán phần gân chóp xoay khớp vai, tổn thương sụn chêm nhẹ',
    ],
    approach:
      'Quy trình chiết tách ly tâm chuẩn vô khuẩn 100%, tiêm chính xác vào ổ tổn thương dưới hướng dẫn của đầu dò siêu âm tần số cao.',
  },
  {
    id: 'osteoporosis',
    title: 'Loãng xương & Đau người lớn tuổi',
    image: '/images/specialty-osteoporosis.jpg',
    alt: 'Loãng xương & Đau người lớn tuổi',
    icon: 'elderly',
    accentColor: 'tertiary',
    ctaLabel: 'Chi tiết dịch vụ',
    bookingTopic: 'Khác',
    summary:
      'Tầm soát mật độ xương, đánh giá nguy cơ gãy xương (FRAX) và quản lý đau mạn tính đa khớp an toàn cho người cao tuổi có nhiều bệnh nền (tim mạch, tiểu đường, dạ dày).',
    symptoms: [
      'Đau mỏi dọc xương dài, đau lưng âm ỉ hoặc giảm chiều cao theo tuổi',
      'Chuột rút ban đêm, mệt mỏi cơ bắp, dáng đi khom lưng không vững',
      'Người lớn tuổi ngại dùng thuốc giảm đau vì sợ hại dạ dày, gan thận',
    ],
    approach:
      'Phác đồ bổ sung Canxi hữu cơ, Vitamin D3-K2, thuốc chống hủy xương chuẩn chỉ định kết hợp bài tập thăng bằng chống té ngã cho người cao tuổi.',
  },
  {
    id: 'varicose',
    title: 'Suy giãn tĩnh mạch chi dưới',
    image: '/images/specialty-varicose.jpg',
    alt: 'Suy giãn tĩnh mạch chi dưới',
    icon: 'water_drop',
    accentColor: 'secondary',
    ctaLabel: 'Chi tiết bệnh học',
    bookingTopic: 'Khác',
    summary:
      'Khám lâm sàng và siêu âm Doppler mạch máu chi dưới giúp phát hiện sớm suy van tĩnh mạch nông/sâu, phân biệt rõ với đau khớp gối hoặc đau thần kinh tọa.',
    symptoms: [
      'Nặng chân, mỏi bắp chân, sưng mắt cá chân tăng lên vào buổi chiều tối',
      'Nổi gân xanh mạng nhện hoặc búi tĩnh mạch ngoằn ngoèo dưới da',
      'Tê bì, dị cảm, chuột rút bắp chân về đêm khi nằm ngủ',
    ],
    approach:
      'Tư vấn vớ y khoa áp lực chuẩn kích thước, thuốc bền thành mạch, bài tập bơm cơ bắp chân và hướng dẫn tư thế sinh hoạt giảm ứ trệ tĩnh mạch.',
  },
  {
    id: 'metabolic-sleep',
    title: 'Sức khỏe chuyển hóa & Giấc ngủ',
    image: '/images/specialty-metabolic-sleep.jpg',
    alt: 'Sức khỏe chuyển hóa & Giấc ngủ',
    icon: 'bedtime',
    accentColor: 'tertiary',
    ctaLabel: 'Chi tiết dịch vụ',
    bookingTopic: 'Khác',
    summary:
      'Kiểm soát toàn diện các rối loạn chuyển hóa (Gout / tăng Acid Uric, thừa cân béo phì gây quá tải khớp, mất ngủ mạn tính làm tăng nhạy cảm đau).',
    symptoms: [
      'Sưng nóng đỏ đau khớp ngón chân cái, cổ chân do tăng Acid Uric / Gout',
      'Thừa cân vùng bụng làm tăng áp lực gấp 4 lần lên sụn khớp gối',
      'Khó vào giấc ngủ, ngủ chập chờn do đau nhức xương khớp về đêm',
    ],
    approach:
      'Can thiệp Y học lối sống: thiết lập thực đơn kháng viêm giảm Acid Uric, kiểm soát cân nặng khoa học và vệ sinh giấc ngủ phục hồi hệ thần kinh.',
  },
];

export const LIFESTYLE_PILLARS: LifestyleItem[] = [
  {
    id: 'walking',
    title: 'Vận động thể chất & Đi bộ dưỡng sinh',
    image: '/images/lifestyle-walking.jpg',
    alt: 'Vận động thể chất phù hợp ngoài trời',
    icon: 'directions_walk',
    accentColor: 'secondary',
    badgeIcon: 'schedule',
    badgeText: '30-45 phút mỗi sáng',
    advice:
      'Đi bộ trên mặt phẳng bằng giày đế êm, đạp xe chậm hoặc bơi lội giúp dịch khớp lưu thông nuôi dưỡng sụn khớp mà không gây xóc nảy.',
  },
  {
    id: 'nutrition',
    title: 'Dinh dưỡng kháng viêm Địa Trung Hải',
    image: '/images/lifestyle-nutrition.jpg',
    alt: 'Dinh dưỡng kháng viêm Địa Trung Hải bảo vệ khớp',
    icon: 'restaurant',
    accentColor: 'tertiary',
    badgeIcon: 'nutrition',
    badgeText: 'Giàu Omega-3 & Chất xơ',
    advice:
      'Tăng cường cá béo (cá hồi, cá thu), rau xanh đậm, các loại hạt và hạn chế đường tinh luyện, mỡ nội tạng giúp giảm phản ứng viêm tại màng hoạt dịch khớp.',
  },
  {
    id: 'checkup',
    title: 'Tầm soát định kỳ & Phác đồ cá nhân',
    image: '/images/lifestyle-checkup.jpg',
    alt: 'Tư vấn y khoa và tầm soát khớp định kỳ',
    icon: 'stethoscope',
    accentColor: 'secondary',
    badgeIcon: 'verified',
    badgeText: 'Định kỳ mỗi 6 tháng',
    advice:
      'Kiểm tra siêu âm sụn khớp, đo mật độ xương và xét nghiệm chuyển hóa định kỳ giúp phát hiện tổn thương từ giai đoạn sớm khi chưa biến dạng khớp.',
  },
  {
    id: 'sleep',
    title: 'Giấc ngủ tái tạo sinh học đĩa đệm',
    image: '/images/lifestyle-sleep.jpg',
    alt: 'Giấc ngủ sâu tái tạo mô sụn',
    icon: 'bedtime',
    accentColor: 'tertiary',
    badgeIcon: 'alarm_on',
    badgeText: '7-8 giờ mỗi đêm',
    advice:
      'Khi nằm ngủ sâu trên nệm độ cứng vừa phải, đĩa đệm cột sống được giải phóng áp lực trọng trường để hút nước và chất dinh dưỡng phục hồi trở lại.',
  },
  {
    id: 'posture',
    title: 'Chỉnh trục tư thế & Phòng ngừa chấn thương',
    image: '/images/lifestyle-posture.jpg',
    alt: 'Chỉnh trục tư thế đúng khi sinh hoạt',
    icon: 'accessibility_new',
    accentColor: 'secondary',
    badgeIcon: 'check_circle',
    badgeText: 'Bảo vệ sụn chêm & lưng',
    advice:
      'Tránh ngồi xổm, hạn chế bê vác nặng sai tư thế (gập lưng thẳng gối). Luôn hạ thấp trọng tâm bằng hai gối và giữ lưng thẳng khi nâng đồ vật.',
  },
  {
    id: 'mindfulness',
    title: 'Cân bằng tinh thần & Kiểm soát căng thẳng',
    image: '/images/lifestyle-mindfulness.jpg',
    alt: 'Cân bằng tinh thần và giảm căng thẳng',
    icon: 'psychology',
    accentColor: 'tertiary',
    badgeIcon: 'self_improvement',
    badgeText: 'Tối ưu hóa Endorphin',
    advice:
      'Thở cơ hoành sâu và thư giãn tinh thần giúp giảm hormone Cortisol gây co thắt cơ cạnh sống và kích thích cơ thể tiết Endorphin giảm đau tự nhiên.',
  },
];

export const ACTIVITIES: ActivityItem[] = [
  {
    id: 'rheumatology-conf',
    category: 'Hội thảo thường niên',
    title: 'Hội nghị Khoa học Thấp khớp học Quốc gia',
    description:
      'Cập nhật các tiến bộ trong chẩn đoán sớm viêm khớp dạng thấp và liệu pháp sinh học cá nhân hóa.',
    locationMeta: 'TP. Hồ Chí Minh • Định kỳ',
    image: '/images/activity-conference.jpg',
    alt: 'Bác sĩ Trần Minh tham gia hội nghị khoa học thường niên hội thấp khớp học Việt Nam, đang thảo luận với các chuyên gia y tế trước slide báo cáo chuyên đề điều trị sụn khớp.',
    accentColor: 'secondary',
  },
  {
    id: 'cme-ultrasound',
    category: 'Đào tạo liên tục (CME)',
    title: 'Thực hành can thiệp khớp dưới siêu âm',
    description:
      'Khóa huấn luyện kỹ thuật tiêm chính xác từng milimet cho khớp vai, khớp háng và bao gân cổ tay.',
    locationMeta: 'Đại học Y Dược • Chứng chỉ chuẩn',
    image: '/images/activity-cme-ultrasound.jpg',
    alt: 'Bác sĩ Trần Minh đang thực hành đào tạo liên tục CME về kỹ thuật tiêm khớp và tiêm gân dưới hướng dẫn của siêu âm độ phân giải cao tại trung tâm huấn luyện y khoa.',
    accentColor: 'tertiary',
  },
  {
    id: 'community-talk',
    category: 'Y tế cộng đồng',
    title: 'Tọa đàm Chăm sóc khớp cho Người cao tuổi Cần Thơ',
    description:
      'Chuỗi hoạt động thăm khám miễn phí và hướng dẫn bài tập phòng té ngã, chống gãy xương cho bà con.',
    locationMeta: 'Cần Thơ • Hoạt động định kỳ',
    image: '/images/activity-community-talk.jpg',
    alt: 'ThS.BS Trần Nhựt Minh trong buổi tọa đàm tư vấn chăm sóc sức khỏe cột sống cho người cao tuổi tại hội trường cộng đồng, giải đáp ân cần cho các cô chú bác.',
    accentColor: 'secondary',
  },
];

export const CERTIFICATES: CertificateItem[] = [
  {
    id: 'master-degree',
    issuer: 'Bộ Y Tế • Học vị chuyên môn',
    title: 'Bằng Thạc sĩ Y khoa',
    description:
      'Xác nhận trình độ Thạc sĩ Y học lâm sàng, đủ điều kiện nghiên cứu và phụ trách chuyên môn.',
    image: '/images/cert-master-degree.jpg',
    alt: 'Bằng tốt nghiệp Thạc sĩ Y khoa chính quy của ThS.BS. Trần Nhựt Minh, có mộc đỏ và dấu chứng nhận của trường Đại học Y Dược uy tín, định dạng tài liệu học thuật trang trọng.',
    accentColor: 'secondary',
    verificationNote: 'Đào tạo chính quy sau đại học - Chuyên ngành Y học Lâm sàng.',
  },
  {
    id: 'practice-license',
    issuer: 'Sở Y Tế • Pháp lý khám chữa bệnh',
    title: 'Chứng chỉ Hành nghề Khám chữa bệnh',
    description:
      'Phạm vi hoạt động chuyên môn Cơ Xương Khớp & Vật lý trị liệu Phục hồi chức năng theo quy chuẩn.',
    image: '/images/cert-practice-license.jpg',
    alt: 'Chứng chỉ hành nghề khám bệnh chữa bệnh chuyên khoa Cơ Xương Khớp cấp bởi Sở Y Tế với đầy đủ số hiệu pháp lý, đóng dấu xác thực minh bạch.',
    accentColor: 'tertiary',
    verificationNote: 'Được cấp phép hành nghề hợp pháp theo Luật Khám bệnh, chữa bệnh.',
  },
  {
    id: 'prp-ultrasound-cert',
    issuer: 'Bệnh viện TW • Chứng chỉ chuyên khoa',
    title: 'Chứng chỉ Can thiệp PRP & Siêu âm khớp',
    description:
      'Chứng nhận đủ năng lực thực hành kỹ thuật can thiệp mô mềm và ứng dụng PRP trong điều trị thoái hóa.',
    image: '/images/cert-prp-ultrasound.jpg',
    alt: 'Chứng chỉ đào tạo liên tục kỹ thuật tiêm nội khớp, huyết tương giàu tiểu cầu PRP và tiêm điểm bám gân do Bệnh viện tuyến Trung ương cấp.',
    accentColor: 'secondary',
    verificationNote: 'Đạt chuẩn kỹ thuật tiêm nội khớp, tiêm gân dưới hướng dẫn siêu âm.',
  },
];

export const VIDEOS: VideoItem[] = [
  {
    id: 'l4-l5-recovery',
    badgeTitle: 'Video Nổi Bật: 5 Động Tác Cứu Đĩa Đệm L4-L5 Tại Nhà',
    title: 'Hướng dẫn phục hồi đĩa đệm và giảm tê chân cho người trung niên',
    description:
      'Trong video này, ThS.BS. Trần Nhựt Minh trực tiếp hướng dẫn chi tiết cách nằm nghỉ ngơi đúng tư thế và 5 động tác giãn cơ thắt lưng nhẹ nhàng mà không tạo áp lực lên đĩa đệm.',
    duration: '12:45',
    viewsMeta: '86.400 lượt xem • Video nổi bật',
    thumbnail: '/images/video-featured-l4l5.jpg',
    alt: 'Bác sĩ Trần Minh đang hướng dẫn các động tác kéo giãn cột sống lưng giảm đau dây thần kinh tọa trên thảm tập trong phòng khám cơ xương khớp, hình ảnh sắc nét chuẩn HD.',
    keyTakeaways: [
      'Tư thế nằm ngửa kê gối dưới khoeo chân giúp giảm 40% áp lực nội đĩa đệm L4-L5',
      'Động tác kéo gối chạm ngực từng bên (Single Knee-to-Chest) giãn cơ thắt lưng an toàn',
      'Lưu ý tuyệt đối: Không gập lưng vặn xoắn đột ngột khi đang có cơn đau cấp lan xuống chân',
    ],
  },
  {
    id: 'prp-truth',
    badgeTitle: 'Chuyên Đề PRP: Sự Thật Về Tiêm Huyết Tương Giàu Tiểu Cầu',
    title: 'Sự thật về tiêm huyết tương giàu tiểu cầu (PRP) khớp gối',
    description:
      'Bác sĩ Trần Minh phân tích rõ cơ chế sinh học của PRP tự thân, những trường hợp thoái hóa khớp gối đáp ứng tốt nhất và khi nào không nên lạm dụng.',
    duration: '08:20',
    viewsMeta: '24.500 lượt xem • 3 ngày trước',
    thumbnail: '/images/video-thumb-prp.jpg',
    alt: 'Ảnh thu nhỏ video Bác sĩ Trần Minh giải thích khi nào nên tiêm PRP và khi nào không nên lạm dụng.',
    keyTakeaways: [
      'PRP đạt hiệu quả cao nhất ở thoái hóa khớp gối độ 1, độ 2 và độ 3 sớm',
      'Quy trình bắt buộc phải chiết tách vô khuẩn và tiêm dưới hướng dẫn siêu âm',
      'Tránh nhầm lẫn giữa tiêm PRP tự thân và tiêm Corticoid giảm đau cấp tốc',
    ],
  },
  {
    id: 'calcium-d3-k2',
    badgeTitle: 'Dinh Dưỡng Xương Khớp: Bổ Sung Canxi Đúng Cách',
    title: 'Bổ sung Canxi & Vitamin D3 K2 như thế nào để không hại thận?',
    description:
      'Giải đáp chi tiết cách chọn dòng Canxi dễ hấp thu, thời điểm uống trong ngày và vai trò dẫn đường của Vitamin D3 - K2 giúp canxi vào thẳng mô xương.',
    duration: '06:15',
    viewsMeta: '58.200 lượt xem • 1 tuần trước',
    thumbnail: '/images/video-thumb-calcium.jpg',
    alt: 'Ảnh thu nhỏ video giải đáp cách uống canxi đúng cách không lo lắng cặn thận hay táo bón của Bác sĩ Minh.',
    keyTakeaways: [
      'Uống Canxi vào buổi sáng hoặc trưa sau ăn 30-60 phút cùng nhiều nước ấm',
      'Không uống quá 500mg Canxi nguyên tố trong cùng một lần uống',
      'Kết hợp Vitamin D3 và MK7 (K2) để gắn Canxi vào xương thay vì lắng đọng mạch máu',
    ],
  },
  {
    id: 'morning-wrist-stiffness',
    badgeTitle: 'Chẩn Đoán Sớm: Tê Bì & Cứng Khớp Bàn Tay Buổi Sáng',
    title: 'Ngủ dậy bị cứng khớp cổ tay, tê 5 đầu ngón tay: Cảnh báo điều gì?',
    description:
      'Cách phân biệt nhanh giữa Hội chứng ống cổ tay, Viêm khớp dạng thấp giai đoạn sớm và Thoái hóa đốt sống cổ chèn ép đám rối thần kinh cánh tay.',
    duration: '09:40',
    viewsMeta: '41.800 lượt xem • 2 tuần trước',
    thumbnail: '/images/video-thumb-wrist.jpg',
    alt: 'Ảnh thu nhỏ video bài tập giảm cứng khớp ngón tay và tê bì cánh tay vào buổi sáng cho phụ nữ.',
    keyTakeaways: [
      'Tê ngón cái, trỏ, giữa thường gợi ý chèn ép dây thần kinh giữa (Hội chứng ống cổ tay)',
      'Cứng khớp hai bàn tay kéo dài trên 1 giờ buổi sáng cần tầm soát viêm khớp dạng thấp',
      '3 bài tập trượt gân và thần kinh cổ tay nhẹ nhàng ngay khi vừa thức dậy',
    ],
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'patient-mai',
    quote:
      '“Tôi bị thoái hóa khớp gối độ 3, đi lại cầu thang kêu lụp cụp và buốt nhói. Từng nghĩ phải thay khớp nhân tạo nhưng sau 2 liệu trình PRP kết hợp tập phục hồi với Bác sĩ Minh, gối êm ru, sáng nào tôi cũng đi bộ công viên được 30 phút mà không mỏi.”',
    patientName: 'Cô Nguyễn Thị Mai (62 tuổi)',
    patientMeta: 'Cái Răng, TP. Cần Thơ • Thoái hóa gối độ 3',
    avatar: '/images/patient-mai.jpg',
    alt: 'Chân dung cô bệnh nhân 62 tuổi quê Cần Thơ, nụ cười vui tươi khỏe khoắn sau khi phục hồi khớp gối.',
  },
  {
    id: 'patient-thanh',
    quote:
      '“Làm tài xế xe tải nhiều năm khiến tôi bị thoát vị L4-L5 chèn ép dây thần kinh tọa tê rần xuống gót chân. Bác sĩ Minh phân tích phim MRI rất cặn kẽ, chỉ định liệu trình can thiệp ít xâm lấn và bài tập chỉnh trục. Nay chân hết tê hẳn, tôi đã tự tin cầm lái trở lại.”',
    patientName: 'Chú Lê Văn Thành (48 tuổi)',
    patientMeta: 'Bình Minh, Vĩnh Long • Thoát vị L4-L5',
    avatar: '/images/patient-thanh.jpg',
    alt: 'Chân dung chú tài xế 48 tuổi khỏe mạnh, vui vẻ chia sẻ kết quả hồi phục sau khi chữa thoát vị đĩa đệm.',
  },
  {
    id: 'patient-hue',
    quote:
      '“Cổ tay và vai tôi bị viêm bao gân chóp xoay không nhấc tay chải tóc được. Sau khi được Bác sĩ tiêm phục hồi sinh học và hướng dẫn tập tại nhà, khớp vai đã cử động trơn tru. Bác sĩ tư vấn rất ân cần, giải thích cặn kẽ từng li từng tí nên người già như tôi rất yên tâm.”',
    patientName: 'Bác Trần Thị Huệ (68 tuổi)',
    patientMeta: 'Ninh Kiều, TP. Cần Thơ • Viêm quanh khớp vai',
    avatar: '/images/patient-hue.jpg',
    alt: 'Chân dung bà cụ 68 tuổi hiền hậu, nở nụ cười rạng rỡ sau khi tay vai cử động linh hoạt trở lại.',
  },
];

export const BLOG_POSTS: BlogPostItem[] = [
  {
    id: 'thoat-vi-dia-dem-khi-nao-mo',
    category: 'Cột Sống',
    readTimeMeta: '5 Phút đọc • Cột sống • 15/10/2024',
    title: 'Thoát vị đĩa đệm cột sống thắt lưng: Khi nào bắt buộc mổ và khi nào chữa bảo tồn?',
    excerpt:
      'Rất nhiều người hoang mang khi cầm kết quả chụp MRI ghi thoát vị tầng L4-L5. Hãy cùng Bác sĩ Minh nhận biết dấu hiệu "cờ đỏ" nguy hiểm và phác đồ can thiệp bảo tồn an toàn.',
    image: '/images/blog-spine-surgery.jpg',
    alt: 'Hình ảnh minh họa giải phẫu đĩa đệm cột sống và tư thế cúi lưng đúng sai giúp bảo vệ cột sống thắt lưng.',
    accentColor: 'secondary',
    content: [
      'Theo thống kê y học thực chứng quốc tế, hơn 85% - 90% bệnh nhân thoát vị đĩa đệm cột sống thắt lưng (L4-L5, L5-S1) hoàn toàn có thể kiểm soát triệu chứng và phục hồi vận động bằng điều trị bảo tồn đúng phác đồ mà không cần can thiệp phẫu thuật.',
      'Phẫu thuật chỉ thực sự bắt buộc khi xuất hiện các dấu hiệu "Cờ đỏ" (Red Flags): Hội chứng chùm đuôi ngựa (bí tiểu, tiểu không tự chủ, mất cảm giác vùng yên ngựa), yếu liệt cơ tiến triển nhanh (bàn chân rũ, không nhón gót hay翘 mũi chân được) hoặc đau cấp tính dữ dội không đáp ứng sau 6-8 tuần điều trị nội khoa tích cực.',
      'Phác đồ bảo tồn đa mô thức của ThS.BS. Trần Nhựt Minh tập trung vào 3 trụ cột: (1) Kiểm soát phản ứng viêm rễ thần kinh bằng can thiệp tối thiểu có định vị; (2) Kéo giãn giải áp cột sống chuẩn lực; và (3) Tập phục hồi nhóm cơ lõi (Core muscles) để giữ vững trục cột sống lâu dài.',
    ],
  },
  {
    id: 'tiem-prp-khop-goi-su-that',
    category: 'Khớp Gối',
    readTimeMeta: '7 Phút đọc • Khớp gối • 02/11/2024',
    title: 'Tiêm PRP khớp gối có thực sự giúp mọc lại sụn khớp như quảng cáo hay không?',
    excerpt:
      'Góc nhìn khoa học thực chứng: Phân biệt rõ sự thật về khả năng kích thích tái tạo sinh học của PRP so với những lời đồn thổi thổi phồng quá mức trên mạng xã hội.',
    image: '/images/blog-prp-truth.jpg',
    alt: 'Hình ảnh cấu tạo sụn khớp gối và cơ chế tác động của liệu pháp huyết tương giàu tiểu cầu PRP trong việc phục hồi sụn.',
    accentColor: 'tertiary',
    content: [
      'Huyết tương giàu tiểu cầu (PRP) là bước tiến lớn của Y học tái tạo, nhưng người bệnh cần hiểu đúng bản chất khoa học: với khớp gối đã thoái hóa Độ 4 (mòn trơ đầu xương, biến dạng trục nặng), không một loại thuốc tiêm nào có thể làm "mọc mới hoàn toàn" lớp sụn dày như thời trẻ.',
      'Tuy nhiên, ở giai đoạn Thoái hóa Độ 1, Độ 2 và Độ 3 sớm, các yếu tố tăng trưởng (PDGF, TGF-β, VEGF) trong PRP phát huy tác dụng vượt trội: ức chế quá trình hủy sụn, kháng viêm sinh học tự nhiên, kích thích tế bào sụn còn lại tăng tổng hợp chất nền Collagen type II và Proteoglycan, đồng thời cải thiện chất lượng dịch khớp.',
      'Để đạt hiệu quả tối đa, PRP phải được chiết tách bằng bộ Kit chuyên dụng đạt nồng độ tiểu cầu tối ưu và được bác sĩ tiêm dưới hướng dẫn của siêu âm để đưa hoạt chất vào đúng khoang khớp hoặc điểm tổn thương sụn chêm - dây chằng.',
    ],
  },
  {
    id: 'thuc-don-chong-viem-tu-nhien',
    category: 'Dinh dưỡng',
    readTimeMeta: '6 Phút đọc • Dinh dưỡng • 20/11/2024',
    title: 'Thực đơn chống viêm tự nhiên: 5 nhóm thực phẩm người đau khớp nên ăn mỗi ngày',
    excerpt:
      'Khám phá chế độ dinh dưỡng Địa Trung Hải thu nhỏ dành riêng cho người Việt để chủ động giảm đau khớp gối và bảo vệ tim mạch hiệu quả ngay trong mâm cơm gia đình.',
    image: '/images/blog-anti-inflammatory-diet.jpg',
    alt: 'Hình ảnh thực đơn bữa ăn giàu dinh dưỡng kháng viêm cho người viêm khớp với cá hồi, rau bina, quả mọng và dầu oliu.',
    accentColor: 'secondary',
    content: [
      'Viêm mạn tính mức độ thấp (Low-grade chronic inflammation) là thủ phạm âm thầm thúc đẩy thoái hóa sụn khớp. Chế độ ăn uống hàng ngày có thể đóng vai trò như một "liều thuốc kháng viêm tự nhiên" an toàn cho dạ dày.',
      '5 nhóm thực phẩm vàng cho hệ xương khớp người Việt bao gồm: (1) Cá béo giàu Omega-3 (cá thu, cá hồi, cá trích, cá basa); (2) Rau xanh đậm giàu Canxi & Vitamin K (cải bó xôi, bông cải xanh, cải ngọt); (3) Gia vị kháng viêm tự nhiên (nghệ vàng chứa Curcumin, gừng, tỏi); (4) Các loại hạt và đậu (hạnh nhân, óc chó, đậu nành, hạt mè đen); (5) Trái cây giàu Vitamin C giúp tổng hợp Collagen sụn khớp (ổi, cam, bưởi, đu đủ).',
      'Đồng thời, người đau khớp cần hạn chế thực phẩm chế biến sẵn, thức ăn chiên rán ngập dầu (giàu Omega-6 gây viêm), nước ngọt có gas và kiểm soát cân nặng để giảm tải trọng cơ học lên khớp gối.',
    ],
  },
];

export const SOCIAL_CHANNELS = [
  {
    id: 'youtube',
    name: 'YouTube',
    stats: '50K+ Đăng ký',
    icon: 'play_circle',
    href: '#video-section',
    colorVariant: 'tertiary' as const,
  },
  {
    id: 'fanpage',
    name: 'Fanpage',
    stats: '120K+ Theo dõi',
    icon: 'thumb_up',
    href: '#booking-section',
    colorVariant: 'secondary' as const,
  },
  {
    id: 'tiktok',
    name: 'TikTok Y Khoa',
    stats: '200K+ Lượt thích',
    icon: 'video_library',
    href: '#video-section',
    colorVariant: 'primary' as const,
  },
  {
    id: 'zalo',
    name: 'Zalo OA',
    stats: 'Tư vấn 24/7',
    icon: 'chat',
    href: 'https://zalo.me/02922200777',
    colorVariant: 'secondary' as const,
  },
];

export const CLINIC_LOCATIONS = [
  {
    id: 'can-tho',
    name: 'Cơ sở TP. Cần Thơ',
    icon: 'location_on',
    address: 'Số 51 Cách Mạng Tháng Tám, Phường Cái Khế, Quận Ninh Kiều, TP. Cần Thơ.',
    schedule: 'Lịch khám trực tiếp: Thứ 2 — Thứ 7 (8h00 - 18h00)',
  },
  {
    id: 'tphcm',
    name: 'Cơ sở TP. Hồ Chí Minh',
    icon: 'domain',
    address: 'Hệ thống phòng khám đối tác chuyên sâu Cột Sống • Quận 10 / Quận 5, TP.HCM.',
    schedule: 'Lịch hội chẩn chuyên gia: Định kỳ theo lịch hẹn trước',
  },
];

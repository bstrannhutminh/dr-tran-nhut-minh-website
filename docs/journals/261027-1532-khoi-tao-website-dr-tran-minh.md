# [261027-1532] — Khởi tạo Website Cá nhân ThS.BS. Trần Nhựt Minh (Next.js + Vercel)

## Bối cảnh

Khởi tạo dự án website thương hiệu cá nhân và đặt lịch khám chuyên khoa Cơ Xương Khớp & Phục hồi chức năng cho **ThS.BS. Trần Nhựt Minh (`drtrannhutminh.com`)** dựa trên bản thiết kế chuẩn từ Google Stitch (`stitch_dr._tran_minh_medical_website`). Dự án phục vụ hoạt động truyền thông y khoa chính thống và tiếp nhận lịch hẹn khám bệnh cho cả 2 cơ sở **TP. Cần Thơ** và **TP. Hồ Chí Minh**, triển khai trên nền tảng **Vercel**.

## Thay đổi / Hành động

- **Khởi tạo kiến trúc Next.js 15 (App Router + TypeScript + Tailwind CSS) tại `F:\WEB`:**
  - Thiết lập [`package.json`](../../package.json), [`tsconfig.json`](../../tsconfig.json), [`next.config.mjs`](../../next.config.mjs), [`tailwind.config.ts`](../../tailwind.config.ts), [`postcss.config.mjs`](../../postcss.config.mjs) và [`vercel.json`](../../vercel.json) (đặt region `sin1` Singapore).
  - Thêm [`scripts/fix-win-fs.cjs`](../../scripts/fix-win-fs.cjs) để xử lý tương thích ổ đĩa exFAT trên Windows khi chạy `next dev` / `next build` (tự động bỏ qua trên môi trường Linux của Vercel).
- **Chuẩn hóa tài nguyên hình ảnh cục bộ (`public/images/`):**
  - Tải toàn bộ 33 hình ảnh từ bản thiết kế Google Stitch về lưu cục bộ tại `public/images/` với tên file chuẩn hóa (`doctor-hero.jpg`, `specialty-knee-hip.jpg`, `prp-feature.jpg`, `cert-master-degree.jpg`, v.v.) để tránh lỗi hết hạn đường dẫn ảnh tạm và dễ thay thế ảnh thật.
- **Tách dữ liệu tập trung (Data-driven Architecture):**
  - Xây dựng [`src/data/siteData.ts`](../../src/data/siteData.ts) quản lý toàn bộ nội dung 14 phân khu trang chủ: hồ sơ bác sĩ, 4 cột mốc hành trình nghề y, 8 chuyên khoa điều trị, chuyên đề PRP, 6 trụ cột y học lối sống, hoạt động hội nghị CME, 3 văn bằng/chứng chỉ hành nghề, danh sách phát video tư vấn, câu chuyện bệnh nhân, bài viết kiến thức y khoa và thông tin 2 cơ sở phòng khám (Cần Thơ & TP.HCM).
- **Xây dựng giao diện & nâng cấp tương tác UI/UX:**
  - [`src/components/Header.tsx`](../../src/components/Header.tsx): Tối ưu thanh điều hướng ngang chuẩn UI/UX gồm 3 vùng cân đối (Logo `TM+` + Tên Bác sĩ, 6 mục menu ngang `Trang chủ`, `Giới thiệu`, `Huyết tương giàu tiểu cầu`, `Kiến thức`, `Câu chuyện điều trị`, `Liên hệ` có hiệu ứng active theo vị trí cuộn trang, và nút CTA `ĐẶT LỊCH KHÁM`). Lược bỏ phần Hotline và dòng phụ đề trên Header để giao diện thoáng đạt, đồng thời tích hợp Drawer Menu cho thiết bị di động.
  - [`src/components/HomeClient.tsx`](../../src/components/HomeClient.tsx): Hoàn thiện 14 phân khu trang chủ kèm các tương tác chuyên sâu:
    - Modal xem chi tiết triệu chứng & hướng điều trị bảo tồn cho từng chuyên khoa trong 8 lĩnh vực chuyên môn.
    - Modal lời khuyên thực hành cho 6 trụ cột Chăm sóc sức khỏe chủ động.
    - Lightbox phóng to xem rõ Bằng cấp & Chứng chỉ hành nghề.
    - Chuyển đổi video trực tiếp từ danh sách phát (Playlist) và xem tóm tắt 3 điểm cốt lõi cần nhớ.
    - Bộ lọc danh mục bài viết Y khoa (`Tất cả bài viết`, `Khớp Gối`, `Cột Sống`, `Dinh dưỡng`) và cửa sổ đọc toàn văn bài viết.
  - [`src/components/Footer.tsx`](../../src/components/Footer.tsx): Footer 5 cột đầy đủ thông tin pháp lý/miễn trừ trách nhiệm y tế, cụm nút nổi nhanh trên Desktop và thanh Sticky 2 cột dưới đáy màn hình điện thoại (*Gọi Bác Sĩ* + *Đặt lịch khám*) thân thiện với người lớn tuổi.
- **Xây dựng API Đặt lịch khám & Cấu hình SEO Y khoa:**
  - [`src/app/api/booking/route.ts`](../../src/app/api/booking/route.ts) và [`src/components/BookingModal.tsx`](../../src/components/BookingModal.tsx): Kiểm tra định dạng số điện thoại Việt Nam, sinh mã hồ sơ hẹn (`TM-xxxxxx`) và tích hợp sẵn cổng chờ `.env` ([`.env.example`](../../.env.example)) để gửi thông báo về Telegram Bot hoặc Webhook (Google Sheets / CRM).
  - [`src/app/layout.tsx`](../../src/app/layout.tsx), [`src/app/sitemap.ts`](../../src/app/sitemap.ts), [`src/app/robots.ts`](../../src/app/robots.ts): Tích hợp Schema.org JSON-LD (`Physician` & `MedicalClinic`), thẻ OpenGraph, `sitemap.xml` và `robots.txt`.

## Kết quả kiểm tra

- **Kiểm tra Build Production (`npm.cmd run build`):** Thành công 100% (0 lỗi TypeScript/ESLint), pre-render đầy đủ các route tĩnh (`/`, `/robots.txt`, `/sitemap.xml`) và dynamic route (`/api/booking`), dung lượng First Load JS trang chủ đạt `128 kB`.
- **Kiểm tra Localhost (`http://localhost:3000`):** Hiển thị chuẩn hệ thống màu sắc và font chữ `Plus Jakarta Sans`, thanh Header ngang cân đối không bị rớt dòng, các Modal và Form đặt lịch phản hồi tức thời.
- **Đồng bộ GitHub:** Đã khởi tạo và đẩy mã nguồn lên repository `https://github.com/bstrannhutminh/dr-tran-nhut-minh-website` (nhánh `main`) dưới đúng định danh tài khoản `bstrannhutminh`.

## Quyết định

- **Chọn Next.js (App Router) + Tailwind CSS thay vì HTML tĩnh:** Giúp tối ưu toàn diện trên nền tảng Vercel, tích hợp sẵn API Route `/api/booking` để xử lý form đặt lịch bảo mật mà không cần dựng server riêng, đồng thời chuẩn hóa cấu trúc SEO Y khoa (`JSON-LD`, `Sitemap`) và dễ dàng mở rộng các trang con sau này.
- **Tải toàn bộ 33 ảnh từ Google Stitch về `public/images/`:** Tránh rủi ro link ảnh tạm từ `lh3.googleusercontent.com` bị hết hạn hoặc chặn băng thông khi chạy thực tế, đồng thời giúp đội ngũ dễ dàng thay thế bằng ảnh chụp thật của Bác sĩ Trần Minh theo từng tên file rõ ràng.
- **Tinh gọn thanh Menu ngang trên Header còn 6 mục chính và bỏ Hotline trên thanh điều hướng:** Đảm bảo thanh Header hiển thị trên một hàng ngang duy nhất ngay từ màn hình Laptop phổ thông (`1024px+`), tránh rối mắt cho đối tượng bệnh nhân trung niên và cao tuổi, tập trung sự chú ý vào nút chuyển đổi chính `ĐẶT LỊCH KHÁM`.

## Câu hỏi tồn đọng

- Cần cấu hình biến môi trường thực tế (`TELEGRAM_BOT_TOKEN`, `TELEGRAM_CHAT_ID` hoặc `BOOKING_WEBHOOK_URL`) trên Vercel Dashboard để nhận thông báo ngay khi bệnh nhân bấm đặt lịch khám.
- Thay thế dần các hình ảnh minh họa từ Stitch trong `public/images/` bằng ảnh chân dung thực tế của ThS.BS. Trần Nhựt Minh, ảnh văn bằng/chứng chỉ thật và gắn link YouTube ID thực tế cho các video tư vấn ở Phân khu 9.
- Giai đoạn tiếp theo: Mở rộng thêm các trang chuyên sâu độc lập (`/huyet-tuong-giau-tieu-cau`, `/kien-thuc/[slug]`) và kết nối CMS/Supabase để quản trị bài viết y khoa.

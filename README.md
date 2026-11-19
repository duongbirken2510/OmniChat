# 🚀 Stepwell OmniChat

**Stepwell OmniChat** là một ứng dụng Desktop nội bộ mạnh mẽ, được xây dựng trên nền tảng Electron, Vue 3, và TypeScript. Dự án được thiết kế chuyên biệt cho đội ngũ Telesale và Chăm sóc Khách hàng (CSKH), giúp giải quyết triệt để bài toán quản lý tập trung nhiều tài khoản Zalo cá nhân cùng lúc mà không bị giới hạn bảo mật của nền tảng gốc.

Với OmniChat, nhân viên có thể vận hành đồng thời từ 2 đến 5 tài khoản Zalo trên một giao diện hợp nhất (Unified Inbox) quen thuộc, đi kèm một loạt công cụ CRM thu nhỏ và tự động hóa giúp x2 hiệu suất bán hàng.

---

## ✨ Tính Năng Nổi Bật (Core Features)

### 💬 1. Giao Diện Hộp Thư Hợp Nhất (Unified Inbox)
*   **All-in-One:** Gộp luồng tin nhắn chưa đọc của tất cả 5 tài khoản Zalo vào một màn hình duy nhất theo thời gian thực.
*   **Thiết kế Quen thuộc:** Giao diện bắt chước 95% tỷ lệ và màu sắc của Zalo PC gốc, giúp nhân sự làm quen ngay lập tức (Zero-learning curve).
*   **Phân luồng độc lập:** Dễ dàng lọc và xem tin nhắn của từng tài khoản riêng biệt thông qua thanh Sidebar điều hướng.

### 🏷️ 2. Hệ Thống Quản Lý & Phân Loại Khách Hàng (Mini-CRM)
*   **Tagging System:** Gắn thẻ phân loại động (VD: `VIP`, `Đang giao`, `Chờ thanh toán`) cho khách hàng với nhiều mã màu trực quan.
*   **Tự động trích xuất:** Tự động quét và nhận diện Số điện thoại, Email từ nội dung tin nhắn để lưu trữ vào hồ sơ khách.
*   **Ghi chú nội bộ:** Tính năng lưu trữ riêng tư những ghi chú về từng khách hàng, đối tác không thể nhìn thấy.

### ⚡ 3. Tăng Tốc Độ Trả Lời (Productivity Tools)
*   **Trả Lời Nhanh (Smart Quick Replies):** Chỉ cần gõ phím tắt `/`, menu phản hồi văn mẫu sẽ hiện ra. Hỗ trợ biến số động (tự điền tên khách hàng: `{name}`).
*   **Thư Viện Ảnh & Tệp 1-Chạm:** Khung chứa Báo giá, Catalog, Ảnh sản phẩm bán chạy luôn nằm ở cột bên phải. Gửi sang khách hàng chỉ bằng 1 cú Click (Simulated Drop).

### 🤖 4. Tự Động Hóa Thông Minh (Automation)
*   **Lên lịch nhắn tin:** Hẹn giờ tự động gửi tin nài nỉ, nhắc nhở thanh toán vào một khung giờ cụ thể.
*   **Trả lời tự động ngoài giờ:** Thiết lập kịch bản tự động phản hồi theo từ khóa ("báo giá") hoặc khi ngoài giờ hành chính, kèm độ trễ ngẫu nhiên (5-30s) giả lập người thật.
*   **Định tuyến nhóm thông minh:** Tự động gộp các tin nhắn trùng lặp từ Group Chat nếu nhiều tài khoản cùng là thành viên của 1 nhóm.

### 🛡️ 5. Chiến Lược Bảo Vệ Tài Khoản An Toàn Tuyệt Đối
*   **Cách ly danh tính (Fingerprint Isolation):** Mỗi tài khoản chạy trong một "Môi trường giả lập" riêng biệt với thông số Card đồ họa, RAM, User-Agent khác nhau.
*   **Mô phỏng hành vi người thật:** Tự động hóa được tích hợp độ trễ gõ phím ngẫu nhiên, tỉ lệ gõ sai và xóa sửa y hệt con người để tránh hệ thống quét Bot.
*   **Hàng đợi thông minh (Headless Queue):** Ngăn chặn xung đột — tin nhắn tự động sẽ tạm hoãn nếu nhân viên đang thao tác gõ phím thủ công cho cùng một khách hàng.

---

## 🛠️ Công Nghệ Nền Tảng

*   **Runtime Framework:** Electron.js (Sử dụng kiến trúc Webview Partitions).
*   **Frontend:** Vue 3 (Composition API), Vite, Tailwind CSS.
*   **Database:** Dexie.js (IndexedDB) bảo mật mã hóa cục bộ.
*   **Data Scraping:** Kỹ thuật nhúng DOM MutationObserver và Multi-Strategy Selector.

---

## 🚀 Cách Thức Sử Dụng Dành Cho Lập Trình Viên

Dự án này sử dụng [pnpm](https://pnpm.io/) / npm làm trình quản lý gói.

### 1. Cài Đặt Ban Đầu
Đảm bảo bạn đã cài đặt Node.js (khuyến nghị bản LTS mới nhất). Sau đó, clone source code và cài dependencies:

```bash
cd omnichat
npm install
```

### 2. Môi Trường Phát Triển (Development)
Khởi chạy Dev Server với Hot-Reloading:

```bash
npm run dev
```

### 3. Đóng Gói (Build & Package)

Biên dịch ứng dụng thành file thực thi cho các hệ điều hành:

*   **Build ra file cài đặt Windows (.exe):**
    ```bash
    npm run build:win
    ```
*   **Build ra bản cho macOS (.dmg):**
    ```bash
    npm run build:mac
    ```
*   **Biên dịch (chưa đóng gói) để test thư mục đầu ra:**
    ```bash
    npm run build:unpack
    ```

---
*Phát triển bởi đội ngũ công nghệ Stepwell. Dành riêng cho lưu hành nội bộ.*

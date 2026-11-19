<div align="center">
  <img src="./Stepwell_Chat_icon.png" alt="OmniChat Logo" width="88" height="88" />
  <h1>OmniChat</h1>
  <p><strong>All-in-One Multi-Platform Messaging Desktop Workspace</strong></p>
  <p>
    <a href="#-english">🇬🇧 English</a> •
    <a href="#-tiếng-việt">🇻🇳 Tiếng Việt</a>
  </p>
</div>

---

## 🇬🇧 English

**OmniChat** is a lightweight, high-performance desktop application built with **Electron**, **Vue 3**, and **TypeScript**. Designed for sales, telesales, e-commerce sellers, and customer support teams, OmniChat unifies multiple accounts across **7 messaging & marketplace platforms** into a single workspace with strict session isolation and instant quick-reply tools.

### 📥 Download Official Installer (Latest: `v1.8.2`)

| Operating System | Architecture | Installer Package | Size | Direct Download |
| :--- | :---: | :--- | :---: | :---: |
| **Windows 10 / 11** | `x64` (64-bit) | `OmniChat_V1.8.2_Setup.exe` | **78.9 MB** | [**⬇️ Download `.exe`**](https://github.com/duongbirken2510/OmniChat/releases/download/v1.8.2/OmniChat_V1.8.2_Setup.exe) |
| **All Releases** | — | GitHub Releases Page | — | [View Release Notes](https://github.com/duongbirken2510/OmniChat/releases/latest) |

### 🌐 Supported Platforms

| Platform | Multi-Account | Special Capabilities |
| :--- | :---: | :--- |
| **Zalo** | ✅ | Real-time unread badge scanning, auto profile/avatar sync, external link routing |
| **Facebook Messenger** | ✅ | Isolated sessions + 1-click toggle to Facebook feed |
| **Facebook Fanpage** | ✅ | Meta Business Suite Inbox — supports **shared-cookie linking** with Messenger accounts (no re-login) or standalone partitions |
| **WhatsApp** | ✅ | Full WhatsApp Web multi-account support |
| **Telegram** | ✅ | Integrated Telegram Web K (`web.telegram.org/k/`) |
| **Shopee** | ✅ | Shopee Seller Webchat + 1-click **Seller Center** switch sharing the same session |
| **TikTok Shop** | ✅ | TikTok Seller Chat + 1-click **Seller Center** switch & custom-protocol popup blocker (`bytedance://`) |

### ✨ Key Features

#### 1. Strict Multi-Account Session Isolation & Resource Optimization
* **Isolated Chromium Partitions (`persist:`):** Run 2, 5, or more accounts of the same platform side-by-side without cookie conflicts.
* **Zero-Waste Background Tabs:** Inactive tabs automatically pause DOM/avatar polling, and hidden accounts completely unmount their webviews to free RAM and CPU.

#### 2. Smart Quick Replies (`\` Trigger + Multi-Image Auto-Paste)
* Type `\` followed by your shortcut (e.g., `\hello`) inside **any** chat input box to open an inline autocomplete menu.
* Attach up to **6 local images** per template — OmniChat inserts the text first and automatically pastes each image sequentially via the native clipboard.

#### 3. Instant Notifications & Sound Alerts
* **Intercepted Web Notifications:** Captures in-page notifications immediately and triggers native OS desktop popups + a clean Web Audio API chime.
* **Multi-Strategy Unread Scanner:** Tracks unread counts via DOM badges, visual unread indicators, and document title observers, accompanied by an animated sidebar bell indicator.

#### 4. Smart Storage Migration & Portable Profile Loader
* **Move Data Off Drive C:** Relocate your entire `OmniChatData` directory (sessions, cache, IndexedDB, quick-reply images) to another drive (`D:\`, `E:\`, etc.) without logging in again.
* **Portable Profile Loader:** Point OmniChat to an existing `OmniChatData` folder (from a USB drive or another computer) and resume work immediately, backed by automatic JSON snapshots for accounts and quick replies.

#### 5. Bilingual Interface (`🇬🇧 EN` / `🇻🇳 VI`)
* Switch seamlessly between **English** and **Vietnamese** in 1 click from either the left sidebar (`VI` / `EN` badge) or **Settings → System**, including native OS dialogs.

### 🛠️ Tech Stack

* **Desktop Runtime:** Electron 33 (`webviewTag` + isolated session partitions + custom `local-img://` protocol)
* **Frontend:** Vue 3 (`<script setup>` Composition API), TypeScript, Vite (`electron-vite`), Tailwind CSS 4
* **Local Database:** Dexie.js (IndexedDB) + automatic local JSON file backups
* **Packaging:** `electron-builder` (NSIS installer for Windows, DMG for macOS, AppImage/DEB/Snap for Linux)

### 🚀 Getting Started (For Developers)

#### Prerequisites
* **Node.js** (LTS >= 20 recommended)
* **pnpm** (recommended) or **npm**

#### 1. Install Dependencies
```bash
git clone https://github.com/duongbirken2510/OmniChat.git
cd OmniChat
pnpm install
```

#### 2. Run in Development Mode
```bash
pnpm run dev
```

#### 3. Typecheck & Build Installers
```bash
# Run TypeScript & Vue type checks
pnpm run typecheck

# Build Windows installer (.exe)
pnpm run build:win

# Build macOS installer (.dmg)
pnpm run build:mac

# Build unpacked directory for local testing
pnpm run build:unpack
```

---

## 🇻🇳 Tiếng Việt

**OmniChat** là ứng dụng Desktop đa nền tảng gọn nhẹ, hiệu năng cao được xây dựng trên **Electron**, **Vue 3** và **TypeScript**. Được thiết kế chuyên biệt cho đội ngũ Kinh doanh, Telesale, Nhà bán hàng TMĐT và Chăm sóc Khách hàng (CSKH), OmniChat giúp vận hành đồng thời nhiều tài khoản trên **7 nền tảng nhắn tin & sàn thương mại điện tử** ngay trong một cửa sổ duy nhất.

### 📥 Tải Bộ Cài Đặt Chính Thức (Mới nhất: `v1.8.2`)

| Hệ điều hành | Kiến trúc | Tên tệp cài đặt | Dung lượng | Liên kết tải trực tiếp |
| :--- | :---: | :--- | :---: | :---: |
| **Windows 10 / 11** | `x64` (64-bit) | `OmniChat_V1.8.2_Setup.exe` | **78.9 MB** | [**⬇️ Tải bộ cài `.exe`**](https://github.com/duongbirken2510/OmniChat/releases/download/v1.8.2/OmniChat_V1.8.2_Setup.exe) |
| **Tất cả phiên bản** | — | Trang GitHub Releases | — | [Xem chi tiết bản phát hành](https://github.com/duongbirken2510/OmniChat/releases/latest) |

### 🌐 Các Nền Tảng Hỗ Trợ

| Nền tảng | Đa tài khoản | Tính năng chuyên biệt |
| :--- | :---: | :--- |
| **Zalo** | ✅ | Tự động đồng bộ tên/ảnh đại diện, quét số tin chưa đọc thời gian thực, mở link ngoài mượt mà |
| **Facebook Messenger** | ✅ | Cách ly phiên đăng nhập độc lập + nút chuyển nhanh sang Facebook |
| **Facebook Fanpage** | ✅ | Meta Business Suite Inbox — hỗ trợ **liên kết chung cookie** với tài khoản Messenger (không cần đăng nhập lại) hoặc tạo độc lập |
| **WhatsApp** | ✅ | Hỗ trợ đăng nhập song song nhiều tài khoản WhatsApp Web |
| **Telegram** | ✅ | Tích hợp sẵn Telegram Web K (`web.telegram.org/k/`) |
| **Shopee** | ✅ | Shopee Webchat + chuyển nhanh sang **Kênh Người Bán** giữ nguyên phiên đăng nhập |
| **TikTok Shop** | ✅ | TikTok Seller Chat + mở nhanh **Kênh Người Bán** & chặn triệt để popup protocol lạ (`bytedance://`) |

### ✨ Tính Năng Nổi Bật

#### 1. Cách Ly Phiên Đăng Nhập & Tối Ưu Tài Nguyên
* **Chromium Partitions độc lập (`persist:`):** Đăng nhập cùng lúc nhiều tài khoản Zalo, Messenger, Shopee, TikTok… mà không bị đá phiên hay xung đột cookie.
* **Tiết kiệm RAM & CPU:** Tự động tạm dừng bộ quét DOM ở các tab không hiển thị; tài khoản được bấm **Ẩn** sẽ tắt hoàn toàn webview để giải phóng bộ nhớ.

#### 2. Tin Nhắn Mẫu Siêu Tốc (Gõ phím tắt `\` + Đính kèm 6 ảnh)
* Chỉ cần gõ dấu `\` kèm phím tắt (VD: `\xinchao`) ngay trong ô nhập chat để bật bảng gợi ý nhanh.
* Hỗ trợ đính kèm tối đa **6 hình ảnh** cho mỗi mẫu — tự động chèn nội dung chữ trước rồi lần lượt dán từng ảnh qua Clipboard hệ thống.

#### 3. Thông Báo & Âm Thanh Thời Gian Thực
* **Bắt thông báo tức thì:** Tự động nhận diện tin nhắn mới, phát âm báo "ting" qua Web Audio API, hiển thị popup thông báo Desktop và hiệu ứng chuông rung trên thanh Sidebar.

#### 4. Chuyển Nhà Dữ Liệu & Nạp Hồ Sơ Di Động (Tránh Tràn Ổ C)
* **Chuyển nhà (`Move Data`):** Di chuyển toàn bộ thư mục dữ liệu `OmniChatData` sang ổ đĩa khác (`D:\`, `E:\`…) mà vẫn giữ nguyên phiên đăng nhập.
* **Nạp dữ liệu (`Load Data`):** Kết nối trực tiếp tới thư mục `OmniChatData` có sẵn từ USB hoặc máy tính khác kèm cơ chế tự động sao lưu JSON cho danh sách tài khoản và tin nhắn mẫu.

#### 5. Giao Diện Song Ngữ Anh – Việt (`🇬🇧 EN` / `🇻🇳 VI`)
* Chuyển đổi tức thì giữa **Tiếng Việt** và **Tiếng Anh** chỉ với 1 cú nhấp chuột ngay trên thanh Sidebar bên trái hoặc trong mục **Cài đặt → Hệ thống** (đồng bộ cả hộp thoại hệ điều hành).

### 🛠️ Công Nghệ Nền Tảng

* **Desktop Runtime:** Electron 33 (`webviewTag` + phân vùng phiên độc lập + giao thức nội bộ `local-img://`)
* **Frontend:** Vue 3 (`<script setup>` Composition API), TypeScript, Vite (`electron-vite`), Tailwind CSS 4
* **Cơ sở dữ liệu cục bộ:** Dexie.js (IndexedDB) kết hợp tự động sao lưu file JSON trên ổ cứng
* **Đóng gói:** `electron-builder` (NSIS cho Windows, DMG cho macOS, AppImage/DEB/Snap cho Linux)

### 🚀 Hướng Dẫn Cài Đặt & Phát Triển

#### Yêu cầu môi trường
* **Node.js** (khuyến nghị bản LTS >= 20)
* **pnpm** (khuyến nghị) hoặc **npm**

#### 1. Cài đặt thư viện
```bash
git clone https://github.com/duongbirken2510/OmniChat.git
cd OmniChat
pnpm install
```

#### 2. Chạy môi trường phát triển (Hot-Reload)
```bash
pnpm run dev
```

#### 3. Kiểm tra kiểu dữ liệu & Đóng gói bản cài đặt
```bash
# Kiểm tra TypeScript & Vue
pnpm run typecheck

# Đóng gói bộ cài Windows (.exe)
pnpm run build:win

# Đóng gói bộ cài macOS (.dmg)
pnpm run build:mac

# Biên dịch thư mục chạy thử (chưa nén installer)
pnpm run build:unpack
```

---

<div align="center">
  <sub>Developed by <strong>Stepwell / Duong Birken</strong> • Built with Electron, Vue 3 & TypeScript</sub>
</div>

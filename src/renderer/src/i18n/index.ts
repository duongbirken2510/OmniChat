import { ref, computed } from 'vue'
import { getSetting, setSetting } from '../database/db'

export type Locale = 'vi' | 'en'

const currentLocale = ref<Locale>('vi')

export const translations = {
  vi: {
    // Sidebar & Main Controls
    sidebar: {
      switchLangTooltip: 'Ngôn ngữ: Tiếng Việt — Bấm để chuyển sang English',
      settingsTooltip: 'Cài đặt & Quản lý tài khoản',
      quitTooltip: 'Thoát ứng dụng'
    },
    main: {
      backToChat: 'Quay lại Chat',
      backToChatShort: 'Về Chat',
      openFacebook: 'Mở Facebook',
      facebookShort: 'Facebook',
      openSellerCenter: 'Mở Kênh Người Bán',
      sellerCenterShort: 'Kênh Bán',
      refreshTooltip: 'Tải lại trang (Refresh)',
      newMessageFallback: 'Tin nhắn mới!',
      duplicateShortcut: (shortcut: string) =>
        `Phím tắt "\\${shortcut}" đã tồn tại. Vui lòng chọn phím tắt khác.`,
      defaultSnippetContent:
        'Đây là nội dung tin nhắn mẫu. Tin nhắn sẽ được đính kèm tối đa 6 hình ảnh. Khi gửi phần text sẽ gửi trước và hình ảnh gửi sau.'
    },
    // Migration Banner
    migration: {
      oldDataTitle: '📦 Dữ liệu cũ vẫn tồn tại trên ổ đĩa',
      folderLabel: 'Thư mục:',
      later: 'Để sau',
      deleting: 'Đang xóa...',
      deleteOld: 'Xóa dữ liệu cũ'
    },
    // Auto Update Banner
    updateBanner: {
      newVersionTitle: (ver: string) => `Đã có OmniChat bản mới — v${ver}`,
      dismissTooltip: 'Bỏ qua nhắc nhở',
      upToDate: '✅ Ứng dụng đang ở phiên bản mới nhất (V1.8.1)'
    },
    // Settings Modal
    settings: {
      title: 'Cài đặt OmniChat',
      close: 'Đóng',
      done: 'Hoàn tất',
      tabs: {
        accounts: 'Tài khoản',
        system: 'Hệ thống',
        snippets: 'Tin nhắn mẫu'
      },
      accounts: {
        uploadAvatar: 'Tải ảnh đại diện',
        aliasPlaceholder: 'Nhập tên gọi nhớ',
        autoAvatar: '✓ Ảnh tự động',
        unreadCount: (n: number) => `${n} chưa đọc`,
        sellerBtn: 'Kênh Bán',
        sellerBtnTooltip: 'Mở Kênh Người Bán trong cửa sổ mới (không cần đăng nhập lại)',
        showAccount: 'Bật lại',
        hideAccount: 'Ẩn',
        deleteAccount: 'Xóa tài khoản',
        confirmDelete: (name: string) =>
          `Bạn có chắc muốn XÓA tài khoản "${name}"?\n\nHành động này sẽ xóa toàn bộ dữ liệu đăng nhập, cache và ảnh của tài khoản này. Không thể hoàn tác!`,
        confirmStandaloneFanpage:
          'Bạn chưa có tài khoản Messenger nào.\n\n• Bấm OK để tạo Fanpage độc lập (phải đăng nhập Facebook riêng).\n• Bấm Hủy để thêm Messenger trước.',
        fanpagePickerTitle: '🔗 Chọn tài khoản Messenger để liên kết Fanpage:',
        fanpagePickerDesc: 'Fanpage sẽ dùng chung phiên đăng nhập Facebook (không cần login lại)',
        sharedCookie: 'Dùng chung cookie Facebook',
        linkBtn: '🔗 Liên kết',
        standaloneTitle: 'Tạo Fanpage độc lập',
        standaloneDesc: 'Partition riêng, phải đăng nhập Facebook mới',
        cancel: 'Hủy'
      },
      system: {
        languageTitle: 'Ngôn ngữ giao diện',
        languageDesc: 'Chuyển đổi ngôn ngữ hiển thị giữa Tiếng Việt và Tiếng Anh.',
        storageTitle: 'Thư mục lưu trữ dữ liệu',
        storageDesc:
          'Toàn bộ cache, ảnh và cơ sở dữ liệu sẽ được lưu tại thư mục này. Nên chọn ổ đĩa có dung lượng lớn để tránh tràn ổ C.',
        migrating: 'Đang chuyển...',
        moveData: 'Chuyển nhà',
        loadingData: 'Đang kết nối...',
        loadData: 'Nạp dữ liệu',
        loadDataTooltip:
          'Kết nối tới thư mục OmniChatData đã có sẵn (ví dụ từ USB hoặc máy tính khác)',
        loadSuccessTitle: '✅ Đã kết nối dữ liệu thành công!',
        migrateSuccessTitle: '✅ Đã chuyển phiên đăng nhập thành công!',
        loadSuccessDesc:
          'Ứng dụng sẽ sử dụng dữ liệu từ thư mục đã chọn. Vui lòng khởi động lại để áp dụng.',
        migrateSuccessDesc:
          'Phiên đăng nhập đã được sao chép sang thư mục mới. Tin nhắn cũ sẽ tự động đồng bộ lại sau khi khởi động.',
        restartNow: '🔄 Khởi động lại ngay',
        notifSectionTitle: 'Thông báo & Cập nhật',
        notifSectionDesc: 'Cấu hình cách ứng dụng thông báo khi có tin nhắn mới.',
        desktopNotifTitle: 'Hiển thị thông báo Desktop',
        desktopNotifDesc: 'Bật/tắt popup thông báo màn hình khi có khách nhắn tin mới',
        soundTitle: 'Âm thanh thông báo',
        soundDesc: 'Phát tiếng "ting" khi có tin nhắn mới trên bất kỳ tài khoản nào',
        versionTitle: 'Phiên bản ứng dụng',
        versionDescPrefix: 'Đang sử dụng phiên bản',
        checkingUpdate: 'Đang kiểm tra...',
        checkUpdate: 'Kiểm tra cập nhật',
        upToDate: '✅ Ứng dụng đang ở phiên bản mới nhất!',
        hasUpdatePrefix: '🎉 Đã có phiên bản mới:',
        downloadWin: 'Tải Windows',
        downloadMac: 'Tải macOS',
        updateError: 'Không thể kết nối tới máy chủ cập nhật. Vui lòng thử lại.'
      },
      snippets: {
        editTitle: 'Sửa tin nhắn nhanh',
        createTitle: 'Tạo tin nhắn nhanh',
        maxImagesAlert: 'Chỉ được lưu tối đa 6 ảnh cho mỗi mẫu tin nhắn.',
        shortcutPlaceholder: 'Phím tắt (Ví dụ: xinchao)',
        contentPlaceholder: 'Nhập nội dung tin nhắn (gõ \\phimtat trong khung chat để chèn nhanh)',
        removeImage: 'Xóa ảnh',
        addImage: 'Thêm ảnh',
        cancel: 'Hủy',
        save: 'Lưu',
        add: 'Thêm',
        libraryTitle: 'Kho lưu trữ mẫu',
        emptyTitle: 'Trống',
        emptyDesc:
          'Chưa có mẫu nào. Hãy thêm một mẫu mới ở trên để tăng tốc độ trả lời khách hàng nhé.',
        attachedImages: (n: number) => `Đính kèm ${n} ảnh`,
        editTooltip: 'Sửa',
        deleteTooltip: 'Xóa'
      }
    }
  },
  en: {
    // Sidebar & Main Controls
    sidebar: {
      switchLangTooltip: 'Language: English — Click to switch to Tiếng Việt',
      settingsTooltip: 'Settings & Account Manager',
      quitTooltip: 'Quit Application'
    },
    main: {
      backToChat: 'Back to Chat',
      backToChatShort: 'Chat',
      openFacebook: 'Open Facebook',
      facebookShort: 'Facebook',
      openSellerCenter: 'Open Seller Center',
      sellerCenterShort: 'Seller',
      refreshTooltip: 'Reload page (Refresh)',
      newMessageFallback: 'New message!',
      duplicateShortcut: (shortcut: string) =>
        `Shortcut "\\${shortcut}" already exists. Please choose another shortcut.`,
      defaultSnippetContent:
        'Sample quick reply template. Up to 6 images can be attached; text is inserted first followed by images.'
    },
    // Migration Banner
    migration: {
      oldDataTitle: '📦 Previous storage data still exists on disk',
      folderLabel: 'Folder:',
      later: 'Later',
      deleting: 'Deleting...',
      deleteOld: 'Delete Old Data'
    },
    // Auto Update Banner
    updateBanner: {
      newVersionTitle: (ver: string) => `New OmniChat version available — v${ver}`,
      dismissTooltip: 'Dismiss reminder',
      upToDate: '✅ Application is up to date (V1.8.1)'
    },
    // Settings Modal
    settings: {
      title: 'OmniChat Settings',
      close: 'Close',
      done: 'Done',
      tabs: {
        accounts: 'Accounts',
        system: 'System',
        snippets: 'Quick Replies'
      },
      accounts: {
        uploadAvatar: 'Upload Avatar',
        aliasPlaceholder: 'Enter account alias',
        autoAvatar: '✓ Auto avatar',
        unreadCount: (n: number) => `${n} unread`,
        sellerBtn: 'Seller',
        sellerBtnTooltip: 'Open Seller Center in a new window (shares current login session)',
        showAccount: 'Show account',
        hideAccount: 'Hide account',
        deleteAccount: 'Delete account',
        confirmDelete: (name: string) =>
          `Are you sure you want to DELETE account "${name}"?\n\nThis will permanently remove all login sessions, cache, and images for this account. This action cannot be undone!`,
        confirmStandaloneFanpage:
          'You do not have any Messenger accounts yet.\n\n• Click OK to create a standalone Fanpage (requires a separate Facebook login).\n• Click Cancel to add a Messenger account first.',
        fanpagePickerTitle: '🔗 Select a Messenger account to link with Fanpage:',
        fanpagePickerDesc: 'Fanpage will share the same Facebook login session (no re-login required)',
        sharedCookie: 'Shares Facebook cookies',
        linkBtn: '🔗 Link',
        standaloneTitle: 'Create standalone Fanpage',
        standaloneDesc: 'Isolated partition, requires separate Facebook login',
        cancel: 'Cancel'
      },
      system: {
        languageTitle: 'Interface Language',
        languageDesc: 'Switch the display language between Vietnamese and English.',
        storageTitle: 'Data Storage Directory',
        storageDesc:
          'All chat caches, images, and local databases are stored here. Select a drive with plenty of free space to avoid filling up Drive C.',
        migrating: 'Moving...',
        moveData: 'Move Data',
        loadingData: 'Loading...',
        loadData: 'Load Data',
        loadDataTooltip:
          'Connect to an existing OmniChatData folder (e.g., from a USB drive or another PC)',
        loadSuccessTitle: '✅ Data folder connected successfully!',
        migrateSuccessTitle: '✅ Login sessions migrated successfully!',
        loadSuccessDesc:
          'OmniChat will use data from the selected directory. Please restart to apply changes.',
        migrateSuccessDesc:
          'Login sessions have been copied to the new folder. Chat history will resync automatically after restart.',
        restartNow: '🔄 Restart Now',
        notifSectionTitle: 'Notifications & Updates',
        notifSectionDesc: 'Configure how OmniChat alerts you when new messages arrive.',
        desktopNotifTitle: 'Desktop Notifications',
        desktopNotifDesc: 'Show or hide OS desktop notification popups for incoming messages',
        soundTitle: 'Notification Sound',
        soundDesc: 'Play a chime sound whenever a new message arrives on any account',
        versionTitle: 'Application Version',
        versionDescPrefix: 'Currently running version',
        checkingUpdate: 'Checking...',
        checkUpdate: 'Check for Updates',
        upToDate: '✅ You are running the latest version!',
        hasUpdatePrefix: '🎉 New version available:',
        downloadWin: 'Download Windows',
        downloadMac: 'Download macOS',
        updateError: 'Unable to reach the update server. Please try again.'
      },
      snippets: {
        editTitle: 'Edit Quick Reply',
        createTitle: 'Create Quick Reply',
        maxImagesAlert: 'You can attach up to 6 images per quick reply template.',
        shortcutPlaceholder: 'Shortcut (e.g. hello)',
        contentPlaceholder: 'Enter message content (type \\shortcut in chat input to insert)',
        removeImage: 'Remove image',
        addImage: 'Add Images',
        cancel: 'Cancel',
        save: 'Save',
        add: 'Add',
        libraryTitle: 'Saved Templates',
        emptyTitle: 'Empty',
        emptyDesc: 'No templates yet. Add one above to reply to customers faster.',
        attachedImages: (n: number) => `${n} ${n === 1 ? 'image' : 'images'} attached`,
        editTooltip: 'Edit',
        deleteTooltip: 'Delete'
      }
    }
  }
} as const

export function useI18n() {
  const t = computed(() => translations[currentLocale.value])

  const setLocale = async (locale: Locale) => {
    currentLocale.value = locale
    try {
      await setSetting('language', locale)
    } catch {
      /* ignore */
    }
    try {
      await window.api?.setLanguage?.(locale)
    } catch {
      /* ignore */
    }
  }

  const toggleLocale = async () => {
    const next: Locale = currentLocale.value === 'vi' ? 'en' : 'vi'
    await setLocale(next)
  }

  const initLocale = async () => {
    try {
      const saved = await getSetting('language', 'vi')
      const resolved: Locale = saved === 'en' ? 'en' : 'vi'
      currentLocale.value = resolved
      await window.api?.setLanguage?.(resolved)
    } catch {
      currentLocale.value = 'vi'
    }
  }

  return {
    locale: currentLocale,
    t,
    setLocale,
    toggleLocale,
    initLocale
  }
}

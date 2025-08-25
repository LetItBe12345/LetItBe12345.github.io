// Lightweight client-side i18n for EN/ZH with minimal intrusion
(() => {
  const STORAGE_KEY = 'lang';
  const SUPPORTED = ['en', 'zh'];

  // Translation dictionary
  const dict = {
    'nav.home': { en: 'Home', zh: '首页' },
    'nav.publications': { en: 'Publications', zh: '论文' },
    'nav.news': { en: 'News', zh: '新闻' },
    'nav.cv': { en: 'CV', zh: '简历' },
    'nav.repositories': { en: 'Repositories', zh: '仓库' },

    'btn.lang': { en: '中文', zh: 'EN' },

    'home.latestNews': { en: 'Latest News', zh: '最新动态' },
    'home.viewAllNews': { en: 'View all news →', zh: '查看全部新闻 →' },
    'home.researchInterests': { en: 'Research Interests', zh: '研究方向' },
    'home.research': { en: 'Research', zh: '研究' },

    'home.btn.papers': { en: 'Research Papers', zh: '论文' },
    'home.btn.contact': { en: 'Contact Me', zh: '联系我' },

    'home.field.xai': { en: 'Explainable AI', zh: '可解释人工智能' },
    'home.field.cv': { en: 'Computer Vision', zh: '计算机视觉' },
    'home.field.mi': { en: 'Medical Imaging', zh: '医学影像' },
    'home.field.eeg': { en: 'EEG Signal Processing', zh: '脑电信号处理' }
  };

  function getLang() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (SUPPORTED.includes(stored)) return stored;
    // default to English; could detect by navigator.language if desired
    return 'en';
  }

  function setLang(lang) {
    const next = SUPPORTED.includes(lang) ? lang : 'en';
    localStorage.setItem(STORAGE_KEY, next);
    document.documentElement.setAttribute('lang', next === 'zh' ? 'zh-CN' : 'en');
    applyTranslations();
  }

  function toggleLang() {
    setLang(getLang() === 'en' ? 'zh' : 'en');
  }

  function applyTranslations(root = document) {
    const lang = getLang();
    root.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      const item = dict[key];
      if (!item) return; // silent if key not found
      const val = item[lang] ?? item.en;
      if (val != null) el.textContent = val;
    });

    // Update toggle button tooltip/title if present
    const btn = root.querySelector('#lang-toggle');
    if (btn) {
      btn.setAttribute('aria-label', lang === 'en' ? 'Switch to Chinese' : '切换到英文');
    }
  }

  function init() {
    // Ensure lang attr is set
    document.documentElement.setAttribute('lang', getLang() === 'zh' ? 'zh-CN' : 'en');
    applyTranslations();
  }

  // Expose controls
  window.__i18n = { getLang, setLang, toggleLang, applyTranslations };

  // Init on load and when Astro swaps pages
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
  document.addEventListener('astro:page-load', () => init());
})();


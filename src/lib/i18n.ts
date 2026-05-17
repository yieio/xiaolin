export type Locale = "en" | "zh";

type TranslationKey = keyof typeof en;

export const defaultLocale: Locale = "zh";

const en = {
  "site.title": "Xiaolin Comics",
  "site.description": "Daily dose of humor and life through Xiaolin's unique illustrations",
  "site.tagline": "Life Comic Gallery",
  "search.placeholder": "Search comics...",
  "search.noResults": "No comics found",
  "search.loading": "Searching...",
  "search.hot": "Trending",
  "comic.share": "Share",
  "comic.copyLink": "Copy Link",
  "comic.prev": "Previous",
  "comic.next": "Next",
  "comic.backToList": "Back to Gallery",
  "comic.details": "Comic Details",
  "comic.close": "Close",
  "comic.author": "About the Author",
  "comic.authorName": "Xiaolin",
  "comic.authorBio": "Capturing life's warm moments",
  "home.loading": "Loading comics...",
  "home.loadMore": "Load More",
  "home.featured": "Today's Picks",
  "home.swipeHint": "Swipe left or right",
  "home.worksCount": (n: number) => `${n} works`,
  "nav.home": "Home",
  "nav.language": "Language",
  "footer.rights": "All rights reserved.",
  "tags.all": "All",
  "tags.more": "More",
  "tags.allTags": "All Tags",
} satisfies Record<string, string | ((n: number) => string)>;

const zh = {
  "site.title": "小林漫画",
  "site.description": "每天一幅小林漫画，用幽默与生活对话",
  "site.tagline": "生活漫画馆",
  "search.placeholder": "搜索漫画...",
  "search.noResults": "没有找到相关漫画",
  "search.loading": "搜索中...",
  "search.hot": "热门搜索",
  "comic.share": "分享",
  "comic.copyLink": "复制链接",
  "comic.prev": "上一张",
  "comic.next": "下一张",
  "comic.backToList": "返回画廊",
  "comic.details": "漫画详情",
  "comic.close": "关闭",
  "comic.author": "关于作者",
  "comic.authorName": "小林",
  "comic.authorBio": "用画笔记录生活的温暖瞬间",
  "home.loading": "漫画加载中...",
  "home.loadMore": "加载更多",
  "home.featured": "今日精选",
  "home.swipeHint": "左右滑动",
  "home.worksCount": (n: number) => `共 ${n} 幅作品`,
  "nav.home": "首页",
  "nav.language": "语言",
  "footer.rights": "版权所有。",
  "tags.all": "全部",
  "tags.more": "更多",
  "tags.allTags": "全部标签",
} satisfies Record<TranslationKey, string | ((n: number) => string)>;

const translations: Record<Locale, Record<string, string | ((n: number) => string)>> = { en, zh };

export function t(key: TranslationKey, locale: Locale): string {
  const val = translations[locale]?.[key] ?? translations[defaultLocale]?.[key] ?? key;
  return typeof val === "string" ? val : key;
}

export function formatLikes(n: number, locale: Locale): string {
  if (locale === "zh" && n >= 10000) {
    return (n / 10000).toFixed(1) + "万";
  }
  return n.toLocaleString(locale === "zh" ? "zh-CN" : "en-US");
}

export function getTagLabel(tag: string, locale: Locale): string {
  const parts = tag.split(" ");
  return locale === "zh" ? parts[0] : (parts[1] || parts[0]);
}

export function getAlternateLang(lang: Locale): Locale {
  return lang === "en" ? "zh" : "en";
}

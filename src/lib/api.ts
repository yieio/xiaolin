export interface Comic {
  id: number;
  title: { zh: string; en: string };
  text: { zh: string; en: string };
  date: string;
  likes: number;
  tags: { zh: string[]; en: string[] };
  color: string;
  image: string;
  featured: boolean;
}

export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface SearchParams {
  keyword: string;
  sort?: "default" | "latest" | "hot";
  page?: number;
  pageSize?: number;
}

export interface LabelItem {
  name: string;
  count: number;
}

const API_BASE = import.meta.env.PUBLIC_API_BASE || "";

const MOCK_COMICS: Comic[] = [
  { id: 1, title: { zh: "等国庆", en: "Waiting" }, text: { zh: "盼望着，盼望着，\n国庆来了，\n假期的脚步近了。", en: "Waiting, waiting,\nNational Day is here,\nThe holiday footsteps approach." }, date: "2025-09-28", likes: 2847, tags: {zh:["生活","幽默"], en:["Life","Humor"]}, color: "#FFFFFF", image: "/imgs/image_2.png", featured: true },
  { id: 2, title: { zh: "带娃旅行", en: "Kids" }, text: { zh: "带娃旅行\n就是换个地方\n继续崩溃", en: "Traveling with kids\nIs just having a meltdown\nIn a different city" }, date: "2025-10-15", likes: 3652, tags: {zh:["旅行","生活"], en:["Travel","Life"]}, color: "#FFFFFF", image: "/imgs/image_3.png", featured: true },
  { id: 3, title: { zh: "惩罚司机", en: "Taxi" }, text: { zh: "每次打车\n司机开得太快\n我就默默系上安全带", en: "Every time I taxi\nAnd the driver speeds\nI quietly buckle up" }, date: "2025-11-02", likes: 1523, tags: {zh:["生活","幽默"], en:["Life","Humor"]}, color: "#FFFFFF", image: "/imgs/image_4.png", featured: true },
  { id: 4, title: { zh: "望得见大海", en: "Sea View" }, text: { zh: "终于住上了\n望得见大海的房子\n虽然只是在售楼处的沙盘里", en: "Finally living in\na house with a sea view\n…in the sales office model" }, date: "2025-11-20", likes: 4521, tags: {zh:["生活","幽默"], en:["Life","Humor"]}, color: "#FFFFFF", image: "/imgs/image_5.png", featured: true },
  { id: 5, title: { zh: "阴霾再久", en: "Haze" }, text: { zh: "阴霾再久\n也总会有阳光\n从云缝里漏下来", en: "No matter how long the haze,\nSunlight always finds\na crack in the clouds" }, date: "2025-12-05", likes: 6789, tags: {zh:["情感","生活"], en:["Emotion","Life"]}, color: "#FFFFFF", image: "/imgs/image_6.png", featured: true },
  { id: 6, title: { zh: "周一综合症", en: "Monday" }, text: { zh: "周一早上的我\n和周日晚上不肯睡的我\n是同一个我却又判若两人", en: "Monday morning me\nAnd Sunday night me\nSame person, different souls" }, date: "2025-12-18", likes: 8934, tags: {zh:["工作","幽默"], en:["Work","Humor"]}, color: "#FFFFFF", image: "/imgs/image_7.png", featured: false },
  { id: 7, title: { zh: "成年人的崩溃", en: "Breakdown" }, text: { zh: "成年人的崩溃\n从来不是一瞬间\n是攒够了才敢哭出来", en: "An adult's breakdown\nNever happens all at once\nIt builds up until you finally cry" }, date: "2026-01-10", likes: 10234, tags: {zh:["情感","生活"], en:["Emotion","Life"]}, color: "#FFFFFF", image: "/imgs/image_8.png", featured: false },
  { id: 8, title: { zh: "手机没电", en: "Phone Dead" }, text: { zh: "手机没电的那一刻\n终于抬起头\n看见了这个世界", en: "The moment my phone died\nI finally looked up\nAnd saw the world" }, date: "2026-02-14", likes: 5678, tags: {zh:["生活","幽默"], en:["Life","Humor"]}, color: "#FFFFFF", image: "/imgs/image_9.png", featured: false },
  { id: 9, title: { zh: "终于下厨", en: "Cooking" }, text: { zh: "在餐馆吃到好吃的菜\n我也总想做出来\n没想到餐馆也挺难做", en: "Finally living in\na house with a sea view\n…in the sales office model" }, date: "2026-03-01", likes: 4321, tags: {zh:["生活","幽默"], en:["Life","Humor"]}, color: "#FFFFFF", image: "/imgs/image_10.png", featured: false },
  { id: 10, title: { zh: "挤地铁", en: "Subway" }, text: { zh: "还记得广州地铁三号线\n高峰期的时候\n四个朋友出去玩\n上地铁只剩两个人\n到站只剩我一个人", en: "Remember that subway ride\nWhen we got on together\nBut only I got off" }, date: "2026-03-15", likes: 7654, tags: {zh:["生活","幽默"], en:["Life","Humor"]}, color: "#FFFFFF", image: "/imgs/image_11.png", featured: false },
  { id: 11, title: { zh: "我的做饭技巧", en: "Cooking Skills" }, text: { zh: "我的做饭技巧\n有什么佐料都放一点", en: "My cooking secret\nJust add a little of everything" }, date: "2026-04-01", likes: 5432, tags: {zh:["生活","幽默"], en:["Life","Humor"]}, color: "#FFFFFF", image: "/imgs/image_12.png", featured: false },
  { id: 12, title: { zh: "对我来说", en: "For Me" }, text: { zh: "对我来说\n最浪漫的事\n就是和不一样的人一起吃饭\n或者是和一样的人\n吃不一样的饭", en: "The most romantic thing\nIs eating with different people\nOr eating different food\nWith the same person" }, date: "2026-05-01", likes: 9876, tags: {zh:["情感","生活"], en:["Emotion","Life"]}, color: "#FFFFFF", image: "/imgs/image_13.png", featured: false }
];

export const ALL_TAGS = ["全部 All", "生活 Life", "幽默 Humor", "旅行 Travel", "情感 Emotion", "工作 Work"];
export const HOT_ZH = ["国庆", "旅行", "带娃", "周一", "崩溃", "手机", "做饭", "地铁", "浪漫"];
export const HOT_EN = ["National Day", "Travel", "Kids", "Monday", "Breakdown", "Phone", "Cooking", "Subway", "Romance"];

function normalizeTags(tags: unknown): { zh: string[]; en: string[] } {
  if (!tags || typeof tags !== "object" || Array.isArray(tags)) return { zh: [], en: [] };
  const t = tags as Record<string, unknown>;
  return { zh: Array.isArray(t.zh) ? t.zh as string[] : [], en: Array.isArray(t.en) ? t.en as string[] : [] };
}

function normalizeComic(c: Comic): Comic {
  return { ...c, tags: normalizeTags(c.tags) };
}

function normalizeComics(comics: Comic[]): Comic[] {
  return comics.map(normalizeComic);
}

async function fetchFromAPI<T>(path: string): Promise<T | null> {
  if (!API_BASE) {
    return null;
  }
  try {
    const url = `${API_BASE}/v1${path}`;
    const res = await fetch(url);
    if (!res.ok) {
      return null;
    }
    const json = await res.json();
    if (json.code === 0 && json.data) {
      return json.data as T;
    }
    return null;
  } catch {
    return null;
  }
}

export async function getComics(lang: "en" | "zh", page = 1, pageSize = 20): Promise<PaginatedResponse<Comic>> {
  const data = await fetchFromAPI<PaginatedResponse<Comic>>(
    `/comics?page=${page}&pageSize=${pageSize}&lang=${lang}`
  );

  if (data && data.items && data.items.length > 0) {
    return { ...data, items: normalizeComics(data.items) };
  }

  return {
    items: MOCK_COMICS,
    total: MOCK_COMICS.length,
    page,
    pageSize,
    hasMore: false
  };
}

export async function getFeaturedComics(lang: "en" | "zh" = "zh"): Promise<Comic[]> {
  const data = await fetchFromAPI<Comic[]>(
    `/comics/featured?lang=${lang}`
  );

  if (data && data.length > 0) {
    return normalizeComics(data);
  }

  return MOCK_COMICS.filter(c => c.featured);
}

export async function getComic(id: number, lang: "en" | "zh"): Promise<Comic> {
  const data = await fetchFromAPI<PaginatedResponse<Comic>>(
    `/comics?page=1&pageSize=100&lang=${lang}`
  );

  if (data && data.items && data.items.length > 0) {
    const found = data.items.find(c => c.id === id);
    if (found) {
      return normalizeComic(found);
    }
  }

  const comic = MOCK_COMICS.find(c => c.id === id);
  if (!comic) throw new Error("Comic not found");
  return comic;
}

export async function searchComics(params: SearchParams): Promise<PaginatedResponse<Comic>> {
  const page = params.page ?? 1;
  const pageSize = params.pageSize ?? 20;
  const sort = params.sort ?? "default";

  const data = await fetchFromAPI<PaginatedResponse<Comic>>(
    `/comics/search?keyword=${encodeURIComponent(params.keyword)}&sort=${sort}&page=${page}&pageSize=${pageSize}`
  );

  if (data && data.items && data.items.length > 0) {
    return { ...data, items: normalizeComics(data.items) };
  }

  // Fallback to client-side filtering on mock data
  const q = params.keyword.toLowerCase();
  const filtered = MOCK_COMICS.filter(c =>
    c.title.zh.toLowerCase().includes(q) ||
    c.title.en.toLowerCase().includes(q) ||
    c.text.zh.includes(params.keyword) ||
    c.text.en.toLowerCase().includes(q) ||
    [...(c.tags.zh || []), ...(c.tags.en || [])].some(t => t.toLowerCase().includes(q))
  );

  return {
    items: filtered,
    total: filtered.length,
    page,
    pageSize,
    hasMore: false
  };
}

export async function getComicsByTag(
  tag: string,
  lang: "en" | "zh" = "zh",
  page = 1,
  pageSize = 20
): Promise<PaginatedResponse<Comic>> {
  const data = await fetchFromAPI<PaginatedResponse<Comic>>(
    `/comics?tag=${encodeURIComponent(tag)}&lang=${lang}&page=${page}&pageSize=${pageSize}`
  );

  if (data && data.items && data.items.length > 0) {
    return { ...data, items: normalizeComics(data.items) };
  }

  const q = tag.toLowerCase();
  const filtered = MOCK_COMICS.filter(c =>
    [...(c.tags[lang] || [])].some(t => t.toLowerCase() === q)
  );

  return {
    items: filtered,
    total: filtered.length,
    page,
    pageSize,
    hasMore: false
  };
}

export async function getLabels(lang: "en" | "zh" = "zh"): Promise<LabelItem[]> {
  const data = await fetchFromAPI<LabelItem[]>(
    `/comics/labels?lang=${lang}`
  );

  if (data && data.length > 0) {
    return data;
  }

  // Fallback: extract tags from mock data
  const countMap = new Map<string, number>();
  MOCK_COMICS.forEach(c => {
    (c.tags[lang] || []).forEach(t => {
      countMap.set(t, (countMap.get(t) || 0) + 1);
    });
  });
  return Array.from(countMap, ([name, count]) => ({ name, count }));
}

export async function likeComic(id: number): Promise<boolean> {
  if (!API_BASE) return false;
  try {
    const res = await fetch(`${API_BASE}/v1/comics/${id}/like`, { method: "POST" });
    if (!res.ok) return false;
    const json = await res.json();
    return json.code === 0;
  } catch {
    return false;
  }
}

export async function subscribeEmail(email: string): Promise<{ success: boolean; message: string }> {
  if (!API_BASE) return { success: false, message: "API not configured" };
  try {
    const res = await fetch(`${API_BASE}/v1/subscribe`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });
    const json = await res.json();
    if (json.code === 0) {
      return { success: true, message: json.message || "ok" };
    }
    return { success: false, message: json.message || "Subscription failed" };
  } catch {
    return { success: false, message: "Network error" };
  }
}

import type { Locale } from "./i18n";

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
}

export function comicUrl(lang: Locale, id: number, title?: string): string {
  const slug = title ? `-${slugify(title)}` : "";
  return `/${lang}/comic/${id}${slug}`;
}

export function getImageUrl(comicId: number, type: "full" | "thumb" = "full"): string {
  const cdn = import.meta.env.PUBLIC_CDN_URL || "";
  const base = cdn ? `${cdn}/comics/${comicId}` : `/api/comics/${comicId}/image`;
  return type === "thumb" ? `${base}?w=400&format=webp` : `${base}?format=webp`;
}

export function copyToClipboard(text: string): Promise<void> {
  return navigator.clipboard.writeText(text);
}

export function debounce<T extends (...args: Parameters<T>) => void>(fn: T, delay: number): T {
  let timer: ReturnType<typeof setTimeout>;
  return ((...args: Parameters<T>) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  }) as T;
}

// src/middleware.ts
import { defineMiddleware } from 'astro:middleware';

export const onRequest = defineMiddleware((context, next) => {
  // 因为你已经在 index.astro 和 [lang] 文件夹里处理了路由逻辑，
  // 所以这里什么都不用做，直接放行 (next) 即可。
  return next();
});
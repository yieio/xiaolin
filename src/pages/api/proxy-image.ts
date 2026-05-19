import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ url }) => {
  const imageUrl = url.searchParams.get("url");
  if (!imageUrl) {
    return new Response("Missing 'url' parameter", { status: 400 });
  }

  try {
    const response = await fetch(imageUrl);
    if (!response.ok) {
      return new Response("Failed to fetch image", { status: response.status });
    }

    const contentType = response.headers.get("content-type") || "image/jpeg";
    const buffer = await response.arrayBuffer();

    return new Response(buffer, {
      status: 200,
      headers: {
        "Content-Type": contentType,
        "Access-Control-Allow-Origin": "*",
        "Cache-Control": "public, max-age=86400",
      },
    });
  } catch {
    return new Response("Failed to proxy image", { status: 500 });
  }
};

import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const src = searchParams.get("src");
    if (!src) return NextResponse.json({ error: "src is required" }, { status: 400 });
    let url: URL;
    try {
      url = new URL(src);
    } catch {
      return NextResponse.json({ error: "invalid url" }, { status: 400 });
    }
    if (!["http:", "https:"].includes(url.protocol)) {
      return NextResponse.json({ error: "invalid protocol" }, { status: 400 });
    }
    const upstream = await fetch(url.toString(), {
      // Pass through basic headers; you may want to add a custom UA
      headers: { "User-Agent": "ServeFlow Image Proxy" },
      cache: "no-store",
    });
    const contentType = upstream.headers.get("content-type") || "application/octet-stream";
    if (!contentType.startsWith("image/")) {
      return NextResponse.json({ error: "not an image" }, { status: 400 });
    }
    const data = await upstream.arrayBuffer();
    const res = new NextResponse(data, {
      headers: {
        "content-type": contentType,
        "cache-control": "public, max-age=3600, s-maxage=3600",
      },
      status: 200,
    });
    return res;
  } catch {
    return NextResponse.json({ error: "fetch failed" }, { status: 500 });
  }
}

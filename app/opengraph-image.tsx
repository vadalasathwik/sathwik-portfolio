import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/config";

export const alt = siteConfig.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#121417",
          color: "#ECEEF0",
          padding: 72,
        }}
      >
        <div style={{ fontSize: 34, color: "#7FD1BE" }}>{siteConfig.name}</div>
        <div style={{ fontSize: 76, fontWeight: 700, lineHeight: 1.05, letterSpacing: -2 }}>
          Building intelligent products with AI, Python & modern web technologies.
        </div>
        <div style={{ fontSize: 30, color: "#98A0AA" }}>{siteConfig.role}</div>
      </div>
    ),
    size,
  );
}

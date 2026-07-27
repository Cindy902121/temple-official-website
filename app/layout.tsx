import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "宮廟官網｜讓信仰隨時在身旁",
  description: "線上收驚、快速預約，讓心靈寄託更靠近。",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-Hant"><body>{children}</body></html>;
}

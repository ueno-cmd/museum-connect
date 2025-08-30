import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ワクワクできる博物館紹介サイト",
  description: "期間限定の魅力的な企画展を発見し、キャラクターと一緒に楽しく学ぼう。全国の博物館の企画展情報を一覧で確認できます。",
  keywords: "博物館, 企画展, 展示, 文化, 歴史, 科学, 美術",
  openGraph: {
    title: "ワクワクできる博物館紹介サイト",
    description: "期間限定の魅力的な企画展を発見し、キャラクターと一緒に楽しく学ぼう",
    type: "website",
    locale: "ja_JP",
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}

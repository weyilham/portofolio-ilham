import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Modern Portfolio | Full-Stack Developer & Designer",
  description: "Portofolio profesional Full-Stack Developer & UI/UX Designer dengan aplikasi web modern, performa tinggi, dan pengalaman pengguna yang luar biasa.",
  keywords: ["Portfolio", "Next.js", "React", "Full Stack Developer", "Web Developer", "UI/UX Designer", "Indonesia"],
  authors: [{ name: "Developer Portfolio" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-[#080b14] text-slate-100 selection:bg-indigo-500 selection:text-white">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import localFont from "next/font/local";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Providers from "@/lib/providers/Provider";
import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";

const pretendard = localFont({
  src: "../../public/fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "100 900",
  variable: "--font-pretendard",
});

export const metadata: Metadata = {
  title: "League Of Legends",
  description: "Riot Games API를 활용한 LoL 정보 앱",
  icons: {
    icon: "/icons/lol.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${pretendard.variable} font-pretendard`}>
        <Providers>
          <ThemeProvider attribute="class">
            <Header />
            <main>{children}</main>
            <Footer />
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  );
}

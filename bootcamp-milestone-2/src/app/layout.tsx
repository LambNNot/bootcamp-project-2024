import type { Metadata } from "next";
import localFont from "next/font/local";
import {Inter} from "next/font/google";
import "./globals.css";
import NavBar from "@/app/components/navbar";

const inter = Inter({subsets: ["latin"]});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "DeMa Excerpt",
  description: "Sam Phan's Personal Website!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar/>
        {children}
      </body>
    </html>
  );
}

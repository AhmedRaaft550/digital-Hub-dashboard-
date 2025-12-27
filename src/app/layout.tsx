import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Header from "@/components/header/Header";
import ReactQueryProvider from "../providers/ReactQueryProvider";
import ReduxProvider from "@/providers/ReduxProvider";
import Footer from "@/components/footer/Footer";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Digital Hub Dashboard",
  description:
    "Advanced dashboard for managing projects, developers, and real-time data visualizations.",
  icons: {
    icon: "/images/icon.png",
  },
  authors: [{ name: "Digital Hub" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <Header />
        <ReduxProvider>
          <ReactQueryProvider>
            <main className="flex-1"> {children}</main>
            <ReactQueryDevtools initialIsOpen={false} />
          </ReactQueryProvider>
        </ReduxProvider>
        <Footer />
      </body>
    </html>
  );
}

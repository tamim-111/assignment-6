import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import { ToastContainer } from "react-toastify";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { FitLogProvider } from "@/context/FitLogContext";

import "react-toastify/dist/ReactToastify.css";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FitLog — Workout Library",
  description: "Train with intent. Log every set.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${oswald.variable}`}>
        <FitLogProvider>
          <Navbar />

          <main>{children}</main>

          <Footer />

          <ToastContainer
            position="bottom-right"
            autoClose={2500}
            theme="dark"
          />
        </FitLogProvider>
      </body>
    </html>
  );
}
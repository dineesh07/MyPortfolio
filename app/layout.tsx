import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import SmoothScroll from "../components/SmoothScroll";
import Cursor from "../components/Cursor";
import Header from "../components/Header";

export const metadata: Metadata = {
  title: "Dineesh M",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased noise-bg">
        <ThemeProvider attribute="class" defaultTheme="dark">
          <SmoothScroll>
            <Header />
            <Cursor />
            {children}
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
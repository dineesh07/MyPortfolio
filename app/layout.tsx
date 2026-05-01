import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import SmoothScroll from "../components/SmoothScroll";
import Header from "../components/Header";
import ClickSpark from "../components/ClickSpark";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Dineesh M | Portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={poppins.variable}>
      <body className={`${poppins.className} antialiased noise-bg`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <ClickSpark
            sparkColor="#000000"
            sparkSize={20}
            sparkRadius={20}
            sparkCount={8}
            duration={400}
          />
          <SmoothScroll>
            <Header />
            {children}
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
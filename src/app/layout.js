import { Anton, Inter } from "next/font/google";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Preloader from "@/app/components/Preloader";
import "./globals.css"; // default file from create-next-app (contains @import "tailwindcss")

const anton = Anton({ subsets: ["latin"], weight: "400", variable: "--font-display", display: "swap" });
const inter = Inter({ subsets: ["latin"], variable: "--font-body", display: "swap" });

export const metadata = {
  title: { default: "Tousif | Creative Designer & Full-Stack Developer", template: "%s | Tousif" },
  description: "Atmosphere: web development, cloud solutions and IT training by Tousif.",
  openGraph: { title: "Tousif | Atmosphere", description: "IT Solutions. Simplified.", type: "website" },
};

export const viewport = { themeColor: "#070720",width: "device-width", initialScale: 1 };

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${anton.variable} ${inter.variable} scroll-smooth`}>
      <body className="flex min-h-screen flex-col bg-[#070720] bg-[radial-gradient(1200px_700px_at_70%_10%,#0d0d3a,#070720_70%)] text-[#ecebff] antialiased [font-family:var(--font-body),system-ui,sans-serif]">
        <a
          href="#main"
          className="absolute -left-249.75 top-2 z-100 rounded-lg bg-[#6d4aff] px-4 py-2 focus:left-2"
        >
          Skip to content
        </a>
        <noscript>
          <style>{".preloader{display:none}"}</style>
        </noscript>
        <Preloader />
        <Navbar />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
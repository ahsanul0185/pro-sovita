import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AOSWrapper from "@/lib/AOSWrapper";
import { AppProvider } from "@/lib/AppContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Pro Sovita",
  description: "Sovita Agency",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AOSWrapper>
          <AppProvider>
        <Navbar />
        {children}
        <Footer />
        </AppProvider>
        </AOSWrapper>
      </body>

    </html>
  );
}

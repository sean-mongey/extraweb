import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://extrasys.ch"),
  title: "Extrasys",
  description: "Extrasys - Innovative Solutions",
  icons: {
    icon: "/images/logo1-icon.png",
    shortcut: "/images/logo1-icon.png",
    apple: "/images/logo1-icon.png",
  },
  openGraph: {
    title: "Extrasys",
    description: "Extrasys - Innovative Solutions",
    images: ["/images/logo1-icon.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Extrasys",
    description: "Extrasys - Innovative Solutions",
    images: ["/images/logo1-icon.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "sextrasys",
  description: "sextrasys - Innovative Solutions",
  openGraph: {
    title: "sextrasys",
    description: "sextrasys - Innovative Solutions",
    siteName: "sextrasys",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "sextrasys",
    description: "sextrasys - Innovative Solutions",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}

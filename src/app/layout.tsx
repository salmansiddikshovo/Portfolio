import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { QueryProvider } from "@/providers/QueryProvider";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://salmansiddikshovo.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Salman Siddiq Shovo | Frontend Developer",
  description:
    "Single-page personal portfolio for Salman Siddiq Shovo, junior frontend developer specializing in Next.js, React, and TypeScript.",
  keywords: [
    "Salman Siddiq Shovo",
    "Frontend Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Web Developer Dhaka Bangladesh"
  ],
  authors: [{ name: "Salman Siddiq Shovo" }],
  creator: "Salman Siddiq Shovo",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Salman Siddiq Shovo | Frontend Developer",
    description:
      "Single-page personal portfolio for Salman Siddiq Shovo, junior frontend developer specializing in Next.js, React, and TypeScript.",
    siteName: "Salman Siddiq Shovo Portfolio",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Salman Siddiq Shovo - Frontend Developer Portfolio"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Salman Siddiq Shovo | Frontend Developer",
    description:
      "Single-page personal portfolio for Salman Siddiq Shovo, junior frontend developer specializing in Next.js, React, and TypeScript.",
    images: ["/og.png"]
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}>
      <body className="min-h-screen bg-background text-foreground antialiased selection:bg-primary/20 selection:text-primary">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <QueryProvider>
            {children}
            <Toaster position="top-right" richColors />
          </QueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

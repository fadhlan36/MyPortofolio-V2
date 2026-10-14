import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "../styles/globals.css"
import PageLoader from "@/components/PageLoader"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || "https://fadhlan-faidh.vercel.app"),
  title: {
    default: "Fadhlan | Portfolio",
    template: "%s | Fadhlan Portfolio",
  },
  description: "Personal portfolio of Fadhlan. Software Developer specializing in Next.js, Node.js, and modern web development.",
  keywords: ["Fadhlan", "Portfolio", "Software Developer", "Web Development", "Backend", "Frontend", "Next.js", "React", "Node.js"],
  authors: [{ name: "Fadhlan" }],
  creator: "Fadhlan",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "/",
    title: "Fadhlan | Portfolio",
    description: "Personal portfolio of Fadhlan. Software Developer specializing in Next.js, Node.js, and modern web development.",
    siteName: "Fadhlan Portfolio",
    images: [
      {
        url: "/images/Foto.jpg",
        width: 1200,
        height: 630,
        alt: "Fadhlan Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fadhlan | Portfolio",
    description: "Personal portfolio of Fadhlan. Software Developer specializing in Next.js, Node.js, and modern web development.",
    images: ["/images/Foto.jpg"],
    creator: "@fadhlan",
  },
  icons: {
    icon: "/images/Foto.jpg",
    shortcut: "/images/Foto.jpg",
    apple: "/images/Foto.jpg",
  },
  alternates: {
    canonical: "/",
  },
  verification: {
    google: "ZbLhiilDbtLDyIx5eH6Jeoe1jPkXNKId-LhXG1HhLWA",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <PageLoader />
        {children}
      </body>
    </html>
  )
}


import { Archivo, Inter } from "next/font/google";
import "./globals.css";

const archivo = Archivo({ subsets: ["latin"], variable: "--font-archivo", weight: ["500", "600", "700", "800"] });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const __jsonld = {"@context":"https://schema.org","@type":"Organization","name":"Atlas Studio","description":"Konsultan brand & desain","url":"https://atlas.pintuweb.com"};

export const metadata = {
  metadataBase: new URL("https://atlas.pintuweb.com"),
  title: "Atlas Studio — Links",
  description: "Link in bio Atlas Studio: konsultan brand & desain. Portofolio, layanan, dan kontak dalam satu kartu.",
  applicationName: "Atlas Studio",
  keywords: ["link in bio", "brand studio", "desain", "konsultan brand", "portofolio"],
  authors: [{ name: "Atlas Studio" }],
  creator: "Atlas Studio",
  publisher: "Atlas Studio",
  alternates: { canonical: "https://atlas.pintuweb.com" },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://atlas.pintuweb.com",
    siteName: "Atlas Studio",
    title: "Atlas Studio — Links",
    description: "Link in bio Atlas Studio: konsultan brand & desain. Portofolio, layanan, dan kontak dalam satu kartu.",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Atlas Studio — Links" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Atlas Studio — Links",
    description: "Link in bio Atlas Studio: konsultan brand & desain. Portofolio, layanan, dan kontak dalam satu kartu.",
    images: ["/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={`${archivo.variable} ${inter.variable} antialiased`}>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(__jsonld) }} />
        </body>
    </html>
  );
}

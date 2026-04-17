import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Friethuys 'Oer'! — Ambachtelijke Verse Friet in Nijmegen",
  description:
    "Friethuys 'Oer'! serveert de beste ambachtelijke verse friet van Nijmegen. Vers gesneden uit Nederlandse kleigrond aardappelen, dubbel gebakken voor de perfecte crunch. Ziekerstraat 1, Nijmegen.",
  keywords: "friet, snackbar, Nijmegen, verse friet, vegan, ambachtelijk, Friethuys 'Oer'!",
  openGraph: {
    title: "Friethuys 'Oer'! — Ambachtelijke Verse Friet in Nijmegen",
    description:
      "De lekkerste ambachtelijke verse friet van Nijmegen. Vers gesneden, dubbel gebakken, met huisgemaakte sauzen.",
    siteName: "Friethuys 'Oer'!",
    locale: "nl_NL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="nl"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black text-white">{children}</body>
    </html>
  );
}

import { cx } from "../utils";
import "./globals.css";
import { Inter, Manrope } from "next/font/google";
import Header from "../components/Header";
import Footer from "../components/Footer";
import siteMetaData from "../utils/siteMetaData";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-in",
});

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mr",
});

export const metadata = {
  metadataBase: new URL(siteMetaData.siteUrl),
  title: {
    template: `%s | ${siteMetaData.title}`,
    default: siteMetaData.title,
  },
  description: "Developer portfolio for Samyak Shreyash",
  openGraph: {
    title: siteMetaData.title,
    description: siteMetaData.description,
    type: 'website',
    siteName: siteMetaData.title,
    images: [
      siteMetaData.socialBanner
    ],
    locale: 'en_US',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: siteMetaData.title,
    creator: siteMetaData.author,
    images: [siteMetaData.socialBanner], // Must be an absolute URL
  },
};

export default function RootLayout({ children }) {
  return ( 
    <html lang="en">
      <body
        className={cx(
          inter.variable,
          manrope.variable,
          "font-mr bg-light dark:bg-dark"
        )}>
        <Header />
        {children}
        <Footer /> 
      </body>
    </html>
  );
}

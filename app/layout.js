import "./globals.css";

// import components
import Navbar from "@/components/Navbar";

// import local Font
import localFont from "next/font/local";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "BlinkLinks - Your trusted URL Shortener",
  description: "BlinkLinks helps you helps you shorten your URLs easily",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-blue-50`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}

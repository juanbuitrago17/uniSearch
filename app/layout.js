import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from './ui/header';
import Footer from './ui/footer';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Script de Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-V8MZEDHPHH"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-V8MZEDHPHH');
            `,
          }}
        ></script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="bg-gray-900 text-gray-100 min-h-screen">
          <Header />

          {children}
          
        <Footer />
        </div>

      </body>
    </html>
  );
}

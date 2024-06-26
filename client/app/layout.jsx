import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "./_libs/components/ui/Navbar";

const font = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "TeeBay",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <main className="bg-gray-50 min-h-screen">
          <Navbar />
          <div className="max-w-7xl mx-auto px-4 py-10">{children}</div>
        </main>
      </body>
    </html>
  );
}

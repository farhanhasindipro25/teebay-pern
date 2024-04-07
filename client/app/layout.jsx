import { Montserrat } from "next/font/google";
import "./globals.css";

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
          <div className="max-w-7xl mx-auto px-4 py-10">{children}</div>
        </main>
      </body>
    </html>
  );
}

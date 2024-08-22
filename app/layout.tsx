import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Breakfast Banter",
  description: "An internet website for breakfast enthusiasts.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
          <div>
            <h1 className="text-5xl font-bold text-center mb-8 p-4 border-b-2">
              Good Morning Bekfast bois
            </h1>
            <nav className="flex justify-around space-x-4 mb-12">
              <Link href="/" className="hover:text-slate-600">
                Breakfasts
              </Link>
              <Link href="/buildbreakfast" className="hover:text-slate-600">
                New Breakfast
              </Link>
            </nav>
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}

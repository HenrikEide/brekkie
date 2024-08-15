import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

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
            <nav className="flex justify-center space-x-4 mb-12">
              <a href="/" className="pr-12">
                Breakfasts
              </a>
              <a href="/buildbreakfast" className="">
                New Breakfast
              </a>
            </nav>
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}

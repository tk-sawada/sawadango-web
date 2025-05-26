import '@/app/globals.css';

import Link from "next/link";
// import "./globals.css"; // Tailwind やグローバルCSSを読み込む

export const metadata = {
  title: "Takuya SAWADA",
  description: "Photographer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className="min-h-screen flex flex-col">
        {/* ヘッダー */}
        <header className="shadow p-4">
          <nav className="container mx-auto flex space-x-6">
            <Link href="/" className="text-lg font-semibold hover:underline">
              Home
            </Link>
            <Link href="/works" className="text-lg font-semibold hover:underline">
              Works
            </Link>
            <Link href="/biography" className="text-lg font-semibold hover:underline">
              Biography
            </Link>
            <Link href="/contact" className="text-lg font-semibold hover:underline">
              Contact
            </Link>
          </nav>
        </header>

        {/* ページ固有コンテンツ */}
        <main className="flex-1 container mx-auto p-6">{children}</main>

      </body>
    </html>
  );
}
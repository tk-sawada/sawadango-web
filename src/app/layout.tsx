// app/layout.tsx

import "@/app/globals.css";
import Header from "./Header"; // クライアントで動的に処理

export const metadata = {
  title: "Takuya SAWADA",
  description: "Programmer, Photographer",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 container mx-auto p-6">{children}</main>
      </body>
    </html>
  );
}

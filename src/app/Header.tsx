// app/Header.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/works", label: "Works" },
    { href: "/biography", label: "Biography" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="shadow p-4">
      <nav className="container mx-auto flex space-x-6">
        {navItems.map((item) => {
          const isCurrent = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`text-lg font-semibold ${
                !isCurrent ? "text-gray-400 hover:scale-105 transition cursor-pointer" : ""
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}

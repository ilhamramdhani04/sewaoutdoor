"use client";

import type { Route } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CalendarCheck } from "lucide-react";
import type { UrlObject } from "url";

type NavItem = {
  label: string;
  href: Route | UrlObject;
  matchPath: string;
};

const navItems: NavItem[] = [
  { label: "Beranda", href: "/", matchPath: "/" },
  { label: "Katalog", href: "/catalog", matchPath: "/catalog" },
  { label: "Kategori", href: { pathname: "/", hash: "kategori" }, matchPath: "/" },
  { label: "Paket", href: { pathname: "/", hash: "paket" }, matchPath: "/" }
];

const hiddenPrefixes = ["/admin", "/dashboard"];

export default function MobileBottomNav() {
  const pathname = usePathname();
  const isHidden = hiddenPrefixes.some((prefix) => pathname.startsWith(prefix));

  if (isHidden) {
    return null;
  }

  return (
    <>
      <div className="h-16 md:hidden" />
      <nav className="fixed inset-x-0 bottom-0 z-50 border-t border-hairline bg-canvas/95 backdrop-blur md:hidden">
        <div className="mx-auto grid max-w-7xl grid-cols-[1fr_1fr_1fr_1fr_auto] items-center gap-2 px-4 py-3">
          {navItems.map((item) => {
            const isActive =
              item.matchPath === "/"
                ? pathname === "/"
                : pathname.startsWith(item.matchPath);
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`text-center text-[11px] uppercase tracking-[0.18em] transition ${
                  isActive ? "text-ink" : "text-mute"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/catalog"
            className="flex items-center justify-center gap-2 rounded-full bg-ink px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-canvas"
          >
            <CalendarCheck className="h-4 w-4" />
            Booking
          </Link>
        </div>
      </nav>
    </>
  );
}

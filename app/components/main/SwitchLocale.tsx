"use client";
import React from "react";
import { i18n } from "@/i18n.config";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import { useSession } from "next-auth/react";

export default function SwitchLocale() {
  const { status }: any = useSession();
  const pathname = usePathname();

  const redirectedPathName = (locale: string) => {
    if (!pathname) return "/";
    const pathnameIsMissingLocale = i18n.locales.every(
      (locale) =>
        !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
    );
    if (pathnameIsMissingLocale) {
      if (locale === i18n.defaultLocale) return pathname;
      return `/${locale}${pathname}`;
    } else {
      if (locale === i18n.defaultLocale) {
        const segments = pathname.split("/");
        const isHome = segments.length === 2;
        if (isHome) return "/";

        segments.splice(1, 1);
        return segments.join("/");
      }

      const segments = pathname.split("/");
      segments[1] = locale;
      return segments.join("/");
    }
  };

  if (status === "loading") {
    return null;
  }
  return (
    <nav className="absolute text-xl left-[10px] top-[2px] flex gap-3 select-none">
      <ul className="flex text-[15px]">
        <li>
          <Link href={redirectedPathName(i18n.locales[1])}>
            <span className="fi fi-pl"></span>
          </Link>
        </li>
        <span className="mx-1 text-[#666]">|</span>
        <li>
          <Link href={redirectedPathName(i18n.locales[0])}>
            <span className="fi fi-us"></span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

import { Roboto } from "next/font/google";
import "./globals.css";
import PlausibleProvider from "next-plausible";
import { getServerSession } from "next-auth/next";
import SessionProvider from "@/libs/SessionProvider";
import React from "react";
import { Locale, i18n } from "@/i18n.config";

import { Yantramanav } from "next/font/google";

const SS3 = Yantramanav({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  const session = await getServerSession();
  return (
    <html lang={params.lang}>
      <head>
        <PlausibleProvider domain="ludwikfaron.com" />
      </head>
      <body className={SS3.className}>
        <SessionProvider session={session}>{children}</SessionProvider>
      </body>
    </html>
  );
}

import { getServerSession } from "next-auth/next";
import SessionProvider from "@/libs/SessionProvider";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ludwik Faron | Web Developer",
  description:
    "Step into Ludwik Faron's digital world where code brings ideas to life",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();

  return (
    <main>
      <SessionProvider session={session}>{children}</SessionProvider>
    </main>
  );
}

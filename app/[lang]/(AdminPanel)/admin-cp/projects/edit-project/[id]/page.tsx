import React from "react";
import EditProjectMain from "@/app/ui/projects/edit-project/EditProjectMain";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/libs/dictionary";

export default async function EditPost({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { form } = await getDictionary(lang);
  return (
    <main className="flex h-screen">
      <EditProjectMain locale={form} />
    </main>
  );
}

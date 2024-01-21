import NewProjectMain from "@/app/ui/projects/new-project/NewProjectMain";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/libs/dictionary";
import React from "react";

export default async function NewPost({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { form } = await getDictionary(lang);

  return (
    <main className="flex h-screen">
      <NewProjectMain locale={form} />
    </main>
  );
}

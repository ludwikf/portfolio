import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import React from "react";
import Link from "next/link";
import Carousel from "@/app/components/main/Carousel";
import SwitchLocale from "@/app/components/main/SwitchLocale";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/libs/dictionary";
import Navbar from "@/app/components/main/Navbar";
import MainView from "@/app/ui/main/MainView";
import About from "@/app/ui/main/About";
import Projects from "@/app/ui/main/Projects";
import Contact from "@/app/ui/main/Contact";

export default async function Main({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dict = await getDictionary(lang);
  return (
    <main>
      <Navbar locale={dict} />
      <MainView />
      <About dict={dict} />
      <Projects dict={dict} />
      <Contact dict={dict} />
    </main>
  );
}

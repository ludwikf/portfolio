"use client";
import React from "react";

export default function Navbar({ locale }: any) {
  const scrolltoHash = function (element_id: string) {
    const element = document.getElementById(element_id);
    element?.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  };
  return (
    <>
      <div className="absolute md:fixed z-50 text-thirdTheme top-[25px] left-[25px] text-2xl">
        LF
      </div>
      <div className="absolute md:fixed flex flex-col z-50 top-[25px] right-[25px] text-thirdTheme cursor-pointer text-right font-bold">
        <div onClick={() => scrolltoHash("about")} className="mb-1 lg:mb-0">
          {locale.mainNavbar.about}
        </div>
        <div onClick={() => scrolltoHash("projects")} className="mb-1 lg:mb-0">
          {locale.mainNavbar.projects}
        </div>
        <div onClick={() => scrolltoHash("contact")}>
          {locale.mainNavbar.contact}
        </div>
      </div>
    </>
  );
}

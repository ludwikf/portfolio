import SwitchLocale from "@/app/components/main/SwitchLocale";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

export default function MainView() {
  return (
    <div id="about">
      <div className="bg-[url(https://firebasestorage.googleapis.com/v0/b/portfolio-95980.appspot.com/o/code.jpg?alt=media&token=2ece1804-40f8-40e5-94cd-b016e6a733bb)] bg-no-repeat bg-fixed bg-cover md:bg-center bg-left">
        <div className="flex h-[100dvh] justify-center items-center">
          <div className="flex flex-col items-center z-[10]">
            <h2 className="text-thirdTheme font-[100] text-sm md:text-xl">
              LUDWIK FARON
            </h2>
            <h1 className="text-thirdTheme text-3xl sm:text-5xl md:text-7xl flex flex-col items-center">
              <p>JAVASCRIPT</p>
              <p className="text-mainTheme">WEB</p>
              <p> DEVELOPER</p>
            </h1>
          </div>
        </div>
      </div>
      <div className="">
        <SwitchLocale />
      </div>
      <div className="flex absolute flex-col justify-between h-[70px] left-[25px] bottom-[25px] z-[10]">
        <Link
          href="https://www.linkedin.com/in/ludwik-faron-958623284/"
          className="cursor-pointer text-thirdTheme"
        >
          <FontAwesomeIcon icon={faLinkedin} className="w-[25px] h-[25px]" />
        </Link>
        <Link
          href="https://github.com/lufajs"
          className="cursor-pointer text-thirdTheme"
        >
          <FontAwesomeIcon icon={faGithub} className="w-[25px] h-[25px]" />
        </Link>
      </div>
    </div>
  );
}

import SwitchLocale from "@/app/components/main/SwitchLocale";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

export default function MainView() {
  return (
    <div
      id="about"
      className="flex justify-center items-center h-[100vh] bg-[url(https://firebasestorage.googleapis.com/v0/b/portfolio-95980.appspot.com/o/main.png?alt=media&token=b1134709-4027-4341-8660-b7d4efdc714a)] bg-no-repeat bg-fixed bg-cover md:bg-center bg-[-200px]"
    >
      <div className="flex flex-col items-center z-[10]">
        <h2 className="text-thirdTheme font-[100] text-sm md:text-xl">
          LUDWIK FARON
        </h2>
        <h1 className="text-thirdTheme text-3xl sm:text-5xl md:text-7xl flex flex-col items-center font-[500]">
          <p>JAVASCRIPT</p>
          <p className="text-mainTheme">WEB</p>
          <p> DEVELOPER</p>
        </h1>
      </div>
      <div>
        <SwitchLocale />
      </div>
      <div className="hidden md:flex absolute flex-col justify-between h-[70px] left-[25px] bottom-[25px] z-[10]">
        <div className="w-[25px] h-[25px]">
          <Link
            href="https://www.linkedin.com/in/ludwik-faron-958623284/"
            className="cursor-pointer text-thirdTheme"
          >
            <FontAwesomeIcon icon={faLinkedin} className="w-[25px] h-[25px]" />
          </Link>
        </div>
        <div className="w-[25px] h-[25px]">
          <Link
            href="https://github.com/ludwikf"
            className="cursor-pointer text-thirdTheme"
          >
            <FontAwesomeIcon icon={faGithub} className="w-[25px] h-[25px]" />
          </Link>
        </div>
      </div>
    </div>
  );
}

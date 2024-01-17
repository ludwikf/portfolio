import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Main() {
  return (
    <main>
      <div className="relative">
        <div className="fixed w-[100vw] h-[100dvh] z-[-1] brightness-75">
          <Image
            src={
              "https://firebasestorage.googleapis.com/v0/b/portfolio-95980.appspot.com/o/code.jpg?alt=media&token=cc3f0634-d269-4608-b1ad-98ccd76ea039"
            }
            alt="backgroundimage"
            width={0}
            height={0}
            sizes="100vw"
            className="object-cover w-[100dvw] h-[100dvh]"
          />
        </div>
        <div className="flex h-[100dvh] justify-center items-center">
          <div className="flex flex-col items-center">
            <h2 className="text-thirdTheme font-[100] text-xl">LUDWIK FARON</h2>
            <h1 className="text-thirdTheme text-7xl flex flex-col items-center">
              <p>JAVASCRIPT</p>
              <p className="text-mainTheme">WEB</p>
              <p> DEVELOPER</p>
            </h1>
          </div>
        </div>
        <div className="flex absolute flex-col justify-between h-[65px] left-[25px] bottom-[25px]">
          <Link
            href="https://www.linkedin.com/in/ludwik-faron-958623284/"
            className="cursor-pointer text-thirdTheme"
          >
            <FontAwesomeIcon icon={faLinkedin} className="w-[21px]" />
          </Link>
          <Link
            href="https://github.com/lufajs"
            className="cursor-pointer text-thirdTheme"
          >
            <FontAwesomeIcon icon={faGithub} className="w-[21px]" />
          </Link>
        </div>
      </div>
    </main>
  );
}

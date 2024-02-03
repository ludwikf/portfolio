import Link from "next/link";
import React from "react";

export default function Contact({ dict }: any) {
  return (
    <>
      <div className="h-[75vh] md:h-[100vh] bg-[url(https://firebasestorage.googleapis.com/v0/b/portfolio-95980.appspot.com/o/17.png?alt=media&token=dc5daa38-2fa3-4a80-ba27-054184bfb61d)] bg-no-repeat bg-fixed bg-cover bg-center">
        <div className="text-thirdTheme text-2xl sm:text-4xl md:text-6xl lg:text-8xl font-bold flex justify-center items-center h-full">
          <p className="w-[100%] md:w-[80%] text-center">
            {dict.idea.content1}
            <span className="text-mainTheme"> {dict.idea.span} </span>
            {dict.idea.content2}
          </p>
        </div>
      </div>
      <div id="contact">
        <div className="bg-[#0d0d0d] h-[300px]">
          <div className="mx-8 py-7 md:py-0 lg:mx-40 h-full flex flex-col md:flex-row justify-evenly md:items-center text-thirdTheme">
            <Link
              className="text-2xl md:text-4xl font-bold"
              href="https://github.com/lufajs"
            >
              Github
            </Link>
            <Link
              className="text-2xl md:text-4xl font-bold"
              href="https://www.linkedin.com/in/ludwik-faron-958623284/"
            >
              Linkedin
            </Link>

            <div className="flex flex-col md:pt-2">
              <span className="text-xl md:text-2xl font-bold">EMAIL</span>
              <Link
                href="mailto:faronludwik@gmail.com"
                className="cursor-pointer text-[#b7ab98b6]"
              >
                faronludwik@gmail.com
              </Link>
            </div>
            <div className="md:pt-2 flex flex-col">
              <span className="text-xl md:text-2xl font-bold">
                {dict.phone}
              </span>
              <p className="text-[#b7ab98b6]">+48 530 023 820</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

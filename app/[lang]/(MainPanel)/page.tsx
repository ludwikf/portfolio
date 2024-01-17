import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Main() {
  return (
    <main>
      <div>
        <div className="bg-[url(https://firebasestorage.googleapis.com/v0/b/portfolio-95980.appspot.com/o/code.jpg?alt=media&token=2ece1804-40f8-40e5-94cd-b016e6a733bb)] bg-no-repeat bg-fixed bg-cover sm:bg-center bg-left">
          <div className="flex h-[100dvh] justify-center items-center">
            <div className="flex flex-col items-center z-[10]">
              <h2 className="text-thirdTheme font-[100] text-xl">
                LUDWIK FARON
              </h2>
              <h1 className="text-thirdTheme text-7xl flex flex-col items-center">
                <p>JAVASCRIPT</p>
                <p className="text-mainTheme">WEB</p>
                <p> DEVELOPER</p>
              </h1>
            </div>
          </div>
        </div>
        <div className="flex absolute flex-col justify-between h-[65px] left-[25px] bottom-[25px] z-[10]">
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
      <div className="h-[400px] w-full bg-[#0d0d0d] flex">
        <div className="mx-32">
          <div className="text-thirdTheme my-8">ABOUT ME</div>
          <div className="text-thirdTheme text-6xl font-bold">
            Web developer with
            <span className="text-mainTheme"> high expertise </span>in front-end
            and back-end technologies, creating responsive and dynamic websites.
          </div>
        </div>
      </div>
      <div className="w-[100%] bg-[#0d0d0d] text-thirdTheme pb-10">
        <div>
          <h1 className="mx-32 ">WHAT I DO</h1>
          <div className="mt-[30px] border-b-[1px] border-[#b7ab9844]">
            <div className="boxEffect select-none border-t-[1px] border-[#b7ab9844]">
              <div className="relative q">
                <div className="e flex justify-end items-center h-[100px] text-black bg-mainTheme ">
                  <span className="leading-7 text-md w-[30%] mr-10">
                    Designing interfaces that fluidly adjust to different screen
                    sizes, providing the best user experience on all devices.
                  </span>
                </div>
                <p className="absolute top-0 mx-32 mt-0 h-[100%] flex items-center text-[80px] font-bold">
                  RESPONSIVE
                </p>
              </div>
            </div>
            <div className="boxEffect select-none border-t-[1px] border-[#b7ab9844]">
              <div className="relative q">
                <div className="e flex justify-end items-center h-[100px] text-black bg-mainTheme ">
                  <span className="leading-7 text-md w-[30%] mr-10">
                    Mastery in developing orderly HTML and CSS code to achieve
                    precise designs and maintain consistent styling.
                  </span>
                </div>
                <p className="absolute top-0 mx-32 mt-0 h-[100%] flex items-center text-[80px] font-bold">
                  HTML / CSS
                </p>
              </div>
            </div>
            <div className="boxEffect select-none border-t-[1px] border-[#b7ab9844]">
              <div className="relative q">
                <div className="e flex justify-end items-center h-[100px] text-black bg-mainTheme ">
                  <span className="leading-7 text-md w-[30%] mr-10">
                    Creating interactive and dynamic website elements using
                    modern JavaScript libraries and frameworks.
                  </span>
                </div>
                <p className="absolute top-0 mx-32 mt-0 h-[100%] flex items-center text-[80px] font-bold">
                  JAVASCRIPT
                </p>
              </div>
            </div>
            <div className="boxEffect select-none border-t-[1px] border-[#b7ab9844]">
              <div className="relative q">
                <div className="e flex justify-end items-center h-[100px] text-black bg-mainTheme ">
                  <span className="leading-7 text-md w-[30%] mr-10">
                    Proficiency in developing, ensuring optimal user experiences
                    across various devices.
                  </span>
                </div>
                <p className="absolute top-0 mx-32 mt-0 h-[100%] flex items-center text-[80px] font-bold">
                  DEVELOPMENT
                </p>
              </div>
            </div>
            <div className="boxEffect select-none border-t-[1px] border-[#b7ab9844]">
              <div className="relative q">
                <div className="e flex justify-end items-center h-[100px] text-black bg-mainTheme ">
                  <span className="leading-7 text-md w-[30%] mr-10">
                    Ensuring consistent functionality and appearance by testing
                    and debugging across various browsers.
                  </span>
                </div>
                <p className="absolute top-0 mx-32 mt-0 h-[100%] flex items-center text-[80px] font-bold">
                  TEST / DEBUG
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[90vh] bg-[url(https://firebasestorage.googleapis.com/v0/b/portfolio-95980.appspot.com/o/cube.jpg?alt=media&token=6d0ec00c-114f-45e1-afa1-d825da4f3c37)] bg-no-repeat bg-fixed bg-cover sm:bg-center bg-left">
        <div className="mx-32 text-thirdTheme">
          <h1 className=" py-14">EXPERIENCE</h1>
          <p className="text-6xl font-bold">
            With a <span className="text-mainTheme">passion</span> for turning
            concpets into interctive realities, i bring innovation and
            functionality to every project
          </p>
        </div>
      </div>
      <div className="h-[100dvh] bg-[#0d0d0d]">
        <h1 className="py-14 text-lg text-thirdTheme flex justify-center">
          My Projects
        </h1>
      </div>
      <div className="h-[100dvh] bg-[url(https://firebasestorage.googleapis.com/v0/b/portfolio-95980.appspot.com/o/cube2.jpg?alt=media&token=736e6a31-7596-46af-bfb3-4c790577d275)] bg-no-repeat bg-fixed bg-cover sm:bg-center bg-left">
        <div className="text-thirdTheme text-8xl font-bold flex justify-center items-center h-full">
          <p className="w-[80%] text-center">
            HAVE AN<span className="text-mainTheme"> IDEA </span>LET'S DISCUSS
          </p>
        </div>
      </div>
      <div>
        <div className="bg-[#0d0d0d] h-[300px]">
          <div className="mx-72 h-full flex justify-between items-center text-thirdTheme">
            <Link
              className="text-4xl font-bold"
              href="https://github.com/lufajs"
            >
              Github
            </Link>
            <Link
              className="text-4xl font-bold"
              href="https://www.linkedin.com/in/ludwik-faron-958623284/"
            >
              Linkedin
            </Link>

            <div className="flex flex-col pt-2">
              <span className="text-2xl font-bold">EMAIL</span>
              <Link
                href="mailto:faronludwik@gmail.com"
                className="cursor-pointer text-[#b7ab98b6]"
              >
                faronludwik@gmail.com
              </Link>
            </div>
            <div className="pt-2 flex flex-col">
              <span className="text-xl font-bold">PHONE</span>
              <p className="text-[#b7ab98b6]">+48 530 023 820</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

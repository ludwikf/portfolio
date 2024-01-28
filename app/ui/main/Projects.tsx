import Carousel from "@/app/components/main/Carousel";
import React from "react";

export default function Projects({ dict }: any) {
  return (
    <>
      <div className="h-[90vh] bg-[url(https://firebasestorage.googleapis.com/v0/b/portfolio-95980.appspot.com/o/cube.jpg?alt=media&token=6d0ec00c-114f-45e1-afa1-d825da4f3c37)] bg-no-repeat bg-fixed bg-cover md:bg-center bg-left">
        <div className="mx-5 md:mx-32 text-thirdTheme">
          <h1 className="py-10 md:py-14">{dict.exp.title}</h1>
          <p className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold md:leading-[55px] lg:leading-[65px]">
            {dict.exp.content1}{" "}
            <span className="text-mainTheme">{dict.exp.span}</span>{" "}
            {dict.exp.content2}
          </p>
        </div>
      </div>
      <div
        id="projects"
        className="h-[100dvh] bg-[#0d0d0d] flex flex-col justify-center items-center"
      >
        <h1 className="py-8 md:py-14 text-lg text-thirdTheme flex justify-center">
          {dict.myProjects}
        </h1>
        <div className="w-[100%] h-[80%]">
          <Carousel />
        </div>
      </div>
    </>
  );
}

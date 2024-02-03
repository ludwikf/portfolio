import Carousel from "@/app/components/main/Carousel";
import React from "react";

export default function Projects({ dict }: any) {
  return (
    <>
      <div className="h-[90vh] bg-[url(https://firebasestorage.googleapis.com/v0/b/portfolio-95980.appspot.com/o/14.png?alt=media&token=0174756b-9fbe-45fb-92e1-2aa68395cebc)] bg-no-repeat bg-fixed bg-cover md:bg-center bg-left">
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
        className="h-[100vh] bg-[#0d0d0d] flex flex-col justify-center items-center"
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

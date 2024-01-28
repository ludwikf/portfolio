import React from "react";

export default function About({ dict }: any) {
  return (
    <>
      <div className="h-[400px] w-full bg-[#0d0d0d] flex">
        <div className="mx-5 lg:mx-32">
          <div className="text-thirdTheme my-5 md:my-8 text-sm md:text-md">
            {dict.about.title}
          </div>
          <div className="text-thirdTheme text-2xl sm:text-3xl md:text-5xl xl:text-6xl font-bold">
            {dict.about.content1}
            <span className="text-mainTheme"> {dict.about.span} </span>
            {dict.about.content2}
          </div>
        </div>
      </div>
      <div className="w-[100%] bg-[#0d0d0d] text-thirdTheme pb-10">
        <div>
          <h1 className="mx-5 md:mx-32 text-sm md:text-md">
            {dict.whatIDo.title}
          </h1>
          <div className="mt-[30px] border-b-[1px] border-[#b7ab9844]">
            <div className="group boxEffect select-none border-t-[1px] border-[#b7ab9844]">
              <div className="relative group-hover:text-black">
                <div className="e flex justify-end items-center h-[80px] xl:h-[100px] text-black bg-mainTheme ">
                  <span className="leading-5 sm:leading-6 xl:leading-7 text-sm md:text-md w-[90%] xl:w-[30%] mr-3 md:mr-10">
                    {dict.whatIDo.content.responsive.content}
                  </span>
                </div>
                <p className="group-hover:hidden xl:group-hover:flex absolute top-0 mx-5 md:mx-32 mt-0 h-[100%] flex items-center text-xl sm:text-3xl md:text-4xl xl:text-[80px] font-bold">
                  {dict.whatIDo.content.responsive.title}
                </p>
              </div>
            </div>
            <div className="group boxEffect select-none border-t-[1px] border-[#b7ab9844]">
              <div className="relative group-hover:text-black">
                <div className="e flex justify-end items-center h-[80px] xl:h-[100px] text-black bg-mainTheme ">
                  <span className="leading-5 sm:leading-6 xl:leading-7 text-sm md:text-md w-[90%] xl:w-[30%] mr-3 md:mr-10">
                    {dict.whatIDo.content.html}
                  </span>
                </div>
                <p className="group-hover:hidden xl:group-hover:flex absolute top-0 mx-5 md:mx-32 mt-0 h-[100%] flex items-center text-xl sm:text-3xl md:text-4xl xl:text-[80px] font-bold">
                  HTML / CSS
                </p>
              </div>
            </div>
            <div className="group boxEffect select-none border-t-[1px] border-[#b7ab9844]">
              <div className="relative group-hover:text-black">
                <div className="e flex justify-end items-center h-[80px] xl:h-[100px] text-black bg-mainTheme ">
                  <span className="leading-5 sm:leading-6 xl:leading-7 text-sm md:text-md w-[90%] xl:w-[30%] mr-3 md:mr-10">
                    {dict.whatIDo.content.js}
                  </span>
                </div>
                <p className="group-hover:hidden xl:group-hover:flex absolute top-0 mx-5 md:mx-32 mt-0 h-[100%] flex items-center text-xl sm:text-3xl md:text-4xl xl:text-[80px] font-bold">
                  JAVASCRIPT
                </p>
              </div>
            </div>
            <div className="group boxEffect select-none border-t-[1px] border-[#b7ab9844]">
              <div className="relative group-hover:text-black">
                <div className="e flex justify-end items-center h-[80px] xl:h-[100px] text-black bg-mainTheme ">
                  <span className="leading-5 sm:leading-6 xl:leading-7 text-sm md:text-md w-[90%] xl:w-[30%] mr-3 md:mr-10">
                    {dict.whatIDo.content.dev.content}
                  </span>
                </div>
                <p className="group-hover:hidden xl:group-hover:flex absolute top-0 mx-5 md:mx-32 mt-0 h-[100%] flex items-center text-xl sm:text-3xl md:text-4xl xl:text-[80px] font-bold">
                  {dict.whatIDo.content.dev.title}
                </p>
              </div>
            </div>
            <div className="group boxEffect select-none border-t-[1px] border-[#b7ab9844]">
              <div className="relative group-hover:text-black">
                <div className="e flex justify-end items-center h-[80px] xl:h-[100px] text-black bg-mainTheme ">
                  <span className="leading-5 sm:leading-6 xl:leading-7 text-sm md:text-md w-[90%] xl:w-[30%] mr-3 md:mr-10">
                    {dict.whatIDo.content.test.content}
                  </span>
                </div>
                <p className="group-hover:hidden xl:group-hover:flex absolute top-0 mx-5 md:mx-32 mt-0 h-[100%] flex items-center text-xl sm:text-3xl md:text-4xl xl:text-[80px] font-bold">
                  {dict.whatIDo.content.test.title}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

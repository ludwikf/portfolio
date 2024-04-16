"use client";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Link from "next/link";
import { LoadingSpinner } from "../LoadingSpinner";

export default function Carousel() {
  const [slidesPerView, setSlidesPerView] = useState(calculateSlidesPerView());
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchData = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_WEB_URL}/api/get-projects`
      );

      if (!res.ok) {
        throw new Error("Error fetching projects");
      }

      const data = await res.json();

      setProjects(data);
    } catch (error) {
      return null;
    } finally {
      setLoading(false);
    }
  };

  function calculateSlidesPerView() {
    if (typeof window !== "undefined") {
      if (window.innerWidth >= 1200) {
        return 3;
      } else if (window.innerWidth >= 768) {
        return 2;
      } else {
        return 1;
      }
    }
  }

  useEffect(() => {
    const handleResize = () => {
      setSlidesPerView(calculateSlidesPerView());
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {loading ? (
        <div className="w-full h-full flex justify-center mt-[130px]">
          <div className="w-[100px] h-[100px]">
            <LoadingSpinner />
          </div>
        </div>
      ) : (
        <Swiper
          slidesPerView={slidesPerView}
          spaceBetween={0}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="w-[100%] sm:w-[95%] h-[100%] mt-5"
        >
          {projects.map((p) => (
            <SwiperSlide
              key={p._id}
              className="relative w-[100%] h-[100%] text-center flex px-5 small:px-12 justify-center items-center"
            >
              <div className="group w-[100%] h-[80%] flex flex-col justify-start items-center">
                <div className="w-[100%] h-[100%]">
                  <div className="relative flex justify-center items-center overflow-hidden w-[100%] h-[50%]">
                    <div
                      style={{ backgroundImage: `url(${p.image})` }}
                      className="hidden lg:block w-[100%] h-[100%] bg-no-repeat bg-fixed bg-cover bg-center rounded-t-xl brightness-[.7] group-hover:blur-sm "
                    ></div>
                    <div
                      style={{ backgroundImage: `url(${p.image})` }}
                      className="lg:hidden w-[100%] h-[100%] bg-no-repeat bg-fixed bg-cover bg-center rounded-t-xl brightness-[.7] group-hover:blur-sm "
                    ></div>
                    <p className="text-thirdTheme hidden group-hover:block absolute font-bold text-2xl z-10">
                      <Link
                        href={p.link}
                        className="mx-1.5 hover:text-[#b7ab9890] duration-[75ms]"
                      >
                        <FontAwesomeIcon
                          icon={faGlobe}
                          className="w-[40px] h-[40px]"
                        />
                      </Link>
                      <Link
                        href={p.github}
                        className="mx-1.5 hover:text-[#b7ab9890] duration-[75ms]"
                      >
                        <FontAwesomeIcon
                          icon={faGithub}
                          className="w-[40px] h-[40px]"
                        />
                      </Link>
                    </p>
                  </div>

                  <div className="flex w-[100%] h-[45%] text-thirdTheme bg-[#171717] justify-center items-center rounded-b-xl">
                    <div className="w-[90%] h-[90%] flex flex-col py-2 md:py-5">
                      <h1 className="text-xl md:text-2xl font-bold">
                        {p.title}
                      </h1>
                      <p className="mt-3 md:mt-9 md:text-md">{p.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </>
  );
}

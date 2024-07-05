"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";
import "swiper/css";
import "swiper/css/pagination";
import "./work.css";

const projects = [
  {
    num: "01",
    category: "frontend",
    title: "Silver Screen Savvy",
    description:
      "Silver Screen Savvy is a web application built using React and Redux that allows users to search for movies and TV shows, view popular, trending, and upcoming releases on a daily and weekly basis, and explore detailed information about each title, including trailers and related videos.",
    stack: [{ name: "html" }, { name: "css" }, { name: "javascript" }],
    images: [
      "/assets/work/project1/p1-i1.png",
      "/assets/work/project1/p1-i2.png",
      "/assets/work/project1/p1-i3.png",
      "/assets/work/project1/p1-i4.png",
    ],
    live: "https://silver-screen-savvy-swao.vercel.app/explore/movie",
    github: "https://github.com/kodaliakhil/Silver-Screen-Savvy",
  },
  {
    num: "02",
    category: "frontend",
    title: "OpenAI Article Summarizer",
    description:
      "In an era of information overload, navigating through lengthy articles can be time-consuming and overwhelming. Enter the OpenAI Article Summarizer Website, a powerful tool designed to streamline the consumption of written content. Leveraging cutting-edge technologies like React.js, JavaScript, Redux, and Tailwind CSS, this web application empowers users to distill complex articles into concise summaries with just a click.",
    stack: [{ name: "next.js" }, { name: "Tailwind.css" }, { name: "Node.js" }],
    images: [
      "/assets/work/project2/p2-i1.png",
      "/assets/work/project2/p2-i2.png",
    ],
    live: "https://open-ai-article-summarizer-ten.vercel.app/",
    github: "https://github.com/kodaliakhil/OpenAI-Summarizer",
  },
  {
    num: "03",
    category: "frontend",
    title: "Beyond Balance Fitness",
    description:
      "Experience a dynamic landing page meticulously designed and developed using React, tailored specifically for a fitness influencer. This engaging platform highlights services, client testimonials, and interactive fitness content, ensuring a seamless user experience that embodies the influencer's brand and expertise.",
    stack: [{ name: "Next.js" }, { name: "Tailwind.css" }],
    images: [
      "/assets/work/project3/p3-i1.png",
      "/assets/work/project3/p3-i2.png",
      "/assets/work/project3/p3-i3.png",
      "/assets/work/project3/p3-i4.png",
    ],
    live: "https://fitness-app-one-olive.vercel.app/",
    github: "https://github.com/kodaliakhil/fitness-app",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);
  const handleSlideChange = (swiper) => {
    // get current slide index
    const currentIndex = swiper.activeIndex;
    //update project state based on current slide index
    setProject(projects[currentIndex]);
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* project category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              {/* project description */}
              <p className="text-white/60 text-justify">
                {project.description}
              </p>
              {/* stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {/* remove the last item comma */}
                      {index !== project.stack.length - 1 && ", "}
                    </li>
                  );
                })}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* Live Project button */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* Github Project button */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github Repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/* overlay */}
                      <div className="absolute w-full h-full top-0 bottom-0 bg-black/10 z-10"></div>
                      {/* image */}
                      <div className="relative w-full h-full">
                        {/* <Image
                          src={project.image}
                          fill
                          className="object-cover"
                          alt=""
                        /> */}

                        <Swiper
                          spaceBetween={30}
                          centeredSlides={true}
                          style={{
                            "--swiper-pagination-color": "#00FF99",
                          }}
                          autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                          }}
                          pagination={{
                            clickable: true,
                          }}
                          modules={[Autoplay, Pagination]}
                          className="mySwiper"
                        >
                          {project.images.map((image, i) => {
                            console.log(image);
                            return (
                              <SwiperSlide key={i}>
                                <Image
                                  src={image}
                                  className="object-cover"
                                  alt=""
                                  fill
                                />
                              </SwiperSlide>
                            );
                          })}
                          {/* <SwiperSlide >sfklks</SwiperSlide>
                           <SwiperSlide >dkfhmfdgndflk</SwiperSlide>
                           <SwiperSlide >dfkhldfhlk</SwiperSlide> */}
                        </Swiper>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* slider buttons */}
              <WorkSliderBtns
                containerStyles={
                  "flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                }
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;

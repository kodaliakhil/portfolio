"use client";
import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

// about data
const about = {
  title: "About me",
  description:
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic sint dolore, corrupti repellat quia veritatis sunt eveniet.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Akhil Kodali",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+91) 8886468231",
    },
    {
      fieldName: "Skype",
      fieldValue: "akhil.01",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Indian",
    },
    {
      fieldName: "Email",
      fieldValue: "kodaliakhil1999@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Hindi, Telugu",
    },
  ],
};

// experience data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description:
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic sint dolore, corrupti repellat quia veritatis sunt eveniet.",
  items: [
    {
      company: "KodeCorp",
      position: "Frontend Developer",
      duration: "2023 - Present",
    },
  ],
};
// education data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description:
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic sint dolore, corrupti repellat quia veritatis sunt eveniet.",
  items: [
    {
      institution: "IIITB",
      degree: "Data Science",
      duration: "2023 - Present",
    },
    {
      institution: "CMRIT",
      degree: "Bachelor of Engineering",
      duration: "2017 - 2021",
    },
  ],
};
// Skills Data
const skills = {
  title: "My skills",
  description:
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic sint dolore, corrupti repellat quia veritatis sunt eveniet.",
  skillsList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <FaReact />,
      name: "React",
    },
    {
      icon: <FaNodeJs />,
      name: "Node Js",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next Js",
    },
  ],
};
const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex justify-center items-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>
          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              experience
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;

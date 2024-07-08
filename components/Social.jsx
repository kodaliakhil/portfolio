import Link from "next/link";
import { Github, Linkedin, Youtube, Twitter } from "lucide-react";

const socials = [
  {
    icon: <Github />,
    path: "https://github.com/kodaliakhil",
  },
  {
    icon: <Linkedin />,
    path: "https://www.linkedin.com/in/akhil-kodali/",
  },
  // {
  //   icon: <Youtube />,
  //   path: "",
  // },
  {
    icon: <Twitter />,
    path: "https://x.com/kodaliakhil1999",
  },
];
const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => (
        <Link href={item.path} key={index} className={iconStyles} target="_blank">
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default Social;

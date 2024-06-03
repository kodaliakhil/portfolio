import Link from "next/link";
import { Github, Linkedin, Youtube, Twitter } from "lucide-react";

const socials = [
  {
    icon: <Github />,
    path: "",
  },
  {
    icon: <Linkedin />,
    path: "",
  },
  {
    icon: <Youtube />,
    path: "",
  },
  {
    icon: <Twitter />,
    path: "",
  },
];
const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => (
        <Link href={item.path} key={index} className={iconStyles}>
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default Social;

"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import emailjs from '@emailjs/browser';

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    content: "+91 8886468231",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    content: "kodaliakhil1999@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    content: "Beeramguda, Hyderabad, Telangana, India, 502032",
  },
];
import { motion } from "framer-motion";
const Contact = () => {
  async function handleSubmit(event) {

    event.preventDefault();
    const formData = new FormData(event.target)

   
      const templateParams = {
        from_name: formData.get('firstname') + " " + formData.get('lastname'),
        from_email: formData.get('email'),
        from_phone: formData.get('phone'),
        service: formData.get('service'),
        message: formData.get('message')
      }
      emailjs.send(process.env.NEXT_PUBLIC_SERVICE, process.env.NEXT_PUBLIC_TEMPLATE, templateParams, process.env.NEXT_PUBLIC_USER)
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    

    //-------------------------- If we use Node mailer use this Code -----------------------
    // console.log(formData)
    // try {

    //     const response = await fetch('/api/contact', {
    //         method: 'post',
    //         body: formData,
    //     });

    //     if (!response.ok) {
    //         console.log("falling over")
    //         throw new Error(`response status: ${response.status}`);
    //     }
    //     const responseData = await response.json();
    //     console.log(responseData['message'])

    //     alert('Message successfully sent');
    // } catch (err) {
    //     console.error(err);
    //     alert("Error, please try resubmitting the form");
    // }
};
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl" onSubmit={handleSubmit}>
              <h3 className="text-4xl text-accent">Let&apos;s work together</h3>
              <p className="text-white/60">
              Let's collaborate to create innovative, user-friendly web solutions. Leveraging my expertise in front-end development and UI/UX for optimal results.
              </p>
              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="firstname" name="firstname" placeholder="Enter your firstname" />
                <Input type="lastname" name="lastname" placeholder="Enter your lastname" />
                <Input type="email" name="email" placeholder="Enter your email" />
                <Input type="phone" name="phone" placeholder="Enter your phone number" />
              </div>
              {/* select */}
              <Select name="service">
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="Web Developement">Web Development</SelectItem>
                    <SelectItem value="UI/UX Design">UI/UX Design</SelectItem>
                    <SelectItem value="Logo Design">Logo Design</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* textarea */}
              <Textarea
                className="h-[200px]"
                placeholder="Type your message here."
                name="message"
              />
              {/* btn */}
              <Button type="submit" size="md" className="max-w-40">
                Send Message
              </Button>
            </form>
          </div>
          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.content}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;

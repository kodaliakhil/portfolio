"use client";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";


const ResumeDownloadBtn = () => {
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch("assets/resume/Akhil_Kodali_FE.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);

        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "Akhil_Kodali_FE.pdf";
        alink.click();
      });
    });
  };
  return (
    <Button
      variant="outline"
      size="lg"
      className="uppercase flex items-center gap-2"
      onClick={onButtonClick}
    >
      <span>Download Resume</span>
      <Download className="text-xl" />
    </Button>
  );
};

export default ResumeDownloadBtn;

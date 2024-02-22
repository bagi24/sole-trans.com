import React from "react";
import "./aditionalService.css";
import ServicePhoto from "../../assets/sole/servise.jpg";
import { useEffect, useState } from "react";

const AditionalService = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const triggerPoint = 400; // Adjust the trigger point as needed

      if (scrollTop > triggerPoint) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`services ${isVisible ? "visible" : ""}`}>
      <img className="servImg" src={ServicePhoto} alt="" />
    </div>
  );
};

export default AditionalService;

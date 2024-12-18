import React from "react";
import {
  RiFacebookBoxFill,
  RiInstagramFill,
  RiYoutubeFill,
} from "react-icons/ri";
import AOS from "aos";

// Scroll Animation
AOS.init();
import "aos/dist/aos.css";
const Footer = () => {
    React.useEffect(() => {
        AOS.init({ duration: 1000, once: false });
      }, []);

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-white shadow-inner">
      <hr />
      <div className="md:w-2/3 w-full px-4 text-secondary flex flex-col">
        <div className="w-full text-7xl font-bold">
          <h1 className="w-full  font-Ubuntu font-black px-4" data-aos="fade-up">
            How can we help you. get in touch
          </h1>
        </div>
        <div className="flex mt-8 flex-col md:flex-row md:justify-between items-center">
          <p className="w-full md:w-full text-secondary font-Ubuntu font-thin px-4" data-aos="fade-up">
            Find us through all social media handles. Follow us on our socials
            to be updated about latest developments.
          </p>
          
        </div>
        <div className="flex flex-col">
          <div className="flex mt-24 mb-12 flex-col lg:flex-row justify-between items-center" data-aos="fade-up">
            <div className="">
              <img src="/logo-new.png" alt="" width={100} height={100} />
            </div>
            <a className="hidden lg:block cursor-pointer text-secondary font-Ubuntu capitalize">About</a>
            <a className="hidden lg:block cursor-pointer text-secondary font-Ubuntu capitalize">Services</a>
            <a className="hidden lg:block cursor-pointer text-secondary font-Ubuntu capitalize">Why us</a>
            <a className="hidden  lg:block cursor-pointer text-secondary font-Ubuntu capitalize">Contact</a>
            <div className="flex flex-row space-x-8 items-center justify-between text-secondary">              
              <a href="https://www.instagram.com/fh.international" target="blank"><RiInstagramFill /></a>           
              <a href="https://www.facebook.com/FandHInternationalCourierCargo" target="blank"><RiFacebookBoxFill /></a>
              <a href="https://www.youtube.com/" target="blank"><RiYoutubeFill/></a>
            </div>
          </div>
          <hr className="border-gray-600" />
          <p className="w-full text-center mt-12 text-gray-600">
            Copyright © 2024 F&H Internationals
          </p>
        </div>
      </div>
    </div>
  );
};
export default Footer;

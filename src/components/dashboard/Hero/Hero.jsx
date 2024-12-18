import { Button } from "../../ui/button";
import React, { useEffect, useState } from "react";

import AOS from "aos";

// Scroll Animation
AOS.init();
import "aos/dist/aos.css";
import { SignupDrawer } from "@/components/statics/SignupDrawer";

const Hero = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleClick = () => {
    setIsDrawerOpen(true);
  };

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  useEffect(() => {
    AOS.init({ duration: 1000, once: false }); // once: false allows animation on refresh
  }, []);

  return (
    <div className="lg:flex justify-center items-center min-h-[600px]">
      <div
        className=" w-full lg:w-1/2 px-12 mt-8 lg:mt-0"
        data-aos="fade-right"
      >
        <h2 className="font-Ubuntu text-2xl pb-2">
          Serving thousands of customers across Pakistan
        </h2>
        <div className="w-32 h-1 bg-primary mb-4"></div>
        <h2 className="font-Ubuntu font-black text-3xl lg:text-6xl mb-8">
          Moving Millions of parcels every month
        </h2>
        <div>
          <Button
            variant="outline"
            className="py-6 px-4 text-lg font-Ubuntu font-bold"
            onClick={handleClick}
          >
            Create Account
          </Button>
        </div>
      </div>
      <div
        className="w-full lg:w-1/2 flex justify-center items-center lg:mt-0 "
        data-aos="fade-up"
      >
        <div>
          <img
            src="/hero.svg"
            alt=""
            className="w-[300px] h-[300px] px-4 lg:w-[500px] lg:h-[500px]"
          />
        </div>
      </div>
      <SignupDrawer isOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
    </div>
  );
};

export default Hero;

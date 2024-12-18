import { PersonIcon } from "@radix-ui/react-icons";
import AOS from "aos";
// Scroll Animation
AOS.init();
import "aos/dist/aos.css";
import { BoxIcon } from "lucide-react";
import React from "react";
import {
  RiCashFill,
  RiCustomerService2Fill,
  RiHomeOfficeFill,
  RiTeamFill,
} from "react-icons/ri";

const Corporate = () => {
  React.useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);
  return (
    <div
      className="mt-0 min-h-screen flex-col lg:flex-row flex justify-center items-center py-10"
      data-aos="fade-up"
    >
      <div className="px-12 lg:w-1/2 w-full h-full items-center justify-center">
        <h2 className="font-Ubuntu text-2xl lg:text-5xl font-black py-2 px-4">
          Thousands of domestic customers
        </h2>
        <div className="w-32 h-1 mx-4 bg-blue-800"></div>
        <h3 className="py-2 text-xl font-Ubuntu px-4">
          We deliver your couriers and parcels worldwide with our trusted
          services.
        </h3>

        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-y-6 px-4"
          data-aos="fade-in-left"
        >
          <h3 className="flex gap-x-2 text-lg  items-center">
            {<RiTeamFill />}Multiple Staff Members
          </h3>
          <h3 className="flex gap-x-2 text-lg  items-center">
            {<PersonIcon />}Quick To Respond
          </h3>
          <h3 className="flex gap-x-2 text-lg  items-center">
            {<RiHomeOfficeFill />}Mutiple Branches
          </h3>
          <h3 className="flex gap-x-2 text-lg  items-center">
            {<RiCashFill />}Cash on delivery services
          </h3>
          <h3 className="flex gap-x-2 text-lg  items-center">
            {<RiCustomerService2Fill />}Helpline Services
          </h3>
          <h3 className="flex gap-x-2 text-lg  items-center">
            {<BoxIcon />}5 Million Parcels Per Month
          </h3>
        </div>
      </div>
      <div
        className="lg:w-1/2 w-full h-full justify-center items-center px-12"
        data-aos="fade-up"
      >
        <img
          src="/logistics.svg"
          alt=""
          width={500}
          height={500}
        />
      </div>
    </div>
  );
};

export default Corporate;

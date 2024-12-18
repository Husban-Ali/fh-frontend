import React from "react";
import { MobileSheet } from "./MobileSheet";

const MobileNav = () => {
  return (
    <div className="flex">
      <span className="pr-4 font-Ubuntu text-ellipsis text-primary">
        TRACKING
      </span>
      <MobileSheet />
    </div>
  );
};

export default MobileNav;

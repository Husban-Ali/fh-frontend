import React from "react";
import { InquiryTable } from "@/components/dashboard/Admin/inquiry-table";
import { inquiries } from "@/data/inquries";

const Inquiries = () => {
  return (
    <div className="h-[300px]  w-screen">
      {/* <InquiryCard email="hamizmuzaffer@gmail.com" message="lorem ipsum" name="Hamiz  Muzaffer"/> */}
      <InquiryTable inquiries={inquiries} />
    </div>
  );
};

export default Inquiries;

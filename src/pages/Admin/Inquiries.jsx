import React from "react";
import { useGetTicketsQuery } from "../../redux/api/ApiRoutes";
import { InquiryTable } from "../../components/dashboard/Admin/inquiry-table";
const Inquiries = () => {

  // const {data} = useGetTicketsQuery()
  return (
    <div className='w-screen'>
        <div className='w-full  flex justify-center items-center'> 
            <h2 className='text-center text-4xl text-primary font-Ubuntu py-6'>Inquiries</h2>
        </div>
        <div className='w-full'>
            {/* {       
                data?.map((inquiry)=> (
                    <div className='px-4 my-4 '>
                    <InquiryCard email={inquiry?.email} username={inquiry?.name} message={inquiry?.message}/>
                    </div>
                ))
            } */}

          <InquiryTable />
        </div>
    </div>
  );
};

export default Inquiries;

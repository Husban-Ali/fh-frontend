import React from "react";
import { OrderTable } from "@/components/dashboard/Admin/order-table";
import { OrderTableHeaderComponent } from "@/components/dashboard/Admin/order-table-header";

const Orders = () => {
  return (
    <div className="flex flex-col w-screen h-screen">
      <div className=" flex justify-center items-center">
        <h1 className="text-secondary font-Ubuntu text-3xl py-6">Orders</h1>
      </div>
      <OrderTableHeaderComponent
        onSearch={(value) => {
          console.log(value);
        }}
      />
      <OrderTable />
    </div>
  );
};

export default Orders;

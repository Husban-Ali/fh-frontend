import { OrderDetailCard } from "@/components/dashboard/Home/order-detail-card";

const OrderListing = () => {
  return (
    <div className="flex justify-center">
      <div className="min-h-screen w-[800px] flex-col justify-center items-center mx-12 py-12">
        <div className="flex justify-between">
          <div className="font-Ubuntu text-xl">Your Orders</div>
          <div className="font-Ubuntu text-xl">0</div>
        </div>
        <div className="w-full h-1 bg-blue-700 "></div>
        <div className="my-12 w-full">
          <OrderDetailCard />
        </div>
      </div>
    </div>
  );
};

export default OrderListing;

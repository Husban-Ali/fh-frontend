import Barcode from "react-barcode";
import QRCode from "react-qr-code";
import { useSelector } from "react-redux";

const Invoice = () => {
  const orderDetails = useSelector((state) => state.order.orderDetails);

  return (
    <div className="flex justify-center items-center">
      <div className="w-[900px] min-h-[800px] border-2  flex-col justify-center items-center">
        <div className="flex justify-between px-2">
          <p></p>
          <p>FandH Internationals</p>
        </div>
        <div className="flex justify-center items-center">
          <div className="h-[700px] w-[800px] border-2 border-black mt-4">
            {/* Header */}
            <div className="h-[120px]  w-full border-b-2 flex">
              <div className="h-full w-1/3 border-b-2 border-r-2 border-black">
                <img src="/logo-new.png" alt="logo" className="h-full w-full" />
              </div>
              <div className="h-full w-1/3 border-b-2 border-r-2 border-black">
                <div className="flex h-2/3 border-b-2 border-black">
                  <div className="w-1/2 h-full border-r-2 border-black flex">
                    <div className="w-1/3 border-black border-r-2 h-full font-bold text-center text-xs">
                      <div className="h-1/2 border-b-2 border-black ">Date</div>
                      <div className="h-1/2">Origin</div>
                    </div>

                    <div className="w-2/3 h-full text-xs ">
                      <div className="h-1/2 border-b-2 border-black ">
                        10/4/12
                      </div>
                      <div className="h-1/2">Pakistan</div>
                    </div>
                  </div>
                  <div className="w-1/2 h-full flex">
                    <div className="w-1/2 border-black border-r-2 h-full font-bold text-center text-xs">
                      <div className="h-1/2 border-b-2 border-black ">Time</div>
                      <div className="h-1/2">Destination</div>
                    </div>

                    <div className="w-1/2 h-full">
                      <div className="h-1/2 border-b-2 break-words border-black text-xs">
                        10/4/12
                      </div>
                      <div className="h-1/2 text-xs break-words">Pakistan</div>
                    </div>
                  </div>
                </div>

                <div className="h-full">
                  <span className="font-bold text-xs px-2">
                    Account# &nbsp; {orderDetails?._id}
                  </span>
                </div>
              </div>
              <div className="h-full w-1/3 border-b-2 flex justify-center items-center border-black">
                <Barcode value="124124214" height={70} />
              </div>
            </div>
            {/* Shipper & Consignee Info */}
            <div className="h-[120px] w-full border-b-2 border-black flex">
              <div className="w-1/2 h-full border-r-2 border-black flex">
                {/* Shipper */}
                <div className="headings h-full w-1/3 border-black border-r-2 text-xs font-bold">
                  <div className="h-[30px] border-b-2 border-black px-2">
                    Shipper's Name
                  </div>
                  <div className="h-[45px] border-b-2 border-black  px-2">
                    Shipper Address
                  </div>
                  <div className="h-[45px]  px-2">Shipper Email</div>
                </div>
                <div className="input w-2/3 h-full">
                  <div className="h-[30px] border-b-2 border-black px-2 text-xs">
                    {orderDetails?.shipperName}
                  </div>
                  <div className="h-[45px] border-b-2 border-black  px-2 text-xs">
                    {orderDetails?.shipperAddress}
                  </div>
                  <div className="h-[45px]  px-2 text-xs">
                    {orderDetails?.shipperEmail}
                  </div>
                </div>
              </div>
              <div className="w-1/2 h-full flex">
                {/* Consignee */}
                <div className="headings h-full w-1/3 border-black border-r-2 text-xs font-bold">
                  <div className="h-[30px] border-b-2 border-black px-2">
                    Consignee Name
                  </div>
                  <div className="h-[45px] border-b-2 border-black  px-2">
                    Consignee Address
                  </div>
                  <div className="h-[45px]  px-2">Consignee Email</div>
                </div>
                <div className="input w-2/3 h-full">
                  <div className="h-[30px] border-b-2 border-black px-2 text-xs">
                    {orderDetails?.consigneeName}
                  </div>
                  <div className="h-[45px] border-b-2 border-black  px-2 text-xs">
                    {orderDetails?.consigneeAddress}
                  </div>
                  <div className="h-[45px]  px-2 text-xs">
                    {orderDetails?.consigneeEmail}
                  </div>
                </div>
              </div>
            </div>

            {/* NTN Section */}
            <div className="h-[120px] w-full border-b-2 border-black flex">
              {/* NTN info           */}
              <div className="h-full w-1/2 border-r-2 border-black flex">
                <div className="w-1/3 h-full border-r-2 border-black px-2 text-xs font-bold">
                  NTN/CNIC
                </div>
                <div className="w-2/3 h-full font-bold text-xs px-2">
                  {orderDetails?.shipperNTN}
                </div>
              </div>

              {/* Bag Info */}
              <div className="h-full w-1/2">
                <div className="w-1/3 h-full border-r-2 border-black"></div>
                <div className="w-2/3 h-full"></div>
              </div>
            </div>

            {/* Telephone Section */}

            <div className="h-[45px] w-full border-b-2 border-black flex">
              <div className="h-full w-1/2 border-r-2 border-black flex">
                <div className="w-1/3 h-full border-r-2 border-black font-bold text-xs text-center">
                  Shipper's Telephone
                </div>
                <div className="w-2/3 h-full text-xs px-2">
                  {orderDetails?.shipperPhone}
                </div>
              </div>
              <div className="h-full w-1/2 border-r-2 flex">
                <div className="w-1/3 h-full border-r-2 border-black font-bold text-xs text-center">
                  Consignee's Telephone
                </div>
                <div className="w-2/3 h-full text-xs px-2">
                  {orderDetails?.consigneePhone}
                </div>
              </div>
            </div>

            {/* Shipper Reference Section */}

            <div className="h-[60px] w-full border-b-2 border-black flex">
              <div className="h-full w-1/2 border-r-2 border-black flex">
                <div className="w-1/3 h-full border-r-2 border-black text-xs font-bold text-center">
                  Shipper's Reference
                </div>
                <div className="w-2/3 h-full flex text-xs font-bold text-center">
                  <div className="w-1/4 border-r-2 border-black h-full">
                    F&H
                  </div>
                  <div className="w-1/4 border-r-2 border-black h-full">
                    Pieces
                  </div>
                  <div className="w-1/4 border-r-2 border-black h-full">1</div>
                  <div className="w-1/4 h-full">Weight</div>
                </div>
              </div>
              <div className="h-full w-1/2 flex text-xs font-bold">
                <div className="h-full w-[20%] border-r-2 border-black px-2">
                  5.00 KG
                </div>
                <div className="h-full w-[20%] border-r-2 border-black px-2">
                  Voulmetric Weight
                </div>
                <div className="h-full w-[20%] border-r-2 border-black px-2">
                  5.00 KG
                </div>
                <div className="h-full w-[20%] border-r-2 border-black px-2">
                  Chargeble Weight
                </div>
                <div className="h-full w-[20%]  px-2">5.00 KG</div>
              </div>
            </div>
            {/* Dimension Section */}

            <div className="h-[60px] w-full border-b-2 border-black flex">
              <div className="h-full w-1/2 border-r-2 border-black flex">
                <div className="w-1/3 h-full border-r-2 border-black text-xs font-bold text-center">
                  Dimension
                </div>
                <div className="w-2/3 h-full flex text-xs font-bold text-center">
                  <div className="w-2/3 border-r-2 border-black h-full">
                    192x1423
                  </div>
                  <div className="w-1/3  h-full font-bold text-xs">Service</div>
                </div>
              </div>
              <div className="h-full w-1/2 flex text-xs font-bold">
                <div className="h-full w-[20%] border-r-2 border-black px-2">
                  Via UK UPS
                </div>
                <div className="h-full w-[20%] border-r-2 border-black px-2">
                  Fragile
                </div>
                <div className="h-full w-[20%] border-r-2 border-black px-2">
                  No
                </div>
                <div className="h-full w-[20%] border-r-2 border-black px-2">
                  Declared Value
                </div>
                <div className="h-full w-[20%]  px-2">16</div>
              </div>
            </div>
            {/* Footer */}
            <div className="h-[173px] w-full border-black border-b-2 flex">
              <div className="h-full w-[75%] border-black border-r-2 text-xs font-bold">
                <div className="w-full border-b-2 h-1/3 border-black flex">
                  <div className="w-1/3 h-full border-r-2 border-black px-2">
                    Product Details
                  </div>
                  <div className="w-2/3 h-full text-xs px-2">
                    {orderDetails?.parcelDetails}
                  </div>
                </div>
                <div className="w-full border-b-2 h-1/3 border-black text-xs flex ">
                  <div className="w-1/3 h-full border-r-2 border-black px-2">
                    Comments
                  </div>
                  <div className="w-2/3 h-full text-xs px-2">
                    {orderDetails?.trackingNumber}
                  </div>
                </div>
                <div className="w-full h-1/3 text-xs flex justify-center items-center ">
                  <span className="text-xs font-bold px-2">NOTE:</span>
                  PLEASE DO NOT ACCEPT IF SHIPMENT IS NOT INTACT
                </div>
              </div>
              <div className="h-full w-[25%] flex justify-center items-center">
                <QRCode
                  value="https://hamizmuzaffer.vercel.app"
                  size={140}
                  fgColor="#000000"
                  bgColor="#ffffff"
                />
                ;
              </div>
            </div>
          </div>
        </div>
        <hr className="border-t-4 border-dotted border-black my-4" />
      </div>
    </div>
  );
};

export default Invoice;

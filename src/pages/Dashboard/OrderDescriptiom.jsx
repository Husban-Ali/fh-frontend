import { Button } from "@/components/ui/button";
import Invoice from "@/services/invoice/Invoice";
import html2pdf from "html2pdf.js";
import { Download } from "lucide-react";
import { Link } from "react-router-dom";

const handleSubmit = () => {
  var element = document.getElementById("element");
  const options = {
    filename: "invoice.pdf",
  };
  html2pdf().from(element).set(options).save();
};
const OrderDescription = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}

        {/* Invoice Container */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="border-b border-gray-200 p-4 flex justify-between">
            <h2 className="text-lg font-medium text-gray-900">
              Invoice Details
            </h2>
            <Button
              className="bg-blue-600 hover:bg-blue-700 transition-colors flex items-center gap-2"
              onClick={handleSubmit}
            >
              <Download className="h-4 w-4" />
              Download Receipt
            </Button>
          </div>

          {/* Scrollable Invoice Area */}
          <div className="relative">
            {/* Fade effect for scroll indication */}
            <div className="absolute top-0 left-0 right-0 h-4 bg-gradient-to-b from-white to-transparent z-10" />
            <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-t from-white to-transparent z-10" />

            {/* Invoice Content */}
            <div className="h-[500px] overflow-auto px-4 md:px-6 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
              <div className="max-w-full md:max-w-[820px] mx-auto py-6">
                <div id="element">
                  <Invoice />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Footer */}
        <div className="mt-6 flex justify-end space-x-4">
          <Link to="/dashboard/orders">
            <Button variant="outline" className="text-gray-700 ">
              Back to Orders
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderDescription;

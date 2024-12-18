import React from "react";
import { BranchCard } from "@/components/dashboard/Home/BranchCard";
import { PickupCard } from "@/components/dashboard/Home/PickupCard";
import { RateCard } from "@/components/dashboard/Home/RateCard";
import SwiperComponent from "@/components/dashboard/Home/Swiper";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section with Swiper */}
      <div className="relative min-h-[500px] w-full overflow-hidden rounded-b-3xl shadow-lg">
        <div className="absolute inset-0 backdrop-blur-sm z-0" />
        <SwiperComponent />
      </div>

      {/* Cards Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Pickup Card */}
          <Link
            to="/dashboard/pickup"
            className="transform transition-all duration-300 hover:scale-105"
          >
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl p-6">
              <PickupCard />
            </div>
          </Link>

          {/* Branch Card */}
          <Link
            to="/dashboard/branch"
            className="transform transition-all duration-300 hover:scale-105"
          >
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl p-6">
              <BranchCard />
            </div>
          </Link>

          {/* Rate Calculator Card */}
          <Link
            to="/dashboard/rate-calculator"
            className="transform transition-all duration-300 hover:scale-105"
          >
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl p-6">
              <RateCard />
            </div>
          </Link>
        </div>

        {/* Additional Content Section */}
        <div className="mt-16 mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Welcome to Your Dashboard
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Quick Stats */}
              <div className="space-y-4">
                <div className="bg-blue-50 rounded-lg p-4">
                  <h3 className="text-lg font-medium text-blue-900">
                    Quick Actions
                  </h3>
                  <ul className="mt-2 space-y-2">
                    <li className="flex items-center text-blue-700">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                      Schedule a Pickup
                    </li>
                    <li className="flex items-center text-blue-700">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                      Find Nearest Branch
                    </li>
                    <li className="flex items-center text-blue-700">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                      Calculate Shipping Rate
                    </li>
                  </ul>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="text-lg font-medium text-gray-900">
                  Recent Activity
                </h3>
                <div className="mt-2 space-y-3">
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    Last pickup completed successfully
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
                    Rate calculation performed
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                    Branch location searched
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

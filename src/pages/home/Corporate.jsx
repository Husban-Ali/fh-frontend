import React from "react";
import Header from "@/components/statics/Header";
import Footer from "@/components/statics/Footer";
import corporate from "../../assets/Images/corporate.jpg";
import end from "../../assets/Images/endtoend.jpg";
import solution from "../../assets/Images/solution.jpg";
import global from "../../assets/Images/global.jpg";
import trans from "../../assets/Images/transparent.jpg";
import corporate1 from "../../assets/Images/corporate1.jpg";
import corporate2 from "../../assets/Images/corporate2.jpg";
import corporate3 from "../../assets/Images/corporate3.jpg";
import corporate4 from "../../assets/Images/corporate4.jpg";
import corporate5 from "../../assets/Images/corporate5.jpg";
import AOS from "aos";

// Scroll Animation
AOS.init();
import "aos/dist/aos.css";

const Corporate = () => {
  React.useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  return (
    <>
      <header>
        <Header />
      </header>

      <section className="min-h-screen py-12 xl:px-12">
        <div className="container mx-auto px-4">
          <div className="grid xl:grid-cols-2 gap-12 xl:gap-24 pt-12 xl:h-[480px] mb-12 xl:mb-24">
            <div
              className="flex flex-col justify-center w-full"
              data-aos="fade-right"
            >
              <div className="flex items-center gap-x-4 text-primary text-lg mb-4">
                <span className="w-[30px] h-[2px] bg-primary"></span>
                <span className="font-medium">Corporate Services</span>
              </div>
              <h1 className="h1 max-w-md mb-8 font-black font-Ubuntu text-3xl">
                Reliable Solutions for Your Business
              </h1>
              <p className="subtitle max-w-[600px] font-Ubuntu font-bold">
                F&H International offers custom corporate logistics,
                procurement, and delivery services tailored to your business
                needs. Whether you need efficient cargo management or corporate
                deliveries, we've got you covered.
              </p>
            </div>
            <div>
              <div className="flex h-full justify-center items-center">
                <img
                  src={corporate}
                  alt="Corporate Solutions Illustration"
                  width={400}
                  height={400}
                  data-aos="fade-up"
                />
              </div>
            </div>
          </div>

          {/* Corporate Benefits Section */}
          <div className="mb-24 xl:mb-32">
            <h2
              className="text-2xl font-bold mb-6 font-Ubuntu"
              data-aos="fade-right"
            >
              Why Choose Us for Corporate Needs?
            </h2>
            <div className="grid md:grid-cols-2 gap-12 xl:gap-24 mb-12">
              <div
                className="flex flex-col gap-y-6 xl:gap-y-10"
                data-aos="fade-right"
              >
                <div className="flex items-start gap-x-4">
                  <img src={solution} alt="Benefit 1" className="w-12 h-12" />
                  <div>
                    <h3 className="text-lg font-bold">Custom Solutions</h3>
                    <p>
                      Tailored strategies for your business logistics to
                      optimize efficiency and save costs.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-x-4">
                  <img src={end} alt="Benefit 2" className="w-12 h-12" />
                  <div>
                    <h3 className="text-lg font-bold">End-to-End Support</h3>
                    <p>
                      Comprehensive services including cargo management, customs
                      clearance, and tracking.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="flex flex-col gap-y-6 xl:gap-y-10"
                data-aos="fade-left"
              >
                <div className="flex items-start gap-x-4">
                  <img src={global} alt="Benefit 3" className="w-12 h-12" />
                  <div>
                    <h3 className="text-lg font-bold">Global Reach</h3>
                    <p>
                      Seamless import and export services across multiple
                      countries for hassle-free trade.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-x-4">
                  <img src={trans} alt="Benefit 4" className="w-12 h-12" />
                  <div>
                    <h3 className="text-lg font-bold">Transparent Pricing</h3>
                    <p>
                      Clear and competitive pricing with no hidden fees to
                      ensure trust and satisfaction.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Corporate Clients Section */}
            <div>
              <h2
                className="text-2xl font-bold mb-6 font-Ubuntu"
                data-aos="fade-right"
              >
                Our Corporate Clients
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
                <img
                  src={corporate1}
                  alt="Client 1"
                  className="rounded shadow-lg"
                  data-aos="fade-up"
                />
                <img
                  src={corporate2}
                  alt="Client 2"
                  className="rounded shadow-lg"
                  data-aos="fade-up"
                />
                <img
                  src={corporate3}
                  alt="Client 3"
                  className="rounded shadow-lg"
                  data-aos="fade-up"
                />
                <img
                  src={corporate4}
                  alt="Client 4"
                  className="rounded shadow-lg"
                  data-aos="fade-up"
                />
                <img
                  src={corporate5}
                  alt="Client 5"
                  className="rounded shadow-lg"
                  data-aos="fade-up"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Corporate;

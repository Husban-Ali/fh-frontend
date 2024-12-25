import React from "react";
import Header from "@/components/statics/Header";
import Footer from "@/components/statics/Footer";
import media from "../../assets/Images/mediaprocurement.jpg";
import shop1 from "../../assets/Images/shop1.jpg";
import shop2 from "../../assets/Images/shop2.jpg";
import shop3 from "../../assets/Images/shop3.jpg";
import delivery1 from "../../assets/Images/delevery1.jpg";
import delivery2 from "../../assets/Images/delevery2.jpg";
import delivery3 from "../../assets/Images/delevery3.jpg";
import certificate1 from "../../assets/Images/certificate1.jpg";
import certificate2 from "../../assets/Images/certificate2.jpg";
import certificate3 from "../../assets/Images/certificate3.jpg";
import AOS from "aos";

// Scroll Animation
AOS.init();
import "aos/dist/aos.css";

const MediaProcurement = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      once: true, // animation happens only once
      easing: "ease-out-cubic", // easing for smooth effect
      offset: 100, // start animation when 100px before the element is in view
    });
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
                <span className="font-medium">Explore Our Media</span>
              </div>
              <h1 className="h1 max-w-md mb-8 font-black font-Ubuntu text-3xl">
                See What We&apos;re All About
              </h1>
              <p className="subtitle max-w-[600px] font-Ubuntu font-bold">
                Discover more about F&H International through our gallery of
                shop pictures, delivery product photos, and certifications that
                highlight our commitment to excellence.
              </p>
            </div>
            <div>
              <div className="flex h-full justify-center items-center">
                <img
                  src={media}
                  alt="Media Gallery Illustration"
                  width={400}
                  height={400}
                  data-aos="fade-up" // Scroll-triggered animation
                />
              </div>
            </div>
          </div>

          {/* Media Section */}
          <div className="mb-24 xl:mb-32">
            <h2
              className="text-2xl font-bold mb-6 font-Ubuntu"
              data-aos="fade-right"
            >
              Shop Pictures
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              <img
                src={shop1}
                alt="Shop 1"
                className="rounded shadow-lg"
                data-aos="fade-up" // Fade-in animation on scroll
              />
              <img
                src={shop2}
                alt="Shop 2"
                className="rounded shadow-lg"
                data-aos="fade-up"
              />
              <img
                src={shop3}
                alt="Shop 3"
                className="rounded shadow-lg"
                data-aos="fade-up"
              />
            </div>

            <h2
              className="text-2xl font-bold mb-6 font-Ubuntu"
              data-aos="fade-right"
            >
              Delivery Products
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              <img
                src={delivery1}
                alt="Delivery 1"
                className="rounded shadow-lg"
                data-aos="fade-up"
              />
              <img
                src={delivery2}
                alt="Delivery 2"
                className="rounded shadow-lg"
                data-aos="fade-up"
              />
              <img
                src={delivery3}
                alt="Delivery 3"
                className="rounded shadow-lg"
                data-aos="fade-up"
              />
            </div>

            <h2
              className="text-2xl font-bold mb-6 font-Ubuntu"
              data-aos="fade-right"
            >
              Certifications
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <img
                src={certificate1}
                alt="Certification 1"
                className="rounded shadow-lg"
                data-aos="fade-up"
              />
              <img
                src={certificate2}
                alt="Certification 2"
                className="rounded shadow-lg"
                data-aos="fade-up"
              />
              <img
                src={certificate3}
                alt="Certification 3"
                className="rounded shadow-lg"
                data-aos="fade-up"
              />
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

export default MediaProcurement;

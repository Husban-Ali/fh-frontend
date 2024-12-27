import React from "react";
import Header from "@/components/statics/Header";
import Footer from "@/components/statics/Footer";
import shop from "../../assets/Images/shop2.jpg";
import why1 from "../../assets/Images/why1.jpg";
import why2 from "../../assets/Images/why1.jpg";
import why3 from "../../assets/Images/why1.jpg";
import why5 from "../../assets/Images/why1.jpg";
import why6 from "../../assets/Images/why1.jpg";
import why7 from "../../assets/Images/why1.jpg";
import why8 from "../../assets/Images/why1.jpg";
import why4 from "../../assets/Images/shop3.jpg";

import AOS from "aos";
import "aos/dist/aos.css";

const WhyUs = () => {
  React.useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const benefits = [
    {
      title: "Free Pickups of Using Packing",
      description:
        "We offer free pickup services and packaging assistance to ensure a seamless start to your shipping process.",
      image: why1,
    },
    {
      title: "Bonded Warehousing",
      description:
        "Our bonded warehousing solutions ensure secure storage for your goods, enabling smooth customs clearance.",
      image: shop,
    },
    {
      title: "Custom Clearance Support",
      description:
        "Navigate international customs efficiently with our expert support, minimizing delays and extra costs.",
      image: why2,
    },
    {
      title: "Massive Discounts on International Parcels",
      description:
        "Save big with exclusive discounts on international parcel shipping to keep your costs low.",
      image: why3,
    },
    {
      title: "Global Warehousing Network",
      description:
        "Access our extensive network of global warehouses for optimized shipping and logistics.",
      image: why4,
    },
    {
      title: "Avoid Delays of Cross-Border Commerce",
      description:
        "Ensure timely delivery of your goods with our efficient cross-border logistics solutions.",
      image: why5,
    },
    {
      title: "Seamless Contact Across Destinations",
      description:
        "Enjoy consistent support from our dedicated team, no matter where your shipment is headed.",
      image: why6,
    },
    {
      title: "Real-Time Tracking",
      description:
        "Track your shipments in real-time with our state-of-the-art tracking technology for full transparency.",
      image: why7,
    },
    {
      title: "24/7 Customer Support",
      description:
        "Our support team is available 24/7 to resolve any queries or issues for a hassle-free experience.",
      image: why8,
    },
  ];

  return (
    <div>
      <header>
        <Header />
      </header>

      <section className="py-12 xl:px-12 bg-gray-100">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <h1
            className="text-4xl font-bold text-center text-primary mb-6"
            data-aos="fade-up"
          >
            Why Choose F&H International?
          </h1>
          <p
            className="text-lg text-gray-600 text-center mb-12"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Discover the unique advantages we offer for all your courier and
            cargo needs.
          </p>

          {/* Benefits Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
                data-aos="fade-up"
                data-aos-delay={`${index * 100}`}
              >
                <img
                  src={benefit.image}
                  alt={benefit.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-secondary mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default WhyUs;

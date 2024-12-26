import React from "react";
import Header from "@/components/statics/Header";
import Footer from "@/components/statics/Footer";
import service1 from "../../assets/Images/service1.jpg";
import service2 from "../../assets/Images/service2.jpg";
import service3 from "../../assets/Images/service3.jpg";
import service4 from "../../assets/Images/service4.jpg";
import service5 from "../../assets/Images/service5.jpg";
import service6 from "../../assets/Images/service6.jpg";
import service7 from "../../assets/Images/service7.jpg";
import service8 from "../../assets/Images/service8.jpg";
import service9 from "../../assets/Images/service9.jpg";
import service10 from "../../assets/Images/service10.jpg";
import service11 from "../../assets/Images/service11.jpg";
import AOS from "aos";

// Scroll Animation
AOS.init();
import "aos/dist/aos.css";

const servicesData = [
  {
    title: "Import Services",
    description:
      "We specialize in hassle-free import services to bring the best products to your business from around the globe.",
    icon: service1,
  },
  {
    title: "Export Services",
    description:
      "Expand your business to international markets with our reliable and efficient export solutions.",
    icon: service2,
  },
  {
    title: "Logistics Solutions",
    description:
      "From warehousing to shipping, our tailored logistics services ensure your supply chain runs smoothly.",
    icon: service3,
  },
  {
    title: "Customs Clearance",
    description:
      "Hassle-free customs management to ensure your goods clear international borders smoothly.",
    icon: service4,
  },
  {
    title: "Freight Forwarding",
    description:
      "Comprehensive air, sea, and land freight solutions for all your logistics needs.",
    icon: service5,
  },
  {
    title: "Warehousing and Distribution",
    description:
      "Safe storage and timely distribution of goods to your desired destinations.",
    icon: service6,
  },
  {
    title: "Cargo Insurance",
    description:
      "Protect your shipments with tailored insurance policies to minimize risks.",
    icon: service7,
  },
  {
    title: "Supply Chain Management",
    description:
      "Streamlined solutions to optimize your end-to-end supply chain processes.",
    icon: service8,
  },
  {
    title: "Trade Consultancy",
    description:
      "Expert guidance on trade regulations and strategies to maximize your business potential.",
    icon: service9,
  },
  {
    title: "Packaging Solutions",
    description:
      "Secure and customized packaging to ensure goods arrive intact.",
    icon: service10,
  },
  {
    title: "Door-to-Door Delivery",
    description:
      "Seamless pickup and delivery services from your location to your customers' doorsteps.",
    icon: service11,
  },
  {
    title: "Import Services",
    description:
      "We specialize in hassle-free import services to bring the best products to your business from around the globe.",
    icon: service1,
  },
];

const Services = () => {
  React.useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  return (
    <>
      <header>
        <Header />
      </header>

      <section className="min-h-screen bg-gray-100 py-12 xl:px-12">
        <div className="container mx-auto px-4 text-center">
          {/* Title Section */}
          <h1
            className="font-bold text-4xl xl:text-5xl mb-6"
            data-aos="fade-up"
          >
            Our Services
          </h1>
          <p
            className="text-lg xl:text-xl font-medium mb-12 text-gray-600"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Discover how F&H International can help grow your business with our
            comprehensive range of services.
          </p>

          {/* Services Grid */}
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            {servicesData.map((service, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center"
              >
                <img
                  src={service.icon}
                  alt={`${service.title} icon`}
                  className="w-16 h-16 mb-4"
                />
                <h2 className="font-semibold text-xl mb-2">{service.title}</h2>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Services;

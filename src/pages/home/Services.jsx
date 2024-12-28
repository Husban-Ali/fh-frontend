import React from "react";
import Header from "@/components/statics/Header";
import Footer from "@/components/statics/Footer";
import service1 from "../../assets/Images/service1.jpg";
import service2 from "../../assets/Images/service2.jpg";
import service3 from "../../assets/Images/service3.jpg";
import service4 from "../../assets/Images/service4.jpg";
import service5 from "../../assets/Images/service5.jpg";

// import service12 from "../../assets/Images/service12.jpg"; // Add additional service images as needed
import AOS from "aos";

// Scroll Animation
AOS.init();
import "aos/dist/aos.css";

const servicesData = [
  {
    title: "DHL",
    description:
      "Global logistics solutions tailored to your import and export needs.",
    icon: service1,
  },
  {
    title: "FedEx",
    description: "Efficient and reliable global shipping with FedEx services.",
    icon: service2,
  },
  {
    title: "UPS",
    description:
      "Comprehensive shipping solutions for international and domestic deliveries.",
    icon: service3,
  },
  {
    title: "Skynet",
    description:
      "Fast and secure courier services to meet your shipping needs.",
    icon: service4,
  },
  {
    title: "Aramex",
    description: "Innovative logistics and transportation services worldwide.",
    icon: service5,
  },
  {
    title: "Via Dubai DHL",
    description:
      "Specialized DHL services routed via Dubai for efficiency and speed.",
    icon: service1,
  },
  {
    title: "Via Dubai UPS",
    description:
      "UPS shipping services optimized through Dubai for seamless delivery.",
    icon: service3,
  },
  {
    title: "Via Dubai FedEx",
    description:
      "FedEx logistics through Dubai, ensuring reliable global connections.",
    icon: service2,
  },
  {
    title: "Via Dubai Aramex",
    description:
      "Optimized Aramex services via Dubai for cost-effective shipping.",
    icon: service5,
  },
  {
    title: "Via UK DHL",
    description:
      "Efficient DHL services routed through the UK for enhanced delivery networks.",
    icon: service1,
  },
  {
    title: "Via UK UPS",
    description:
      "Reliable UPS shipping services routed through the UK for seamless global delivery.",
    icon: service3,
  },
  {
    title: "Via UK FedEx",
    description:
      "FedEx services routed through the UK for enhanced logistics and delivery options.",
    icon: service2,
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

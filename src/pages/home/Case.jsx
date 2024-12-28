import React, { useState } from "react";
import Header from "@/components/statics/Header";
import Footer from "@/components/statics/Footer";
import case1 from "../../assets/Images/case1.jpg";
import case2 from "../../assets/Images/case2.jpg";
import case3 from "../../assets/Images/case3.jpg";
import case4 from "../../assets/Images/case4.jpg";
import case5 from "../../assets/Images/case5.jpg";
import case6 from "../../assets/Images/case6.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

// Case study data
const caseStudies = [
  {
    title: "Streamlining Logistics for Global Expansion",
    description:
      "We helped a multinational corporation optimize their logistics chain to expand into new international markets with minimal delay and cost.",
    image: case1,
    link: "/case-study/1",
  },
  {
    title: "Customs Clearance Efficiency",
    description:
      "Our team worked with a client to simplify their customs clearance process, ensuring goods were delivered faster and without unnecessary fees.",
    image: case2,
    link: "/case-study/2",
  },
  {
    title: "End-to-End Supply Chain Solutions",
    description:
      "We provided end-to-end supply chain management for a leading e-commerce brand, improving their shipping speed by 30% and reducing overhead costs.",
    image: case3,
    link: "/case-study/3",
  },
  {
    title: "Packaging & Delivery Innovation",
    description:
      "Our packaging solutions helped a client protect delicate products during shipping, reducing damage rates by 40% and improving customer satisfaction.",
    image: case4,
    link: "/case-study/4",
  },
  {
    title: "Logistics for Global Supply Chain",
    description:
      "We optimized a global supply chain by enhancing tracking and real-time updates, ensuring smoother transitions between countries and faster deliveries.",
    image: case5,
    link: "/case-study/5",
  },
  {
    title: "Sustainability in Packaging",
    description:
      "We introduced eco-friendly packaging solutions to a major client, significantly reducing waste and enhancing their sustainability profile in the industry.",
    image: case6,
    link: "/case-study/6",
  },
];

const CaseStudies = () => {
  React.useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const [expanded, setExpanded] = useState(null);

  const toggleDescription = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <>
      <header>
        <Header />
      </header>

      <section className="min-h-screen py-12 xl:px-12 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          {/* Title Section */}
          <h1
            className="font-bold text-4xl xl:text-5xl mb-6"
            data-aos="fade-up"
          >
            Our Case Studies
          </h1>
          <p
            className="text-lg xl:text-xl font-medium mb-12 text-gray-600"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Explore some of the successful projects we have completed and the
            impact we’ve made for our clients.
          </p>

          {/* Case Studies Grid */}
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg overflow-hidden"
              >
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-56 object-cover"
                />
                <div className="p-6">
                  <h2 className="font-semibold text-xl mb-4">{study.title}</h2>
                  <p className="text-gray-600 mb-4">
                    {expanded === index
                      ? study.description
                      : `${study.description.slice(0, 100)}...`}
                  </p>
                  <button
                    onClick={() => toggleDescription(index)}
                    className="text-primary font-semibold hover:underline"
                    aria-expanded={expanded === index}
                  >
                    {expanded === index ? "Read Less" : "Read More"}
                  </button>
                </div>
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

export default CaseStudies;

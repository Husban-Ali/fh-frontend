import React from "react";
import Header from "@/components/statics/Header";
import Footer from "@/components/statics/Footer";
import career from "../../assets/Images/career.jpg";
import AOS from "aos";

// Scroll Animation
AOS.init();
import "aos/dist/aos.css";

const Careers = () => {
  React.useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  return (
    <>
      <header>
        <Header />
      </header>

      <section className="min-h-screen flex flex-col justify-center items-center text-center py-12 xl:px-12">
        <div className="container mx-auto px-4" data-aos="fade-up">
          <h1 className="h1 font-bold text-4xl xl:text-5xl mb-6">
            Careers Page Coming Soon!
          </h1>
          <p className="text-lg xl:text-xl font-medium mb-12">
            Exciting opportunities are on their way! Stay tuned for updates
            about career openings at F&H International.
          </p>
          <img
            src={career}
            alt="Coming Soon Illustration"
            className="w-80 md:w-96 lg:w-[500px] mx-auto mb-12"
          />
          <p className="text-base xl:text-lg">
            For any urgent career inquiries, please feel free to contact us at{" "}
            <span className="text-primary font-bold">F&Hintl321@gmail.com</span>
            .
          </p>
        </div>
      </section>

      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Careers;

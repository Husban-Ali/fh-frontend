import React from "react";
import Header from "@/components/statics/Header";
import Footer from "@/components/statics/Footer";
import franchise from "../../assets/Images/franchise.jpg";
import AOS from "aos";

// Scroll Animation
AOS.init();
import "aos/dist/aos.css";

const Franchise = () => {
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
          {/* Title Section */}
          <h1 className="font-bold text-4xl xl:text-5xl mb-6">
            Franchise Opportunities Coming Soon!
          </h1>

          {/* Description */}
          <p className="text-lg xl:text-xl font-medium mb-12">
            We are excited to announce that F&H International is expanding! Stay
            tuned for more information about our upcoming franchise
            opportunities.
          </p>

          {/* Coming Soon Image */}
          <img
            src={franchise}
            alt="Coming Soon Illustration"
            className="w-80 md:w-96 lg:w-[500px] mx-auto mb-12"
          />

          {/* Contact Information */}
          <p className="text-base xl:text-lg">
            If you're interested in exploring franchise opportunities or have
            any questions, feel free to reach out to us at{" "}
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

export default Franchise;

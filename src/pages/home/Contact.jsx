import React from "react";
import { Form } from "@/components/statics/Form";
import Header from "@/components/statics/Header";
import { MailIcon, PhoneIcon, HomeIcon } from "lucide-react";
import AOS from "aos";

// Scroll Animation
AOS.init();
import "aos/dist/aos.css";
import Footer from "@/components/statics/Footer";


const Contact = () => {
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
          <div className="grid xl:grid-cols-2 gap-12 xl:gap-24 pt-12 xl:h-[480px] mb-12 xl:mb-24" >
            <div className="flex flex-col justify-center w-full" data-aos="fade-right">
              <div className="flex items-center gap-x-4 text-primary text-lg mb-4">
                <span className="w-[30px] h-[2px] bg-primary"></span>
                <span className="font-medium">Hello There 👋</span>
              </div>
              <h1 className="h1 max-w-md mb-8 font-black font-Ubuntu text-3xl">
                Let&apos;s Work Together
              </h1>
              <p className="subtitle max-w-[600px] font-Ubuntu font-bold">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Recusandae amet excepturi ipsa, eligendi tempore explicabo est
                reiciendis tempora nesciunt? Dignissimos possimus culpa,
                repellat commodi cupiditate eum. Iusto saepe deleniti quae.
              </p>
            </div>
            <div>
              <div className="flex h-full justify-center items-center">
                <img src="/collaborators.svg" alt="" width={400} height={400} data-aos="fade-up"/>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 xl:gap-24 mb-24 xl:mb-32">
            <div className="flex flex-col gap-y-6 xl:gap-y-10 text-base xl:text-lg"data-aos="fade-right">
              <div className="flex items-center gap-x-4">
                <MailIcon size={24} className="text-primary" />
                <div className="font-Ubuntu">
                  F&hintl321@gmail.com
                </div>
              </div>
              <div className="flex items-center gap-x-4">
                <PhoneIcon size={24} className="text-primary" />
                <div className="font-Ubuntu">+923082347284</div>
              </div>
              <div className="flex items-center gap-x-4">
                <HomeIcon size={24} className="text-primary" />
                <div className="font-Ubuntu">
                  G62,Four Square Mall,Kurta Gali,Tariq Road,Karachi
                </div>
              </div>
            </div>
            <div data-aos="fade-right">
            <Form />
            </div>
          </div>
        </div>
      </section>
      <footer>
        <Footer/>
      </footer>
    </>
  );
};

export default Contact;

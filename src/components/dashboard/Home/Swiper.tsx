// SwiperComponent.js
import { Swiper, SwiperSlide } from 'swiper/react';
import { SearchBarComponent } from "@/components/dashboard/Home/search-bar";
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay,Pagination,Navigation,A11y } from 'swiper/modules';

const SwiperComponent = () => {
  return (
    <div style={{ position: 'relative' }}>
      {/* Overlay Input Field */}
      <div className='w-full min-h-[400px] mb-20 flex justify-center items-center absolute z-10'>
        <SearchBarComponent />
        </div>
      {/* Swiper Component */}
      <Swiper
      className=''
        modules={[Navigation, Pagination,A11y,Autoplay]}
        slidesPerView={1}
        spaceBetween={50}
        navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        autoplay={{
          delay: 3000, // 3 seconds
          disableOnInteraction: false,
        }}
        loop={true}
        style={{ width: '100%', height: '400px' }}
      >
        <SwiperSlide>
          <img src="/swiper/swiper1.jpg" alt="Slide 1" style={{ width: '100%', height: '100%' }} className='object-cover opacity-50' />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/swiper/swiper2.jpg" alt="Slide 2" style={{ width: '100%', height: '100%' }} className=' object-cover opacity-50' />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/swiper/swiper3.jpg" alt="Slide 3" style={{ width: '100%', height: '100%' }} className='object-cover opacity-50' />
        </SwiperSlide>
      </Swiper>
    </div>

  );
};

export default SwiperComponent;

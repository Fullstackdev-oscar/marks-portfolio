import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { TestimonialCard } from ".";
import { Autoplay } from "swiper/modules";
const TestimonialSlider = () => {
  // const clientsLogos = [
  //   "/logos/amazon-logo-2400x2400-20223105.png",
  //   "/logos/apple-logo-2400x2400-20220512-1.png",
  //   "/logos/disney-logo-2400x2400-20223105.png",
  //   "/logos/facebook-logo-2400x2400-20220518.png",
  //   "/logos/google-logo-2400x2400-20223105.png",
  //   "/logos/hp-logo-2400x2400-20220519-1.png",
  //   "/logos/microsoft-logo-2400x2400-20223105.png",
  //   "/logos/visa-logo-2400x2400-20220513-1.png",
  //   "/logos/walmart-logo-2400x2400-20220513.png",
  // ];
  return (
    <>
      <section className="h-[100%] px-0 md:px-4 py-6">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 50,
            },
          }}
          modules={[Autoplay]}
          className="flex"
        >
          <SwiperSlide className="">
            <TestimonialCard />
          </SwiperSlide>
          <SwiperSlide className="">
            <TestimonialCard />
          </SwiperSlide>
          <SwiperSlide className="">
            <TestimonialCard />
          </SwiperSlide>
          <SwiperSlide className="">
            <TestimonialCard />
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
};

export default TestimonialSlider;

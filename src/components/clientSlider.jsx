import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import BrandCard from "./cards/brandCard";
import { Autoplay } from "swiper/modules";
const ClientSlider = () => {
  const clientsLogos = [
    "/logos/amazon-logo-2400x2400-20223105.png",
    "/logos/apple-logo-2400x2400-20220512-1.png",
    "/logos/disney-logo-2400x2400-20223105.png",
    "/logos/facebook-logo-2400x2400-20220518.png",
    "/logos/google-logo-2400x2400-20223105.png",
    "/logos/hp-logo-2400x2400-20220519-1.png",
    "/logos/microsoft-logo-2400x2400-20223105.png",
    "/logos/visa-logo-2400x2400-20220513-1.png",
    "/logos/walmart-logo-2400x2400-20220513.png",
  ];
  return (
    <>
      <section className="h-[100%] px-0 md:px-4 py-6">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          autoplay={{
            delay: 2000,
          }}
          modules={[Autoplay]}
          className="flex"
        >
          {clientsLogos.map((client, idx) => (
            <SwiperSlide className="" key={idx}>
              <BrandCard logo={client} />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
};

export default ClientSlider;

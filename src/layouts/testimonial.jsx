// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { TestimonialSlider } from "@/components";

const Testimonial = () => {
  return (
    <section className=" py-16" id="clients">
      <div className=" mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-[#700F6C] mb-4">
            Testimonials
          </h2>
          <p className="text-gray-600">Trusted by over 786+ clients.</p>
          <p className="text-gray-600">
            Our clients are our top priority, and we are committed to providing
            them with the highest level of service.
          </p>
        </div>
        <TestimonialSlider />
      </div>
    </section>
  );
};
export default Testimonial;

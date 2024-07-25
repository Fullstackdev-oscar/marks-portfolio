// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper from "swiper";
// import { Navigation, Pagination } from "swiper/modules";
// import Swiper and modules styles
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/swiper-bundle.css";
import { Typography, Card, Avatar } from "@material-tailwind/react";

// const Testimonial = () => {
//   const testimonials = [
//     {
//       name: "John Doe",
//       position: "CEO at Company",
//       image: "https://via.placeholder.com/150",
//       content:
//         "This is an amazing product! It has helped us improve our workflow significantly.",
//     },
//     {
//       name: "Jane Smith",
//       position: "CTO at Tech Corp",
//       image: "https://via.placeholder.com/150",
//       content: "Fantastic service and support. Highly recommended!",
//     },
//     {
//       name: "Samuel Green",
//       position: "Designer at Creative Studio",
//       image: "https://via.placeholder.com/150",
//       content:
//         "The best design tools I have ever used. It made my job so much easier.",
//     },
//     {
//       name: "Lucy Brown",
//       position: "Marketing Head at Creative Agency",
//       image: "https://via.placeholder.com/150",
//       content:
//         "A wonderful tool for our marketing team. Our campaigns have never been better.",
//     },
//   ];

//   const testimonials = [

const Testimonial = () => {
  return (
    <div className="flex flex-col items-center py-8 px-4 lg:px-0">
      <div className="w-full max-w-4xl text-center mb-8">
        <Typography variant="h3" color="blue-gray" className="mb-2">
          What Our Clients Say
        </Typography>
        <Typography variant="paragraph" color="gray">
          Hear from our satisfied clients who have greatly benefited from our
          products and services.
        </Typography>
      </div>
      <div className="w-full">
        {/* <Swiper
          modules={[Pagination, Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            1024: {
              slidesPerView: 2,
            },
          }}
          className="rounded-xl shadow-lg"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <Card className="p-8 h-full mx-4">
                <div className="flex flex-col items-center">
                  <Avatar
                    src={testimonial.image}
                    alt={testimonial.name}
                    size="lg"
                    className="mb-4"
                  />
                  <Typography variant="h6" color="blue-gray" className="mb-1">
                    {testimonial.name}
                  </Typography>
                  <Typography variant="small" color="gray" className="mb-4">
                    {testimonial.position}
                  </Typography>
                  <Typography variant="paragraph" color="blue-gray">
                    {testimonial.content}
                  </Typography>
                </div>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper> */}
      </div>
    </div>
  );
};

export default Testimonial;

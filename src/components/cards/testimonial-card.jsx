import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

const TestimonialCard = () => {
  return (
    <div>
      <section class="testimonial-section font-inter">
        <div class="testimonial-card">
          <div class="testimonial-content">
            <h3>Excellent Service and Professionalism</h3>
            <p className=" text-balance">
              "The team at this company has been amazing. They provided
              outstanding service and demonstrated a high level of
              professionalism throughout our collaboration. Highly recommended!"
            </p>
            <div className="flex items-center justify-center">
              <div>
                <div class="testimonial-author">Alex Johnson</div>
                <div class="testimonial-company">ABC Company</div>
                <div class="testimonial-role">Marketing Manager</div>
              </div>
              <img
                src="/public/avatar-1.webp"
                alt="Testimonial Image"
                width={80}
                height={80}
                className="rounded-full"
              />
            </div>
          </div>
        </div>
      </section>
    </div>

    // <div className=" p-4 font-inter border rounded-md">
    //   <div className="flex">
    //     <div className="text-[1rem]">
    //       <h3> Alex Johnson</h3>
    //       <h3>Alex Designer</h3>
    //       <h3>Graphic Designer</h3>
    //     </div>
    //     <img
    //       src="/avatar-1.webp"
    //       alt="picture_of_reviwer"
    //       width={40}
    //       height={40}
    //       className="rounded-full"
    //     />
    //   </div>
    // </div>
  );
};

export default TestimonialCard;

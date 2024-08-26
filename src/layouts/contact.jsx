import React, { useState } from "react";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
  FaBehance,
} from "react-icons/fa6";
import { PhoneIcon } from "@heroicons/react/24/outline";
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import { GrLocation } from "react-icons/gr";
import { FiPhone } from "react-icons/fi";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to a server)
    console.log("Form Data Submitted:", formData);
  };

  return (
    <section className="py-16 mt-10 " id="contact">
      <h1 className="text-3xl font-bold text-center mb-2">Contact</h1>
      <div className="flex w-full font-inter justify-center">
        {/* Contact Details */}
        <div className="bg-[#C602BE] text-white w-1/3 p-8 hidden md:block relative rounded-l-2xl">
          <h2 className="text-2xl font-bold mb-4">Get in touch</h2>
          <p>
            We'd love to hear from you. Our friendly team is always here to
            chat.
          </p>
          <div className="details mt-4">
            <div className="flex gap-2 items-baseline">
              <div className="detail-icon">
                <AiOutlineMail />
              </div>
              <div className="">
                <h3>Chat to us</h3>
                <p className="text-gray-200 mt-2">
                  Our friendly team is here to help
                </p>
                <p className="text-gray-200 mt-4">contact@email.com</p>
              </div>
            </div>

            <div className="flex gap-2 mt-8 ">
              <div className="detail-icon">
                <GrLocation />
              </div>
              <div className="">
                <h3>Office</h3>
                <p className="text-gray-200 mt-2">
                  Come say hello at our office HQ.
                </p>
                <p className="text-gray-200 mt-4">
                  100 Smith Street Collingwood VIC 3066 AU
                </p>
              </div>
            </div>

            <div className="flex gap-2 mt-8 ">
              <div className="detail-icon">
                <FiPhone />
              </div>
              <div className="">
                <h3>Phone</h3>
                <p className="text-gray-200 mt-2">Mon-Fri 8am-5pm</p>
                <p className="text-gray-200 mt-4">+234 80 1234 5678</p>
              </div>
            </div>
          </div>

          <div className="social-links flex gap-4 absolute bottom-8">
            <a href="">
              <FaFacebook />
            </a>
            <a href="">
              <FaTwitter />
            </a>
            <a href="">
              <FaLinkedin />
            </a>
            <a href="">
              <FaYoutube />
            </a>
            <a href="">
              <FaBehance />
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white text-black w-full md:w-2/3 p-8 md:px-44 rounded-2xl md:rounded-r-2xl md:rounded-l-none">
          <div className=" md:text-left text-center">
            <h2 className="text-2xl mb-4 font-bold text-gray-800 ">
              Level up your Brand
            </h2>
            <a href="mailto:contact@email.com" className="text-gray-600">
              You can reach us anytime via{" "}
              <span className=" text-[#c35abf]">contact@email.com</span>
            </a>
          </div>
          <form onSubmit={handleSubmit} className="mt-12">
            <div className="mb-6">
              <label
                className="block capitalize tracking-wide text-gray-800 text-xs font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="appearance-none block w-full bg-white text-gray-800 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="name"
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="mb-6">
              <label
                className="block capitalize tracking-wide text-gray-800 text-xs font-bold mb-2"
                htmlFor="phoneNumber"
              >
                Phone Number
              </label>
              <input
                className="appearance-none block w-full bg-white text-gray-800 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="phoneNumber"
                type="text"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
              />
            </div>

            <div className="mb-6">
              <label
                className="block capitalize tracking-wide text-gray-800 text-xs font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="appearance-none block w-full bg-white text-gray-800 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="email"
                type="email"
                name="email"
                placeholder="you@company.com"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="mb-6">
              <label
                className="block capitalize tracking-wide text-gray-800 text-xs font-bold mb-2"
                htmlFor="subject"
              >
                Subject
              </label>
              <input
                className="appearance-none block w-full bg-white text-gray-800 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="subject"
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
              />
            </div>
            <div className="mb-6">
              <label
                className="block capitalize tracking-wide text-gray-800 text-xs font-bold mb-2"
                htmlFor="message"
              >
                How can we help?
              </label>
              <textarea
                className="appearance-none block w-full bg-white
                 text-gray-800 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="message"
                name="message"
                placeholder="Tell us a little about the project..."
                value={formData.message}
                onChange={handleChange}
              />
            </div>
            <div className="flex justify-center">
              <button
                className="bg-[#C602BE] hover:bg-[#c35abf] text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline w-52"
                type="submit"
              >
                Get Started
              </button>
            </div>
          </form>
          {/* <form>
            <div className="mb-4">
              <label htmlFor="name" className="block mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="border border-gray-300 px-3 py-2 rounded w-full"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="border border-gray-300 px-3 py-2 rounded w-full"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="border border-gray-300 px-3 py-2 rounded w-full"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
            >
              Submit
            </button>
          </form> */}
        </div>
      </div>
    </section>
  );
};

export default Contact;

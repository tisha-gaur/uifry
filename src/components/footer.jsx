import React from "react";
// import { Link } from "react-router-dom";
import { BsFire } from "react-icons/bs";
import { MdEmail, MdCall } from "react-icons/md";
import logo from "../assets/logo.svg";

const Footer = () => {
  return (
    <div>
      <div className=" w-4/5 mx-auto flex justify-center gap-20 flex-wrap py-20">
        <div className="">
         
            <img src={logo} alt="" />
          
          <div className="flex items-center space-x-2 py-2 ">
            <MdEmail className="text-red-500 text-2xl" />
            <p className="text-md font-medium">Help2Fribix.Com</p>
          </div>
          <div className="flex items-center space-x-2 py-2">
            <MdCall className="text-red-500 text-2xl" />
            <p className="text-md font-medium">+1 234 456 678 89</p>
          </div>
        </div>
        <div className="">
          <h2 className="text-4xl pb-8">Links</h2>
          <div className="flex flex-col">
            <p className="text-md font-medium py-2">Home</p>
            <p className="text-md font-medium py-2">About</p>
            <p className="text-md font-medium py-2">Bookings</p>
            <p className="text-md font-medium py-2">Blog</p>
          </div>
        </div>
        <div className="">
          <h2 className="text-4xl pb-8">Legal</h2>
          <div className="flex flex-col">
            <p className="text-md font-medium py-2">Term Of Use</p>
            <p className="text-md font-medium py-2">Privicy Policy</p>
            <p className="text-md font-medium py-2">Cookie Policy</p>
          </div>
        </div>
        <div className="">
          <h2 className="text-4xl pb-8">Product</h2>
          <div className="flex flex-col">
            <p className="text-md font-medium py-2">Take Tour</p>
            <p className="text-md font-medium py-2">Live Chat</p>
            <p className="text-md font-medium py-2">Reviews</p>
          </div>
        </div>
        <div className="">
          <h2 className="text-4xl pb-8">Newsletter</h2>

          <p className="text-md font-medium py-2">Stay Up to Date</p>
          <form action="">
            <input
              className="py-4 px-8 focus:outline-none"
              type="email"
              placeholder="Your email"
            />
            <button
              className="bg-black py-4 px-8 text-white rounded"
              type="submit"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="w-4/5 mx-auto h-0.5 bg-gradient-to-r from-transparent  via-black  to-transparent m-10"></div>

      <p className="text-md font-light text-center pb-6">
        Copyright 2022 Uifry.Com All Rights Reserved
      </p>
      <p className="text-md font-light text-center pb-20">
        Tisha Gaur
      </p>
    </div>
  );
};

export default Footer;

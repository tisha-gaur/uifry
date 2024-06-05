import React from "react";
import { faq } from "../assets/data.json";
// import Star from "../common/star";
// import { motion } from "framer-motion";

const Faq = () => {
  return (
    <div className="w-4/5 mx-auto relative pb-20 ">
      <h4
        
        className="text-sm text-red-500 tracking-widest"
      >
        FAQ
      </h4>
      <h1
        className="text-4xl font-bold w-2/5 pb-8"
      >
        Frequently Asked <br /> Questions
      </h1>
      <div className="flex justify-between flex-wrap ">
        {faq && faq.map((item, ind) => {
            return [0, 3, 4].includes(ind) ? (
              <div
                key={ind}
                className="sm:w-1/2 bg-red-500 text-white px-4 py-6 rounded-lg mb-8"
              >
                <h2 className="text-2xl font-bold py-2"
                >
                  {item.title}
                </h2>
                <p className="text-white text-sm font-light sm:font-semibold w-4/5"
                >
                  "{item.description}"
                </p>
              </div>
            ) : (
              <div key={ind} className="sm:w-1/2 px-4 py-6 rounded-lg">
                <h2 className=" text-xl sm:text-2xl subHeading font-bold py-2"
                >
                  {item.title}
                </h2>
                <p className=" text-sm font-light sm:font-semibold w-4/5"
                >
                  "{item.description}"
                </p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Faq;

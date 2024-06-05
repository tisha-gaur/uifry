import React, { useState } from 'react';
import logo from '../assets/logo.svg'
import star from '../assets/Star 2.png'
const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };

  return (
    <nav className="bg-transparent w-full z-20 top-0 start-0 relative">
      <img src={star} className='absolute p-12' alt="" />
      <div className="max-w-screen-xl flex flex-wrap items-cente justify-between mx-auto p-4">
        <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={logo} className="h-8" alt="Flowbite Logo" />
          {/* <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span> */}
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button className=" text-white bg-black hover:bg-red-500  font-medium rounded text-md px-10 py-4 text-center">
            Download
          </button>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded={navbarOpen}
            onClick={toggleNavbar}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>
        <div className={`items-center justify-between ${navbarOpen ? 'block' : 'hidden'} w-full md:flex md:w-auto md:order-1`} id="navbar-sticky">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-semibold  border rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  " style={{ fontSize: '20px' }}>
            <li>
              <a href="#" className=" font-bold block py-2 px-3 rounded md:bg-transparent text-red-500 md:p-0 " aria-current="page">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-black rounded  md:hover:bg-transparent hover:text-red-500 md:p-0  ">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-black rounded  md:hover:bg-transparent hover:text-red-500 md:p-0 ">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-black rounded  md:hover:bg-transparent hover:text-red-500 md:p-0 ">
                Features
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

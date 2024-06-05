import React from 'react'
import testi from '../assets/testi.png'
import testip from '../assets/testipeople.png'
import colortesti from '../assets/colortesti.png'
const Testimonials = () => {
  return (
    <div className='relative pb-20'>
      <h4 className="text-sm tracking-widest sm:text-xl text-center">TESTIMONIAL</h4>
      <h1 className="text-4xl font-bold text-center pb-8">
        What Our Users <br /> Say About Us?
      </h1>
      <div className="flex justify-center ">
        <div className="bg=orange-500 w-2/5 relative">
            <img src={testi} className='' alt="" />
            <img src={colortesti} className='absolute -z-10 -top-1 bottom-0' alt="" />
        </div>
        <div className=" w-2/5">
        <h2 className="text-4xl font-semibold pb-8 pt-24">
        The Best Financial Accounting App Ever!
      </h2>
      <p className='p'>“Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Accumsan, Ultricies. In Ultrices Malesuada Elit Mauris Etiam Odio. Duis Tristique Lacus, Et Blandit Viverra Nisl Velit. Sed Mattis Rhoncus, Diam Suspendisse Sit Nunc, Gravida Eu. Lectus Eget Eget Ac Dolor Neque Lorem Sapien, Suspendisse Aliquam.”</p>

      <img src={testip} className='pt-10' alt="" />

      <h3 className='font-semibold pt-2'>Nick Johan</h3>
        </div>
      </div>

      
    </div>
  )
}

export default Testimonials

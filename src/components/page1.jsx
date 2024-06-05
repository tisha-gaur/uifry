import React from 'react'
import { CgPlayButtonO } from "react-icons/cg";
import { HiMiniArrowLongRight } from "react-icons/hi2";
import band from '../assets/band.svg'
import iphone1 from '../assets/iPhone-13-Pro-Front.png'
import iphone2 from '../assets/iPhone-13-Pro-Front 2.png'
import rings from '../assets/Ringfirst.png'
import color from '../assets/color.png'
import star from '../assets/Star 2.png'

const Page1 = () => {
    return (
        <div className='pt-0 flex flex-row flex-wrap justify-center pb-10'>
            <div className=" w-2/5 p-2 relative">
                <img src={color} className='absolute -z-10 -top-32' alt="" />
                <h1 className=' pt-7 text-3xl font-semibold sm:text-7xl'>Make The Best <br /> Financial Decision</h1>
                <p className='p p-3'>Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem Porttitor.</p>
                <div className="flex gap-1">
                    <button className=" flex justify-center items-center gap-1 text-white bg-black hover:bg-red-500  font-medium rounded text-md px-10 py-4 text-center ">
                        Get Started <span><HiMiniArrowLongRight /></span>
                    </button>

                    <button type='button' className=" px-8 py-4 flex items-center gap-3">
                         <CgPlayButtonO /> <span>Watch Video</span>
                    </button>
                </div>
                <img src={star} className='absolute left-72' alt="" />
                <img src={band} alt="" />
            </div>
            <div className="block relative w-2/5 h-full">
            <img src={star} className='absolute bottom-0 right-12' alt="" />
                <img src={iphone1} className=" z-100 w-4/5" alt="" />
                <img src={iphone2} className=" absolute -z-10 left-20 top-16  w-4/5"alt="ioni" />
                <img src={iphone1} className="absolute -z-20 left-40 top-32 w-4/5" alt="" />
                <img src={rings} className='absolute -z-30 top-0 left-10 w-5/6' alt="" />
                <img src={color} className='absolute -z-40 left-28 top-60' alt="" />
            </div>
        </div>
    )
}

export default Page1

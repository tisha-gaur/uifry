import React from 'react'
import bell from '../assets/bell.png'
import iphone from '../assets/iPhone-13-Pro-page2.png'
import glitter from '../assets/glitter.png'
import color from '../assets/color.png'
import color3 from '../assets/color3.png'
import star from '../assets/Star 2.png'

const Advantages = () => {
    return (
        <div className='flex justify-center flex-row items-center flex-wrap pb-10'>
            <div className="w-2/5">
                <h4 className='text-sm text-red-500 tracking-widest relative'>ADVANTAGES
                
                <img src={color} className='absolute -z-10 -top-32 ' alt="" />
                </h4>
                <h1 className='text-5xl font-semibold text-black pb-8 relative'>Why Choose Uifry? </h1>
                <h2 className="flex gap-3 text-xl font-semibold text-center items-center py-4"
                        >
                            <img src={bell} alt="" />

                            Clever Notification
                        </h2>
                <p className='p relative'>Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Accumsan, Ultricies. In Ultrices Malesuada Elit Mauris Etiam Odio. Duis Tristique Lacus, Et Blandit Viverra Nisl Velit. Sed Mattis Rhoncus, Diam Suspendisse Sit Nunc, Gravida Eu. Lectus Eget Eget Ac Dolor Neque Lorem Sapien, Suspendisse Aliquam.
                <img src={star} className='absolute left-0' alt="" />
                </p>

            </div>
            <div className="w-2/5 flex justify-center items-center relative">
            <img src={star} className='absolute right-0 -top-32' alt="" />
                <img src={iphone}  alt="" />
            </div>

            <div className="flex justify-center flex-row items-center flex-wrap">
                <div className="hidden sm:block w-2/5 relative">
                    <img src={iphone} alt="" />
                    <img src={color3} className='absolute -z-10 -top-12 left-0 ' alt="" />
                </div>
                <div className="w-4/5 sm:w-2/5">
                    <div>
                        <h2 className="flex gap-3 text-xl font-semibold text-center items-center py-4"
                        >
                            <img src={glitter} alt="" />

                            Fully Customizable
                        </h2>
                        <p className="p relative"
                        >
                            Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Accumsan,
                            Ultricies. In Ultrices Malesuada Elit Mauris Etiam Odio. Duis
                            Tristique Lacus, Et Blandit Viverra Nisl Velit. Sed Mattis
                            Rhoncus, Diam Suspendisse Sit Nunc, Gravida Eu. Lectus Eget Eget
                            Ac Dolor Neque Lorem Sapien, Suspendisse Aliquam.
                            <img src={star} className='absolute -top-32 right-6' alt="" />
                            <img src={star} className='absolute  left-6 -bottom-20' alt="" />
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Advantages

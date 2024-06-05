import React from 'react'
import iphone from '../assets/iPhone-13-Pro-Page2.svg'
import star from '../assets/star-05.png'
import cubestar from '../assets/cube-02.png'
import cube from '../assets/cube-04.png'
import {features} from '../assets/data.json'
import color from '../assets/color.png'
import color2 from '../assets/color2.png'
import star2 from '../assets/Star 2.png'
const Page2 = () => {
    return (
        <div>
            <div className='flex justify-center flex-row items-center flex-wrap '>
                <div className="w-2/5 relative">
                    <img src={iphone} className='width-1/3' alt="" />
                    <img src={color} className='absolute -z-10 -top-20 left-0' alt="" />
                </div>
                <div className="w-2/5 pb-12">
                    <h4 className='text-sm text-red-500 tracking-widest'>FEATURES</h4>
                    <h1 className='text-5xl font-semibold text-black pb-8'>Uifry Premium</h1>

                    {features && features.map((f, ind) => {
                        return (
                            <div key={ind}>
                                <h2 className="flex gap-3 text-xl font-semibold text-center items-center py-4">
                                    <span className="text-red-500">
                                        {f.icon === "icon1" && <img src={star} alt="" />}
                                        {f.icon === "icon2" && <img src={cubestar} alt="" />}
                                        {f.icon === "icon3" && <img src={cube} alt="" />}
                                    </span>{" "}
                                    {f.title}
                                </h2>
                                
                                <img src={color2} className='absolute -z-10 right-0' alt="" />
                                <p className="p relative">
                                    {f.description}
                                </p>
                                
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}

export default Page2

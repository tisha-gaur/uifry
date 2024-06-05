import React from 'react'
import frame from '../assets/Frame.png'
import color from '../assets/color.png'

const Download = () => {
  return (
    <div className='flex justify-center py-20 relative'>
        <img src={color} className='absolute -z-10 left-0 -top-32' alt="" />
      <img src={frame} alt="" />

    </div>
  )
}

export default Download

'use client'

import React from 'react'
import ButtonImgSwap from '../Reusable/ButtonImgSwap';

const TheButton = () => {
  const imgOn = "buttonImgs/button putched.png";
  const imgOff = "buttonImgs/button unputched.png";
  return (
    <div className='bg-white'>
        <ButtonImgSwap
        classNameButton="m-10"
        srcOff={imgOff}
        altOff="Off IMG"
        classNameOff="w-[200px] h-[200px]"
        srcOn={imgOn}
        altOn="On IMG"
        classNameOn="w-[200px] h-[200px]"
      />
    </div>
  )
}

export default TheButton
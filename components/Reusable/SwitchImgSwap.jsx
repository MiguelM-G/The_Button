import React, { useState } from 'react'

// SwitchImgSwap acts as a reusable way to swap between 2 images as the background for a button

// it takes a src, alt, and className for 2 images, On and Off

// the parent <button> tag is set up to resize with the respecive img being rendered at that time

const SwitchImgSwap = ({srcOn, altOn, classNameOn, srcOff, altOff, classNameOff}) => {

  const [button, setButton] = useState(false);
  const pressButton = () => {
    setButton(!button);
  }

  return (
    <button className='w-auto h-auto' onClick={pressButton}>
      {button ? <img src={srcOn} alt={altOn} className={classNameOn} /> :
      <img src={srcOff} alt={altOff} className={classNameOff} />}
    </button>
  )
}

export default SwitchImgSwap
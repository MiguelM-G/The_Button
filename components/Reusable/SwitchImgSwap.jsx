import React, { useState } from "react";

// SwitchImgSwap acts as a reusable way to swap between 2 images as the background for a button

// it takes a src, alt, and className for 2 images, On and Off

// the parent <button> tag is set up to resize with the respecive img being rendered at that time

const SwitchImgSwap = ({
  imgSwitchOff,
  altSwitchOff,
  imgSwitchOn,
  altSwitchOn,
  classNameButton,
  classNameImgSwitchOff,
  classNameImgSwitchOn,
  ClickFunction,
}) => {
  const [button, setButton] = useState(false);
  const pressButton = () => {
    setButton(!button);
  };

  return (
    <button className={classNameButton} onClick={() => { pressButton(); ClickFunction(); }}>
      {button ? (
        <img src={imgSwitchOn} alt={altSwitchOn} className={classNameImgSwitchOn} />
      ) : (
        <img src={imgSwitchOff} alt={altSwitchOff} className={classNameImgSwitchOff} />
      )}
    </button>
  );
};

export default SwitchImgSwap;

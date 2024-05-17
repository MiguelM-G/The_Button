import React, { useState, useEffect } from 'react';

const ButtonImgSwap = ({ srcOn, altOn, classNameOn, srcOff, altOff, classNameOff, classNameButton }) => {
  const [button, setButton] = useState(false);

  const handleMouseDown = () => {
    setButton(true);
  };

  const handleMouseUp = () => {
    setButton(false);
  };

  useEffect(() => {
    let timeoutId;
    
    if (button === true) {
      timeoutId = setTimeout(() => {
        setButton(false);
      }, 2000); // Set timeout for 2 seconds
    } else {
      clearTimeout(timeoutId); // Clear timeout if button is pressed again
    }

    return () => clearTimeout(timeoutId); // Cleanup function to clear timeout on unmount or state change
  }, [button]);

  return (
    <button className={classNameButton} onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}>
      {button ? (
        <img src={srcOn} alt={altOn} className={classNameOn} />
      ) : (
        <img src={srcOff} alt={altOff} className={classNameOff} />
      )}
    </button>
  );
};

export default ButtonImgSwap;

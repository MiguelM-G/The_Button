import React, { useState, useEffect } from "react";

const ButtonImgSwap = ({
  imgNoPress,
  altNoPress,
  imgPress,
  altPress,
  classNameButton,
  classNameImgNoPress,
  classNameImgPress,
  ClickFunction
}) => {
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
      }, 1000); // Set timeout for 2 seconds
    } else {
      clearTimeout(timeoutId); // Clear timeout if button is pressed again
    }

    return () => clearTimeout(timeoutId); // Cleanup function to clear timeout on unmount or state change
  }, [button]);

  return (
    <button
      className={classNameButton}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onClick={ClickFunction}
    >
      {button ? (
        <img src={imgPress} alt={altNoPress} className={classNameImgPress} />
      ) : (
        <img src={imgNoPress} alt={altPress} className={classNameImgNoPress} />
      )}
    </button>
  );
};

export default ButtonImgSwap;

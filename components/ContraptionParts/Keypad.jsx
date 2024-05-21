import React, { useState, useEffect } from "react";
import ButtonImgSwap from "../Reusable/ButtonImgSwap";
import { useContraptionContextApp } from "../../contexts/context";

const Keypad = () => {
  const keyImgPressed = "ButtonKeypadPressed.png";
  const keyImgUnpressed = "ButtonKeypadunpressed.png";

  const KeysData = [
    {
      id: 1,
      imgNoPress: keyImgUnpressed,
      altNoPress: "",
      imgPress: keyImgPressed,
      altPress: "",
    },
    {
      id: 2,
      imgNoPress: keyImgUnpressed,
      altNoPress: "",
      imgPress: keyImgPressed,
      altPress: "",
    },
    {
      id: 3,
      imgNoPress: keyImgUnpressed,
      altNoPress: "",
      imgPress: keyImgPressed,
      altPress: "",
    },
    {
      id: 4,
      imgNoPress: keyImgUnpressed,
      altNoPress: "",
      imgPress: keyImgPressed,
      altPress: "",
    },
    {
      id: 5,
      imgNoPress: keyImgUnpressed,
      altNoPress: "",
      imgPress: keyImgPressed,
      altPress: "",
    },
    {
      id: 6,
      imgNoPress: keyImgUnpressed,
      altNoPress: "",
      imgPress: keyImgPressed,
      altPress: "",
    },
    {
      id: 7,
      imgNoPress: keyImgUnpressed,
      altNoPress: "",
      imgPress: keyImgPressed,
      altPress: "",
    },
    {
      id: 8,
      imgNoPress: keyImgUnpressed,
      altNoPress: "",
      imgPress: keyImgPressed,
      altPress: "",
    },
    {
      id: 9,
      imgNoPress: keyImgUnpressed,
      altNoPress: "",
      imgPress: keyImgPressed,
      altPress: "",
    },
    {
      id: 10,
      imgNoPress: keyImgUnpressed,
      altNoPress: "",
      imgPress: keyImgPressed,
      altPress: "",
    },
    {
      id: 0,
      imgNoPress: keyImgUnpressed,
      altNoPress: "",
      imgPress: keyImgPressed,
      altPress: "",
    },
    {
      id: 11,
      imgNoPress: keyImgUnpressed,
      altNoPress: "",
      imgPress: keyImgPressed,
      altPress: "",
    },
  ];

  // destructure context data
  const { winKeypad, handleKeypadWin } = useContraptionContextApp();

  // States for key value and win status
  const [keyValue, setKeyValue] = useState("");

  // Handle key press function
  const handleKeyPress = (number) => {
    if (number === 11) {
      setKeyValue(""); // Clear the key value if the button with id 11 is pressed
    } else {
      setKeyValue((keyValue) => keyValue + number);
    }
  };

  // useEffect for determining win condition
  useEffect(() => {
    if (keyValue === "69") {
      setKeyValue("NICE");
      handleKeypadWin();
    }
  }, [keyValue]);

  // useEffect for Preloading images
  useEffect(() => {
    const preloadImages = (srcArray) => {
      srcArray.forEach((src) => {
        const img = new Image();
        img.src = src;
      });
    };

    preloadImages([keyImgPressed, keyImgUnpressed]);
  }, []);

  // Style Variables for Button and key imgs
  const classNameButton = "";
  const classNameKey = " ml-1 mt-1";
  const classNameKeyPressed = " ";
  return (
    <section className="flex justify-center items-end">
      <div
        className="flex flex-col bg-cover bg-no-repeat justify-evenly items-center w-[250px] h-[320px]"
        style={{ backgroundImage: `url('/KeypadBackground.png')` }}
      >
        <div
          className="flex justify-center items-center bg-origin-content bg-no-repeat bg-auto w-2/3 h-[20px] mr-2"
          style={{ backgroundImage: `url('/KeypadDisplay.png')` }}
        >
          {keyValue}
        </div>
        <div className="grid grid-cols-3 grid-rows-4 gap-2 mr-2">
          {KeysData.map((item) => (
            <ButtonImgSwap
              key={item.id}
              imgNoPress={item.imgNoPress}
              altNoPress={item.altNoPress}
              imgPress={item.imgPress}
              altPress={item.altPress}
              classNameButton={classNameButton}
              classNameImgPress={classNameKeyPressed}
              classNameImgNoPress={classNameKey}
              ClickFunction={() => handleKeyPress(item.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Keypad;

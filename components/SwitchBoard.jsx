'useClient'

import React from "react";
import TheButton from "./ContraptionParts/TheButton";
import Keypad from "./ContraptionParts/Keypad";

const SwitchBoard = () => {
  const style = "bg-blue-100 w-[200px] h-[200px]";
  const imgOn = "buttonImgs/buttonImgOn.png";
  const imgOff = "buttonImgs/buttonImgOff.png";
  return (
    <div className="w-4/5 gap-x-[200px] h-[700px] bg-gray-600 justify-end items-start flex">
      <Keypad />
      <TheButton />      
    </div>
  );
};

export default SwitchBoard;

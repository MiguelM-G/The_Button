"useClient";

import React from "react";
import TheButton from "./ContraptionParts/TheButton";
import Keypad from "./ContraptionParts/Keypad";
import RedSwitches from "./ContraptionParts/RedSwitches.jsx";
import SilverSwitches from "./ContraptionParts/SilverSwitches.jsx";


const SwitchBoard = () => {
  const style = "bg-blue-100 w-[200px] h-[200px]";
  const imgOn = "buttonImgs/buttonImgOn.png";
  const imgOff = "buttonImgs/buttonImgOff.png";
  return (
    <div className="grid grid-cols-3 grid-rows-2 w-4/5 h-[700px] bg-gray-600 ">
      <div></div>
      <div>
        <SilverSwitches />
        <Keypad />
      </div>
      <TheButton />
      <div></div>
      <div className="col-span-2">
      <div className="h-1/2"></div>
        <RedSwitches />
      </div>
    </div>
  );
};

export default SwitchBoard;

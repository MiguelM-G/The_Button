import React from "react";
import SwitchImgSwap from "./SwitchImgSwap";

const SwitchesMapped = ({
  switchOff,
  switchOn,
  classNameButton,
  classNameImgSwitchOff,
  classNameImgSwitchOn,
  altSwitchOff,
  altSwitchOn,
  switches,
  toggleFunction
}) => {
  return (
    <div>
      {switches.map((isOn, index) => (
        <SwitchImgSwap
          key={index}
          imgSwitchOff={switchOff}
          altSwitchOff={altSwitchOff}
          imgSwitchOn={switchOn}
          altSwitchOn={altSwitchOn}
          classNameButton={classNameButton}
          classNameImgSwitchOff={classNameImgSwitchOff}
          classNameImgSwitchOn={classNameImgSwitchOn}
          ClickFunction={() => toggleFunction(index)}
        />
      ))}
    </div>
  );
};

export default SwitchesMapped;

import React, { useEffect } from "react";
import SwitchImgSwap from "../Reusable/SwitchImgSwap";
import { useContraptionContextApp } from "../../contexts/context";
import useSwitches from "../Hooks/useSwitches";

const RedSwitches = () => {
  const { handleRedSwitchesWin, activateRedSwitches, setWinRedSwitches } =
    useContraptionContextApp();

  const switchOn = "RedSwitchPressed.png";
  const switchOff = "RedSwitchUnpressed.png";
  const classNameImgSwitchOff = "mt-7";
  const classNameButton = "";

  // Using the custom hook to manage the state of 6 switches
  const { switches, allSwitchesOn, toggleSwitch } = useSwitches(6);

  // Effect to update the win state based on whether all switches are on
  useEffect(() => {
    if (allSwitchesOn) {
      setWinRedSwitches(true);
      handleRedSwitchesWin(allSwitchesOn);
    } else {
      setWinRedSwitches(false);
    }
  }, [allSwitchesOn, setWinRedSwitches, handleRedSwitchesWin]);

  // Effect to preload images when the component mounts
  useEffect(() => {
    const preloadImages = (srcArray) => {
      srcArray.forEach((src) => {
        const img = new Image();
        img.src = src;
      });
    };

    preloadImages([switchOn, switchOff]);
  }, []);

  return (
    <div className="mx-auto w-full grid grid-flow-col justify-between items-end max-w-[700px] h-1/2 relative">
      {switches.map((isOn, index) => (
        <SwitchImgSwap
          key={index}
          imgSwitchOff={switchOff}
          altSwitchOff=""
          imgSwitchOn={switchOn}
          altSwitchOn=""
          classNameButton={classNameButton}
          classNameImgSwitchOff={classNameImgSwitchOff}
          classNameImgSwitchOn=""
          ClickFunction={() => toggleSwitch(index)}
        />
      ))}
      {!activateRedSwitches && <div className="w-full h-full absolute"></div>}
    </div>
  );
};

export default RedSwitches;

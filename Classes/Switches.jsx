import React from "react";
import { useState, Component, useEffect } from "react";
import SwitchImgSwap from "../components/Reusable/SwitchImgSwap";
import useSwitches from "../components/Hooks/useSwitches";

export default class Switches extends Component
 {
  constructor(imgOff, imgOn, numberOfSwitches) {
    this.imgOn = imgOn;
    this.imgOff = imgOff;
    this.numberOfSwitches = numberOfSwitches;
  }
  initializeSwitches(){
    const { allSwitchesOn, switches, toggleSwitch } = useSwitches(
        this.numSwitches
      );
      return {allSwitchesOn, switches, toggleSwitch, }
  }
  checkAllSwitches(){
    if (allSwitchesOn === true){
        return true
    }
    else {
        return false
    }
  }

  render() {
    return (
      <div className="mx-auto w-full grid grid-flow-col justify-between items-end max-w-[700px] h-1/2 relative">
        {this.switches.map((isOn, index) => (
          <SwitchImgSwap
            key={index}
            imgSwitchOff={switchOff}
            altSwitchOff=""
            imgSwitchOn={switchOn}
            altSwitchOn=""
            classNameButton={classNameButton}
            classNameImgSwitchOff={classNameImgSwitchOff}
            classNameImgSwitchOn=""
            ClickFunction={() => this.toggleSwitch(index)}
          />
        ))}
        {/* {!activateRedSwitches && <div className="w-full h-full absolute"></div>} */}
      </div>
    );
  }
}

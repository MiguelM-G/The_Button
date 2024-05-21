import React, { useEffect, useState } from 'react';
import SwitchImgSwap from '../Reusable/SwitchImgSwap';
import { useContraptionContextApp } from '../../contexts/context';
import useSwitchesWithLights from '../Hooks/useSwitchesWithLights';
import { generateRandomDataArray } from '../Utils/generateRandomDataArray';

const SilverSwitches = () => {
  const { handleSilverSwitchesWin, setWinSilverSwitches } = useContraptionContextApp();
  const switchDown = 'SilverSwitchDown.png';
  const switchUp = 'SilverSwitchUp.png';
  const lightOffImage = 'LightSwitchedOff.svg';
  const lightOnImage = 'LightSwitchedOn.svg';
  const classNameSwitchDown = '';
  const classNameSwitchUp = 'mb-8';
  const classNameButton = '';

  // Using the custom hook to manage the state of 10 switches and their corresponding lights
  const { switches, lights, setSwitches } = useSwitchesWithLights(10, switchDown, switchUp, lightOffImage, lightOnImage);

  // State to hold the indicator light data
  const [indicatorLightData, setIndicatorLightData] = useState([]);

  // Generate Random data array with 10 values when component mounts
  useEffect(() => {
    const data = generateRandomDataArray(10);
    setIndicatorLightData(data);
  }, []);

  // Check the win condition using useEffect
  useEffect(() => {
    // Check if indicatorLightData and switches have the same length
    if (indicatorLightData.length === switches.length) {
      // Check if every element in indicatorLightData is equal to the corresponding element in switches
      const arraysMatch = indicatorLightData.every((value, index) => value === switches[index]);
      if (arraysMatch) {
        setWinSilverSwitches(true);
        handleSilverSwitchesWin();
      }
    }
  }, [indicatorLightData, switches, setWinSilverSwitches, handleSilverSwitchesWin]);
  
  return (
    <>
    <div className="mx-auto w-full grid grid-flow-col max-w-[700px] relative">
      {indicatorLightData.map((isOn, index) => (
        <img
          key={index}
          src={isOn ? lightOnImage : lightOffImage}
          alt='light'
          className=''
        />
      ))}
    </div>
      <div className="mx-auto w-full h-1/2 grid grid-flow-col max-w-[700px] relative">
      {switches.map((isOn, index) => (
        <div key={index} className="flex flex-col items-center">
          <img src={lights[index]} alt="light" className="light" />
          <SwitchImgSwap
            imgSwitchOff={switchDown}
            altSwitchOff=""
            imgSwitchOn={switchUp}
            altSwitchOn=""
            classNameButton={classNameButton}
            classNameImgSwitchOff={classNameSwitchDown}
            classNameImgSwitchOn={classNameSwitchUp}
            ClickFunction={() => {
              // Update switch state when clicked
              const newSwitches = [...switches];
              newSwitches[index] = !newSwitches[index];
              setSwitches(newSwitches);
            }}
            switches={switches} // Pass switches to the SwitchImgSwap component
          />
        </div>
      ))}
    </div></>
  );
};

export default SilverSwitches;

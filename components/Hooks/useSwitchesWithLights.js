// useSwitchesWithLights.js
import { useState, useEffect } from 'react';

const useSwitchesWithLights = (numSwitches, switchOffImage, switchOnImage, lightOffImage, lightOnImage) => {
  // Initialize switches to false
  const initialSwitches = Array(numSwitches).fill(false);
  
  // Initialize state for switches and lights
  const [switches, setSwitches] = useState(initialSwitches);
  const [lights, setLights] = useState(initialSwitches.map(() => lightOffImage));

  // Update lights when switches change
  useEffect(() => {
    setLights(switches.map(switchState => switchState ? lightOnImage : lightOffImage));
  }, [switches, lightOnImage, lightOffImage]);

  return { switches, lights, setSwitches };
};

export default useSwitchesWithLights;

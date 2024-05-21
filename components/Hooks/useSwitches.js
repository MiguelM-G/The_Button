import { useState, useEffect } from 'react';

/**
 * Custom hook to manage the state of multiple switches.
 *
 * @param {number} numSwitches - The number of switches to manage.
 * @returns {Object} An object containing:
 *   - `switches` (boolean[]): The current state of all switches.
 *   - `allSwitchesOn` (boolean): A boolean indicating if all switches are on.
 *   - `toggleSwitch` (function): A function to toggle the state of a switch at a given index.
 */
const useSwitches = (numSwitches) => {
  // State to store the state of each switch, initialized to an array of 'false' values.
  const [switches, setSwitches] = useState(Array(numSwitches).fill(false));

  // State to store whether all switches are turned on.
  const [allSwitchesOn, setAllSwitchesOn] = useState(false);

  /**
   * Function to toggle the state of a switch at a given index.
   *
   * @param {number} index - The index of the switch to toggle.
   */
  const toggleSwitch = (index) => {
    setSwitches((prev) => {
      // Create a new array with the previous state.
      const newSwitches = [...prev];
      // Toggle the value at the specified index.
      newSwitches[index] = !newSwitches[index];
      return newSwitches;
    });
  };

  // Effect to check if all switches are on whenever the 'switches' state changes.
  useEffect(() => {
    // Check if every switch in the 'switches' array is 'true'.
    setAllSwitchesOn(switches.every((s) => s));
  }, [switches]); // Dependency array ensures this effect runs when 'switches' changes.

  // Return the state and the toggle function.
  return {
    switches,
    allSwitchesOn,
    toggleSwitch,
  };
};

export default useSwitches;

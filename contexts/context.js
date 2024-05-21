import React, { createContext, useContext, useState } from "react";
import useWinLogic from "../components/Hooks/useWinLogic";

/**Creating the context */
const ContraptionContextApp = createContext();

/**Creating the provider */
export const ContraptionProviderApp = ({ children }) => {
  // Silver switch logic
  const [winSilverSwitches, handleSilverSwitchesWin, setWinSilverSwitches] = useWinLogic(() => {
    console.log("YOU WON THE Silver Switches MINIGAME");
    // Additional logic for winning the Silver Switches mini-game
  });
  // Keypad win logic
  const [winKeypad, handleKeypadWin, setWinKeypad] = useWinLogic(() => {
    console.log("YOU WON the keypad minigame");
    setActivationRedSwitches(true);
  });

  // Red switch logic
  const [activateRedSwitches, setActivationRedSwitches] = useState(false);
  const [winRedSwitches, handleRedSwitchesWin, setWinRedSwitches] = useWinLogic(() => {
    console.log("YOU WON THE Red Switches MINIGAME");
    setWin(true);
  });

  const [win, setWin] = useState(false);

  return (
    <ContraptionContextApp.Provider
      value={{
        winKeypad,
        handleKeypadWin,
        setWinKeypad, // Function to set win state for keypad
        winRedSwitches,
        handleRedSwitchesWin,
        setWinRedSwitches, // Function to set win state for red switches
        activateRedSwitches,
        winSilverSwitches,
        handleSilverSwitchesWin,
        setWinSilverSwitches, // Function to set win state for silver switches
        win,
      }}
    >
      {children}
    </ContraptionContextApp.Provider>
  );
};

/**context hook, make it easier to get resources of the context */
export const useContraptionContextApp = () => {
  return useContext(ContraptionContextApp);
};

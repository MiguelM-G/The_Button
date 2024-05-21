import { useState, useEffect } from "react";

/**
 * Custom hook to manage win logic for a mini-game.
 *
 * @param {function} onWin - Callback function to execute when the mini-game is won.
 * @returns {Array} An array containing:
 *   - win (boolean): The win state of the mini-game.
 *   - handleWin (function): Function to call when the mini-game is won.
 *   - setWin (function): Function to manually set the win state.
 */
const useWinLogic = (onWin) => {
  const [win, setWin] = useState(false);

  const handleWin = () => {
    setWin(true);
  };

  useEffect(() => {
    if (win) {
      onWin();
    }
  }, [win, onWin]);

  // Function to manually set the win state
  const setWinState = (value) => {
    setWin(value);
  };

  return [win, handleWin, setWinState];
};

export default useWinLogic;

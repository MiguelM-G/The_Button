// utils/generateRandomDataArray.js
export const generateRandomDataArray = (count) => {
    return Array.from({ length: count }, () => Math.random() < 0.5 ? false : true);
  };
  
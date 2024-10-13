const calculateProfileLevel = (coins) => {
    if (coins >= 600) {
    const extraCoins = coins - 500;
    const additionalLevels = Math.floor(extraCoins / 50);
    return Math.min(6 + additionalLevels, 26);
  } else if (coins >= 400) {
    return 5;
  } else if (coins >= 300) {
    return 4;
  } else if (coins >= 200) {
    return 3;
  } else if (coins >= 100) {
    return 2;
  } else {
    return 1;
  }
};

export default calculateProfileLevel;

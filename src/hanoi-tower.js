const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed ) {
  let tempObj = {};
  tempObj.turns = Math.pow(2, disksNumber) - 1;
  tempObj.seconds = tempObj.turns * 3600 / turnsSpeed;
  tempObj.seconds = Math.floor(tempObj.seconds);
  return tempObj;
};

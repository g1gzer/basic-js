const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity != String || typeof sampleActivity == null || typeof sampleActivity == undefined) {
    return false;
  }
  return Math.ceil((parseInt(sampleActivity) * HALF_LIFE_PERIOD) / MODERN_ACTIVITY);
};

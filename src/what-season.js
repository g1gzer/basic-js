const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (!date) {
    return "Unable to determine the time of year!";
  }

  let monthGet = Date.prototype.getMonth.call(date);

  if (1 < monthGet && monthGet <= 4) {
    return "spring";
  }
  else if (7 < monthGet && monthGet <= 10) {
    return "autumn";
  }
  else if (4 < monthGet && monthGet <= 7) {
    return "summer";
  }
  else if (monthGet === 11 ||
      monthGet === 0 ||
      monthGet === 1) {
    return "winter";
  }
};

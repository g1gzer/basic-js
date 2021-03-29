const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let temp = matrix.join().split(',');
  let tempFill = temp.filter(el => {
    return el == '^^'
  });
  if (tempFill.length == 0) {
    return 0;
  }
  else {
    return tempFill.length;
  }
};

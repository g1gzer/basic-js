const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
    if (Array.isArray(members)) {
     let sortedArr = members.filter(element => typeof element == 'string')
          .map(element => element.trim()[0].toUpperCase())
          .sort()
      return sortedArr.join('')
    }
    else {
      return false;
    }


};

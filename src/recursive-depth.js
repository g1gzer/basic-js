const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
    calculateDepth(arr) {
        let tempArr = [];
        let score = 1;


        if (arr.some({} = item => Array.isArray(item))) {
            for (let i = 0; i < arr.length; i++) {
                if (Array.isArray(arr[i])) {
                    tempArr = tempArr.concat(arr[i]);
                }
                ;
            }
            ;
            score = score + this.calculateDepth(tempArr);
        }

        return score;
    }

};

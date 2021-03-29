const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
    if (Array.isArray(arr)) {
        let tempArr = [];
        for (let i = 0; i < arr.length; i++) {
            switch (arr[i]) {
                case '--discard-next':
                    i++;
                    break;
                case '--discard-prev':
                    (tempArr.length && arr[i - 2] != '--discard-next') ? tempArr.pop() : tempArr;
                    break;
                case '--double-next':
                    (i < arr.length - 1) ? tempArr.push(arr[i + 1]) : tempArr;
                    break;
                case '--double-prev':
                    (i > 0 && arr[i - 2] != '--discard-next') ? tempArr.push(arr[i - 1]) : tempArr;
                    break;
                default:
                    tempArr.push(arr[i]);
                    break;
            }

        }
        return tempArr;
    } else {
        throw new Error();
    }

};

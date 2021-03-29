const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, {
    repeatTimes = 1,
    separator = '+',
    addition,
    additionRepeatTimes = 1,
    additionSeparator = '|'
}) {
    let tempArr = [];
    let tempStr
    let storeStr = ''
    for (let i = 0; i < repeatTimes; i++) {
        tempStr = String(str)
        if (addition || typeof addition == 'boolean' || addition === null) {
            for (let j = 0; j < additionRepeatTimes; j++) {
                if (j < additionRepeatTimes - 1 && additionRepeatTimes > 1) {
                    storeStr = storeStr + String(addition) + String(additionSeparator)
                } else {
                    storeStr = storeStr + String(addition)
                }
            }
        }
        if (i + 1 !== repeatTimes) {
            tempStr = tempStr + storeStr + separator
            tempArr.push(tempStr)
            tempStr = String(str)
            storeStr = ''
        } else {
            tempStr = tempStr + storeStr
            tempArr.push(tempStr)
            tempStr = String(str)
            storeStr = ''
        }
    }
    return tempArr.join('')
};
  

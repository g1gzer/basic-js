const CustomError = require("../extensions/custom-error");

const chainMaker = {
  currentChain: "",
  getLength() {
    let tempArr = this.currentChain.split('');
    return tempArr.filter(el => el === ')' ).length;
  },
  addLink(value) {
    if (this.currentChain != "") {
      this.currentChain += `~~`;
    }
    if (value === undefined) {
      this.currentChain += `(  )`;
      return this;
    }
    this.currentChain += `( ${String(value)} )`;
    return this;
  },
  removeLink(position) {
    let tempArr = this.currentChain.split('~~');
    if (position >= tempArr.length ||
        position < 0  ||
        isNaN(position) ||
        typeof position != "number" ||
        !Number.isInteger(position)) {
      this.currentChain = '';
      throw new Error();
    }
    else {
      tempArr.splice(position - 1, 1);
      this.currentChain = tempArr.join('~~');
      return this;
    }
  },
  reverseChain() {
    let tempArr = this.currentChain.split("~~");
    this.currentChain = tempArr.reverse().join("~~");
    return this;
  },
  finishChain() {
    let final = this.currentChain;
    this.currentChain = "";
    return final;
  },
};

module.exports = chainMaker;

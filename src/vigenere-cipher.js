const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
    constructor(expression) {
        this.expression = expression;
    }

    encrypt(message, key) {
        if (message == null || key == null) {
            throw Error();
        };
        const firstCode = 'A'.charCodeAt();
        const latinAlphabet = /[A-Za-z]/;
        const alphabetLength = 26;
        let count = 0;

        message = message.toUpperCase().split('');
        key = key.toUpperCase();

        message.forEach((el, index) => {
            if (latinAlphabet.test(el)) {
                message[index] = String.fromCharCode(
                    ((el.charCodeAt() - firstCode
                        + (key[count % key.length].charCodeAt() - firstCode))
                        % alphabetLength)
                    + firstCode);
                count += 1;
            }
        });
        return this.expression === false ? message.reverse().join('') : message.join('');
    }

    decrypt(message, key) {
        if (message == null || key == null) {
            throw Error();
        }
        const latinAlphabet = /[A-Za-z]/;
        const alphabetLength = 26;
        const firstCode = 'A'.charCodeAt();
        let count = 0;
        message = message.toUpperCase().split('');
        key = key.toUpperCase();

        message.forEach((el, index) => {
            if (latinAlphabet.test(el)) {
                message[index] = String.fromCharCode(
                    ((el.charCodeAt() - firstCode
                        + (alphabetLength - (key[count % key.length].charCodeAt() - firstCode)))
                        % alphabetLength)
                    + firstCode);
                count += 1;
            }
        });
        return this.expression === false ? message.reverse().join('') : message.join('');
    }
}

module.exports = VigenereCipheringMachine;

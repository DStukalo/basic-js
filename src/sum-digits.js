const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
    let str;
    if (typeof n != "string") {
        str = String(n);
    } else {
        str = n;
    }
    let arr2 = [];
    let arr = str.split("").forEach((element) => {
        arr2.push(Number(element));
    });
    let res = arr2.reduce((acc, val) => acc + val, 0);
    if (res >= 10) {
        let str = String(res);
        let arr = str.split("");
        let arr2 = [];
        arr.forEach((element) => {
            arr2.push(Number(element));
        });
        res = arr2.reduce((acc, val) => acc + val, 0);
    }
    return res;
}

module.exports = {
    getSumOfDigits,
};

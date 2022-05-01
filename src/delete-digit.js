const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
    let arr = [];
    let res = [];
    let arrStr = String(n).split("");
    for (let i = 0; i < arrStr.length; i++) {
        let cur;
        if (i === 0) {
            cur = arrStr.slice(1);
        } else if (i < arrStr.length - 1) {
            cur = arrStr.slice(0, i).concat(arrStr.slice(i + 1, arrStr.length));
        } else {
            cur = arrStr.slice(0, arrStr.length - 1);
        }
        arr.push(cur);
    }
    arr.forEach((el) => {
        let localres = "";
        el.forEach((element) => {
            localres += element;
        });
        localres = Number(localres);
        res.push(localres);
    });
    res = Math.max(...res);
    return res;
}

module.exports = {
    deleteDigit,
};

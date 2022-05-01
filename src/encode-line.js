const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
    let res = "";
    let strArr = [...str];
    let arr = [];
    let lastEL = "";
    let count = 1;
    strArr.forEach((el, i) => {
        let key = el;
        if (i == 0) {
            arr.push({ el: count });
            lastEL = key;
        } else {
            if (lastEL === el) {
                arr.pop();
                count++;
                arr.push({ key: count });
            } else {
                if (count >= 2) {
                    count = 1;
                    arr.push({ key: count });
                }
            }
        }
    });
    // if (el[1] == "1") {
    //     res += el[0];
    // } else {
    // res += el[1];
    // res += el[0];
    // }

    return arr;
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
}

module.exports = {
    encodeLine,
};

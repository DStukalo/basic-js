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
            arr.push([key, count]);
            lastEL = key;
        } else {
            if (lastEL === el) {
                arr.pop();
                count++;
                arr.push([key, count]);
                lastEL = key;
            } else {
                if (count >= 2) {
                    count = 1;
                    arr.push([key, count]);
                    lastEL = key;
                } else {
                    arr.push([key, count]);
                    lastEL = key;
                }
            }
        }
    });

    arr.forEach((el) => {
        if (el[1] >= 2) {
            res += el[1];
            res += el[0];
        } else {
            res += el[0];
        }
    });

    return res;

    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
}

module.exports = {
    encodeLine,
};

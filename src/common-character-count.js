const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
    let count1 = 0;
    let count2 = 0;
    const symbols1 = new Map();
    for (const key of s1) {
        const currCount = symbols1.get(key) || 0;
        symbols1.set(key, currCount + 1);
    }
    const orderedSymbols1 = [...symbols1.values()];
    orderedSymbols1.forEach((el) => {
        if (el >= 2) {
            count1 += Math.floor(el / 2);
        }
    });

    const symbols2 = new Map();
    for (const key of s2) {
        const currCount = symbols2.get(key) || 0;
        symbols2.set(key, currCount + 1);
    }
    const orderedSymbols2 = [...symbols2.values()];
    orderedSymbols2.forEach((el) => {
        if (el >= 2) {
            count2 += Math.floor(el / 2);
        }
    });
    res = count1 + count2;
    return res;
    // throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
}

module.exports = {
    getCommonCharacterCount,
};

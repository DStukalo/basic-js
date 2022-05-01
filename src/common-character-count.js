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
    if (
        s1.length === 0 ||
        s2.length === 0 ||
        typeof s1 !== "string" ||
        typeof s2 !== "string"
    ) {
        return 0;
    }
    const firstStringAtArr = [...s1];
    const twoStringAtArr = [...s2];
    let res = 0;
    let usedS1Indexs = [];
    let usedS2Indexs = [];

    for (let i = 0; i < firstStringAtArr.length; i++) {
        for (let j = 0; j < twoStringAtArr.length; j++) {
            if (
                firstStringAtArr[i] === twoStringAtArr[j] &&
                !usedS2Indexs.includes(j) &&
                !usedS1Indexs.includes(i)
            ) {
                res++;
                usedS2Indexs.push(j);
                usedS1Indexs.push(i);
            }
        }
    }

    return res;

    // throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
}

module.exports = {
    getCommonCharacterCount,
};

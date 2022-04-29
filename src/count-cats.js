const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(array) {
    let res = 0;
    if (!Array.isArray(array)) {
        return res;
    }
    array.forEach((element) => {
        if (Array.isArray(element)) {
            element.forEach((el) => {
                if (el === "^^") {
                    res++;
                }
            });
        }
    });
    return res;
}

module.exports = {
    countCats,
};

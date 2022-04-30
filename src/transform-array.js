const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */

function transform(arr) {
    let res = [];
    let prev = null;
    let directive = null;
    if (!Array.isArray(arr)) {
        throw new Error("'arr' parameter must be an instance of the Array!");
    }
    arr.forEach((el, i) => {
        if (directive === null) {
            if (el === "--discard-prev") {
                if (arr[i - 2] !== "--discard-next") {
                    if (i != 0) {
                        res.pop();
                    }
                }
            } else if (el == "--double-prev") {
                if (i != 0) {
                    if (arr[i - 2] !== "--discard-next") {
                        res.push(prev);
                    }
                }
            } else if (el == "--discard-next") {
                if (i < arr.length - 1) {
                    directive = el;
                }
            } else if (el == "--double-next") {
                if (i < arr.length - 1) {
                    directive = el;
                }
            } else {
                res.push(el);
            }
        } else {
            if (directive == "--discard-next") {
                directive = null;
            } else if (directive == "--double-next") {
                res.push(el);
                res.push(el);
                directive = null;
            }
        }
        prev = el;
    });
    return res;
}

module.exports = {
    transform,
};

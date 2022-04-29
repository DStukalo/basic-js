const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(array) {
    let res = "";
    if (!Array.isArray(array) || !array.length) {
        return false;
    }
    array.forEach((el) => {
        if (typeof el === "string") {
            el = el.trim();
            res += el[0].toUpperCase();
        }
    });

    return res.split("").sort().join("");
    // remove line with error and write your code here
}

module.exports = {
    createDreamTeam,
};

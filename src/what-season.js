const { NotImplementedError } = require("../extensions/index.js");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
    // let res = "";
    if (!date || !date instanceof Date) {
        return "Unable to determine the time of year!";
    }

    let month = date.getMonth();

    if ((month >= 0 && month <= 1) || a === 11) {
        return winter;
    }
}

module.exports = {
    getSeason,
};

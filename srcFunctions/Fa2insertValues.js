/**
 * Returns the input as an insert value for use with SQL insert (...)
 * This is new!
 *
 * @param {array} input The values to be processed.
 * @return A processed string, ready to use
 * @customfunction
 */

const concatValues_ = require("../srcUtils/concatValues_");
const makeArray_ = require("../srcUtils/makeArray_");

function Fa2insertValues(input) {
    const niceInput = makeArray_(input);

    return concatValues_(niceInput);
}

module.exports = Fa2insertValues;

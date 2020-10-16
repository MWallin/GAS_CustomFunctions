/**
 * Lägger på en riskfaktor enligt angiven procentsats på valda timmar
 *
 * @param {number} timmar Uppskattade timmar
 * @param {number} risk Riskfaktor som ska läggas på
 * @return Timmar inklusive risk
 *
 * @customfunction
 */
function Fa2addRisk(timmar, risk) {
    return timmar + timmar * risk;
}
/**
 * Returns the input as an insert value for use with SQL insert (...)
 * This is new!
 *
 * @param {array} input The values to be processed.
 * @return A processed string, ready to use
 * @customfunction
 */
function Fa2insertValues(input) {
    const niceInput = makeArray_(input);
    return concatValues_(niceInput);
}

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

module.exports = Fa2addRisk;

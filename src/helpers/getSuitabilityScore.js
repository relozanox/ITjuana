const countLetters = require("./countLetters");
const hasCommonFactor = require("./hasCommonFactor");

/**
 * Calculates suitability score.
 * @param {boolean} isPair 
 * @param {string} driverName 
 * @param {number} destinationNameLength
 * @returns {number}
 */
const getSuitabilityScore = (isPair, driverName, destinationNameLength) =>{
    const { totalVowels, totalConsonants } = countLetters(driverName);
    let baseSuitabilityScore = isPair ? totalVowels * 1.5 : totalConsonants * 1;
    return hasCommonFactor(destinationNameLength, driverName.length) ? baseSuitabilityScore *= 1.5: baseSuitabilityScore;
};

module.exports = getSuitabilityScore;
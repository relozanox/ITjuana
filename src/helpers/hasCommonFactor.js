/**
 * Calculates if the given numbers has a common factor.
 * @param {Number} destinationLength 
 * @param {Number} nameLength 
 * @returns {Boolean}
 */
const hasCommonFactor = (destinationLength, nameLength) => {
    while (nameLength !== 0) {
        const temp = nameLength;
        nameLength = destinationLength % nameLength;
        destinationLength = temp;
    }
    return destinationLength !== 1 ? true : false;
};

module.exports = hasCommonFactor;
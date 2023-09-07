/**
 * 
 * @param {array} possibleMatches 
 * @returns {array}
 */
const getBestMatch = (possibleMatches) => {
    possibleMatches.sort((a, b) => b[2] - a[2]);

    const n = possibleMatches.length;
    const matches = [];

    for (let i = 0; i < n; i++) {
        let isDuplicated = false;

        for (let j = 0; j < matches.length; j++) {
            if (matches[j][0] === possibleMatches[i][0] || matches[j][1] === possibleMatches[i][1]) {
                isDuplicated = true;
                break;
            }
        }

        if (!isDuplicated) {
            matches.push(possibleMatches[i]);
        }
    }

    return matches;
}

module.exports = getBestMatch;
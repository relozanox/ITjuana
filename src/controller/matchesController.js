const getFileContent = require("../helpers/getFileContent");
const getBestMatch = require("../helpers/getBestMatch");
const getAllMatches = require("../helpers/getAllMatches");

/**
 * 
 * @param {array<string>} driverData 
 * @param {array<string>} destinationsData 
 * @returns {void}
 */
const matchesController = (driversFilename, destinationsFilename) => {
    const driversData = getFileContent(driversFilename);
    const destinationsData = getFileContent(destinationsFilename);

    if (driversData.length === 0 || destinationsData.length === 0) {
        console.log('There is no information to process');
        return;
    }

    const matches = getAllMatches(destinationsData, driversData);
    const bestMatch = getBestMatch(matches);
    const suitabilityScoreTotal = bestMatch.reduce((total, currentValue) => { return total + currentValue[2] }, 0);
    const results = bestMatch.map(match => `Destination: ${match[0]}, Driver's name: ${match[1]}, SS: ${match[2]}`).join('\n');

    console.log('Total SS:',suitabilityScoreTotal, '\nResults:\n',results);
}

module.exports = matchesController;

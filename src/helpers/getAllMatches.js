const getSuitabilityScore = require("./getSuitabilityScore");
const isPair = require("./isPair");

const getAllMatches = (destinationsData, driversData)=>{
    let bestSuitabilityScore = 0;
    let suitabilityScore = 0;
    let matches = [];

    destinationsData.forEach(destination => {
        driversData.forEach(driverName => {
            suitabilityScore = getSuitabilityScore(isPair(destination.length), driverName, destination.length);
            if (suitabilityScore > bestSuitabilityScore) {
                matches.push([destination, driverName, suitabilityScore]);
            } else {
                bestSuitabilityScore = suitabilityScore;
            }
        });
    });
    return matches;
}

module.exports = getAllMatches;

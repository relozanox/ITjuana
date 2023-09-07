const getSuitabilityScore = require('../src/helpers/getSuitabilityScore');

describe('should return suitability score', () => {
    const testCases = [
        { isPair: true, driverName: 'Marcela Juana', destinationLength: 13, expected: 13.5},
        { isPair: false, driverName: 'Lucero Arriaga Oca', destinationLength: 7, expected: 7},
        { isPair: true, driverName: 'Diana Lopez', destinationLength: 15, expected: 7.5},
        { isPair: false, driverName: 'Roberto Lian', destinationLength: 6, expected: 9},
    ]
    test.each(testCases)(
        "given arguments: %p",
        ({isPair, driverName, destinationLength, expected}) => {
            expect(getSuitabilityScore(isPair,driverName, destinationLength)).toBe(expected);
        }
    );
})

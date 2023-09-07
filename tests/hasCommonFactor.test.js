const hasCommonFactor = require('../src/helpers/hasCommonFactor');

describe('should verify if common factor exists', () => {
    const testCases = [
        { destinationLength: 12, nameLength: 18, expected: true},
        { destinationLength: 9, nameLength: 25, expected: false},
        { destinationLength: 15, nameLength: 25, expected: true},
        { destinationLength: 13, nameLength: 17, expected: false},
        { destinationLength: 24, nameLength: 36, expected: true},
        { destinationLength: 7, nameLength: 22, expected: false},
    ]
    test.each(testCases)(
        "given arguments: %p",
        ({destinationLength, nameLength, expected}) => {
            expect(hasCommonFactor(destinationLength, nameLength)).toStrictEqual(expected);
        }
    );
})

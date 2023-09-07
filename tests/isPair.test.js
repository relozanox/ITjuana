const isPair = require('../src/helpers/isPair');

describe('should verify if given data is pair', () => {
    const testCases = [
        { data: 2, expected: true },
        { data: 399, expected: false },
        { data: 862, expected: true },
        { data: 864321, expected: false },
        { data: 'test', expected: false },
        { data: 20.5, expected: false },
    ]
    test.each(testCases)(
        "given arguments: %p",
        ({data, expected}) => {
            expect(isPair(data)).toBe(expected);
        }
    );
})

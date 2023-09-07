const countLetters = require('../src/helpers/countLetters');

describe('should return number of consonants and vowels from a string', () => {
    const testCases = [
        { stringToCount: 'QqwertyuiopOOIWE', expected: {totalVowels: 8,totalConsonants: 8} },
        { stringToCount: 'San Bernardo Julian', expected: {totalVowels: 7,totalConsonants: 10} },
        { stringToCount: 'Juan Ernesto Lopéz Guevara', expected: {totalVowels: 11,totalConsonants: 12} },
        { stringToCount: 'Juliantla de las manzanas', expected: {totalVowels: 9,totalConsonants: 13} },
        { stringToCount: 'AAAÁ ÉÉ eé ', expected: {totalVowels: 8,totalConsonants: 0} },
        { stringToCount: 'AAAÁ ÉÉ eé L', expected: {totalVowels: 8,totalConsonants: 1} },
    ]
    test.each(testCases)(
        "given arguments: %p",
        ({stringToCount, expected}) => {
            expect(countLetters(stringToCount)).toStrictEqual(expected);
        }
    );
})

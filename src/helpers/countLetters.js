
/**
 * Return the total number of vowels and consonants from a given string.
 * @param {String} stringToCountLetters 
 * @returns Object
 */
const countLetters = (stringToCountLetters) =>{
    const totalVowels = stringToCountLetters.match(/[aeiouáéíóú]/gi || []).length;
    const textWithoutSpaces = stringToCountLetters.replace(/\s+/g, '');
    const totalConsonants = textWithoutSpaces.length - totalVowels;

    return {totalVowels, totalConsonants}
};

module.exports = countLetters;
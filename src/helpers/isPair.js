/**
 * Verify if the length of a string is pair or not.
 * @param {Number} lengthString.
 * @return {Boolean}. 
 */
const isPair = (lengthString) =>{
    return (lengthString % 2) === 0 ? true:false;
};

module.exports = isPair;
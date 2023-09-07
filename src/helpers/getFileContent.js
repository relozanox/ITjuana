const fs = require('fs');

/**
 * 
 * @param {String} fileToRead 
 * @throws {Error}
 * @returns {String}
 */
const getFileContent = (fileToRead) => {
    try {
        return fs.readFileSync(fileToRead, 'utf8').split('\n').map(line => line.trim());
    } catch (error) {
        return error;
    }
};

module.exports = getFileContent;

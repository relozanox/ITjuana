/**
 * 
 * @param {readline.Interface} readline 
 * @param {string} fileType 
 * @returns {Promise<string>}
 */
const getFileRoute = (readline, fileType) => {
    return new Promise((resolve) => {
        readline.question(`Please insert the full path of the file with list of ${fileType}?`, (path) => {
            resolve(path);
        });
    });
};

module.exports = getFileRoute;
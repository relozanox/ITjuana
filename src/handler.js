const matchesController = require('./controller/matchesController');
const getFileRoute = require('./helpers/getFileRoute');
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

/**
 * Main function to invoke process
 */
const handler = async () => {
    const destinationsFilename = await getFileRoute(readline, 'street adresses');
    const driverFilename = await getFileRoute(readline, 'Driver names');
    console.log(`Street adresses file path: ${destinationsFilename}`);
    console.log(`Driver names file path: ${driverFilename}`);
    readline.close();
    matchesController(driverFilename, destinationsFilename);
};

handler();
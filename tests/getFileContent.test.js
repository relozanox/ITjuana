const getFileContent = require('../src/helpers/getFileContent');
const fs = require('fs');

jest.mock('fs');

describe('getFileContent', () => {
    test('must read and process correctly the file content', () => {
        fs.readFileSync.mockReturnValue('street 1\n street 2\n street 3');

        const result = getFileContent('file.txt');

        expect(fs.readFileSync).toHaveBeenCalledWith('file.txt', 'utf8');

        expect(result).toEqual(['street 1', 'street 2', 'street 3']);
    });

    test('must handle correctly the read file errors', () => {
        fs.readFileSync.mockImplementation(() => {
            throw new Error('File not found');
        });

        const result = getFileContent('no_file.txt');

        expect(fs.readFileSync).toHaveBeenCalledWith('no_file.txt', 'utf8');

        expect(result).toBeInstanceOf(Error);
        expect(result.message).toBe('File not found');
    });
});
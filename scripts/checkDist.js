const {execSync} = require('child_process');
const process = require('process');
const path = require('path');

const DIST_PATH = '../dist/';
const folder = process.argv.length > 2 ? process.argv[2] : '';
const pathToSearch = path.join(__dirname, DIST_PATH, folder);

console.log(pathToSearch);

checkIncorrectImports(pathToSearch);
checkImportWithSrc(pathToSearch);

if (folder !== '') {
    checkRequireWithSrc(pathToSearch);
}

function checkIncorrectImports(path) {
    const result = grepByPattern('import("../', path);

    if (result.length === 0) {
        return;
    }

    throw new Error(`There are problems with imports in:\n\n${result}`);
}

function checkRequireWithSrc(path) {
    const result = grepByPattern('require(.*/src/.*)', path);

    if (result.length === 0) {
        return;
    }

    throw new Error(`There are problems with require(.../src/...) in:\n\n${result}`);
}

function checkImportWithSrc(path) {
    const result = grepByPattern('import(.*/src/.*)', path);

    if (result.length === 0) {
        return;
    }

    throw new Error(`There are problems with require(.../src/...) in:\n\n${result}`);
}

function grepByPattern(pattern, path) {
    try {
        return execSync(`grep -iRl '${pattern}' ${path}`).toString();
    } catch (err) {
        return '';
    }
}

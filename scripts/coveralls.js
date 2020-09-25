const {execSync} = require('child_process');
const {readdirSync} = require('fs');
const {resolve} = require('path');

coveralls();

function coveralls() {
    const coverageFolder = resolve(__dirname, '..', 'coverage');

    readdirSync(coverageFolder, {withFileTypes: true})
        .filter(dirent => dirent.isDirectory())
        .map(dirent => dirent.name)
        .forEach(folder => {
            execSync(`cat coverage/${folder}/lcov.info | coveralls`);
        });
}

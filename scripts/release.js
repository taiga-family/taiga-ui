const {argv} = require('process');
const {version} = require('../package.json');
const {createInterface} = require('readline');
const {execSync} = require('child_process');

const mode = argv.length >= 2 ? argv[2] : 'patch';
const parsedVersion = version.split('.');

const newVersion = bump(parsedVersion, mode);

execSync('git checkout main');
execSync('git pull');
execSync(`git checkout -b release/${newVersion}`);
execSync(`npm run release -- --release-as ${mode}`);

checkChangelog().then(() => {
    execSync('git add .');
    execSync(`git commit -m 'chore(changelog): fix incorrect generated logs'`);
    execSync(`git push --set-upstream origin release/${newVersion}`);
    execSync(`git push --tags`);
});

function bump(versionArray, mode) {
    if (mode === 'major') {
        versionArray = [Number(versionArray[0]) + 1, 0, 0];
    }

    if (mode === 'minor') {
        versionArray[1] = Number(versionArray[1]) + 1;
        versionArray[2] = 0;
    }

    if (mode === 'patch') {
        versionArray[2] = Number(versionArray[2]) + 1;
    }

    return versionArray.join('.');
}

function checkChangelog() {
    let response;

    const readline = createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    readline.setPrompt(`Check\n./CHANGELOG.md\nand save all fixes. Then press enter`);
    readline.prompt();
    console.log('\n');

    return new Promise(resolve => {
        readline.on('line', userInput => {
            response = userInput;
            readline.close();
        });

        readline.on('close', () => {
            resolve(response);
        });
    });
}

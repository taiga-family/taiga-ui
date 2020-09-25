const fs = require('fs');

const DIST_LIB_PATH = 'dist/common/';
const README_PATH = 'README.md';
const LOGO_PATH = 'logo.svg';
const PATH_TO_README = DIST_LIB_PATH + README_PATH;
const PATH_TO_LOGO = DIST_LIB_PATH + LOGO_PATH;

copyExtraFiles();

function copyExtraFiles() {
    if (!fs.existsSync(README_PATH) || !fs.existsSync(LOGO_PATH)) {
        throw new Error('Requested files do not exit');
    } else {
        copyReadmeIntoDistFolder(README_PATH, PATH_TO_README);
        fs.copyFileSync(LOGO_PATH, PATH_TO_LOGO);
    }
}

function copyReadmeIntoDistFolder(srcPath, toPath) {
    const fileBody = fs.readFileSync(srcPath).toString();
    const withoutLogos = fileBody
        .replace('# ![logo](logo.svg) ', '')
        .replace('<img src="web-api.svg" align="top"> ', '');

    fs.writeFileSync(toPath, withoutLogos);
}

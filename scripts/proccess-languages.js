const fs = require('fs');
const {execSync} = require('child_process');

execSync('mv ./dist/demo/browser/en-US/* ./dist/demo/browser/');

replaceBaseHref('./dist/demo/browser/index.html');
execSync(
    'cp ./dist/demo/browser/index.html ./dist/demo/browser/404.html && cp ./dist/demo/browser/ru/index.html ./dist/demo/browser/ru/404.html',
);

function replaceBaseHref(path) {
    const fileBody = fs.readFileSync(path).toString();
    const fixed = fileBody.replace('/en-US/', '/');

    fs.writeFileSync(path, fixed);
}

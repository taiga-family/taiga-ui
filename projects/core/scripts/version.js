const {version} = require('../package.json');
const {resolve} = require('path');
const {writeFileSync} = require('fs-extra');
const file = resolve(__dirname, '..', 'constants', 'version.ts');

writeFileSync(
    file,
    `export const VERSION = '${version}';
`,
    {encoding: 'utf-8'},
);

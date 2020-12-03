const fs = require('fs-extra');
const {resolve} = require('path');

fs.copy(resolve(__dirname, '..', 'src/icons/src'), './dist/icons/src');

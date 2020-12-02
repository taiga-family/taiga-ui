const fs = require('fs-extra');
const {resolve} = require('path');

fs.copy(resolve(__dirname, '..', 'styles'), './dist/addon-mobile/styles');

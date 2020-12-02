/*
  @license
	Rollup.js v2.7.5
	Wed, 29 Apr 2020 19:48:24 GMT - commit a2b48832de11ad38eacfeacad08ba4dfceecfe96


	https://github.com/rollup/rollup

	Released under the MIT License.
*/
'use strict';

require('./shared/rollup.js');
require('path');
require('./shared/mergeOptions.js');
var loadConfigFile_js = require('./shared/loadConfigFile.js');
require('crypto');
require('fs');
require('events');
require('url');



module.exports = loadConfigFile_js.loadAndParseConfigFile;
//# sourceMappingURL=loadConfigFile.js.map

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rollup_1 = require("rollup");
const compiler_1 = require("@angular/compiler");
const typescript_1 = require("typescript");
/**
 * Prints version information.
 *
 * @stable
 */
exports.version = (pkg) => {
    let TSICKLE_VERSION = '';
    try {
        TSICKLE_VERSION = require('tsickle/package.json').version;
    }
    catch (_a) { }
    const NG_PACKAGR_VERSION = pkg ? pkg.version : 'unknown';
    console.log(`ng-packagr:            ` + NG_PACKAGR_VERSION);
    console.log(`@angular/compiler:     ` + compiler_1.VERSION.full);
    console.log(`rollup:                ` + rollup_1.VERSION);
    console.log(`tsickle:               ` + TSICKLE_VERSION);
    console.log(`typescript:            ` + typescript_1.version);
};
//# sourceMappingURL=version.command.js.map
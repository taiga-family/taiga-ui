"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rm = require('rimraf');
const promisify_1 = require("./promisify");
const log_1 = require("./log");
exports.rimraf = (f, opts) => {
    log_1.debug(`rimraf ${f}`);
    return promisify_1.promisify(resolveOrReject => {
        if (opts) {
            rm(f, opts, resolveOrReject);
        }
        else {
            rm(f, resolveOrReject);
        }
    });
};
//# sourceMappingURL=rimraf.js.map
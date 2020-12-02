"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const findCacheDirectory = require("find-cache-dir");
const os_1 = require("os");
const path_1 = require("path");
const environment_options_1 = require("./environment-options");
function findCachePath(name) {
    if (environment_options_1.cachingBasePath) {
        return path_1.resolve(environment_options_1.cachingBasePath, name);
    }
    return findCacheDirectory({ name }) || os_1.tmpdir();
}
exports.findCachePath = findCachePath;

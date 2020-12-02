"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const core_1 = require("@angular-devkit/core");
const base_1 = require("./base");
function rename(match, to) {
    return base_1.forEach(entry => {
        if (match(entry.path, entry)) {
            return {
                content: entry.content,
                path: core_1.normalize(to(entry.path, entry)),
            };
        }
        else {
            return entry;
        }
    });
}
exports.rename = rename;

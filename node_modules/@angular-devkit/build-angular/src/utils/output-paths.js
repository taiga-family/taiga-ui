"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const fs_1 = require("fs");
const path_1 = require("path");
function ensureOutputPaths(baseOutputPath, i18n) {
    const outputPaths = i18n.shouldInline
        ? [...i18n.inlineLocales].map(l => [l, i18n.flatOutput ? baseOutputPath : path_1.join(baseOutputPath, l)])
        : [
            i18n.veCompatLocale
                ? [i18n.veCompatLocale, path_1.join(baseOutputPath, i18n.veCompatLocale)]
                : ['', baseOutputPath],
        ];
    for (const [, outputPath] of outputPaths) {
        if (!fs_1.existsSync(outputPath)) {
            fs_1.mkdirSync(outputPath, { recursive: true });
        }
    }
    return new Map(outputPaths);
}
exports.ensureOutputPaths = ensureOutputPaths;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const fs = require("fs");
const glob = require("glob");
const path = require("path");
const copy_file_1 = require("./copy-file");
function globAsync(pattern, options) {
    return new Promise((resolve, reject) => glob(pattern, options, (e, m) => (e ? reject(e) : resolve(m))));
}
async function copyAssets(entries, basePaths, root, changed) {
    const defaultIgnore = ['.gitkeep', '**/.DS_Store', '**/Thumbs.db'];
    for (const entry of entries) {
        const cwd = path.resolve(root, entry.input);
        const files = await globAsync(entry.glob, {
            cwd,
            dot: true,
            nodir: true,
            ignore: entry.ignore ? defaultIgnore.concat(entry.ignore) : defaultIgnore,
        });
        const directoryExists = new Set();
        for (const file of files) {
            const src = path.join(cwd, file);
            if (changed && !changed.has(src)) {
                continue;
            }
            const filePath = entry.flatten ? path.basename(file) : file;
            for (const base of basePaths) {
                const dest = path.join(base, entry.output, filePath);
                const dir = path.dirname(dest);
                if (!directoryExists.has(dir)) {
                    if (!fs.existsSync(dir)) {
                        fs.mkdirSync(dir, { recursive: true });
                    }
                    directoryExists.add(dir);
                }
                copy_file_1.copyFile(src, dest);
            }
        }
    }
}
exports.copyAssets = copyAssets;

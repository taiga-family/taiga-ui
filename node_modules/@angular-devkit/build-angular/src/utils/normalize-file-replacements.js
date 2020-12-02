"use strict";
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular-devkit/core");
class MissingFileReplacementException extends core_1.BaseException {
    constructor(path) {
        super(`The ${path} path in file replacements does not exist.`);
    }
}
exports.MissingFileReplacementException = MissingFileReplacementException;
function normalizeFileReplacements(fileReplacements, host, root) {
    if (fileReplacements.length === 0) {
        return [];
    }
    const normalizedReplacement = fileReplacements
        .map(replacement => normalizeFileReplacement(replacement, root));
    for (const { replace, with: replacementWith } of normalizedReplacement) {
        if (!host.exists(replacementWith)) {
            throw new MissingFileReplacementException(core_1.getSystemPath(replacementWith));
        }
        if (!host.exists(replace)) {
            throw new MissingFileReplacementException(core_1.getSystemPath(replace));
        }
    }
    return normalizedReplacement;
}
exports.normalizeFileReplacements = normalizeFileReplacements;
function normalizeFileReplacement(fileReplacement, root) {
    let replacePath;
    let withPath;
    if (fileReplacement.src && fileReplacement.replaceWith) {
        replacePath = core_1.normalize(fileReplacement.src);
        withPath = core_1.normalize(fileReplacement.replaceWith);
    }
    else if (fileReplacement.replace && fileReplacement.with) {
        replacePath = core_1.normalize(fileReplacement.replace);
        withPath = core_1.normalize(fileReplacement.with);
    }
    else {
        throw new Error(`Invalid file replacement: ${JSON.stringify(fileReplacement)}`);
    }
    // TODO: For 7.x should this only happen if not absolute?
    if (root) {
        replacePath = core_1.join(root, replacePath);
    }
    if (root) {
        withPath = core_1.join(root, withPath);
    }
    return { replace: replacePath, with: withPath };
}

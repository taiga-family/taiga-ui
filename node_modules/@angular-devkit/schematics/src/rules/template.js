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
const util_1 = require("util");
const base_1 = require("./base");
const rename_1 = require("./rename");
exports.TEMPLATE_FILENAME_RE = /\.template$/;
class OptionIsNotDefinedException extends core_1.BaseException {
    constructor(name) { super(`Option "${name}" is not defined.`); }
}
exports.OptionIsNotDefinedException = OptionIsNotDefinedException;
class UnknownPipeException extends core_1.BaseException {
    constructor(name) { super(`Pipe "${name}" is not defined.`); }
}
exports.UnknownPipeException = UnknownPipeException;
class InvalidPipeException extends core_1.BaseException {
    constructor(name) { super(`Pipe "${name}" is invalid.`); }
}
exports.InvalidPipeException = InvalidPipeException;
const decoder = new util_1.TextDecoder('utf-8', { fatal: true });
function applyContentTemplate(options) {
    return (entry) => {
        const { path, content } = entry;
        try {
            const decodedContent = decoder.decode(content);
            return {
                path,
                content: Buffer.from(core_1.template(decodedContent, {})(options)),
            };
        }
        catch (e) {
            if (e.code === 'ERR_ENCODING_INVALID_ENCODED_DATA') {
                return entry;
            }
            throw e;
        }
    };
}
exports.applyContentTemplate = applyContentTemplate;
function contentTemplate(options) {
    return base_1.forEach(applyContentTemplate(options));
}
exports.contentTemplate = contentTemplate;
function applyPathTemplate(data, options = {
    interpolationStart: '__',
    interpolationEnd: '__',
    pipeSeparator: '@',
}) {
    const is = options.interpolationStart;
    const ie = options.interpolationEnd;
    const isL = is.length;
    const ieL = ie.length;
    return (entry) => {
        let path = entry.path;
        const content = entry.content;
        const original = path;
        let start = path.indexOf(is);
        // + 1 to have at least a length 1 name. `____` is not valid.
        let end = path.indexOf(ie, start + isL + 1);
        while (start != -1 && end != -1) {
            const match = path.substring(start + isL, end);
            let replacement = data[match];
            if (!options.pipeSeparator) {
                if (typeof replacement == 'function') {
                    replacement = replacement.call(data, original);
                }
                if (replacement === undefined) {
                    throw new OptionIsNotDefinedException(match);
                }
            }
            else {
                const [name, ...pipes] = match.split(options.pipeSeparator);
                replacement = data[name];
                if (typeof replacement == 'function') {
                    replacement = replacement.call(data, original);
                }
                if (replacement === undefined) {
                    throw new OptionIsNotDefinedException(name);
                }
                replacement = pipes.reduce((acc, pipe) => {
                    if (!pipe) {
                        return acc;
                    }
                    if (!(pipe in data)) {
                        throw new UnknownPipeException(pipe);
                    }
                    if (typeof data[pipe] != 'function') {
                        throw new InvalidPipeException(pipe);
                    }
                    // Coerce to string.
                    return '' + data[pipe](acc);
                }, '' + replacement);
            }
            path = path.substring(0, start) + replacement + path.substring(end + ieL);
            start = path.indexOf(options.interpolationStart);
            // See above.
            end = path.indexOf(options.interpolationEnd, start + isL + 1);
        }
        return { path: core_1.normalize(path), content };
    };
}
exports.applyPathTemplate = applyPathTemplate;
function pathTemplate(options) {
    return base_1.forEach(applyPathTemplate(options));
}
exports.pathTemplate = pathTemplate;
/**
 * Remove every `.template` suffix from file names.
 */
function renameTemplateFiles() {
    return rename_1.rename(path => !!path.match(exports.TEMPLATE_FILENAME_RE), path => path.replace(exports.TEMPLATE_FILENAME_RE, ''));
}
exports.renameTemplateFiles = renameTemplateFiles;
function template(options) {
    return base_1.chain([
        contentTemplate(options),
        // Force cast to PathTemplateData. We need the type for the actual pathTemplate() call,
        // but in this case we cannot do anything as contentTemplate are more permissive.
        // Since values are coerced to strings in PathTemplates it will be fine in the end.
        pathTemplate(options),
    ]);
}
exports.template = template;
function applyTemplates(options) {
    return base_1.forEach(base_1.when(path => path.endsWith('.template'), base_1.composeFileOperators([
        applyContentTemplate(options),
        // See above for this weird cast.
        applyPathTemplate(options),
        entry => {
            return {
                content: entry.content,
                path: entry.path.replace(exports.TEMPLATE_FILENAME_RE, ''),
            };
        },
    ])));
}
exports.applyTemplates = applyTemplates;

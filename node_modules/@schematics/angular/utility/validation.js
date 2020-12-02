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
const schematics_1 = require("@angular-devkit/schematics");
function validateName(name) {
    if (name && /^\d/.test(name)) {
        throw new schematics_1.SchematicsException(core_1.tags.oneLine `name (${name})
        can not start with a digit.`);
    }
}
exports.validateName = validateName;
// Must start with a letter, and must contain only alphanumeric characters or dashes.
// When adding a dash the segment after the dash must also start with a letter.
exports.htmlSelectorRe = /^[a-zA-Z][.0-9a-zA-Z]*(:?-[a-zA-Z][.0-9a-zA-Z]*)*$/;
function validateHtmlSelector(selector) {
    if (selector && !exports.htmlSelectorRe.test(selector)) {
        throw new schematics_1.SchematicsException(core_1.tags.oneLine `Selector (${selector})
        is invalid.`);
    }
}
exports.validateHtmlSelector = validateHtmlSelector;
function validateProjectName(projectName) {
    const errorIndex = getRegExpFailPosition(projectName);
    const unsupportedProjectNames = [];
    const packageNameRegex = /^(?:@[a-zA-Z0-9_-]+\/)?[a-zA-Z0-9_-]+$/;
    if (errorIndex !== null) {
        const firstMessage = core_1.tags.oneLine `
    Project name "${projectName}" is not valid. New project names must
    start with a letter, and must contain only alphanumeric characters or dashes.
    When adding a dash the segment after the dash must also start with a letter.
    `;
        const msg = core_1.tags.stripIndent `
    ${firstMessage}
    ${projectName}
    ${Array(errorIndex + 1).join(' ') + '^'}
    `;
        throw new schematics_1.SchematicsException(msg);
    }
    else if (unsupportedProjectNames.indexOf(projectName) !== -1) {
        throw new schematics_1.SchematicsException(`Project name ${JSON.stringify(projectName)} is not a supported name.`);
    }
    else if (!packageNameRegex.test(projectName)) {
        throw new schematics_1.SchematicsException(`Project name ${JSON.stringify(projectName)} is invalid.`);
    }
}
exports.validateProjectName = validateProjectName;
function getRegExpFailPosition(str) {
    const isScope = /^@.*\/.*/.test(str);
    if (isScope) {
        // Remove starting @
        str = str.replace(/^@/, '');
        // Change / to - for validation
        str = str.replace(/\//g, '-');
    }
    const parts = str.indexOf('-') >= 0 ? str.split('-') : [str];
    const matched = [];
    const projectNameRegexp = /^[a-zA-Z][.0-9a-zA-Z]*(-[.0-9a-zA-Z]*)*$/;
    parts.forEach(part => {
        if (part.match(projectNameRegexp)) {
            matched.push(part);
        }
    });
    const compare = matched.join('-');
    return (str !== compare) ? compare.length : null;
}

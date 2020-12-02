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
const crypto_1 = require("crypto");
const ts = require("../../third_party/github.com/Microsoft/TypeScript/lib/typescript");
const toDrop = {
    'core-js/es6/symbol': true,
    'core-js/es6/object': true,
    'core-js/es6/function': true,
    'core-js/es6/parse-int': true,
    'core-js/es6/parse-float': true,
    'core-js/es6/number': true,
    'core-js/es6/math': true,
    'core-js/es6/string': true,
    'core-js/es6/date': true,
    'core-js/es6/array': true,
    'core-js/es6/regexp': true,
    'core-js/es6/map': true,
    'core-js/es6/set': true,
    'core-js/es6/weak-map': true,
};
const header = `/**
 * This file includes polyfills needed by Angular and is loaded before the app.
 * You can add your own extra polyfills to this file.
 *
 * This file is divided into 2 sections:
 *   1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.
 *   2. Application imports. Files imported after ZoneJS that should be loaded before your main
 *      file.
 *
 * The current setup is for so-called "evergreen" browsers; the last versions of browsers that
 * automatically update themselves. This includes Safari >= 10, Chrome >= 55 (including Opera),
 * Edge >= 13 on the desktop, and iOS 10 and Chrome on mobile.
 *
 * Learn more in https://angular.io/guide/browser-support
 */

/***************************************************************************************************
* BROWSER POLYFILLS
*/
`;
const applicationPolyfillsHeader = 'APPLICATION IMPORTS';
const browserPolyfillsHeader = 'BROWSER POLYFILLS';
const knownPolyfillHashes = [
    '3dba718d7afe009e112e10d69073d2a2',
    'fccdb76b06ea636933f8b99b1c8d9725',
    '97e16639be1de06153695f5fefde745d',
    'd6c13d6dcf94ff3749283f33dd0d4864',
    '79bf0fd46c215e5f4145e15641c325f3',
    '6fe8080c7e38ee0ce677fdbc3884377a',
    '8e7f6abb3d2dca03b4dbb300e400a880',
];
function dropES2015PolyfillsFromFile(polyfillPath) {
    return (tree) => {
        const source = tree.read(polyfillPath);
        if (!source) {
            return;
        }
        const content = source.toString();
        // Check if file is unmodified, if so then replace and return
        const hash = crypto_1.createHash('md5');
        // normalize line endings to increase hash match chances
        hash.update(content.replace(/\r\n|\r/g, '\n'));
        const digest = hash.digest('hex');
        if (knownPolyfillHashes.includes(digest)) {
            // Replace with new project polyfills file
            // This removes the need to parse and also updates all included comments
            // mergeWith overwrite doesn't work so clear out existing file
            tree.delete(polyfillPath);
            return schematics_1.mergeWith(schematics_1.apply(schematics_1.url('../../application/files/src'), [
                schematics_1.filter(path => path === '/polyfills.ts.template'),
                schematics_1.move('/polyfills.ts.template', polyfillPath),
            ]), schematics_1.MergeStrategy.Overwrite);
        }
        if (!content.includes('core-js')) {
            // no action required if no mention of core-js
            return;
        }
        const sourceFile = ts.createSourceFile(polyfillPath, content.replace(/^\uFEFF/, ''), ts.ScriptTarget.Latest, true);
        const imports = sourceFile.statements
            .filter(s => s.kind === ts.SyntaxKind.ImportDeclaration);
        if (imports.length === 0) {
            return;
        }
        // Start the update of the file.
        const recorder = tree.beginUpdate(polyfillPath);
        const applicationPolyfillsStart = content.indexOf(applicationPolyfillsHeader);
        const browserPolyfillsStart = content.indexOf(browserPolyfillsHeader);
        let addHeader = false;
        for (const i of imports) {
            const module = ts.isStringLiteral(i.moduleSpecifier) && i.moduleSpecifier.text;
            // We do not want to remove imports which are after the "APPLICATION IMPORTS" header.
            if (module && toDrop[module] && applicationPolyfillsStart > i.getFullStart()) {
                recorder.remove(i.getFullStart(), i.getFullWidth());
                if (i.getFullStart() <= browserPolyfillsStart) {
                    addHeader = true;
                }
            }
        }
        // We've removed the header since it's part of the JSDoc of the nodes we dropped
        if (addHeader) {
            recorder.insertLeft(0, header);
        }
        tree.commitUpdate(recorder);
    };
}
/**
 * Drop ES2015 polyfills from all application projects
 */
function dropES2015Polyfills() {
    return (tree) => {
        // Simple. Take the ast of polyfills (if it exists) and find the import metadata. Remove it.
        const angularConfigContent = tree.read('angular.json') || tree.read('.angular.json');
        const rules = [];
        if (!angularConfigContent) {
            // Is this even an angular project?
            return;
        }
        const angularJson = core_1.parseJson(angularConfigContent.toString(), core_1.JsonParseMode.Loose);
        if (!core_1.isJsonObject(angularJson) || !core_1.isJsonObject(angularJson.projects)) {
            // If that field isn't there, no use...
            return;
        }
        // For all projects
        for (const projectName of Object.keys(angularJson.projects)) {
            const project = angularJson.projects[projectName];
            if (!core_1.isJsonObject(project)) {
                continue;
            }
            if (project.projectType !== 'application') {
                continue;
            }
            const architect = project.architect;
            if (!core_1.isJsonObject(architect)
                || !core_1.isJsonObject(architect.build)
                || !core_1.isJsonObject(architect.build.options)
                || typeof architect.build.options.polyfills !== 'string') {
                continue;
            }
            rules.push(dropES2015PolyfillsFromFile(architect.build.options.polyfills));
        }
        return schematics_1.chain(rules);
    };
}
exports.dropES2015Polyfills = dropES2015Polyfills;

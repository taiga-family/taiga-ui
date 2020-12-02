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
const lint_fix_1 = require("../utility/lint-fix");
const parse_name_1 = require("../utility/parse-name");
const workspace_1 = require("../utility/workspace");
const schema_1 = require("./schema");
function default_1(options) {
    return async (host) => {
        if (options.path === undefined) {
            options.path = await workspace_1.createDefaultPath(host, options.project);
        }
        if (!options.implements) {
            throw new schematics_1.SchematicsException('Option "implements" is required.');
        }
        const implementations = options.implements
            .map(implement => implement === 'CanDeactivate' ? 'CanDeactivate<unknown>' : implement)
            .join(', ');
        let implementationImports = `${options.implements.join(', ')}, `;
        // As long as we aren't in IE... ;)
        if (options.implements.includes(schema_1.Implement.CanLoad)) {
            implementationImports = `${implementationImports}Route, UrlSegment, `;
        }
        const parsedPath = parse_name_1.parseName(options.path, options.name);
        options.name = parsedPath.name;
        options.path = parsedPath.path;
        // todo remove these when we remove the deprecations
        options.skipTests = options.skipTests || !options.spec;
        const templateSource = schematics_1.apply(schematics_1.url('./files'), [
            options.skipTests ? schematics_1.filter(path => !path.endsWith('.spec.ts.template')) : schematics_1.noop(),
            schematics_1.applyTemplates({
                implementations,
                implementationImports,
                ...core_1.strings,
                ...options,
            }),
            schematics_1.move(parsedPath.path + (options.flat ? '' : '/' + core_1.strings.dasherize(options.name))),
        ]);
        return schematics_1.chain([
            schematics_1.mergeWith(templateSource),
            options.lintFix ? lint_fix_1.applyLintFix(options.path) : schematics_1.noop(),
        ]);
    };
}
exports.default = default_1;

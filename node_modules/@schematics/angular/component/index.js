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
const ts = require("../third_party/github.com/Microsoft/TypeScript/lib/typescript");
const ast_utils_1 = require("../utility/ast-utils");
const change_1 = require("../utility/change");
const find_module_1 = require("../utility/find-module");
const lint_fix_1 = require("../utility/lint-fix");
const parse_name_1 = require("../utility/parse-name");
const validation_1 = require("../utility/validation");
const workspace_1 = require("../utility/workspace");
function readIntoSourceFile(host, modulePath) {
    const text = host.read(modulePath);
    if (text === null) {
        throw new schematics_1.SchematicsException(`File ${modulePath} does not exist.`);
    }
    const sourceText = text.toString('utf-8');
    return ts.createSourceFile(modulePath, sourceText, ts.ScriptTarget.Latest, true);
}
function addDeclarationToNgModule(options) {
    return (host) => {
        if (options.skipImport || !options.module) {
            return host;
        }
        options.type = options.type != null ? options.type : 'Component';
        const modulePath = options.module;
        const source = readIntoSourceFile(host, modulePath);
        const componentPath = `/${options.path}/`
            + (options.flat ? '' : core_1.strings.dasherize(options.name) + '/')
            + core_1.strings.dasherize(options.name)
            + (options.type ? '.' : '')
            + core_1.strings.dasherize(options.type);
        const relativePath = find_module_1.buildRelativePath(modulePath, componentPath);
        const classifiedName = core_1.strings.classify(options.name) + core_1.strings.classify(options.type);
        const declarationChanges = ast_utils_1.addDeclarationToModule(source, modulePath, classifiedName, relativePath);
        const declarationRecorder = host.beginUpdate(modulePath);
        for (const change of declarationChanges) {
            if (change instanceof change_1.InsertChange) {
                declarationRecorder.insertLeft(change.pos, change.toAdd);
            }
        }
        host.commitUpdate(declarationRecorder);
        if (options.export) {
            // Need to refresh the AST because we overwrote the file in the host.
            const source = readIntoSourceFile(host, modulePath);
            const exportRecorder = host.beginUpdate(modulePath);
            const exportChanges = ast_utils_1.addExportToModule(source, modulePath, core_1.strings.classify(options.name) + core_1.strings.classify(options.type), relativePath);
            for (const change of exportChanges) {
                if (change instanceof change_1.InsertChange) {
                    exportRecorder.insertLeft(change.pos, change.toAdd);
                }
            }
            host.commitUpdate(exportRecorder);
        }
        if (options.entryComponent) {
            // Need to refresh the AST because we overwrote the file in the host.
            const source = readIntoSourceFile(host, modulePath);
            const entryComponentRecorder = host.beginUpdate(modulePath);
            const entryComponentChanges = ast_utils_1.addEntryComponentToModule(source, modulePath, core_1.strings.classify(options.name) + core_1.strings.classify(options.type), relativePath);
            for (const change of entryComponentChanges) {
                if (change instanceof change_1.InsertChange) {
                    entryComponentRecorder.insertLeft(change.pos, change.toAdd);
                }
            }
            host.commitUpdate(entryComponentRecorder);
        }
        return host;
    };
}
function buildSelector(options, projectPrefix) {
    let selector = core_1.strings.dasherize(options.name);
    if (options.prefix) {
        selector = `${options.prefix}-${selector}`;
    }
    else if (options.prefix === undefined && projectPrefix) {
        selector = `${projectPrefix}-${selector}`;
    }
    return selector;
}
function default_1(options) {
    return async (host) => {
        const workspace = await workspace_1.getWorkspace(host);
        const project = workspace.projects.get(options.project);
        if (options.path === undefined && project) {
            options.path = workspace_1.buildDefaultPath(project);
        }
        options.module = find_module_1.findModuleFromOptions(host, options);
        const parsedPath = parse_name_1.parseName(options.path, options.name);
        options.name = parsedPath.name;
        options.path = parsedPath.path;
        options.selector = options.selector || buildSelector(options, project && project.prefix || '');
        validation_1.validateName(options.name);
        validation_1.validateHtmlSelector(options.selector);
        const templateSource = schematics_1.apply(schematics_1.url('./files'), [
            options.skipTests ? schematics_1.filter(path => !path.endsWith('.spec.ts.template')) : schematics_1.noop(),
            options.inlineStyle ? schematics_1.filter(path => !path.endsWith('.__style__.template')) : schematics_1.noop(),
            options.inlineTemplate ? schematics_1.filter(path => !path.endsWith('.html.template')) : schematics_1.noop(),
            schematics_1.applyTemplates({
                ...core_1.strings,
                'if-flat': (s) => options.flat ? '' : s,
                ...options,
            }),
            !options.type ? schematics_1.forEach((file => {
                if (!!file.path.match(new RegExp('..'))) {
                    return {
                        content: file.content,
                        path: file.path.replace('..', '.'),
                    };
                }
                else {
                    return file;
                }
            })) : schematics_1.noop(),
            schematics_1.move(parsedPath.path),
        ]);
        return schematics_1.chain([
            addDeclarationToNgModule(options),
            schematics_1.mergeWith(templateSource),
            options.lintFix ? lint_fix_1.applyLintFix(options.path) : schematics_1.noop(),
        ]);
    };
}
exports.default = default_1;

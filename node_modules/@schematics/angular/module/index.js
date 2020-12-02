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
const workspace_1 = require("../utility/workspace");
const schema_1 = require("./schema");
function buildRelativeModulePath(options, modulePath) {
    const importModulePath = core_1.normalize(`/${options.path}/`
        + (options.flat ? '' : core_1.strings.dasherize(options.name) + '/')
        + core_1.strings.dasherize(options.name)
        + '.module');
    return find_module_1.buildRelativePath(modulePath, importModulePath);
}
function addDeclarationToNgModule(options) {
    return (host) => {
        if (!options.module) {
            return host;
        }
        const modulePath = options.module;
        const text = host.read(modulePath);
        if (text === null) {
            throw new schematics_1.SchematicsException(`File ${modulePath} does not exist.`);
        }
        const sourceText = text.toString();
        const source = ts.createSourceFile(modulePath, sourceText, ts.ScriptTarget.Latest, true);
        const relativePath = buildRelativeModulePath(options, modulePath);
        const changes = ast_utils_1.addImportToModule(source, modulePath, core_1.strings.classify(`${options.name}Module`), relativePath);
        const recorder = host.beginUpdate(modulePath);
        for (const change of changes) {
            if (change instanceof change_1.InsertChange) {
                recorder.insertLeft(change.pos, change.toAdd);
            }
        }
        host.commitUpdate(recorder);
        return host;
    };
}
function addRouteDeclarationToNgModule(options, routingModulePath) {
    return (host) => {
        if (!options.route) {
            return host;
        }
        if (!options.module) {
            throw new Error('Module option required when creating a lazy loaded routing module.');
        }
        let path;
        if (routingModulePath) {
            path = routingModulePath;
        }
        else {
            path = options.module;
        }
        const text = host.read(path);
        if (!text) {
            throw new Error(`Couldn't find the module nor its routing module.`);
        }
        const sourceText = text.toString();
        const addDeclaration = ast_utils_1.addRouteDeclarationToModule(ts.createSourceFile(path, sourceText, ts.ScriptTarget.Latest, true), path, buildRoute(options, options.module));
        const recorder = host.beginUpdate(path);
        recorder.insertLeft(addDeclaration.pos, addDeclaration.toAdd);
        host.commitUpdate(recorder);
        return host;
    };
}
function getRoutingModulePath(host, modulePath) {
    const routingModulePath = modulePath.endsWith(find_module_1.ROUTING_MODULE_EXT)
        ? modulePath
        : modulePath.replace(find_module_1.MODULE_EXT, find_module_1.ROUTING_MODULE_EXT);
    return host.exists(routingModulePath) ? core_1.normalize(routingModulePath) : undefined;
}
function buildRoute(options, modulePath) {
    const relativeModulePath = buildRelativeModulePath(options, modulePath);
    const moduleName = `${core_1.strings.classify(options.name)}Module`;
    const loadChildren = `() => import('${relativeModulePath}').then(m => m.${moduleName})`;
    return `{ path: '${options.route}', loadChildren: ${loadChildren} }`;
}
function default_1(options) {
    return async (host) => {
        if (options.path === undefined) {
            options.path = await workspace_1.createDefaultPath(host, options.project);
        }
        if (options.module) {
            options.module = find_module_1.findModuleFromOptions(host, options);
        }
        let routingModulePath;
        const isLazyLoadedModuleGen = !!(options.route && options.module);
        if (isLazyLoadedModuleGen) {
            options.routingScope = schema_1.RoutingScope.Child;
            routingModulePath = getRoutingModulePath(host, options.module);
        }
        const parsedPath = parse_name_1.parseName(options.path, options.name);
        options.name = parsedPath.name;
        options.path = parsedPath.path;
        const templateSource = schematics_1.apply(schematics_1.url('./files'), [
            options.routing || (isLazyLoadedModuleGen && routingModulePath)
                ? schematics_1.noop()
                : schematics_1.filter(path => !path.endsWith('-routing.module.ts.template')),
            schematics_1.applyTemplates({
                ...core_1.strings,
                'if-flat': (s) => options.flat ? '' : s,
                lazyRoute: isLazyLoadedModuleGen,
                lazyRouteWithoutRouteModule: isLazyLoadedModuleGen && !routingModulePath,
                lazyRouteWithRouteModule: isLazyLoadedModuleGen && !!routingModulePath,
                ...options,
            }),
            schematics_1.move(parsedPath.path),
        ]);
        const moduleDasherized = core_1.strings.dasherize(options.name);
        const modulePath = `${!options.flat ? moduleDasherized + '/' : ''}${moduleDasherized}.module.ts`;
        return schematics_1.chain([
            !isLazyLoadedModuleGen ? addDeclarationToNgModule(options) : schematics_1.noop(),
            addRouteDeclarationToNgModule(options, routingModulePath),
            schematics_1.mergeWith(templateSource),
            isLazyLoadedModuleGen
                ? schematics_1.schematic('component', {
                    ...options,
                    module: modulePath,
                })
                : schematics_1.noop(),
            options.lintFix ? lint_fix_1.applyLintFix(options.path) : schematics_1.noop(),
        ]);
    };
}
exports.default = default_1;

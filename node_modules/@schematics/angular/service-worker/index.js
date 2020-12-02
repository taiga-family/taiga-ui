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
const tasks_1 = require("@angular-devkit/schematics/tasks");
const ts = require("../third_party/github.com/Microsoft/TypeScript/lib/typescript");
const ast_utils_1 = require("../utility/ast-utils");
const dependencies_1 = require("../utility/dependencies");
const ng_ast_utils_1 = require("../utility/ng-ast-utils");
const paths_1 = require("../utility/paths");
const project_targets_1 = require("../utility/project-targets");
const workspace_1 = require("../utility/workspace");
function addDependencies() {
    return (host, context) => {
        const packageName = '@angular/service-worker';
        context.logger.debug(`adding dependency (${packageName})`);
        const coreDep = dependencies_1.getPackageJsonDependency(host, '@angular/core');
        if (coreDep === null) {
            throw new schematics_1.SchematicsException('Could not find version.');
        }
        const serviceWorkerDep = {
            ...coreDep,
            name: packageName,
        };
        dependencies_1.addPackageJsonDependency(host, serviceWorkerDep);
        return host;
    };
}
function updateAppModule(mainPath) {
    return (host, context) => {
        context.logger.debug('Updating appmodule');
        const modulePath = ng_ast_utils_1.getAppModulePath(host, mainPath);
        context.logger.debug(`module path: ${modulePath}`);
        // add import
        let moduleSource = getTsSourceFile(host, modulePath);
        let importModule = 'ServiceWorkerModule';
        let importPath = '@angular/service-worker';
        if (!ast_utils_1.isImported(moduleSource, importModule, importPath)) {
            const change = ast_utils_1.insertImport(moduleSource, modulePath, importModule, importPath);
            if (change) {
                const recorder = host.beginUpdate(modulePath);
                recorder.insertLeft(change.pos, change.toAdd);
                host.commitUpdate(recorder);
            }
        }
        // add import for environments
        // import { environment } from '../environments/environment';
        moduleSource = getTsSourceFile(host, modulePath);
        const environmentExportName = ast_utils_1.getEnvironmentExportName(moduleSource);
        // if environemnt import already exists then use the found one
        // otherwise use the default name
        importModule = environmentExportName || 'environment';
        // TODO: dynamically find environments relative path
        importPath = '../environments/environment';
        if (!environmentExportName) {
            // if environment import was not found then insert the new one
            // with default path and default export name
            const change = ast_utils_1.insertImport(moduleSource, modulePath, importModule, importPath);
            if (change) {
                const recorder = host.beginUpdate(modulePath);
                recorder.insertLeft(change.pos, change.toAdd);
                host.commitUpdate(recorder);
            }
        }
        // register SW in app module
        const importText = `ServiceWorkerModule.register('ngsw-worker.js', { enabled: ${importModule}.production })`;
        moduleSource = getTsSourceFile(host, modulePath);
        const metadataChanges = ast_utils_1.addSymbolToNgModuleMetadata(moduleSource, modulePath, 'imports', importText);
        if (metadataChanges) {
            const recorder = host.beginUpdate(modulePath);
            metadataChanges.forEach((change) => {
                recorder.insertRight(change.pos, change.toAdd);
            });
            host.commitUpdate(recorder);
        }
        return host;
    };
}
function getTsSourceFile(host, path) {
    const buffer = host.read(path);
    if (!buffer) {
        throw new schematics_1.SchematicsException(`Could not read file (${path}).`);
    }
    const content = buffer.toString();
    const source = ts.createSourceFile(path, content, ts.ScriptTarget.Latest, true);
    return source;
}
function default_1(options) {
    return async (host, context) => {
        const workspace = await workspace_1.getWorkspace(host);
        const project = workspace.projects.get(options.project);
        if (!project) {
            throw new schematics_1.SchematicsException(`Invalid project name (${options.project})`);
        }
        if (project.extensions.projectType !== 'application') {
            throw new schematics_1.SchematicsException(`Service worker requires a project type of "application".`);
        }
        const buildTarget = project.targets.get('build');
        if (!buildTarget) {
            throw project_targets_1.targetBuildNotFoundError();
        }
        const buildOptions = (buildTarget.options || {});
        let buildConfiguration;
        if (options.configuration && buildTarget.configurations) {
            buildConfiguration =
                buildTarget.configurations[options.configuration];
        }
        const config = buildConfiguration || buildOptions;
        const root = project.root;
        config.serviceWorker = true;
        config.ngswConfigPath = core_1.join(core_1.normalize(root), 'ngsw-config.json');
        let { resourcesOutputPath = '' } = config;
        if (resourcesOutputPath) {
            resourcesOutputPath = core_1.normalize(`/${resourcesOutputPath}`);
        }
        const templateSource = schematics_1.apply(schematics_1.url('./files'), [
            schematics_1.applyTemplates({
                ...options,
                resourcesOutputPath,
                relativePathToWorkspaceRoot: paths_1.relativePathToWorkspaceRoot(project.root),
            }),
            schematics_1.move(project.root),
        ]);
        context.addTask(new tasks_1.NodePackageInstallTask());
        return schematics_1.chain([
            schematics_1.mergeWith(templateSource),
            workspace_1.updateWorkspace(workspace),
            addDependencies(),
            updateAppModule(buildOptions.main),
        ]);
    };
}
exports.default = default_1;

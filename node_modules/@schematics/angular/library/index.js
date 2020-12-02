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
const dependencies_1 = require("../utility/dependencies");
const latest_versions_1 = require("../utility/latest-versions");
const lint_fix_1 = require("../utility/lint-fix");
const paths_1 = require("../utility/paths");
const validation_1 = require("../utility/validation");
const workspace_1 = require("../utility/workspace");
const workspace_models_1 = require("../utility/workspace-models");
function updateJsonFile(host, path, callback) {
    const source = host.read(path);
    if (source) {
        const sourceText = source.toString('utf-8');
        const json = core_1.parseJson(sourceText, core_1.JsonParseMode.Loose);
        callback(json);
        host.overwrite(path, JSON.stringify(json, null, 2));
    }
    return host;
}
function updateTsConfig(packageName, ...paths) {
    return (host) => {
        if (!host.exists('tsconfig.json')) {
            return host;
        }
        return updateJsonFile(host, 'tsconfig.json', (tsconfig) => {
            if (!tsconfig.compilerOptions.paths) {
                tsconfig.compilerOptions.paths = {};
            }
            if (!tsconfig.compilerOptions.paths[packageName]) {
                tsconfig.compilerOptions.paths[packageName] = [];
            }
            tsconfig.compilerOptions.paths[packageName].push(...paths);
        });
    };
}
function addDependenciesToPackageJson() {
    return (host) => {
        [
            {
                type: dependencies_1.NodeDependencyType.Dev,
                name: '@angular/compiler-cli',
                version: latest_versions_1.latestVersions.Angular,
            },
            {
                type: dependencies_1.NodeDependencyType.Dev,
                name: '@angular-devkit/build-ng-packagr',
                version: latest_versions_1.latestVersions.DevkitBuildNgPackagr,
            },
            {
                type: dependencies_1.NodeDependencyType.Dev,
                name: '@angular-devkit/build-angular',
                version: latest_versions_1.latestVersions.DevkitBuildAngular,
            },
            {
                type: dependencies_1.NodeDependencyType.Dev,
                name: 'ng-packagr',
                version: latest_versions_1.latestVersions.ngPackagr,
            },
            {
                type: dependencies_1.NodeDependencyType.Default,
                name: 'tslib',
                version: latest_versions_1.latestVersions.TsLib,
            },
            {
                type: dependencies_1.NodeDependencyType.Dev,
                name: 'typescript',
                version: latest_versions_1.latestVersions.TypeScript,
            },
        ].forEach(dependency => dependencies_1.addPackageJsonDependency(host, dependency));
        return host;
    };
}
function addLibToWorkspaceFile(options, projectRoot, projectName) {
    return workspace_1.updateWorkspace(workspace => {
        if (workspace.projects.size === 0) {
            workspace.extensions.defaultProject = projectName;
        }
        workspace.projects.add({
            name: projectName,
            root: projectRoot,
            sourceRoot: `${projectRoot}/src`,
            projectType: workspace_models_1.ProjectType.Library,
            prefix: options.prefix,
            targets: {
                build: {
                    builder: workspace_models_1.Builders.NgPackagr,
                    options: {
                        tsConfig: `${projectRoot}/tsconfig.lib.json`,
                        project: `${projectRoot}/ng-package.json`,
                    },
                    configurations: {
                        production: {
                            tsConfig: `${projectRoot}/tsconfig.lib.prod.json`,
                        },
                    },
                },
                test: {
                    builder: workspace_models_1.Builders.Karma,
                    options: {
                        main: `${projectRoot}/src/test.ts`,
                        tsConfig: `${projectRoot}/tsconfig.spec.json`,
                        karmaConfig: `${projectRoot}/karma.conf.js`,
                    },
                },
                lint: {
                    builder: workspace_models_1.Builders.TsLint,
                    options: {
                        tsConfig: [
                            `${projectRoot}/tsconfig.lib.json`,
                            `${projectRoot}/tsconfig.spec.json`,
                        ],
                        exclude: [
                            '**/node_modules/**',
                        ],
                    },
                },
            },
        });
    });
}
function default_1(options) {
    return async (host) => {
        if (!options.name) {
            throw new schematics_1.SchematicsException(`Invalid options, "name" is required.`);
        }
        const prefix = options.prefix;
        validation_1.validateProjectName(options.name);
        // If scoped project (i.e. "@foo/bar"), convert projectDir to "foo/bar".
        const projectName = options.name;
        const packageName = core_1.strings.dasherize(projectName);
        let scopeName = null;
        if (/^@.*\/.*/.test(options.name)) {
            const [scope, name] = options.name.split('/');
            scopeName = scope.replace(/^@/, '');
            options.name = name;
        }
        const workspace = await workspace_1.getWorkspace(host);
        const newProjectRoot = workspace.extensions.newProjectRoot || '';
        const scopeFolder = scopeName ? core_1.strings.dasherize(scopeName) + '/' : '';
        const folderName = `${scopeFolder}${core_1.strings.dasherize(options.name)}`;
        const projectRoot = core_1.join(core_1.normalize(newProjectRoot), folderName);
        const distRoot = `dist/${folderName}`;
        const pathImportLib = `${distRoot}/${folderName.replace('/', '-')}`;
        const sourceDir = `${projectRoot}/src/lib`;
        const templateSource = schematics_1.apply(schematics_1.url('./files'), [
            schematics_1.applyTemplates({
                ...core_1.strings,
                ...options,
                packageName,
                projectRoot,
                distRoot,
                relativePathToWorkspaceRoot: paths_1.relativePathToWorkspaceRoot(projectRoot),
                prefix,
                angularLatestVersion: latest_versions_1.latestVersions.Angular.replace('~', '').replace('^', ''),
                tsLibLatestVersion: latest_versions_1.latestVersions.TsLib.replace('~', '').replace('^', ''),
                folderName,
            }),
            schematics_1.move(projectRoot),
        ]);
        return schematics_1.chain([
            schematics_1.mergeWith(templateSource),
            addLibToWorkspaceFile(options, projectRoot, projectName),
            options.skipPackageJson ? schematics_1.noop() : addDependenciesToPackageJson(),
            options.skipTsConfig ? schematics_1.noop() : updateTsConfig(packageName, pathImportLib, distRoot),
            schematics_1.schematic('module', {
                name: options.name,
                commonModule: false,
                flat: true,
                path: sourceDir,
                project: options.name,
            }),
            schematics_1.schematic('component', {
                name: options.name,
                selector: `${prefix}-${options.name}`,
                inlineStyle: true,
                inlineTemplate: true,
                flat: true,
                path: sourceDir,
                export: true,
                project: options.name,
            }),
            schematics_1.schematic('service', {
                name: options.name,
                flat: true,
                path: sourceDir,
                project: options.name,
            }),
            options.lintFix ? lint_fix_1.applyLintFix(sourceDir) : schematics_1.noop(),
            (_tree, context) => {
                if (!options.skipPackageJson && !options.skipInstall) {
                    context.addTask(new tasks_1.NodePackageInstallTask());
                }
            },
        ]);
    };
}
exports.default = default_1;

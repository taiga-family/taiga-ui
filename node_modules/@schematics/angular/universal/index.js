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
const change_1 = require("../utility/change");
const dependencies_1 = require("../utility/dependencies");
const ng_ast_utils_1 = require("../utility/ng-ast-utils");
const project_targets_1 = require("../utility/project-targets");
const workspace_1 = require("../utility/workspace");
const workspace_models_1 = require("../utility/workspace-models");
function updateConfigFile(options, tsConfigDirectory) {
    return workspace_1.updateWorkspace(workspace => {
        const clientProject = workspace.projects.get(options.clientProject);
        if (clientProject) {
            const buildTarget = clientProject.targets.get('build');
            let fileReplacements;
            if (buildTarget && buildTarget.configurations && buildTarget.configurations.production) {
                fileReplacements = buildTarget.configurations.production.fileReplacements;
            }
            if (buildTarget && buildTarget.options) {
                buildTarget.options.outputPath = `dist/${options.clientProject}/browser`;
            }
            // In case the browser builder hashes the assets
            // we need to add this setting to the server builder
            // as otherwise when assets it will be requested twice.
            // One for the server which will be unhashed, and other on the client which will be hashed.
            let outputHashing;
            if (buildTarget && buildTarget.configurations && buildTarget.configurations.production) {
                switch (buildTarget.configurations.production.outputHashing) {
                    case 'all':
                    case 'media':
                        outputHashing = 'media';
                        break;
                }
            }
            const mainPath = options.main;
            clientProject.targets.add({
                name: 'server',
                builder: workspace_models_1.Builders.Server,
                options: {
                    outputPath: `dist/${options.clientProject}/server`,
                    main: core_1.join(core_1.normalize(clientProject.root), 'src', mainPath.endsWith('.ts') ? mainPath : mainPath + '.ts'),
                    tsConfig: core_1.join(tsConfigDirectory, `${options.tsconfigFileName}.json`),
                },
                configurations: {
                    production: {
                        outputHashing,
                        fileReplacements,
                        sourceMap: false,
                        optimization: true,
                    },
                },
            });
        }
    });
}
function findBrowserModuleImport(host, modulePath) {
    const moduleBuffer = host.read(modulePath);
    if (!moduleBuffer) {
        throw new schematics_1.SchematicsException(`Module file (${modulePath}) not found`);
    }
    const moduleFileText = moduleBuffer.toString('utf-8');
    const source = ts.createSourceFile(modulePath, moduleFileText, ts.ScriptTarget.Latest, true);
    const decoratorMetadata = ast_utils_1.getDecoratorMetadata(source, 'NgModule', '@angular/core')[0];
    const browserModuleNode = ast_utils_1.findNode(decoratorMetadata, ts.SyntaxKind.Identifier, 'BrowserModule');
    if (browserModuleNode === null) {
        throw new schematics_1.SchematicsException(`Cannot find BrowserModule import in ${modulePath}`);
    }
    return browserModuleNode;
}
function wrapBootstrapCall(mainFile) {
    return (host) => {
        const mainPath = core_1.normalize('/' + mainFile);
        let bootstrapCall = ng_ast_utils_1.findBootstrapModuleCall(host, mainPath);
        if (bootstrapCall === null) {
            throw new schematics_1.SchematicsException('Bootstrap module not found.');
        }
        let bootstrapCallExpression = null;
        let currentCall = bootstrapCall;
        while (bootstrapCallExpression === null && currentCall.parent) {
            currentCall = currentCall.parent;
            if (ts.isExpressionStatement(currentCall) || ts.isVariableStatement(currentCall)) {
                bootstrapCallExpression = currentCall;
            }
        }
        bootstrapCall = currentCall;
        // In case the bootstrap code is a variable statement
        // we need to determine it's usage
        if (bootstrapCallExpression && ts.isVariableStatement(bootstrapCallExpression)) {
            const declaration = bootstrapCallExpression.declarationList.declarations[0];
            const bootstrapVar = declaration.name.text;
            const sf = bootstrapCallExpression.getSourceFile();
            bootstrapCall = findCallExpressionNode(sf, bootstrapVar) || currentCall;
        }
        // indent contents
        const triviaWidth = bootstrapCall.getLeadingTriviaWidth();
        const beforeText = `document.addEventListener('DOMContentLoaded', () => {\n`
            + ' '.repeat(triviaWidth > 2 ? triviaWidth + 1 : triviaWidth);
        const afterText = `\n${triviaWidth > 2 ? ' '.repeat(triviaWidth - 1) : ''}});`;
        // in some cases we need to cater for a trailing semicolon such as;
        // bootstrap().catch(err => console.log(err));
        const lastToken = bootstrapCall.parent.getLastToken();
        let endPos = bootstrapCall.getEnd();
        if (lastToken && lastToken.kind === ts.SyntaxKind.SemicolonToken) {
            endPos = lastToken.getEnd();
        }
        const recorder = host.beginUpdate(mainPath);
        recorder.insertLeft(bootstrapCall.getStart(), beforeText);
        recorder.insertRight(endPos, afterText);
        host.commitUpdate(recorder);
    };
}
function findCallExpressionNode(node, text) {
    if (ts.isCallExpression(node)
        && ts.isIdentifier(node.expression)
        && node.expression.text === text) {
        return node;
    }
    let foundNode = null;
    ts.forEachChild(node, childNode => {
        foundNode = findCallExpressionNode(childNode, text);
        if (foundNode) {
            return true;
        }
    });
    return foundNode;
}
function addServerTransition(options, mainFile, clientProjectRoot) {
    return (host) => {
        const mainPath = core_1.normalize('/' + mainFile);
        const bootstrapModuleRelativePath = ng_ast_utils_1.findBootstrapModulePath(host, mainPath);
        const bootstrapModulePath = core_1.normalize(`/${clientProjectRoot}/src/${bootstrapModuleRelativePath}.ts`);
        const browserModuleImport = findBrowserModuleImport(host, bootstrapModulePath);
        const appId = options.appId;
        const transitionCall = `.withServerTransition({ appId: '${appId}' })`;
        const position = browserModuleImport.pos + browserModuleImport.getFullText().length;
        const transitionCallChange = new change_1.InsertChange(bootstrapModulePath, position, transitionCall);
        const transitionCallRecorder = host.beginUpdate(bootstrapModulePath);
        transitionCallRecorder.insertLeft(transitionCallChange.pos, transitionCallChange.toAdd);
        host.commitUpdate(transitionCallRecorder);
    };
}
function addDependencies() {
    return (host) => {
        const coreDep = dependencies_1.getPackageJsonDependency(host, '@angular/core');
        if (coreDep === null) {
            throw new schematics_1.SchematicsException('Could not find version.');
        }
        const platformServerDep = {
            ...coreDep,
            name: '@angular/platform-server',
        };
        dependencies_1.addPackageJsonDependency(host, platformServerDep);
        return host;
    };
}
function getTsConfigOutDir(host, tsConfigPath) {
    const tsConfigBuffer = host.read(tsConfigPath);
    if (!tsConfigBuffer) {
        throw new schematics_1.SchematicsException(`Could not read ${tsConfigPath}`);
    }
    const tsConfigContent = tsConfigBuffer.toString();
    const tsConfig = core_1.parseJson(tsConfigContent, core_1.JsonParseMode.Loose);
    if (tsConfig === null || typeof tsConfig !== 'object' || Array.isArray(tsConfig) ||
        tsConfig.compilerOptions === null || typeof tsConfig.compilerOptions !== 'object' ||
        Array.isArray(tsConfig.compilerOptions)) {
        throw new schematics_1.SchematicsException(`Invalid tsconfig - ${tsConfigPath}`);
    }
    const outDir = tsConfig.compilerOptions.outDir;
    return outDir;
}
function default_1(options) {
    return async (host, context) => {
        const workspace = await workspace_1.getWorkspace(host);
        const clientProject = workspace.projects.get(options.clientProject);
        if (!clientProject || clientProject.extensions.projectType !== 'application') {
            throw new schematics_1.SchematicsException(`Universal requires a project type of "application".`);
        }
        const clientBuildTarget = clientProject.targets.get('build');
        if (!clientBuildTarget) {
            throw project_targets_1.targetBuildNotFoundError();
        }
        const clientBuildOptions = (clientBuildTarget.options || {});
        const outDir = getTsConfigOutDir(host, clientBuildOptions.tsConfig);
        const clientTsConfig = core_1.normalize(clientBuildOptions.tsConfig);
        const tsConfigExtends = core_1.basename(clientTsConfig);
        // this is needed because prior to version 8, tsconfig might have been in 'src'
        // and we don't want to break the 'ng add @nguniversal/express-engine schematics'
        const rootInSrc = clientProject.root === '' && clientTsConfig.includes('src/');
        const tsConfigDirectory = core_1.join(core_1.normalize(clientProject.root), rootInSrc ? 'src' : '');
        if (!options.skipInstall) {
            context.addTask(new tasks_1.NodePackageInstallTask());
        }
        const templateSource = schematics_1.apply(schematics_1.url('./files/src'), [
            schematics_1.applyTemplates({
                ...core_1.strings,
                ...options,
                stripTsExtension: (s) => s.replace(/\.ts$/, ''),
                hasLocalizePackage: !!dependencies_1.getPackageJsonDependency(host, '@angular/localize'),
            }),
            schematics_1.move(core_1.join(core_1.normalize(clientProject.root), 'src')),
        ]);
        const rootSource = schematics_1.apply(schematics_1.url('./files/root'), [
            schematics_1.applyTemplates({
                ...core_1.strings,
                ...options,
                stripTsExtension: (s) => s.replace(/\.ts$/, ''),
                outDir,
                tsConfigExtends,
                rootInSrc,
            }),
            schematics_1.move(tsConfigDirectory),
        ]);
        return schematics_1.chain([
            schematics_1.mergeWith(templateSource),
            schematics_1.mergeWith(rootSource),
            addDependencies(),
            updateConfigFile(options, tsConfigDirectory),
            wrapBootstrapCall(clientBuildOptions.main),
            addServerTransition(options, clientBuildOptions.main, clientProject.root),
        ]);
    };
}
exports.default = default_1;

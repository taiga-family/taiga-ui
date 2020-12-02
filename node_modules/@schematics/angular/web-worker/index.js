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
const json_utils_1 = require("../utility/json-utils");
const parse_name_1 = require("../utility/parse-name");
const paths_1 = require("../utility/paths");
const workspace_1 = require("../utility/workspace");
function addConfig(options, root, tsConfigPath) {
    return (host, context) => {
        context.logger.debug('updating project configuration.');
        // Add worker glob exclusion to tsconfig.app.json.
        // Projects pre version 8 should to have tsconfig.app.json inside their application
        const isInSrc = core_1.dirname(core_1.normalize(tsConfigPath)).endsWith('src');
        const workerGlob = `${isInSrc ? '' : 'src/'}**/*.worker.ts`;
        const buffer = host.read(tsConfigPath);
        if (buffer) {
            const tsCfgAst = core_1.parseJsonAst(buffer.toString(), core_1.JsonParseMode.Loose);
            if (tsCfgAst.kind != 'object') {
                throw new schematics_1.SchematicsException('Invalid tsconfig. Was expecting an object');
            }
            const filesAstNode = json_utils_1.findPropertyInAstObject(tsCfgAst, 'exclude');
            if (filesAstNode && filesAstNode.kind != 'array') {
                throw new schematics_1.SchematicsException('Invalid tsconfig "exclude" property; expected an array.');
            }
            if (filesAstNode && !filesAstNode.value.includes(workerGlob)) {
                const recorder = host.beginUpdate(tsConfigPath);
                json_utils_1.appendValueInAstArray(recorder, filesAstNode, workerGlob);
                host.commitUpdate(recorder);
            }
        }
        return schematics_1.mergeWith(schematics_1.apply(schematics_1.url('./files/worker-tsconfig'), [
            schematics_1.applyTemplates({
                ...options,
                relativePathToWorkspaceRoot: paths_1.relativePathToWorkspaceRoot(root),
            }),
            schematics_1.move(root),
        ]));
    };
}
function addSnippet(options) {
    return (host, context) => {
        context.logger.debug('Updating appmodule');
        if (options.path === undefined) {
            return;
        }
        const fileRegExp = new RegExp(`^${options.name}.*\.ts`);
        const siblingModules = host.getDir(options.path).subfiles
            // Find all files that start with the same name, are ts files,
            // and aren't spec or module files.
            .filter(f => fileRegExp.test(f) && !/(module|spec)\.ts$/.test(f))
            // Sort alphabetically for consistency.
            .sort();
        if (siblingModules.length === 0) {
            // No module to add in.
            return;
        }
        const siblingModulePath = `${options.path}/${siblingModules[0]}`;
        const logMessage = 'console.log(`page got message: ${data}`);';
        const workerCreationSnippet = core_1.tags.stripIndent `
      if (typeof Worker !== 'undefined') {
        // Create a new
        const worker = new Worker('./${options.name}.worker', { type: 'module' });
        worker.onmessage = ({ data }) => {
          ${logMessage}
        };
        worker.postMessage('hello');
      } else {
        // Web Workers are not supported in this environment.
        // You should add a fallback so that your program still executes correctly.
      }
    `;
        // Append the worker creation snippet.
        const originalContent = host.read(siblingModulePath);
        host.overwrite(siblingModulePath, originalContent + '\n' + workerCreationSnippet);
        return host;
    };
}
function default_1(options) {
    return async (host) => {
        const workspace = await workspace_1.getWorkspace(host);
        if (!options.project) {
            throw new schematics_1.SchematicsException('Option "project" is required.');
        }
        if (!options.target) {
            throw new schematics_1.SchematicsException('Option "target" is required.');
        }
        const project = workspace.projects.get(options.project);
        if (!project) {
            throw new schematics_1.SchematicsException(`Invalid project name (${options.project})`);
        }
        const projectType = project.extensions['projectType'];
        if (projectType !== 'application') {
            throw new schematics_1.SchematicsException(`Web Worker requires a project type of "application".`);
        }
        const projectTarget = project.targets.get(options.target);
        if (!projectTarget) {
            throw new Error(`Target is not defined for this project.`);
        }
        const projectTargetOptions = (projectTarget.options || {});
        if (options.path === undefined) {
            options.path = workspace_1.buildDefaultPath(project);
        }
        const parsedPath = parse_name_1.parseName(options.path, options.name);
        options.name = parsedPath.name;
        options.path = parsedPath.path;
        const root = project.root || '';
        const needWebWorkerConfig = !projectTargetOptions.webWorkerTsConfig;
        if (needWebWorkerConfig) {
            const workerConfigPath = core_1.join(core_1.normalize(root), 'tsconfig.worker.json');
            projectTargetOptions.webWorkerTsConfig = workerConfigPath;
            // add worker tsconfig to lint architect target
            const lintTarget = project.targets.get('lint');
            if (lintTarget) {
                const lintOptions = (lintTarget.options || {});
                lintOptions.tsConfig = (lintOptions.tsConfig || []).concat(workerConfigPath);
            }
        }
        const templateSource = schematics_1.apply(schematics_1.url('./files/worker'), [
            schematics_1.applyTemplates({ ...options, ...core_1.strings }),
            schematics_1.move(parsedPath.path),
        ]);
        return schematics_1.chain([
            // Add project configuration.
            needWebWorkerConfig ? addConfig(options, root, projectTargetOptions.tsConfig) : schematics_1.noop(),
            needWebWorkerConfig ? workspace_1.updateWorkspace(workspace) : schematics_1.noop(),
            // Create the worker in a sibling module.
            options.snippet ? addSnippet(options) : schematics_1.noop(),
            // Add the worker.
            schematics_1.mergeWith(templateSource),
        ]);
    };
}
exports.default = default_1;

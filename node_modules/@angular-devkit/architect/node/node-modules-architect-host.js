"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const v8 = require("v8");
const internal_1 = require("../src/internal");
function clone(obj) {
    const serialize = v8.serialize;
    const deserialize = v8.deserialize;
    try {
        return deserialize(serialize(obj));
    }
    catch (_a) {
        return JSON.parse(JSON.stringify(obj));
    }
}
// TODO: create a base class for all workspace related hosts.
class WorkspaceNodeModulesArchitectHost {
    constructor(_workspace, _root) {
        this._workspace = _workspace;
        this._root = _root;
    }
    async getBuilderNameForTarget(target) {
        const targetDefinition = this.findProjectTarget(target);
        if (!targetDefinition) {
            throw new Error('Project target does not exist.');
        }
        return targetDefinition.builder;
    }
    /**
     * Resolve a builder. This needs to be a string which will be used in a dynamic `import()`
     * clause. This should throw if no builder can be found. The dynamic import will throw if
     * it is unsupported.
     * @param builderStr The name of the builder to be used.
     * @returns All the info needed for the builder itself.
     */
    resolveBuilder(builderStr) {
        const [packageName, builderName] = builderStr.split(':', 2);
        if (!builderName) {
            throw new Error('No builder name specified.');
        }
        const packageJsonPath = require.resolve(packageName + '/package.json', {
            paths: [this._root],
        });
        const packageJson = require(packageJsonPath);
        if (!packageJson['builders']) {
            throw new Error(`Package ${JSON.stringify(packageName)} has no builders defined.`);
        }
        const builderJsonPath = path.resolve(path.dirname(packageJsonPath), packageJson['builders']);
        const builderJson = require(builderJsonPath);
        const builder = builderJson.builders && builderJson.builders[builderName];
        if (!builder) {
            throw new Error(`Cannot find builder ${JSON.stringify(builderStr)}.`);
        }
        const importPath = builder.implementation;
        if (!importPath) {
            throw new Error('Could not find the implementation for builder ' + builderStr);
        }
        return Promise.resolve({
            name: builderStr,
            builderName,
            description: builder['description'],
            optionSchema: require(path.resolve(path.dirname(builderJsonPath), builder.schema)),
            import: path.resolve(path.dirname(builderJsonPath), importPath),
        });
    }
    async getCurrentDirectory() {
        return process.cwd();
    }
    async getWorkspaceRoot() {
        return this._root;
    }
    async getOptionsForTarget(target) {
        const targetSpec = this.findProjectTarget(target);
        if (targetSpec === undefined) {
            return null;
        }
        let additionalOptions = {};
        if (target.configuration) {
            const configurations = target.configuration.split(',').map(c => c.trim());
            for (const configuration of configurations) {
                if (!(targetSpec['configurations'] && targetSpec['configurations'][configuration])) {
                    throw new Error(`Configuration '${configuration}' is not set in the workspace.`);
                }
                else {
                    additionalOptions = {
                        ...additionalOptions,
                        ...targetSpec['configurations'][configuration],
                    };
                }
            }
        }
        const options = {
            ...targetSpec['options'],
            ...additionalOptions,
        };
        return clone(options);
    }
    async getProjectMetadata(target) {
        const projectName = typeof target === 'string' ? target : target.project;
        const projectDefinition = this._workspace.projects.get(projectName);
        if (!projectDefinition) {
            throw new Error('Project does not exist.');
        }
        const metadata = {
            root: projectDefinition.root,
            sourceRoot: projectDefinition.sourceRoot,
            prefix: projectDefinition.prefix,
            ...clone(projectDefinition.extensions),
        };
        return metadata;
    }
    async loadBuilder(info) {
        const builder = (await Promise.resolve().then(() => require(info.import))).default;
        if (builder[internal_1.BuilderSymbol]) {
            return builder;
        }
        throw new Error('Builder is not a builder');
    }
    findProjectTarget(target) {
        const projectDefinition = this._workspace.projects.get(target.project);
        if (!projectDefinition) {
            throw new Error('Project does not exist.');
        }
        return projectDefinition.targets.get(target.target);
    }
}
exports.WorkspaceNodeModulesArchitectHost = WorkspaceNodeModulesArchitectHost;

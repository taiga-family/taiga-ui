"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dependencies_1 = require("../../utility/dependencies");
const json_utils_1 = require("../../utility/json-utils");
const workspace_models_1 = require("../../utility/workspace-models");
const utils_1 = require("./utils");
/**
 * Remove tsickle from libraries
 */
function removeTsickle() {
    return (tree, context) => {
        dependencies_1.removePackageJsonDependency(tree, 'tsickle');
        const logger = context.logger;
        const workspace = utils_1.getWorkspace(tree);
        for (const { target } of utils_1.getTargets(workspace, 'build', workspace_models_1.Builders.NgPackagr)) {
            for (const options of utils_1.getAllOptions(target)) {
                const tsConfigOption = json_utils_1.findPropertyInAstObject(options, 'tsConfig');
                if (!tsConfigOption || tsConfigOption.kind !== 'string') {
                    continue;
                }
                const tsConfigPath = tsConfigOption.value;
                const tsConfigAst = utils_1.readJsonFileAsAstObject(tree, tsConfigPath);
                if (!tsConfigAst) {
                    logger.warn(`Cannot find file: ${tsConfigPath}`);
                    continue;
                }
                const ngCompilerOptions = json_utils_1.findPropertyInAstObject(tsConfigAst, 'angularCompilerOptions');
                if (ngCompilerOptions && ngCompilerOptions.kind === 'object') {
                    // remove annotateForClosureCompiler option
                    const recorder = tree.beginUpdate(tsConfigPath);
                    json_utils_1.removePropertyInAstObject(recorder, ngCompilerOptions, 'annotateForClosureCompiler');
                    tree.commitUpdate(recorder);
                }
            }
        }
        return tree;
    };
}
exports.removeTsickle = removeTsickle;

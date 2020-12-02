"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const json_utils_1 = require("../../utility/json-utils");
const workspace_models_1 = require("../../utility/workspace-models");
const utils_1 = require("./utils");
/**
 * Update ngsw-config.json to fix issue https://github.com/angular/angular-cli/pull/15277
 */
function updateNGSWConfig() {
    return (tree, context) => {
        const workspace = utils_1.getWorkspace(tree);
        const logger = context.logger;
        for (const { target } of utils_1.getTargets(workspace, 'build', workspace_models_1.Builders.Browser)) {
            for (const options of utils_1.getAllOptions(target)) {
                const ngswConfigPath = json_utils_1.findPropertyInAstObject(options, 'ngswConfigPath');
                if (!ngswConfigPath || ngswConfigPath.kind !== 'string') {
                    continue;
                }
                const path = ngswConfigPath.value;
                const ngswConfigAst = utils_1.readJsonFileAsAstObject(tree, path);
                if (!ngswConfigAst || ngswConfigAst.kind !== 'object') {
                    logger.warn(`Cannot find file: ${ngswConfigPath}`);
                    continue;
                }
                const assetGroups = json_utils_1.findPropertyInAstObject(ngswConfigAst, 'assetGroups');
                if (!assetGroups || assetGroups.kind !== 'array') {
                    continue;
                }
                const prefetchElement = assetGroups.elements.find(element => {
                    const installMode = element.kind === 'object' && json_utils_1.findPropertyInAstObject(element, 'installMode');
                    return installMode && installMode.value === 'prefetch';
                });
                if (!prefetchElement || prefetchElement.kind !== 'object') {
                    continue;
                }
                const resources = json_utils_1.findPropertyInAstObject(prefetchElement, 'resources');
                if (!resources || resources.kind !== 'object') {
                    continue;
                }
                const files = json_utils_1.findPropertyInAstObject(resources, 'files');
                if (!files || files.kind !== 'array') {
                    continue;
                }
                const hasManifest = files.elements
                    .some(({ value }) => typeof value === 'string' && value.endsWith('manifest.webmanifest'));
                if (hasManifest) {
                    continue;
                }
                const recorder = tree.beginUpdate(path);
                json_utils_1.appendValueInAstArray(recorder, files, '/manifest.webmanifest', 10);
                tree.commitUpdate(recorder);
            }
        }
        return tree;
    };
}
exports.updateNGSWConfig = updateNGSWConfig;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("../../utility/config");
const json_utils_1 = require("../../utility/json-utils");
const workspace_models_1 = require("../../utility/workspace-models");
const utils_1 = require("./utils");
exports.ANY_COMPONENT_STYLE_BUDGET = {
    type: 'anyComponentStyle',
    maximumWarning: '6kb',
};
function updateWorkspaceConfig() {
    return (tree, context) => {
        const workspacePath = config_1.getWorkspacePath(tree);
        const workspace = utils_1.getWorkspace(tree);
        const recorder = tree.beginUpdate(workspacePath);
        for (const { target } of utils_1.getTargets(workspace, 'build', workspace_models_1.Builders.Browser)) {
            updateStyleOrScriptOption('styles', recorder, target);
            updateStyleOrScriptOption('scripts', recorder, target);
            addAnyComponentStyleBudget(recorder, target);
            updateAotOption(tree, recorder, target);
        }
        for (const { target } of utils_1.getTargets(workspace, 'test', workspace_models_1.Builders.Karma)) {
            updateStyleOrScriptOption('styles', recorder, target);
            updateStyleOrScriptOption('scripts', recorder, target);
        }
        for (const { target } of utils_1.getTargets(workspace, 'server', workspace_models_1.Builders.Server)) {
            updateOptimizationOption(recorder, target);
        }
        tree.commitUpdate(recorder);
        return tree;
    };
}
exports.updateWorkspaceConfig = updateWorkspaceConfig;
function updateAotOption(tree, recorder, builderConfig) {
    const options = json_utils_1.findPropertyInAstObject(builderConfig, 'options');
    if (!options || options.kind !== 'object') {
        return;
    }
    const tsConfig = json_utils_1.findPropertyInAstObject(options, 'tsConfig');
    // Do not add aot option if the users already opted out from Ivy.
    if (tsConfig && tsConfig.kind === 'string' && !utils_1.isIvyEnabled(tree, tsConfig.value)) {
        return;
    }
    // Add aot to options.
    const aotOption = json_utils_1.findPropertyInAstObject(options, 'aot');
    if (!aotOption) {
        json_utils_1.insertPropertyInAstObjectInOrder(recorder, options, 'aot', true, 12);
        return;
    }
    if (aotOption.kind !== 'true') {
        const { start, end } = aotOption;
        recorder.remove(start.offset, end.offset - start.offset);
        recorder.insertLeft(start.offset, 'true');
    }
    // Remove aot properties from other configurations as they are no redundant
    const configOptions = utils_1.getAllOptions(builderConfig, true);
    for (const options of configOptions) {
        json_utils_1.removePropertyInAstObject(recorder, options, 'aot');
    }
}
function updateStyleOrScriptOption(property, recorder, builderConfig) {
    const options = utils_1.getAllOptions(builderConfig);
    for (const option of options) {
        const propertyOption = json_utils_1.findPropertyInAstObject(option, property);
        if (!propertyOption || propertyOption.kind !== 'array') {
            continue;
        }
        for (const node of propertyOption.elements) {
            if (!node || node.kind !== 'object') {
                // skip non complex objects
                continue;
            }
            const lazy = json_utils_1.findPropertyInAstObject(node, 'lazy');
            json_utils_1.removePropertyInAstObject(recorder, node, 'lazy');
            // if lazy was not true, it is redundant hence, don't add it
            if (lazy && lazy.kind === 'true') {
                json_utils_1.insertPropertyInAstObjectInOrder(recorder, node, 'inject', false, 0);
            }
        }
    }
}
function addAnyComponentStyleBudget(recorder, builderConfig) {
    const options = utils_1.getAllOptions(builderConfig, true);
    for (const option of options) {
        const budgetOption = json_utils_1.findPropertyInAstObject(option, 'budgets');
        if (!budgetOption) {
            // add
            json_utils_1.insertPropertyInAstObjectInOrder(recorder, option, 'budgets', [exports.ANY_COMPONENT_STYLE_BUDGET], 14);
            continue;
        }
        if (budgetOption.kind !== 'array') {
            continue;
        }
        // if 'anyComponentStyle' budget already exists don't add.
        const hasAnyComponentStyle = budgetOption.elements.some(node => {
            if (!node || node.kind !== 'object') {
                // skip non complex objects
                return false;
            }
            const budget = json_utils_1.findPropertyInAstObject(node, 'type');
            return !!budget && budget.kind === 'string' && budget.value === 'anyComponentStyle';
        });
        if (!hasAnyComponentStyle) {
            json_utils_1.appendValueInAstArray(recorder, budgetOption, exports.ANY_COMPONENT_STYLE_BUDGET, 16);
        }
    }
}
function updateOptimizationOption(recorder, builderConfig) {
    const options = utils_1.getAllOptions(builderConfig, true);
    for (const option of options) {
        const optimizationOption = json_utils_1.findPropertyInAstObject(option, 'optimization');
        if (!optimizationOption) {
            // add
            json_utils_1.insertPropertyInAstObjectInOrder(recorder, option, 'optimization', true, 14);
            continue;
        }
        if (optimizationOption.kind !== 'true') {
            const { start, end } = optimizationOption;
            recorder.remove(start.offset, end.offset - start.offset);
            recorder.insertLeft(start.offset, 'true');
        }
    }
}

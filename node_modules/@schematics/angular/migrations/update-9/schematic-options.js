"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("../../utility/config");
const json_utils_1 = require("../../utility/json-utils");
const utils_1 = require("./utils");
function default_1() {
    return tree => {
        const workspacePath = config_1.getWorkspacePath(tree);
        const workspace = utils_1.getWorkspace(tree);
        const recorder = tree.beginUpdate(workspacePath);
        const rootSchematics = findSchematicsField(workspace);
        if (rootSchematics) {
            updateSchematicsField(rootSchematics, recorder);
        }
        const projects = json_utils_1.findPropertyInAstObject(workspace, 'projects');
        if (!projects || projects.kind !== 'object' || !projects.properties) {
            return;
        }
        for (const { value } of projects.properties) {
            if (value.kind !== 'object') {
                continue;
            }
            const projectSchematics = findSchematicsField(value);
            if (!projectSchematics) {
                continue;
            }
            updateSchematicsField(projectSchematics, recorder);
        }
        tree.commitUpdate(recorder);
        return tree;
    };
}
exports.default = default_1;
function findSchematicsField(value) {
    const schematics = json_utils_1.findPropertyInAstObject(value, 'schematics');
    if (schematics && schematics.kind == 'object') {
        return schematics;
    }
    return null;
}
function updateSchematicsField(schematics, recorder) {
    for (const { key: { value: schematicName }, value: schematicValue, } of schematics.properties) {
        if (schematicValue.kind !== 'object') {
            continue;
        }
        if (!schematicName.startsWith('@schematics/angular:')) {
            continue;
        }
        for (const { key: optionKey, value: optionValue } of schematicValue.properties) {
            if (optionKey.value === 'styleext') {
                // Rename `styleext` to `style
                const offset = optionKey.start.offset + 1;
                recorder.remove(offset, optionKey.value.length);
                recorder.insertLeft(offset, 'style');
            }
            else if (optionKey.value === 'spec') {
                // Rename `spec` to `skipTests`
                const offset = optionKey.start.offset + 1;
                recorder.remove(offset, optionKey.value.length);
                recorder.insertLeft(offset, 'skipTests');
                // invert value
                const { start, end } = optionValue;
                recorder.remove(start.offset, end.offset - start.offset);
                recorder.insertLeft(start.offset, `${!optionValue.value}`);
            }
        }
    }
}

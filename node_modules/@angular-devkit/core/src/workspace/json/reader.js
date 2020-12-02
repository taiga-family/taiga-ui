"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const json_1 = require("../../json");
const definitions_1 = require("../definitions");
const metadata_1 = require("./metadata");
const utilities_1 = require("./utilities");
async function readJsonWorkspace(path, host) {
    const raw = await host.readFile(path);
    if (raw === undefined) {
        throw new Error('Unable to read workspace file.');
    }
    const ast = json_1.parseJsonAst(raw, json_1.JsonParseMode.Loose);
    if (ast.kind !== 'object') {
        throw new Error('Invalid workspace file - expected JSON object.');
    }
    // Version check
    const versionNode = ast.properties.find(pair => pair.key.value === 'version');
    if (!versionNode) {
        throw new Error('Unknown format - version specifier not found.');
    }
    const formatVersion = versionNode.value.value;
    if (formatVersion !== 1) {
        throw new Error(`Invalid format version detected - Expected:[ 1 ] Found: [ ${formatVersion} ]`);
    }
    const context = {
        host,
        metadata: new metadata_1.JsonWorkspaceMetadata(path, ast, raw),
        trackChanges: true,
        error(message, _node) {
            // TODO: Diagnostic reporting support
            throw new Error(message);
        },
        warn(_message, _node) {
            // TODO: Diagnostic reporting support
        },
    };
    const workspace = parseWorkspace(ast, context);
    return workspace;
}
exports.readJsonWorkspace = readJsonWorkspace;
const specialWorkspaceExtensions = ['cli', 'defaultProject', 'newProjectRoot', 'schematics'];
const specialProjectExtensions = ['cli', 'schematics', 'projectType'];
function parseWorkspace(workspaceNode, context) {
    const jsonMetadata = context.metadata;
    let projects;
    let projectsNode;
    let extensions;
    if (!context.trackChanges) {
        extensions = Object.create(null);
    }
    for (const { key, value } of workspaceNode.properties) {
        const name = key.value;
        if (name === '$schema' || name === 'version') {
            // skip
        }
        else if (name === 'projects') {
            if (value.kind !== 'object') {
                context.error('Invalid "projects" field found; expected an object.', value);
                continue;
            }
            projectsNode = value;
            projects = parseProjectsObject(value, context);
        }
        else {
            if (!specialWorkspaceExtensions.includes(name) && !/^[a-z]{1,3}-.*/.test(name)) {
                context.warn(`Project extension with invalid name found.`, key);
            }
            if (extensions) {
                extensions[name] = value.value;
            }
        }
    }
    let collectionListener;
    if (context.trackChanges && projectsNode) {
        const parentNode = projectsNode;
        collectionListener = (name, action, newValue) => {
            jsonMetadata.addChange(action, `/projects/${utilities_1.escapeKey(name)}`, parentNode, newValue, 'project');
        };
    }
    const projectCollection = new definitions_1.ProjectDefinitionCollection(projects, collectionListener);
    return {
        [metadata_1.JsonWorkspaceSymbol]: jsonMetadata,
        projects: projectCollection,
        // If not tracking changes the `extensions` variable will contain the parsed
        // values.  Otherwise the extensions are tracked via a virtual AST object.
        extensions: extensions ||
            utilities_1.createVirtualAstObject(workspaceNode, {
                exclude: ['$schema', 'version', 'projects'],
                listener(op, path, node, value) {
                    jsonMetadata.addChange(op, path, node, value);
                },
            }),
    };
}
function parseProjectsObject(projectsNode, context) {
    const projects = Object.create(null);
    for (const { key, value } of projectsNode.properties) {
        if (value.kind !== 'object') {
            context.warn('Skipping invalid project value; expected an object.', value);
            continue;
        }
        const name = key.value;
        projects[name] = parseProject(name, value, context);
    }
    return projects;
}
function parseProject(projectName, projectNode, context) {
    const jsonMetadata = context.metadata;
    let targets;
    let targetsNode;
    let extensions;
    let properties;
    if (!context.trackChanges) {
        // If not tracking changes, the parser will store the values directly in standard objects
        extensions = Object.create(null);
        properties = Object.create(null);
    }
    for (const { key, value } of projectNode.properties) {
        const name = key.value;
        switch (name) {
            case 'targets':
            case 'architect':
                if (value.kind !== 'object') {
                    context.error(`Invalid "${name}" field found; expected an object.`, value);
                    break;
                }
                targetsNode = value;
                targets = parseTargetsObject(projectName, value, context);
                break;
            case 'prefix':
            case 'root':
            case 'sourceRoot':
                if (value.kind !== 'string') {
                    context.warn(`Project property "${name}" should be a string.`, value);
                }
                if (properties) {
                    properties[name] = value.value;
                }
                break;
            default:
                if (!specialProjectExtensions.includes(name) && !/^[a-z]{1,3}-.*/.test(name)) {
                    context.warn(`Project extension with invalid name found.`, key);
                }
                if (extensions) {
                    extensions[name] = value.value;
                }
                break;
        }
    }
    let collectionListener;
    if (context.trackChanges) {
        if (targetsNode) {
            const parentNode = targetsNode;
            collectionListener = (name, action, newValue) => {
                jsonMetadata.addChange(action, `/projects/${projectName}/targets/${utilities_1.escapeKey(name)}`, parentNode, newValue, 'target');
            };
        }
        else {
            let added = false;
            collectionListener = (_name, action, _new, _old, collection) => {
                if (added || action !== 'add') {
                    return;
                }
                jsonMetadata.addChange('add', `/projects/${projectName}/targets`, projectNode, collection, 'targetcollection');
                added = true;
            };
        }
    }
    const base = {
        targets: new definitions_1.TargetDefinitionCollection(targets, collectionListener),
        // If not tracking changes the `extensions` variable will contain the parsed
        // values.  Otherwise the extensions are tracked via a virtual AST object.
        extensions: extensions ||
            utilities_1.createVirtualAstObject(projectNode, {
                exclude: ['architect', 'prefix', 'root', 'sourceRoot', 'targets'],
                listener(op, path, node, value) {
                    jsonMetadata.addChange(op, `/projects/${projectName}${path}`, node, value);
                },
            }),
    };
    let project;
    if (context.trackChanges) {
        project = utilities_1.createVirtualAstObject(projectNode, {
            base,
            include: ['prefix', 'root', 'sourceRoot'],
            listener(op, path, node, value) {
                jsonMetadata.addChange(op, `/projects/${projectName}${path}`, node, value);
            },
        });
    }
    else {
        project = {
            ...base,
            ...properties,
        };
    }
    return project;
}
function parseTargetsObject(projectName, targetsNode, context) {
    const jsonMetadata = context.metadata;
    const targets = Object.create(null);
    for (const { key, value } of targetsNode.properties) {
        if (value.kind !== 'object') {
            context.warn('Skipping invalid target value; expected an object.', value);
            continue;
        }
        const name = key.value;
        if (context.trackChanges) {
            targets[name] = utilities_1.createVirtualAstObject(value, {
                include: ['builder', 'options', 'configurations'],
                listener(op, path, node, value) {
                    jsonMetadata.addChange(op, `/projects/${projectName}/targets/${name}${path}`, node, value);
                },
            });
        }
        else {
            targets[name] = value.value;
        }
    }
    return targets;
}

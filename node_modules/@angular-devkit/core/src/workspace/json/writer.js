"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const magic_string_1 = require("magic-string");
const metadata_1 = require("./metadata");
const utilities_1 = require("./utilities");
async function writeJsonWorkspace(workspace, host, path, options = {}) {
    const metadata = workspace[metadata_1.JsonWorkspaceSymbol];
    if (metadata) {
        if (!metadata.hasChanges) {
            // nothing to do
            return;
        }
        // update existing JSON workspace
        const data = updateJsonWorkspace(metadata);
        return host.writeFile(path || metadata.filePath, data);
    }
    else {
        // serialize directly
        if (!path) {
            throw new Error('path option is required');
        }
        const obj = convertJsonWorkspace(workspace, options.schema);
        const data = JSON.stringify(obj, null, 2);
        return host.writeFile(path, data);
    }
}
exports.writeJsonWorkspace = writeJsonWorkspace;
function convertJsonWorkspace(workspace, schema) {
    const obj = {
        $schema: schema || './node_modules/@angular/cli/lib/config/schema.json',
        version: 1,
        ...workspace.extensions,
        projects: workspace.projects ? convertJsonProjectCollection(workspace.projects) : {},
    };
    return obj;
}
function convertJsonProjectCollection(collection) {
    const projects = Object.create(null);
    for (const [projectName, project] of collection) {
        projects[projectName] = convertJsonProject(project);
    }
    return projects;
}
function convertJsonProject(project) {
    let targets;
    if (project.targets.size > 0) {
        targets = Object.create(null);
        for (const [targetName, target] of project.targets) {
            targets[targetName] = convertJsonTarget(target);
        }
    }
    const obj = {
        ...project.extensions,
        root: project.root,
        ...(project.sourceRoot === undefined ? {} : { sourceRoot: project.sourceRoot }),
        ...(project.prefix === undefined ? {} : { prefix: project.prefix }),
        ...(targets === undefined ? {} : { architect: targets }),
    };
    return obj;
}
function isEmpty(obj) {
    return obj === undefined || Object.keys(obj).length === 0;
}
function convertJsonTarget(target) {
    return {
        builder: target.builder,
        ...(isEmpty(target.options) ? {} : { options: target.options }),
        ...(isEmpty(target.configurations)
            ? {}
            : { configurations: target.configurations }),
    };
}
function convertJsonTargetCollection(collection) {
    const targets = Object.create(null);
    for (const [projectName, target] of collection) {
        targets[projectName] = convertJsonTarget(target);
    }
    return targets;
}
function findFullStart(node, raw) {
    let i = node.start.offset;
    while (i > 0 && /\s/.test(raw[i - 1])) {
        --i;
    }
    return i;
}
function findFullEnd(node, raw) {
    let i = node.end.offset;
    if (i >= raw.length) {
        return raw.length;
    }
    else if (raw[i] === ',') {
        return i + 1;
    }
    while (i > node.start.offset && /\s/.test(raw[i - 1])) {
        --i;
    }
    return i;
}
function findPrecedingComma(node, raw) {
    let i = node.start.offset;
    if (node.comments && node.comments.length > 0) {
        i = node.comments[0].start.offset;
    }
    while (i > 0 && /\s/.test(raw[i - 1])) {
        --i;
    }
    if (raw[i - 1] === ',') {
        return i - 1;
    }
    return -1;
}
function stringify(value, multiline, depth, indent) {
    if (value === undefined) {
        return '';
    }
    if (multiline) {
        const content = JSON.stringify(value, null, indent);
        const spacing = '\n' + indent.repeat(depth);
        return content.replace(/\n/g, spacing);
    }
    else {
        return JSON.stringify(value);
    }
}
function normalizeValue(value, type) {
    switch (type) {
        case 'project':
            return convertJsonProject(value);
        case 'projectcollection':
            const projects = convertJsonProjectCollection(value);
            return Object.keys(projects).length === 0 ? undefined : projects;
        case 'target':
            return convertJsonTarget(value);
        case 'targetcollection':
            const targets = convertJsonTargetCollection(value);
            return Object.keys(targets).length === 0 ? undefined : targets;
        default:
            return value;
    }
}
function updateJsonWorkspace(metadata) {
    const data = new magic_string_1.default(metadata.raw);
    const indent = data.getIndentString();
    const removedCommas = new Set();
    const nodeChanges = new Map();
    for (const { op, path, node, value, type } of metadata.changes) {
        // targets/projects are typically large objects so always use multiline
        const multiline = node.start.line !== node.end.line || type !== 'json';
        const pathSegments = path.split('/');
        const depth = pathSegments.length - 1; // TODO: more complete analysis
        const propertyOrIndex = utilities_1.unescapeKey(pathSegments[depth]);
        const jsonValue = normalizeValue(value, type);
        if (op === 'add' && jsonValue === undefined) {
            continue;
        }
        // Track changes to the order/size of any modified objects/arrays
        let elements = nodeChanges.get(node);
        if (!elements) {
            if (node.kind === 'array') {
                elements = node.elements.slice();
                nodeChanges.set(node, elements);
            }
            else if (node.kind === 'object') {
                elements = node.properties.slice();
                nodeChanges.set(node, elements);
            }
            else {
                // keyvalue
                elements = [];
            }
        }
        switch (op) {
            case 'add':
                let contentPrefix = '';
                if (node.kind === 'object') {
                    contentPrefix = `"${propertyOrIndex}": `;
                }
                const spacing = multiline ? '\n' + indent.repeat(depth) : ' ';
                const content = spacing + contentPrefix + stringify(jsonValue, multiline, depth, indent);
                // Additions are handled after analyzing all operations
                // This is mainly to support array operations which can occur at arbitrary indices
                if (node.kind === 'object') {
                    // Object property additions are always added at the end for simplicity
                    elements.push(content);
                }
                else {
                    // Add place holders if adding an index past the length
                    // An empty string is an impossible real value
                    for (let i = elements.length; i < +propertyOrIndex; ++i) {
                        elements[i] = '';
                    }
                    if (elements[+propertyOrIndex] === '') {
                        elements[+propertyOrIndex] = content;
                    }
                    else {
                        elements.splice(+propertyOrIndex, 0, content);
                    }
                }
                break;
            case 'remove':
                let removalIndex = -1;
                if (node.kind === 'object') {
                    removalIndex = elements.findIndex(e => {
                        return typeof e != 'string' && e.kind === 'keyvalue' && e.key.value === propertyOrIndex;
                    });
                }
                else if (node.kind === 'array') {
                    removalIndex = +propertyOrIndex;
                }
                if (removalIndex === -1) {
                    continue;
                }
                const nodeToRemove = elements[removalIndex];
                if (typeof nodeToRemove === 'string') {
                    // synthetic
                    elements.splice(removalIndex, 1);
                    continue;
                }
                if (elements.length - 1 === removalIndex) {
                    // If the element is a terminal element remove the otherwise trailing comma
                    const commaIndex = findPrecedingComma(nodeToRemove, data.original);
                    if (commaIndex !== -1) {
                        data.remove(commaIndex, commaIndex + 1);
                        removedCommas.add(commaIndex);
                    }
                }
                data.remove(findFullStart(nodeToRemove, data.original), findFullEnd(nodeToRemove, data.original));
                elements.splice(removalIndex, 1);
                break;
            case 'replace':
                let nodeToReplace;
                if (node.kind === 'keyvalue') {
                    nodeToReplace = node.value;
                }
                else if (node.kind === 'array') {
                    nodeToReplace = elements[+propertyOrIndex];
                    if (typeof nodeToReplace === 'string') {
                        // Was already modified. This is already handled.
                        continue;
                    }
                }
                else {
                    continue;
                }
                nodeChanges.delete(nodeToReplace);
                data.overwrite(nodeToReplace.start.offset, nodeToReplace.end.offset, stringify(jsonValue, multiline, depth, indent));
                break;
        }
    }
    for (const [node, elements] of nodeChanges.entries()) {
        let parentPoint = 1 + data.original.indexOf(node.kind === 'array' ? '[' : '{', node.start.offset);
        // Short-circuit for simple case
        if (elements.length === 1 && typeof elements[0] === 'string') {
            data.appendRight(parentPoint, elements[0]);
            continue;
        }
        // Combine adjecent element additions to minimize/simplify insertions
        const optimizedElements = [];
        for (let i = 0; i < elements.length; ++i) {
            const element = elements[i];
            if (typeof element === 'string' && i > 0 && typeof elements[i - 1] === 'string') {
                optimizedElements[optimizedElements.length - 1] += ',' + element;
            }
            else {
                optimizedElements.push(element);
            }
        }
        let prefixComma = false;
        for (const element of optimizedElements) {
            if (typeof element === 'string') {
                data.appendRight(parentPoint, (prefixComma ? ',' : '') + element);
            }
            else {
                parentPoint = findFullEnd(element, data.original);
                prefixComma = data.original[parentPoint - 1] !== ',' || removedCommas.has(parentPoint - 1);
            }
        }
    }
    const result = data.toString();
    return result;
}

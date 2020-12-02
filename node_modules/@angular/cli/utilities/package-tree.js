"use strict";
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
Object.defineProperty(exports, "__esModule", { value: true });
function readPackageTree(path) {
    const rpt = require('read-package-tree');
    return new Promise((resolve, reject) => {
        rpt(path, (e, data) => {
            if (e) {
                reject(e);
            }
            else {
                resolve(data);
            }
        });
    });
}
exports.readPackageTree = readPackageTree;
function findNodeDependencies(node) {
    const rawDeps = {
        ...node.package.dependencies,
        ...node.package.devDependencies,
        ...node.package.peerDependencies,
        ...node.package.optionalDependencies,
    };
    return Object.entries(rawDeps).reduce((deps, [name, version]) => {
        let dependencyNode;
        let parent = node;
        while (!dependencyNode && parent) {
            dependencyNode = parent.children.find(child => child.name === name);
            parent = parent.parent;
        }
        deps[name] = {
            node: dependencyNode,
            version,
        };
        return deps;
    }, Object.create(null));
}
exports.findNodeDependencies = findNodeDependencies;

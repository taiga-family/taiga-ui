"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const fs_1 = require("fs");
const path = require("path");
const is_directory_1 = require("./is-directory");
function findUp(names, from, stopOnNodeModules = false) {
    if (!Array.isArray(names)) {
        names = [names];
    }
    const root = path.parse(from).root;
    let currentDir = from;
    while (currentDir && currentDir !== root) {
        for (const name of names) {
            const p = path.join(currentDir, name);
            if (fs_1.existsSync(p)) {
                return p;
            }
        }
        if (stopOnNodeModules) {
            const nodeModuleP = path.join(currentDir, 'node_modules');
            if (fs_1.existsSync(nodeModuleP)) {
                return null;
            }
        }
        currentDir = path.dirname(currentDir);
    }
    return null;
}
exports.findUp = findUp;
function findAllNodeModules(from, root) {
    const nodeModules = [];
    let current = from;
    while (current && current !== root) {
        const potential = path.join(current, 'node_modules');
        if (fs_1.existsSync(potential) && is_directory_1.isDirectory(potential)) {
            nodeModules.push(potential);
        }
        const next = path.dirname(current);
        if (next === current) {
            break;
        }
        current = next;
    }
    return nodeModules;
}
exports.findAllNodeModules = findAllNodeModules;

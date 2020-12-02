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
const json_utils_1 = require("./json-utils");
const pkgJsonPath = '/package.json';
var NodeDependencyType;
(function (NodeDependencyType) {
    NodeDependencyType["Default"] = "dependencies";
    NodeDependencyType["Dev"] = "devDependencies";
    NodeDependencyType["Peer"] = "peerDependencies";
    NodeDependencyType["Optional"] = "optionalDependencies";
})(NodeDependencyType = exports.NodeDependencyType || (exports.NodeDependencyType = {}));
function addPackageJsonDependency(tree, dependency) {
    const packageJsonAst = _readPackageJson(tree);
    const depsNode = json_utils_1.findPropertyInAstObject(packageJsonAst, dependency.type);
    const recorder = tree.beginUpdate(pkgJsonPath);
    if (!depsNode) {
        // Haven't found the dependencies key, add it to the root of the package.json.
        json_utils_1.appendPropertyInAstObject(recorder, packageJsonAst, dependency.type, {
            [dependency.name]: dependency.version,
        }, 2);
    }
    else if (depsNode.kind === 'object') {
        // check if package already added
        const depNode = json_utils_1.findPropertyInAstObject(depsNode, dependency.name);
        if (!depNode) {
            // Package not found, add it.
            json_utils_1.insertPropertyInAstObjectInOrder(recorder, depsNode, dependency.name, dependency.version, 4);
        }
        else if (dependency.overwrite) {
            // Package found, update version if overwrite.
            const { end, start } = depNode;
            recorder.remove(start.offset, end.offset - start.offset);
            recorder.insertRight(start.offset, JSON.stringify(dependency.version));
        }
    }
    tree.commitUpdate(recorder);
}
exports.addPackageJsonDependency = addPackageJsonDependency;
function removePackageJsonDependency(tree, name) {
    const packageJson = _readPackageJson(tree);
    const recorder = tree.beginUpdate(pkgJsonPath);
    [
        NodeDependencyType.Default,
        NodeDependencyType.Dev,
        NodeDependencyType.Optional,
        NodeDependencyType.Peer,
    ].forEach(depType => {
        const depsNode = json_utils_1.findPropertyInAstObject(packageJson, depType);
        if (depsNode !== null && depsNode.kind === 'object') {
            json_utils_1.removePropertyInAstObject(recorder, depsNode, name);
        }
    });
    tree.commitUpdate(recorder);
}
exports.removePackageJsonDependency = removePackageJsonDependency;
function getPackageJsonDependency(tree, name) {
    const packageJson = _readPackageJson(tree);
    let dep = null;
    [
        NodeDependencyType.Default,
        NodeDependencyType.Dev,
        NodeDependencyType.Optional,
        NodeDependencyType.Peer,
    ].forEach(depType => {
        if (dep !== null) {
            return;
        }
        const depsNode = json_utils_1.findPropertyInAstObject(packageJson, depType);
        if (depsNode !== null && depsNode.kind === 'object') {
            const depNode = json_utils_1.findPropertyInAstObject(depsNode, name);
            if (depNode !== null && depNode.kind === 'string') {
                const version = depNode.value;
                dep = {
                    type: depType,
                    name: name,
                    version: version,
                };
            }
        }
    });
    return dep;
}
exports.getPackageJsonDependency = getPackageJsonDependency;
function _readPackageJson(tree) {
    const buffer = tree.read(pkgJsonPath);
    if (buffer === null) {
        throw new schematics_1.SchematicsException('Could not read package.json.');
    }
    const content = buffer.toString();
    const packageJson = core_1.parseJsonAst(content, core_1.JsonParseMode.Strict);
    if (packageJson.kind != 'object') {
        throw new schematics_1.SchematicsException('Invalid package.json. Was expecting an object');
    }
    return packageJson;
}

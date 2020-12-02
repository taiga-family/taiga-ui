"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const path = require("path");
const ts = require("typescript");
const utils_1 = require("./utils");
/**
 * Find all nodes from the AST in the subtree of node of SyntaxKind kind.
 * @param node The root node to check, or null if the whole tree should be searched.
 * @param sourceFile The source file where the node is.
 * @param kind The kind of nodes to find.
 * @param recursive Whether to go in matched nodes to keep matching.
 * @param max The maximum number of items to return.
 * @return all nodes of kind, or [] if none is found
 */
// TODO: replace this with collectDeepNodes and add limits to collectDeepNodes
function findAstNodes(node, sourceFile, kind, recursive = false, max = Infinity) {
    // TODO: refactor operations that only need `refactor.findAstNodes()` to use this instead.
    if (max == 0) {
        return [];
    }
    if (!node) {
        node = sourceFile;
    }
    const arr = [];
    if (node.kind === kind) {
        // If we're not recursively looking for children, stop here.
        if (!recursive) {
            return [node];
        }
        arr.push(node);
        max--;
    }
    if (max > 0) {
        for (const child of node.getChildren(sourceFile)) {
            findAstNodes(child, sourceFile, kind, recursive, max)
                .forEach((node) => {
                if (max > 0) {
                    arr.push(node);
                }
                max--;
            });
            if (max <= 0) {
                break;
            }
        }
    }
    return arr;
}
exports.findAstNodes = findAstNodes;
function resolve(filePath, _host, compilerOptions) {
    if (path.isAbsolute(filePath)) {
        return filePath;
    }
    const basePath = compilerOptions.baseUrl || compilerOptions.rootDir;
    if (!basePath) {
        throw new Error(`Trying to resolve '${filePath}' without a basePath.`);
    }
    return path.join(basePath, filePath);
}
exports.resolve = resolve;
class TypeScriptFileRefactor {
    constructor(fileName, _host, _program, source) {
        let sourceFile = null;
        if (_program) {
            fileName = utils_1.forwardSlashPath(resolve(fileName, _host, _program.getCompilerOptions()));
            this._fileName = fileName;
            if (source) {
                sourceFile = ts.createSourceFile(fileName, source, ts.ScriptTarget.Latest, true);
            }
            else {
                sourceFile = _program.getSourceFile(fileName) || null;
            }
        }
        if (!sourceFile) {
            const maybeContent = source || _host.readFile(fileName);
            if (maybeContent) {
                sourceFile = ts.createSourceFile(fileName, maybeContent, ts.ScriptTarget.Latest, true);
            }
        }
        if (!sourceFile) {
            throw new Error('Must have a source file to refactor.');
        }
        this._sourceFile = sourceFile;
    }
    get fileName() { return this._fileName; }
    get sourceFile() { return this._sourceFile; }
    /**
     * Find all nodes from the AST in the subtree of node of SyntaxKind kind.
     * @param node The root node to check, or null if the whole tree should be searched.
     * @param kind The kind of nodes to find.
     * @param recursive Whether to go in matched nodes to keep matching.
     * @param max The maximum number of items to return.
     * @return all nodes of kind, or [] if none is found
     */
    findAstNodes(node, kind, recursive = false, max = Infinity) {
        return findAstNodes(node, this._sourceFile, kind, recursive, max);
    }
}
exports.TypeScriptFileRefactor = TypeScriptFileRefactor;

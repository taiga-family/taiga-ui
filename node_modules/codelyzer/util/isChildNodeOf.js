"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var compiler_1 = require("@angular/compiler");
exports.isChildNodeOf = function (root, childNodeName) {
    var traverseChildNodes = function (node) {
        return node.children.some(function (childNode) {
            return childNode instanceof compiler_1.ElementAst && (childNode.name === childNodeName || traverseChildNodes(childNode));
        });
    };
    return traverseChildNodes(root);
};

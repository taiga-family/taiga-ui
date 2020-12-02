"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var traverse_1 = require("../traverse");
// Constants:
var CLASS_MATCHERS = {
    declaration: declaration,
    expression: expression,
    'function': fn,
    pattern: pattern,
    statement: statement
};
function classs(node, selector, ancestry, options) {
    if (!traverse_1.getProperties(node).kindName) {
        return false;
    }
    var matcher = CLASS_MATCHERS[selector.name.toLowerCase()];
    if (matcher) {
        return matcher(node, selector, ancestry, options);
    }
    throw new Error("Unknown class name: " + selector.name);
}
exports.classs = classs;
function declaration(node) {
    return traverse_1.getProperties(node).kindName.endsWith('Declaration');
}
function expression(node) {
    var kindName = traverse_1.getProperties(node).kindName;
    return kindName.endsWith('Expression') ||
        kindName.endsWith('Literal') ||
        (kindName === 'Identifier' && !!node.parent && traverse_1.getProperties(node.parent).kindName !== 'MetaProperty') ||
        kindName === 'MetaProperty';
}
function fn(node) {
    var kindName = traverse_1.getProperties(node).kindName;
    return kindName.startsWith('Function') ||
        kindName === 'ArrowFunction';
}
function pattern(node) {
    return traverse_1.getProperties(node).kindName.endsWith('Pattern') || expression(node);
}
function statement(node) {
    return traverse_1.getProperties(node).kindName.endsWith('Statement') || declaration(node);
}
//# sourceMappingURL=class.js.map
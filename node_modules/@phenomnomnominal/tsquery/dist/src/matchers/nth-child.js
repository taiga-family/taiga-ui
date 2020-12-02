"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var match_1 = require("../match");
var traverse_1 = require("../traverse");
function nthChild(node, selector, ancestry) {
    return match_1.findMatches(node, selector.right, ancestry) &&
        findNthChild(node, ancestry, function () { return selector.index.value - 1; });
}
exports.nthChild = nthChild;
function nthLastChild(node, selector, ancestry) {
    return match_1.findMatches(node, selector.right, ancestry) &&
        findNthChild(node, ancestry, function (length) { return length - selector.index.value; });
}
exports.nthLastChild = nthLastChild;
function findNthChild(node, ancestry, getIndex) {
    var parent = ancestry[0];
    if (!parent) {
        return false;
    }
    var keys = traverse_1.getVisitorKeys(node.parent || null);
    return keys.some(function (key) {
        var prop = node.parent[key];
        if (Array.isArray(prop)) {
            var index = prop.indexOf(node);
            return index >= 0 && index === getIndex(prop.length);
        }
        return false;
    });
}
//# sourceMappingURL=nth-child.js.map
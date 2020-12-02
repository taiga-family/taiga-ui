"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var match_1 = require("../match");
var traverse_1 = require("../traverse");
function sibling(node, selector, ancestry) {
    return match_1.findMatches(node, selector.right, ancestry) &&
        findSibling(node, ancestry, siblingLeft) ||
        selector.left.subject &&
            match_1.findMatches(node, selector.left, ancestry) &&
            findSibling(node, ancestry, siblingRight);
    function siblingLeft(prop, index) {
        return prop.slice(0, index).some(function (precedingSibling) {
            return match_1.findMatches(precedingSibling, selector.left, ancestry);
        });
    }
    function siblingRight(prop, index) {
        return prop.slice(index, prop.length).some(function (followingSibling) {
            return match_1.findMatches(followingSibling, selector.right, ancestry);
        });
    }
}
exports.sibling = sibling;
function adjacent(node, selector, ancestry) {
    return match_1.findMatches(node, selector.right, ancestry) &&
        findSibling(node, ancestry, adjacentLeft) ||
        selector.right.subject &&
            match_1.findMatches(node, selector.left, ancestry) &&
            findSibling(node, ancestry, adjacentRight);
    function adjacentLeft(prop, index) {
        return index > 0 && match_1.findMatches(prop[index - 1], selector.left, ancestry);
    }
    function adjacentRight(prop, index) {
        return index < prop.length - 1 && match_1.findMatches(prop[index + 1], selector.right, ancestry);
    }
}
exports.adjacent = adjacent;
function findSibling(node, ancestry, test) {
    var parent = ancestry[0];
    if (!parent) {
        return false;
    }
    var keys = traverse_1.getVisitorKeys(node.parent || null);
    return keys.some(function (key) {
        var prop = node.parent[key];
        if (Array.isArray(prop)) {
            var index = prop.indexOf(node);
            if (index === -1) {
                return false;
            }
            return test(prop, index);
        }
        return false;
    });
}
//# sourceMappingURL=sibling.js.map
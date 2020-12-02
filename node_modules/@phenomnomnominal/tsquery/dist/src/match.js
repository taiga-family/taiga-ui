"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var matchers_1 = require("./matchers");
var traverse_1 = require("./traverse");
function match(node, selector, options) {
    if (options === void 0) { options = {}; }
    var results = [];
    if (!selector) {
        return results;
    }
    traverse_1.traverseChildren(node, function (childNode, ancestry) {
        if (findMatches(childNode, selector, ancestry, options)) {
            results.push(childNode);
        }
    }, options);
    return results;
}
exports.match = match;
function findMatches(node, selector, ancestry, options) {
    if (ancestry === void 0) { ancestry = []; }
    if (options === void 0) { options = {}; }
    if (!selector) {
        return true;
    }
    if (!node) {
        return false;
    }
    var matcher = matchers_1.MATCHERS[selector.type];
    if (matcher) {
        return matcher(node, selector, ancestry, options);
    }
    throw new Error("Unknown selector type: " + selector.type);
}
exports.findMatches = findMatches;
//# sourceMappingURL=match.js.map
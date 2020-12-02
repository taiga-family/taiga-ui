"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var match_1 = require("../match");
var traverse_1 = require("../traverse");
function has(node, selector, _, options) {
    var collector = [];
    selector.selectors.forEach(function (childSelector) {
        traverse_1.traverseChildren(node, function (childNode, ancestry) {
            if (match_1.findMatches(childNode, childSelector, ancestry)) {
                collector.push(childNode);
            }
        }, options);
    });
    return collector.length > 0;
}
exports.has = has;
//# sourceMappingURL=has.js.map
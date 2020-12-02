"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var match_1 = require("../match");
function descendant(node, selector, ancestry) {
    if (match_1.findMatches(node, selector.right, ancestry)) {
        return ancestry.some(function (ancestor, index) {
            return match_1.findMatches(ancestor, selector.left, ancestry.slice(index + 1));
        });
    }
    return false;
}
exports.descendant = descendant;
//# sourceMappingURL=descendant.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var match_1 = require("../match");
function child(node, selector, ancestry) {
    if (match_1.findMatches(node, selector.right, ancestry)) {
        return match_1.findMatches(ancestry[0], selector.left, ancestry.slice(1));
    }
    return false;
}
exports.child = child;
//# sourceMappingURL=child.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var match_1 = require("../match");
function not(node, selector, ancestry) {
    return !selector.selectors.some(function (childSelector) {
        return match_1.findMatches(node, childSelector, ancestry);
    });
}
exports.not = not;
//# sourceMappingURL=not.js.map
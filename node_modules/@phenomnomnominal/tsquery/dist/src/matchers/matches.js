"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var match_1 = require("../match");
function matches(modifier) {
    return function (node, selector, ancestry) {
        return selector.selectors[modifier](function (childSelector) {
            return match_1.findMatches(node, childSelector, ancestry);
        });
    };
}
exports.matches = matches;
//# sourceMappingURL=matches.js.map
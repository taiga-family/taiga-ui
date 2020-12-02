"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Dependencies:
var query_1 = require("./query");
function replace(source, selector, stringTransformer, options) {
    if (options === void 0) { options = {}; }
    var matches = query_1.query(source, selector, options);
    var replacements = matches.map(function (node) { return stringTransformer(node); });
    var reversedMatches = matches.reverse();
    var reversedReplacements = replacements.reverse();
    var result = source;
    reversedReplacements.forEach(function (replacement, index) {
        if (replacement) {
            var match = reversedMatches[index];
            result = "" + result.substr(0, match.getStart()) + replacement + result.substr(match.getEnd());
        }
    });
    return result;
}
exports.replace = replace;
//# sourceMappingURL=replace.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Dependencies:
var typescript_1 = require("typescript");
var query_1 = require("./query");
function map(ast, selector, nodeTransformer, options) {
    if (options === void 0) { options = {}; }
    // TODO: Doing map like this means the full tree is visited twice.
    // It might be better to change `query()` to use `transform()`,
    // but with a noop?
    var matches = query_1.query(ast, selector, options);
    var transformer = createTransformer(matches, nodeTransformer);
    var transformed = typescript_1.transform(ast, [transformer]).transformed[0];
    return transformed;
}
exports.map = map;
function createTransformer(results, nodeTransformer) {
    return function (context) {
        return function (rootNode) {
            function visit(node) {
                if (results.includes(node)) {
                    var replacement = nodeTransformer(node);
                    return replacement ? replacement : node;
                }
                return typescript_1.visitEachChild(node, visit, context);
            }
            return typescript_1.visitNode(rootNode, visit);
        };
    };
}
//# sourceMappingURL=map.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ast_1 = require("./ast");
var match_1 = require("./match");
var parse_1 = require("./parse");
function query(ast, selector, options) {
    if (options === void 0) { options = {}; }
    if (typeof ast === 'string') {
        ast = ast_1.createAST(ast);
    }
    return match_1.match(ast, parse_1.parse(selector), options);
}
exports.query = query;
//# sourceMappingURL=query.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var syntax_kind_1 = require("../syntax-kind");
function identifier(node, selector) {
    return syntax_kind_1.syntaxKindName(node.kind).toLowerCase() === selector.value.toLowerCase();
}
exports.identifier = identifier;
//# sourceMappingURL=identifier.js.map
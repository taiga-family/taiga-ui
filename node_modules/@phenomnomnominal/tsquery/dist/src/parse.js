"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Dependencies:
var esquery = require("esquery");
var typescript_1 = require("typescript");
// Constants:
var IDENTIFIER_QUERY = 'identifier';
function parse(selector) {
    return validateParse(esquery.parse(selector));
}
exports.parse = parse;
function validateParse(selector) {
    if (!selector) {
        return selector;
    }
    if (selector.selectors) {
        selector.selectors.map(validateParse);
    }
    if (selector.left) {
        validateParse(selector.left);
    }
    if (selector.right) {
        validateParse(selector.right);
    }
    if (selector.type === IDENTIFIER_QUERY) {
        if (typescript_1.SyntaxKind[selector.value] == null) {
            throw SyntaxError("\"" + selector.value + "\" is not a valid TypeScript Node kind.");
        }
    }
    return selector;
}
//# sourceMappingURL=parse.js.map
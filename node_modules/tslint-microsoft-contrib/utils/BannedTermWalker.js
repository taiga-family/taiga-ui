"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ts = require("typescript");
var tsutils = require("tsutils");
var TypeGuard_1 = require("./TypeGuard");
function bannedTermWalker(ctx) {
    var _a = ctx.options, failureString = _a.failureString, bannedTerms = _a.bannedTerms, allowQuotedProperties = _a.allowQuotedProperties;
    function isBannedTerm(text) {
        return bannedTerms.indexOf(text) !== -1;
    }
    function validateNode(node) {
        if (TypeGuard_1.isNamed(node)) {
            var text = node.name.getText();
            if (text !== undefined) {
                if (isBannedTerm(text)) {
                    ctx.addFailureAt(node.getStart(), node.getWidth(), failureString + text);
                }
            }
        }
    }
    function cb(node) {
        if (tsutils.isVariableDeclaration(node) ||
            tsutils.isFunctionDeclaration(node) ||
            tsutils.isPropertyDeclaration(node) ||
            tsutils.isAccessorDeclaration(node) ||
            tsutils.isMethodDeclaration(node)) {
            validateNode(node);
        }
        if (tsutils.isParameterDeclaration(node)) {
            if (node.name.getText() !== 'this') {
                validateNode(node);
            }
        }
        if (tsutils.isPropertySignature(node)) {
            if (allowQuotedProperties === false || !tsutils.isStringLiteral(node.name)) {
                validateNode(node);
            }
        }
        return ts.forEachChild(node, cb);
    }
    return ts.forEachChild(ctx.sourceFile, cb);
}
exports.bannedTermWalker = bannedTermWalker;
//# sourceMappingURL=BannedTermWalker.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ts = require("typescript");
var tsutils = require("tsutils");
function subtractSets(source, target) {
    return new Set(Array.from(source.values()).slice().filter(function (x) { return !target.has(x); }));
}
exports.subtractSets = subtractSets;
function concatSets(set1, set2) {
    return new Set(Array.from(set1.values()).concat(Array.from(set2.values())));
}
exports.concatSets = concatSets;
function isObservable(type, tc) {
    if (tsutils.isTypeReference(type)) {
        type = type.target;
    }
    if (type.symbol !== undefined && type.symbol.name === 'Observable') {
        return true;
    }
    if (tsutils.isUnionOrIntersectionType(type)) {
        return type.types.some(function (t) { return isObservable(t, tc); });
    }
    var bases = type.getBaseTypes();
    return bases !== undefined && bases.some(function (t) { return isObservable(t, tc); });
}
exports.isObservable = isObservable;
function returnsObservable(node, tc) {
    var signature = tc.getResolvedSignature(node);
    if (signature === undefined) {
        return false;
    }
    var returnType = tc.getReturnTypeOfSignature(signature);
    return isObservable(returnType, tc);
}
exports.returnsObservable = returnsObservable;
function computeInsertionIndexForImports(sourceFile) {
    var comments = ts.getLeadingCommentRanges(sourceFile.getFullText(), 0) || [];
    if (comments.length > 0) {
        var commentEnd = comments[0].end;
        if (sourceFile.text.substring(commentEnd, commentEnd + 2) === '\n\n') {
            return commentEnd + 2;
        }
    }
    return sourceFile.getFullStart();
}
exports.computeInsertionIndexForImports = computeInsertionIndexForImports;

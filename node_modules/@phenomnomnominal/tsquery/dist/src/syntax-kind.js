"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var typescript_1 = require("typescript");
// See https://github.com/Microsoft/TypeScript/issues/18062
// Code inpired by https://github.com/fkling/astexplorer/blob/master/website/src/parsers/js/typescript.js
exports.syntaxKindMap = {};
for (var _i = 0, _a = Object.keys(typescript_1.SyntaxKind).filter(function (x) {
    return isNaN(parseInt(x, 10));
}); _i < _a.length; _i++) {
    var name = _a[_i];
    var value = typescript_1.SyntaxKind[name];
    if (!exports.syntaxKindMap[value]) {
        exports.syntaxKindMap[value] = name;
    }
}
function syntaxKindName(kind) {
    return exports.syntaxKindMap[kind];
}
exports.syntaxKindName = syntaxKindName;
//# sourceMappingURL=syntax-kind.js.map
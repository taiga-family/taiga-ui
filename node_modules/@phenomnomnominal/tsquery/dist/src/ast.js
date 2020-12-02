"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Dependencies:
var typescript_1 = require("typescript");
function createAST(source, fileName, scriptKind) {
    return typescript_1.createSourceFile(fileName || '', source, typescript_1.ScriptTarget.Latest, true, scriptKind);
}
exports.createAST = createAST;
//# sourceMappingURL=ast.js.map
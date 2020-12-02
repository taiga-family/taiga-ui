"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var OPERATION_KIND;
(function (OPERATION_KIND) {
    OPERATION_KIND[OPERATION_KIND["Remove"] = 0] = "Remove";
    OPERATION_KIND[OPERATION_KIND["Add"] = 1] = "Add";
    OPERATION_KIND[OPERATION_KIND["Replace"] = 2] = "Replace";
})(OPERATION_KIND = exports.OPERATION_KIND || (exports.OPERATION_KIND = {}));
class TransformOperation {
    constructor(kind, sourceFile, target) {
        this.kind = kind;
        this.sourceFile = sourceFile;
        this.target = target;
    }
}
exports.TransformOperation = TransformOperation;
class RemoveNodeOperation extends TransformOperation {
    constructor(sourceFile, target) {
        super(OPERATION_KIND.Remove, sourceFile, target);
    }
}
exports.RemoveNodeOperation = RemoveNodeOperation;
class AddNodeOperation extends TransformOperation {
    constructor(sourceFile, target, before, after) {
        super(OPERATION_KIND.Add, sourceFile, target);
        this.before = before;
        this.after = after;
    }
}
exports.AddNodeOperation = AddNodeOperation;
class ReplaceNodeOperation extends TransformOperation {
    constructor(sourceFile, target, replacement) {
        super(OPERATION_KIND.Replace, sourceFile, target);
        this.replacement = replacement;
    }
}
exports.ReplaceNodeOperation = ReplaceNodeOperation;

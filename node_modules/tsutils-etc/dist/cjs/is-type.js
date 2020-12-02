"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isType = void 0;
function isType(type, name, qualified) {
    if (!type.symbol) {
        return false;
    }
    if (qualified &&
        !qualified.name.test(qualified.typeChecker.getFullyQualifiedName(type.symbol))) {
        return false;
    }
    return typeof name === "string"
        ? type.symbol.name === name
        : Boolean(type.symbol.name.match(name));
}
exports.isType = isType;
//# sourceMappingURL=is-type.js.map
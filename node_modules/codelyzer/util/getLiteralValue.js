"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLiteralValue = function (value) {
    if (value === 'true') {
        return true;
    }
    else if (value === 'false') {
        return false;
    }
    return value;
};

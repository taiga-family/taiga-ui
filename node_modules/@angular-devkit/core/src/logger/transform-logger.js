"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = require("./logger");
class TransformLogger extends logger_1.Logger {
    constructor(name, transform, parent = null) {
        super(name, parent);
        this._observable = transform(this._observable);
    }
}
exports.TransformLogger = TransformLogger;

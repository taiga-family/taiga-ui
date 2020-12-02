"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = require("./logger");
class LevelTransformLogger extends logger_1.Logger {
    constructor(name, parent = null, levelTransform) {
        super(name, parent);
        this.name = name;
        this.parent = parent;
        this.levelTransform = levelTransform;
    }
    log(level, message, metadata = {}) {
        return super.log(this.levelTransform(level), message, metadata);
    }
    createChild(name) {
        return new LevelTransformLogger(name, this, this.levelTransform);
    }
}
exports.LevelTransformLogger = LevelTransformLogger;
class LevelCapLogger extends LevelTransformLogger {
    constructor(name, parent = null, levelCap) {
        super(name, parent, (level) => {
            return (LevelCapLogger.levelMap[levelCap][level] || level);
        });
        this.name = name;
        this.parent = parent;
        this.levelCap = levelCap;
    }
}
exports.LevelCapLogger = LevelCapLogger;
LevelCapLogger.levelMap = {
    debug: { debug: 'debug', info: 'debug', warn: 'debug', error: 'debug', fatal: 'debug' },
    info: { debug: 'debug', info: 'info', warn: 'info', error: 'info', fatal: 'info' },
    warn: { debug: 'debug', info: 'info', warn: 'warn', error: 'warn', fatal: 'warn' },
    error: { debug: 'debug', info: 'info', warn: 'warn', error: 'error', fatal: 'error' },
    fatal: { debug: 'debug', info: 'info', warn: 'warn', error: 'error', fatal: 'fatal' },
};

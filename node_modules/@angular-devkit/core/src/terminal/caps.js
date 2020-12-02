"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const supportsColor = require('../../third_party/github.com/chalk/supports-color');
const streamMap = new WeakMap();
function _getRows() {
    return typeof process == 'object' && process.stdout.rows || null;
}
function _getColumns() {
    return typeof process == 'object' && process.stdout.columns || null;
}
function _createCapabilities(stream, isTerminalStream, level = supportsColor.stdout.level) {
    return {
        readable: stream.readable,
        writable: stream.writable,
        text: true,
        colors: level > 0,
        color256: level > 1,
        color16m: level > 2,
        rows: isTerminalStream ? _getRows() : null,
        columns: isTerminalStream ? _getColumns() : null,
    };
}
function getCapabilities(stream, isTerminalStream = !!stream.isTTY) {
    let maybeCaps = streamMap.get(stream);
    if (!maybeCaps) {
        maybeCaps = _createCapabilities(stream, isTerminalStream);
        streamMap.set(stream, maybeCaps);
    }
    return maybeCaps;
}
exports.getCapabilities = getCapabilities;

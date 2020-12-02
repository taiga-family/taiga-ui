"use strict";
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
var WebpackChunkModuleIterator = /** @class */ (function () {
    function WebpackChunkModuleIterator() {
    }
    WebpackChunkModuleIterator.prototype.iterateModules = function (chunk, callback) {
        if (typeof chunk.modulesIterable !== 'undefined') {
            try {
                for (var _a = __values(chunk.modulesIterable), _b = _a.next(); !_b.done; _b = _a.next()) {
                    var module_1 = _b.value;
                    callback(module_1);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        else if (typeof chunk.forEachModule === 'function') {
            chunk.forEachModule(callback);
        }
        else if (Array.isArray(chunk.modules)) {
            chunk.modules.forEach(callback);
        }
        if (chunk.entryModule) {
            callback(chunk.entryModule);
        }
        var e_1, _c;
    };
    return WebpackChunkModuleIterator;
}());
exports.WebpackChunkModuleIterator = WebpackChunkModuleIterator;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = require("path");
var PathResolver = (function () {
    function PathResolver() {
    }
    PathResolver.prototype.resolve = function (path, relative) {
        if (typeof path !== 'string') {
            return null;
        }
        return path_1.join(relative, path);
    };
    return PathResolver;
}());
exports.PathResolver = PathResolver;

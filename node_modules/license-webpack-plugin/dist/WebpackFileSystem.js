"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var path = __importStar(require("path"));
var WebpackFileSystem = /** @class */ (function () {
    function WebpackFileSystem(fs) {
        this.fs = fs;
        this.pathSeparator = path.sep;
    }
    WebpackFileSystem.prototype.isFileInDirectory = function (filename, directory) {
        var normalizedFile = this.resolvePath(filename);
        var normalizedDirectory = this.resolvePath(directory);
        return (!this.isDirectory(normalizedFile) &&
            normalizedFile.indexOf(normalizedDirectory) === 0);
    };
    WebpackFileSystem.prototype.pathExists = function (filename) {
        try {
            this.fs.statSync(filename);
            return true;
        }
        catch (e) {
            return false;
        }
    };
    WebpackFileSystem.prototype.readFileAsUtf8 = function (filename) {
        return this.fs.readFileSync(filename).toString('utf8');
    };
    WebpackFileSystem.prototype.join = function () {
        var paths = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            paths[_i] = arguments[_i];
        }
        return path.join.apply(path, __spread(paths));
    };
    WebpackFileSystem.prototype.resolvePath = function (pathInput) {
        return path.resolve(pathInput);
    };
    WebpackFileSystem.prototype.listPaths = function (dir) {
        return this.fs.readdirSync(dir);
    };
    WebpackFileSystem.prototype.isDirectory = function (dir) {
        var isDir = false;
        try {
            isDir = this.fs.statSync(dir).isDirectory();
        }
        catch (e) { }
        return isDir;
    };
    return WebpackFileSystem;
}());
exports.WebpackFileSystem = WebpackFileSystem;

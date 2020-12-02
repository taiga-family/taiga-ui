"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ts = require("typescript");
const node_1 = require("../graph/node");
const select_1 = require("../graph/select");
const file_cache_1 = require("../file-system/file-cache");
exports.TYPE_NG_PACKAGE = 'application/ng-package';
exports.TYPE_NG_ENTRY_POINT = 'application/ng-entry-point';
/** A node that can be read through the `fs` api. */
exports.URL_PROTOCOL_FILE = 'file://';
/** A node specific to angular. */
exports.URL_PROTOCOL_NG = 'ng://';
function isEntryPoint(node) {
    return node.type === exports.TYPE_NG_ENTRY_POINT;
}
exports.isEntryPoint = isEntryPoint;
function isPackage(node) {
    return node.type === exports.TYPE_NG_PACKAGE;
}
exports.isPackage = isPackage;
function byEntryPoint() {
    return select_1.by(isEntryPoint);
}
exports.byEntryPoint = byEntryPoint;
function isEntryPointInProgress() {
    return select_1.by(isEntryPoint).and(select_1.isInProgress);
}
exports.isEntryPointInProgress = isEntryPointInProgress;
function isEntryPointDirty() {
    return select_1.by(isEntryPoint).and(select_1.isDirty);
}
exports.isEntryPointDirty = isEntryPointDirty;
function isFileUrl(value) {
    return value.startsWith(exports.URL_PROTOCOL_FILE);
}
exports.isFileUrl = isFileUrl;
function fileUrl(path) {
    return `${exports.URL_PROTOCOL_FILE}${path}`;
}
exports.fileUrl = fileUrl;
function fileUrlPath(url) {
    if (url.startsWith(exports.URL_PROTOCOL_FILE)) {
        return url.substring(exports.URL_PROTOCOL_FILE.length);
    }
}
exports.fileUrlPath = fileUrlPath;
function ngUrl(path) {
    return `${exports.URL_PROTOCOL_NG}${path}`;
}
exports.ngUrl = ngUrl;
class EntryPointNode extends node_1.Node {
    constructor(url, sourcesFileCache) {
        super(url);
        this.url = url;
        this.sourcesFileCache = sourcesFileCache;
        this.type = exports.TYPE_NG_ENTRY_POINT;
        this.cache = {
            sourcesFileCache: new file_cache_1.FileCache(),
            analysesSourcesFileCache: new file_cache_1.FileCache(),
            moduleResolutionCache: ts.createModuleResolutionCache(process.cwd(), s => s),
        };
        if (sourcesFileCache) {
            this.cache.sourcesFileCache = sourcesFileCache;
        }
    }
}
exports.EntryPointNode = EntryPointNode;
class PackageNode extends node_1.Node {
    constructor() {
        super(...arguments);
        this.type = exports.TYPE_NG_PACKAGE;
        this.cache = {
            globCache: {},
            sourcesFileCache: new file_cache_1.FileCache(),
        };
    }
}
exports.PackageNode = PackageNode;
//# sourceMappingURL=nodes.js.map
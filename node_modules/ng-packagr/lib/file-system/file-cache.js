"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("../utils/path");
class FileCache {
    constructor() {
        this.cache = new Map();
        this.forEach = this.cache.forEach.bind(this.cache);
        this.clear = this.cache.clear.bind(this.cache);
    }
    size() {
        return this.cache.size;
    }
    normalizeKey(fileName) {
        return path_1.ensureUnixPath(fileName);
    }
    delete(fileName) {
        return this.cache.delete(this.normalizeKey(fileName));
    }
    has(fileName) {
        return this.cache.has(this.normalizeKey(fileName));
    }
    get(fileName) {
        return this.cache.get(this.normalizeKey(fileName));
    }
    getOrCreate(fileName) {
        const normalizedKey = this.normalizeKey(fileName);
        let entry = this.cache.get(normalizedKey);
        if (!entry) {
            entry = {};
            this.cache.set(normalizedKey, entry);
        }
        return entry;
    }
}
exports.FileCache = FileCache;
//# sourceMappingURL=file-cache.js.map
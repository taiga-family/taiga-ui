"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonWorkspaceSymbol = Symbol.for('@angular/core:workspace-json');
class JsonWorkspaceMetadata {
    constructor(filePath, ast, raw) {
        this.filePath = filePath;
        this.ast = ast;
        this.raw = raw;
        this.changes = [];
    }
    get hasChanges() {
        return this.changes.length > 0;
    }
    get changeCount() {
        return this.changes.length;
    }
    findChangesForPath(path) {
        return this.changes.filter(c => c.path === path);
    }
    addChange(op, path, node, value, type) {
        // Remove redundant operations
        if (op === 'remove' || op === 'replace') {
            for (let i = this.changes.length - 1; i >= 0; --i) {
                const currentPath = this.changes[i].path;
                if (currentPath === path || currentPath.startsWith(path + '/')) {
                    if (op === 'replace' && currentPath === path && this.changes[i].op === 'add') {
                        op = 'add';
                    }
                    this.changes.splice(i, 1);
                }
            }
        }
        this.changes.push({ op, path, node, value, type: op === 'remove' || !type ? 'json' : type });
    }
    reset() {
        this.changes.length = 0;
    }
}
exports.JsonWorkspaceMetadata = JsonWorkspaceMetadata;

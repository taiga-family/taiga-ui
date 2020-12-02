/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define("@angular/cdk/schematics/ng-update/devkit-file-system", ["require", "exports", "@angular-devkit/core", "path"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const core_1 = require("@angular-devkit/core");
    const path_1 = require("path");
    /**
     * File system that leverages the virtual tree from the CLI devkit. This file
     * system is commonly used by `ng update` migrations that run as part of the
     * Angular CLI.
     */
    class DevkitFileSystem {
        constructor(_tree, _workspaceFsPath) {
            this._tree = _tree;
            this._workspaceFsPath = _workspaceFsPath;
            this._updateRecorderCache = new Map();
        }
        resolve(fsFilePath) {
            return core_1.normalize(path_1.relative(this._workspaceFsPath, fsFilePath));
        }
        edit(fsFilePath) {
            const treeFilePath = this.resolve(fsFilePath);
            if (this._updateRecorderCache.has(treeFilePath)) {
                return this._updateRecorderCache.get(treeFilePath);
            }
            const recorder = this._tree.beginUpdate(treeFilePath);
            this._updateRecorderCache.set(treeFilePath, recorder);
            return recorder;
        }
        commitEdits() {
            this._updateRecorderCache.forEach(r => this._tree.commitUpdate(r));
            this._updateRecorderCache.clear();
        }
        exists(fsFilePath) {
            return this._tree.exists(this.resolve(fsFilePath));
        }
        overwrite(fsFilePath, content) {
            this._tree.overwrite(this.resolve(fsFilePath), content);
        }
        create(fsFilePath, content) {
            this._tree.create(this.resolve(fsFilePath), content);
        }
        delete(fsFilePath) {
            this._tree.delete(this.resolve(fsFilePath));
        }
        read(fsFilePath) {
            const buffer = this._tree.read(this.resolve(fsFilePath));
            return buffer !== null ? buffer.toString() : null;
        }
    }
    exports.DevkitFileSystem = DevkitFileSystem;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV2a2l0LWZpbGUtc3lzdGVtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2Nkay9zY2hlbWF0aWNzL25nLXVwZGF0ZS9kZXZraXQtZmlsZS1zeXN0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HOzs7Ozs7Ozs7Ozs7SUFFSCwrQ0FBK0M7SUFFL0MsK0JBQThCO0lBRzlCOzs7O09BSUc7SUFDSCxNQUFhLGdCQUFnQjtRQUczQixZQUFvQixLQUFXLEVBQVUsZ0JBQXdCO1lBQTdDLFVBQUssR0FBTCxLQUFLLENBQU07WUFBVSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQVE7WUFGekQseUJBQW9CLEdBQUcsSUFBSSxHQUFHLEVBQTBCLENBQUM7UUFFRyxDQUFDO1FBRXJFLE9BQU8sQ0FBQyxVQUFrQjtZQUN4QixPQUFPLGdCQUFTLENBQUMsZUFBUSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxVQUFVLENBQUMsQ0FBVyxDQUFDO1FBQzFFLENBQUM7UUFFRCxJQUFJLENBQUMsVUFBa0I7WUFDckIsTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUM5QyxJQUFJLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLEVBQUU7Z0JBQy9DLE9BQU8sSUFBSSxDQUFDLG9CQUFvQixDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUUsQ0FBQzthQUNyRDtZQUNELE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ3RELElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBQ3RELE9BQU8sUUFBUSxDQUFDO1FBQ2xCLENBQUM7UUFFRCxXQUFXO1lBQ1QsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbkUsSUFBSSxDQUFDLG9CQUFvQixDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3BDLENBQUM7UUFFRCxNQUFNLENBQUMsVUFBa0I7WUFDdkIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7UUFDckQsQ0FBQztRQUVELFNBQVMsQ0FBQyxVQUFrQixFQUFFLE9BQWU7WUFDM0MsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUMxRCxDQUFDO1FBRUQsTUFBTSxDQUFDLFVBQWtCLEVBQUUsT0FBZTtZQUN4QyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3ZELENBQUM7UUFFRCxNQUFNLENBQUMsVUFBa0I7WUFDdkIsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1FBQzlDLENBQUM7UUFFRCxJQUFJLENBQUMsVUFBa0I7WUFDckIsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQ3pELE9BQU8sTUFBTSxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDcEQsQ0FBQztLQUNGO0lBNUNELDRDQTRDQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge25vcm1hbGl6ZX0gZnJvbSAnQGFuZ3VsYXItZGV2a2l0L2NvcmUnO1xuaW1wb3J0IHtUcmVlLCBVcGRhdGVSZWNvcmRlcn0gZnJvbSAnQGFuZ3VsYXItZGV2a2l0L3NjaGVtYXRpY3MnO1xuaW1wb3J0IHtyZWxhdGl2ZX0gZnJvbSAncGF0aCc7XG5pbXBvcnQge0ZpbGVTeXN0ZW19IGZyb20gJy4uL3VwZGF0ZS10b29sL2ZpbGUtc3lzdGVtJztcblxuLyoqXG4gKiBGaWxlIHN5c3RlbSB0aGF0IGxldmVyYWdlcyB0aGUgdmlydHVhbCB0cmVlIGZyb20gdGhlIENMSSBkZXZraXQuIFRoaXMgZmlsZVxuICogc3lzdGVtIGlzIGNvbW1vbmx5IHVzZWQgYnkgYG5nIHVwZGF0ZWAgbWlncmF0aW9ucyB0aGF0IHJ1biBhcyBwYXJ0IG9mIHRoZVxuICogQW5ndWxhciBDTEkuXG4gKi9cbmV4cG9ydCBjbGFzcyBEZXZraXRGaWxlU3lzdGVtIGltcGxlbWVudHMgRmlsZVN5c3RlbSB7XG4gIHByaXZhdGUgX3VwZGF0ZVJlY29yZGVyQ2FjaGUgPSBuZXcgTWFwPHN0cmluZywgVXBkYXRlUmVjb3JkZXI+KCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfdHJlZTogVHJlZSwgcHJpdmF0ZSBfd29ya3NwYWNlRnNQYXRoOiBzdHJpbmcpIHt9XG5cbiAgcmVzb2x2ZShmc0ZpbGVQYXRoOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gbm9ybWFsaXplKHJlbGF0aXZlKHRoaXMuX3dvcmtzcGFjZUZzUGF0aCwgZnNGaWxlUGF0aCkpIGFzIHN0cmluZztcbiAgfVxuXG4gIGVkaXQoZnNGaWxlUGF0aDogc3RyaW5nKSB7XG4gICAgY29uc3QgdHJlZUZpbGVQYXRoID0gdGhpcy5yZXNvbHZlKGZzRmlsZVBhdGgpO1xuICAgIGlmICh0aGlzLl91cGRhdGVSZWNvcmRlckNhY2hlLmhhcyh0cmVlRmlsZVBhdGgpKSB7XG4gICAgICByZXR1cm4gdGhpcy5fdXBkYXRlUmVjb3JkZXJDYWNoZS5nZXQodHJlZUZpbGVQYXRoKSE7XG4gICAgfVxuICAgIGNvbnN0IHJlY29yZGVyID0gdGhpcy5fdHJlZS5iZWdpblVwZGF0ZSh0cmVlRmlsZVBhdGgpO1xuICAgIHRoaXMuX3VwZGF0ZVJlY29yZGVyQ2FjaGUuc2V0KHRyZWVGaWxlUGF0aCwgcmVjb3JkZXIpO1xuICAgIHJldHVybiByZWNvcmRlcjtcbiAgfVxuXG4gIGNvbW1pdEVkaXRzKCkge1xuICAgIHRoaXMuX3VwZGF0ZVJlY29yZGVyQ2FjaGUuZm9yRWFjaChyID0+IHRoaXMuX3RyZWUuY29tbWl0VXBkYXRlKHIpKTtcbiAgICB0aGlzLl91cGRhdGVSZWNvcmRlckNhY2hlLmNsZWFyKCk7XG4gIH1cblxuICBleGlzdHMoZnNGaWxlUGF0aDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RyZWUuZXhpc3RzKHRoaXMucmVzb2x2ZShmc0ZpbGVQYXRoKSk7XG4gIH1cblxuICBvdmVyd3JpdGUoZnNGaWxlUGF0aDogc3RyaW5nLCBjb250ZW50OiBzdHJpbmcpIHtcbiAgICB0aGlzLl90cmVlLm92ZXJ3cml0ZSh0aGlzLnJlc29sdmUoZnNGaWxlUGF0aCksIGNvbnRlbnQpO1xuICB9XG5cbiAgY3JlYXRlKGZzRmlsZVBhdGg6IHN0cmluZywgY29udGVudDogc3RyaW5nKSB7XG4gICAgdGhpcy5fdHJlZS5jcmVhdGUodGhpcy5yZXNvbHZlKGZzRmlsZVBhdGgpLCBjb250ZW50KTtcbiAgfVxuXG4gIGRlbGV0ZShmc0ZpbGVQYXRoOiBzdHJpbmcpIHtcbiAgICB0aGlzLl90cmVlLmRlbGV0ZSh0aGlzLnJlc29sdmUoZnNGaWxlUGF0aCkpO1xuICB9XG5cbiAgcmVhZChmc0ZpbGVQYXRoOiBzdHJpbmcpIHtcbiAgICBjb25zdCBidWZmZXIgPSB0aGlzLl90cmVlLnJlYWQodGhpcy5yZXNvbHZlKGZzRmlsZVBhdGgpKTtcbiAgICByZXR1cm4gYnVmZmVyICE9PSBudWxsID8gYnVmZmVyLnRvU3RyaW5nKCkgOiBudWxsO1xuICB9XG59XG4iXX0=
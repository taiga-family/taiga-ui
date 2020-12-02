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
        define("@angular/cdk/schematics/utils/project-index-file", ["require", "exports", "@angular/cdk/schematics/utils/project-targets"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const project_targets_1 = require("@angular/cdk/schematics/utils/project-targets");
    /** Gets the path of the index file in the given project. */
    function getProjectIndexFiles(project) {
        // Use a set to remove duplicate index files referenced in multiple build targets
        // of a project.
        return [...new Set(project_targets_1.getTargetsByBuilderName(project, project_targets_1.defaultTargetBuilders.build)
                .filter(t => t.options.index)
                .map(t => t.options.index))];
    }
    exports.getProjectIndexFiles = getProjectIndexFiles;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdC1pbmRleC1maWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2Nkay9zY2hlbWF0aWNzL3V0aWxzL3Byb2plY3QtaW5kZXgtZmlsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7Ozs7Ozs7Ozs7OztJQUlILG1GQUFpRjtJQUVqRiw0REFBNEQ7SUFDNUQsU0FBZ0Isb0JBQW9CLENBQUMsT0FBeUI7UUFDNUQsaUZBQWlGO1FBQ2pGLGdCQUFnQjtRQUNoQixPQUFPLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FDYix5Q0FBdUIsQ0FBQyxPQUFPLEVBQUUsdUNBQXFCLENBQUMsS0FBSyxDQUE0QjtpQkFDcEYsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7aUJBQzVCLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFQRCxvREFPQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge1dvcmtzcGFjZVByb2plY3R9IGZyb20gJ0Bhbmd1bGFyLWRldmtpdC9jb3JlL3NyYy9leHBlcmltZW50YWwvd29ya3NwYWNlJztcbmltcG9ydCB7QnJvd3NlckJ1aWxkZXJUYXJnZXR9IGZyb20gJ0BzY2hlbWF0aWNzL2FuZ3VsYXIvdXRpbGl0eS93b3Jrc3BhY2UtbW9kZWxzJztcbmltcG9ydCB7ZGVmYXVsdFRhcmdldEJ1aWxkZXJzLCBnZXRUYXJnZXRzQnlCdWlsZGVyTmFtZX0gZnJvbSAnLi9wcm9qZWN0LXRhcmdldHMnO1xuXG4vKiogR2V0cyB0aGUgcGF0aCBvZiB0aGUgaW5kZXggZmlsZSBpbiB0aGUgZ2l2ZW4gcHJvamVjdC4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRQcm9qZWN0SW5kZXhGaWxlcyhwcm9qZWN0OiBXb3Jrc3BhY2VQcm9qZWN0KTogc3RyaW5nW10ge1xuICAvLyBVc2UgYSBzZXQgdG8gcmVtb3ZlIGR1cGxpY2F0ZSBpbmRleCBmaWxlcyByZWZlcmVuY2VkIGluIG11bHRpcGxlIGJ1aWxkIHRhcmdldHNcbiAgLy8gb2YgYSBwcm9qZWN0LlxuICByZXR1cm4gWy4uLm5ldyBTZXQoXG4gICAgICAoZ2V0VGFyZ2V0c0J5QnVpbGRlck5hbWUocHJvamVjdCwgZGVmYXVsdFRhcmdldEJ1aWxkZXJzLmJ1aWxkKSBhcyBCcm93c2VyQnVpbGRlclRhcmdldFtdKVxuICAgICAgICAgIC5maWx0ZXIodCA9PiB0Lm9wdGlvbnMuaW5kZXgpXG4gICAgICAgICAgLm1hcCh0ID0+IHQub3B0aW9ucy5pbmRleCEpKV07XG59XG4iXX0=
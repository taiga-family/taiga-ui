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
        define("@angular/cdk/schematics/utils/get-project", ["require", "exports", "@angular-devkit/schematics"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const schematics_1 = require("@angular-devkit/schematics");
    /**
     * Finds the specified project configuration in the workspace. Throws an error if the project
     * couldn't be found.
     */
    function getProjectFromWorkspace(workspace, projectName) {
        const project = workspace.projects[projectName || workspace.defaultProject];
        if (!project) {
            throw new schematics_1.SchematicsException(`Could not find project in workspace: ${projectName}`);
        }
        return project;
    }
    exports.getProjectFromWorkspace = getProjectFromWorkspace;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LXByb2plY3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY2RrL3NjaGVtYXRpY3MvdXRpbHMvZ2V0LXByb2plY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HOzs7Ozs7Ozs7Ozs7SUFHSCwyREFBK0Q7SUFFL0Q7OztPQUdHO0lBQ0gsU0FBZ0IsdUJBQXVCLENBQ25DLFNBQTBCLEVBQzFCLFdBQW9CO1FBRXRCLE1BQU0sT0FBTyxHQUFHLFNBQVMsQ0FBQyxRQUFRLENBQUMsV0FBVyxJQUFJLFNBQVMsQ0FBQyxjQUFlLENBQUMsQ0FBQztRQUU3RSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ1osTUFBTSxJQUFJLGdDQUFtQixDQUFDLHdDQUF3QyxXQUFXLEVBQUUsQ0FBQyxDQUFDO1NBQ3RGO1FBRUQsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQztJQVhELDBEQVdDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7V29ya3NwYWNlU2NoZW1hLCBXb3Jrc3BhY2VQcm9qZWN0fSBmcm9tICdAYW5ndWxhci1kZXZraXQvY29yZS9zcmMvZXhwZXJpbWVudGFsL3dvcmtzcGFjZSc7XG5pbXBvcnQge1NjaGVtYXRpY3NFeGNlcHRpb259IGZyb20gJ0Bhbmd1bGFyLWRldmtpdC9zY2hlbWF0aWNzJztcblxuLyoqXG4gKiBGaW5kcyB0aGUgc3BlY2lmaWVkIHByb2plY3QgY29uZmlndXJhdGlvbiBpbiB0aGUgd29ya3NwYWNlLiBUaHJvd3MgYW4gZXJyb3IgaWYgdGhlIHByb2plY3RcbiAqIGNvdWxkbid0IGJlIGZvdW5kLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0UHJvamVjdEZyb21Xb3Jrc3BhY2UoXG4gICAgd29ya3NwYWNlOiBXb3Jrc3BhY2VTY2hlbWEsXG4gICAgcHJvamVjdE5hbWU/OiBzdHJpbmcpOiBXb3Jrc3BhY2VQcm9qZWN0IHtcblxuICBjb25zdCBwcm9qZWN0ID0gd29ya3NwYWNlLnByb2plY3RzW3Byb2plY3ROYW1lIHx8IHdvcmtzcGFjZS5kZWZhdWx0UHJvamVjdCFdO1xuXG4gIGlmICghcHJvamVjdCkge1xuICAgIHRocm93IG5ldyBTY2hlbWF0aWNzRXhjZXB0aW9uKGBDb3VsZCBub3QgZmluZCBwcm9qZWN0IGluIHdvcmtzcGFjZTogJHtwcm9qZWN0TmFtZX1gKTtcbiAgfVxuXG4gIHJldHVybiBwcm9qZWN0O1xufVxuIl19
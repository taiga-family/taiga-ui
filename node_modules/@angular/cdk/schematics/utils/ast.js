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
        define("@angular/cdk/schematics/utils/ast", ["require", "exports", "@angular-devkit/schematics", "@schematics/angular/utility/change", "@schematics/angular/utility/config", "@schematics/angular/utility/find-module", "typescript", "@angular/cdk/schematics/utils/project-main-file", "@angular/cdk/schematics/utils/vendored-ast-utils/index"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const schematics_1 = require("@angular-devkit/schematics");
    const change_1 = require("@schematics/angular/utility/change");
    const config_1 = require("@schematics/angular/utility/config");
    const find_module_1 = require("@schematics/angular/utility/find-module");
    const ts = require("typescript");
    const project_main_file_1 = require("@angular/cdk/schematics/utils/project-main-file");
    const vendored_ast_utils_1 = require("@angular/cdk/schematics/utils/vendored-ast-utils/index");
    /** Reads file given path and returns TypeScript source file. */
    function parseSourceFile(host, path) {
        const buffer = host.read(path);
        if (!buffer) {
            throw new schematics_1.SchematicsException(`Could not find file for path: ${path}`);
        }
        return ts.createSourceFile(path, buffer.toString(), ts.ScriptTarget.Latest, true);
    }
    exports.parseSourceFile = parseSourceFile;
    /** Import and add module to root app module. */
    function addModuleImportToRootModule(host, moduleName, src, project) {
        const modulePath = vendored_ast_utils_1.getAppModulePath(host, project_main_file_1.getProjectMainFile(project));
        addModuleImportToModule(host, modulePath, moduleName, src);
    }
    exports.addModuleImportToRootModule = addModuleImportToRootModule;
    /**
     * Import and add module to specific module path.
     * @param host the tree we are updating
     * @param modulePath src location of the module to import
     * @param moduleName name of module to import
     * @param src src location to import
     */
    function addModuleImportToModule(host, modulePath, moduleName, src) {
        const moduleSource = parseSourceFile(host, modulePath);
        if (!moduleSource) {
            throw new schematics_1.SchematicsException(`Module not found: ${modulePath}`);
        }
        const changes = vendored_ast_utils_1.addImportToModule(moduleSource, modulePath, moduleName, src);
        const recorder = host.beginUpdate(modulePath);
        changes.forEach((change) => {
            if (change instanceof change_1.InsertChange) {
                recorder.insertLeft(change.pos, change.toAdd);
            }
        });
        host.commitUpdate(recorder);
    }
    exports.addModuleImportToModule = addModuleImportToModule;
    /** Wraps the internal find module from options with undefined path handling  */
    function findModuleFromOptions(host, options) {
        const workspace = config_1.getWorkspace(host);
        if (!options.project) {
            options.project = Object.keys(workspace.projects)[0];
        }
        const project = workspace.projects[options.project];
        if (options.path === undefined) {
            options.path = `/${project.root}/src/app`;
        }
        return find_module_1.findModuleFromOptions(host, options);
    }
    exports.findModuleFromOptions = findModuleFromOptions;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2Nkay9zY2hlbWF0aWNzL3V0aWxzL2FzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7Ozs7Ozs7Ozs7OztJQUdILDJEQUFxRTtJQUVyRSwrREFBZ0U7SUFDaEUsK0RBQWdFO0lBQ2hFLHlFQUFvRztJQUNwRyxpQ0FBaUM7SUFDakMsdUZBQXVEO0lBQ3ZELCtGQUF5RTtJQUV6RSxnRUFBZ0U7SUFDaEUsU0FBZ0IsZUFBZSxDQUFDLElBQVUsRUFBRSxJQUFZO1FBQ3RELE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0IsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNYLE1BQU0sSUFBSSxnQ0FBbUIsQ0FBQyxpQ0FBaUMsSUFBSSxFQUFFLENBQUMsQ0FBQztTQUN4RTtRQUNELE9BQU8sRUFBRSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsUUFBUSxFQUFFLEVBQUUsRUFBRSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDcEYsQ0FBQztJQU5ELDBDQU1DO0lBRUQsZ0RBQWdEO0lBQ2hELFNBQWdCLDJCQUEyQixDQUFDLElBQVUsRUFBRSxVQUFrQixFQUFFLEdBQVcsRUFDM0MsT0FBeUI7UUFDbkUsTUFBTSxVQUFVLEdBQUcscUNBQWdCLENBQUMsSUFBSSxFQUFFLHNDQUFrQixDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDdkUsdUJBQXVCLENBQUMsSUFBSSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQUpELGtFQUlDO0lBRUQ7Ozs7OztPQU1HO0lBQ0gsU0FBZ0IsdUJBQXVCLENBQUMsSUFBVSxFQUFFLFVBQWtCLEVBQUUsVUFBa0IsRUFDbEQsR0FBVztRQUVqRCxNQUFNLFlBQVksR0FBRyxlQUFlLENBQUMsSUFBSSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBRXZELElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDakIsTUFBTSxJQUFJLGdDQUFtQixDQUFDLHFCQUFxQixVQUFVLEVBQUUsQ0FBQyxDQUFDO1NBQ2xFO1FBRUQsTUFBTSxPQUFPLEdBQUcsc0NBQWlCLENBQUMsWUFBWSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDN0UsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUU5QyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUU7WUFDekIsSUFBSSxNQUFNLFlBQVkscUJBQVksRUFBRTtnQkFDbEMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUMvQztRQUNILENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBbkJELDBEQW1CQztJQUVELGdGQUFnRjtJQUNoRixTQUFnQixxQkFBcUIsQ0FBQyxJQUFVLEVBQUUsT0FBeUI7UUFDekUsTUFBTSxTQUFTLEdBQUcscUJBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUVyQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRTtZQUNwQixPQUFPLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3REO1FBRUQsTUFBTSxPQUFPLEdBQUcsU0FBUyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFcEQsSUFBSSxPQUFPLENBQUMsSUFBSSxLQUFLLFNBQVMsRUFBRTtZQUM5QixPQUFPLENBQUMsSUFBSSxHQUFHLElBQUksT0FBTyxDQUFDLElBQUksVUFBVSxDQUFDO1NBQzNDO1FBRUQsT0FBTyxtQ0FBa0IsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQWRELHNEQWNDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7V29ya3NwYWNlUHJvamVjdH0gZnJvbSAnQGFuZ3VsYXItZGV2a2l0L2NvcmUvc3JjL2V4cGVyaW1lbnRhbC93b3Jrc3BhY2UnO1xuaW1wb3J0IHtTY2hlbWF0aWNzRXhjZXB0aW9uLCBUcmVlfSBmcm9tICdAYW5ndWxhci1kZXZraXQvc2NoZW1hdGljcyc7XG5pbXBvcnQge1NjaGVtYSBhcyBDb21wb25lbnRPcHRpb25zfSBmcm9tICdAc2NoZW1hdGljcy9hbmd1bGFyL2NvbXBvbmVudC9zY2hlbWEnO1xuaW1wb3J0IHtJbnNlcnRDaGFuZ2V9IGZyb20gJ0BzY2hlbWF0aWNzL2FuZ3VsYXIvdXRpbGl0eS9jaGFuZ2UnO1xuaW1wb3J0IHtnZXRXb3Jrc3BhY2V9IGZyb20gJ0BzY2hlbWF0aWNzL2FuZ3VsYXIvdXRpbGl0eS9jb25maWcnO1xuaW1wb3J0IHtmaW5kTW9kdWxlRnJvbU9wdGlvbnMgYXMgaW50ZXJuYWxGaW5kTW9kdWxlfSBmcm9tICdAc2NoZW1hdGljcy9hbmd1bGFyL3V0aWxpdHkvZmluZC1tb2R1bGUnO1xuaW1wb3J0ICogYXMgdHMgZnJvbSAndHlwZXNjcmlwdCc7XG5pbXBvcnQge2dldFByb2plY3RNYWluRmlsZX0gZnJvbSAnLi9wcm9qZWN0LW1haW4tZmlsZSc7XG5pbXBvcnQge2FkZEltcG9ydFRvTW9kdWxlLCBnZXRBcHBNb2R1bGVQYXRofSBmcm9tICcuL3ZlbmRvcmVkLWFzdC11dGlscyc7XG5cbi8qKiBSZWFkcyBmaWxlIGdpdmVuIHBhdGggYW5kIHJldHVybnMgVHlwZVNjcmlwdCBzb3VyY2UgZmlsZS4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVNvdXJjZUZpbGUoaG9zdDogVHJlZSwgcGF0aDogc3RyaW5nKTogdHMuU291cmNlRmlsZSB7XG4gIGNvbnN0IGJ1ZmZlciA9IGhvc3QucmVhZChwYXRoKTtcbiAgaWYgKCFidWZmZXIpIHtcbiAgICB0aHJvdyBuZXcgU2NoZW1hdGljc0V4Y2VwdGlvbihgQ291bGQgbm90IGZpbmQgZmlsZSBmb3IgcGF0aDogJHtwYXRofWApO1xuICB9XG4gIHJldHVybiB0cy5jcmVhdGVTb3VyY2VGaWxlKHBhdGgsIGJ1ZmZlci50b1N0cmluZygpLCB0cy5TY3JpcHRUYXJnZXQuTGF0ZXN0LCB0cnVlKTtcbn1cblxuLyoqIEltcG9ydCBhbmQgYWRkIG1vZHVsZSB0byByb290IGFwcCBtb2R1bGUuICovXG5leHBvcnQgZnVuY3Rpb24gYWRkTW9kdWxlSW1wb3J0VG9Sb290TW9kdWxlKGhvc3Q6IFRyZWUsIG1vZHVsZU5hbWU6IHN0cmluZywgc3JjOiBzdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3Q6IFdvcmtzcGFjZVByb2plY3QpIHtcbiAgY29uc3QgbW9kdWxlUGF0aCA9IGdldEFwcE1vZHVsZVBhdGgoaG9zdCwgZ2V0UHJvamVjdE1haW5GaWxlKHByb2plY3QpKTtcbiAgYWRkTW9kdWxlSW1wb3J0VG9Nb2R1bGUoaG9zdCwgbW9kdWxlUGF0aCwgbW9kdWxlTmFtZSwgc3JjKTtcbn1cblxuLyoqXG4gKiBJbXBvcnQgYW5kIGFkZCBtb2R1bGUgdG8gc3BlY2lmaWMgbW9kdWxlIHBhdGguXG4gKiBAcGFyYW0gaG9zdCB0aGUgdHJlZSB3ZSBhcmUgdXBkYXRpbmdcbiAqIEBwYXJhbSBtb2R1bGVQYXRoIHNyYyBsb2NhdGlvbiBvZiB0aGUgbW9kdWxlIHRvIGltcG9ydFxuICogQHBhcmFtIG1vZHVsZU5hbWUgbmFtZSBvZiBtb2R1bGUgdG8gaW1wb3J0XG4gKiBAcGFyYW0gc3JjIHNyYyBsb2NhdGlvbiB0byBpbXBvcnRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkZE1vZHVsZUltcG9ydFRvTW9kdWxlKGhvc3Q6IFRyZWUsIG1vZHVsZVBhdGg6IHN0cmluZywgbW9kdWxlTmFtZTogc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogc3RyaW5nKSB7XG5cbiAgY29uc3QgbW9kdWxlU291cmNlID0gcGFyc2VTb3VyY2VGaWxlKGhvc3QsIG1vZHVsZVBhdGgpO1xuXG4gIGlmICghbW9kdWxlU291cmNlKSB7XG4gICAgdGhyb3cgbmV3IFNjaGVtYXRpY3NFeGNlcHRpb24oYE1vZHVsZSBub3QgZm91bmQ6ICR7bW9kdWxlUGF0aH1gKTtcbiAgfVxuXG4gIGNvbnN0IGNoYW5nZXMgPSBhZGRJbXBvcnRUb01vZHVsZShtb2R1bGVTb3VyY2UsIG1vZHVsZVBhdGgsIG1vZHVsZU5hbWUsIHNyYyk7XG4gIGNvbnN0IHJlY29yZGVyID0gaG9zdC5iZWdpblVwZGF0ZShtb2R1bGVQYXRoKTtcblxuICBjaGFuZ2VzLmZvckVhY2goKGNoYW5nZSkgPT4ge1xuICAgIGlmIChjaGFuZ2UgaW5zdGFuY2VvZiBJbnNlcnRDaGFuZ2UpIHtcbiAgICAgIHJlY29yZGVyLmluc2VydExlZnQoY2hhbmdlLnBvcywgY2hhbmdlLnRvQWRkKTtcbiAgICB9XG4gIH0pO1xuXG4gIGhvc3QuY29tbWl0VXBkYXRlKHJlY29yZGVyKTtcbn1cblxuLyoqIFdyYXBzIHRoZSBpbnRlcm5hbCBmaW5kIG1vZHVsZSBmcm9tIG9wdGlvbnMgd2l0aCB1bmRlZmluZWQgcGF0aCBoYW5kbGluZyAgKi9cbmV4cG9ydCBmdW5jdGlvbiBmaW5kTW9kdWxlRnJvbU9wdGlvbnMoaG9zdDogVHJlZSwgb3B0aW9uczogQ29tcG9uZW50T3B0aW9ucyk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gIGNvbnN0IHdvcmtzcGFjZSA9IGdldFdvcmtzcGFjZShob3N0KTtcblxuICBpZiAoIW9wdGlvbnMucHJvamVjdCkge1xuICAgIG9wdGlvbnMucHJvamVjdCA9IE9iamVjdC5rZXlzKHdvcmtzcGFjZS5wcm9qZWN0cylbMF07XG4gIH1cblxuICBjb25zdCBwcm9qZWN0ID0gd29ya3NwYWNlLnByb2plY3RzW29wdGlvbnMucHJvamVjdF07XG5cbiAgaWYgKG9wdGlvbnMucGF0aCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgb3B0aW9ucy5wYXRoID0gYC8ke3Byb2plY3Qucm9vdH0vc3JjL2FwcGA7XG4gIH1cblxuICByZXR1cm4gaW50ZXJuYWxGaW5kTW9kdWxlKGhvc3QsIG9wdGlvbnMpO1xufVxuIl19
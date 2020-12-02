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
        define("@angular/cdk/schematics/ng-add/index", ["require", "exports", "@angular-devkit/schematics/tasks", "@angular/cdk/schematics/ng-add/package-config"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const tasks_1 = require("@angular-devkit/schematics/tasks");
    const package_config_1 = require("@angular/cdk/schematics/ng-add/package-config");
    /**
     * Schematic factory entry-point for the `ng-add` schematic. The ng-add schematic will be
     * automatically executed if developers run `ng add @angular/cdk`.
     *
     * By default, the CLI already installs the package that has been specified with `ng add`.
     * We just store the version in the `package.json` in case the package manager didn't. Also
     * this ensures that there will be no error that says that the CDK does not support `ng add`.
     */
    function default_1() {
        return (host, context) => {
            // The CLI inserts `@angular/cdk` into the `package.json` before this schematic runs. This
            // means that we do not need to insert the CDK into `package.json` files again. In some cases
            // though, it could happen that this schematic runs outside of the CLI `ng add` command, or
            // the CDK is only listed as a dev dependency. If that is the case, we insert a version based
            // on the current build version (substituted version placeholder).
            if (package_config_1.getPackageVersionFromPackageJson(host, '@angular/cdk') === null) {
                // In order to align the CDK version with other Angular dependencies that are setup by
                // `@schematics/angular`, we use tilde instead of caret. This is default for Angular
                // dependencies in new CLI projects.
                package_config_1.addPackageToPackageJson(host, '@angular/cdk', `~9.2.1`);
                // Add a task to run the package manager. This is necessary because we updated the
                // workspace "package.json" file and we want lock files to reflect the new version range.
                context.addTask(new tasks_1.NodePackageInstallTask());
            }
        };
    }
    exports.default = default_1;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY2RrL3NjaGVtYXRpY3MvbmctYWRkL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRzs7Ozs7Ozs7Ozs7O0lBR0gsNERBQXdFO0lBQ3hFLGtGQUEyRjtJQUUzRjs7Ozs7OztPQU9HO0lBQ0g7UUFDRSxPQUFPLENBQUMsSUFBVSxFQUFFLE9BQXlCLEVBQUUsRUFBRTtZQUMvQywwRkFBMEY7WUFDMUYsNkZBQTZGO1lBQzdGLDJGQUEyRjtZQUMzRiw2RkFBNkY7WUFDN0Ysa0VBQWtFO1lBQ2xFLElBQUksaURBQWdDLENBQUMsSUFBSSxFQUFFLGNBQWMsQ0FBQyxLQUFLLElBQUksRUFBRTtnQkFDbkUsc0ZBQXNGO2dCQUN0RixvRkFBb0Y7Z0JBQ3BGLG9DQUFvQztnQkFDcEMsd0NBQXVCLENBQUMsSUFBSSxFQUFFLGNBQWMsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO2dCQUVwRSxrRkFBa0Y7Z0JBQ2xGLHlGQUF5RjtnQkFDekYsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLDhCQUFzQixFQUFFLENBQUMsQ0FBQzthQUMvQztRQUNILENBQUMsQ0FBQztJQUNKLENBQUM7SUFsQkQsNEJBa0JDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7UnVsZSwgU2NoZW1hdGljQ29udGV4dCwgVHJlZX0gZnJvbSAnQGFuZ3VsYXItZGV2a2l0L3NjaGVtYXRpY3MnO1xuaW1wb3J0IHtOb2RlUGFja2FnZUluc3RhbGxUYXNrfSBmcm9tICdAYW5ndWxhci1kZXZraXQvc2NoZW1hdGljcy90YXNrcyc7XG5pbXBvcnQge2FkZFBhY2thZ2VUb1BhY2thZ2VKc29uLCBnZXRQYWNrYWdlVmVyc2lvbkZyb21QYWNrYWdlSnNvbn0gZnJvbSAnLi9wYWNrYWdlLWNvbmZpZyc7XG5cbi8qKlxuICogU2NoZW1hdGljIGZhY3RvcnkgZW50cnktcG9pbnQgZm9yIHRoZSBgbmctYWRkYCBzY2hlbWF0aWMuIFRoZSBuZy1hZGQgc2NoZW1hdGljIHdpbGwgYmVcbiAqIGF1dG9tYXRpY2FsbHkgZXhlY3V0ZWQgaWYgZGV2ZWxvcGVycyBydW4gYG5nIGFkZCBAYW5ndWxhci9jZGtgLlxuICpcbiAqIEJ5IGRlZmF1bHQsIHRoZSBDTEkgYWxyZWFkeSBpbnN0YWxscyB0aGUgcGFja2FnZSB0aGF0IGhhcyBiZWVuIHNwZWNpZmllZCB3aXRoIGBuZyBhZGRgLlxuICogV2UganVzdCBzdG9yZSB0aGUgdmVyc2lvbiBpbiB0aGUgYHBhY2thZ2UuanNvbmAgaW4gY2FzZSB0aGUgcGFja2FnZSBtYW5hZ2VyIGRpZG4ndC4gQWxzb1xuICogdGhpcyBlbnN1cmVzIHRoYXQgdGhlcmUgd2lsbCBiZSBubyBlcnJvciB0aGF0IHNheXMgdGhhdCB0aGUgQ0RLIGRvZXMgbm90IHN1cHBvcnQgYG5nIGFkZGAuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCk6IFJ1bGUge1xuICByZXR1cm4gKGhvc3Q6IFRyZWUsIGNvbnRleHQ6IFNjaGVtYXRpY0NvbnRleHQpID0+IHtcbiAgICAvLyBUaGUgQ0xJIGluc2VydHMgYEBhbmd1bGFyL2Nka2AgaW50byB0aGUgYHBhY2thZ2UuanNvbmAgYmVmb3JlIHRoaXMgc2NoZW1hdGljIHJ1bnMuIFRoaXNcbiAgICAvLyBtZWFucyB0aGF0IHdlIGRvIG5vdCBuZWVkIHRvIGluc2VydCB0aGUgQ0RLIGludG8gYHBhY2thZ2UuanNvbmAgZmlsZXMgYWdhaW4uIEluIHNvbWUgY2FzZXNcbiAgICAvLyB0aG91Z2gsIGl0IGNvdWxkIGhhcHBlbiB0aGF0IHRoaXMgc2NoZW1hdGljIHJ1bnMgb3V0c2lkZSBvZiB0aGUgQ0xJIGBuZyBhZGRgIGNvbW1hbmQsIG9yXG4gICAgLy8gdGhlIENESyBpcyBvbmx5IGxpc3RlZCBhcyBhIGRldiBkZXBlbmRlbmN5LiBJZiB0aGF0IGlzIHRoZSBjYXNlLCB3ZSBpbnNlcnQgYSB2ZXJzaW9uIGJhc2VkXG4gICAgLy8gb24gdGhlIGN1cnJlbnQgYnVpbGQgdmVyc2lvbiAoc3Vic3RpdHV0ZWQgdmVyc2lvbiBwbGFjZWhvbGRlcikuXG4gICAgaWYgKGdldFBhY2thZ2VWZXJzaW9uRnJvbVBhY2thZ2VKc29uKGhvc3QsICdAYW5ndWxhci9jZGsnKSA9PT0gbnVsbCkge1xuICAgICAgLy8gSW4gb3JkZXIgdG8gYWxpZ24gdGhlIENESyB2ZXJzaW9uIHdpdGggb3RoZXIgQW5ndWxhciBkZXBlbmRlbmNpZXMgdGhhdCBhcmUgc2V0dXAgYnlcbiAgICAgIC8vIGBAc2NoZW1hdGljcy9hbmd1bGFyYCwgd2UgdXNlIHRpbGRlIGluc3RlYWQgb2YgY2FyZXQuIFRoaXMgaXMgZGVmYXVsdCBmb3IgQW5ndWxhclxuICAgICAgLy8gZGVwZW5kZW5jaWVzIGluIG5ldyBDTEkgcHJvamVjdHMuXG4gICAgICBhZGRQYWNrYWdlVG9QYWNrYWdlSnNvbihob3N0LCAnQGFuZ3VsYXIvY2RrJywgYH4wLjAuMC1QTEFDRUhPTERFUmApO1xuXG4gICAgICAvLyBBZGQgYSB0YXNrIHRvIHJ1biB0aGUgcGFja2FnZSBtYW5hZ2VyLiBUaGlzIGlzIG5lY2Vzc2FyeSBiZWNhdXNlIHdlIHVwZGF0ZWQgdGhlXG4gICAgICAvLyB3b3Jrc3BhY2UgXCJwYWNrYWdlLmpzb25cIiBmaWxlIGFuZCB3ZSB3YW50IGxvY2sgZmlsZXMgdG8gcmVmbGVjdCB0aGUgbmV3IHZlcnNpb24gcmFuZ2UuXG4gICAgICBjb250ZXh0LmFkZFRhc2sobmV3IE5vZGVQYWNrYWdlSW5zdGFsbFRhc2soKSk7XG4gICAgfVxuICB9O1xufVxuIl19
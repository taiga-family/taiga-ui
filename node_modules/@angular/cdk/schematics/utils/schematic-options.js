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
        define("@angular/cdk/schematics/utils/schematic-options", ["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Returns the default options for the `@schematics/angular:component` schematic which would
     * have been specified at project initialization (ng new or ng init).
     *
     * This is necessary because the Angular CLI only exposes the default values for the "--style",
     * "--inlineStyle", "--skipTests" and "--inlineTemplate" options to the "component" schematic.
     */
    function getDefaultComponentOptions(project) {
        // Note: Not all options which are available when running "ng new" will be stored in the
        // workspace config. List of options which will be available in the configuration:
        // angular/angular-cli/blob/master/packages/schematics/angular/application/index.ts#L109-L131
        let skipTests = getDefaultComponentOption(project, ['skipTests'], null);
        // In case "skipTests" is not set explicitly, also look for the "spec" option. The "spec"
        // option has been deprecated but can be still used in older Angular CLI projects.
        // See: https://github.com/angular/angular-cli/commit/a12a4e02a4689b5bdbc6e740c0d9865afb55671a
        if (skipTests === null) {
            skipTests = !getDefaultComponentOption(project, ['spec'], true);
        }
        return {
            style: getDefaultComponentOption(project, ['style', 'styleext'], 'css'),
            inlineStyle: getDefaultComponentOption(project, ['inlineStyle'], false),
            inlineTemplate: getDefaultComponentOption(project, ['inlineTemplate'], false),
            skipTests: skipTests,
        };
    }
    exports.getDefaultComponentOptions = getDefaultComponentOptions;
    /**
     * Gets the default value for the specified option. The default options will be determined
     * by looking at the stored schematic options for `@schematics/angular:component` in the
     * CLI workspace configuration.
     */
    function getDefaultComponentOption(project, optionNames, fallbackValue) {
        for (let optionName of optionNames) {
            if (project.schematics &&
                project.schematics['@schematics/angular:component'] &&
                project.schematics['@schematics/angular:component'][optionName] != null) {
                return project.schematics['@schematics/angular:component'][optionName];
            }
        }
        return fallbackValue;
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hdGljLW9wdGlvbnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY2RrL3NjaGVtYXRpY3MvdXRpbHMvc2NoZW1hdGljLW9wdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HOzs7Ozs7Ozs7Ozs7SUFLSDs7Ozs7O09BTUc7SUFDSCxTQUFnQiwwQkFBMEIsQ0FBQyxPQUF5QjtRQUNsRSx3RkFBd0Y7UUFDeEYsa0ZBQWtGO1FBQ2xGLDZGQUE2RjtRQUM3RixJQUFJLFNBQVMsR0FBRyx5QkFBeUIsQ0FBZSxPQUFPLEVBQUUsQ0FBQyxXQUFXLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUV0Rix5RkFBeUY7UUFDekYsa0ZBQWtGO1FBQ2xGLDhGQUE4RjtRQUM5RixJQUFJLFNBQVMsS0FBSyxJQUFJLEVBQUU7WUFDdEIsU0FBUyxHQUFHLENBQUMseUJBQXlCLENBQUMsT0FBTyxFQUFFLENBQUMsTUFBTSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDakU7UUFFRCxPQUFPO1lBQ0wsS0FBSyxFQUFFLHlCQUF5QixDQUFDLE9BQU8sRUFBRSxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUMsRUFBRSxLQUFLLENBQUM7WUFDdkUsV0FBVyxFQUFFLHlCQUF5QixDQUFDLE9BQU8sRUFBRSxDQUFDLGFBQWEsQ0FBQyxFQUFFLEtBQUssQ0FBQztZQUN2RSxjQUFjLEVBQUUseUJBQXlCLENBQUMsT0FBTyxFQUFFLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxLQUFLLENBQUM7WUFDN0UsU0FBUyxFQUFFLFNBQVM7U0FDckIsQ0FBQztJQUNKLENBQUM7SUFuQkQsZ0VBbUJDO0lBRUQ7Ozs7T0FJRztJQUNILFNBQVMseUJBQXlCLENBQUksT0FBeUIsRUFBRSxXQUFxQixFQUNoRCxhQUFnQjtRQUNwRCxLQUFLLElBQUksVUFBVSxJQUFJLFdBQVcsRUFBRTtZQUNsQyxJQUFJLE9BQU8sQ0FBQyxVQUFVO2dCQUNsQixPQUFPLENBQUMsVUFBVSxDQUFDLCtCQUErQixDQUFDO2dCQUNuRCxPQUFPLENBQUMsVUFBVSxDQUFDLCtCQUErQixDQUFDLENBQUMsVUFBVSxDQUFDLElBQUksSUFBSSxFQUFFO2dCQUUzRSxPQUFPLE9BQU8sQ0FBQyxVQUFVLENBQUMsK0JBQStCLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQzthQUN4RTtTQUNGO1FBRUQsT0FBTyxhQUFhLENBQUM7SUFDdkIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge1dvcmtzcGFjZVByb2plY3R9IGZyb20gJ0Bhbmd1bGFyLWRldmtpdC9jb3JlL3NyYy9leHBlcmltZW50YWwvd29ya3NwYWNlJztcblxuXG4vKipcbiAqIFJldHVybnMgdGhlIGRlZmF1bHQgb3B0aW9ucyBmb3IgdGhlIGBAc2NoZW1hdGljcy9hbmd1bGFyOmNvbXBvbmVudGAgc2NoZW1hdGljIHdoaWNoIHdvdWxkXG4gKiBoYXZlIGJlZW4gc3BlY2lmaWVkIGF0IHByb2plY3QgaW5pdGlhbGl6YXRpb24gKG5nIG5ldyBvciBuZyBpbml0KS5cbiAqXG4gKiBUaGlzIGlzIG5lY2Vzc2FyeSBiZWNhdXNlIHRoZSBBbmd1bGFyIENMSSBvbmx5IGV4cG9zZXMgdGhlIGRlZmF1bHQgdmFsdWVzIGZvciB0aGUgXCItLXN0eWxlXCIsXG4gKiBcIi0taW5saW5lU3R5bGVcIiwgXCItLXNraXBUZXN0c1wiIGFuZCBcIi0taW5saW5lVGVtcGxhdGVcIiBvcHRpb25zIHRvIHRoZSBcImNvbXBvbmVudFwiIHNjaGVtYXRpYy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldERlZmF1bHRDb21wb25lbnRPcHRpb25zKHByb2plY3Q6IFdvcmtzcGFjZVByb2plY3QpIHtcbiAgLy8gTm90ZTogTm90IGFsbCBvcHRpb25zIHdoaWNoIGFyZSBhdmFpbGFibGUgd2hlbiBydW5uaW5nIFwibmcgbmV3XCIgd2lsbCBiZSBzdG9yZWQgaW4gdGhlXG4gIC8vIHdvcmtzcGFjZSBjb25maWcuIExpc3Qgb2Ygb3B0aW9ucyB3aGljaCB3aWxsIGJlIGF2YWlsYWJsZSBpbiB0aGUgY29uZmlndXJhdGlvbjpcbiAgLy8gYW5ndWxhci9hbmd1bGFyLWNsaS9ibG9iL21hc3Rlci9wYWNrYWdlcy9zY2hlbWF0aWNzL2FuZ3VsYXIvYXBwbGljYXRpb24vaW5kZXgudHMjTDEwOS1MMTMxXG4gIGxldCBza2lwVGVzdHMgPSBnZXREZWZhdWx0Q29tcG9uZW50T3B0aW9uPGJvb2xlYW58bnVsbD4ocHJvamVjdCwgWydza2lwVGVzdHMnXSwgbnVsbCk7XG5cbiAgLy8gSW4gY2FzZSBcInNraXBUZXN0c1wiIGlzIG5vdCBzZXQgZXhwbGljaXRseSwgYWxzbyBsb29rIGZvciB0aGUgXCJzcGVjXCIgb3B0aW9uLiBUaGUgXCJzcGVjXCJcbiAgLy8gb3B0aW9uIGhhcyBiZWVuIGRlcHJlY2F0ZWQgYnV0IGNhbiBiZSBzdGlsbCB1c2VkIGluIG9sZGVyIEFuZ3VsYXIgQ0xJIHByb2plY3RzLlxuICAvLyBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXItY2xpL2NvbW1pdC9hMTJhNGUwMmE0Njg5YjViZGJjNmU3NDBjMGQ5ODY1YWZiNTU2NzFhXG4gIGlmIChza2lwVGVzdHMgPT09IG51bGwpIHtcbiAgICBza2lwVGVzdHMgPSAhZ2V0RGVmYXVsdENvbXBvbmVudE9wdGlvbihwcm9qZWN0LCBbJ3NwZWMnXSwgdHJ1ZSk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHN0eWxlOiBnZXREZWZhdWx0Q29tcG9uZW50T3B0aW9uKHByb2plY3QsIFsnc3R5bGUnLCAnc3R5bGVleHQnXSwgJ2NzcycpLFxuICAgIGlubGluZVN0eWxlOiBnZXREZWZhdWx0Q29tcG9uZW50T3B0aW9uKHByb2plY3QsIFsnaW5saW5lU3R5bGUnXSwgZmFsc2UpLFxuICAgIGlubGluZVRlbXBsYXRlOiBnZXREZWZhdWx0Q29tcG9uZW50T3B0aW9uKHByb2plY3QsIFsnaW5saW5lVGVtcGxhdGUnXSwgZmFsc2UpLFxuICAgIHNraXBUZXN0czogc2tpcFRlc3RzLFxuICB9O1xufVxuXG4vKipcbiAqIEdldHMgdGhlIGRlZmF1bHQgdmFsdWUgZm9yIHRoZSBzcGVjaWZpZWQgb3B0aW9uLiBUaGUgZGVmYXVsdCBvcHRpb25zIHdpbGwgYmUgZGV0ZXJtaW5lZFxuICogYnkgbG9va2luZyBhdCB0aGUgc3RvcmVkIHNjaGVtYXRpYyBvcHRpb25zIGZvciBgQHNjaGVtYXRpY3MvYW5ndWxhcjpjb21wb25lbnRgIGluIHRoZVxuICogQ0xJIHdvcmtzcGFjZSBjb25maWd1cmF0aW9uLlxuICovXG5mdW5jdGlvbiBnZXREZWZhdWx0Q29tcG9uZW50T3B0aW9uPFQ+KHByb2plY3Q6IFdvcmtzcGFjZVByb2plY3QsIG9wdGlvbk5hbWVzOiBzdHJpbmdbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFsbGJhY2tWYWx1ZTogVCk6IFQge1xuICBmb3IgKGxldCBvcHRpb25OYW1lIG9mIG9wdGlvbk5hbWVzKSB7XG4gICAgaWYgKHByb2plY3Quc2NoZW1hdGljcyAmJlxuICAgICAgICBwcm9qZWN0LnNjaGVtYXRpY3NbJ0BzY2hlbWF0aWNzL2FuZ3VsYXI6Y29tcG9uZW50J10gJiZcbiAgICAgICAgcHJvamVjdC5zY2hlbWF0aWNzWydAc2NoZW1hdGljcy9hbmd1bGFyOmNvbXBvbmVudCddW29wdGlvbk5hbWVdICE9IG51bGwpIHtcblxuICAgICAgcmV0dXJuIHByb2plY3Quc2NoZW1hdGljc1snQHNjaGVtYXRpY3MvYW5ndWxhcjpjb21wb25lbnQnXVtvcHRpb25OYW1lXTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsbGJhY2tWYWx1ZTtcbn1cbiJdfQ==
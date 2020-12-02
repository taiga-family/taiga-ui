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
        define("@angular/cdk/schematics/utils/project-targets", ["require", "exports", "@angular-devkit/schematics"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const schematics_1 = require("@angular-devkit/schematics");
    /** Object that maps a CLI target to its default builder name. */
    exports.defaultTargetBuilders = {
        build: '@angular-devkit/build-angular:browser',
        test: '@angular-devkit/build-angular:karma',
    };
    /** Resolves the architect options for the build target of the given project. */
    function getProjectTargetOptions(project, buildTarget) {
        if (project.targets && project.targets[buildTarget] && project.targets[buildTarget].options) {
            return project.targets[buildTarget].options;
        }
        // TODO(devversion): consider removing this architect check if the CLI completely switched
        // over to `targets`, and the `architect` support has been removed.
        // See: https://github.com/angular/angular-cli/commit/307160806cb48c95ecb8982854f452303801ac9f
        if (project.architect && project.architect[buildTarget] &&
            project.architect[buildTarget].options) {
            return project.architect[buildTarget].options;
        }
        throw new schematics_1.SchematicsException(`Cannot determine project target configuration for: ${buildTarget}.`);
    }
    exports.getProjectTargetOptions = getProjectTargetOptions;
    /** Gets all targets from the given project that match the specified builder name. */
    function getTargetsByBuilderName(project, builderName) {
        const targets = project.targets || project.architect || {};
        return Object.keys(targets)
            .filter(name => targets[name].builder === builderName)
            .map(name => targets[name]);
    }
    exports.getTargetsByBuilderName = getTargetsByBuilderName;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdC10YXJnZXRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2Nkay9zY2hlbWF0aWNzL3V0aWxzL3Byb2plY3QtdGFyZ2V0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7Ozs7Ozs7Ozs7OztJQUdILDJEQUErRDtJQUcvRCxpRUFBaUU7SUFDcEQsUUFBQSxxQkFBcUIsR0FBRztRQUNuQyxLQUFLLEVBQUUsdUNBQXVDO1FBQzlDLElBQUksRUFBRSxxQ0FBcUM7S0FDNUMsQ0FBQztJQUVGLGdGQUFnRjtJQUNoRixTQUFnQix1QkFBdUIsQ0FBQyxPQUF5QixFQUFFLFdBQW1CO1FBQ3BGLElBQUksT0FBTyxDQUFDLE9BQU8sSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsT0FBTyxFQUFFO1lBQzNGLE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxPQUFPLENBQUM7U0FDN0M7UUFFRCwwRkFBMEY7UUFDMUYsbUVBQW1FO1FBQ25FLDhGQUE4RjtRQUM5RixJQUFJLE9BQU8sQ0FBQyxTQUFTLElBQUksT0FBTyxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUM7WUFDbkQsT0FBTyxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxPQUFPLEVBQUU7WUFDMUMsT0FBTyxPQUFPLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDLE9BQU8sQ0FBQztTQUMvQztRQUVELE1BQU0sSUFBSSxnQ0FBbUIsQ0FDekIsc0RBQXNELFdBQVcsR0FBRyxDQUFDLENBQUM7SUFDNUUsQ0FBQztJQWZELDBEQWVDO0lBRUQscUZBQXFGO0lBQ3JGLFNBQWdCLHVCQUF1QixDQUNuQyxPQUF5QixFQUFFLFdBQW1CO1FBQ2hELE1BQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQyxPQUFPLElBQUksT0FBTyxDQUFDLFNBQVMsSUFBSSxFQUFFLENBQUM7UUFDM0QsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQzthQUN0QixNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxLQUFLLFdBQVcsQ0FBQzthQUNyRCxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBTkQsMERBTUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtXb3Jrc3BhY2VQcm9qZWN0fSBmcm9tICdAYW5ndWxhci1kZXZraXQvY29yZS9zcmMvZXhwZXJpbWVudGFsL3dvcmtzcGFjZSc7XG5pbXBvcnQge1NjaGVtYXRpY3NFeGNlcHRpb259IGZyb20gJ0Bhbmd1bGFyLWRldmtpdC9zY2hlbWF0aWNzJztcbmltcG9ydCB7QnVpbGRlclRhcmdldH0gZnJvbSAnQHNjaGVtYXRpY3MvYW5ndWxhci91dGlsaXR5L3dvcmtzcGFjZS1tb2RlbHMnO1xuXG4vKiogT2JqZWN0IHRoYXQgbWFwcyBhIENMSSB0YXJnZXQgdG8gaXRzIGRlZmF1bHQgYnVpbGRlciBuYW1lLiAqL1xuZXhwb3J0IGNvbnN0IGRlZmF1bHRUYXJnZXRCdWlsZGVycyA9IHtcbiAgYnVpbGQ6ICdAYW5ndWxhci1kZXZraXQvYnVpbGQtYW5ndWxhcjpicm93c2VyJyxcbiAgdGVzdDogJ0Bhbmd1bGFyLWRldmtpdC9idWlsZC1hbmd1bGFyOmthcm1hJyxcbn07XG5cbi8qKiBSZXNvbHZlcyB0aGUgYXJjaGl0ZWN0IG9wdGlvbnMgZm9yIHRoZSBidWlsZCB0YXJnZXQgb2YgdGhlIGdpdmVuIHByb2plY3QuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0UHJvamVjdFRhcmdldE9wdGlvbnMocHJvamVjdDogV29ya3NwYWNlUHJvamVjdCwgYnVpbGRUYXJnZXQ6IHN0cmluZykge1xuICBpZiAocHJvamVjdC50YXJnZXRzICYmIHByb2plY3QudGFyZ2V0c1tidWlsZFRhcmdldF0gJiYgcHJvamVjdC50YXJnZXRzW2J1aWxkVGFyZ2V0XS5vcHRpb25zKSB7XG4gICAgcmV0dXJuIHByb2plY3QudGFyZ2V0c1tidWlsZFRhcmdldF0ub3B0aW9ucztcbiAgfVxuXG4gIC8vIFRPRE8oZGV2dmVyc2lvbik6IGNvbnNpZGVyIHJlbW92aW5nIHRoaXMgYXJjaGl0ZWN0IGNoZWNrIGlmIHRoZSBDTEkgY29tcGxldGVseSBzd2l0Y2hlZFxuICAvLyBvdmVyIHRvIGB0YXJnZXRzYCwgYW5kIHRoZSBgYXJjaGl0ZWN0YCBzdXBwb3J0IGhhcyBiZWVuIHJlbW92ZWQuXG4gIC8vIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci1jbGkvY29tbWl0LzMwNzE2MDgwNmNiNDhjOTVlY2I4OTgyODU0ZjQ1MjMwMzgwMWFjOWZcbiAgaWYgKHByb2plY3QuYXJjaGl0ZWN0ICYmIHByb2plY3QuYXJjaGl0ZWN0W2J1aWxkVGFyZ2V0XSAmJlxuICAgICAgcHJvamVjdC5hcmNoaXRlY3RbYnVpbGRUYXJnZXRdLm9wdGlvbnMpIHtcbiAgICByZXR1cm4gcHJvamVjdC5hcmNoaXRlY3RbYnVpbGRUYXJnZXRdLm9wdGlvbnM7XG4gIH1cblxuICB0aHJvdyBuZXcgU2NoZW1hdGljc0V4Y2VwdGlvbihcbiAgICAgIGBDYW5ub3QgZGV0ZXJtaW5lIHByb2plY3QgdGFyZ2V0IGNvbmZpZ3VyYXRpb24gZm9yOiAke2J1aWxkVGFyZ2V0fS5gKTtcbn1cblxuLyoqIEdldHMgYWxsIHRhcmdldHMgZnJvbSB0aGUgZ2l2ZW4gcHJvamVjdCB0aGF0IG1hdGNoIHRoZSBzcGVjaWZpZWQgYnVpbGRlciBuYW1lLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFRhcmdldHNCeUJ1aWxkZXJOYW1lKFxuICAgIHByb2plY3Q6IFdvcmtzcGFjZVByb2plY3QsIGJ1aWxkZXJOYW1lOiBzdHJpbmcpOiBCdWlsZGVyVGFyZ2V0PGFueSwgdW5rbm93bj5bXSB7XG4gIGNvbnN0IHRhcmdldHMgPSBwcm9qZWN0LnRhcmdldHMgfHwgcHJvamVjdC5hcmNoaXRlY3QgfHwge307XG4gIHJldHVybiBPYmplY3Qua2V5cyh0YXJnZXRzKVxuICAgICAgLmZpbHRlcihuYW1lID0+IHRhcmdldHNbbmFtZV0uYnVpbGRlciA9PT0gYnVpbGRlck5hbWUpXG4gICAgICAubWFwKG5hbWUgPT4gdGFyZ2V0c1tuYW1lXSk7XG59XG4iXX0=
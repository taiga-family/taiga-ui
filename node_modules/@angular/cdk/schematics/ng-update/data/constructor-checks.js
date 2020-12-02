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
        define("@angular/cdk/schematics/ng-update/data/constructor-checks", ["require", "exports", "@angular/cdk/schematics/update-tool/target-version"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const target_version_1 = require("@angular/cdk/schematics/update-tool/target-version");
    /**
     * List of class names for which the constructor signature has been changed. The new constructor
     * signature types don't need to be stored here because the signature will be determined
     * automatically through type checking.
     */
    exports.constructorChecks = {
        [target_version_1.TargetVersion.V9]: [{
                pr: 'https://github.com/angular/components/pull/17084',
                changes: ['DropListRef']
            }],
        [target_version_1.TargetVersion.V8]: [{
                pr: 'https://github.com/angular/components/pull/15647',
                changes: [
                    'CdkDrag', 'CdkDropList', 'ConnectedPositionStrategy', 'FlexibleConnectedPositionStrategy',
                    'OverlayPositionBuilder', 'CdkTable'
                ]
            }],
        [target_version_1.TargetVersion.V7]: [],
        [target_version_1.TargetVersion.V6]: []
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc3RydWN0b3ItY2hlY2tzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2Nkay9zY2hlbWF0aWNzL25nLXVwZGF0ZS9kYXRhL2NvbnN0cnVjdG9yLWNoZWNrcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7Ozs7Ozs7Ozs7OztJQUVILHVGQUErRDtJQUsvRDs7OztPQUlHO0lBQ1UsUUFBQSxpQkFBaUIsR0FBaUQ7UUFDN0UsQ0FBQyw4QkFBYSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7Z0JBQ25CLEVBQUUsRUFBRSxrREFBa0Q7Z0JBQ3RELE9BQU8sRUFBRSxDQUFDLGFBQWEsQ0FBQzthQUN6QixDQUFDO1FBQ0YsQ0FBQyw4QkFBYSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7Z0JBQ25CLEVBQUUsRUFBRSxrREFBa0Q7Z0JBQ3RELE9BQU8sRUFBRTtvQkFDUCxTQUFTLEVBQUUsYUFBYSxFQUFFLDJCQUEyQixFQUFFLG1DQUFtQztvQkFDMUYsd0JBQXdCLEVBQUUsVUFBVTtpQkFDckM7YUFDRixDQUFDO1FBQ0YsQ0FBQyw4QkFBYSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDdEIsQ0FBQyw4QkFBYSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7S0FDdkIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge1RhcmdldFZlcnNpb259IGZyb20gJy4uLy4uL3VwZGF0ZS10b29sL3RhcmdldC12ZXJzaW9uJztcbmltcG9ydCB7VmVyc2lvbkNoYW5nZXN9IGZyb20gJy4uLy4uL3VwZGF0ZS10b29sL3ZlcnNpb24tY2hhbmdlcyc7XG5cbmV4cG9ydCB0eXBlIENvbnN0cnVjdG9yQ2hlY2tzVXBncmFkZURhdGEgPSBzdHJpbmc7XG5cbi8qKlxuICogTGlzdCBvZiBjbGFzcyBuYW1lcyBmb3Igd2hpY2ggdGhlIGNvbnN0cnVjdG9yIHNpZ25hdHVyZSBoYXMgYmVlbiBjaGFuZ2VkLiBUaGUgbmV3IGNvbnN0cnVjdG9yXG4gKiBzaWduYXR1cmUgdHlwZXMgZG9uJ3QgbmVlZCB0byBiZSBzdG9yZWQgaGVyZSBiZWNhdXNlIHRoZSBzaWduYXR1cmUgd2lsbCBiZSBkZXRlcm1pbmVkXG4gKiBhdXRvbWF0aWNhbGx5IHRocm91Z2ggdHlwZSBjaGVja2luZy5cbiAqL1xuZXhwb3J0IGNvbnN0IGNvbnN0cnVjdG9yQ2hlY2tzOiBWZXJzaW9uQ2hhbmdlczxDb25zdHJ1Y3RvckNoZWNrc1VwZ3JhZGVEYXRhPiA9IHtcbiAgW1RhcmdldFZlcnNpb24uVjldOiBbe1xuICAgIHByOiAnaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvY29tcG9uZW50cy9wdWxsLzE3MDg0JyxcbiAgICBjaGFuZ2VzOiBbJ0Ryb3BMaXN0UmVmJ11cbiAgfV0sXG4gIFtUYXJnZXRWZXJzaW9uLlY4XTogW3tcbiAgICBwcjogJ2h0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2NvbXBvbmVudHMvcHVsbC8xNTY0NycsXG4gICAgY2hhbmdlczogW1xuICAgICAgJ0Nka0RyYWcnLCAnQ2RrRHJvcExpc3QnLCAnQ29ubmVjdGVkUG9zaXRpb25TdHJhdGVneScsICdGbGV4aWJsZUNvbm5lY3RlZFBvc2l0aW9uU3RyYXRlZ3knLFxuICAgICAgJ092ZXJsYXlQb3NpdGlvbkJ1aWxkZXInLCAnQ2RrVGFibGUnXG4gICAgXVxuICB9XSxcbiAgW1RhcmdldFZlcnNpb24uVjddOiBbXSxcbiAgW1RhcmdldFZlcnNpb24uVjZdOiBbXVxufTtcbiJdfQ==
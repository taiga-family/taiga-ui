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
        define("@angular/cdk/schematics/ng-update/index", ["require", "exports", "@angular/cdk/schematics/update-tool/target-version", "@angular/cdk/schematics/ng-update/upgrade-data", "@angular/cdk/schematics/ng-update/devkit-migration-rule"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const target_version_1 = require("@angular/cdk/schematics/update-tool/target-version");
    const upgrade_data_1 = require("@angular/cdk/schematics/ng-update/upgrade-data");
    const devkit_migration_rule_1 = require("@angular/cdk/schematics/ng-update/devkit-migration-rule");
    /** Entry point for the migration schematics with target of Angular CDK 6.0.0 */
    function updateToV6() {
        return devkit_migration_rule_1.createMigrationSchematicRule(target_version_1.TargetVersion.V6, [], upgrade_data_1.cdkUpgradeData, onMigrationComplete);
    }
    exports.updateToV6 = updateToV6;
    /** Entry point for the migration schematics with target of Angular CDK 7.0.0 */
    function updateToV7() {
        return devkit_migration_rule_1.createMigrationSchematicRule(target_version_1.TargetVersion.V7, [], upgrade_data_1.cdkUpgradeData, onMigrationComplete);
    }
    exports.updateToV7 = updateToV7;
    /** Entry point for the migration schematics with target of Angular CDK 8.0.0 */
    function updateToV8() {
        return devkit_migration_rule_1.createMigrationSchematicRule(target_version_1.TargetVersion.V8, [], upgrade_data_1.cdkUpgradeData, onMigrationComplete);
    }
    exports.updateToV8 = updateToV8;
    /** Entry point for the migration schematics with target of Angular CDK 9.0.0 */
    function updateToV9() {
        return devkit_migration_rule_1.createMigrationSchematicRule(target_version_1.TargetVersion.V9, [], upgrade_data_1.cdkUpgradeData, onMigrationComplete);
    }
    exports.updateToV9 = updateToV9;
    /** Function that will be called when the migration completed. */
    function onMigrationComplete(context, targetVersion, hasFailures) {
        context.logger.info('');
        context.logger.info(`  ✓  Updated Angular CDK to ${targetVersion}`);
        context.logger.info('');
        if (hasFailures) {
            context.logger.warn('  ⚠  Some issues were detected but could not be fixed automatically. Please check the ' +
                'output above and fix these issues manually.');
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY2RrL3NjaGVtYXRpY3MvbmctdXBkYXRlL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRzs7Ozs7Ozs7Ozs7O0lBR0gsdUZBQTREO0lBQzVELGlGQUE4QztJQUM5QyxtR0FBcUU7SUFFckUsZ0ZBQWdGO0lBQ2hGLFNBQWdCLFVBQVU7UUFDeEIsT0FBTyxvREFBNEIsQ0FBQyw4QkFBYSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsNkJBQWMsRUFBRSxtQkFBbUIsQ0FBQyxDQUFDO0lBQ2pHLENBQUM7SUFGRCxnQ0FFQztJQUVELGdGQUFnRjtJQUNoRixTQUFnQixVQUFVO1FBQ3hCLE9BQU8sb0RBQTRCLENBQUMsOEJBQWEsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLDZCQUFjLEVBQUUsbUJBQW1CLENBQUMsQ0FBQztJQUNqRyxDQUFDO0lBRkQsZ0NBRUM7SUFFRCxnRkFBZ0Y7SUFDaEYsU0FBZ0IsVUFBVTtRQUN4QixPQUFPLG9EQUE0QixDQUFDLDhCQUFhLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSw2QkFBYyxFQUFFLG1CQUFtQixDQUFDLENBQUM7SUFDakcsQ0FBQztJQUZELGdDQUVDO0lBRUQsZ0ZBQWdGO0lBQ2hGLFNBQWdCLFVBQVU7UUFDeEIsT0FBTyxvREFBNEIsQ0FBQyw4QkFBYSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsNkJBQWMsRUFBRSxtQkFBbUIsQ0FBQyxDQUFDO0lBQ2pHLENBQUM7SUFGRCxnQ0FFQztJQUVELGlFQUFpRTtJQUNqRSxTQUFTLG1CQUFtQixDQUFDLE9BQXlCLEVBQUUsYUFBNEIsRUFDdkQsV0FBb0I7UUFDL0MsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDeEIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsK0JBQStCLGFBQWEsRUFBRSxDQUFDLENBQUM7UUFDcEUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFFeEIsSUFBSSxXQUFXLEVBQUU7WUFDZixPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FDZix3RkFBd0Y7Z0JBQ3hGLDZDQUE2QyxDQUFDLENBQUM7U0FDcEQ7SUFDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7UnVsZSwgU2NoZW1hdGljQ29udGV4dH0gZnJvbSAnQGFuZ3VsYXItZGV2a2l0L3NjaGVtYXRpY3MnO1xuaW1wb3J0IHtUYXJnZXRWZXJzaW9ufSBmcm9tICcuLi91cGRhdGUtdG9vbC90YXJnZXQtdmVyc2lvbic7XG5pbXBvcnQge2Nka1VwZ3JhZGVEYXRhfSBmcm9tICcuL3VwZ3JhZGUtZGF0YSc7XG5pbXBvcnQge2NyZWF0ZU1pZ3JhdGlvblNjaGVtYXRpY1J1bGV9IGZyb20gJy4vZGV2a2l0LW1pZ3JhdGlvbi1ydWxlJztcblxuLyoqIEVudHJ5IHBvaW50IGZvciB0aGUgbWlncmF0aW9uIHNjaGVtYXRpY3Mgd2l0aCB0YXJnZXQgb2YgQW5ndWxhciBDREsgNi4wLjAgKi9cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVUb1Y2KCk6IFJ1bGUge1xuICByZXR1cm4gY3JlYXRlTWlncmF0aW9uU2NoZW1hdGljUnVsZShUYXJnZXRWZXJzaW9uLlY2LCBbXSwgY2RrVXBncmFkZURhdGEsIG9uTWlncmF0aW9uQ29tcGxldGUpO1xufVxuXG4vKiogRW50cnkgcG9pbnQgZm9yIHRoZSBtaWdyYXRpb24gc2NoZW1hdGljcyB3aXRoIHRhcmdldCBvZiBBbmd1bGFyIENESyA3LjAuMCAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVRvVjcoKTogUnVsZSB7XG4gIHJldHVybiBjcmVhdGVNaWdyYXRpb25TY2hlbWF0aWNSdWxlKFRhcmdldFZlcnNpb24uVjcsIFtdLCBjZGtVcGdyYWRlRGF0YSwgb25NaWdyYXRpb25Db21wbGV0ZSk7XG59XG5cbi8qKiBFbnRyeSBwb2ludCBmb3IgdGhlIG1pZ3JhdGlvbiBzY2hlbWF0aWNzIHdpdGggdGFyZ2V0IG9mIEFuZ3VsYXIgQ0RLIDguMC4wICovXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlVG9WOCgpOiBSdWxlIHtcbiAgcmV0dXJuIGNyZWF0ZU1pZ3JhdGlvblNjaGVtYXRpY1J1bGUoVGFyZ2V0VmVyc2lvbi5WOCwgW10sIGNka1VwZ3JhZGVEYXRhLCBvbk1pZ3JhdGlvbkNvbXBsZXRlKTtcbn1cblxuLyoqIEVudHJ5IHBvaW50IGZvciB0aGUgbWlncmF0aW9uIHNjaGVtYXRpY3Mgd2l0aCB0YXJnZXQgb2YgQW5ndWxhciBDREsgOS4wLjAgKi9cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVUb1Y5KCk6IFJ1bGUge1xuICByZXR1cm4gY3JlYXRlTWlncmF0aW9uU2NoZW1hdGljUnVsZShUYXJnZXRWZXJzaW9uLlY5LCBbXSwgY2RrVXBncmFkZURhdGEsIG9uTWlncmF0aW9uQ29tcGxldGUpO1xufVxuXG4vKiogRnVuY3Rpb24gdGhhdCB3aWxsIGJlIGNhbGxlZCB3aGVuIHRoZSBtaWdyYXRpb24gY29tcGxldGVkLiAqL1xuZnVuY3Rpb24gb25NaWdyYXRpb25Db21wbGV0ZShjb250ZXh0OiBTY2hlbWF0aWNDb250ZXh0LCB0YXJnZXRWZXJzaW9uOiBUYXJnZXRWZXJzaW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYXNGYWlsdXJlczogYm9vbGVhbikge1xuICBjb250ZXh0LmxvZ2dlci5pbmZvKCcnKTtcbiAgY29udGV4dC5sb2dnZXIuaW5mbyhgICDinJMgIFVwZGF0ZWQgQW5ndWxhciBDREsgdG8gJHt0YXJnZXRWZXJzaW9ufWApO1xuICBjb250ZXh0LmxvZ2dlci5pbmZvKCcnKTtcblxuICBpZiAoaGFzRmFpbHVyZXMpIHtcbiAgICBjb250ZXh0LmxvZ2dlci53YXJuKFxuICAgICAgICAnICDimqAgIFNvbWUgaXNzdWVzIHdlcmUgZGV0ZWN0ZWQgYnV0IGNvdWxkIG5vdCBiZSBmaXhlZCBhdXRvbWF0aWNhbGx5LiBQbGVhc2UgY2hlY2sgdGhlICcgK1xuICAgICAgICAnb3V0cHV0IGFib3ZlIGFuZCBmaXggdGhlc2UgaXNzdWVzIG1hbnVhbGx5LicpO1xuICB9XG59XG4iXX0=
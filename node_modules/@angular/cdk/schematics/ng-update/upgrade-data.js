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
        define("@angular/cdk/schematics/ng-update/upgrade-data", ["require", "exports", "@angular/cdk/schematics/update-tool/version-changes", "@angular/cdk/schematics/ng-update/data/index"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const version_changes_1 = require("@angular/cdk/schematics/update-tool/version-changes");
    const data_1 = require("@angular/cdk/schematics/ng-update/data/index");
    /** Upgrade data for the Angular CDK. */
    exports.cdkUpgradeData = {
        attributeSelectors: data_1.attributeSelectors,
        classNames: data_1.classNames,
        constructorChecks: data_1.constructorChecks,
        cssSelectors: data_1.cssSelectors,
        elementSelectors: data_1.elementSelectors,
        inputNames: data_1.inputNames,
        methodCallChecks: data_1.methodCallChecks,
        outputNames: data_1.outputNames,
        propertyNames: data_1.propertyNames,
    };
    /**
     * Gets the reduced upgrade data for the specified data key. The function reads out the
     * target version and upgrade data object from the migration and resolves the specified
     * data portion that is specifically tied to the target version.
     */
    function getVersionUpgradeData(migration, dataName) {
        // Note that below we need to cast to `unknown` first TS doesn't infer the type of T correctly.
        return version_changes_1.getChangesForTarget(migration.targetVersion, migration.upgradeData[dataName]);
    }
    exports.getVersionUpgradeData = getVersionUpgradeData;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBncmFkZS1kYXRhLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2Nkay9zY2hlbWF0aWNzL25nLXVwZGF0ZS91cGdyYWRlLWRhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HOzs7Ozs7Ozs7Ozs7SUFHSCx5RkFBbUc7SUFDbkcsdUVBbUJnQjtJQUdoQix3Q0FBd0M7SUFDM0IsUUFBQSxjQUFjLEdBQWdCO1FBQ3pDLGtCQUFrQixFQUFsQix5QkFBa0I7UUFDbEIsVUFBVSxFQUFWLGlCQUFVO1FBQ1YsaUJBQWlCLEVBQWpCLHdCQUFpQjtRQUNqQixZQUFZLEVBQVosbUJBQVk7UUFDWixnQkFBZ0IsRUFBaEIsdUJBQWdCO1FBQ2hCLFVBQVUsRUFBVixpQkFBVTtRQUNWLGdCQUFnQixFQUFoQix1QkFBZ0I7UUFDaEIsV0FBVyxFQUFYLGtCQUFXO1FBQ1gsYUFBYSxFQUFiLG9CQUFhO0tBQ2QsQ0FBQztJQWtCRjs7OztPQUlHO0lBQ0gsU0FDQSxxQkFBcUIsQ0FDakIsU0FBaUMsRUFBRSxRQUFXO1FBQ2hELCtGQUErRjtRQUMvRixPQUFPLHFDQUFtQixDQUN0QixTQUFTLENBQUMsYUFBYSxFQUFFLFNBQVMsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFpQyxDQUFDLENBQUM7SUFDaEcsQ0FBQztJQU5ELHNEQU1DIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7TWlncmF0aW9ufSBmcm9tICcuLi91cGRhdGUtdG9vbC9taWdyYXRpb24nO1xuaW1wb3J0IHtnZXRDaGFuZ2VzRm9yVGFyZ2V0LCBWYWx1ZU9mQ2hhbmdlcywgVmVyc2lvbkNoYW5nZXN9IGZyb20gJy4uL3VwZGF0ZS10b29sL3ZlcnNpb24tY2hhbmdlcyc7XG5pbXBvcnQge1xuICBhdHRyaWJ1dGVTZWxlY3RvcnMsXG4gIEF0dHJpYnV0ZVNlbGVjdG9yVXBncmFkZURhdGEsXG4gIGNsYXNzTmFtZXMsXG4gIENsYXNzTmFtZVVwZ3JhZGVEYXRhLFxuICBjb25zdHJ1Y3RvckNoZWNrcyxcbiAgQ29uc3RydWN0b3JDaGVja3NVcGdyYWRlRGF0YSxcbiAgY3NzU2VsZWN0b3JzLFxuICBDc3NTZWxlY3RvclVwZ3JhZGVEYXRhLFxuICBlbGVtZW50U2VsZWN0b3JzLFxuICBFbGVtZW50U2VsZWN0b3JVcGdyYWRlRGF0YSxcbiAgaW5wdXROYW1lcyxcbiAgSW5wdXROYW1lVXBncmFkZURhdGEsXG4gIG1ldGhvZENhbGxDaGVja3MsXG4gIE1ldGhvZENhbGxVcGdyYWRlRGF0YSxcbiAgb3V0cHV0TmFtZXMsXG4gIE91dHB1dE5hbWVVcGdyYWRlRGF0YSxcbiAgcHJvcGVydHlOYW1lcyxcbiAgUHJvcGVydHlOYW1lVXBncmFkZURhdGEsXG59IGZyb20gJy4vZGF0YSc7XG5cblxuLyoqIFVwZ3JhZGUgZGF0YSBmb3IgdGhlIEFuZ3VsYXIgQ0RLLiAqL1xuZXhwb3J0IGNvbnN0IGNka1VwZ3JhZGVEYXRhOiBVcGdyYWRlRGF0YSA9IHtcbiAgYXR0cmlidXRlU2VsZWN0b3JzLFxuICBjbGFzc05hbWVzLFxuICBjb25zdHJ1Y3RvckNoZWNrcyxcbiAgY3NzU2VsZWN0b3JzLFxuICBlbGVtZW50U2VsZWN0b3JzLFxuICBpbnB1dE5hbWVzLFxuICBtZXRob2RDYWxsQ2hlY2tzLFxuICBvdXRwdXROYW1lcyxcbiAgcHJvcGVydHlOYW1lcyxcbn07XG5cbi8qKlxuICogSW50ZXJmYWNlIHRoYXQgZGVzY3JpYmVzIHRoZSB1cGdyYWRlIGRhdGEgdGhhdCBuZWVkcyB0byBiZSBkZWZpbmVkIHdoZW4gdXNpbmcgdGhlIENES1xuICogdXBncmFkZSBydWxlcy5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBVcGdyYWRlRGF0YSB7XG4gIGF0dHJpYnV0ZVNlbGVjdG9yczogVmVyc2lvbkNoYW5nZXM8QXR0cmlidXRlU2VsZWN0b3JVcGdyYWRlRGF0YT47XG4gIGNsYXNzTmFtZXM6IFZlcnNpb25DaGFuZ2VzPENsYXNzTmFtZVVwZ3JhZGVEYXRhPjtcbiAgY29uc3RydWN0b3JDaGVja3M6IFZlcnNpb25DaGFuZ2VzPENvbnN0cnVjdG9yQ2hlY2tzVXBncmFkZURhdGE+O1xuICBjc3NTZWxlY3RvcnM6IFZlcnNpb25DaGFuZ2VzPENzc1NlbGVjdG9yVXBncmFkZURhdGE+O1xuICBlbGVtZW50U2VsZWN0b3JzOiBWZXJzaW9uQ2hhbmdlczxFbGVtZW50U2VsZWN0b3JVcGdyYWRlRGF0YT47XG4gIGlucHV0TmFtZXM6IFZlcnNpb25DaGFuZ2VzPElucHV0TmFtZVVwZ3JhZGVEYXRhPjtcbiAgbWV0aG9kQ2FsbENoZWNrczogVmVyc2lvbkNoYW5nZXM8TWV0aG9kQ2FsbFVwZ3JhZGVEYXRhPjtcbiAgb3V0cHV0TmFtZXM6IFZlcnNpb25DaGFuZ2VzPE91dHB1dE5hbWVVcGdyYWRlRGF0YT47XG4gIHByb3BlcnR5TmFtZXM6IFZlcnNpb25DaGFuZ2VzPFByb3BlcnR5TmFtZVVwZ3JhZGVEYXRhPjtcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSByZWR1Y2VkIHVwZ3JhZGUgZGF0YSBmb3IgdGhlIHNwZWNpZmllZCBkYXRhIGtleS4gVGhlIGZ1bmN0aW9uIHJlYWRzIG91dCB0aGVcbiAqIHRhcmdldCB2ZXJzaW9uIGFuZCB1cGdyYWRlIGRhdGEgb2JqZWN0IGZyb20gdGhlIG1pZ3JhdGlvbiBhbmQgcmVzb2x2ZXMgdGhlIHNwZWNpZmllZFxuICogZGF0YSBwb3J0aW9uIHRoYXQgaXMgc3BlY2lmaWNhbGx5IHRpZWQgdG8gdGhlIHRhcmdldCB2ZXJzaW9uLlxuICovXG5leHBvcnQgZnVuY3Rpb25cbmdldFZlcnNpb25VcGdyYWRlRGF0YTxUIGV4dGVuZHMga2V5b2YgVXBncmFkZURhdGEsIFUgPSBWYWx1ZU9mQ2hhbmdlczxVcGdyYWRlRGF0YVtUXT4+KFxuICAgIG1pZ3JhdGlvbjogTWlncmF0aW9uPFVwZ3JhZGVEYXRhPiwgZGF0YU5hbWU6IFQpOiBVW10ge1xuICAvLyBOb3RlIHRoYXQgYmVsb3cgd2UgbmVlZCB0byBjYXN0IHRvIGB1bmtub3duYCBmaXJzdCBUUyBkb2Vzbid0IGluZmVyIHRoZSB0eXBlIG9mIFQgY29ycmVjdGx5LlxuICByZXR1cm4gZ2V0Q2hhbmdlc0ZvclRhcmdldDxVPihcbiAgICAgIG1pZ3JhdGlvbi50YXJnZXRWZXJzaW9uLCBtaWdyYXRpb24udXBncmFkZURhdGFbZGF0YU5hbWVdIGFzIHVua25vd24gYXMgVmVyc2lvbkNoYW5nZXM8VT4pO1xufVxuIl19
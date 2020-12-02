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
        define("@angular/cdk/schematics/ng-update/migrations/method-call-arguments", ["require", "exports", "typescript", "@angular/cdk/schematics/update-tool/migration", "@angular/cdk/schematics/ng-update/upgrade-data"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const ts = require("typescript");
    const migration_1 = require("@angular/cdk/schematics/update-tool/migration");
    const upgrade_data_1 = require("@angular/cdk/schematics/ng-update/upgrade-data");
    /**
     * Migration that visits every TypeScript method call expression and checks if the
     * argument count is invalid and needs to be *manually* updated.
     */
    class MethodCallArgumentsMigration extends migration_1.Migration {
        constructor() {
            super(...arguments);
            /** Change data that upgrades to the specified target version. */
            this.data = upgrade_data_1.getVersionUpgradeData(this, 'methodCallChecks');
            // Only enable the migration rule if there is upgrade data.
            this.enabled = this.data.length !== 0;
        }
        visitNode(node) {
            if (ts.isCallExpression(node) && ts.isPropertyAccessExpression(node.expression)) {
                this._checkPropertyAccessMethodCall(node);
            }
        }
        _checkPropertyAccessMethodCall(node) {
            const propertyAccess = node.expression;
            if (!ts.isIdentifier(propertyAccess.name)) {
                return;
            }
            const hostType = this.typeChecker.getTypeAtLocation(propertyAccess.expression);
            const hostTypeName = hostType.symbol && hostType.symbol.name;
            const methodName = propertyAccess.name.text;
            if (!hostTypeName) {
                return;
            }
            // TODO(devversion): Revisit the implementation of this upgrade rule. It seems difficult
            // and ambiguous to maintain the data for this rule. e.g. consider a method which has the
            // same amount of arguments but just had a type change. In that case we could still add
            // new entries to the upgrade data that match the current argument length to just show
            // a failure message, but adding that data becomes painful if the method has optional
            // parameters and it would mean that the error message would always show up, even if the
            // argument is in some cases still assignable to the new parameter type. We could re-use
            // the logic we have in the constructor-signature checks to check for assignability and
            // to make the upgrade data less verbose.
            const failure = this.data.filter(data => data.method === methodName && data.className === hostTypeName)
                .map(data => data.invalidArgCounts.find(f => f.count === node.arguments.length))[0];
            if (!failure) {
                return;
            }
            this.createFailureAtNode(node, `Found call to "${hostTypeName + '.' + methodName}" ` +
                `with ${failure.count} arguments. Message: ${failure.message}`);
        }
    }
    exports.MethodCallArgumentsMigration = MethodCallArgumentsMigration;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWV0aG9kLWNhbGwtYXJndW1lbnRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2Nkay9zY2hlbWF0aWNzL25nLXVwZGF0ZS9taWdyYXRpb25zL21ldGhvZC1jYWxsLWFyZ3VtZW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7Ozs7Ozs7Ozs7OztJQUVILGlDQUFpQztJQUNqQyw2RUFBc0Q7SUFHdEQsaUZBQW1FO0lBRW5FOzs7T0FHRztJQUNILE1BQWEsNEJBQTZCLFNBQVEscUJBQXNCO1FBQXhFOztZQUNFLGlFQUFpRTtZQUNqRSxTQUFJLEdBQTRCLG9DQUFxQixDQUFDLElBQUksRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1lBRWhGLDJEQUEyRDtZQUMzRCxZQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDO1FBNkNuQyxDQUFDO1FBM0NDLFNBQVMsQ0FBQyxJQUFhO1lBQ3JCLElBQUksRUFBRSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUU7Z0JBQy9FLElBQUksQ0FBQyw4QkFBOEIsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUMzQztRQUNILENBQUM7UUFFTyw4QkFBOEIsQ0FBQyxJQUF1QjtZQUM1RCxNQUFNLGNBQWMsR0FBRyxJQUFJLENBQUMsVUFBeUMsQ0FBQztZQUV0RSxJQUFJLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ3pDLE9BQU87YUFDUjtZQUVELE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsaUJBQWlCLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQy9FLE1BQU0sWUFBWSxHQUFHLFFBQVEsQ0FBQyxNQUFNLElBQUksUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDN0QsTUFBTSxVQUFVLEdBQUcsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7WUFFNUMsSUFBSSxDQUFDLFlBQVksRUFBRTtnQkFDakIsT0FBTzthQUNSO1lBRUQsd0ZBQXdGO1lBQ3hGLHlGQUF5RjtZQUN6Rix1RkFBdUY7WUFDdkYsc0ZBQXNGO1lBQ3RGLHFGQUFxRjtZQUNyRix3RkFBd0Y7WUFDeEYsd0ZBQXdGO1lBQ3hGLHVGQUF1RjtZQUN2Rix5Q0FBeUM7WUFDekMsTUFBTSxPQUFPLEdBQ1QsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxLQUFLLFVBQVUsSUFBSSxJQUFJLENBQUMsU0FBUyxLQUFLLFlBQVksQ0FBQztpQkFDbEYsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLEtBQUssSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBRTVGLElBQUksQ0FBQyxPQUFPLEVBQUU7Z0JBQ1osT0FBTzthQUNSO1lBRUQsSUFBSSxDQUFDLG1CQUFtQixDQUNwQixJQUFJLEVBQ0osa0JBQWtCLFlBQVksR0FBRyxHQUFHLEdBQUcsVUFBVSxJQUFJO2dCQUNqRCxRQUFRLE9BQU8sQ0FBQyxLQUFLLHdCQUF3QixPQUFPLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztRQUMxRSxDQUFDO0tBQ0Y7SUFsREQsb0VBa0RDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCAqIGFzIHRzIGZyb20gJ3R5cGVzY3JpcHQnO1xuaW1wb3J0IHtNaWdyYXRpb259IGZyb20gJy4uLy4uL3VwZGF0ZS10b29sL21pZ3JhdGlvbic7XG5cbmltcG9ydCB7TWV0aG9kQ2FsbFVwZ3JhZGVEYXRhfSBmcm9tICcuLi9kYXRhJztcbmltcG9ydCB7Z2V0VmVyc2lvblVwZ3JhZGVEYXRhLCBVcGdyYWRlRGF0YX0gZnJvbSAnLi4vdXBncmFkZS1kYXRhJztcblxuLyoqXG4gKiBNaWdyYXRpb24gdGhhdCB2aXNpdHMgZXZlcnkgVHlwZVNjcmlwdCBtZXRob2QgY2FsbCBleHByZXNzaW9uIGFuZCBjaGVja3MgaWYgdGhlXG4gKiBhcmd1bWVudCBjb3VudCBpcyBpbnZhbGlkIGFuZCBuZWVkcyB0byBiZSAqbWFudWFsbHkqIHVwZGF0ZWQuXG4gKi9cbmV4cG9ydCBjbGFzcyBNZXRob2RDYWxsQXJndW1lbnRzTWlncmF0aW9uIGV4dGVuZHMgTWlncmF0aW9uPFVwZ3JhZGVEYXRhPiB7XG4gIC8qKiBDaGFuZ2UgZGF0YSB0aGF0IHVwZ3JhZGVzIHRvIHRoZSBzcGVjaWZpZWQgdGFyZ2V0IHZlcnNpb24uICovXG4gIGRhdGE6IE1ldGhvZENhbGxVcGdyYWRlRGF0YVtdID0gZ2V0VmVyc2lvblVwZ3JhZGVEYXRhKHRoaXMsICdtZXRob2RDYWxsQ2hlY2tzJyk7XG5cbiAgLy8gT25seSBlbmFibGUgdGhlIG1pZ3JhdGlvbiBydWxlIGlmIHRoZXJlIGlzIHVwZ3JhZGUgZGF0YS5cbiAgZW5hYmxlZCA9IHRoaXMuZGF0YS5sZW5ndGggIT09IDA7XG5cbiAgdmlzaXROb2RlKG5vZGU6IHRzLk5vZGUpOiB2b2lkIHtcbiAgICBpZiAodHMuaXNDYWxsRXhwcmVzc2lvbihub2RlKSAmJiB0cy5pc1Byb3BlcnR5QWNjZXNzRXhwcmVzc2lvbihub2RlLmV4cHJlc3Npb24pKSB7XG4gICAgICB0aGlzLl9jaGVja1Byb3BlcnR5QWNjZXNzTWV0aG9kQ2FsbChub2RlKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9jaGVja1Byb3BlcnR5QWNjZXNzTWV0aG9kQ2FsbChub2RlOiB0cy5DYWxsRXhwcmVzc2lvbikge1xuICAgIGNvbnN0IHByb3BlcnR5QWNjZXNzID0gbm9kZS5leHByZXNzaW9uIGFzIHRzLlByb3BlcnR5QWNjZXNzRXhwcmVzc2lvbjtcblxuICAgIGlmICghdHMuaXNJZGVudGlmaWVyKHByb3BlcnR5QWNjZXNzLm5hbWUpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgaG9zdFR5cGUgPSB0aGlzLnR5cGVDaGVja2VyLmdldFR5cGVBdExvY2F0aW9uKHByb3BlcnR5QWNjZXNzLmV4cHJlc3Npb24pO1xuICAgIGNvbnN0IGhvc3RUeXBlTmFtZSA9IGhvc3RUeXBlLnN5bWJvbCAmJiBob3N0VHlwZS5zeW1ib2wubmFtZTtcbiAgICBjb25zdCBtZXRob2ROYW1lID0gcHJvcGVydHlBY2Nlc3MubmFtZS50ZXh0O1xuXG4gICAgaWYgKCFob3N0VHlwZU5hbWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBUT0RPKGRldnZlcnNpb24pOiBSZXZpc2l0IHRoZSBpbXBsZW1lbnRhdGlvbiBvZiB0aGlzIHVwZ3JhZGUgcnVsZS4gSXQgc2VlbXMgZGlmZmljdWx0XG4gICAgLy8gYW5kIGFtYmlndW91cyB0byBtYWludGFpbiB0aGUgZGF0YSBmb3IgdGhpcyBydWxlLiBlLmcuIGNvbnNpZGVyIGEgbWV0aG9kIHdoaWNoIGhhcyB0aGVcbiAgICAvLyBzYW1lIGFtb3VudCBvZiBhcmd1bWVudHMgYnV0IGp1c3QgaGFkIGEgdHlwZSBjaGFuZ2UuIEluIHRoYXQgY2FzZSB3ZSBjb3VsZCBzdGlsbCBhZGRcbiAgICAvLyBuZXcgZW50cmllcyB0byB0aGUgdXBncmFkZSBkYXRhIHRoYXQgbWF0Y2ggdGhlIGN1cnJlbnQgYXJndW1lbnQgbGVuZ3RoIHRvIGp1c3Qgc2hvd1xuICAgIC8vIGEgZmFpbHVyZSBtZXNzYWdlLCBidXQgYWRkaW5nIHRoYXQgZGF0YSBiZWNvbWVzIHBhaW5mdWwgaWYgdGhlIG1ldGhvZCBoYXMgb3B0aW9uYWxcbiAgICAvLyBwYXJhbWV0ZXJzIGFuZCBpdCB3b3VsZCBtZWFuIHRoYXQgdGhlIGVycm9yIG1lc3NhZ2Ugd291bGQgYWx3YXlzIHNob3cgdXAsIGV2ZW4gaWYgdGhlXG4gICAgLy8gYXJndW1lbnQgaXMgaW4gc29tZSBjYXNlcyBzdGlsbCBhc3NpZ25hYmxlIHRvIHRoZSBuZXcgcGFyYW1ldGVyIHR5cGUuIFdlIGNvdWxkIHJlLXVzZVxuICAgIC8vIHRoZSBsb2dpYyB3ZSBoYXZlIGluIHRoZSBjb25zdHJ1Y3Rvci1zaWduYXR1cmUgY2hlY2tzIHRvIGNoZWNrIGZvciBhc3NpZ25hYmlsaXR5IGFuZFxuICAgIC8vIHRvIG1ha2UgdGhlIHVwZ3JhZGUgZGF0YSBsZXNzIHZlcmJvc2UuXG4gICAgY29uc3QgZmFpbHVyZSA9XG4gICAgICAgIHRoaXMuZGF0YS5maWx0ZXIoZGF0YSA9PiBkYXRhLm1ldGhvZCA9PT0gbWV0aG9kTmFtZSAmJiBkYXRhLmNsYXNzTmFtZSA9PT0gaG9zdFR5cGVOYW1lKVxuICAgICAgICAgICAgLm1hcChkYXRhID0+IGRhdGEuaW52YWxpZEFyZ0NvdW50cy5maW5kKGYgPT4gZi5jb3VudCA9PT0gbm9kZS5hcmd1bWVudHMubGVuZ3RoKSlbMF07XG5cbiAgICBpZiAoIWZhaWx1cmUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmNyZWF0ZUZhaWx1cmVBdE5vZGUoXG4gICAgICAgIG5vZGUsXG4gICAgICAgIGBGb3VuZCBjYWxsIHRvIFwiJHtob3N0VHlwZU5hbWUgKyAnLicgKyBtZXRob2ROYW1lfVwiIGAgK1xuICAgICAgICAgICAgYHdpdGggJHtmYWlsdXJlLmNvdW50fSBhcmd1bWVudHMuIE1lc3NhZ2U6ICR7ZmFpbHVyZS5tZXNzYWdlfWApO1xuICB9XG59XG4iXX0=
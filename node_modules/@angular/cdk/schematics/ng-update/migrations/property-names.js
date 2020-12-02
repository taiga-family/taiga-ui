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
        define("@angular/cdk/schematics/ng-update/migrations/property-names", ["require", "exports", "typescript", "@angular/cdk/schematics/update-tool/migration", "@angular/cdk/schematics/ng-update/upgrade-data"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const ts = require("typescript");
    const migration_1 = require("@angular/cdk/schematics/update-tool/migration");
    const upgrade_data_1 = require("@angular/cdk/schematics/ng-update/upgrade-data");
    /**
     * Migration that walks through every property access expression and updates
     * accessed properties that have been updated to a new name.
     */
    class PropertyNamesMigration extends migration_1.Migration {
        constructor() {
            super(...arguments);
            /** Change data that upgrades to the specified target version. */
            this.data = upgrade_data_1.getVersionUpgradeData(this, 'propertyNames');
            // Only enable the migration rule if there is upgrade data.
            this.enabled = this.data.length !== 0;
        }
        visitNode(node) {
            if (ts.isPropertyAccessExpression(node)) {
                this._visitPropertyAccessExpression(node);
            }
        }
        _visitPropertyAccessExpression(node) {
            const hostType = this.typeChecker.getTypeAtLocation(node.expression);
            const typeName = hostType && hostType.symbol && hostType.symbol.getName();
            this.data.forEach(data => {
                if (node.name.text !== data.replace) {
                    return;
                }
                if (!data.whitelist || data.whitelist.classes.includes(typeName)) {
                    this.fileSystem.edit(node.getSourceFile().fileName)
                        .remove(node.name.getStart(), node.name.getWidth())
                        .insertRight(node.name.getStart(), data.replaceWith);
                }
            });
        }
    }
    exports.PropertyNamesMigration = PropertyNamesMigration;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvcGVydHktbmFtZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY2RrL3NjaGVtYXRpY3MvbmctdXBkYXRlL21pZ3JhdGlvbnMvcHJvcGVydHktbmFtZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HOzs7Ozs7Ozs7Ozs7SUFFSCxpQ0FBaUM7SUFDakMsNkVBQXNEO0lBR3RELGlGQUFtRTtJQUVuRTs7O09BR0c7SUFDSCxNQUFhLHNCQUF1QixTQUFRLHFCQUFzQjtRQUFsRTs7WUFDRSxpRUFBaUU7WUFDakUsU0FBSSxHQUE4QixvQ0FBcUIsQ0FBQyxJQUFJLEVBQUUsZUFBZSxDQUFDLENBQUM7WUFFL0UsMkRBQTJEO1lBQzNELFlBQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUM7UUF3Qm5DLENBQUM7UUF0QkMsU0FBUyxDQUFDLElBQWE7WUFDckIsSUFBSSxFQUFFLENBQUMsMEJBQTBCLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ3ZDLElBQUksQ0FBQyw4QkFBOEIsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUMzQztRQUNILENBQUM7UUFFTyw4QkFBOEIsQ0FBQyxJQUFpQztZQUN0RSxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUNyRSxNQUFNLFFBQVEsR0FBRyxRQUFRLElBQUksUUFBUSxDQUFDLE1BQU0sSUFBSSxRQUFRLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBRTFFLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUN2QixJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxPQUFPLEVBQUU7b0JBQ25DLE9BQU87aUJBQ1I7Z0JBRUQsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFO29CQUNoRSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsUUFBUSxDQUFDO3lCQUNoRCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO3lCQUNsRCxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7aUJBQ3hEO1lBQ0gsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDO0tBQ0Y7SUE3QkQsd0RBNkJDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCAqIGFzIHRzIGZyb20gJ3R5cGVzY3JpcHQnO1xuaW1wb3J0IHtNaWdyYXRpb259IGZyb20gJy4uLy4uL3VwZGF0ZS10b29sL21pZ3JhdGlvbic7XG5cbmltcG9ydCB7UHJvcGVydHlOYW1lVXBncmFkZURhdGF9IGZyb20gJy4uL2RhdGEnO1xuaW1wb3J0IHtnZXRWZXJzaW9uVXBncmFkZURhdGEsIFVwZ3JhZGVEYXRhfSBmcm9tICcuLi91cGdyYWRlLWRhdGEnO1xuXG4vKipcbiAqIE1pZ3JhdGlvbiB0aGF0IHdhbGtzIHRocm91Z2ggZXZlcnkgcHJvcGVydHkgYWNjZXNzIGV4cHJlc3Npb24gYW5kIHVwZGF0ZXNcbiAqIGFjY2Vzc2VkIHByb3BlcnRpZXMgdGhhdCBoYXZlIGJlZW4gdXBkYXRlZCB0byBhIG5ldyBuYW1lLlxuICovXG5leHBvcnQgY2xhc3MgUHJvcGVydHlOYW1lc01pZ3JhdGlvbiBleHRlbmRzIE1pZ3JhdGlvbjxVcGdyYWRlRGF0YT4ge1xuICAvKiogQ2hhbmdlIGRhdGEgdGhhdCB1cGdyYWRlcyB0byB0aGUgc3BlY2lmaWVkIHRhcmdldCB2ZXJzaW9uLiAqL1xuICBkYXRhOiBQcm9wZXJ0eU5hbWVVcGdyYWRlRGF0YVtdID0gZ2V0VmVyc2lvblVwZ3JhZGVEYXRhKHRoaXMsICdwcm9wZXJ0eU5hbWVzJyk7XG5cbiAgLy8gT25seSBlbmFibGUgdGhlIG1pZ3JhdGlvbiBydWxlIGlmIHRoZXJlIGlzIHVwZ3JhZGUgZGF0YS5cbiAgZW5hYmxlZCA9IHRoaXMuZGF0YS5sZW5ndGggIT09IDA7XG5cbiAgdmlzaXROb2RlKG5vZGU6IHRzLk5vZGUpOiB2b2lkIHtcbiAgICBpZiAodHMuaXNQcm9wZXJ0eUFjY2Vzc0V4cHJlc3Npb24obm9kZSkpIHtcbiAgICAgIHRoaXMuX3Zpc2l0UHJvcGVydHlBY2Nlc3NFeHByZXNzaW9uKG5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3Zpc2l0UHJvcGVydHlBY2Nlc3NFeHByZXNzaW9uKG5vZGU6IHRzLlByb3BlcnR5QWNjZXNzRXhwcmVzc2lvbikge1xuICAgIGNvbnN0IGhvc3RUeXBlID0gdGhpcy50eXBlQ2hlY2tlci5nZXRUeXBlQXRMb2NhdGlvbihub2RlLmV4cHJlc3Npb24pO1xuICAgIGNvbnN0IHR5cGVOYW1lID0gaG9zdFR5cGUgJiYgaG9zdFR5cGUuc3ltYm9sICYmIGhvc3RUeXBlLnN5bWJvbC5nZXROYW1lKCk7XG5cbiAgICB0aGlzLmRhdGEuZm9yRWFjaChkYXRhID0+IHtcbiAgICAgIGlmIChub2RlLm5hbWUudGV4dCAhPT0gZGF0YS5yZXBsYWNlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKCFkYXRhLndoaXRlbGlzdCB8fCBkYXRhLndoaXRlbGlzdC5jbGFzc2VzLmluY2x1ZGVzKHR5cGVOYW1lKSkge1xuICAgICAgICB0aGlzLmZpbGVTeXN0ZW0uZWRpdChub2RlLmdldFNvdXJjZUZpbGUoKS5maWxlTmFtZSlcbiAgICAgICAgICAucmVtb3ZlKG5vZGUubmFtZS5nZXRTdGFydCgpLCBub2RlLm5hbWUuZ2V0V2lkdGgoKSlcbiAgICAgICAgICAuaW5zZXJ0UmlnaHQobm9kZS5uYW1lLmdldFN0YXJ0KCksIGRhdGEucmVwbGFjZVdpdGgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG4iXX0=
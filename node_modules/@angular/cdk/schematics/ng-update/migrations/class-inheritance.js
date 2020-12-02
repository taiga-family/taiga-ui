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
        define("@angular/cdk/schematics/ng-update/migrations/class-inheritance", ["require", "exports", "typescript", "@angular/cdk/schematics/update-tool/migration", "@angular/cdk/schematics/ng-update/typescript/base-types", "@angular/cdk/schematics/ng-update/upgrade-data"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const ts = require("typescript");
    const migration_1 = require("@angular/cdk/schematics/update-tool/migration");
    const base_types_1 = require("@angular/cdk/schematics/ng-update/typescript/base-types");
    const upgrade_data_1 = require("@angular/cdk/schematics/ng-update/upgrade-data");
    /**
     * Migration that identifies class declarations that extend CDK or Material classes
     * which had a public property change.
     */
    class ClassInheritanceMigration extends migration_1.Migration {
        constructor() {
            super(...arguments);
            /**
             * Map of classes that have been updated. Each class name maps to the according property
             * change data.
             */
            this.propertyNames = new Map();
            // Only enable the migration rule if there is upgrade data.
            this.enabled = this.propertyNames.size !== 0;
        }
        init() {
            upgrade_data_1.getVersionUpgradeData(this, 'propertyNames')
                .filter(data => data.whitelist && data.whitelist.classes)
                .forEach(data => data.whitelist.classes.forEach(name => this.propertyNames.set(name, data)));
        }
        visitNode(node) {
            if (ts.isClassDeclaration(node)) {
                this._visitClassDeclaration(node);
            }
        }
        _visitClassDeclaration(node) {
            const baseTypes = base_types_1.determineBaseTypes(node);
            const className = node.name ? node.name.text : '{unknown-name}';
            if (!baseTypes) {
                return;
            }
            baseTypes.forEach(typeName => {
                const data = this.propertyNames.get(typeName);
                if (data) {
                    this.createFailureAtNode(node, `Found class "${className}" which extends class ` +
                        `"${typeName}". Please note that the base class property ` +
                        `"${data.replace}" has changed to "${data.replaceWith}". ` +
                        `You may need to update your class as well.`);
                }
            });
        }
    }
    exports.ClassInheritanceMigration = ClassInheritanceMigration;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xhc3MtaW5oZXJpdGFuY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY2RrL3NjaGVtYXRpY3MvbmctdXBkYXRlL21pZ3JhdGlvbnMvY2xhc3MtaW5oZXJpdGFuY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HOzs7Ozs7Ozs7Ozs7SUFFSCxpQ0FBaUM7SUFDakMsNkVBQXNEO0lBRXRELHdGQUE0RDtJQUM1RCxpRkFBbUU7SUFFbkU7OztPQUdHO0lBQ0gsTUFBYSx5QkFBMEIsU0FBUSxxQkFBc0I7UUFBckU7O1lBQ0U7OztlQUdHO1lBQ0gsa0JBQWEsR0FBRyxJQUFJLEdBQUcsRUFBbUMsQ0FBQztZQUUzRCwyREFBMkQ7WUFDM0QsWUFBTyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQztRQW9DMUMsQ0FBQztRQWxDQyxJQUFJO1lBQ0Ysb0NBQXFCLENBQUMsSUFBSSxFQUFFLGVBQWUsQ0FBQztpQkFDdkMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQztpQkFDeEQsT0FBTyxDQUNKLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM5RixDQUFDO1FBRUQsU0FBUyxDQUFDLElBQWE7WUFDckIsSUFBSSxFQUFFLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQy9CLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUNuQztRQUNILENBQUM7UUFFTyxzQkFBc0IsQ0FBQyxJQUF5QjtZQUN0RCxNQUFNLFNBQVMsR0FBRywrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMzQyxNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLENBQUM7WUFFaEUsSUFBSSxDQUFDLFNBQVMsRUFBRTtnQkFDZCxPQUFPO2FBQ1I7WUFFRCxTQUFTLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFO2dCQUMzQixNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFFOUMsSUFBSSxJQUFJLEVBQUU7b0JBQ1IsSUFBSSxDQUFDLG1CQUFtQixDQUNwQixJQUFJLEVBQ0osZ0JBQWdCLFNBQVMsd0JBQXdCO3dCQUM3QyxJQUFJLFFBQVEsOENBQThDO3dCQUMxRCxJQUFJLElBQUksQ0FBQyxPQUFPLHFCQUFxQixJQUFJLENBQUMsV0FBVyxLQUFLO3dCQUMxRCw0Q0FBNEMsQ0FBQyxDQUFDO2lCQUN2RDtZQUNILENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztLQUNGO0lBNUNELDhEQTRDQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQgKiBhcyB0cyBmcm9tICd0eXBlc2NyaXB0JztcbmltcG9ydCB7TWlncmF0aW9ufSBmcm9tICcuLi8uLi91cGRhdGUtdG9vbC9taWdyYXRpb24nO1xuaW1wb3J0IHtQcm9wZXJ0eU5hbWVVcGdyYWRlRGF0YX0gZnJvbSAnLi4vZGF0YS9wcm9wZXJ0eS1uYW1lcyc7XG5pbXBvcnQge2RldGVybWluZUJhc2VUeXBlc30gZnJvbSAnLi4vdHlwZXNjcmlwdC9iYXNlLXR5cGVzJztcbmltcG9ydCB7Z2V0VmVyc2lvblVwZ3JhZGVEYXRhLCBVcGdyYWRlRGF0YX0gZnJvbSAnLi4vdXBncmFkZS1kYXRhJztcblxuLyoqXG4gKiBNaWdyYXRpb24gdGhhdCBpZGVudGlmaWVzIGNsYXNzIGRlY2xhcmF0aW9ucyB0aGF0IGV4dGVuZCBDREsgb3IgTWF0ZXJpYWwgY2xhc3Nlc1xuICogd2hpY2ggaGFkIGEgcHVibGljIHByb3BlcnR5IGNoYW5nZS5cbiAqL1xuZXhwb3J0IGNsYXNzIENsYXNzSW5oZXJpdGFuY2VNaWdyYXRpb24gZXh0ZW5kcyBNaWdyYXRpb248VXBncmFkZURhdGE+IHtcbiAgLyoqXG4gICAqIE1hcCBvZiBjbGFzc2VzIHRoYXQgaGF2ZSBiZWVuIHVwZGF0ZWQuIEVhY2ggY2xhc3MgbmFtZSBtYXBzIHRvIHRoZSBhY2NvcmRpbmcgcHJvcGVydHlcbiAgICogY2hhbmdlIGRhdGEuXG4gICAqL1xuICBwcm9wZXJ0eU5hbWVzID0gbmV3IE1hcDxzdHJpbmcsIFByb3BlcnR5TmFtZVVwZ3JhZGVEYXRhPigpO1xuXG4gIC8vIE9ubHkgZW5hYmxlIHRoZSBtaWdyYXRpb24gcnVsZSBpZiB0aGVyZSBpcyB1cGdyYWRlIGRhdGEuXG4gIGVuYWJsZWQgPSB0aGlzLnByb3BlcnR5TmFtZXMuc2l6ZSAhPT0gMDtcblxuICBpbml0KCk6IHZvaWQge1xuICAgIGdldFZlcnNpb25VcGdyYWRlRGF0YSh0aGlzLCAncHJvcGVydHlOYW1lcycpXG4gICAgICAgIC5maWx0ZXIoZGF0YSA9PiBkYXRhLndoaXRlbGlzdCAmJiBkYXRhLndoaXRlbGlzdC5jbGFzc2VzKVxuICAgICAgICAuZm9yRWFjaChcbiAgICAgICAgICAgIGRhdGEgPT4gZGF0YS53aGl0ZWxpc3QuY2xhc3Nlcy5mb3JFYWNoKG5hbWUgPT4gdGhpcy5wcm9wZXJ0eU5hbWVzLnNldChuYW1lLCBkYXRhKSkpO1xuICB9XG5cbiAgdmlzaXROb2RlKG5vZGU6IHRzLk5vZGUpOiB2b2lkIHtcbiAgICBpZiAodHMuaXNDbGFzc0RlY2xhcmF0aW9uKG5vZGUpKSB7XG4gICAgICB0aGlzLl92aXNpdENsYXNzRGVjbGFyYXRpb24obm9kZSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfdmlzaXRDbGFzc0RlY2xhcmF0aW9uKG5vZGU6IHRzLkNsYXNzRGVjbGFyYXRpb24pIHtcbiAgICBjb25zdCBiYXNlVHlwZXMgPSBkZXRlcm1pbmVCYXNlVHlwZXMobm9kZSk7XG4gICAgY29uc3QgY2xhc3NOYW1lID0gbm9kZS5uYW1lID8gbm9kZS5uYW1lLnRleHQgOiAne3Vua25vd24tbmFtZX0nO1xuXG4gICAgaWYgKCFiYXNlVHlwZXMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBiYXNlVHlwZXMuZm9yRWFjaCh0eXBlTmFtZSA9PiB7XG4gICAgICBjb25zdCBkYXRhID0gdGhpcy5wcm9wZXJ0eU5hbWVzLmdldCh0eXBlTmFtZSk7XG5cbiAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgIHRoaXMuY3JlYXRlRmFpbHVyZUF0Tm9kZShcbiAgICAgICAgICAgIG5vZGUsXG4gICAgICAgICAgICBgRm91bmQgY2xhc3MgXCIke2NsYXNzTmFtZX1cIiB3aGljaCBleHRlbmRzIGNsYXNzIGAgK1xuICAgICAgICAgICAgICAgIGBcIiR7dHlwZU5hbWV9XCIuIFBsZWFzZSBub3RlIHRoYXQgdGhlIGJhc2UgY2xhc3MgcHJvcGVydHkgYCArXG4gICAgICAgICAgICAgICAgYFwiJHtkYXRhLnJlcGxhY2V9XCIgaGFzIGNoYW5nZWQgdG8gXCIke2RhdGEucmVwbGFjZVdpdGh9XCIuIGAgK1xuICAgICAgICAgICAgICAgIGBZb3UgbWF5IG5lZWQgdG8gdXBkYXRlIHlvdXIgY2xhc3MgYXMgd2VsbC5gKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuIl19
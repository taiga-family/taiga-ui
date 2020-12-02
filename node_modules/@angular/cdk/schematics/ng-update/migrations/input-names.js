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
        define("@angular/cdk/schematics/ng-update/migrations/input-names", ["require", "exports", "@angular/cdk/schematics/ng-update/html-parsing/angular", "@angular/cdk/schematics/update-tool/migration", "@angular/cdk/schematics/ng-update/typescript/literal", "@angular/cdk/schematics/ng-update/upgrade-data"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const angular_1 = require("@angular/cdk/schematics/ng-update/html-parsing/angular");
    const migration_1 = require("@angular/cdk/schematics/update-tool/migration");
    const literal_1 = require("@angular/cdk/schematics/ng-update/typescript/literal");
    const upgrade_data_1 = require("@angular/cdk/schematics/ng-update/upgrade-data");
    /**
     * Migration that walks through every template or stylesheet and replaces outdated input
     * names to the new input name. Selectors in stylesheets could also target input
     * bindings declared as static attribute. See for example:
     *
     * e.g. `<my-component color="primary">` becomes `my-component[color]`
     */
    class InputNamesMigration extends migration_1.Migration {
        constructor() {
            super(...arguments);
            /** Change data that upgrades to the specified target version. */
            this.data = upgrade_data_1.getVersionUpgradeData(this, 'inputNames');
            // Only enable the migration rule if there is upgrade data.
            this.enabled = this.data.length !== 0;
        }
        visitStylesheet(stylesheet) {
            this.data.forEach(name => {
                const currentSelector = `[${name.replace}]`;
                const updatedSelector = `[${name.replaceWith}]`;
                literal_1.findAllSubstringIndices(stylesheet.content, currentSelector)
                    .map(offset => stylesheet.start + offset)
                    .forEach(start => this._replaceInputName(stylesheet.filePath, start, currentSelector.length, updatedSelector));
            });
        }
        visitTemplate(template) {
            this.data.forEach(name => {
                const whitelist = name.whitelist;
                const relativeOffsets = [];
                if (whitelist.attributes) {
                    relativeOffsets.push(...angular_1.findInputsOnElementWithAttr(template.content, name.replace, whitelist.attributes));
                }
                if (whitelist.elements) {
                    relativeOffsets.push(...angular_1.findInputsOnElementWithTag(template.content, name.replace, whitelist.elements));
                }
                relativeOffsets.map(offset => template.start + offset)
                    .forEach(start => this._replaceInputName(template.filePath, start, name.replace.length, name.replaceWith));
            });
        }
        _replaceInputName(filePath, start, width, newName) {
            this.fileSystem.edit(filePath)
                .remove(start, width)
                .insertRight(start, newName);
        }
    }
    exports.InputNamesMigration = InputNamesMigration;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtbmFtZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY2RrL3NjaGVtYXRpY3MvbmctdXBkYXRlL21pZ3JhdGlvbnMvaW5wdXQtbmFtZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HOzs7Ozs7Ozs7Ozs7SUFFSCxvRkFBZ0c7SUFFaEcsNkVBQXNEO0lBR3RELGtGQUE4RDtJQUM5RCxpRkFBbUU7SUFFbkU7Ozs7OztPQU1HO0lBQ0gsTUFBYSxtQkFBb0IsU0FBUSxxQkFBc0I7UUFBL0Q7O1lBQ0UsaUVBQWlFO1lBQ2pFLFNBQUksR0FBMkIsb0NBQXFCLENBQUMsSUFBSSxFQUFFLFlBQVksQ0FBQyxDQUFDO1lBRXpFLDJEQUEyRDtZQUMzRCxZQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDO1FBMENuQyxDQUFDO1FBeENDLGVBQWUsQ0FBQyxVQUE0QjtZQUMxQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDdkIsTUFBTSxlQUFlLEdBQUcsSUFBSSxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUM7Z0JBQzVDLE1BQU0sZUFBZSxHQUFHLElBQUksSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDO2dCQUVoRCxpQ0FBdUIsQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLGVBQWUsQ0FBQztxQkFDdkQsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUM7cUJBQ3hDLE9BQU8sQ0FDSixLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FDM0IsVUFBVSxDQUFDLFFBQVEsRUFBRSxLQUFLLEVBQUUsZUFBZSxDQUFDLE1BQU0sRUFBRSxlQUFlLENBQUMsQ0FBQyxDQUFDO1lBQ3BGLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztRQUVELGFBQWEsQ0FBQyxRQUEwQjtZQUN0QyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDdkIsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztnQkFDakMsTUFBTSxlQUFlLEdBQWEsRUFBRSxDQUFDO2dCQUVyQyxJQUFJLFNBQVMsQ0FBQyxVQUFVLEVBQUU7b0JBQ3hCLGVBQWUsQ0FBQyxJQUFJLENBQ2hCLEdBQUcscUNBQTJCLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO2lCQUMzRjtnQkFFRCxJQUFJLFNBQVMsQ0FBQyxRQUFRLEVBQUU7b0JBQ3RCLGVBQWUsQ0FBQyxJQUFJLENBQ2hCLEdBQUcsb0NBQTBCLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO2lCQUN4RjtnQkFFRCxlQUFlLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUM7cUJBQ2pELE9BQU8sQ0FDSixLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FDM0IsUUFBUSxDQUFDLFFBQVEsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFDaEYsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDO1FBRU8saUJBQWlCLENBQUMsUUFBZ0IsRUFBRSxLQUFhLEVBQUUsS0FBYSxFQUFFLE9BQWU7WUFDdkYsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO2lCQUMzQixNQUFNLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQztpQkFDcEIsV0FBVyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztRQUNqQyxDQUFDO0tBQ0Y7SUEvQ0Qsa0RBK0NDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7ZmluZElucHV0c09uRWxlbWVudFdpdGhBdHRyLCBmaW5kSW5wdXRzT25FbGVtZW50V2l0aFRhZ30gZnJvbSAnLi4vaHRtbC1wYXJzaW5nL2FuZ3VsYXInO1xuaW1wb3J0IHtSZXNvbHZlZFJlc291cmNlfSBmcm9tICcuLi8uLi91cGRhdGUtdG9vbC9jb21wb25lbnQtcmVzb3VyY2UtY29sbGVjdG9yJztcbmltcG9ydCB7TWlncmF0aW9ufSBmcm9tICcuLi8uLi91cGRhdGUtdG9vbC9taWdyYXRpb24nO1xuXG5pbXBvcnQge0lucHV0TmFtZVVwZ3JhZGVEYXRhfSBmcm9tICcuLi9kYXRhJztcbmltcG9ydCB7ZmluZEFsbFN1YnN0cmluZ0luZGljZXN9IGZyb20gJy4uL3R5cGVzY3JpcHQvbGl0ZXJhbCc7XG5pbXBvcnQge2dldFZlcnNpb25VcGdyYWRlRGF0YSwgVXBncmFkZURhdGF9IGZyb20gJy4uL3VwZ3JhZGUtZGF0YSc7XG5cbi8qKlxuICogTWlncmF0aW9uIHRoYXQgd2Fsa3MgdGhyb3VnaCBldmVyeSB0ZW1wbGF0ZSBvciBzdHlsZXNoZWV0IGFuZCByZXBsYWNlcyBvdXRkYXRlZCBpbnB1dFxuICogbmFtZXMgdG8gdGhlIG5ldyBpbnB1dCBuYW1lLiBTZWxlY3RvcnMgaW4gc3R5bGVzaGVldHMgY291bGQgYWxzbyB0YXJnZXQgaW5wdXRcbiAqIGJpbmRpbmdzIGRlY2xhcmVkIGFzIHN0YXRpYyBhdHRyaWJ1dGUuIFNlZSBmb3IgZXhhbXBsZTpcbiAqXG4gKiBlLmcuIGA8bXktY29tcG9uZW50IGNvbG9yPVwicHJpbWFyeVwiPmAgYmVjb21lcyBgbXktY29tcG9uZW50W2NvbG9yXWBcbiAqL1xuZXhwb3J0IGNsYXNzIElucHV0TmFtZXNNaWdyYXRpb24gZXh0ZW5kcyBNaWdyYXRpb248VXBncmFkZURhdGE+IHtcbiAgLyoqIENoYW5nZSBkYXRhIHRoYXQgdXBncmFkZXMgdG8gdGhlIHNwZWNpZmllZCB0YXJnZXQgdmVyc2lvbi4gKi9cbiAgZGF0YTogSW5wdXROYW1lVXBncmFkZURhdGFbXSA9IGdldFZlcnNpb25VcGdyYWRlRGF0YSh0aGlzLCAnaW5wdXROYW1lcycpO1xuXG4gIC8vIE9ubHkgZW5hYmxlIHRoZSBtaWdyYXRpb24gcnVsZSBpZiB0aGVyZSBpcyB1cGdyYWRlIGRhdGEuXG4gIGVuYWJsZWQgPSB0aGlzLmRhdGEubGVuZ3RoICE9PSAwO1xuXG4gIHZpc2l0U3R5bGVzaGVldChzdHlsZXNoZWV0OiBSZXNvbHZlZFJlc291cmNlKTogdm9pZCB7XG4gICAgdGhpcy5kYXRhLmZvckVhY2gobmFtZSA9PiB7XG4gICAgICBjb25zdCBjdXJyZW50U2VsZWN0b3IgPSBgWyR7bmFtZS5yZXBsYWNlfV1gO1xuICAgICAgY29uc3QgdXBkYXRlZFNlbGVjdG9yID0gYFske25hbWUucmVwbGFjZVdpdGh9XWA7XG5cbiAgICAgIGZpbmRBbGxTdWJzdHJpbmdJbmRpY2VzKHN0eWxlc2hlZXQuY29udGVudCwgY3VycmVudFNlbGVjdG9yKVxuICAgICAgICAgIC5tYXAob2Zmc2V0ID0+IHN0eWxlc2hlZXQuc3RhcnQgKyBvZmZzZXQpXG4gICAgICAgICAgLmZvckVhY2goXG4gICAgICAgICAgICAgIHN0YXJ0ID0+IHRoaXMuX3JlcGxhY2VJbnB1dE5hbWUoXG4gICAgICAgICAgICAgICAgICBzdHlsZXNoZWV0LmZpbGVQYXRoLCBzdGFydCwgY3VycmVudFNlbGVjdG9yLmxlbmd0aCwgdXBkYXRlZFNlbGVjdG9yKSk7XG4gICAgfSk7XG4gIH1cblxuICB2aXNpdFRlbXBsYXRlKHRlbXBsYXRlOiBSZXNvbHZlZFJlc291cmNlKTogdm9pZCB7XG4gICAgdGhpcy5kYXRhLmZvckVhY2gobmFtZSA9PiB7XG4gICAgICBjb25zdCB3aGl0ZWxpc3QgPSBuYW1lLndoaXRlbGlzdDtcbiAgICAgIGNvbnN0IHJlbGF0aXZlT2Zmc2V0czogbnVtYmVyW10gPSBbXTtcblxuICAgICAgaWYgKHdoaXRlbGlzdC5hdHRyaWJ1dGVzKSB7XG4gICAgICAgIHJlbGF0aXZlT2Zmc2V0cy5wdXNoKFxuICAgICAgICAgICAgLi4uZmluZElucHV0c09uRWxlbWVudFdpdGhBdHRyKHRlbXBsYXRlLmNvbnRlbnQsIG5hbWUucmVwbGFjZSwgd2hpdGVsaXN0LmF0dHJpYnV0ZXMpKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHdoaXRlbGlzdC5lbGVtZW50cykge1xuICAgICAgICByZWxhdGl2ZU9mZnNldHMucHVzaChcbiAgICAgICAgICAgIC4uLmZpbmRJbnB1dHNPbkVsZW1lbnRXaXRoVGFnKHRlbXBsYXRlLmNvbnRlbnQsIG5hbWUucmVwbGFjZSwgd2hpdGVsaXN0LmVsZW1lbnRzKSk7XG4gICAgICB9XG5cbiAgICAgIHJlbGF0aXZlT2Zmc2V0cy5tYXAob2Zmc2V0ID0+IHRlbXBsYXRlLnN0YXJ0ICsgb2Zmc2V0KVxuICAgICAgICAgIC5mb3JFYWNoKFxuICAgICAgICAgICAgICBzdGFydCA9PiB0aGlzLl9yZXBsYWNlSW5wdXROYW1lKFxuICAgICAgICAgICAgICAgICAgdGVtcGxhdGUuZmlsZVBhdGgsIHN0YXJ0LCBuYW1lLnJlcGxhY2UubGVuZ3RoLCBuYW1lLnJlcGxhY2VXaXRoKSk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF9yZXBsYWNlSW5wdXROYW1lKGZpbGVQYXRoOiBzdHJpbmcsIHN0YXJ0OiBudW1iZXIsIHdpZHRoOiBudW1iZXIsIG5ld05hbWU6IHN0cmluZykge1xuICAgIHRoaXMuZmlsZVN5c3RlbS5lZGl0KGZpbGVQYXRoKVxuICAgICAgLnJlbW92ZShzdGFydCwgd2lkdGgpXG4gICAgICAuaW5zZXJ0UmlnaHQoc3RhcnQsIG5ld05hbWUpO1xuICB9XG59XG4iXX0=
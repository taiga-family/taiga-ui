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
        define("@angular/cdk/schematics/ng-update/migrations/output-names", ["require", "exports", "@angular/cdk/schematics/update-tool/migration", "@angular/cdk/schematics/ng-update/html-parsing/angular", "@angular/cdk/schematics/ng-update/upgrade-data"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const migration_1 = require("@angular/cdk/schematics/update-tool/migration");
    const angular_1 = require("@angular/cdk/schematics/ng-update/html-parsing/angular");
    const upgrade_data_1 = require("@angular/cdk/schematics/ng-update/upgrade-data");
    /**
     * Migration that walks through every inline or external HTML template and switches
     * changed output binding names to the proper new output name.
     */
    class OutputNamesMigration extends migration_1.Migration {
        constructor() {
            super(...arguments);
            /** Change data that upgrades to the specified target version. */
            this.data = upgrade_data_1.getVersionUpgradeData(this, 'outputNames');
            // Only enable the migration rule if there is upgrade data.
            this.enabled = this.data.length !== 0;
        }
        visitTemplate(template) {
            this.data.forEach(name => {
                const whitelist = name.whitelist;
                const relativeOffsets = [];
                if (whitelist.attributes) {
                    relativeOffsets.push(...angular_1.findOutputsOnElementWithAttr(template.content, name.replace, whitelist.attributes));
                }
                if (whitelist.elements) {
                    relativeOffsets.push(...angular_1.findOutputsOnElementWithTag(template.content, name.replace, whitelist.elements));
                }
                relativeOffsets.map(offset => template.start + offset)
                    .forEach(start => this._replaceOutputName(template.filePath, start, name.replace.length, name.replaceWith));
            });
        }
        _replaceOutputName(filePath, start, width, newName) {
            this.fileSystem.edit(filePath)
                .remove(start, width)
                .insertRight(start, newName);
        }
    }
    exports.OutputNamesMigration = OutputNamesMigration;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3V0cHV0LW5hbWVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2Nkay9zY2hlbWF0aWNzL25nLXVwZGF0ZS9taWdyYXRpb25zL291dHB1dC1uYW1lcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7Ozs7Ozs7Ozs7OztJQUdILDZFQUFzRDtJQUd0RCxvRkFHaUM7SUFDakMsaUZBQW1FO0lBRW5FOzs7T0FHRztJQUNILE1BQWEsb0JBQXFCLFNBQVEscUJBQXNCO1FBQWhFOztZQUNFLGlFQUFpRTtZQUNqRSxTQUFJLEdBQTRCLG9DQUFxQixDQUFDLElBQUksRUFBRSxhQUFhLENBQUMsQ0FBQztZQUUzRSwyREFBMkQ7WUFDM0QsWUFBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQztRQTZCbkMsQ0FBQztRQTNCQyxhQUFhLENBQUMsUUFBMEI7WUFDdEMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ3ZCLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7Z0JBQ2pDLE1BQU0sZUFBZSxHQUFhLEVBQUUsQ0FBQztnQkFFckMsSUFBSSxTQUFTLENBQUMsVUFBVSxFQUFFO29CQUN4QixlQUFlLENBQUMsSUFBSSxDQUNoQixHQUFHLHNDQUE0QixDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztpQkFDNUY7Z0JBRUQsSUFBSSxTQUFTLENBQUMsUUFBUSxFQUFFO29CQUN0QixlQUFlLENBQUMsSUFBSSxDQUNoQixHQUFHLHFDQUEyQixDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztpQkFDekY7Z0JBRUQsZUFBZSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDO3FCQUNqRCxPQUFPLENBQ0osS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQzVCLFFBQVEsQ0FBQyxRQUFRLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1lBQ2hGLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztRQUVPLGtCQUFrQixDQUFDLFFBQWdCLEVBQUUsS0FBYSxFQUFFLEtBQWEsRUFBRSxPQUFlO1lBQ3hGLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztpQkFDM0IsTUFBTSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUM7aUJBQ3BCLFdBQVcsQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDakMsQ0FBQztLQUNGO0lBbENELG9EQWtDQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge1Jlc29sdmVkUmVzb3VyY2V9IGZyb20gJy4uLy4uL3VwZGF0ZS10b29sL2NvbXBvbmVudC1yZXNvdXJjZS1jb2xsZWN0b3InO1xuaW1wb3J0IHtNaWdyYXRpb259IGZyb20gJy4uLy4uL3VwZGF0ZS10b29sL21pZ3JhdGlvbic7XG5cbmltcG9ydCB7T3V0cHV0TmFtZVVwZ3JhZGVEYXRhfSBmcm9tICcuLi9kYXRhJztcbmltcG9ydCB7XG4gIGZpbmRPdXRwdXRzT25FbGVtZW50V2l0aEF0dHIsXG4gIGZpbmRPdXRwdXRzT25FbGVtZW50V2l0aFRhZyxcbn0gZnJvbSAnLi4vaHRtbC1wYXJzaW5nL2FuZ3VsYXInO1xuaW1wb3J0IHtnZXRWZXJzaW9uVXBncmFkZURhdGEsIFVwZ3JhZGVEYXRhfSBmcm9tICcuLi91cGdyYWRlLWRhdGEnO1xuXG4vKipcbiAqIE1pZ3JhdGlvbiB0aGF0IHdhbGtzIHRocm91Z2ggZXZlcnkgaW5saW5lIG9yIGV4dGVybmFsIEhUTUwgdGVtcGxhdGUgYW5kIHN3aXRjaGVzXG4gKiBjaGFuZ2VkIG91dHB1dCBiaW5kaW5nIG5hbWVzIHRvIHRoZSBwcm9wZXIgbmV3IG91dHB1dCBuYW1lLlxuICovXG5leHBvcnQgY2xhc3MgT3V0cHV0TmFtZXNNaWdyYXRpb24gZXh0ZW5kcyBNaWdyYXRpb248VXBncmFkZURhdGE+IHtcbiAgLyoqIENoYW5nZSBkYXRhIHRoYXQgdXBncmFkZXMgdG8gdGhlIHNwZWNpZmllZCB0YXJnZXQgdmVyc2lvbi4gKi9cbiAgZGF0YTogT3V0cHV0TmFtZVVwZ3JhZGVEYXRhW10gPSBnZXRWZXJzaW9uVXBncmFkZURhdGEodGhpcywgJ291dHB1dE5hbWVzJyk7XG5cbiAgLy8gT25seSBlbmFibGUgdGhlIG1pZ3JhdGlvbiBydWxlIGlmIHRoZXJlIGlzIHVwZ3JhZGUgZGF0YS5cbiAgZW5hYmxlZCA9IHRoaXMuZGF0YS5sZW5ndGggIT09IDA7XG5cbiAgdmlzaXRUZW1wbGF0ZSh0ZW1wbGF0ZTogUmVzb2x2ZWRSZXNvdXJjZSk6IHZvaWQge1xuICAgIHRoaXMuZGF0YS5mb3JFYWNoKG5hbWUgPT4ge1xuICAgICAgY29uc3Qgd2hpdGVsaXN0ID0gbmFtZS53aGl0ZWxpc3Q7XG4gICAgICBjb25zdCByZWxhdGl2ZU9mZnNldHM6IG51bWJlcltdID0gW107XG5cbiAgICAgIGlmICh3aGl0ZWxpc3QuYXR0cmlidXRlcykge1xuICAgICAgICByZWxhdGl2ZU9mZnNldHMucHVzaChcbiAgICAgICAgICAgIC4uLmZpbmRPdXRwdXRzT25FbGVtZW50V2l0aEF0dHIodGVtcGxhdGUuY29udGVudCwgbmFtZS5yZXBsYWNlLCB3aGl0ZWxpc3QuYXR0cmlidXRlcykpO1xuICAgICAgfVxuXG4gICAgICBpZiAod2hpdGVsaXN0LmVsZW1lbnRzKSB7XG4gICAgICAgIHJlbGF0aXZlT2Zmc2V0cy5wdXNoKFxuICAgICAgICAgICAgLi4uZmluZE91dHB1dHNPbkVsZW1lbnRXaXRoVGFnKHRlbXBsYXRlLmNvbnRlbnQsIG5hbWUucmVwbGFjZSwgd2hpdGVsaXN0LmVsZW1lbnRzKSk7XG4gICAgICB9XG5cbiAgICAgIHJlbGF0aXZlT2Zmc2V0cy5tYXAob2Zmc2V0ID0+IHRlbXBsYXRlLnN0YXJ0ICsgb2Zmc2V0KVxuICAgICAgICAgIC5mb3JFYWNoKFxuICAgICAgICAgICAgICBzdGFydCA9PiB0aGlzLl9yZXBsYWNlT3V0cHV0TmFtZShcbiAgICAgICAgICAgICAgICAgIHRlbXBsYXRlLmZpbGVQYXRoLCBzdGFydCwgbmFtZS5yZXBsYWNlLmxlbmd0aCwgbmFtZS5yZXBsYWNlV2l0aCkpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfcmVwbGFjZU91dHB1dE5hbWUoZmlsZVBhdGg6IHN0cmluZywgc3RhcnQ6IG51bWJlciwgd2lkdGg6IG51bWJlciwgbmV3TmFtZTogc3RyaW5nKSB7XG4gICAgdGhpcy5maWxlU3lzdGVtLmVkaXQoZmlsZVBhdGgpXG4gICAgICAucmVtb3ZlKHN0YXJ0LCB3aWR0aClcbiAgICAgIC5pbnNlcnRSaWdodChzdGFydCwgbmV3TmFtZSk7XG4gIH1cbn1cbiJdfQ==
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
        define("@angular/cdk/schematics/ng-update/migrations/misc-template", ["require", "exports", "@angular/cdk/schematics/update-tool/target-version", "@angular/cdk/schematics/update-tool/migration", "@angular/cdk/schematics/ng-update/typescript/literal"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const target_version_1 = require("@angular/cdk/schematics/update-tool/target-version");
    const migration_1 = require("@angular/cdk/schematics/update-tool/migration");
    const literal_1 = require("@angular/cdk/schematics/ng-update/typescript/literal");
    /**
     * Migration that walks through every template and reports if there are
     * instances of outdated Angular CDK API that can't be migrated automatically.
     */
    class MiscTemplateMigration extends migration_1.Migration {
        constructor() {
            super(...arguments);
            // Only enable this rule if the migration targets version 6. The rule
            // currently only includes migrations for V6 deprecations.
            this.enabled = this.targetVersion === target_version_1.TargetVersion.V6;
        }
        visitTemplate(template) {
            // Migration for https://github.com/angular/components/pull/10325 (v6)
            literal_1.findAllSubstringIndices(template.content, 'cdk-focus-trap').forEach(offset => {
                this.failures.push({
                    filePath: template.filePath,
                    position: template.getCharacterAndLineOfPosition(template.start + offset),
                    message: `Found deprecated element selector "cdk-focus-trap" which has been ` +
                        `changed to an attribute selector "[cdkTrapFocus]".`
                });
            });
        }
    }
    exports.MiscTemplateMigration = MiscTemplateMigration;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWlzYy10ZW1wbGF0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jZGsvc2NoZW1hdGljcy9uZy11cGRhdGUvbWlncmF0aW9ucy9taXNjLXRlbXBsYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRzs7Ozs7Ozs7Ozs7O0lBRUgsdUZBQStEO0lBRS9ELDZFQUFzRDtJQUN0RCxrRkFBOEQ7SUFHOUQ7OztPQUdHO0lBQ0gsTUFBYSxxQkFBc0IsU0FBUSxxQkFBc0I7UUFBakU7O1lBRUUscUVBQXFFO1lBQ3JFLDBEQUEwRDtZQUMxRCxZQUFPLEdBQUcsSUFBSSxDQUFDLGFBQWEsS0FBSyw4QkFBYSxDQUFDLEVBQUUsQ0FBQztRQWFwRCxDQUFDO1FBWEMsYUFBYSxDQUFDLFFBQTBCO1lBQ3RDLHNFQUFzRTtZQUN0RSxpQ0FBdUIsQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLGdCQUFnQixDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFO2dCQUMzRSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztvQkFDakIsUUFBUSxFQUFFLFFBQVEsQ0FBQyxRQUFRO29CQUMzQixRQUFRLEVBQUUsUUFBUSxDQUFDLDZCQUE2QixDQUFDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDO29CQUN6RSxPQUFPLEVBQUUsb0VBQW9FO3dCQUN6RSxvREFBb0Q7aUJBQ3pELENBQUMsQ0FBQztZQUNMLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztLQUNGO0lBakJELHNEQWlCQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge1RhcmdldFZlcnNpb259IGZyb20gJy4uLy4uL3VwZGF0ZS10b29sL3RhcmdldC12ZXJzaW9uJztcbmltcG9ydCB7UmVzb2x2ZWRSZXNvdXJjZX0gZnJvbSAnLi4vLi4vdXBkYXRlLXRvb2wvY29tcG9uZW50LXJlc291cmNlLWNvbGxlY3Rvcic7XG5pbXBvcnQge01pZ3JhdGlvbn0gZnJvbSAnLi4vLi4vdXBkYXRlLXRvb2wvbWlncmF0aW9uJztcbmltcG9ydCB7ZmluZEFsbFN1YnN0cmluZ0luZGljZXN9IGZyb20gJy4uL3R5cGVzY3JpcHQvbGl0ZXJhbCc7XG5pbXBvcnQge1VwZ3JhZGVEYXRhfSBmcm9tICcuLi91cGdyYWRlLWRhdGEnO1xuXG4vKipcbiAqIE1pZ3JhdGlvbiB0aGF0IHdhbGtzIHRocm91Z2ggZXZlcnkgdGVtcGxhdGUgYW5kIHJlcG9ydHMgaWYgdGhlcmUgYXJlXG4gKiBpbnN0YW5jZXMgb2Ygb3V0ZGF0ZWQgQW5ndWxhciBDREsgQVBJIHRoYXQgY2FuJ3QgYmUgbWlncmF0ZWQgYXV0b21hdGljYWxseS5cbiAqL1xuZXhwb3J0IGNsYXNzIE1pc2NUZW1wbGF0ZU1pZ3JhdGlvbiBleHRlbmRzIE1pZ3JhdGlvbjxVcGdyYWRlRGF0YT4ge1xuXG4gIC8vIE9ubHkgZW5hYmxlIHRoaXMgcnVsZSBpZiB0aGUgbWlncmF0aW9uIHRhcmdldHMgdmVyc2lvbiA2LiBUaGUgcnVsZVxuICAvLyBjdXJyZW50bHkgb25seSBpbmNsdWRlcyBtaWdyYXRpb25zIGZvciBWNiBkZXByZWNhdGlvbnMuXG4gIGVuYWJsZWQgPSB0aGlzLnRhcmdldFZlcnNpb24gPT09IFRhcmdldFZlcnNpb24uVjY7XG5cbiAgdmlzaXRUZW1wbGF0ZSh0ZW1wbGF0ZTogUmVzb2x2ZWRSZXNvdXJjZSk6IHZvaWQge1xuICAgIC8vIE1pZ3JhdGlvbiBmb3IgaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvY29tcG9uZW50cy9wdWxsLzEwMzI1ICh2NilcbiAgICBmaW5kQWxsU3Vic3RyaW5nSW5kaWNlcyh0ZW1wbGF0ZS5jb250ZW50LCAnY2RrLWZvY3VzLXRyYXAnKS5mb3JFYWNoKG9mZnNldCA9PiB7XG4gICAgICB0aGlzLmZhaWx1cmVzLnB1c2goe1xuICAgICAgICBmaWxlUGF0aDogdGVtcGxhdGUuZmlsZVBhdGgsXG4gICAgICAgIHBvc2l0aW9uOiB0ZW1wbGF0ZS5nZXRDaGFyYWN0ZXJBbmRMaW5lT2ZQb3NpdGlvbih0ZW1wbGF0ZS5zdGFydCArIG9mZnNldCksXG4gICAgICAgIG1lc3NhZ2U6IGBGb3VuZCBkZXByZWNhdGVkIGVsZW1lbnQgc2VsZWN0b3IgXCJjZGstZm9jdXMtdHJhcFwiIHdoaWNoIGhhcyBiZWVuIGAgK1xuICAgICAgICAgICAgYGNoYW5nZWQgdG8gYW4gYXR0cmlidXRlIHNlbGVjdG9yIFwiW2Nka1RyYXBGb2N1c11cIi5gXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufVxuIl19
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
        define("@angular/cdk/schematics/ng-update/migrations/attribute-selectors", ["require", "exports", "typescript", "@angular/cdk/schematics/update-tool/migration", "@angular/cdk/schematics/ng-update/typescript/literal", "@angular/cdk/schematics/ng-update/upgrade-data"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const ts = require("typescript");
    const migration_1 = require("@angular/cdk/schematics/update-tool/migration");
    const literal_1 = require("@angular/cdk/schematics/ng-update/typescript/literal");
    const upgrade_data_1 = require("@angular/cdk/schematics/ng-update/upgrade-data");
    /**
     * Migration that walks through every string literal, template and stylesheet
     * in order to switch deprecated attribute selectors to the updated selector.
     */
    class AttributeSelectorsMigration extends migration_1.Migration {
        constructor() {
            super(...arguments);
            /** Required upgrade changes for specified target version. */
            this.data = upgrade_data_1.getVersionUpgradeData(this, 'attributeSelectors');
            // Only enable the migration rule if there is upgrade data.
            this.enabled = this.data.length !== 0;
        }
        visitNode(node) {
            if (ts.isStringLiteralLike(node)) {
                this._visitStringLiteralLike(node);
            }
        }
        visitTemplate(template) {
            this.data.forEach(selector => {
                literal_1.findAllSubstringIndices(template.content, selector.replace)
                    .map(offset => template.start + offset)
                    .forEach(start => this._replaceSelector(template.filePath, start, selector));
            });
        }
        visitStylesheet(stylesheet) {
            this.data.forEach(selector => {
                const currentSelector = `[${selector.replace}]`;
                const updatedSelector = `[${selector.replaceWith}]`;
                literal_1.findAllSubstringIndices(stylesheet.content, currentSelector)
                    .map(offset => stylesheet.start + offset)
                    .forEach(start => this._replaceSelector(stylesheet.filePath, start, { replace: currentSelector, replaceWith: updatedSelector }));
            });
        }
        _visitStringLiteralLike(literal) {
            if (literal.parent && literal.parent.kind !== ts.SyntaxKind.CallExpression) {
                return;
            }
            const literalText = literal.getText();
            const filePath = literal.getSourceFile().fileName;
            this.data.forEach(selector => {
                literal_1.findAllSubstringIndices(literalText, selector.replace)
                    .map(offset => literal.getStart() + offset)
                    .forEach(start => this._replaceSelector(filePath, start, selector));
            });
        }
        _replaceSelector(filePath, start, data) {
            this.fileSystem.edit(filePath)
                .remove(start, data.replace.length)
                .insertRight(start, data.replaceWith);
        }
    }
    exports.AttributeSelectorsMigration = AttributeSelectorsMigration;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXR0cmlidXRlLXNlbGVjdG9ycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jZGsvc2NoZW1hdGljcy9uZy11cGRhdGUvbWlncmF0aW9ucy9hdHRyaWJ1dGUtc2VsZWN0b3JzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRzs7Ozs7Ozs7Ozs7O0lBRUgsaUNBQWlDO0lBRWpDLDZFQUFzRDtJQUV0RCxrRkFBOEQ7SUFDOUQsaUZBQW1FO0lBRW5FOzs7T0FHRztJQUNILE1BQWEsMkJBQTRCLFNBQVEscUJBQXNCO1FBQXZFOztZQUNFLDZEQUE2RDtZQUM3RCxTQUFJLEdBQUcsb0NBQXFCLENBQUMsSUFBSSxFQUFFLG9CQUFvQixDQUFDLENBQUM7WUFFekQsMkRBQTJEO1lBQzNELFlBQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUM7UUFrRG5DLENBQUM7UUFoREMsU0FBUyxDQUFDLElBQWE7WUFDckIsSUFBSSxFQUFFLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ2hDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUNwQztRQUNILENBQUM7UUFFRCxhQUFhLENBQUMsUUFBMEI7WUFDdEMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUU7Z0JBQzNCLGlDQUF1QixDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLE9BQU8sQ0FBQztxQkFDdEQsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUM7cUJBQ3RDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ25GLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztRQUVELGVBQWUsQ0FBQyxVQUE0QjtZQUMxQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsRUFBRTtnQkFDM0IsTUFBTSxlQUFlLEdBQUcsSUFBSSxRQUFRLENBQUMsT0FBTyxHQUFHLENBQUM7Z0JBQ2hELE1BQU0sZUFBZSxHQUFHLElBQUksUUFBUSxDQUFDLFdBQVcsR0FBRyxDQUFDO2dCQUVwRCxpQ0FBdUIsQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLGVBQWUsQ0FBQztxQkFDdkQsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUM7cUJBQ3hDLE9BQU8sQ0FDSixLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FDMUIsVUFBVSxDQUFDLFFBQVEsRUFBRSxLQUFLLEVBQzFCLEVBQUMsT0FBTyxFQUFFLGVBQWUsRUFBRSxXQUFXLEVBQUUsZUFBZSxFQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3pFLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztRQUVPLHVCQUF1QixDQUFDLE9BQTZCO1lBQzNELElBQUksT0FBTyxDQUFDLE1BQU0sSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxFQUFFLENBQUMsVUFBVSxDQUFDLGNBQWMsRUFBRTtnQkFDMUUsT0FBTzthQUNSO1lBRUQsTUFBTSxXQUFXLEdBQUcsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ3RDLE1BQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQyxRQUFRLENBQUM7WUFFbEQsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUU7Z0JBQzNCLGlDQUF1QixDQUFDLFdBQVcsRUFBRSxRQUFRLENBQUMsT0FBTyxDQUFDO3FCQUNqRCxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLEdBQUcsTUFBTSxDQUFDO3FCQUMxQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQzFFLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztRQUVPLGdCQUFnQixDQUFDLFFBQWdCLEVBQUUsS0FBYSxFQUFFLElBQWtDO1lBQzFGLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztpQkFDM0IsTUFBTSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztpQkFDbEMsV0FBVyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDMUMsQ0FBQztLQUNGO0lBdkRELGtFQXVEQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQgKiBhcyB0cyBmcm9tICd0eXBlc2NyaXB0JztcbmltcG9ydCB7UmVzb2x2ZWRSZXNvdXJjZX0gZnJvbSAnLi4vLi4vdXBkYXRlLXRvb2wvY29tcG9uZW50LXJlc291cmNlLWNvbGxlY3Rvcic7XG5pbXBvcnQge01pZ3JhdGlvbn0gZnJvbSAnLi4vLi4vdXBkYXRlLXRvb2wvbWlncmF0aW9uJztcbmltcG9ydCB7QXR0cmlidXRlU2VsZWN0b3JVcGdyYWRlRGF0YX0gZnJvbSAnLi4vZGF0YS9hdHRyaWJ1dGUtc2VsZWN0b3JzJztcbmltcG9ydCB7ZmluZEFsbFN1YnN0cmluZ0luZGljZXN9IGZyb20gJy4uL3R5cGVzY3JpcHQvbGl0ZXJhbCc7XG5pbXBvcnQge2dldFZlcnNpb25VcGdyYWRlRGF0YSwgVXBncmFkZURhdGF9IGZyb20gJy4uL3VwZ3JhZGUtZGF0YSc7XG5cbi8qKlxuICogTWlncmF0aW9uIHRoYXQgd2Fsa3MgdGhyb3VnaCBldmVyeSBzdHJpbmcgbGl0ZXJhbCwgdGVtcGxhdGUgYW5kIHN0eWxlc2hlZXRcbiAqIGluIG9yZGVyIHRvIHN3aXRjaCBkZXByZWNhdGVkIGF0dHJpYnV0ZSBzZWxlY3RvcnMgdG8gdGhlIHVwZGF0ZWQgc2VsZWN0b3IuXG4gKi9cbmV4cG9ydCBjbGFzcyBBdHRyaWJ1dGVTZWxlY3RvcnNNaWdyYXRpb24gZXh0ZW5kcyBNaWdyYXRpb248VXBncmFkZURhdGE+IHtcbiAgLyoqIFJlcXVpcmVkIHVwZ3JhZGUgY2hhbmdlcyBmb3Igc3BlY2lmaWVkIHRhcmdldCB2ZXJzaW9uLiAqL1xuICBkYXRhID0gZ2V0VmVyc2lvblVwZ3JhZGVEYXRhKHRoaXMsICdhdHRyaWJ1dGVTZWxlY3RvcnMnKTtcblxuICAvLyBPbmx5IGVuYWJsZSB0aGUgbWlncmF0aW9uIHJ1bGUgaWYgdGhlcmUgaXMgdXBncmFkZSBkYXRhLlxuICBlbmFibGVkID0gdGhpcy5kYXRhLmxlbmd0aCAhPT0gMDtcblxuICB2aXNpdE5vZGUobm9kZTogdHMuTm9kZSkge1xuICAgIGlmICh0cy5pc1N0cmluZ0xpdGVyYWxMaWtlKG5vZGUpKSB7XG4gICAgICB0aGlzLl92aXNpdFN0cmluZ0xpdGVyYWxMaWtlKG5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIHZpc2l0VGVtcGxhdGUodGVtcGxhdGU6IFJlc29sdmVkUmVzb3VyY2UpIHtcbiAgICB0aGlzLmRhdGEuZm9yRWFjaChzZWxlY3RvciA9PiB7XG4gICAgICBmaW5kQWxsU3Vic3RyaW5nSW5kaWNlcyh0ZW1wbGF0ZS5jb250ZW50LCBzZWxlY3Rvci5yZXBsYWNlKVxuICAgICAgICAgIC5tYXAob2Zmc2V0ID0+IHRlbXBsYXRlLnN0YXJ0ICsgb2Zmc2V0KVxuICAgICAgICAgIC5mb3JFYWNoKHN0YXJ0ID0+IHRoaXMuX3JlcGxhY2VTZWxlY3Rvcih0ZW1wbGF0ZS5maWxlUGF0aCwgc3RhcnQsIHNlbGVjdG9yKSk7XG4gICAgfSk7XG4gIH1cblxuICB2aXNpdFN0eWxlc2hlZXQoc3R5bGVzaGVldDogUmVzb2x2ZWRSZXNvdXJjZSk6IHZvaWQge1xuICAgIHRoaXMuZGF0YS5mb3JFYWNoKHNlbGVjdG9yID0+IHtcbiAgICAgIGNvbnN0IGN1cnJlbnRTZWxlY3RvciA9IGBbJHtzZWxlY3Rvci5yZXBsYWNlfV1gO1xuICAgICAgY29uc3QgdXBkYXRlZFNlbGVjdG9yID0gYFske3NlbGVjdG9yLnJlcGxhY2VXaXRofV1gO1xuXG4gICAgICBmaW5kQWxsU3Vic3RyaW5nSW5kaWNlcyhzdHlsZXNoZWV0LmNvbnRlbnQsIGN1cnJlbnRTZWxlY3RvcilcbiAgICAgICAgICAubWFwKG9mZnNldCA9PiBzdHlsZXNoZWV0LnN0YXJ0ICsgb2Zmc2V0KVxuICAgICAgICAgIC5mb3JFYWNoKFxuICAgICAgICAgICAgICBzdGFydCA9PiB0aGlzLl9yZXBsYWNlU2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgICBzdHlsZXNoZWV0LmZpbGVQYXRoLCBzdGFydCxcbiAgICAgICAgICAgICAgICAgIHtyZXBsYWNlOiBjdXJyZW50U2VsZWN0b3IsIHJlcGxhY2VXaXRoOiB1cGRhdGVkU2VsZWN0b3J9KSk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF92aXNpdFN0cmluZ0xpdGVyYWxMaWtlKGxpdGVyYWw6IHRzLlN0cmluZ0xpdGVyYWxMaWtlKSB7XG4gICAgaWYgKGxpdGVyYWwucGFyZW50ICYmIGxpdGVyYWwucGFyZW50LmtpbmQgIT09IHRzLlN5bnRheEtpbmQuQ2FsbEV4cHJlc3Npb24pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBsaXRlcmFsVGV4dCA9IGxpdGVyYWwuZ2V0VGV4dCgpO1xuICAgIGNvbnN0IGZpbGVQYXRoID0gbGl0ZXJhbC5nZXRTb3VyY2VGaWxlKCkuZmlsZU5hbWU7XG5cbiAgICB0aGlzLmRhdGEuZm9yRWFjaChzZWxlY3RvciA9PiB7XG4gICAgICBmaW5kQWxsU3Vic3RyaW5nSW5kaWNlcyhsaXRlcmFsVGV4dCwgc2VsZWN0b3IucmVwbGFjZSlcbiAgICAgICAgICAubWFwKG9mZnNldCA9PiBsaXRlcmFsLmdldFN0YXJ0KCkgKyBvZmZzZXQpXG4gICAgICAgICAgLmZvckVhY2goc3RhcnQgPT4gdGhpcy5fcmVwbGFjZVNlbGVjdG9yKGZpbGVQYXRoLCBzdGFydCwgc2VsZWN0b3IpKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX3JlcGxhY2VTZWxlY3RvcihmaWxlUGF0aDogc3RyaW5nLCBzdGFydDogbnVtYmVyLCBkYXRhOiBBdHRyaWJ1dGVTZWxlY3RvclVwZ3JhZGVEYXRhKSB7XG4gICAgdGhpcy5maWxlU3lzdGVtLmVkaXQoZmlsZVBhdGgpXG4gICAgICAucmVtb3ZlKHN0YXJ0LCBkYXRhLnJlcGxhY2UubGVuZ3RoKVxuICAgICAgLmluc2VydFJpZ2h0KHN0YXJ0LCBkYXRhLnJlcGxhY2VXaXRoKTtcbiAgfVxufVxuIl19
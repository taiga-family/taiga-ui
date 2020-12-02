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
        define("@angular/cdk/schematics/ng-update/migrations/css-selectors", ["require", "exports", "typescript", "@angular/cdk/schematics/update-tool/migration", "@angular/cdk/schematics/ng-update/typescript/literal", "@angular/cdk/schematics/ng-update/upgrade-data"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const ts = require("typescript");
    const migration_1 = require("@angular/cdk/schematics/update-tool/migration");
    const literal_1 = require("@angular/cdk/schematics/ng-update/typescript/literal");
    const upgrade_data_1 = require("@angular/cdk/schematics/ng-update/upgrade-data");
    /**
     * Migration that walks through every string literal, template and stylesheet in
     * order to migrate outdated CSS selectors to the new selector.
     */
    class CssSelectorsMigration extends migration_1.Migration {
        constructor() {
            super(...arguments);
            /** Change data that upgrades to the specified target version. */
            this.data = upgrade_data_1.getVersionUpgradeData(this, 'cssSelectors');
            // Only enable the migration rule if there is upgrade data.
            this.enabled = this.data.length !== 0;
        }
        visitNode(node) {
            if (ts.isStringLiteralLike(node)) {
                this._visitStringLiteralLike(node);
            }
        }
        visitTemplate(template) {
            this.data.forEach(data => {
                if (data.whitelist && !data.whitelist.html) {
                    return;
                }
                literal_1.findAllSubstringIndices(template.content, data.replace)
                    .map(offset => template.start + offset)
                    .forEach(start => this._replaceSelector(template.filePath, start, data));
            });
        }
        visitStylesheet(stylesheet) {
            this.data.forEach(data => {
                if (data.whitelist && !data.whitelist.stylesheet) {
                    return;
                }
                literal_1.findAllSubstringIndices(stylesheet.content, data.replace)
                    .map(offset => stylesheet.start + offset)
                    .forEach(start => this._replaceSelector(stylesheet.filePath, start, data));
            });
        }
        _visitStringLiteralLike(node) {
            if (node.parent && node.parent.kind !== ts.SyntaxKind.CallExpression) {
                return;
            }
            const textContent = node.getText();
            const filePath = node.getSourceFile().fileName;
            this.data.forEach(data => {
                if (data.whitelist && !data.whitelist.strings) {
                    return;
                }
                literal_1.findAllSubstringIndices(textContent, data.replace)
                    .map(offset => node.getStart() + offset)
                    .forEach(start => this._replaceSelector(filePath, start, data));
            });
        }
        _replaceSelector(filePath, start, data) {
            this.fileSystem.edit(filePath)
                .remove(start, data.replace.length)
                .insertRight(start, data.replaceWith);
        }
    }
    exports.CssSelectorsMigration = CssSelectorsMigration;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3NzLXNlbGVjdG9ycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jZGsvc2NoZW1hdGljcy9uZy11cGRhdGUvbWlncmF0aW9ucy9jc3Mtc2VsZWN0b3JzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRzs7Ozs7Ozs7Ozs7O0lBRUgsaUNBQWlDO0lBRWpDLDZFQUFzRDtJQUV0RCxrRkFBOEQ7SUFDOUQsaUZBQW1FO0lBRW5FOzs7T0FHRztJQUNILE1BQWEscUJBQXNCLFNBQVEscUJBQXNCO1FBQWpFOztZQUNFLGlFQUFpRTtZQUNqRSxTQUFJLEdBQUcsb0NBQXFCLENBQUMsSUFBSSxFQUFFLGNBQWMsQ0FBQyxDQUFDO1lBRW5ELDJEQUEyRDtZQUMzRCxZQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDO1FBd0RuQyxDQUFDO1FBdERDLFNBQVMsQ0FBQyxJQUFhO1lBQ3JCLElBQUksRUFBRSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUNoQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDcEM7UUFDSCxDQUFDO1FBRUQsYUFBYSxDQUFDLFFBQTBCO1lBQ3RDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUN2QixJQUFJLElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRTtvQkFDMUMsT0FBTztpQkFDUjtnQkFFRCxpQ0FBdUIsQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUM7cUJBQ2xELEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDO3FCQUN0QyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUMvRSxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUM7UUFFRCxlQUFlLENBQUMsVUFBNEI7WUFDMUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ3ZCLElBQUksSUFBSSxDQUFDLFNBQVMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFO29CQUNoRCxPQUFPO2lCQUNSO2dCQUVELGlDQUF1QixDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQztxQkFDcEQsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUM7cUJBQ3hDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ2pGLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztRQUVPLHVCQUF1QixDQUFDLElBQTBCO1lBQ3hELElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxFQUFFLENBQUMsVUFBVSxDQUFDLGNBQWMsRUFBRTtnQkFDcEUsT0FBTzthQUNSO1lBRUQsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ25DLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxRQUFRLENBQUM7WUFFL0MsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ3ZCLElBQUksSUFBSSxDQUFDLFNBQVMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFO29CQUM3QyxPQUFPO2lCQUNSO2dCQUVELGlDQUF1QixDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDO3FCQUM3QyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEdBQUcsTUFBTSxDQUFDO3FCQUN2QyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3RFLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztRQUVPLGdCQUFnQixDQUFDLFFBQWdCLEVBQUUsS0FBYSxFQUFFLElBQTRCO1lBQ3BGLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztpQkFDM0IsTUFBTSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztpQkFDbEMsV0FBVyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDMUMsQ0FBQztLQUNGO0lBN0RELHNEQTZEQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQgKiBhcyB0cyBmcm9tICd0eXBlc2NyaXB0JztcbmltcG9ydCB7UmVzb2x2ZWRSZXNvdXJjZX0gZnJvbSAnLi4vLi4vdXBkYXRlLXRvb2wvY29tcG9uZW50LXJlc291cmNlLWNvbGxlY3Rvcic7XG5pbXBvcnQge01pZ3JhdGlvbn0gZnJvbSAnLi4vLi4vdXBkYXRlLXRvb2wvbWlncmF0aW9uJztcbmltcG9ydCB7Q3NzU2VsZWN0b3JVcGdyYWRlRGF0YX0gZnJvbSAnLi4vZGF0YS9jc3Mtc2VsZWN0b3JzJztcbmltcG9ydCB7ZmluZEFsbFN1YnN0cmluZ0luZGljZXN9IGZyb20gJy4uL3R5cGVzY3JpcHQvbGl0ZXJhbCc7XG5pbXBvcnQge2dldFZlcnNpb25VcGdyYWRlRGF0YSwgVXBncmFkZURhdGF9IGZyb20gJy4uL3VwZ3JhZGUtZGF0YSc7XG5cbi8qKlxuICogTWlncmF0aW9uIHRoYXQgd2Fsa3MgdGhyb3VnaCBldmVyeSBzdHJpbmcgbGl0ZXJhbCwgdGVtcGxhdGUgYW5kIHN0eWxlc2hlZXQgaW5cbiAqIG9yZGVyIHRvIG1pZ3JhdGUgb3V0ZGF0ZWQgQ1NTIHNlbGVjdG9ycyB0byB0aGUgbmV3IHNlbGVjdG9yLlxuICovXG5leHBvcnQgY2xhc3MgQ3NzU2VsZWN0b3JzTWlncmF0aW9uIGV4dGVuZHMgTWlncmF0aW9uPFVwZ3JhZGVEYXRhPiB7XG4gIC8qKiBDaGFuZ2UgZGF0YSB0aGF0IHVwZ3JhZGVzIHRvIHRoZSBzcGVjaWZpZWQgdGFyZ2V0IHZlcnNpb24uICovXG4gIGRhdGEgPSBnZXRWZXJzaW9uVXBncmFkZURhdGEodGhpcywgJ2Nzc1NlbGVjdG9ycycpO1xuXG4gIC8vIE9ubHkgZW5hYmxlIHRoZSBtaWdyYXRpb24gcnVsZSBpZiB0aGVyZSBpcyB1cGdyYWRlIGRhdGEuXG4gIGVuYWJsZWQgPSB0aGlzLmRhdGEubGVuZ3RoICE9PSAwO1xuXG4gIHZpc2l0Tm9kZShub2RlOiB0cy5Ob2RlKTogdm9pZCB7XG4gICAgaWYgKHRzLmlzU3RyaW5nTGl0ZXJhbExpa2Uobm9kZSkpIHtcbiAgICAgIHRoaXMuX3Zpc2l0U3RyaW5nTGl0ZXJhbExpa2Uobm9kZSk7XG4gICAgfVxuICB9XG5cbiAgdmlzaXRUZW1wbGF0ZSh0ZW1wbGF0ZTogUmVzb2x2ZWRSZXNvdXJjZSk6IHZvaWQge1xuICAgIHRoaXMuZGF0YS5mb3JFYWNoKGRhdGEgPT4ge1xuICAgICAgaWYgKGRhdGEud2hpdGVsaXN0ICYmICFkYXRhLndoaXRlbGlzdC5odG1sKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgZmluZEFsbFN1YnN0cmluZ0luZGljZXModGVtcGxhdGUuY29udGVudCwgZGF0YS5yZXBsYWNlKVxuICAgICAgICAgIC5tYXAob2Zmc2V0ID0+IHRlbXBsYXRlLnN0YXJ0ICsgb2Zmc2V0KVxuICAgICAgICAgIC5mb3JFYWNoKHN0YXJ0ID0+IHRoaXMuX3JlcGxhY2VTZWxlY3Rvcih0ZW1wbGF0ZS5maWxlUGF0aCwgc3RhcnQsIGRhdGEpKTtcbiAgICB9KTtcbiAgfVxuXG4gIHZpc2l0U3R5bGVzaGVldChzdHlsZXNoZWV0OiBSZXNvbHZlZFJlc291cmNlKTogdm9pZCB7XG4gICAgdGhpcy5kYXRhLmZvckVhY2goZGF0YSA9PiB7XG4gICAgICBpZiAoZGF0YS53aGl0ZWxpc3QgJiYgIWRhdGEud2hpdGVsaXN0LnN0eWxlc2hlZXQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBmaW5kQWxsU3Vic3RyaW5nSW5kaWNlcyhzdHlsZXNoZWV0LmNvbnRlbnQsIGRhdGEucmVwbGFjZSlcbiAgICAgICAgICAubWFwKG9mZnNldCA9PiBzdHlsZXNoZWV0LnN0YXJ0ICsgb2Zmc2V0KVxuICAgICAgICAgIC5mb3JFYWNoKHN0YXJ0ID0+IHRoaXMuX3JlcGxhY2VTZWxlY3RvcihzdHlsZXNoZWV0LmZpbGVQYXRoLCBzdGFydCwgZGF0YSkpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfdmlzaXRTdHJpbmdMaXRlcmFsTGlrZShub2RlOiB0cy5TdHJpbmdMaXRlcmFsTGlrZSkge1xuICAgIGlmIChub2RlLnBhcmVudCAmJiBub2RlLnBhcmVudC5raW5kICE9PSB0cy5TeW50YXhLaW5kLkNhbGxFeHByZXNzaW9uKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgdGV4dENvbnRlbnQgPSBub2RlLmdldFRleHQoKTtcbiAgICBjb25zdCBmaWxlUGF0aCA9IG5vZGUuZ2V0U291cmNlRmlsZSgpLmZpbGVOYW1lO1xuXG4gICAgdGhpcy5kYXRhLmZvckVhY2goZGF0YSA9PiB7XG4gICAgICBpZiAoZGF0YS53aGl0ZWxpc3QgJiYgIWRhdGEud2hpdGVsaXN0LnN0cmluZ3MpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBmaW5kQWxsU3Vic3RyaW5nSW5kaWNlcyh0ZXh0Q29udGVudCwgZGF0YS5yZXBsYWNlKVxuICAgICAgICAgIC5tYXAob2Zmc2V0ID0+IG5vZGUuZ2V0U3RhcnQoKSArIG9mZnNldClcbiAgICAgICAgICAuZm9yRWFjaChzdGFydCA9PiB0aGlzLl9yZXBsYWNlU2VsZWN0b3IoZmlsZVBhdGgsIHN0YXJ0LCBkYXRhKSk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF9yZXBsYWNlU2VsZWN0b3IoZmlsZVBhdGg6IHN0cmluZywgc3RhcnQ6IG51bWJlciwgZGF0YTogQ3NzU2VsZWN0b3JVcGdyYWRlRGF0YSkge1xuICAgIHRoaXMuZmlsZVN5c3RlbS5lZGl0KGZpbGVQYXRoKVxuICAgICAgLnJlbW92ZShzdGFydCwgZGF0YS5yZXBsYWNlLmxlbmd0aClcbiAgICAgIC5pbnNlcnRSaWdodChzdGFydCwgZGF0YS5yZXBsYWNlV2l0aCk7XG4gIH1cbn1cbiJdfQ==
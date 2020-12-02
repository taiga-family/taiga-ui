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
        define("@angular/cdk/schematics/ng-update/migrations/element-selectors", ["require", "exports", "typescript", "@angular/cdk/schematics/update-tool/migration", "@angular/cdk/schematics/ng-update/typescript/literal", "@angular/cdk/schematics/ng-update/upgrade-data"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const ts = require("typescript");
    const migration_1 = require("@angular/cdk/schematics/update-tool/migration");
    const literal_1 = require("@angular/cdk/schematics/ng-update/typescript/literal");
    const upgrade_data_1 = require("@angular/cdk/schematics/ng-update/upgrade-data");
    /**
     * Migration that walks through every string literal, template and stylesheet in order
     * to migrate outdated element selectors to the new one.
     */
    class ElementSelectorsMigration extends migration_1.Migration {
        constructor() {
            super(...arguments);
            /** Change data that upgrades to the specified target version. */
            this.data = upgrade_data_1.getVersionUpgradeData(this, 'elementSelectors');
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
                literal_1.findAllSubstringIndices(stylesheet.content, selector.replace)
                    .map(offset => stylesheet.start + offset)
                    .forEach(start => this._replaceSelector(stylesheet.filePath, start, selector));
            });
        }
        _visitStringLiteralLike(node) {
            if (node.parent && node.parent.kind !== ts.SyntaxKind.CallExpression) {
                return;
            }
            const textContent = node.getText();
            const filePath = node.getSourceFile().fileName;
            this.data.forEach(selector => {
                literal_1.findAllSubstringIndices(textContent, selector.replace)
                    .map(offset => node.getStart() + offset)
                    .forEach(start => this._replaceSelector(filePath, start, selector));
            });
        }
        _replaceSelector(filePath, start, data) {
            this.fileSystem.edit(filePath)
                .remove(start, data.replace.length)
                .insertRight(start, data.replaceWith);
        }
    }
    exports.ElementSelectorsMigration = ElementSelectorsMigration;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxlbWVudC1zZWxlY3RvcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY2RrL3NjaGVtYXRpY3MvbmctdXBkYXRlL21pZ3JhdGlvbnMvZWxlbWVudC1zZWxlY3RvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HOzs7Ozs7Ozs7Ozs7SUFFSCxpQ0FBaUM7SUFFakMsNkVBQXNEO0lBRXRELGtGQUE4RDtJQUM5RCxpRkFBbUU7SUFFbkU7OztPQUdHO0lBQ0gsTUFBYSx5QkFBMEIsU0FBUSxxQkFBc0I7UUFBckU7O1lBQ0UsaUVBQWlFO1lBQ2pFLFNBQUksR0FBRyxvQ0FBcUIsQ0FBQyxJQUFJLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztZQUV2RCwyREFBMkQ7WUFDM0QsWUFBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQztRQTRDbkMsQ0FBQztRQTFDQyxTQUFTLENBQUMsSUFBYTtZQUNyQixJQUFJLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDaEMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ3BDO1FBQ0gsQ0FBQztRQUVELGFBQWEsQ0FBQyxRQUEwQjtZQUN0QyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsRUFBRTtnQkFDM0IsaUNBQXVCLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsT0FBTyxDQUFDO3FCQUN0RCxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQztxQkFDdEMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDbkYsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDO1FBRUQsZUFBZSxDQUFDLFVBQTRCO1lBQzFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFO2dCQUMzQixpQ0FBdUIsQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxPQUFPLENBQUM7cUJBQ3hELEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDO3FCQUN4QyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUNyRixDQUFDLENBQUMsQ0FBQztRQUNMLENBQUM7UUFFTyx1QkFBdUIsQ0FBQyxJQUEwQjtZQUN4RCxJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssRUFBRSxDQUFDLFVBQVUsQ0FBQyxjQUFjLEVBQUU7Z0JBQ3BFLE9BQU87YUFDUjtZQUVELE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNuQyxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsUUFBUSxDQUFDO1lBRS9DLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFO2dCQUMzQixpQ0FBdUIsQ0FBQyxXQUFXLEVBQUUsUUFBUSxDQUFDLE9BQU8sQ0FBQztxQkFDakQsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxHQUFHLE1BQU0sQ0FBQztxQkFDdkMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUMxRSxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUM7UUFFTyxnQkFBZ0IsQ0FBQyxRQUFnQixFQUFFLEtBQWEsRUFBRSxJQUFnQztZQUN4RixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7aUJBQzNCLE1BQU0sQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7aUJBQ2xDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzFDLENBQUM7S0FDRjtJQWpERCw4REFpREMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0ICogYXMgdHMgZnJvbSAndHlwZXNjcmlwdCc7XG5pbXBvcnQge1Jlc29sdmVkUmVzb3VyY2V9IGZyb20gJy4uLy4uL3VwZGF0ZS10b29sL2NvbXBvbmVudC1yZXNvdXJjZS1jb2xsZWN0b3InO1xuaW1wb3J0IHtNaWdyYXRpb259IGZyb20gJy4uLy4uL3VwZGF0ZS10b29sL21pZ3JhdGlvbic7XG5pbXBvcnQge0VsZW1lbnRTZWxlY3RvclVwZ3JhZGVEYXRhfSBmcm9tICcuLi9kYXRhL2VsZW1lbnQtc2VsZWN0b3JzJztcbmltcG9ydCB7ZmluZEFsbFN1YnN0cmluZ0luZGljZXN9IGZyb20gJy4uL3R5cGVzY3JpcHQvbGl0ZXJhbCc7XG5pbXBvcnQge2dldFZlcnNpb25VcGdyYWRlRGF0YSwgVXBncmFkZURhdGF9IGZyb20gJy4uL3VwZ3JhZGUtZGF0YSc7XG5cbi8qKlxuICogTWlncmF0aW9uIHRoYXQgd2Fsa3MgdGhyb3VnaCBldmVyeSBzdHJpbmcgbGl0ZXJhbCwgdGVtcGxhdGUgYW5kIHN0eWxlc2hlZXQgaW4gb3JkZXJcbiAqIHRvIG1pZ3JhdGUgb3V0ZGF0ZWQgZWxlbWVudCBzZWxlY3RvcnMgdG8gdGhlIG5ldyBvbmUuXG4gKi9cbmV4cG9ydCBjbGFzcyBFbGVtZW50U2VsZWN0b3JzTWlncmF0aW9uIGV4dGVuZHMgTWlncmF0aW9uPFVwZ3JhZGVEYXRhPiB7XG4gIC8qKiBDaGFuZ2UgZGF0YSB0aGF0IHVwZ3JhZGVzIHRvIHRoZSBzcGVjaWZpZWQgdGFyZ2V0IHZlcnNpb24uICovXG4gIGRhdGEgPSBnZXRWZXJzaW9uVXBncmFkZURhdGEodGhpcywgJ2VsZW1lbnRTZWxlY3RvcnMnKTtcblxuICAvLyBPbmx5IGVuYWJsZSB0aGUgbWlncmF0aW9uIHJ1bGUgaWYgdGhlcmUgaXMgdXBncmFkZSBkYXRhLlxuICBlbmFibGVkID0gdGhpcy5kYXRhLmxlbmd0aCAhPT0gMDtcblxuICB2aXNpdE5vZGUobm9kZTogdHMuTm9kZSk6IHZvaWQge1xuICAgIGlmICh0cy5pc1N0cmluZ0xpdGVyYWxMaWtlKG5vZGUpKSB7XG4gICAgICB0aGlzLl92aXNpdFN0cmluZ0xpdGVyYWxMaWtlKG5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIHZpc2l0VGVtcGxhdGUodGVtcGxhdGU6IFJlc29sdmVkUmVzb3VyY2UpOiB2b2lkIHtcbiAgICB0aGlzLmRhdGEuZm9yRWFjaChzZWxlY3RvciA9PiB7XG4gICAgICBmaW5kQWxsU3Vic3RyaW5nSW5kaWNlcyh0ZW1wbGF0ZS5jb250ZW50LCBzZWxlY3Rvci5yZXBsYWNlKVxuICAgICAgICAgIC5tYXAob2Zmc2V0ID0+IHRlbXBsYXRlLnN0YXJ0ICsgb2Zmc2V0KVxuICAgICAgICAgIC5mb3JFYWNoKHN0YXJ0ID0+IHRoaXMuX3JlcGxhY2VTZWxlY3Rvcih0ZW1wbGF0ZS5maWxlUGF0aCwgc3RhcnQsIHNlbGVjdG9yKSk7XG4gICAgfSk7XG4gIH1cblxuICB2aXNpdFN0eWxlc2hlZXQoc3R5bGVzaGVldDogUmVzb2x2ZWRSZXNvdXJjZSk6IHZvaWQge1xuICAgIHRoaXMuZGF0YS5mb3JFYWNoKHNlbGVjdG9yID0+IHtcbiAgICAgIGZpbmRBbGxTdWJzdHJpbmdJbmRpY2VzKHN0eWxlc2hlZXQuY29udGVudCwgc2VsZWN0b3IucmVwbGFjZSlcbiAgICAgICAgICAubWFwKG9mZnNldCA9PiBzdHlsZXNoZWV0LnN0YXJ0ICsgb2Zmc2V0KVxuICAgICAgICAgIC5mb3JFYWNoKHN0YXJ0ID0+IHRoaXMuX3JlcGxhY2VTZWxlY3RvcihzdHlsZXNoZWV0LmZpbGVQYXRoLCBzdGFydCwgc2VsZWN0b3IpKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX3Zpc2l0U3RyaW5nTGl0ZXJhbExpa2Uobm9kZTogdHMuU3RyaW5nTGl0ZXJhbExpa2UpIHtcbiAgICBpZiAobm9kZS5wYXJlbnQgJiYgbm9kZS5wYXJlbnQua2luZCAhPT0gdHMuU3ludGF4S2luZC5DYWxsRXhwcmVzc2lvbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHRleHRDb250ZW50ID0gbm9kZS5nZXRUZXh0KCk7XG4gICAgY29uc3QgZmlsZVBhdGggPSBub2RlLmdldFNvdXJjZUZpbGUoKS5maWxlTmFtZTtcblxuICAgIHRoaXMuZGF0YS5mb3JFYWNoKHNlbGVjdG9yID0+IHtcbiAgICAgIGZpbmRBbGxTdWJzdHJpbmdJbmRpY2VzKHRleHRDb250ZW50LCBzZWxlY3Rvci5yZXBsYWNlKVxuICAgICAgICAgIC5tYXAob2Zmc2V0ID0+IG5vZGUuZ2V0U3RhcnQoKSArIG9mZnNldClcbiAgICAgICAgICAuZm9yRWFjaChzdGFydCA9PiB0aGlzLl9yZXBsYWNlU2VsZWN0b3IoZmlsZVBhdGgsIHN0YXJ0LCBzZWxlY3RvcikpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfcmVwbGFjZVNlbGVjdG9yKGZpbGVQYXRoOiBzdHJpbmcsIHN0YXJ0OiBudW1iZXIsIGRhdGE6IEVsZW1lbnRTZWxlY3RvclVwZ3JhZGVEYXRhKSB7XG4gICAgdGhpcy5maWxlU3lzdGVtLmVkaXQoZmlsZVBhdGgpXG4gICAgICAucmVtb3ZlKHN0YXJ0LCBkYXRhLnJlcGxhY2UubGVuZ3RoKVxuICAgICAgLmluc2VydFJpZ2h0KHN0YXJ0LCBkYXRhLnJlcGxhY2VXaXRoKTtcbiAgfVxufVxuIl19
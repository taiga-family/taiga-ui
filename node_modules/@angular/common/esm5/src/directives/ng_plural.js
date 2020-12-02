/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { __decorate, __metadata, __param } from "tslib";
import { Attribute, Directive, Host, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { getPluralCategory, NgLocalization } from '../i18n/localization';
import { SwitchView } from './ng_switch';
/**
 * @ngModule CommonModule
 *
 * @usageNotes
 * ```
 * <some-element [ngPlural]="value">
 *   <ng-template ngPluralCase="=0">there is nothing</ng-template>
 *   <ng-template ngPluralCase="=1">there is one</ng-template>
 *   <ng-template ngPluralCase="few">there are a few</ng-template>
 * </some-element>
 * ```
 *
 * @description
 *
 * Adds / removes DOM sub-trees based on a numeric value. Tailored for pluralization.
 *
 * Displays DOM sub-trees that match the switch expression value, or failing that, DOM sub-trees
 * that match the switch expression's pluralization category.
 *
 * To use this directive you must provide a container element that sets the `[ngPlural]` attribute
 * to a switch expression. Inner elements with a `[ngPluralCase]` will display based on their
 * expression:
 * - if `[ngPluralCase]` is set to a value starting with `=`, it will only display if the value
 *   matches the switch expression exactly,
 * - otherwise, the view will be treated as a "category match", and will only display if exact
 *   value matches aren't found and the value maps to its category for the defined locale.
 *
 * See http://cldr.unicode.org/index/cldr-spec/plural-rules
 *
 * @publicApi
 */
var NgPlural = /** @class */ (function () {
    function NgPlural(_localization) {
        this._localization = _localization;
        this._caseViews = {};
    }
    Object.defineProperty(NgPlural.prototype, "ngPlural", {
        set: function (value) {
            this._switchValue = value;
            this._updateView();
        },
        enumerable: true,
        configurable: true
    });
    NgPlural.prototype.addCase = function (value, switchView) {
        this._caseViews[value] = switchView;
    };
    NgPlural.prototype._updateView = function () {
        this._clearViews();
        var cases = Object.keys(this._caseViews);
        var key = getPluralCategory(this._switchValue, cases, this._localization);
        this._activateView(this._caseViews[key]);
    };
    NgPlural.prototype._clearViews = function () {
        if (this._activeView)
            this._activeView.destroy();
    };
    NgPlural.prototype._activateView = function (view) {
        if (view) {
            this._activeView = view;
            this._activeView.create();
        }
    };
    __decorate([
        Input(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], NgPlural.prototype, "ngPlural", null);
    NgPlural = __decorate([
        Directive({ selector: '[ngPlural]' }),
        __metadata("design:paramtypes", [NgLocalization])
    ], NgPlural);
    return NgPlural;
}());
export { NgPlural };
/**
 * @ngModule CommonModule
 *
 * @description
 *
 * Creates a view that will be added/removed from the parent {@link NgPlural} when the
 * given expression matches the plural expression according to CLDR rules.
 *
 * @usageNotes
 * ```
 * <some-element [ngPlural]="value">
 *   <ng-template ngPluralCase="=0">...</ng-template>
 *   <ng-template ngPluralCase="other">...</ng-template>
 * </some-element>
 *```
 *
 * See {@link NgPlural} for more details and example.
 *
 * @publicApi
 */
var NgPluralCase = /** @class */ (function () {
    function NgPluralCase(value, template, viewContainer, ngPlural) {
        this.value = value;
        var isANumber = !isNaN(Number(value));
        ngPlural.addCase(isANumber ? "=" + value : value, new SwitchView(viewContainer, template));
    }
    NgPluralCase = __decorate([
        Directive({ selector: '[ngPluralCase]' }),
        __param(0, Attribute('ngPluralCase')),
        __param(3, Host()),
        __metadata("design:paramtypes", [String, TemplateRef,
            ViewContainerRef, NgPlural])
    ], NgPluralCase);
    return NgPluralCase;
}());
export { NgPluralCase };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdfcGx1cmFsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29tbW9uL3NyYy9kaXJlY3RpdmVzL25nX3BsdXJhbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7O0FBRUgsT0FBTyxFQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsZ0JBQWdCLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFL0YsT0FBTyxFQUFDLGlCQUFpQixFQUFFLGNBQWMsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBRXZFLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxhQUFhLENBQUM7QUFHdkM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQThCRztBQUVIO0lBT0Usa0JBQW9CLGFBQTZCO1FBQTdCLGtCQUFhLEdBQWIsYUFBYSxDQUFnQjtRQUZ6QyxlQUFVLEdBQThCLEVBQUUsQ0FBQztJQUVDLENBQUM7SUFHckQsc0JBQUksOEJBQVE7YUFBWixVQUFhLEtBQWE7WUFDeEIsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7WUFDMUIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3JCLENBQUM7OztPQUFBO0lBRUQsMEJBQU8sR0FBUCxVQUFRLEtBQWEsRUFBRSxVQUFzQjtRQUMzQyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxHQUFHLFVBQVUsQ0FBQztJQUN0QyxDQUFDO0lBRU8sOEJBQVcsR0FBbkI7UUFDRSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFFbkIsSUFBTSxLQUFLLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDM0MsSUFBTSxHQUFHLEdBQUcsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzVFLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFTyw4QkFBVyxHQUFuQjtRQUNFLElBQUksSUFBSSxDQUFDLFdBQVc7WUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ25ELENBQUM7SUFFTyxnQ0FBYSxHQUFyQixVQUFzQixJQUFnQjtRQUNwQyxJQUFJLElBQUksRUFBRTtZQUNSLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1lBQ3hCLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDM0I7SUFDSCxDQUFDO0lBMUJEO1FBREMsS0FBSyxFQUFFOzs7NENBSVA7SUFiVSxRQUFRO1FBRHBCLFNBQVMsQ0FBQyxFQUFDLFFBQVEsRUFBRSxZQUFZLEVBQUMsQ0FBQzt5Q0FRQyxjQUFjO09BUHRDLFFBQVEsQ0FxQ3BCO0lBQUQsZUFBQztDQUFBLEFBckNELElBcUNDO1NBckNZLFFBQVE7QUF1Q3JCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBbUJHO0FBRUg7SUFDRSxzQkFDc0MsS0FBYSxFQUFFLFFBQTZCLEVBQzlFLGFBQStCLEVBQVUsUUFBa0I7UUFEekIsVUFBSyxHQUFMLEtBQUssQ0FBUTtRQUVqRCxJQUFNLFNBQVMsR0FBWSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUNqRCxRQUFRLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsTUFBSSxLQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxJQUFJLFVBQVUsQ0FBQyxhQUFhLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUM3RixDQUFDO0lBTlUsWUFBWTtRQUR4QixTQUFTLENBQUMsRUFBQyxRQUFRLEVBQUUsZ0JBQWdCLEVBQUMsQ0FBQztRQUdqQyxXQUFBLFNBQVMsQ0FBQyxjQUFjLENBQUMsQ0FBQTtRQUNRLFdBQUEsSUFBSSxFQUFFLENBQUE7aURBRG1CLFdBQVc7WUFDdkQsZ0JBQWdCLEVBQW9CLFFBQVE7T0FIcEQsWUFBWSxDQU94QjtJQUFELG1CQUFDO0NBQUEsQUFQRCxJQU9DO1NBUFksWUFBWSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtBdHRyaWJ1dGUsIERpcmVjdGl2ZSwgSG9zdCwgSW5wdXQsIFRlbXBsYXRlUmVmLCBWaWV3Q29udGFpbmVyUmVmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtnZXRQbHVyYWxDYXRlZ29yeSwgTmdMb2NhbGl6YXRpb259IGZyb20gJy4uL2kxOG4vbG9jYWxpemF0aW9uJztcblxuaW1wb3J0IHtTd2l0Y2hWaWV3fSBmcm9tICcuL25nX3N3aXRjaCc7XG5cblxuLyoqXG4gKiBAbmdNb2R1bGUgQ29tbW9uTW9kdWxlXG4gKlxuICogQHVzYWdlTm90ZXNcbiAqIGBgYFxuICogPHNvbWUtZWxlbWVudCBbbmdQbHVyYWxdPVwidmFsdWVcIj5cbiAqICAgPG5nLXRlbXBsYXRlIG5nUGx1cmFsQ2FzZT1cIj0wXCI+dGhlcmUgaXMgbm90aGluZzwvbmctdGVtcGxhdGU+XG4gKiAgIDxuZy10ZW1wbGF0ZSBuZ1BsdXJhbENhc2U9XCI9MVwiPnRoZXJlIGlzIG9uZTwvbmctdGVtcGxhdGU+XG4gKiAgIDxuZy10ZW1wbGF0ZSBuZ1BsdXJhbENhc2U9XCJmZXdcIj50aGVyZSBhcmUgYSBmZXc8L25nLXRlbXBsYXRlPlxuICogPC9zb21lLWVsZW1lbnQ+XG4gKiBgYGBcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqXG4gKiBBZGRzIC8gcmVtb3ZlcyBET00gc3ViLXRyZWVzIGJhc2VkIG9uIGEgbnVtZXJpYyB2YWx1ZS4gVGFpbG9yZWQgZm9yIHBsdXJhbGl6YXRpb24uXG4gKlxuICogRGlzcGxheXMgRE9NIHN1Yi10cmVlcyB0aGF0IG1hdGNoIHRoZSBzd2l0Y2ggZXhwcmVzc2lvbiB2YWx1ZSwgb3IgZmFpbGluZyB0aGF0LCBET00gc3ViLXRyZWVzXG4gKiB0aGF0IG1hdGNoIHRoZSBzd2l0Y2ggZXhwcmVzc2lvbidzIHBsdXJhbGl6YXRpb24gY2F0ZWdvcnkuXG4gKlxuICogVG8gdXNlIHRoaXMgZGlyZWN0aXZlIHlvdSBtdXN0IHByb3ZpZGUgYSBjb250YWluZXIgZWxlbWVudCB0aGF0IHNldHMgdGhlIGBbbmdQbHVyYWxdYCBhdHRyaWJ1dGVcbiAqIHRvIGEgc3dpdGNoIGV4cHJlc3Npb24uIElubmVyIGVsZW1lbnRzIHdpdGggYSBgW25nUGx1cmFsQ2FzZV1gIHdpbGwgZGlzcGxheSBiYXNlZCBvbiB0aGVpclxuICogZXhwcmVzc2lvbjpcbiAqIC0gaWYgYFtuZ1BsdXJhbENhc2VdYCBpcyBzZXQgdG8gYSB2YWx1ZSBzdGFydGluZyB3aXRoIGA9YCwgaXQgd2lsbCBvbmx5IGRpc3BsYXkgaWYgdGhlIHZhbHVlXG4gKiAgIG1hdGNoZXMgdGhlIHN3aXRjaCBleHByZXNzaW9uIGV4YWN0bHksXG4gKiAtIG90aGVyd2lzZSwgdGhlIHZpZXcgd2lsbCBiZSB0cmVhdGVkIGFzIGEgXCJjYXRlZ29yeSBtYXRjaFwiLCBhbmQgd2lsbCBvbmx5IGRpc3BsYXkgaWYgZXhhY3RcbiAqICAgdmFsdWUgbWF0Y2hlcyBhcmVuJ3QgZm91bmQgYW5kIHRoZSB2YWx1ZSBtYXBzIHRvIGl0cyBjYXRlZ29yeSBmb3IgdGhlIGRlZmluZWQgbG9jYWxlLlxuICpcbiAqIFNlZSBodHRwOi8vY2xkci51bmljb2RlLm9yZy9pbmRleC9jbGRyLXNwZWMvcGx1cmFsLXJ1bGVzXG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5ARGlyZWN0aXZlKHtzZWxlY3RvcjogJ1tuZ1BsdXJhbF0nfSlcbmV4cG9ydCBjbGFzcyBOZ1BsdXJhbCB7XG4gIC8vIFRPRE8oaXNzdWUvMjQ1NzEpOiByZW1vdmUgJyEnLlxuICBwcml2YXRlIF9zd2l0Y2hWYWx1ZSE6IG51bWJlcjtcbiAgLy8gVE9ETyhpc3N1ZS8yNDU3MSk6IHJlbW92ZSAnIScuXG4gIHByaXZhdGUgX2FjdGl2ZVZpZXchOiBTd2l0Y2hWaWV3O1xuICBwcml2YXRlIF9jYXNlVmlld3M6IHtbazogc3RyaW5nXTogU3dpdGNoVmlld30gPSB7fTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9sb2NhbGl6YXRpb246IE5nTG9jYWxpemF0aW9uKSB7fVxuXG4gIEBJbnB1dCgpXG4gIHNldCBuZ1BsdXJhbCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fc3dpdGNoVmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLl91cGRhdGVWaWV3KCk7XG4gIH1cblxuICBhZGRDYXNlKHZhbHVlOiBzdHJpbmcsIHN3aXRjaFZpZXc6IFN3aXRjaFZpZXcpOiB2b2lkIHtcbiAgICB0aGlzLl9jYXNlVmlld3NbdmFsdWVdID0gc3dpdGNoVmlldztcbiAgfVxuXG4gIHByaXZhdGUgX3VwZGF0ZVZpZXcoKTogdm9pZCB7XG4gICAgdGhpcy5fY2xlYXJWaWV3cygpO1xuXG4gICAgY29uc3QgY2FzZXMgPSBPYmplY3Qua2V5cyh0aGlzLl9jYXNlVmlld3MpO1xuICAgIGNvbnN0IGtleSA9IGdldFBsdXJhbENhdGVnb3J5KHRoaXMuX3N3aXRjaFZhbHVlLCBjYXNlcywgdGhpcy5fbG9jYWxpemF0aW9uKTtcbiAgICB0aGlzLl9hY3RpdmF0ZVZpZXcodGhpcy5fY2FzZVZpZXdzW2tleV0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfY2xlYXJWaWV3cygpIHtcbiAgICBpZiAodGhpcy5fYWN0aXZlVmlldykgdGhpcy5fYWN0aXZlVmlldy5kZXN0cm95KCk7XG4gIH1cblxuICBwcml2YXRlIF9hY3RpdmF0ZVZpZXcodmlldzogU3dpdGNoVmlldykge1xuICAgIGlmICh2aWV3KSB7XG4gICAgICB0aGlzLl9hY3RpdmVWaWV3ID0gdmlldztcbiAgICAgIHRoaXMuX2FjdGl2ZVZpZXcuY3JlYXRlKCk7XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQG5nTW9kdWxlIENvbW1vbk1vZHVsZVxuICpcbiAqIEBkZXNjcmlwdGlvblxuICpcbiAqIENyZWF0ZXMgYSB2aWV3IHRoYXQgd2lsbCBiZSBhZGRlZC9yZW1vdmVkIGZyb20gdGhlIHBhcmVudCB7QGxpbmsgTmdQbHVyYWx9IHdoZW4gdGhlXG4gKiBnaXZlbiBleHByZXNzaW9uIG1hdGNoZXMgdGhlIHBsdXJhbCBleHByZXNzaW9uIGFjY29yZGluZyB0byBDTERSIHJ1bGVzLlxuICpcbiAqIEB1c2FnZU5vdGVzXG4gKiBgYGBcbiAqIDxzb21lLWVsZW1lbnQgW25nUGx1cmFsXT1cInZhbHVlXCI+XG4gKiAgIDxuZy10ZW1wbGF0ZSBuZ1BsdXJhbENhc2U9XCI9MFwiPi4uLjwvbmctdGVtcGxhdGU+XG4gKiAgIDxuZy10ZW1wbGF0ZSBuZ1BsdXJhbENhc2U9XCJvdGhlclwiPi4uLjwvbmctdGVtcGxhdGU+XG4gKiA8L3NvbWUtZWxlbWVudD5cbiAqYGBgXG4gKlxuICogU2VlIHtAbGluayBOZ1BsdXJhbH0gZm9yIG1vcmUgZGV0YWlscyBhbmQgZXhhbXBsZS5cbiAqXG4gKiBAcHVibGljQXBpXG4gKi9cbkBEaXJlY3RpdmUoe3NlbGVjdG9yOiAnW25nUGx1cmFsQ2FzZV0nfSlcbmV4cG9ydCBjbGFzcyBOZ1BsdXJhbENhc2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICAgIEBBdHRyaWJ1dGUoJ25nUGx1cmFsQ2FzZScpIHB1YmxpYyB2YWx1ZTogc3RyaW5nLCB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8T2JqZWN0PixcbiAgICAgIHZpZXdDb250YWluZXI6IFZpZXdDb250YWluZXJSZWYsIEBIb3N0KCkgbmdQbHVyYWw6IE5nUGx1cmFsKSB7XG4gICAgY29uc3QgaXNBTnVtYmVyOiBib29sZWFuID0gIWlzTmFOKE51bWJlcih2YWx1ZSkpO1xuICAgIG5nUGx1cmFsLmFkZENhc2UoaXNBTnVtYmVyID8gYD0ke3ZhbHVlfWAgOiB2YWx1ZSwgbmV3IFN3aXRjaFZpZXcodmlld0NvbnRhaW5lciwgdGVtcGxhdGUpKTtcbiAgfVxufVxuIl19
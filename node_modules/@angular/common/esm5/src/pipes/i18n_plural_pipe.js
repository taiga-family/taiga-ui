/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { __decorate, __metadata } from "tslib";
import { Pipe } from '@angular/core';
import { getPluralCategory, NgLocalization } from '../i18n/localization';
import { invalidPipeArgumentError } from './invalid_pipe_argument_error';
var _INTERPOLATION_REGEXP = /#/g;
/**
 * @ngModule CommonModule
 * @description
 *
 * Maps a value to a string that pluralizes the value according to locale rules.
 *
 * @usageNotes
 *
 * ### Example
 *
 * {@example common/pipes/ts/i18n_pipe.ts region='I18nPluralPipeComponent'}
 *
 * @publicApi
 */
var I18nPluralPipe = /** @class */ (function () {
    function I18nPluralPipe(_localization) {
        this._localization = _localization;
    }
    I18nPluralPipe_1 = I18nPluralPipe;
    /**
     * @param value the number to be formatted
     * @param pluralMap an object that mimics the ICU format, see
     * http://userguide.icu-project.org/formatparse/messages.
     * @param locale a `string` defining the locale to use (uses the current {@link LOCALE_ID} by
     * default).
     */
    I18nPluralPipe.prototype.transform = function (value, pluralMap, locale) {
        if (value == null)
            return '';
        if (typeof pluralMap !== 'object' || pluralMap === null) {
            throw invalidPipeArgumentError(I18nPluralPipe_1, pluralMap);
        }
        var key = getPluralCategory(value, Object.keys(pluralMap), this._localization, locale);
        return pluralMap[key].replace(_INTERPOLATION_REGEXP, value.toString());
    };
    var I18nPluralPipe_1;
    I18nPluralPipe = I18nPluralPipe_1 = __decorate([
        Pipe({ name: 'i18nPlural', pure: true }),
        __metadata("design:paramtypes", [NgLocalization])
    ], I18nPluralPipe);
    return I18nPluralPipe;
}());
export { I18nPluralPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaTE4bl9wbHVyYWxfcGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbW1vbi9zcmMvcGlwZXMvaTE4bl9wbHVyYWxfcGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7O0FBRUgsT0FBTyxFQUFDLElBQUksRUFBZ0IsTUFBTSxlQUFlLENBQUM7QUFFbEQsT0FBTyxFQUFDLGlCQUFpQixFQUFFLGNBQWMsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBRXZFLE9BQU8sRUFBQyx3QkFBd0IsRUFBQyxNQUFNLCtCQUErQixDQUFDO0FBRXZFLElBQU0scUJBQXFCLEdBQVcsSUFBSSxDQUFDO0FBRTNDOzs7Ozs7Ozs7Ozs7O0dBYUc7QUFFSDtJQUNFLHdCQUFvQixhQUE2QjtRQUE3QixrQkFBYSxHQUFiLGFBQWEsQ0FBZ0I7SUFBRyxDQUFDO3VCQUQxQyxjQUFjO0lBR3pCOzs7Ozs7T0FNRztJQUNILGtDQUFTLEdBQVQsVUFBVSxLQUFhLEVBQUUsU0FBb0MsRUFBRSxNQUFlO1FBQzVFLElBQUksS0FBSyxJQUFJLElBQUk7WUFBRSxPQUFPLEVBQUUsQ0FBQztRQUU3QixJQUFJLE9BQU8sU0FBUyxLQUFLLFFBQVEsSUFBSSxTQUFTLEtBQUssSUFBSSxFQUFFO1lBQ3ZELE1BQU0sd0JBQXdCLENBQUMsZ0JBQWMsRUFBRSxTQUFTLENBQUMsQ0FBQztTQUMzRDtRQUVELElBQU0sR0FBRyxHQUFHLGlCQUFpQixDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFFekYsT0FBTyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLHFCQUFxQixFQUFFLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO0lBQ3pFLENBQUM7O0lBcEJVLGNBQWM7UUFEMUIsSUFBSSxDQUFDLEVBQUMsSUFBSSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFDLENBQUM7eUNBRUYsY0FBYztPQUR0QyxjQUFjLENBcUIxQjtJQUFELHFCQUFDO0NBQUEsQUFyQkQsSUFxQkM7U0FyQlksY0FBYyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtQaXBlLCBQaXBlVHJhbnNmb3JtfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtnZXRQbHVyYWxDYXRlZ29yeSwgTmdMb2NhbGl6YXRpb259IGZyb20gJy4uL2kxOG4vbG9jYWxpemF0aW9uJztcblxuaW1wb3J0IHtpbnZhbGlkUGlwZUFyZ3VtZW50RXJyb3J9IGZyb20gJy4vaW52YWxpZF9waXBlX2FyZ3VtZW50X2Vycm9yJztcblxuY29uc3QgX0lOVEVSUE9MQVRJT05fUkVHRVhQOiBSZWdFeHAgPSAvIy9nO1xuXG4vKipcbiAqIEBuZ01vZHVsZSBDb21tb25Nb2R1bGVcbiAqIEBkZXNjcmlwdGlvblxuICpcbiAqIE1hcHMgYSB2YWx1ZSB0byBhIHN0cmluZyB0aGF0IHBsdXJhbGl6ZXMgdGhlIHZhbHVlIGFjY29yZGluZyB0byBsb2NhbGUgcnVsZXMuXG4gKlxuICogQHVzYWdlTm90ZXNcbiAqXG4gKiAjIyMgRXhhbXBsZVxuICpcbiAqIHtAZXhhbXBsZSBjb21tb24vcGlwZXMvdHMvaTE4bl9waXBlLnRzIHJlZ2lvbj0nSTE4blBsdXJhbFBpcGVDb21wb25lbnQnfVxuICpcbiAqIEBwdWJsaWNBcGlcbiAqL1xuQFBpcGUoe25hbWU6ICdpMThuUGx1cmFsJywgcHVyZTogdHJ1ZX0pXG5leHBvcnQgY2xhc3MgSTE4blBsdXJhbFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfbG9jYWxpemF0aW9uOiBOZ0xvY2FsaXphdGlvbikge31cblxuICAvKipcbiAgICogQHBhcmFtIHZhbHVlIHRoZSBudW1iZXIgdG8gYmUgZm9ybWF0dGVkXG4gICAqIEBwYXJhbSBwbHVyYWxNYXAgYW4gb2JqZWN0IHRoYXQgbWltaWNzIHRoZSBJQ1UgZm9ybWF0LCBzZWVcbiAgICogaHR0cDovL3VzZXJndWlkZS5pY3UtcHJvamVjdC5vcmcvZm9ybWF0cGFyc2UvbWVzc2FnZXMuXG4gICAqIEBwYXJhbSBsb2NhbGUgYSBgc3RyaW5nYCBkZWZpbmluZyB0aGUgbG9jYWxlIHRvIHVzZSAodXNlcyB0aGUgY3VycmVudCB7QGxpbmsgTE9DQUxFX0lEfSBieVxuICAgKiBkZWZhdWx0KS5cbiAgICovXG4gIHRyYW5zZm9ybSh2YWx1ZTogbnVtYmVyLCBwbHVyYWxNYXA6IHtbY291bnQ6IHN0cmluZ106IHN0cmluZ30sIGxvY2FsZT86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgaWYgKHZhbHVlID09IG51bGwpIHJldHVybiAnJztcblxuICAgIGlmICh0eXBlb2YgcGx1cmFsTWFwICE9PSAnb2JqZWN0JyB8fCBwbHVyYWxNYXAgPT09IG51bGwpIHtcbiAgICAgIHRocm93IGludmFsaWRQaXBlQXJndW1lbnRFcnJvcihJMThuUGx1cmFsUGlwZSwgcGx1cmFsTWFwKTtcbiAgICB9XG5cbiAgICBjb25zdCBrZXkgPSBnZXRQbHVyYWxDYXRlZ29yeSh2YWx1ZSwgT2JqZWN0LmtleXMocGx1cmFsTWFwKSwgdGhpcy5fbG9jYWxpemF0aW9uLCBsb2NhbGUpO1xuXG4gICAgcmV0dXJuIHBsdXJhbE1hcFtrZXldLnJlcGxhY2UoX0lOVEVSUE9MQVRJT05fUkVHRVhQLCB2YWx1ZS50b1N0cmluZygpKTtcbiAgfVxufVxuIl19
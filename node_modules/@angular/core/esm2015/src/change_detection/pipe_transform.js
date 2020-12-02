/**
 * @fileoverview added by tsickle
 * Generated from: packages/core/src/change_detection/pipe_transform.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * An interface that is implemented by pipes in order to perform a transformation.
 * Angular invokes the `transform` method with the value of a binding
 * as the first argument, and any parameters as the second argument in list form.
 *
 * \@usageNotes
 *
 * In the following example, `RepeatPipe` repeats a given value a given number of times.
 *
 * ```ts
 * import {Pipe, PipeTransform} from '\@angular/core';
 *
 * \@Pipe({name: 'repeat'})
 * export class RepeatPipe implements PipeTransform {
 *   transform(value: any, times: number) {
 *     return value.repeat(times);
 *   }
 * }
 * ```
 *
 * Invoking `{{ 'ok' | repeat:3 }}` in a template produces `okokok`.
 *
 * \@publicApi
 * @record
 */
export function PipeTransform() { }
if (false) {
    /**
     * @param {?} value
     * @param {...?} args
     * @return {?}
     */
    PipeTransform.prototype.transform = function (value, args) { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGlwZV90cmFuc2Zvcm0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb3JlL3NyYy9jaGFuZ2VfZGV0ZWN0aW9uL3BpcGVfdHJhbnNmb3JtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQ0EsbUNBRUM7Ozs7Ozs7SUFEQywrREFBMkMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbi8qKlxuICogQW4gaW50ZXJmYWNlIHRoYXQgaXMgaW1wbGVtZW50ZWQgYnkgcGlwZXMgaW4gb3JkZXIgdG8gcGVyZm9ybSBhIHRyYW5zZm9ybWF0aW9uLlxuICogQW5ndWxhciBpbnZva2VzIHRoZSBgdHJhbnNmb3JtYCBtZXRob2Qgd2l0aCB0aGUgdmFsdWUgb2YgYSBiaW5kaW5nXG4gKiBhcyB0aGUgZmlyc3QgYXJndW1lbnQsIGFuZCBhbnkgcGFyYW1ldGVycyBhcyB0aGUgc2Vjb25kIGFyZ3VtZW50IGluIGxpc3QgZm9ybS5cbiAqXG4gKiBAdXNhZ2VOb3Rlc1xuICpcbiAqIEluIHRoZSBmb2xsb3dpbmcgZXhhbXBsZSwgYFJlcGVhdFBpcGVgIHJlcGVhdHMgYSBnaXZlbiB2YWx1ZSBhIGdpdmVuIG51bWJlciBvZiB0aW1lcy5cbiAqXG4gKiBgYGB0c1xuICogaW1wb3J0IHtQaXBlLCBQaXBlVHJhbnNmb3JtfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbiAqXG4gKiBAUGlwZSh7bmFtZTogJ3JlcGVhdCd9KVxuICogZXhwb3J0IGNsYXNzIFJlcGVhdFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAqICAgdHJhbnNmb3JtKHZhbHVlOiBhbnksIHRpbWVzOiBudW1iZXIpIHtcbiAqICAgICByZXR1cm4gdmFsdWUucmVwZWF0KHRpbWVzKTtcbiAqICAgfVxuICogfVxuICogYGBgXG4gKlxuICogSW52b2tpbmcgYHt7ICdvaycgfCByZXBlYXQ6MyB9fWAgaW4gYSB0ZW1wbGF0ZSBwcm9kdWNlcyBgb2tva29rYC5cbiAqXG4gKiBAcHVibGljQXBpXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUGlwZVRyYW5zZm9ybSB7XG4gIHRyYW5zZm9ybSh2YWx1ZTogYW55LCAuLi5hcmdzOiBhbnlbXSk6IGFueTtcbn1cbiJdfQ==
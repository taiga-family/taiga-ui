/**
 * @fileoverview added by tsickle
 * Generated from: packages/animations/browser/src/dsl/style_normalization/animation_style_normalizer.ts
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
 * \@publicApi
 * @abstract
 */
export class AnimationStyleNormalizer {
}
if (false) {
    /**
     * @abstract
     * @param {?} propertyName
     * @param {?} errors
     * @return {?}
     */
    AnimationStyleNormalizer.prototype.normalizePropertyName = function (propertyName, errors) { };
    /**
     * @abstract
     * @param {?} userProvidedProperty
     * @param {?} normalizedProperty
     * @param {?} value
     * @param {?} errors
     * @return {?}
     */
    AnimationStyleNormalizer.prototype.normalizeStyleValue = function (userProvidedProperty, normalizedProperty, value, errors) { };
}
/**
 * \@publicApi
 */
export class NoopAnimationStyleNormalizer {
    /**
     * @param {?} propertyName
     * @param {?} errors
     * @return {?}
     */
    normalizePropertyName(propertyName, errors) {
        return propertyName;
    }
    /**
     * @param {?} userProvidedProperty
     * @param {?} normalizedProperty
     * @param {?} value
     * @param {?} errors
     * @return {?}
     */
    normalizeStyleValue(userProvidedProperty, normalizedProperty, value, errors) {
        return (/** @type {?} */ (value));
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5pbWF0aW9uX3N0eWxlX25vcm1hbGl6ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9hbmltYXRpb25zL2Jyb3dzZXIvc3JjL2RzbC9zdHlsZV9ub3JtYWxpemF0aW9uL2FuaW1hdGlvbl9zdHlsZV9ub3JtYWxpemVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFXQSxNQUFNLE9BQWdCLHdCQUF3QjtDQUs3Qzs7Ozs7Ozs7SUFKQywrRkFBK0U7Ozs7Ozs7OztJQUMvRSxnSUFFOEI7Ozs7O0FBTWhDLE1BQU0sT0FBTyw0QkFBNEI7Ozs7OztJQUN2QyxxQkFBcUIsQ0FBQyxZQUFvQixFQUFFLE1BQWdCO1FBQzFELE9BQU8sWUFBWSxDQUFDO0lBQ3RCLENBQUM7Ozs7Ozs7O0lBRUQsbUJBQW1CLENBQ2Ysb0JBQTRCLEVBQUUsa0JBQTBCLEVBQUUsS0FBb0IsRUFDOUUsTUFBZ0I7UUFDbEIsT0FBTyxtQkFBSyxLQUFLLEVBQUEsQ0FBQztJQUNwQixDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbi8qKlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQW5pbWF0aW9uU3R5bGVOb3JtYWxpemVyIHtcbiAgYWJzdHJhY3Qgbm9ybWFsaXplUHJvcGVydHlOYW1lKHByb3BlcnR5TmFtZTogc3RyaW5nLCBlcnJvcnM6IHN0cmluZ1tdKTogc3RyaW5nO1xuICBhYnN0cmFjdCBub3JtYWxpemVTdHlsZVZhbHVlKFxuICAgICAgdXNlclByb3ZpZGVkUHJvcGVydHk6IHN0cmluZywgbm9ybWFsaXplZFByb3BlcnR5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmd8bnVtYmVyLFxuICAgICAgZXJyb3JzOiBzdHJpbmdbXSk6IHN0cmluZztcbn1cblxuLyoqXG4gKiBAcHVibGljQXBpXG4gKi9cbmV4cG9ydCBjbGFzcyBOb29wQW5pbWF0aW9uU3R5bGVOb3JtYWxpemVyIHtcbiAgbm9ybWFsaXplUHJvcGVydHlOYW1lKHByb3BlcnR5TmFtZTogc3RyaW5nLCBlcnJvcnM6IHN0cmluZ1tdKTogc3RyaW5nIHtcbiAgICByZXR1cm4gcHJvcGVydHlOYW1lO1xuICB9XG5cbiAgbm9ybWFsaXplU3R5bGVWYWx1ZShcbiAgICAgIHVzZXJQcm92aWRlZFByb3BlcnR5OiBzdHJpbmcsIG5vcm1hbGl6ZWRQcm9wZXJ0eTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nfG51bWJlcixcbiAgICAgIGVycm9yczogc3RyaW5nW10pOiBzdHJpbmcge1xuICAgIHJldHVybiA8YW55PnZhbHVlO1xuICB9XG59XG4iXX0=
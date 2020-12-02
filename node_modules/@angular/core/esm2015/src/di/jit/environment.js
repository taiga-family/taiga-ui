/**
 * @fileoverview added by tsickle
 * Generated from: packages/core/src/di/jit/environment.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { isForwardRef, resolveForwardRef } from '../forward_ref';
import { ɵɵinject, ɵɵinvalidFactoryDep } from '../injector_compatibility';
import { getInjectableDef, getInjectorDef, ɵɵdefineInjectable, ɵɵdefineInjector } from '../interface/defs';
/**
 * A mapping of the \@angular/core API surface used in generated expressions to the actual symbols.
 *
 * This should be kept up to date with the public exports of \@angular/core.
 * @type {?}
 */
export const angularCoreDiEnv = {
    'ɵɵdefineInjectable': ɵɵdefineInjectable,
    'ɵɵdefineInjector': ɵɵdefineInjector,
    'ɵɵinject': ɵɵinject,
    'ɵɵgetFactoryOf': getFactoryOf,
    'ɵɵinvalidFactoryDep': ɵɵinvalidFactoryDep,
};
/**
 * @template T
 * @param {?} type
 * @return {?}
 */
function getFactoryOf(type) {
    /** @type {?} */
    const typeAny = (/** @type {?} */ (type));
    if (isForwardRef(type)) {
        return (/** @type {?} */ (((/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const factory = getFactoryOf(resolveForwardRef(typeAny));
            return factory ? factory() : null;
        }))));
    }
    /** @type {?} */
    const def = getInjectableDef(typeAny) || getInjectorDef(typeAny);
    if (!def || def.factory === undefined) {
        return null;
    }
    return def.factory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW52aXJvbm1lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb3JlL3NyYy9kaS9qaXQvZW52aXJvbm1lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBU0EsT0FBTyxFQUFDLFlBQVksRUFBRSxpQkFBaUIsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQy9ELE9BQU8sRUFBQyxRQUFRLEVBQUUsbUJBQW1CLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUN4RSxPQUFPLEVBQUMsZ0JBQWdCLEVBQUUsY0FBYyxFQUFFLGtCQUFrQixFQUFFLGdCQUFnQixFQUFDLE1BQU0sbUJBQW1CLENBQUM7Ozs7Ozs7QUFTekcsTUFBTSxPQUFPLGdCQUFnQixHQUErQjtJQUMxRCxvQkFBb0IsRUFBRSxrQkFBa0I7SUFDeEMsa0JBQWtCLEVBQUUsZ0JBQWdCO0lBQ3BDLFVBQVUsRUFBRSxRQUFRO0lBQ3BCLGdCQUFnQixFQUFFLFlBQVk7SUFDOUIscUJBQXFCLEVBQUUsbUJBQW1CO0NBQzNDOzs7Ozs7QUFFRCxTQUFTLFlBQVksQ0FBSSxJQUFlOztVQUNoQyxPQUFPLEdBQUcsbUJBQUEsSUFBSSxFQUFPO0lBRTNCLElBQUksWUFBWSxDQUFDLElBQUksQ0FBQyxFQUFFO1FBQ3RCLE9BQU8sbUJBQUE7OztRQUFDLEdBQUcsRUFBRTs7a0JBQ0UsT0FBTyxHQUFHLFlBQVksQ0FBSSxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUMzRCxPQUFPLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUNwQyxDQUFDLEVBQUMsRUFBTyxDQUFDO0tBQ2xCOztVQUVLLEdBQUcsR0FBRyxnQkFBZ0IsQ0FBSSxPQUFPLENBQUMsSUFBSSxjQUFjLENBQUksT0FBTyxDQUFDO0lBQ3RFLElBQUksQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLE9BQU8sS0FBSyxTQUFTLEVBQUU7UUFDckMsT0FBTyxJQUFJLENBQUM7S0FDYjtJQUNELE9BQU8sR0FBRyxDQUFDLE9BQU8sQ0FBQztBQUNyQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge1R5cGV9IGZyb20gJy4uLy4uL2ludGVyZmFjZS90eXBlJztcbmltcG9ydCB7aXNGb3J3YXJkUmVmLCByZXNvbHZlRm9yd2FyZFJlZn0gZnJvbSAnLi4vZm9yd2FyZF9yZWYnO1xuaW1wb3J0IHvJtcm1aW5qZWN0LCDJtcm1aW52YWxpZEZhY3RvcnlEZXB9IGZyb20gJy4uL2luamVjdG9yX2NvbXBhdGliaWxpdHknO1xuaW1wb3J0IHtnZXRJbmplY3RhYmxlRGVmLCBnZXRJbmplY3RvckRlZiwgybXJtWRlZmluZUluamVjdGFibGUsIMm1ybVkZWZpbmVJbmplY3Rvcn0gZnJvbSAnLi4vaW50ZXJmYWNlL2RlZnMnO1xuXG5cblxuLyoqXG4gKiBBIG1hcHBpbmcgb2YgdGhlIEBhbmd1bGFyL2NvcmUgQVBJIHN1cmZhY2UgdXNlZCBpbiBnZW5lcmF0ZWQgZXhwcmVzc2lvbnMgdG8gdGhlIGFjdHVhbCBzeW1ib2xzLlxuICpcbiAqIFRoaXMgc2hvdWxkIGJlIGtlcHQgdXAgdG8gZGF0ZSB3aXRoIHRoZSBwdWJsaWMgZXhwb3J0cyBvZiBAYW5ndWxhci9jb3JlLlxuICovXG5leHBvcnQgY29uc3QgYW5ndWxhckNvcmVEaUVudjoge1tuYW1lOiBzdHJpbmddOiBGdW5jdGlvbn0gPSB7XG4gICfJtcm1ZGVmaW5lSW5qZWN0YWJsZSc6IMm1ybVkZWZpbmVJbmplY3RhYmxlLFxuICAnybXJtWRlZmluZUluamVjdG9yJzogybXJtWRlZmluZUluamVjdG9yLFxuICAnybXJtWluamVjdCc6IMm1ybVpbmplY3QsXG4gICfJtcm1Z2V0RmFjdG9yeU9mJzogZ2V0RmFjdG9yeU9mLFxuICAnybXJtWludmFsaWRGYWN0b3J5RGVwJzogybXJtWludmFsaWRGYWN0b3J5RGVwLFxufTtcblxuZnVuY3Rpb24gZ2V0RmFjdG9yeU9mPFQ+KHR5cGU6IFR5cGU8YW55Pik6ICgodHlwZT86IFR5cGU8VD4pID0+IFQpfG51bGwge1xuICBjb25zdCB0eXBlQW55ID0gdHlwZSBhcyBhbnk7XG5cbiAgaWYgKGlzRm9yd2FyZFJlZih0eXBlKSkge1xuICAgIHJldHVybiAoKCkgPT4ge1xuICAgICAgICAgICAgIGNvbnN0IGZhY3RvcnkgPSBnZXRGYWN0b3J5T2Y8VD4ocmVzb2x2ZUZvcndhcmRSZWYodHlwZUFueSkpO1xuICAgICAgICAgICAgIHJldHVybiBmYWN0b3J5ID8gZmFjdG9yeSgpIDogbnVsbDtcbiAgICAgICAgICAgfSkgYXMgYW55O1xuICB9XG5cbiAgY29uc3QgZGVmID0gZ2V0SW5qZWN0YWJsZURlZjxUPih0eXBlQW55KSB8fCBnZXRJbmplY3RvckRlZjxUPih0eXBlQW55KTtcbiAgaWYgKCFkZWYgfHwgZGVmLmZhY3RvcnkgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHJldHVybiBkZWYuZmFjdG9yeTtcbn1cbiJdfQ==
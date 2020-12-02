/**
 * @fileoverview added by tsickle
 * Generated from: packages/core/src/render3/util/global_utils.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { assertDefined } from '../../util/assert';
import { global } from '../../util/global';
import { applyChanges } from './change_detection_utils';
import { getComponent, getContext, getDirectives, getHostElement, getInjector, getListeners, getOwningComponent, getRootComponents } from './discovery_utils';
/**
 * This value reflects the property on the window where the dev
 * tools are patched (window.ng).
 *
 * @type {?}
 */
export const GLOBAL_PUBLISH_EXPANDO_KEY = 'ng';
/** @type {?} */
let _published = false;
/**
 * Publishes a collection of default debug tools onto`window.ng`.
 *
 * These functions are available globally when Angular is in development
 * mode and are automatically stripped away from prod mode is on.
 * @return {?}
 */
export function publishDefaultGlobalUtils() {
    if (!_published) {
        _published = true;
        publishGlobalUtil('getComponent', getComponent);
        publishGlobalUtil('getContext', getContext);
        publishGlobalUtil('getListeners', getListeners);
        publishGlobalUtil('getOwningComponent', getOwningComponent);
        publishGlobalUtil('getHostElement', getHostElement);
        publishGlobalUtil('getInjector', getInjector);
        publishGlobalUtil('getRootComponents', getRootComponents);
        publishGlobalUtil('getDirectives', getDirectives);
        publishGlobalUtil('applyChanges', applyChanges);
    }
}
/**
 * Publishes the given function to `window.ng` so that it can be
 * used from the browser console when an application is not in production.
 * @param {?} name
 * @param {?} fn
 * @return {?}
 */
export function publishGlobalUtil(name, fn) {
    if (typeof COMPILED === 'undefined' || !COMPILED) {
        // Note: we can't export `ng` when using closure enhanced optimization as:
        // - closure declares globals itself for minified names, which sometimes clobber our `ng` global
        // - we can't declare a closure extern as the namespace `ng` is already used within Google
        //   for typings for AngularJS (via `goog.provide('ng....')`).
        /** @type {?} */
        const w = (/** @type {?} */ ((/** @type {?} */ (global))));
        ngDevMode && assertDefined(fn, 'function not defined');
        if (w) {
            /** @type {?} */
            let container = w[GLOBAL_PUBLISH_EXPANDO_KEY];
            if (!container) {
                container = w[GLOBAL_PUBLISH_EXPANDO_KEY] = {};
            }
            container[name] = fn;
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsX3V0aWxzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29yZS9zcmMvcmVuZGVyMy91dGlsL2dsb2JhbF91dGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFPQSxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDaEQsT0FBTyxFQUFDLE1BQU0sRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBQ3pDLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUN0RCxPQUFPLEVBQUMsWUFBWSxFQUFFLFVBQVUsRUFBRSxhQUFhLEVBQUUsY0FBYyxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUUsa0JBQWtCLEVBQUUsaUJBQWlCLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQzs7Ozs7OztBQW9CNUosTUFBTSxPQUFPLDBCQUEwQixHQUFHLElBQUk7O0lBRTFDLFVBQVUsR0FBRyxLQUFLOzs7Ozs7OztBQU90QixNQUFNLFVBQVUseUJBQXlCO0lBQ3ZDLElBQUksQ0FBQyxVQUFVLEVBQUU7UUFDZixVQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLGlCQUFpQixDQUFDLGNBQWMsRUFBRSxZQUFZLENBQUMsQ0FBQztRQUNoRCxpQkFBaUIsQ0FBQyxZQUFZLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFDNUMsaUJBQWlCLENBQUMsY0FBYyxFQUFFLFlBQVksQ0FBQyxDQUFDO1FBQ2hELGlCQUFpQixDQUFDLG9CQUFvQixFQUFFLGtCQUFrQixDQUFDLENBQUM7UUFDNUQsaUJBQWlCLENBQUMsZ0JBQWdCLEVBQUUsY0FBYyxDQUFDLENBQUM7UUFDcEQsaUJBQWlCLENBQUMsYUFBYSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBQzlDLGlCQUFpQixDQUFDLG1CQUFtQixFQUFFLGlCQUFpQixDQUFDLENBQUM7UUFDMUQsaUJBQWlCLENBQUMsZUFBZSxFQUFFLGFBQWEsQ0FBQyxDQUFDO1FBQ2xELGlCQUFpQixDQUFDLGNBQWMsRUFBRSxZQUFZLENBQUMsQ0FBQztLQUNqRDtBQUNILENBQUM7Ozs7Ozs7O0FBVUQsTUFBTSxVQUFVLGlCQUFpQixDQUFDLElBQVksRUFBRSxFQUFZO0lBQzFELElBQUksT0FBTyxRQUFRLEtBQUssV0FBVyxJQUFJLENBQUMsUUFBUSxFQUFFOzs7Ozs7Y0FLMUMsQ0FBQyxHQUFHLG1CQUFBLG1CQUFBLE1BQU0sRUFBTyxFQUEwQjtRQUNqRCxTQUFTLElBQUksYUFBYSxDQUFDLEVBQUUsRUFBRSxzQkFBc0IsQ0FBQyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxFQUFFOztnQkFDRCxTQUFTLEdBQUcsQ0FBQyxDQUFDLDBCQUEwQixDQUFDO1lBQzdDLElBQUksQ0FBQyxTQUFTLEVBQUU7Z0JBQ2QsU0FBUyxHQUFHLENBQUMsQ0FBQywwQkFBMEIsQ0FBQyxHQUFHLEVBQUUsQ0FBQzthQUNoRDtZQUNELFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7U0FDdEI7S0FDRjtBQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5pbXBvcnQge2Fzc2VydERlZmluZWR9IGZyb20gJy4uLy4uL3V0aWwvYXNzZXJ0JztcbmltcG9ydCB7Z2xvYmFsfSBmcm9tICcuLi8uLi91dGlsL2dsb2JhbCc7XG5pbXBvcnQge2FwcGx5Q2hhbmdlc30gZnJvbSAnLi9jaGFuZ2VfZGV0ZWN0aW9uX3V0aWxzJztcbmltcG9ydCB7Z2V0Q29tcG9uZW50LCBnZXRDb250ZXh0LCBnZXREaXJlY3RpdmVzLCBnZXRIb3N0RWxlbWVudCwgZ2V0SW5qZWN0b3IsIGdldExpc3RlbmVycywgZ2V0T3duaW5nQ29tcG9uZW50LCBnZXRSb290Q29tcG9uZW50c30gZnJvbSAnLi9kaXNjb3ZlcnlfdXRpbHMnO1xuXG5cblxuLyoqXG4gKiBUaGlzIGZpbGUgaW50cm9kdWNlcyBzZXJpZXMgb2YgZ2xvYmFsbHkgYWNjZXNzaWJsZSBkZWJ1ZyB0b29sc1xuICogdG8gYWxsb3cgZm9yIHRoZSBBbmd1bGFyIGRlYnVnZ2luZyBzdG9yeSB0byBmdW5jdGlvbi5cbiAqXG4gKiBUbyBzZWUgdGhpcyBpbiBhY3Rpb24gcnVuIHRoZSBmb2xsb3dpbmcgY29tbWFuZDpcbiAqXG4gKiAgIGJhemVsIHJ1biAtLWNvbmZpZz1pdnlcbiAqICAgLy9wYWNrYWdlcy9jb3JlL3Rlc3QvYnVuZGxpbmcvdG9kbzpkZXZzZXJ2ZXJcbiAqXG4gKiAgVGhlbiBsb2FkIGBsb2NhbGhvc3Q6NTQzMmAgYW5kIHN0YXJ0IHVzaW5nIHRoZSBjb25zb2xlIHRvb2xzLlxuICovXG5cbi8qKlxuICogVGhpcyB2YWx1ZSByZWZsZWN0cyB0aGUgcHJvcGVydHkgb24gdGhlIHdpbmRvdyB3aGVyZSB0aGUgZGV2XG4gKiB0b29scyBhcmUgcGF0Y2hlZCAod2luZG93Lm5nKS5cbiAqICovXG5leHBvcnQgY29uc3QgR0xPQkFMX1BVQkxJU0hfRVhQQU5ET19LRVkgPSAnbmcnO1xuXG5sZXQgX3B1Ymxpc2hlZCA9IGZhbHNlO1xuLyoqXG4gKiBQdWJsaXNoZXMgYSBjb2xsZWN0aW9uIG9mIGRlZmF1bHQgZGVidWcgdG9vbHMgb250b2B3aW5kb3cubmdgLlxuICpcbiAqIFRoZXNlIGZ1bmN0aW9ucyBhcmUgYXZhaWxhYmxlIGdsb2JhbGx5IHdoZW4gQW5ndWxhciBpcyBpbiBkZXZlbG9wbWVudFxuICogbW9kZSBhbmQgYXJlIGF1dG9tYXRpY2FsbHkgc3RyaXBwZWQgYXdheSBmcm9tIHByb2QgbW9kZSBpcyBvbi5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHB1Ymxpc2hEZWZhdWx0R2xvYmFsVXRpbHMoKSB7XG4gIGlmICghX3B1Ymxpc2hlZCkge1xuICAgIF9wdWJsaXNoZWQgPSB0cnVlO1xuICAgIHB1Ymxpc2hHbG9iYWxVdGlsKCdnZXRDb21wb25lbnQnLCBnZXRDb21wb25lbnQpO1xuICAgIHB1Ymxpc2hHbG9iYWxVdGlsKCdnZXRDb250ZXh0JywgZ2V0Q29udGV4dCk7XG4gICAgcHVibGlzaEdsb2JhbFV0aWwoJ2dldExpc3RlbmVycycsIGdldExpc3RlbmVycyk7XG4gICAgcHVibGlzaEdsb2JhbFV0aWwoJ2dldE93bmluZ0NvbXBvbmVudCcsIGdldE93bmluZ0NvbXBvbmVudCk7XG4gICAgcHVibGlzaEdsb2JhbFV0aWwoJ2dldEhvc3RFbGVtZW50JywgZ2V0SG9zdEVsZW1lbnQpO1xuICAgIHB1Ymxpc2hHbG9iYWxVdGlsKCdnZXRJbmplY3RvcicsIGdldEluamVjdG9yKTtcbiAgICBwdWJsaXNoR2xvYmFsVXRpbCgnZ2V0Um9vdENvbXBvbmVudHMnLCBnZXRSb290Q29tcG9uZW50cyk7XG4gICAgcHVibGlzaEdsb2JhbFV0aWwoJ2dldERpcmVjdGl2ZXMnLCBnZXREaXJlY3RpdmVzKTtcbiAgICBwdWJsaXNoR2xvYmFsVXRpbCgnYXBwbHlDaGFuZ2VzJywgYXBwbHlDaGFuZ2VzKTtcbiAgfVxufVxuXG5leHBvcnQgZGVjbGFyZSB0eXBlIEdsb2JhbERldk1vZGVDb250YWluZXIgPSB7XG4gIFtHTE9CQUxfUFVCTElTSF9FWFBBTkRPX0tFWV06IHtbZm5OYW1lOiBzdHJpbmddOiBGdW5jdGlvbn07XG59O1xuXG4vKipcbiAqIFB1Ymxpc2hlcyB0aGUgZ2l2ZW4gZnVuY3Rpb24gdG8gYHdpbmRvdy5uZ2Agc28gdGhhdCBpdCBjYW4gYmVcbiAqIHVzZWQgZnJvbSB0aGUgYnJvd3NlciBjb25zb2xlIHdoZW4gYW4gYXBwbGljYXRpb24gaXMgbm90IGluIHByb2R1Y3Rpb24uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwdWJsaXNoR2xvYmFsVXRpbChuYW1lOiBzdHJpbmcsIGZuOiBGdW5jdGlvbik6IHZvaWQge1xuICBpZiAodHlwZW9mIENPTVBJTEVEID09PSAndW5kZWZpbmVkJyB8fCAhQ09NUElMRUQpIHtcbiAgICAvLyBOb3RlOiB3ZSBjYW4ndCBleHBvcnQgYG5nYCB3aGVuIHVzaW5nIGNsb3N1cmUgZW5oYW5jZWQgb3B0aW1pemF0aW9uIGFzOlxuICAgIC8vIC0gY2xvc3VyZSBkZWNsYXJlcyBnbG9iYWxzIGl0c2VsZiBmb3IgbWluaWZpZWQgbmFtZXMsIHdoaWNoIHNvbWV0aW1lcyBjbG9iYmVyIG91ciBgbmdgIGdsb2JhbFxuICAgIC8vIC0gd2UgY2FuJ3QgZGVjbGFyZSBhIGNsb3N1cmUgZXh0ZXJuIGFzIHRoZSBuYW1lc3BhY2UgYG5nYCBpcyBhbHJlYWR5IHVzZWQgd2l0aGluIEdvb2dsZVxuICAgIC8vICAgZm9yIHR5cGluZ3MgZm9yIEFuZ3VsYXJKUyAodmlhIGBnb29nLnByb3ZpZGUoJ25nLi4uLicpYCkuXG4gICAgY29uc3QgdyA9IGdsb2JhbCBhcyBhbnkgYXMgR2xvYmFsRGV2TW9kZUNvbnRhaW5lcjtcbiAgICBuZ0Rldk1vZGUgJiYgYXNzZXJ0RGVmaW5lZChmbiwgJ2Z1bmN0aW9uIG5vdCBkZWZpbmVkJyk7XG4gICAgaWYgKHcpIHtcbiAgICAgIGxldCBjb250YWluZXIgPSB3W0dMT0JBTF9QVUJMSVNIX0VYUEFORE9fS0VZXTtcbiAgICAgIGlmICghY29udGFpbmVyKSB7XG4gICAgICAgIGNvbnRhaW5lciA9IHdbR0xPQkFMX1BVQkxJU0hfRVhQQU5ET19LRVldID0ge307XG4gICAgICB9XG4gICAgICBjb250YWluZXJbbmFtZV0gPSBmbjtcbiAgICB9XG4gIH1cbn1cbiJdfQ==
/**
 * @fileoverview added by tsickle
 * Generated from: packages/platform-browser/src/browser/server-transition.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { DOCUMENT, ɵgetDOM as getDOM } from '@angular/common';
import { APP_INITIALIZER, ApplicationInitStatus, InjectionToken, Injector } from '@angular/core';
/**
 * An id that identifies a particular application being bootstrapped, that should
 * match across the client/server boundary.
 * @type {?}
 */
export const TRANSITION_ID = new InjectionToken('TRANSITION_ID');
/**
 * @param {?} transitionId
 * @param {?} document
 * @param {?} injector
 * @return {?}
 */
export function appInitializerFactory(transitionId, document, injector) {
    return (/**
     * @return {?}
     */
    () => {
        // Wait for all application initializers to be completed before removing the styles set by
        // the server.
        injector.get(ApplicationInitStatus).donePromise.then((/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const dom = getDOM();
            /** @type {?} */
            const styles = Array.prototype.slice.apply(document.querySelectorAll(`style[ng-transition]`));
            styles.filter((/**
             * @param {?} el
             * @return {?}
             */
            el => el.getAttribute('ng-transition') === transitionId))
                .forEach((/**
             * @param {?} el
             * @return {?}
             */
            el => dom.remove(el)));
        }));
    });
}
/** @type {?} */
export const SERVER_TRANSITION_PROVIDERS = [
    {
        provide: APP_INITIALIZER,
        useFactory: appInitializerFactory,
        deps: [TRANSITION_ID, DOCUMENT, Injector],
        multi: true
    },
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLXRyYW5zaXRpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9wbGF0Zm9ybS1icm93c2VyL3NyYy9icm93c2VyL3NlcnZlci10cmFuc2l0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBQyxRQUFRLEVBQUUsT0FBTyxJQUFJLE1BQU0sRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzVELE9BQU8sRUFBQyxlQUFlLEVBQUUscUJBQXFCLEVBQVUsY0FBYyxFQUFFLFFBQVEsRUFBaUIsTUFBTSxlQUFlLENBQUM7Ozs7OztBQU12SCxNQUFNLE9BQU8sYUFBYSxHQUFHLElBQUksY0FBYyxDQUFDLGVBQWUsQ0FBQzs7Ozs7OztBQUVoRSxNQUFNLFVBQVUscUJBQXFCLENBQUMsWUFBb0IsRUFBRSxRQUFhLEVBQUUsUUFBa0I7SUFDM0Y7OztJQUFPLEdBQUcsRUFBRTtRQUNWLDBGQUEwRjtRQUMxRixjQUFjO1FBQ2QsUUFBUSxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJOzs7UUFBQyxHQUFHLEVBQUU7O2tCQUNsRCxHQUFHLEdBQUcsTUFBTSxFQUFFOztrQkFDZCxNQUFNLEdBQ1IsS0FBSyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1lBQ2xGLE1BQU0sQ0FBQyxNQUFNOzs7O1lBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLGVBQWUsQ0FBQyxLQUFLLFlBQVksRUFBQztpQkFDakUsT0FBTzs7OztZQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsRUFBQyxDQUFDO1FBQ3JDLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQyxFQUFDO0FBQ0osQ0FBQzs7QUFFRCxNQUFNLE9BQU8sMkJBQTJCLEdBQXFCO0lBQzNEO1FBQ0UsT0FBTyxFQUFFLGVBQWU7UUFDeEIsVUFBVSxFQUFFLHFCQUFxQjtRQUNqQyxJQUFJLEVBQUUsQ0FBQyxhQUFhLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztRQUN6QyxLQUFLLEVBQUUsSUFBSTtLQUNaO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7RE9DVU1FTlQsIMm1Z2V0RE9NIGFzIGdldERPTX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7QVBQX0lOSVRJQUxJWkVSLCBBcHBsaWNhdGlvbkluaXRTdGF0dXMsIEluamVjdCwgSW5qZWN0aW9uVG9rZW4sIEluamVjdG9yLCBTdGF0aWNQcm92aWRlcn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQW4gaWQgdGhhdCBpZGVudGlmaWVzIGEgcGFydGljdWxhciBhcHBsaWNhdGlvbiBiZWluZyBib290c3RyYXBwZWQsIHRoYXQgc2hvdWxkXG4gKiBtYXRjaCBhY3Jvc3MgdGhlIGNsaWVudC9zZXJ2ZXIgYm91bmRhcnkuXG4gKi9cbmV4cG9ydCBjb25zdCBUUkFOU0lUSU9OX0lEID0gbmV3IEluamVjdGlvblRva2VuKCdUUkFOU0lUSU9OX0lEJyk7XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBJbml0aWFsaXplckZhY3RvcnkodHJhbnNpdGlvbklkOiBzdHJpbmcsIGRvY3VtZW50OiBhbnksIGluamVjdG9yOiBJbmplY3Rvcikge1xuICByZXR1cm4gKCkgPT4ge1xuICAgIC8vIFdhaXQgZm9yIGFsbCBhcHBsaWNhdGlvbiBpbml0aWFsaXplcnMgdG8gYmUgY29tcGxldGVkIGJlZm9yZSByZW1vdmluZyB0aGUgc3R5bGVzIHNldCBieVxuICAgIC8vIHRoZSBzZXJ2ZXIuXG4gICAgaW5qZWN0b3IuZ2V0KEFwcGxpY2F0aW9uSW5pdFN0YXR1cykuZG9uZVByb21pc2UudGhlbigoKSA9PiB7XG4gICAgICBjb25zdCBkb20gPSBnZXRET00oKTtcbiAgICAgIGNvbnN0IHN0eWxlczogYW55W10gPVxuICAgICAgICAgIEFycmF5LnByb3RvdHlwZS5zbGljZS5hcHBseShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBzdHlsZVtuZy10cmFuc2l0aW9uXWApKTtcbiAgICAgIHN0eWxlcy5maWx0ZXIoZWwgPT4gZWwuZ2V0QXR0cmlidXRlKCduZy10cmFuc2l0aW9uJykgPT09IHRyYW5zaXRpb25JZClcbiAgICAgICAgICAuZm9yRWFjaChlbCA9PiBkb20ucmVtb3ZlKGVsKSk7XG4gICAgfSk7XG4gIH07XG59XG5cbmV4cG9ydCBjb25zdCBTRVJWRVJfVFJBTlNJVElPTl9QUk9WSURFUlM6IFN0YXRpY1Byb3ZpZGVyW10gPSBbXG4gIHtcbiAgICBwcm92aWRlOiBBUFBfSU5JVElBTElaRVIsXG4gICAgdXNlRmFjdG9yeTogYXBwSW5pdGlhbGl6ZXJGYWN0b3J5LFxuICAgIGRlcHM6IFtUUkFOU0lUSU9OX0lELCBET0NVTUVOVCwgSW5qZWN0b3JdLFxuICAgIG11bHRpOiB0cnVlXG4gIH0sXG5dO1xuIl19
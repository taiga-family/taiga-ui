/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/a11y/live-announcer/live-announcer-tokens.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { InjectionToken } from '@angular/core';
/** @type {?} */
export const LIVE_ANNOUNCER_ELEMENT_TOKEN = new InjectionToken('liveAnnouncerElement', {
    providedIn: 'root',
    factory: LIVE_ANNOUNCER_ELEMENT_TOKEN_FACTORY,
});
/**
 * \@docs-private
 * @return {?}
 */
export function LIVE_ANNOUNCER_ELEMENT_TOKEN_FACTORY() {
    return null;
}
/**
 * Object that can be used to configure the default options for the LiveAnnouncer.
 * @record
 */
export function LiveAnnouncerDefaultOptions() { }
if (false) {
    /**
     * Default politeness for the announcements.
     * @type {?|undefined}
     */
    LiveAnnouncerDefaultOptions.prototype.politeness;
    /**
     * Default duration for the announcement messages.
     * @type {?|undefined}
     */
    LiveAnnouncerDefaultOptions.prototype.duration;
}
/**
 * Injection token that can be used to configure the default options for the LiveAnnouncer.
 * @type {?}
 */
export const LIVE_ANNOUNCER_DEFAULT_OPTIONS = new InjectionToken('LIVE_ANNOUNCER_DEFAULT_OPTIONS');
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGl2ZS1hbm5vdW5jZXItdG9rZW5zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2Nkay9hMTF5L2xpdmUtYW5ub3VuY2VyL2xpdmUtYW5ub3VuY2VyLXRva2Vucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sZUFBZSxDQUFDOztBQVE3QyxNQUFNLE9BQU8sNEJBQTRCLEdBQ3JDLElBQUksY0FBYyxDQUFxQixzQkFBc0IsRUFBRTtJQUM3RCxVQUFVLEVBQUUsTUFBTTtJQUNsQixPQUFPLEVBQUUsb0NBQW9DO0NBQzlDLENBQUM7Ozs7O0FBR04sTUFBTSxVQUFVLG9DQUFvQztJQUNsRCxPQUFPLElBQUksQ0FBQztBQUNkLENBQUM7Ozs7O0FBR0QsaURBTUM7Ozs7OztJQUpDLGlEQUFnQzs7Ozs7SUFHaEMsK0NBQWtCOzs7Ozs7QUFJcEIsTUFBTSxPQUFPLDhCQUE4QixHQUN2QyxJQUFJLGNBQWMsQ0FBOEIsZ0NBQWdDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtJbmplY3Rpb25Ub2tlbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8vIFRoZSB0b2tlbnMgZm9yIHRoZSBsaXZlIGFubm91bmNlciBhcmUgZGVmaW5lZCBpbiBhIHNlcGFyYXRlIGZpbGUgZnJvbSBMaXZlQW5ub3VuY2VyXG4vLyBhcyBhIHdvcmthcm91bmQgZm9yIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzIyNTU5XG5cbi8qKiBQb3NzaWJsZSBwb2xpdGVuZXNzIGxldmVscy4gKi9cbmV4cG9ydCB0eXBlIEFyaWFMaXZlUG9saXRlbmVzcyA9ICdvZmYnIHwgJ3BvbGl0ZScgfCAnYXNzZXJ0aXZlJztcblxuZXhwb3J0IGNvbnN0IExJVkVfQU5OT1VOQ0VSX0VMRU1FTlRfVE9LRU4gPVxuICAgIG5ldyBJbmplY3Rpb25Ub2tlbjxIVE1MRWxlbWVudCB8IG51bGw+KCdsaXZlQW5ub3VuY2VyRWxlbWVudCcsIHtcbiAgICAgIHByb3ZpZGVkSW46ICdyb290JyxcbiAgICAgIGZhY3Rvcnk6IExJVkVfQU5OT1VOQ0VSX0VMRU1FTlRfVE9LRU5fRkFDVE9SWSxcbiAgICB9KTtcblxuLyoqIEBkb2NzLXByaXZhdGUgKi9cbmV4cG9ydCBmdW5jdGlvbiBMSVZFX0FOTk9VTkNFUl9FTEVNRU5UX1RPS0VOX0ZBQ1RPUlkoKTogbnVsbCB7XG4gIHJldHVybiBudWxsO1xufVxuXG4vKiogT2JqZWN0IHRoYXQgY2FuIGJlIHVzZWQgdG8gY29uZmlndXJlIHRoZSBkZWZhdWx0IG9wdGlvbnMgZm9yIHRoZSBMaXZlQW5ub3VuY2VyLiAqL1xuZXhwb3J0IGludGVyZmFjZSBMaXZlQW5ub3VuY2VyRGVmYXVsdE9wdGlvbnMge1xuICAvKiogRGVmYXVsdCBwb2xpdGVuZXNzIGZvciB0aGUgYW5ub3VuY2VtZW50cy4gKi9cbiAgcG9saXRlbmVzcz86IEFyaWFMaXZlUG9saXRlbmVzcztcblxuICAvKiogRGVmYXVsdCBkdXJhdGlvbiBmb3IgdGhlIGFubm91bmNlbWVudCBtZXNzYWdlcy4gKi9cbiAgZHVyYXRpb24/OiBudW1iZXI7XG59XG5cbi8qKiBJbmplY3Rpb24gdG9rZW4gdGhhdCBjYW4gYmUgdXNlZCB0byBjb25maWd1cmUgdGhlIGRlZmF1bHQgb3B0aW9ucyBmb3IgdGhlIExpdmVBbm5vdW5jZXIuICovXG5leHBvcnQgY29uc3QgTElWRV9BTk5PVU5DRVJfREVGQVVMVF9PUFRJT05TID1cbiAgICBuZXcgSW5qZWN0aW9uVG9rZW48TGl2ZUFubm91bmNlckRlZmF1bHRPcHRpb25zPignTElWRV9BTk5PVU5DRVJfREVGQVVMVF9PUFRJT05TJyk7XG4iXX0=
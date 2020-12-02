/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/overlay/overlay-config.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { NoopScrollStrategy } from './scroll/index';
/**
 * Initial configuration used when creating an overlay.
 */
export class OverlayConfig {
    /**
     * @param {?=} config
     */
    constructor(config) {
        /**
         * Strategy to be used when handling scroll events while the overlay is open.
         */
        this.scrollStrategy = new NoopScrollStrategy();
        /**
         * Custom class to add to the overlay pane.
         */
        this.panelClass = '';
        /**
         * Whether the overlay has a backdrop.
         */
        this.hasBackdrop = false;
        /**
         * Custom class to add to the backdrop
         */
        this.backdropClass = 'cdk-overlay-dark-backdrop';
        /**
         * Whether the overlay should be disposed of when the user goes backwards/forwards in history.
         * Note that this usually doesn't include clicking on links (unless the user is using
         * the `HashLocationStrategy`).
         */
        this.disposeOnNavigation = false;
        if (config) {
            // Use `Iterable` instead of `Array` because TypeScript, as of 3.6.3,
            // loses the array generic type in the `for of`. But we *also* have to use `Array` because
            // typescript won't iterate over an `Iterable` unless you compile with `--downlevelIteration`
            /** @type {?} */
            const configKeys = (/** @type {?} */ (Object.keys(config)));
            for (const key of configKeys) {
                if (config[key] !== undefined) {
                    // TypeScript, as of version 3.5, sees the left-hand-side of this expression
                    // as "I don't know *which* key this is, so the only valid value is the intersection
                    // of all the posible values." In this case, that happens to be `undefined`. TypeScript
                    // is not smart enough to see that the right-hand-side is actually an access of the same
                    // exact type with the same exact key, meaning that the value type must be identical.
                    // So we use `any` to work around this.
                    this[key] = (/** @type {?} */ (config[key]));
                }
            }
        }
    }
}
if (false) {
    /**
     * Strategy with which to position the overlay.
     * @type {?}
     */
    OverlayConfig.prototype.positionStrategy;
    /**
     * Strategy to be used when handling scroll events while the overlay is open.
     * @type {?}
     */
    OverlayConfig.prototype.scrollStrategy;
    /**
     * Custom class to add to the overlay pane.
     * @type {?}
     */
    OverlayConfig.prototype.panelClass;
    /**
     * Whether the overlay has a backdrop.
     * @type {?}
     */
    OverlayConfig.prototype.hasBackdrop;
    /**
     * Custom class to add to the backdrop
     * @type {?}
     */
    OverlayConfig.prototype.backdropClass;
    /**
     * The width of the overlay panel. If a number is provided, pixel units are assumed.
     * @type {?}
     */
    OverlayConfig.prototype.width;
    /**
     * The height of the overlay panel. If a number is provided, pixel units are assumed.
     * @type {?}
     */
    OverlayConfig.prototype.height;
    /**
     * The min-width of the overlay panel. If a number is provided, pixel units are assumed.
     * @type {?}
     */
    OverlayConfig.prototype.minWidth;
    /**
     * The min-height of the overlay panel. If a number is provided, pixel units are assumed.
     * @type {?}
     */
    OverlayConfig.prototype.minHeight;
    /**
     * The max-width of the overlay panel. If a number is provided, pixel units are assumed.
     * @type {?}
     */
    OverlayConfig.prototype.maxWidth;
    /**
     * The max-height of the overlay panel. If a number is provided, pixel units are assumed.
     * @type {?}
     */
    OverlayConfig.prototype.maxHeight;
    /**
     * Direction of the text in the overlay panel. If a `Directionality` instance
     * is passed in, the overlay will handle changes to its value automatically.
     * @type {?}
     */
    OverlayConfig.prototype.direction;
    /**
     * Whether the overlay should be disposed of when the user goes backwards/forwards in history.
     * Note that this usually doesn't include clicking on links (unless the user is using
     * the `HashLocationStrategy`).
     * @type {?}
     */
    OverlayConfig.prototype.disposeOnNavigation;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcmxheS1jb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvY2RrL292ZXJsYXkvb3ZlcmxheS1jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBVUEsT0FBTyxFQUFpQixrQkFBa0IsRUFBQyxNQUFNLGdCQUFnQixDQUFDOzs7O0FBSWxFLE1BQU0sT0FBTyxhQUFhOzs7O0lBK0N4QixZQUFZLE1BQXNCOzs7O1FBMUNsQyxtQkFBYyxHQUFvQixJQUFJLGtCQUFrQixFQUFFLENBQUM7Ozs7UUFHM0QsZUFBVSxHQUF1QixFQUFFLENBQUM7Ozs7UUFHcEMsZ0JBQVcsR0FBYSxLQUFLLENBQUM7Ozs7UUFHOUIsa0JBQWEsR0FBdUIsMkJBQTJCLENBQUM7Ozs7OztRQStCaEUsd0JBQW1CLEdBQWEsS0FBSyxDQUFDO1FBR3BDLElBQUksTUFBTSxFQUFFOzs7OztrQkFJSixVQUFVLEdBQ1osbUJBQUEsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBOEQ7WUFDckYsS0FBSyxNQUFNLEdBQUcsSUFBSSxVQUFVLEVBQUU7Z0JBQzVCLElBQUksTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLFNBQVMsRUFBRTtvQkFDN0IsNEVBQTRFO29CQUM1RSxvRkFBb0Y7b0JBQ3BGLHVGQUF1RjtvQkFDdkYsd0ZBQXdGO29CQUN4RixxRkFBcUY7b0JBQ3JGLHVDQUF1QztvQkFDdkMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLG1CQUFBLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBTyxDQUFDO2lCQUNoQzthQUNGO1NBQ0Y7SUFDSCxDQUFDO0NBQ0Y7Ozs7OztJQWpFQyx5Q0FBb0M7Ozs7O0lBR3BDLHVDQUEyRDs7Ozs7SUFHM0QsbUNBQW9DOzs7OztJQUdwQyxvQ0FBOEI7Ozs7O0lBRzlCLHNDQUFnRTs7Ozs7SUFHaEUsOEJBQXdCOzs7OztJQUd4QiwrQkFBeUI7Ozs7O0lBR3pCLGlDQUEyQjs7Ozs7SUFHM0Isa0NBQTRCOzs7OztJQUc1QixpQ0FBMkI7Ozs7O0lBRzNCLGtDQUE0Qjs7Ozs7O0lBTTVCLGtDQUF1Qzs7Ozs7OztJQU92Qyw0Q0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtQb3NpdGlvblN0cmF0ZWd5fSBmcm9tICcuL3Bvc2l0aW9uL3Bvc2l0aW9uLXN0cmF0ZWd5JztcbmltcG9ydCB7RGlyZWN0aW9uLCBEaXJlY3Rpb25hbGl0eX0gZnJvbSAnQGFuZ3VsYXIvY2RrL2JpZGknO1xuaW1wb3J0IHtTY3JvbGxTdHJhdGVneSwgTm9vcFNjcm9sbFN0cmF0ZWd5fSBmcm9tICcuL3Njcm9sbC9pbmRleCc7XG5cblxuLyoqIEluaXRpYWwgY29uZmlndXJhdGlvbiB1c2VkIHdoZW4gY3JlYXRpbmcgYW4gb3ZlcmxheS4gKi9cbmV4cG9ydCBjbGFzcyBPdmVybGF5Q29uZmlnIHtcbiAgLyoqIFN0cmF0ZWd5IHdpdGggd2hpY2ggdG8gcG9zaXRpb24gdGhlIG92ZXJsYXkuICovXG4gIHBvc2l0aW9uU3RyYXRlZ3k/OiBQb3NpdGlvblN0cmF0ZWd5O1xuXG4gIC8qKiBTdHJhdGVneSB0byBiZSB1c2VkIHdoZW4gaGFuZGxpbmcgc2Nyb2xsIGV2ZW50cyB3aGlsZSB0aGUgb3ZlcmxheSBpcyBvcGVuLiAqL1xuICBzY3JvbGxTdHJhdGVneT86IFNjcm9sbFN0cmF0ZWd5ID0gbmV3IE5vb3BTY3JvbGxTdHJhdGVneSgpO1xuXG4gIC8qKiBDdXN0b20gY2xhc3MgdG8gYWRkIHRvIHRoZSBvdmVybGF5IHBhbmUuICovXG4gIHBhbmVsQ2xhc3M/OiBzdHJpbmcgfCBzdHJpbmdbXSA9ICcnO1xuXG4gIC8qKiBXaGV0aGVyIHRoZSBvdmVybGF5IGhhcyBhIGJhY2tkcm9wLiAqL1xuICBoYXNCYWNrZHJvcD86IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKiogQ3VzdG9tIGNsYXNzIHRvIGFkZCB0byB0aGUgYmFja2Ryb3AgKi9cbiAgYmFja2Ryb3BDbGFzcz86IHN0cmluZyB8IHN0cmluZ1tdID0gJ2Nkay1vdmVybGF5LWRhcmstYmFja2Ryb3AnO1xuXG4gIC8qKiBUaGUgd2lkdGggb2YgdGhlIG92ZXJsYXkgcGFuZWwuIElmIGEgbnVtYmVyIGlzIHByb3ZpZGVkLCBwaXhlbCB1bml0cyBhcmUgYXNzdW1lZC4gKi9cbiAgd2lkdGg/OiBudW1iZXIgfCBzdHJpbmc7XG5cbiAgLyoqIFRoZSBoZWlnaHQgb2YgdGhlIG92ZXJsYXkgcGFuZWwuIElmIGEgbnVtYmVyIGlzIHByb3ZpZGVkLCBwaXhlbCB1bml0cyBhcmUgYXNzdW1lZC4gKi9cbiAgaGVpZ2h0PzogbnVtYmVyIHwgc3RyaW5nO1xuXG4gIC8qKiBUaGUgbWluLXdpZHRoIG9mIHRoZSBvdmVybGF5IHBhbmVsLiBJZiBhIG51bWJlciBpcyBwcm92aWRlZCwgcGl4ZWwgdW5pdHMgYXJlIGFzc3VtZWQuICovXG4gIG1pbldpZHRoPzogbnVtYmVyIHwgc3RyaW5nO1xuXG4gIC8qKiBUaGUgbWluLWhlaWdodCBvZiB0aGUgb3ZlcmxheSBwYW5lbC4gSWYgYSBudW1iZXIgaXMgcHJvdmlkZWQsIHBpeGVsIHVuaXRzIGFyZSBhc3N1bWVkLiAqL1xuICBtaW5IZWlnaHQ/OiBudW1iZXIgfCBzdHJpbmc7XG5cbiAgLyoqIFRoZSBtYXgtd2lkdGggb2YgdGhlIG92ZXJsYXkgcGFuZWwuIElmIGEgbnVtYmVyIGlzIHByb3ZpZGVkLCBwaXhlbCB1bml0cyBhcmUgYXNzdW1lZC4gKi9cbiAgbWF4V2lkdGg/OiBudW1iZXIgfCBzdHJpbmc7XG5cbiAgLyoqIFRoZSBtYXgtaGVpZ2h0IG9mIHRoZSBvdmVybGF5IHBhbmVsLiBJZiBhIG51bWJlciBpcyBwcm92aWRlZCwgcGl4ZWwgdW5pdHMgYXJlIGFzc3VtZWQuICovXG4gIG1heEhlaWdodD86IG51bWJlciB8IHN0cmluZztcblxuICAvKipcbiAgICogRGlyZWN0aW9uIG9mIHRoZSB0ZXh0IGluIHRoZSBvdmVybGF5IHBhbmVsLiBJZiBhIGBEaXJlY3Rpb25hbGl0eWAgaW5zdGFuY2VcbiAgICogaXMgcGFzc2VkIGluLCB0aGUgb3ZlcmxheSB3aWxsIGhhbmRsZSBjaGFuZ2VzIHRvIGl0cyB2YWx1ZSBhdXRvbWF0aWNhbGx5LlxuICAgKi9cbiAgZGlyZWN0aW9uPzogRGlyZWN0aW9uIHwgRGlyZWN0aW9uYWxpdHk7XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgdGhlIG92ZXJsYXkgc2hvdWxkIGJlIGRpc3Bvc2VkIG9mIHdoZW4gdGhlIHVzZXIgZ29lcyBiYWNrd2FyZHMvZm9yd2FyZHMgaW4gaGlzdG9yeS5cbiAgICogTm90ZSB0aGF0IHRoaXMgdXN1YWxseSBkb2Vzbid0IGluY2x1ZGUgY2xpY2tpbmcgb24gbGlua3MgKHVubGVzcyB0aGUgdXNlciBpcyB1c2luZ1xuICAgKiB0aGUgYEhhc2hMb2NhdGlvblN0cmF0ZWd5YCkuXG4gICAqL1xuICBkaXNwb3NlT25OYXZpZ2F0aW9uPzogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKGNvbmZpZz86IE92ZXJsYXlDb25maWcpIHtcbiAgICBpZiAoY29uZmlnKSB7XG4gICAgICAvLyBVc2UgYEl0ZXJhYmxlYCBpbnN0ZWFkIG9mIGBBcnJheWAgYmVjYXVzZSBUeXBlU2NyaXB0LCBhcyBvZiAzLjYuMyxcbiAgICAgIC8vIGxvc2VzIHRoZSBhcnJheSBnZW5lcmljIHR5cGUgaW4gdGhlIGBmb3Igb2ZgLiBCdXQgd2UgKmFsc28qIGhhdmUgdG8gdXNlIGBBcnJheWAgYmVjYXVzZVxuICAgICAgLy8gdHlwZXNjcmlwdCB3b24ndCBpdGVyYXRlIG92ZXIgYW4gYEl0ZXJhYmxlYCB1bmxlc3MgeW91IGNvbXBpbGUgd2l0aCBgLS1kb3dubGV2ZWxJdGVyYXRpb25gXG4gICAgICBjb25zdCBjb25maWdLZXlzID1cbiAgICAgICAgICBPYmplY3Qua2V5cyhjb25maWcpIGFzIEl0ZXJhYmxlPGtleW9mIE92ZXJsYXlDb25maWc+ICYgQXJyYXk8a2V5b2YgT3ZlcmxheUNvbmZpZz47XG4gICAgICBmb3IgKGNvbnN0IGtleSBvZiBjb25maWdLZXlzKSB7XG4gICAgICAgIGlmIChjb25maWdba2V5XSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgLy8gVHlwZVNjcmlwdCwgYXMgb2YgdmVyc2lvbiAzLjUsIHNlZXMgdGhlIGxlZnQtaGFuZC1zaWRlIG9mIHRoaXMgZXhwcmVzc2lvblxuICAgICAgICAgIC8vIGFzIFwiSSBkb24ndCBrbm93ICp3aGljaCoga2V5IHRoaXMgaXMsIHNvIHRoZSBvbmx5IHZhbGlkIHZhbHVlIGlzIHRoZSBpbnRlcnNlY3Rpb25cbiAgICAgICAgICAvLyBvZiBhbGwgdGhlIHBvc2libGUgdmFsdWVzLlwiIEluIHRoaXMgY2FzZSwgdGhhdCBoYXBwZW5zIHRvIGJlIGB1bmRlZmluZWRgLiBUeXBlU2NyaXB0XG4gICAgICAgICAgLy8gaXMgbm90IHNtYXJ0IGVub3VnaCB0byBzZWUgdGhhdCB0aGUgcmlnaHQtaGFuZC1zaWRlIGlzIGFjdHVhbGx5IGFuIGFjY2VzcyBvZiB0aGUgc2FtZVxuICAgICAgICAgIC8vIGV4YWN0IHR5cGUgd2l0aCB0aGUgc2FtZSBleGFjdCBrZXksIG1lYW5pbmcgdGhhdCB0aGUgdmFsdWUgdHlwZSBtdXN0IGJlIGlkZW50aWNhbC5cbiAgICAgICAgICAvLyBTbyB3ZSB1c2UgYGFueWAgdG8gd29yayBhcm91bmQgdGhpcy5cbiAgICAgICAgICB0aGlzW2tleV0gPSBjb25maWdba2V5XSBhcyBhbnk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ==
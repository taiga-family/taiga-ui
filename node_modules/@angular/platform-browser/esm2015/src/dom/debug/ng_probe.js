/**
 * @fileoverview added by tsickle
 * Generated from: packages/platform-browser/src/dom/debug/ng_probe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { APP_INITIALIZER, ApplicationRef, NgProbeToken, NgZone, Optional, ɵgetDebugNodeR2 } from '@angular/core';
import { exportNgVar } from '../util';
const ɵ0 = /**
 * @return {?}
 */
() => ({
    'ApplicationRef': ApplicationRef,
    'NgZone': NgZone,
});
/** @type {?} */
const CORE_TOKENS = ((ɵ0))();
/** @type {?} */
const INSPECT_GLOBAL_NAME = 'probe';
/** @type {?} */
const CORE_TOKENS_GLOBAL_NAME = 'coreTokens';
/**
 * Returns a {\@link DebugElement} for the given native DOM element, or
 * null if the given native element does not have an Angular view associated
 * with it.
 * @param {?} element
 * @return {?}
 */
export function inspectNativeElementR2(element) {
    return ɵgetDebugNodeR2(element);
}
/**
 * @param {?} coreTokens
 * @return {?}
 */
export function _createNgProbeR2(coreTokens) {
    exportNgVar(INSPECT_GLOBAL_NAME, inspectNativeElementR2);
    exportNgVar(CORE_TOKENS_GLOBAL_NAME, Object.assign(Object.assign({}, CORE_TOKENS), _ngProbeTokensToMap(coreTokens || [])));
    return (/**
     * @return {?}
     */
    () => inspectNativeElementR2);
}
/**
 * @param {?} tokens
 * @return {?}
 */
function _ngProbeTokensToMap(tokens) {
    return tokens.reduce((/**
     * @param {?} prev
     * @param {?} t
     * @return {?}
     */
    (prev, t) => (prev[t.name] = t.token, prev)), {});
}
/**
 * In Ivy, we don't support NgProbe because we have our own set of testing utilities
 * with more robust functionality.
 *
 * We shouldn't bring in NgProbe because it prevents DebugNode and friends from
 * tree-shaking properly.
 * @type {?}
 */
export const ELEMENT_PROBE_PROVIDERS__POST_R3__ = [];
/**
 * Providers which support debugging Angular applications (e.g. via `ng.probe`).
 * @type {?}
 */
export const ELEMENT_PROBE_PROVIDERS__PRE_R3__ = [
    {
        provide: APP_INITIALIZER,
        useFactory: _createNgProbeR2,
        deps: [
            [NgProbeToken, new Optional()],
        ],
        multi: true,
    },
];
/** @type {?} */
export const ELEMENT_PROBE_PROVIDERS = ELEMENT_PROBE_PROVIDERS__PRE_R3__;
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdfcHJvYmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9wbGF0Zm9ybS1icm93c2VyL3NyYy9kb20vZGVidWcvbmdfcHJvYmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFDLGVBQWUsRUFBRSxjQUFjLEVBQWEsWUFBWSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQVksZUFBZSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRXBJLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxTQUFTLENBQUM7Ozs7QUFFZixHQUFHLEVBQUUsQ0FBQyxDQUFDO0lBQ0wsZ0JBQWdCLEVBQUUsY0FBYztJQUNoQyxRQUFRLEVBQUUsTUFBTTtDQUNqQixDQUFDOztNQUhqQixXQUFXLEdBQUcsTUFHSSxFQUFFOztNQUVwQixtQkFBbUIsR0FBRyxPQUFPOztNQUM3Qix1QkFBdUIsR0FBRyxZQUFZOzs7Ozs7OztBQU81QyxNQUFNLFVBQVUsc0JBQXNCLENBQUMsT0FBWTtJQUNqRCxPQUFPLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUNsQyxDQUFDOzs7OztBQUVELE1BQU0sVUFBVSxnQkFBZ0IsQ0FBQyxVQUEwQjtJQUN6RCxXQUFXLENBQUMsbUJBQW1CLEVBQUUsc0JBQXNCLENBQUMsQ0FBQztJQUN6RCxXQUFXLENBQUMsdUJBQXVCLGtDQUFNLFdBQVcsR0FBSyxtQkFBbUIsQ0FBQyxVQUFVLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQztJQUNqRzs7O0lBQU8sR0FBRyxFQUFFLENBQUMsc0JBQXNCLEVBQUM7QUFDdEMsQ0FBQzs7Ozs7QUFFRCxTQUFTLG1CQUFtQixDQUFDLE1BQXNCO0lBQ2pELE9BQU8sTUFBTSxDQUFDLE1BQU07Ozs7O0lBQUMsQ0FBQyxJQUFTLEVBQUUsQ0FBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsR0FBRSxFQUFFLENBQUMsQ0FBQztBQUNsRixDQUFDOzs7Ozs7Ozs7QUFTRCxNQUFNLE9BQU8sa0NBQWtDLEdBQUcsRUFBRTs7Ozs7QUFLcEQsTUFBTSxPQUFPLGlDQUFpQyxHQUFlO0lBQzNEO1FBQ0UsT0FBTyxFQUFFLGVBQWU7UUFDeEIsVUFBVSxFQUFFLGdCQUFnQjtRQUM1QixJQUFJLEVBQUU7WUFDSixDQUFDLFlBQVksRUFBRSxJQUFJLFFBQVEsRUFBRSxDQUFDO1NBQy9CO1FBQ0QsS0FBSyxFQUFFLElBQUk7S0FDWjtDQUNGOztBQUVELE1BQU0sT0FBTyx1QkFBdUIsR0FBRyxpQ0FBaUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7QVBQX0lOSVRJQUxJWkVSLCBBcHBsaWNhdGlvblJlZiwgRGVidWdOb2RlLCBOZ1Byb2JlVG9rZW4sIE5nWm9uZSwgT3B0aW9uYWwsIFByb3ZpZGVyLCDJtWdldERlYnVnTm9kZVIyfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtleHBvcnROZ1Zhcn0gZnJvbSAnLi4vdXRpbCc7XG5cbmNvbnN0IENPUkVfVE9LRU5TID0gKCgpID0+ICh7XG4gICAgICAgICAgICAgICAgICAgICAgICdBcHBsaWNhdGlvblJlZic6IEFwcGxpY2F0aW9uUmVmLFxuICAgICAgICAgICAgICAgICAgICAgICAnTmdab25lJzogTmdab25lLFxuICAgICAgICAgICAgICAgICAgICAgfSkpKCk7XG5cbmNvbnN0IElOU1BFQ1RfR0xPQkFMX05BTUUgPSAncHJvYmUnO1xuY29uc3QgQ09SRV9UT0tFTlNfR0xPQkFMX05BTUUgPSAnY29yZVRva2Vucyc7XG5cbi8qKlxuICogUmV0dXJucyBhIHtAbGluayBEZWJ1Z0VsZW1lbnR9IGZvciB0aGUgZ2l2ZW4gbmF0aXZlIERPTSBlbGVtZW50LCBvclxuICogbnVsbCBpZiB0aGUgZ2l2ZW4gbmF0aXZlIGVsZW1lbnQgZG9lcyBub3QgaGF2ZSBhbiBBbmd1bGFyIHZpZXcgYXNzb2NpYXRlZFxuICogd2l0aCBpdC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGluc3BlY3ROYXRpdmVFbGVtZW50UjIoZWxlbWVudDogYW55KTogRGVidWdOb2RlfG51bGwge1xuICByZXR1cm4gybVnZXREZWJ1Z05vZGVSMihlbGVtZW50KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9jcmVhdGVOZ1Byb2JlUjIoY29yZVRva2VuczogTmdQcm9iZVRva2VuW10pOiBhbnkge1xuICBleHBvcnROZ1ZhcihJTlNQRUNUX0dMT0JBTF9OQU1FLCBpbnNwZWN0TmF0aXZlRWxlbWVudFIyKTtcbiAgZXhwb3J0TmdWYXIoQ09SRV9UT0tFTlNfR0xPQkFMX05BTUUsIHsuLi5DT1JFX1RPS0VOUywgLi4uX25nUHJvYmVUb2tlbnNUb01hcChjb3JlVG9rZW5zIHx8IFtdKX0pO1xuICByZXR1cm4gKCkgPT4gaW5zcGVjdE5hdGl2ZUVsZW1lbnRSMjtcbn1cblxuZnVuY3Rpb24gX25nUHJvYmVUb2tlbnNUb01hcCh0b2tlbnM6IE5nUHJvYmVUb2tlbltdKToge1tuYW1lOiBzdHJpbmddOiBhbnl9IHtcbiAgcmV0dXJuIHRva2Vucy5yZWR1Y2UoKHByZXY6IGFueSwgdDogYW55KSA9PiAocHJldlt0Lm5hbWVdID0gdC50b2tlbiwgcHJldiksIHt9KTtcbn1cblxuLyoqXG4gKiBJbiBJdnksIHdlIGRvbid0IHN1cHBvcnQgTmdQcm9iZSBiZWNhdXNlIHdlIGhhdmUgb3VyIG93biBzZXQgb2YgdGVzdGluZyB1dGlsaXRpZXNcbiAqIHdpdGggbW9yZSByb2J1c3QgZnVuY3Rpb25hbGl0eS5cbiAqXG4gKiBXZSBzaG91bGRuJ3QgYnJpbmcgaW4gTmdQcm9iZSBiZWNhdXNlIGl0IHByZXZlbnRzIERlYnVnTm9kZSBhbmQgZnJpZW5kcyBmcm9tXG4gKiB0cmVlLXNoYWtpbmcgcHJvcGVybHkuXG4gKi9cbmV4cG9ydCBjb25zdCBFTEVNRU5UX1BST0JFX1BST1ZJREVSU19fUE9TVF9SM19fID0gW107XG5cbi8qKlxuICogUHJvdmlkZXJzIHdoaWNoIHN1cHBvcnQgZGVidWdnaW5nIEFuZ3VsYXIgYXBwbGljYXRpb25zIChlLmcuIHZpYSBgbmcucHJvYmVgKS5cbiAqL1xuZXhwb3J0IGNvbnN0IEVMRU1FTlRfUFJPQkVfUFJPVklERVJTX19QUkVfUjNfXzogUHJvdmlkZXJbXSA9IFtcbiAge1xuICAgIHByb3ZpZGU6IEFQUF9JTklUSUFMSVpFUixcbiAgICB1c2VGYWN0b3J5OiBfY3JlYXRlTmdQcm9iZVIyLFxuICAgIGRlcHM6IFtcbiAgICAgIFtOZ1Byb2JlVG9rZW4sIG5ldyBPcHRpb25hbCgpXSxcbiAgICBdLFxuICAgIG11bHRpOiB0cnVlLFxuICB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IEVMRU1FTlRfUFJPQkVfUFJPVklERVJTID0gRUxFTUVOVF9QUk9CRV9QUk9WSURFUlNfX1BSRV9SM19fO1xuIl19
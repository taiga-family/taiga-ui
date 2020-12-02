/**
 * @fileoverview added by tsickle
 * Generated from: packages/animations/browser/src/render/shared.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { AUTO_STYLE, NoopAnimationPlayer, ɵAnimationGroupPlayer, ɵPRE_STYLE as PRE_STYLE } from '@angular/animations';
/**
 * @return {?}
 */
export function isBrowser() {
    return (typeof window !== 'undefined' && typeof window.document !== 'undefined');
}
/**
 * @return {?}
 */
export function isNode() {
    // Checking only for `process` isn't enough to identify whether or not we're in a Node
    // environment, because Webpack by default will polyfill the `process`. While we can discern
    // that Webpack polyfilled it by looking at `process.browser`, it's very Webpack-specific and
    // might not be future-proof. Instead we look at the stringified version of `process` which
    // is `[object process]` in Node and `[object Object]` when polyfilled.
    return typeof process !== 'undefined' && {}.toString.call(process) === '[object process]';
}
/**
 * @param {?} players
 * @return {?}
 */
export function optimizeGroupPlayer(players) {
    switch (players.length) {
        case 0:
            return new NoopAnimationPlayer();
        case 1:
            return players[0];
        default:
            return new ɵAnimationGroupPlayer(players);
    }
}
/**
 * @param {?} driver
 * @param {?} normalizer
 * @param {?} element
 * @param {?} keyframes
 * @param {?=} preStyles
 * @param {?=} postStyles
 * @return {?}
 */
export function normalizeKeyframes(driver, normalizer, element, keyframes, preStyles = {}, postStyles = {}) {
    /** @type {?} */
    const errors = [];
    /** @type {?} */
    const normalizedKeyframes = [];
    /** @type {?} */
    let previousOffset = -1;
    /** @type {?} */
    let previousKeyframe = null;
    keyframes.forEach((/**
     * @param {?} kf
     * @return {?}
     */
    kf => {
        /** @type {?} */
        const offset = (/** @type {?} */ (kf['offset']));
        /** @type {?} */
        const isSameOffset = offset == previousOffset;
        /** @type {?} */
        const normalizedKeyframe = (isSameOffset && previousKeyframe) || {};
        Object.keys(kf).forEach((/**
         * @param {?} prop
         * @return {?}
         */
        prop => {
            /** @type {?} */
            let normalizedProp = prop;
            /** @type {?} */
            let normalizedValue = kf[prop];
            if (prop !== 'offset') {
                normalizedProp = normalizer.normalizePropertyName(normalizedProp, errors);
                switch (normalizedValue) {
                    case PRE_STYLE:
                        normalizedValue = preStyles[prop];
                        break;
                    case AUTO_STYLE:
                        normalizedValue = postStyles[prop];
                        break;
                    default:
                        normalizedValue =
                            normalizer.normalizeStyleValue(prop, normalizedProp, normalizedValue, errors);
                        break;
                }
            }
            normalizedKeyframe[normalizedProp] = normalizedValue;
        }));
        if (!isSameOffset) {
            normalizedKeyframes.push(normalizedKeyframe);
        }
        previousKeyframe = normalizedKeyframe;
        previousOffset = offset;
    }));
    if (errors.length) {
        /** @type {?} */
        const LINE_START = '\n - ';
        throw new Error(`Unable to animate due to the following errors:${LINE_START}${errors.join(LINE_START)}`);
    }
    return normalizedKeyframes;
}
/**
 * @param {?} player
 * @param {?} eventName
 * @param {?} event
 * @param {?} callback
 * @return {?}
 */
export function listenOnPlayer(player, eventName, event, callback) {
    switch (eventName) {
        case 'start':
            player.onStart((/**
             * @return {?}
             */
            () => callback(event && copyAnimationEvent(event, 'start', player))));
            break;
        case 'done':
            player.onDone((/**
             * @return {?}
             */
            () => callback(event && copyAnimationEvent(event, 'done', player))));
            break;
        case 'destroy':
            player.onDestroy((/**
             * @return {?}
             */
            () => callback(event && copyAnimationEvent(event, 'destroy', player))));
            break;
    }
}
/**
 * @param {?} e
 * @param {?} phaseName
 * @param {?} player
 * @return {?}
 */
export function copyAnimationEvent(e, phaseName, player) {
    /** @type {?} */
    const totalTime = player.totalTime;
    /** @type {?} */
    const disabled = ((/** @type {?} */ (player))).disabled ? true : false;
    /** @type {?} */
    const event = makeAnimationEvent(e.element, e.triggerName, e.fromState, e.toState, phaseName || e.phaseName, totalTime == undefined ? e.totalTime : totalTime, disabled);
    /** @type {?} */
    const data = ((/** @type {?} */ (e)))['_data'];
    if (data != null) {
        ((/** @type {?} */ (event)))['_data'] = data;
    }
    return event;
}
/**
 * @param {?} element
 * @param {?} triggerName
 * @param {?} fromState
 * @param {?} toState
 * @param {?=} phaseName
 * @param {?=} totalTime
 * @param {?=} disabled
 * @return {?}
 */
export function makeAnimationEvent(element, triggerName, fromState, toState, phaseName = '', totalTime = 0, disabled) {
    return { element, triggerName, fromState, toState, phaseName, totalTime, disabled: !!disabled };
}
/**
 * @param {?} map
 * @param {?} key
 * @param {?} defaultValue
 * @return {?}
 */
export function getOrSetAsInMap(map, key, defaultValue) {
    /** @type {?} */
    let value;
    if (map instanceof Map) {
        value = map.get(key);
        if (!value) {
            map.set(key, value = defaultValue);
        }
    }
    else {
        value = map[key];
        if (!value) {
            value = map[key] = defaultValue;
        }
    }
    return value;
}
/**
 * @param {?} command
 * @return {?}
 */
export function parseTimelineCommand(command) {
    /** @type {?} */
    const separatorPos = command.indexOf(':');
    /** @type {?} */
    const id = command.substring(1, separatorPos);
    /** @type {?} */
    const action = command.substr(separatorPos + 1);
    return [id, action];
}
/** @type {?} */
let _contains = (/**
 * @param {?} elm1
 * @param {?} elm2
 * @return {?}
 */
(elm1, elm2) => false);
const ɵ0 = _contains;
/** @type {?} */
let _matches = (/**
 * @param {?} element
 * @param {?} selector
 * @return {?}
 */
(element, selector) => false);
const ɵ1 = _matches;
/** @type {?} */
let _query = (/**
 * @param {?} element
 * @param {?} selector
 * @param {?} multi
 * @return {?}
 */
(element, selector, multi) => {
    return [];
});
const ɵ2 = _query;
// Define utility methods for browsers and platform-server(domino) where Element
// and utility methods exist.
/** @type {?} */
const _isNode = isNode();
if (_isNode || typeof Element !== 'undefined') {
    // this is well supported in all browsers
    _contains = (/**
     * @param {?} elm1
     * @param {?} elm2
     * @return {?}
     */
    (elm1, elm2) => {
        return (/** @type {?} */ (elm1.contains(elm2)));
    });
    _matches = ((/**
     * @return {?}
     */
    () => {
        if (_isNode || Element.prototype.matches) {
            return (/**
             * @param {?} element
             * @param {?} selector
             * @return {?}
             */
            (element, selector) => element.matches(selector));
        }
        else {
            /** @type {?} */
            const proto = (/** @type {?} */ (Element.prototype));
            /** @type {?} */
            const fn = proto.matchesSelector || proto.mozMatchesSelector || proto.msMatchesSelector ||
                proto.oMatchesSelector || proto.webkitMatchesSelector;
            if (fn) {
                return (/**
                 * @param {?} element
                 * @param {?} selector
                 * @return {?}
                 */
                (element, selector) => fn.apply(element, [selector]));
            }
            else {
                return _matches;
            }
        }
    }))();
    _query = (/**
     * @param {?} element
     * @param {?} selector
     * @param {?} multi
     * @return {?}
     */
    (element, selector, multi) => {
        /** @type {?} */
        let results = [];
        if (multi) {
            results.push(...element.querySelectorAll(selector));
        }
        else {
            /** @type {?} */
            const elm = element.querySelector(selector);
            if (elm) {
                results.push(elm);
            }
        }
        return results;
    });
}
/**
 * @param {?} prop
 * @return {?}
 */
function containsVendorPrefix(prop) {
    // Webkit is the only real popular vendor prefix nowadays
    // cc: http://shouldiprefix.com/
    return prop.substring(1, 6) == 'ebkit'; // webkit or Webkit
}
/** @type {?} */
let _CACHED_BODY = null;
/** @type {?} */
let _IS_WEBKIT = false;
/**
 * @param {?} prop
 * @return {?}
 */
export function validateStyleProperty(prop) {
    if (!_CACHED_BODY) {
        _CACHED_BODY = getBodyNode() || {};
        _IS_WEBKIT = (/** @type {?} */ (_CACHED_BODY)).style ? ('WebkitAppearance' in (/** @type {?} */ (_CACHED_BODY)).style) : false;
    }
    /** @type {?} */
    let result = true;
    if ((/** @type {?} */ (_CACHED_BODY)).style && !containsVendorPrefix(prop)) {
        result = prop in (/** @type {?} */ (_CACHED_BODY)).style;
        if (!result && _IS_WEBKIT) {
            /** @type {?} */
            const camelProp = 'Webkit' + prop.charAt(0).toUpperCase() + prop.substr(1);
            result = camelProp in (/** @type {?} */ (_CACHED_BODY)).style;
        }
    }
    return result;
}
/**
 * @return {?}
 */
export function getBodyNode() {
    if (typeof document != 'undefined') {
        return document.body;
    }
    return null;
}
/** @type {?} */
export const matchesElement = _matches;
/** @type {?} */
export const containsElement = _contains;
/** @type {?} */
export const invokeQuery = _query;
/**
 * @param {?} object
 * @return {?}
 */
export function hypenatePropsObject(object) {
    /** @type {?} */
    const newObj = {};
    Object.keys(object).forEach((/**
     * @param {?} prop
     * @return {?}
     */
    prop => {
        /** @type {?} */
        const newProp = prop.replace(/([a-z])([A-Z])/g, '$1-$2');
        newObj[newProp] = object[prop];
    }));
    return newObj;
}
export { ɵ0, ɵ1, ɵ2 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYW5pbWF0aW9ucy9icm93c2VyL3NyYy9yZW5kZXIvc2hhcmVkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQU9BLE9BQU8sRUFBa0MsVUFBVSxFQUFFLG1CQUFtQixFQUFFLHFCQUFxQixFQUFFLFVBQVUsSUFBSSxTQUFTLEVBQWEsTUFBTSxxQkFBcUIsQ0FBQzs7OztBQVVqSyxNQUFNLFVBQVUsU0FBUztJQUN2QixPQUFPLENBQUMsT0FBTyxNQUFNLEtBQUssV0FBVyxJQUFJLE9BQU8sTUFBTSxDQUFDLFFBQVEsS0FBSyxXQUFXLENBQUMsQ0FBQztBQUNuRixDQUFDOzs7O0FBRUQsTUFBTSxVQUFVLE1BQU07SUFDcEIsc0ZBQXNGO0lBQ3RGLDRGQUE0RjtJQUM1Riw2RkFBNkY7SUFDN0YsMkZBQTJGO0lBQzNGLHVFQUF1RTtJQUN2RSxPQUFPLE9BQU8sT0FBTyxLQUFLLFdBQVcsSUFBSSxFQUFFLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxrQkFBa0IsQ0FBQztBQUM1RixDQUFDOzs7OztBQUVELE1BQU0sVUFBVSxtQkFBbUIsQ0FBQyxPQUEwQjtJQUM1RCxRQUFRLE9BQU8sQ0FBQyxNQUFNLEVBQUU7UUFDdEIsS0FBSyxDQUFDO1lBQ0osT0FBTyxJQUFJLG1CQUFtQixFQUFFLENBQUM7UUFDbkMsS0FBSyxDQUFDO1lBQ0osT0FBTyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEI7WUFDRSxPQUFPLElBQUkscUJBQXFCLENBQUMsT0FBTyxDQUFDLENBQUM7S0FDN0M7QUFDSCxDQUFDOzs7Ozs7Ozs7O0FBRUQsTUFBTSxVQUFVLGtCQUFrQixDQUM5QixNQUF1QixFQUFFLFVBQW9DLEVBQUUsT0FBWSxFQUMzRSxTQUF1QixFQUFFLFlBQXdCLEVBQUUsRUFDbkQsYUFBeUIs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VUFBVSxXQUFXO0lBQ3pCLElBQUksT0FBTyxRQUFRLElBQUksV0FBVyxFQUFFO1FBQ2xDLE9BQU8sUUFBUSxDQUFDLElBQUksQ0FBQztLQUN0QjtJQUNELE9BQU8sSUFBSSxDQUFDO0FBQ2QsQ0FBQzs7QUFFRCxNQUFNLE9BQU8sY0FBYyxHQUFHLFFBQVE7O0FBQ3RDLE1BQU0sT0FBTyxlQUFlLEdBQUcsU0FBUzs7QUFDeEMsTUFBTSxPQUFPLFdBQVcsR0FBRyxNQUFNOzs7OztBQUVqQyxNQUFNLFVBQVUsbUJBQW1CLENBQUMsTUFBNEI7O1VBQ3hELE1BQU0sR0FBeUIsRUFBRTtJQUN2QyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU87Ozs7SUFBQyxJQUFJLENBQUMsRUFBRTs7Y0FDM0IsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsaUJBQWlCLEVBQUUsT0FBTyxDQUFDO1FBQ3hELE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDakMsQ0FBQyxFQUFDLENBQUM7SUFDSCxPQUFPLE1BQU0sQ0FBQztBQUNoQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuaW1wb3J0IHtBbmltYXRpb25FdmVudCwgQW5pbWF0aW9uUGxheWVyLCBBVVRPX1NUWUxFLCBOb29wQW5pbWF0aW9uUGxheWVyLCDJtUFuaW1hdGlvbkdyb3VwUGxheWVyLCDJtVBSRV9TVFlMRSBhcyBQUkVfU1RZTEUsIMm1U3R5bGVEYXRhfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcblxuaW1wb3J0IHtBbmltYXRpb25TdHlsZU5vcm1hbGl6ZXJ9IGZyb20gJy4uLy4uL3NyYy9kc2wvc3R5bGVfbm9ybWFsaXphdGlvbi9hbmltYXRpb25fc3R5bGVfbm9ybWFsaXplcic7XG5pbXBvcnQge0FuaW1hdGlvbkRyaXZlcn0gZnJvbSAnLi4vLi4vc3JjL3JlbmRlci9hbmltYXRpb25fZHJpdmVyJztcblxuLy8gV2UgZG9uJ3QgaW5jbHVkZSBhbWJpZW50IG5vZGUgdHlwZXMgaGVyZSBzaW5jZSBAYW5ndWxhci9hbmltYXRpb25zL2Jyb3dzZXJcbi8vIGlzIG1lYW50IHRvIHRhcmdldCB0aGUgYnJvd3NlciBzbyB0ZWNobmljYWxseSBpdCBzaG91bGQgbm90IGRlcGVuZCBvbiBub2RlXG4vLyB0eXBlcy4gYHByb2Nlc3NgIGlzIGp1c3QgZGVjbGFyZWQgbG9jYWxseSBoZXJlIGFzIGEgcmVzdWx0LlxuZGVjbGFyZSBjb25zdCBwcm9jZXNzOiBhbnk7XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0Jyb3dzZXIoKTogYm9vbGVhbiB7XG4gIHJldHVybiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHdpbmRvdy5kb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNOb2RlKCk6IGJvb2xlYW4ge1xuICAvLyBDaGVja2luZyBvbmx5IGZvciBgcHJvY2Vzc2AgaXNuJ3QgZW5vdWdoIHRvIGlkZW50aWZ5IHdoZXRoZXIgb3Igbm90IHdlJ3JlIGluIGEgTm9kZVxuICAvLyBlbnZpcm9ubWVudCwgYmVjYXVzZSBXZWJwYWNrIGJ5IGRlZmF1bHQgd2lsbCBwb2x5ZmlsbCB0aGUgYHByb2Nlc3NgLiBXaGlsZSB3ZSBjYW4gZGlzY2VyblxuICAvLyB0aGF0IFdlYnBhY2sgcG9seWZpbGxlZCBpdCBieSBsb29raW5nIGF0IGBwcm9jZXNzLmJyb3dzZXJgLCBpdCdzIHZlcnkgV2VicGFjay1zcGVjaWZpYyBhbmRcbiAgLy8gbWlnaHQgbm90IGJlIGZ1dHVyZS1wcm9vZi4gSW5zdGVhZCB3ZSBsb29rIGF0IHRoZSBzdHJpbmdpZmllZCB2ZXJzaW9uIG9mIGBwcm9jZXNzYCB3aGljaFxuICAvLyBpcyBgW29iamVjdCBwcm9jZXNzXWAgaW4gTm9kZSBhbmQgYFtvYmplY3QgT2JqZWN0XWAgd2hlbiBwb2x5ZmlsbGVkLlxuICByZXR1cm4gdHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnICYmIHt9LnRvU3RyaW5nLmNhbGwocHJvY2VzcykgPT09ICdbb2JqZWN0IHByb2Nlc3NdJztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9wdGltaXplR3JvdXBQbGF5ZXIocGxheWVyczogQW5pbWF0aW9uUGxheWVyW10pOiBBbmltYXRpb25QbGF5ZXIge1xuICBzd2l0Y2ggKHBsYXllcnMubGVuZ3RoKSB7XG4gICAgY2FzZSAwOlxuICAgICAgcmV0dXJuIG5ldyBOb29wQW5pbWF0aW9uUGxheWVyKCk7XG4gICAgY2FzZSAxOlxuICAgICAgcmV0dXJuIHBsYXllcnNbMF07XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBuZXcgybVBbmltYXRpb25Hcm91cFBsYXllcihwbGF5ZXJzKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplS2V5ZnJhbWVzKFxuICAgIGRyaXZlcjogQW5pbWF0aW9uRHJpdmVyLCBub3JtYWxpemVyOiBBbmltYXRpb25TdHlsZU5vcm1hbGl6ZXIsIGVsZW1lbnQ6IGFueSxcbiAgICBrZXlmcmFtZXM6IMm1U3R5bGVEYXRhW10sIHByZVN0eWxlczogybVTdHlsZURhdGEgPSB7fSxcbiAgICBwb3N0U3R5bGVzOiDJtVN0eWxlRGF0YSA9IHt9KTogybVTdHlsZURhdGFbXSB7XG4gIGNvbnN0IGVycm9yczogc3RyaW5nW10gPSBbXTtcbiAgY29uc3Qgbm9ybWFsaXplZEtleWZyYW1lczogybVTdHlsZURhdGFbXSA9IFtdO1xuICBsZXQgcHJldmlvdXNPZmZzZXQgPSAtMTtcbiAgbGV0IHByZXZpb3VzS2V5ZnJhbWU6IMm1U3R5bGVEYXRhfG51bGwgPSBudWxsO1xuICBrZXlmcmFtZXMuZm9yRWFjaChrZiA9PiB7XG4gICAgY29uc3Qgb2Zmc2V0ID0ga2ZbJ29mZnNldCddIGFzIG51bWJlcjtcbiAgICBjb25zdCBpc1NhbWVPZmZzZXQgPSBvZmZzZXQgPT0gcHJldmlvdXNPZmZzZXQ7XG4gICAgY29uc3Qgbm9ybWFsaXplZEtleWZyYW1lOiDJtVN0eWxlRGF0YSA9IChpc1NhbWVPZmZzZXQgJiYgcHJldmlvdXNLZXlmcmFtZSkgfHwge307XG4gICAgT2JqZWN0LmtleXMoa2YpLmZvckVhY2gocHJvcCA9PiB7XG4gICAgICBsZXQgbm9ybWFsaXplZFByb3AgPSBwcm9wO1xuICAgICAgbGV0IG5vcm1hbGl6ZWRWYWx1ZSA9IGtmW3Byb3BdO1xuICAgICAgaWYgKHByb3AgIT09ICdvZmZzZXQnKSB7XG4gICAgICAgIG5vcm1hbGl6ZWRQcm9wID0gbm9ybWFsaXplci5ub3JtYWxpemVQcm9wZXJ0eU5hbWUobm9ybWFsaXplZFByb3AsIGVycm9ycyk7XG4gICAgICAgIHN3aXRjaCAobm9ybWFsaXplZFZhbHVlKSB7XG4gICAgICAgICAgY2FzZSBQUkVfU1RZTEU6XG4gICAgICAgICAgICBub3JtYWxpemVkVmFsdWUgPSBwcmVTdHlsZXNbcHJvcF07XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgQVVUT19TVFlMRTpcbiAgICAgICAgICAgIG5vcm1hbGl6ZWRWYWx1ZSA9IHBvc3RTdHlsZXNbcHJvcF07XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBub3JtYWxpemVkVmFsdWUgPVxuICAgICAgICAgICAgICAgIG5vcm1hbGl6ZXIubm9ybWFsaXplU3R5bGVWYWx1ZShwcm9wLCBub3JtYWxpemVkUHJvcCwgbm9ybWFsaXplZFZhbHVlLCBlcnJvcnMpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIG5vcm1hbGl6ZWRLZXlmcmFtZVtub3JtYWxpemVkUHJvcF0gPSBub3JtYWxpemVkVmFsdWU7XG4gICAgfSk7XG4gICAgaWYgKCFpc1NhbWVPZmZzZXQpIHtcbiAgICAgIG5vcm1hbGl6ZWRLZXlmcmFtZXMucHVzaChub3JtYWxpemVkS2V5ZnJhbWUpO1xuICAgIH1cbiAgICBwcmV2aW91c0tleWZyYW1lID0gbm9ybWFsaXplZEtleWZyYW1lO1xuICAgIHByZXZpb3VzT2Zmc2V0ID0gb2Zmc2V0O1xuICB9KTtcbiAgaWYgKGVycm9ycy5sZW5ndGgpIHtcbiAgICBjb25zdCBMSU5FX1NUQVJUID0gJ1xcbiAtICc7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgVW5hYmxlIHRvIGFuaW1hdGUgZHVlIHRvIHRoZSBmb2xsb3dpbmcgZXJyb3JzOiR7TElORV9TVEFSVH0ke2Vycm9ycy5qb2luKExJTkVfU1RBUlQpfWApO1xuICB9XG5cbiAgcmV0dXJuIG5vcm1hbGl6ZWRLZXlmcmFtZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsaXN0ZW5PblBsYXllcihcbiAgICBwbGF5ZXI6IEFuaW1hdGlvblBsYXllciwgZXZlbnROYW1lOiBzdHJpbmcsIGV2ZW50OiBBbmltYXRpb25FdmVudHx1bmRlZmluZWQsXG4gICAgY2FsbGJhY2s6IChldmVudDogYW55KSA9PiBhbnkpIHtcbiAgc3dpdGNoIChldmVudE5hbWUpIHtcbiAgICBjYXNlICdzdGFydCc6XG4gICAgICBwbGF5ZXIub25TdGFydCgoKSA9PiBjYWxsYmFjayhldmVudCAmJiBjb3B5QW5pbWF0aW9uRXZlbnQoZXZlbnQsICdzdGFydCcsIHBsYXllcikpKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ2RvbmUnOlxuICAgICAgcGxheWVyLm9uRG9uZSgoKSA9PiBjYWxsYmFjayhldmVudCAmJiBjb3B5QW5pbWF0aW9uRXZlbnQoZXZlbnQsICdkb25lJywgcGxheWVyKSkpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnZGVzdHJveSc6XG4gICAgICBwbGF5ZXIub25EZXN0cm95KCgpID0+IGNhbGxiYWNrKGV2ZW50ICYmIGNvcHlBbmltYXRpb25FdmVudChldmVudCwgJ2Rlc3Ryb3knLCBwbGF5ZXIpKSk7XG4gICAgICBicmVhaztcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY29weUFuaW1hdGlvbkV2ZW50KFxuICAgIGU6IEFuaW1hdGlvbkV2ZW50LCBwaGFzZU5hbWU6IHN0cmluZywgcGxheWVyOiBBbmltYXRpb25QbGF5ZXIpOiBBbmltYXRpb25FdmVudCB7XG4gIGNvbnN0IHRvdGFsVGltZSA9IHBsYXllci50b3RhbFRpbWU7XG4gIGNvbnN0IGRpc2FibGVkID0gKHBsYXllciBhcyBhbnkpLmRpc2FibGVkID8gdHJ1ZSA6IGZhbHNlO1xuICBjb25zdCBldmVudCA9IG1ha2VBbmltYXRpb25FdmVudChcbiAgICAgIGUuZWxlbWVudCwgZS50cmlnZ2VyTmFtZSwgZS5mcm9tU3RhdGUsIGUudG9TdGF0ZSwgcGhhc2VOYW1lIHx8IGUucGhhc2VOYW1lLFxuICAgICAgdG90YWxUaW1lID09IHVuZGVmaW5lZCA/IGUudG90YWxUaW1lIDogdG90YWxUaW1lLCBkaXNhYmxlZCk7XG4gIGNvbnN0IGRhdGEgPSAoZSBhcyBhbnkpWydfZGF0YSddO1xuICBpZiAoZGF0YSAhPSBudWxsKSB7XG4gICAgKGV2ZW50IGFzIGFueSlbJ19kYXRhJ10gPSBkYXRhO1xuICB9XG4gIHJldHVybiBldmVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VBbmltYXRpb25FdmVudChcbiAgICBlbGVtZW50OiBhbnksIHRyaWdnZXJOYW1lOiBzdHJpbmcsIGZyb21TdGF0ZTogc3RyaW5nLCB0b1N0YXRlOiBzdHJpbmcsIHBoYXNlTmFtZTogc3RyaW5nID0gJycsXG4gICAgdG90YWxUaW1lOiBudW1iZXIgPSAwLCBkaXNhYmxlZD86IGJvb2xlYW4pOiBBbmltYXRpb25FdmVudCB7XG4gIHJldHVybiB7ZWxlbWVudCwgdHJpZ2dlck5hbWUsIGZyb21TdGF0ZSwgdG9TdGF0ZSwgcGhhc2VOYW1lLCB0b3RhbFRpbWUsIGRpc2FibGVkOiAhIWRpc2FibGVkfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldE9yU2V0QXNJbk1hcChcbiAgICBtYXA6IE1hcDxhbnksIGFueT58e1trZXk6IHN0cmluZ106IGFueX0sIGtleTogYW55LCBkZWZhdWx0VmFsdWU6IGFueSkge1xuICBsZXQgdmFsdWU6IGFueTtcbiAgaWYgKG1hcCBpbnN0YW5jZW9mIE1hcCkge1xuICAgIHZhbHVlID0gbWFwLmdldChrZXkpO1xuICAgIGlmICghdmFsdWUpIHtcbiAgICAgIG1hcC5zZXQoa2V5LCB2YWx1ZSA9IGRlZmF1bHRWYWx1ZSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHZhbHVlID0gbWFwW2tleV07XG4gICAgaWYgKCF2YWx1ZSkge1xuICAgICAgdmFsdWUgPSBtYXBba2V5XSA9IGRlZmF1bHRWYWx1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHZhbHVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VUaW1lbGluZUNvbW1hbmQoY29tbWFuZDogc3RyaW5nKTogW3N0cmluZywgc3RyaW5nXSB7XG4gIGNvbnN0IHNlcGFyYXRvclBvcyA9IGNvbW1hbmQuaW5kZXhPZignOicpO1xuICBjb25zdCBpZCA9IGNvbW1hbmQuc3Vic3RyaW5nKDEsIHNlcGFyYXRvclBvcyk7XG4gIGNvbnN0IGFjdGlvbiA9IGNvbW1hbmQuc3Vic3RyKHNlcGFyYXRvclBvcyArIDEpO1xuICByZXR1cm4gW2lkLCBhY3Rpb25dO1xufVxuXG5sZXQgX2NvbnRhaW5zOiAoZWxtMTogYW55LCBlbG0yOiBhbnkpID0+IGJvb2xlYW4gPSAoZWxtMTogYW55LCBlbG0yOiBhbnkpID0+IGZhbHNlO1xubGV0IF9tYXRjaGVzOiAoZWxlbWVudDogYW55LCBzZWxlY3Rvcjogc3RyaW5nKSA9PiBib29sZWFuID0gKGVsZW1lbnQ6IGFueSwgc2VsZWN0b3I6IHN0cmluZykgPT5cbiAgICBmYWxzZTtcbmxldCBfcXVlcnk6IChlbGVtZW50OiBhbnksIHNlbGVjdG9yOiBzdHJpbmcsIG11bHRpOiBib29sZWFuKSA9PiBhbnlbXSA9XG4gICAgKGVsZW1lbnQ6IGFueSwgc2VsZWN0b3I6IHN0cmluZywgbXVsdGk6IGJvb2xlYW4pID0+IHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9O1xuXG4vLyBEZWZpbmUgdXRpbGl0eSBtZXRob2RzIGZvciBicm93c2VycyBhbmQgcGxhdGZvcm0tc2VydmVyKGRvbWlubykgd2hlcmUgRWxlbWVudFxuLy8gYW5kIHV0aWxpdHkgbWV0aG9kcyBleGlzdC5cbmNvbnN0IF9pc05vZGUgPSBpc05vZGUoKTtcbmlmIChfaXNOb2RlIHx8IHR5cGVvZiBFbGVtZW50ICE9PSAndW5kZWZpbmVkJykge1xuICAvLyB0aGlzIGlzIHdlbGwgc3VwcG9ydGVkIGluIGFsbCBicm93c2Vyc1xuICBfY29udGFpbnMgPSAoZWxtMTogYW55LCBlbG0yOiBhbnkpID0+IHtcbiAgICByZXR1cm4gZWxtMS5jb250YWlucyhlbG0yKSBhcyBib29sZWFuO1xuICB9O1xuXG4gIF9tYXRjaGVzID0gKCgpID0+IHtcbiAgICBpZiAoX2lzTm9kZSB8fCBFbGVtZW50LnByb3RvdHlwZS5tYXRjaGVzKSB7XG4gICAgICByZXR1cm4gKGVsZW1lbnQ6IGFueSwgc2VsZWN0b3I6IHN0cmluZykgPT4gZWxlbWVudC5tYXRjaGVzKHNlbGVjdG9yKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgcHJvdG8gPSBFbGVtZW50LnByb3RvdHlwZSBhcyBhbnk7XG4gICAgICBjb25zdCBmbiA9IHByb3RvLm1hdGNoZXNTZWxlY3RvciB8fCBwcm90by5tb3pNYXRjaGVzU2VsZWN0b3IgfHwgcHJvdG8ubXNNYXRjaGVzU2VsZWN0b3IgfHxcbiAgICAgICAgICBwcm90by5vTWF0Y2hlc1NlbGVjdG9yIHx8IHByb3RvLndlYmtpdE1hdGNoZXNTZWxlY3RvcjtcbiAgICAgIGlmIChmbikge1xuICAgICAgICByZXR1cm4gKGVsZW1lbnQ6IGFueSwgc2VsZWN0b3I6IHN0cmluZykgPT4gZm4uYXBwbHkoZWxlbWVudCwgW3NlbGVjdG9yXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gX21hdGNoZXM7XG4gICAgICB9XG4gICAgfVxuICB9KSgpO1xuXG4gIF9xdWVyeSA9IChlbGVtZW50OiBhbnksIHNlbGVjdG9yOiBzdHJpbmcsIG11bHRpOiBib29sZWFuKTogYW55W10gPT4ge1xuICAgIGxldCByZXN1bHRzOiBhbnlbXSA9IFtdO1xuICAgIGlmIChtdWx0aSkge1xuICAgICAgcmVzdWx0cy5wdXNoKC4uLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcikpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBlbG0gPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICAgICAgaWYgKGVsbSkge1xuICAgICAgICByZXN1bHRzLnB1c2goZWxtKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGNvbnRhaW5zVmVuZG9yUHJlZml4KHByb3A6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAvLyBXZWJraXQgaXMgdGhlIG9ubHkgcmVhbCBwb3B1bGFyIHZlbmRvciBwcmVmaXggbm93YWRheXNcbiAgLy8gY2M6IGh0dHA6Ly9zaG91bGRpcHJlZml4LmNvbS9cbiAgcmV0dXJuIHByb3Auc3Vic3RyaW5nKDEsIDYpID09ICdlYmtpdCc7ICAvLyB3ZWJraXQgb3IgV2Via2l0XG59XG5cbmxldCBfQ0FDSEVEX0JPRFk6IHtzdHlsZTogYW55fXxudWxsID0gbnVsbDtcbmxldCBfSVNfV0VCS0lUID0gZmFsc2U7XG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVTdHlsZVByb3BlcnR5KHByb3A6IHN0cmluZyk6IGJvb2xlYW4ge1xuICBpZiAoIV9DQUNIRURfQk9EWSkge1xuICAgIF9DQUNIRURfQk9EWSA9IGdldEJvZHlOb2RlKCkgfHwge307XG4gICAgX0lTX1dFQktJVCA9IF9DQUNIRURfQk9EWSEuc3R5bGUgPyAoJ1dlYmtpdEFwcGVhcmFuY2UnIGluIF9DQUNIRURfQk9EWSEuc3R5bGUpIDogZmFsc2U7XG4gIH1cblxuICBsZXQgcmVzdWx0ID0gdHJ1ZTtcbiAgaWYgKF9DQUNIRURfQk9EWSEuc3R5bGUgJiYgIWNvbnRhaW5zVmVuZG9yUHJlZml4KHByb3ApKSB7XG4gICAgcmVzdWx0ID0gcHJvcCBpbiBfQ0FDSEVEX0JPRFkhLnN0eWxlO1xuICAgIGlmICghcmVzdWx0ICYmIF9JU19XRUJLSVQpIHtcbiAgICAgIGNvbnN0IGNhbWVsUHJvcCA9ICdXZWJraXQnICsgcHJvcC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHByb3Auc3Vic3RyKDEpO1xuICAgICAgcmVzdWx0ID0gY2FtZWxQcm9wIGluIF9DQUNIRURfQk9EWSEuc3R5bGU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEJvZHlOb2RlKCk6IGFueXxudWxsIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCAhPSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiBkb2N1bWVudC5ib2R5O1xuICB9XG4gIHJldHVybiBudWxsO1xufVxuXG5leHBvcnQgY29uc3QgbWF0Y2hlc0VsZW1lbnQgPSBfbWF0Y2hlcztcbmV4cG9ydCBjb25zdCBjb250YWluc0VsZW1lbnQgPSBfY29udGFpbnM7XG5leHBvcnQgY29uc3QgaW52b2tlUXVlcnkgPSBfcXVlcnk7XG5cbmV4cG9ydCBmdW5jdGlvbiBoeXBlbmF0ZVByb3BzT2JqZWN0KG9iamVjdDoge1trZXk6IHN0cmluZ106IGFueX0pOiB7W2tleTogc3RyaW5nXTogYW55fSB7XG4gIGNvbnN0IG5ld09iajoge1trZXk6IHN0cmluZ106IGFueX0gPSB7fTtcbiAgT2JqZWN0LmtleXMob2JqZWN0KS5mb3JFYWNoKHByb3AgPT4ge1xuICAgIGNvbnN0IG5ld1Byb3AgPSBwcm9wLnJlcGxhY2UoLyhbYS16XSkoW0EtWl0pL2csICckMS0kMicpO1xuICAgIG5ld09ialtuZXdQcm9wXSA9IG9iamVjdFtwcm9wXTtcbiAgfSk7XG4gIHJldHVybiBuZXdPYmo7XG59XG4iXX0=
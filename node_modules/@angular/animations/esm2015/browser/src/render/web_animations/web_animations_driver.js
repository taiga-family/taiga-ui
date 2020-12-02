/**
 * @fileoverview added by tsickle
 * Generated from: packages/animations/browser/src/render/web_animations/web_animations_driver.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { allowPreviousPlayerStylesMerge, balancePreviousStylesIntoKeyframes, copyStyles } from '../../util';
import { CssKeyframesDriver } from '../css_keyframes/css_keyframes_driver';
import { containsElement, invokeQuery, isBrowser, matchesElement, validateStyleProperty } from '../shared';
import { packageNonAnimatableStyles } from '../special_cased_styles';
import { WebAnimationsPlayer } from './web_animations_player';
export class WebAnimationsDriver {
    constructor() {
        this._isNativeImpl = /\{\s*\[native\s+code\]\s*\}/.test(getElementAnimateFn().toString());
        this._cssKeyframesDriver = new CssKeyframesDriver();
    }
    /**
     * @param {?} prop
     * @return {?}
     */
    validateStyleProperty(prop) {
        return validateStyleProperty(prop);
    }
    /**
     * @param {?} element
     * @param {?} selector
     * @return {?}
     */
    matchesElement(element, selector) {
        return matchesElement(element, selector);
    }
    /**
     * @param {?} elm1
     * @param {?} elm2
     * @return {?}
     */
    containsElement(elm1, elm2) {
        return containsElement(elm1, elm2);
    }
    /**
     * @param {?} element
     * @param {?} selector
     * @param {?} multi
     * @return {?}
     */
    query(element, selector, multi) {
        return invokeQuery(element, selector, multi);
    }
    /**
     * @param {?} element
     * @param {?} prop
     * @param {?=} defaultValue
     * @return {?}
     */
    computeStyle(element, prop, defaultValue) {
        return (/** @type {?} */ (((/** @type {?} */ (window.getComputedStyle(element))))[prop]));
    }
    /**
     * @param {?} supported
     * @return {?}
     */
    overrideWebAnimationsSupport(supported) {
        this._isNativeImpl = supported;
    }
    /**
     * @param {?} element
     * @param {?} keyframes
     * @param {?} duration
     * @param {?} delay
     * @param {?} easing
     * @param {?=} previousPlayers
     * @param {?=} scrubberAccessRequested
     * @return {?}
     */
    animate(element, keyframes, duration, delay, easing, previousPlayers = [], scrubberAccessRequested) {
        /** @type {?} */
        const useKeyframes = !scrubberAccessRequested && !this._isNativeImpl;
        if (useKeyframes) {
            return this._cssKeyframesDriver.animate(element, keyframes, duration, delay, easing, previousPlayers);
        }
        /** @type {?} */
        const fill = delay == 0 ? 'both' : 'forwards';
        /** @type {?} */
        const playerOptions = { duration, delay, fill };
        // we check for this to avoid having a null|undefined value be present
        // for the easing (which results in an error for certain browsers #9752)
        if (easing) {
            playerOptions['easing'] = easing;
        }
        /** @type {?} */
        const previousStyles = {};
        /** @type {?} */
        const previousWebAnimationPlayers = (/** @type {?} */ (previousPlayers.filter((/**
         * @param {?} player
         * @return {?}
         */
        player => player instanceof WebAnimationsPlayer))));
        if (allowPreviousPlayerStylesMerge(duration, delay)) {
            previousWebAnimationPlayers.forEach((/**
             * @param {?} player
             * @return {?}
             */
            player => {
                /** @type {?} */
                let styles = player.currentSnapshot;
                Object.keys(styles).forEach((/**
                 * @param {?} prop
                 * @return {?}
                 */
                prop => previousStyles[prop] = styles[prop]));
            }));
        }
        keyframes = keyframes.map((/**
         * @param {?} styles
         * @return {?}
         */
        styles => copyStyles(styles, false)));
        keyframes = balancePreviousStylesIntoKeyframes(element, keyframes, previousStyles);
        /** @type {?} */
        const specialStyles = packageNonAnimatableStyles(element, keyframes);
        return new WebAnimationsPlayer(element, keyframes, playerOptions, specialStyles);
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    WebAnimationsDriver.prototype._isNativeImpl;
    /**
     * @type {?}
     * @private
     */
    WebAnimationsDriver.prototype._cssKeyframesDriver;
}
/**
 * @return {?}
 */
export function supportsWebAnimations() {
    return typeof getElementAnimateFn() === 'function';
}
/**
 * @return {?}
 */
function getElementAnimateFn() {
    return (isBrowser() && ((/** @type {?} */ (Element))).prototype['animate']) || {};
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2ViX2FuaW1hdGlvbnNfZHJpdmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYW5pbWF0aW9ucy9icm93c2VyL3NyYy9yZW5kZXIvd2ViX2FuaW1hdGlvbnMvd2ViX2FuaW1hdGlvbnNfZHJpdmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBU0EsT0FBTyxFQUFDLDhCQUE4QixFQUFFLGtDQUFrQyxFQUFFLFVBQVUsRUFBQyxNQUFNLFlBQVksQ0FBQztBQUUxRyxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSx1Q0FBdUMsQ0FBQztBQUN6RSxPQUFPLEVBQUMsZUFBZSxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsY0FBYyxFQUFFLHFCQUFxQixFQUFDLE1BQU0sV0FBVyxDQUFDO0FBQ3pHLE9BQU8sRUFBQywwQkFBMEIsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBRW5FLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBRTVELE1BQU0sT0FBTyxtQkFBbUI7SUFBaEM7UUFDVSxrQkFBYSxHQUFHLDZCQUE2QixDQUFDLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFDckYsd0JBQW1CLEdBQUcsSUFBSSxrQkFBa0IsRUFBRSxDQUFDO0lBMkR6RCxDQUFDOzs7OztJQXpEQyxxQkFBcUIsQ0FBQyxJQUFZO1FBQ2hDLE9BQU8scUJBQXFCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDckMsQ0FBQzs7Ozs7O0lBRUQsY0FBYyxDQUFDLE9BQVksRUFBRSxRQUFnQjtRQUMzQyxPQUFPLGNBQWMsQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDM0MsQ0FBQzs7Ozs7O0lBRUQsZUFBZSxDQUFDLElBQVMsRUFBRSxJQUFTO1FBQ2xDLE9BQU8sZUFBZSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNyQyxDQUFDOzs7Ozs7O0lBRUQsS0FBSyxDQUFDLE9BQVksRUFBRSxRQUFnQixFQUFFLEtBQWM7UUFDbEQsT0FBTyxXQUFXLENBQUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUMvQyxDQUFDOzs7Ozs7O0lBRUQsWUFBWSxDQUFDLE9BQVksRUFBRSxJQUFZLEVBQUUsWUFBcUI7UUFDNUQsT0FBTyxtQkFBQSxDQUFDLG1CQUFBLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsRUFBTyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQVUsQ0FBQztJQUNuRSxDQUFDOzs7OztJQUVELDRCQUE0QixDQUFDLFNBQWtCO1FBQzdDLElBQUksQ0FBQyxhQUFhLEdBQUcsU0FBUyxDQUFDO0lBQ2pDLENBQUM7Ozs7Ozs7Ozs7O0lBRUQsT0FBTyxDQUNILE9BQVksRUFBRSxTQUF1QixFQUFFLFFBQWdCLEVBQUUsS0FBYSxFQUFFLE1BQWMsRUFDdEYsa0JBQXFDLEVBQUUsRUFBRSx1QkFBaUM7O2NBQ3RFLFlBQVksR0FBRyxDQUFDLHVCQUF1QixJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWE7UUFDcEUsSUFBSSxZQUFZLEVBQUU7WUFDaEIsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUMsT0FBTyxDQUNuQyxPQUFPLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLGVBQWUsQ0FBQyxDQUFDO1NBQ25FOztjQUVLLElBQUksR0FBRyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLFVBQVU7O2NBQ3ZDLGFBQWEsR0FBbUMsRUFBQyxRQUFRLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBQztRQUM3RSxzRUFBc0U7UUFDdEUsd0VBQXdFO1FBQ3hFLElBQUksTUFBTSxFQUFFO1lBQ1YsYUFBYSxDQUFDLFFBQVEsQ0FBQyxHQUFHLE1BQU0sQ0FBQztTQUNsQzs7Y0FFSyxjQUFjLEdBQXlCLEVBQUU7O2NBQ3pDLDJCQUEyQixHQUFHLG1CQUF1QixlQUFlLENBQUMsTUFBTTs7OztRQUM3RSxNQUFNLENBQUMsRUFBRSxDQUFDLE1BQU0sWUFBWSxtQkFBbUIsRUFBQyxFQUFBO1FBRXBELElBQUksOEJBQThCLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxFQUFFO1lBQ25ELDJCQUEyQixDQUFDLE9BQU87Ozs7WUFBQyxNQUFNLENBQUMsRUFBRTs7b0JBQ3ZDLE1BQU0sR0FBRyxNQUFNLENBQUMsZUFBZTtnQkFDbkMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPOzs7O2dCQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFDO1lBQzNFLENBQUMsRUFBQyxDQUFDO1NBQ0o7UUFFRCxTQUFTLEdBQUcsU0FBUyxDQUFDLEdBQUc7Ozs7UUFBQyxNQUFNLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLEVBQUMsQ0FBQztRQUMvRCxTQUFTLEdBQUcsa0NBQWtDLENBQUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxjQUFjLENBQUMsQ0FBQzs7Y0FDN0UsYUFBYSxHQUFHLDBCQUEwQixDQUFDLE9BQU8sRUFBRSxTQUFTLENBQUM7UUFDcEUsT0FBTyxJQUFJLG1CQUFtQixDQUFDLE9BQU8sRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLGFBQWEsQ0FBQyxDQUFDO0lBQ25GLENBQUM7Q0FDRjs7Ozs7O0lBNURDLDRDQUE2Rjs7Ozs7SUFDN0Ysa0RBQXVEOzs7OztBQTZEekQsTUFBTSxVQUFVLHFCQUFxQjtJQUNuQyxPQUFPLE9BQU8sbUJBQW1CLEVBQUUsS0FBSyxVQUFVLENBQUM7QUFDckQsQ0FBQzs7OztBQUVELFNBQVMsbUJBQW1CO0lBQzFCLE9BQU8sQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLG1CQUFLLE9BQU8sRUFBQSxDQUFDLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO0FBQ3BFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5pbXBvcnQge0FuaW1hdGlvblBsYXllciwgybVTdHlsZURhdGF9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuXG5pbXBvcnQge2FsbG93UHJldmlvdXNQbGF5ZXJTdHlsZXNNZXJnZSwgYmFsYW5jZVByZXZpb3VzU3R5bGVzSW50b0tleWZyYW1lcywgY29weVN0eWxlc30gZnJvbSAnLi4vLi4vdXRpbCc7XG5pbXBvcnQge0FuaW1hdGlvbkRyaXZlcn0gZnJvbSAnLi4vYW5pbWF0aW9uX2RyaXZlcic7XG5pbXBvcnQge0Nzc0tleWZyYW1lc0RyaXZlcn0gZnJvbSAnLi4vY3NzX2tleWZyYW1lcy9jc3Nfa2V5ZnJhbWVzX2RyaXZlcic7XG5pbXBvcnQge2NvbnRhaW5zRWxlbWVudCwgaW52b2tlUXVlcnksIGlzQnJvd3NlciwgbWF0Y2hlc0VsZW1lbnQsIHZhbGlkYXRlU3R5bGVQcm9wZXJ0eX0gZnJvbSAnLi4vc2hhcmVkJztcbmltcG9ydCB7cGFja2FnZU5vbkFuaW1hdGFibGVTdHlsZXN9IGZyb20gJy4uL3NwZWNpYWxfY2FzZWRfc3R5bGVzJztcblxuaW1wb3J0IHtXZWJBbmltYXRpb25zUGxheWVyfSBmcm9tICcuL3dlYl9hbmltYXRpb25zX3BsYXllcic7XG5cbmV4cG9ydCBjbGFzcyBXZWJBbmltYXRpb25zRHJpdmVyIGltcGxlbWVudHMgQW5pbWF0aW9uRHJpdmVyIHtcbiAgcHJpdmF0ZSBfaXNOYXRpdmVJbXBsID0gL1xce1xccypcXFtuYXRpdmVcXHMrY29kZVxcXVxccypcXH0vLnRlc3QoZ2V0RWxlbWVudEFuaW1hdGVGbigpLnRvU3RyaW5nKCkpO1xuICBwcml2YXRlIF9jc3NLZXlmcmFtZXNEcml2ZXIgPSBuZXcgQ3NzS2V5ZnJhbWVzRHJpdmVyKCk7XG5cbiAgdmFsaWRhdGVTdHlsZVByb3BlcnR5KHByb3A6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB2YWxpZGF0ZVN0eWxlUHJvcGVydHkocHJvcCk7XG4gIH1cblxuICBtYXRjaGVzRWxlbWVudChlbGVtZW50OiBhbnksIHNlbGVjdG9yOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gbWF0Y2hlc0VsZW1lbnQoZWxlbWVudCwgc2VsZWN0b3IpO1xuICB9XG5cbiAgY29udGFpbnNFbGVtZW50KGVsbTE6IGFueSwgZWxtMjogYW55KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGNvbnRhaW5zRWxlbWVudChlbG0xLCBlbG0yKTtcbiAgfVxuXG4gIHF1ZXJ5KGVsZW1lbnQ6IGFueSwgc2VsZWN0b3I6IHN0cmluZywgbXVsdGk6IGJvb2xlYW4pOiBhbnlbXSB7XG4gICAgcmV0dXJuIGludm9rZVF1ZXJ5KGVsZW1lbnQsIHNlbGVjdG9yLCBtdWx0aSk7XG4gIH1cblxuICBjb21wdXRlU3R5bGUoZWxlbWVudDogYW55LCBwcm9wOiBzdHJpbmcsIGRlZmF1bHRWYWx1ZT86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuICh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KSBhcyBhbnkpW3Byb3BdIGFzIHN0cmluZztcbiAgfVxuXG4gIG92ZXJyaWRlV2ViQW5pbWF0aW9uc1N1cHBvcnQoc3VwcG9ydGVkOiBib29sZWFuKSB7XG4gICAgdGhpcy5faXNOYXRpdmVJbXBsID0gc3VwcG9ydGVkO1xuICB9XG5cbiAgYW5pbWF0ZShcbiAgICAgIGVsZW1lbnQ6IGFueSwga2V5ZnJhbWVzOiDJtVN0eWxlRGF0YVtdLCBkdXJhdGlvbjogbnVtYmVyLCBkZWxheTogbnVtYmVyLCBlYXNpbmc6IHN0cmluZyxcbiAgICAgIHByZXZpb3VzUGxheWVyczogQW5pbWF0aW9uUGxheWVyW10gPSBbXSwgc2NydWJiZXJBY2Nlc3NSZXF1ZXN0ZWQ/OiBib29sZWFuKTogQW5pbWF0aW9uUGxheWVyIHtcbiAgICBjb25zdCB1c2VLZXlmcmFtZXMgPSAhc2NydWJiZXJBY2Nlc3NSZXF1ZXN0ZWQgJiYgIXRoaXMuX2lzTmF0aXZlSW1wbDtcbiAgICBpZiAodXNlS2V5ZnJhbWVzKSB7XG4gICAgICByZXR1cm4gdGhpcy5fY3NzS2V5ZnJhbWVzRHJpdmVyLmFuaW1hdGUoXG4gICAgICAgICAgZWxlbWVudCwga2V5ZnJhbWVzLCBkdXJhdGlvbiwgZGVsYXksIGVhc2luZywgcHJldmlvdXNQbGF5ZXJzKTtcbiAgICB9XG5cbiAgICBjb25zdCBmaWxsID0gZGVsYXkgPT0gMCA/ICdib3RoJyA6ICdmb3J3YXJkcyc7XG4gICAgY29uc3QgcGxheWVyT3B0aW9uczoge1trZXk6IHN0cmluZ106IHN0cmluZ3xudW1iZXJ9ID0ge2R1cmF0aW9uLCBkZWxheSwgZmlsbH07XG4gICAgLy8gd2UgY2hlY2sgZm9yIHRoaXMgdG8gYXZvaWQgaGF2aW5nIGEgbnVsbHx1bmRlZmluZWQgdmFsdWUgYmUgcHJlc2VudFxuICAgIC8vIGZvciB0aGUgZWFzaW5nICh3aGljaCByZXN1bHRzIGluIGFuIGVycm9yIGZvciBjZXJ0YWluIGJyb3dzZXJzICM5NzUyKVxuICAgIGlmIChlYXNpbmcpIHtcbiAgICAgIHBsYXllck9wdGlvbnNbJ2Vhc2luZyddID0gZWFzaW5nO1xuICAgIH1cblxuICAgIGNvbnN0IHByZXZpb3VzU3R5bGVzOiB7W2tleTogc3RyaW5nXTogYW55fSA9IHt9O1xuICAgIGNvbnN0IHByZXZpb3VzV2ViQW5pbWF0aW9uUGxheWVycyA9IDxXZWJBbmltYXRpb25zUGxheWVyW10+cHJldmlvdXNQbGF5ZXJzLmZpbHRlcihcbiAgICAgICAgcGxheWVyID0+IHBsYXllciBpbnN0YW5jZW9mIFdlYkFuaW1hdGlvbnNQbGF5ZXIpO1xuXG4gICAgaWYgKGFsbG93UHJldmlvdXNQbGF5ZXJTdHlsZXNNZXJnZShkdXJhdGlvbiwgZGVsYXkpKSB7XG4gICAgICBwcmV2aW91c1dlYkFuaW1hdGlvblBsYXllcnMuZm9yRWFjaChwbGF5ZXIgPT4ge1xuICAgICAgICBsZXQgc3R5bGVzID0gcGxheWVyLmN1cnJlbnRTbmFwc2hvdDtcbiAgICAgICAgT2JqZWN0LmtleXMoc3R5bGVzKS5mb3JFYWNoKHByb3AgPT4gcHJldmlvdXNTdHlsZXNbcHJvcF0gPSBzdHlsZXNbcHJvcF0pO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAga2V5ZnJhbWVzID0ga2V5ZnJhbWVzLm1hcChzdHlsZXMgPT4gY29weVN0eWxlcyhzdHlsZXMsIGZhbHNlKSk7XG4gICAga2V5ZnJhbWVzID0gYmFsYW5jZVByZXZpb3VzU3R5bGVzSW50b0tleWZyYW1lcyhlbGVtZW50LCBrZXlmcmFtZXMsIHByZXZpb3VzU3R5bGVzKTtcbiAgICBjb25zdCBzcGVjaWFsU3R5bGVzID0gcGFja2FnZU5vbkFuaW1hdGFibGVTdHlsZXMoZWxlbWVudCwga2V5ZnJhbWVzKTtcbiAgICByZXR1cm4gbmV3IFdlYkFuaW1hdGlvbnNQbGF5ZXIoZWxlbWVudCwga2V5ZnJhbWVzLCBwbGF5ZXJPcHRpb25zLCBzcGVjaWFsU3R5bGVzKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VwcG9ydHNXZWJBbmltYXRpb25zKCkge1xuICByZXR1cm4gdHlwZW9mIGdldEVsZW1lbnRBbmltYXRlRm4oKSA9PT0gJ2Z1bmN0aW9uJztcbn1cblxuZnVuY3Rpb24gZ2V0RWxlbWVudEFuaW1hdGVGbigpOiBhbnkge1xuICByZXR1cm4gKGlzQnJvd3NlcigpICYmICg8YW55PkVsZW1lbnQpLnByb3RvdHlwZVsnYW5pbWF0ZSddKSB8fCB7fTtcbn1cbiJdfQ==
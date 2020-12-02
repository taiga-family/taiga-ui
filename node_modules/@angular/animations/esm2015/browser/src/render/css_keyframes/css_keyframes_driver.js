/**
 * @fileoverview added by tsickle
 * Generated from: packages/animations/browser/src/render/css_keyframes/css_keyframes_driver.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { allowPreviousPlayerStylesMerge, balancePreviousStylesIntoKeyframes } from '../../util';
import { containsElement, hypenatePropsObject, invokeQuery, matchesElement, validateStyleProperty } from '../shared';
import { packageNonAnimatableStyles } from '../special_cased_styles';
import { CssKeyframesPlayer } from './css_keyframes_player';
import { DirectStylePlayer } from './direct_style_player';
/** @type {?} */
const KEYFRAMES_NAME_PREFIX = 'gen_css_kf_';
/** @type {?} */
const TAB_SPACE = ' ';
export class CssKeyframesDriver {
    constructor() {
        this._count = 0;
        this._head = document.querySelector('head');
        this._warningIssued = false;
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
     * @param {?} element
     * @param {?} name
     * @param {?} keyframes
     * @return {?}
     */
    buildKeyframeElement(element, name, keyframes) {
        keyframes = keyframes.map((/**
         * @param {?} kf
         * @return {?}
         */
        kf => hypenatePropsObject(kf)));
        /** @type {?} */
        let keyframeStr = `@keyframes ${name} {\n`;
        /** @type {?} */
        let tab = '';
        keyframes.forEach((/**
         * @param {?} kf
         * @return {?}
         */
        kf => {
            tab = TAB_SPACE;
            /** @type {?} */
            const offset = parseFloat(kf['offset']);
            keyframeStr += `${tab}${offset * 100}% {\n`;
            tab += TAB_SPACE;
            Object.keys(kf).forEach((/**
             * @param {?} prop
             * @return {?}
             */
            prop => {
                /** @type {?} */
                const value = kf[prop];
                switch (prop) {
                    case 'offset':
                        return;
                    case 'easing':
                        if (value) {
                            keyframeStr += `${tab}animation-timing-function: ${value};\n`;
                        }
                        return;
                    default:
                        keyframeStr += `${tab}${prop}: ${value};\n`;
                        return;
                }
            }));
            keyframeStr += `${tab}}\n`;
        }));
        keyframeStr += `}\n`;
        /** @type {?} */
        const kfElm = document.createElement('style');
        kfElm.innerHTML = keyframeStr;
        return kfElm;
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
        if (scrubberAccessRequested) {
            this._notifyFaultyScrubber();
        }
        /** @type {?} */
        const previousCssKeyframePlayers = (/** @type {?} */ (previousPlayers.filter((/**
         * @param {?} player
         * @return {?}
         */
        player => player instanceof CssKeyframesPlayer))));
        /** @type {?} */
        const previousStyles = {};
        if (allowPreviousPlayerStylesMerge(duration, delay)) {
            previousCssKeyframePlayers.forEach((/**
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
        keyframes = balancePreviousStylesIntoKeyframes(element, keyframes, previousStyles);
        /** @type {?} */
        const finalStyles = flattenKeyframesIntoStyles(keyframes);
        // if there is no animation then there is no point in applying
        // styles and waiting for an event to get fired. This causes lag.
        // It's better to just directly apply the styles to the element
        // via the direct styling animation player.
        if (duration == 0) {
            return new DirectStylePlayer(element, finalStyles);
        }
        /** @type {?} */
        const animationName = `${KEYFRAMES_NAME_PREFIX}${this._count++}`;
        /** @type {?} */
        const kfElm = this.buildKeyframeElement(element, animationName, keyframes);
        (/** @type {?} */ (document.querySelector('head'))).appendChild(kfElm);
        /** @type {?} */
        const specialStyles = packageNonAnimatableStyles(element, keyframes);
        /** @type {?} */
        const player = new CssKeyframesPlayer(element, keyframes, animationName, duration, delay, easing, finalStyles, specialStyles);
        player.onDestroy((/**
         * @return {?}
         */
        () => removeElement(kfElm)));
        return player;
    }
    /**
     * @private
     * @return {?}
     */
    _notifyFaultyScrubber() {
        if (!this._warningIssued) {
            console.warn('@angular/animations: please load the web-animations.js polyfill to allow programmatic access...\n', '  visit http://bit.ly/IWukam to learn more about using the web-animation-js polyfill.');
            this._warningIssued = true;
        }
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    CssKeyframesDriver.prototype._count;
    /**
     * @type {?}
     * @private
     */
    CssKeyframesDriver.prototype._head;
    /**
     * @type {?}
     * @private
     */
    CssKeyframesDriver.prototype._warningIssued;
}
/**
 * @param {?} keyframes
 * @return {?}
 */
function flattenKeyframesIntoStyles(keyframes) {
    /** @type {?} */
    let flatKeyframes = {};
    if (keyframes) {
        /** @type {?} */
        const kfs = Array.isArray(keyframes) ? keyframes : [keyframes];
        kfs.forEach((/**
         * @param {?} kf
         * @return {?}
         */
        kf => {
            Object.keys(kf).forEach((/**
             * @param {?} prop
             * @return {?}
             */
            prop => {
                if (prop == 'offset' || prop == 'easing')
                    return;
                flatKeyframes[prop] = kf[prop];
            }));
        }));
    }
    return flatKeyframes;
}
/**
 * @param {?} node
 * @return {?}
 */
function removeElement(node) {
    node.parentNode.removeChild(node);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3NzX2tleWZyYW1lc19kcml2ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9hbmltYXRpb25zL2Jyb3dzZXIvc3JjL3JlbmRlci9jc3Nfa2V5ZnJhbWVzL2Nzc19rZXlmcmFtZXNfZHJpdmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBU0EsT0FBTyxFQUFDLDhCQUE4QixFQUFFLGtDQUFrQyxFQUFlLE1BQU0sWUFBWSxDQUFDO0FBRTVHLE9BQU8sRUFBQyxlQUFlLEVBQUUsbUJBQW1CLEVBQUUsV0FBVyxFQUFFLGNBQWMsRUFBRSxxQkFBcUIsRUFBQyxNQUFNLFdBQVcsQ0FBQztBQUNuSCxPQUFPLEVBQUMsMEJBQTBCLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUVuRSxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUMxRCxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQzs7TUFFbEQscUJBQXFCLEdBQUcsYUFBYTs7TUFDckMsU0FBUyxHQUFHLEdBQUc7QUFFckIsTUFBTSxPQUFPLGtCQUFrQjtJQUEvQjtRQUNVLFdBQU0sR0FBRyxDQUFDLENBQUM7UUFDRixVQUFLLEdBQVEsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNyRCxtQkFBYyxHQUFHLEtBQUssQ0FBQztJQXlHakMsQ0FBQzs7Ozs7SUF2R0MscUJBQXFCLENBQUMsSUFBWTtRQUNoQyxPQUFPLHFCQUFxQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3JDLENBQUM7Ozs7OztJQUVELGNBQWMsQ0FBQyxPQUFZLEVBQUUsUUFBZ0I7UUFDM0MsT0FBTyxjQUFjLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQzNDLENBQUM7Ozs7OztJQUVELGVBQWUsQ0FBQyxJQUFTLEVBQUUsSUFBUztRQUNsQyxPQUFPLGVBQWUsQ0FBQyxJQUFJ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OztJQTNHQyxvQ0FBbUI7Ozs7O0lBQ25CLG1DQUE2RDs7Ozs7SUFDN0QsNENBQStCOzs7Ozs7QUEyR2pDLFNBQVMsMEJBQTBCLENBQUMsU0FDc0I7O1FBQ3BELGFBQWEsR0FBeUIsRUFBRTtJQUM1QyxJQUFJLFNBQVMsRUFBRTs7Y0FDUCxHQUFHLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUM5RCxHQUFHLENBQUMsT0FBTzs7OztRQUFDLEVBQUUsQ0FBQyxFQUFFO1lBQ2YsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPOzs7O1lBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQzdCLElBQUksSUFBSSxJQUFJLFFBQVEsSUFBSSxJQUFJLElBQUksUUFBUTtvQkFBRSxPQUFPO2dCQUNqRCxhQUFhLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2pDLENBQUMsRUFBQyxDQUFDO1FBQ0wsQ0FBQyxFQUFDLENBQUM7S0FDSjtJQUNELE9BQU8sYUFBYSxDQUFDO0FBQ3ZCLENBQUM7Ozs7O0FBRUQsU0FBUyxhQUFhLENBQUMsSUFBUztJQUM5QixJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNwQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuaW1wb3J0IHtBbmltYXRpb25QbGF5ZXIsIMm1U3R5bGVEYXRhfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcblxuaW1wb3J0IHthbGxvd1ByZXZpb3VzUGxheWVyU3R5bGVzTWVyZ2UsIGJhbGFuY2VQcmV2aW91c1N0eWxlc0ludG9LZXlmcmFtZXMsIGNvbXB1dGVTdHlsZX0gZnJvbSAnLi4vLi4vdXRpbCc7XG5pbXBvcnQge0FuaW1hdGlvbkRyaXZlcn0gZnJvbSAnLi4vYW5pbWF0aW9uX2RyaXZlcic7XG5pbXBvcnQge2NvbnRhaW5zRWxlbWVudCwgaHlwZW5hdGVQcm9wc09iamVjdCwgaW52b2tlUXVlcnksIG1hdGNoZXNFbGVtZW50LCB2YWxpZGF0ZVN0eWxlUHJvcGVydHl9IGZyb20gJy4uL3NoYXJlZCc7XG5pbXBvcnQge3BhY2thZ2VOb25BbmltYXRhYmxlU3R5bGVzfSBmcm9tICcuLi9zcGVjaWFsX2Nhc2VkX3N0eWxlcyc7XG5cbmltcG9ydCB7Q3NzS2V5ZnJhbWVzUGxheWVyfSBmcm9tICcuL2Nzc19rZXlmcmFtZXNfcGxheWVyJztcbmltcG9ydCB7RGlyZWN0U3R5bGVQbGF5ZXJ9IGZyb20gJy4vZGlyZWN0X3N0eWxlX3BsYXllcic7XG5cbmNvbnN0IEtFWUZSQU1FU19OQU1FX1BSRUZJWCA9ICdnZW5fY3NzX2tmXyc7XG5jb25zdCBUQUJfU1BBQ0UgPSAnICc7XG5cbmV4cG9ydCBjbGFzcyBDc3NLZXlmcmFtZXNEcml2ZXIgaW1wbGVtZW50cyBBbmltYXRpb25Ecml2ZXIge1xuICBwcml2YXRlIF9jb3VudCA9IDA7XG4gIHByaXZhdGUgcmVhZG9ubHkgX2hlYWQ6IGFueSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWQnKTtcbiAgcHJpdmF0ZSBfd2FybmluZ0lzc3VlZCA9IGZhbHNlO1xuXG4gIHZhbGlkYXRlU3R5bGVQcm9wZXJ0eShwcm9wOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdmFsaWRhdGVTdHlsZVByb3BlcnR5KHByb3ApO1xuICB9XG5cbiAgbWF0Y2hlc0VsZW1lbnQoZWxlbWVudDogYW55LCBzZWxlY3Rvcjogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIG1hdGNoZXNFbGVtZW50KGVsZW1lbnQsIHNlbGVjdG9yKTtcbiAgfVxuXG4gIGNvbnRhaW5zRWxlbWVudChlbG0xOiBhbnksIGVsbTI6IGFueSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBjb250YWluc0VsZW1lbnQoZWxtMSwgZWxtMik7XG4gIH1cblxuICBxdWVyeShlbGVtZW50OiBhbnksIHNlbGVjdG9yOiBzdHJpbmcsIG11bHRpOiBib29sZWFuKTogYW55W10ge1xuICAgIHJldHVybiBpbnZva2VRdWVyeShlbGVtZW50LCBzZWxlY3RvciwgbXVsdGkpO1xuICB9XG5cbiAgY29tcHV0ZVN0eWxlKGVsZW1lbnQ6IGFueSwgcHJvcDogc3RyaW5nLCBkZWZhdWx0VmFsdWU/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiAod2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCkgYXMgYW55KVtwcm9wXSBhcyBzdHJpbmc7XG4gIH1cblxuICBidWlsZEtleWZyYW1lRWxlbWVudChlbGVtZW50OiBhbnksIG5hbWU6IHN0cmluZywga2V5ZnJhbWVzOiB7W2tleTogc3RyaW5nXTogYW55fVtdKTogYW55IHtcbiAgICBrZXlmcmFtZXMgPSBrZXlmcmFtZXMubWFwKGtmID0+IGh5cGVuYXRlUHJvcHNPYmplY3Qoa2YpKTtcbiAgICBsZXQga2V5ZnJhbWVTdHIgPSBgQGtleWZyYW1lcyAke25hbWV9IHtcXG5gO1xuICAgIGxldCB0YWIgPSAnJztcbiAgICBrZXlmcmFtZXMuZm9yRWFjaChrZiA9PiB7XG4gICAgICB0YWIgPSBUQUJfU1BBQ0U7XG4gICAgICBjb25zdCBvZmZzZXQgPSBwYXJzZUZsb2F0KGtmWydvZmZzZXQnXSk7XG4gICAgICBrZXlmcmFtZVN0ciArPSBgJHt0YWJ9JHtvZmZzZXQgKiAxMDB9JSB7XFxuYDtcbiAgICAgIHRhYiArPSBUQUJfU1BBQ0U7XG4gICAgICBPYmplY3Qua2V5cyhrZikuZm9yRWFjaChwcm9wID0+IHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBrZltwcm9wXTtcbiAgICAgICAgc3dpdGNoIChwcm9wKSB7XG4gICAgICAgICAgY2FzZSAnb2Zmc2V0JzpcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICBjYXNlICdlYXNpbmcnOlxuICAgICAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICAgIGtleWZyYW1lU3RyICs9IGAke3RhYn1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiAke3ZhbHVlfTtcXG5gO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBrZXlmcmFtZVN0ciArPSBgJHt0YWJ9JHtwcm9wfTogJHt2YWx1ZX07XFxuYDtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBrZXlmcmFtZVN0ciArPSBgJHt0YWJ9fVxcbmA7XG4gICAgfSk7XG4gICAga2V5ZnJhbWVTdHIgKz0gYH1cXG5gO1xuXG4gICAgY29uc3Qga2ZFbG0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgIGtmRWxtLmlubmVySFRNTCA9IGtleWZyYW1lU3RyO1xuICAgIHJldHVybiBrZkVsbTtcbiAgfVxuXG4gIGFuaW1hdGUoXG4gICAgICBlbGVtZW50OiBhbnksIGtleWZyYW1lczogybVTdHlsZURhdGFbXSwgZHVyYXRpb246IG51bWJlciwgZGVsYXk6IG51bWJlciwgZWFzaW5nOiBzdHJpbmcsXG4gICAgICBwcmV2aW91c1BsYXllcnM6IEFuaW1hdGlvblBsYXllcltdID0gW10sIHNjcnViYmVyQWNjZXNzUmVxdWVzdGVkPzogYm9vbGVhbik6IEFuaW1hdGlvblBsYXllciB7XG4gICAgaWYgKHNjcnViYmVyQWNjZXNzUmVxdWVzdGVkKSB7XG4gICAgICB0aGlzLl9ub3RpZnlGYXVsdHlTY3J1YmJlcigpO1xuICAgIH1cblxuICAgIGNvbnN0IHByZXZpb3VzQ3NzS2V5ZnJhbWVQbGF5ZXJzID0gPENzc0tleWZyYW1lc1BsYXllcltdPnByZXZpb3VzUGxheWVycy5maWx0ZXIoXG4gICAgICAgIHBsYXllciA9PiBwbGF5ZXIgaW5zdGFuY2VvZiBDc3NLZXlmcmFtZXNQbGF5ZXIpO1xuXG4gICAgY29uc3QgcHJldmlvdXNTdHlsZXM6IHtba2V5OiBzdHJpbmddOiBhbnl9ID0ge307XG5cbiAgICBpZiAoYWxsb3dQcmV2aW91c1BsYXllclN0eWxlc01lcmdlKGR1cmF0aW9uLCBkZWxheSkpIHtcbiAgICAgIHByZXZpb3VzQ3NzS2V5ZnJhbWVQbGF5ZXJzLmZvckVhY2gocGxheWVyID0+IHtcbiAgICAgICAgbGV0IHN0eWxlcyA9IHBsYXllci5jdXJyZW50U25hcHNob3Q7XG4gICAgICAgIE9iamVjdC5rZXlzKHN0eWxlcykuZm9yRWFjaChwcm9wID0+IHByZXZpb3VzU3R5bGVzW3Byb3BdID0gc3R5bGVzW3Byb3BdKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGtleWZyYW1lcyA9IGJhbGFuY2VQcmV2aW91c1N0eWxlc0ludG9LZXlmcmFtZXMoZWxlbWVudCwga2V5ZnJhbWVzLCBwcmV2aW91c1N0eWxlcyk7XG4gICAgY29uc3QgZmluYWxTdHlsZXMgPSBmbGF0dGVuS2V5ZnJhbWVzSW50b1N0eWxlcyhrZXlmcmFtZXMpO1xuXG4gICAgLy8gaWYgdGhlcmUgaXMgbm8gYW5pbWF0aW9uIHRoZW4gdGhlcmUgaXMgbm8gcG9pbnQgaW4gYXBwbHlpbmdcbiAgICAvLyBzdHlsZXMgYW5kIHdhaXRpbmcgZm9yIGFuIGV2ZW50IHRvIGdldCBmaXJlZC4gVGhpcyBjYXVzZXMgbGFnLlxuICAgIC8vIEl0J3MgYmV0dGVyIHRvIGp1c3QgZGlyZWN0bHkgYXBwbHkgdGhlIHN0eWxlcyB0byB0aGUgZWxlbWVudFxuICAgIC8vIHZpYSB0aGUgZGlyZWN0IHN0eWxpbmcgYW5pbWF0aW9uIHBsYXllci5cbiAgICBpZiAoZHVyYXRpb24gPT0gMCkge1xuICAgICAgcmV0dXJuIG5ldyBEaXJlY3RTdHlsZVBsYXllcihlbGVtZW50LCBmaW5hbFN0eWxlcyk7XG4gICAgfVxuXG4gICAgY29uc3QgYW5pbWF0aW9uTmFtZSA9IGAke0tFWUZSQU1FU19OQU1FX1BSRUZJWH0ke3RoaXMuX2NvdW50Kyt9YDtcbiAgICBjb25zdCBrZkVsbSA9IHRoaXMuYnVpbGRLZXlmcmFtZUVsZW1lbnQoZWxlbWVudCwgYW5pbWF0aW9uTmFtZSwga2V5ZnJhbWVzKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkJykhLmFwcGVuZENoaWxkKGtmRWxtKTtcblxuICAgIGNvbnN0IHNwZWNpYWxTdHlsZXMgPSBwYWNrYWdlTm9uQW5pbWF0YWJsZVN0eWxlcyhlbGVtZW50LCBrZXlmcmFtZXMpO1xuICAgIGNvbnN0IHBsYXllciA9IG5ldyBDc3NLZXlmcmFtZXNQbGF5ZXIoXG4gICAgICAgIGVsZW1lbnQsIGtleWZyYW1lcywgYW5pbWF0aW9uTmFtZSwgZHVyYXRpb24sIGRlbGF5LCBlYXNpbmcsIGZpbmFsU3R5bGVzLCBzcGVjaWFsU3R5bGVzKTtcblxuICAgIHBsYXllci5vbkRlc3Ryb3koKCkgPT4gcmVtb3ZlRWxlbWVudChrZkVsbSkpO1xuICAgIHJldHVybiBwbGF5ZXI7XG4gIH1cblxuICBwcml2YXRlIF9ub3RpZnlGYXVsdHlTY3J1YmJlcigpIHtcbiAgICBpZiAoIXRoaXMuX3dhcm5pbmdJc3N1ZWQpIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAnQGFuZ3VsYXIvYW5pbWF0aW9uczogcGxlYXNlIGxvYWQgdGhlIHdlYi1hbmltYXRpb25zLmpzIHBvbHlmaWxsIHRvIGFsbG93IHByb2dyYW1tYXRpYyBhY2Nlc3MuLi5cXG4nLFxuICAgICAgICAgICcgIHZpc2l0IGh0dHA6Ly9iaXQubHkvSVd1a2FtIHRvIGxlYXJuIG1vcmUgYWJvdXQgdXNpbmcgdGhlIHdlYi1hbmltYXRpb24tanMgcG9seWZpbGwuJyk7XG4gICAgICB0aGlzLl93YXJuaW5nSXNzdWVkID0gdHJ1ZTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZmxhdHRlbktleWZyYW1lc0ludG9TdHlsZXMoa2V5ZnJhbWVzOiBudWxsfHtba2V5OiBzdHJpbmddOiBhbnl9fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1trZXk6IHN0cmluZ106IGFueX1bXSk6IHtba2V5OiBzdHJpbmddOiBhbnl9IHtcbiAgbGV0IGZsYXRLZXlmcmFtZXM6IHtba2V5OiBzdHJpbmddOiBhbnl9ID0ge307XG4gIGlmIChrZXlmcmFtZXMpIHtcbiAgICBjb25zdCBrZnMgPSBBcnJheS5pc0FycmF5KGtleWZyYW1lcykgPyBrZXlmcmFtZXMgOiBba2V5ZnJhbWVzXTtcbiAgICBrZnMuZm9yRWFjaChrZiA9PiB7XG4gICAgICBPYmplY3Qua2V5cyhrZikuZm9yRWFjaChwcm9wID0+IHtcbiAgICAgICAgaWYgKHByb3AgPT0gJ29mZnNldCcgfHwgcHJvcCA9PSAnZWFzaW5nJykgcmV0dXJuO1xuICAgICAgICBmbGF0S2V5ZnJhbWVzW3Byb3BdID0ga2ZbcHJvcF07XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gZmxhdEtleWZyYW1lcztcbn1cblxuZnVuY3Rpb24gcmVtb3ZlRWxlbWVudChub2RlOiBhbnkpIHtcbiAgbm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG5vZGUpO1xufVxuIl19
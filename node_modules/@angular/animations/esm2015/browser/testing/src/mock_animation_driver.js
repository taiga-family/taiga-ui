/**
 * @fileoverview added by tsickle
 * Generated from: packages/animations/browser/testing/src/mock_animation_driver.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { AUTO_STYLE, NoopAnimationPlayer } from '@angular/animations';
import { ɵallowPreviousPlayerStylesMerge as allowPreviousPlayerStylesMerge, ɵcontainsElement as containsElement, ɵinvokeQuery as invokeQuery, ɵmatchesElement as matchesElement, ɵvalidateStyleProperty as validateStyleProperty } from '@angular/animations/browser';
/**
 * \@publicApi
 */
export class MockAnimationDriver {
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
        return defaultValue || '';
    }
    /**
     * @param {?} element
     * @param {?} keyframes
     * @param {?} duration
     * @param {?} delay
     * @param {?} easing
     * @param {?=} previousPlayers
     * @return {?}
     */
    animate(element, keyframes, duration, delay, easing, previousPlayers = []) {
        /** @type {?} */
        const player = new MockAnimationPlayer(element, keyframes, duration, delay, easing, previousPlayers);
        MockAnimationDriver.log.push((/** @type {?} */ (player)));
        return player;
    }
}
MockAnimationDriver.log = [];
if (false) {
    /** @type {?} */
    MockAnimationDriver.log;
}
/**
 * \@publicApi
 */
export class MockAnimationPlayer extends NoopAnimationPlayer {
    /**
     * @param {?} element
     * @param {?} keyframes
     * @param {?} duration
     * @param {?} delay
     * @param {?} easing
     * @param {?} previousPlayers
     */
    constructor(element, keyframes, duration, delay, easing, previousPlayers) {
        super(duration, delay);
        this.element = element;
        this.keyframes = keyframes;
        this.duration = duration;
        this.delay = delay;
        this.easing = easing;
        this.previousPlayers = previousPlayers;
        this.__finished = false;
        this.__started = false;
        this.previousStyles = {};
        this._onInitFns = [];
        this.currentSnapshot = {};
        if (allowPreviousPlayerStylesMerge(duration, delay)) {
            previousPlayers.forEach((/**
             * @param {?} player
             * @return {?}
             */
            player => {
                if (player instanceof MockAnimationPlayer) {
                    /** @type {?} */
                    const styles = player.currentSnapshot;
                    Object.keys(styles).forEach((/**
                     * @param {?} prop
                     * @return {?}
                     */
                    prop => this.previousStyles[prop] = styles[prop]));
                }
            }));
        }
    }
    /* @internal */
    /**
     * @param {?} fn
     * @return {?}
     */
    onInit(fn) {
        this._onInitFns.push(fn);
    }
    /* @internal */
    /**
     * @return {?}
     */
    init() {
        super.init();
        this._onInitFns.forEach((/**
         * @param {?} fn
         * @return {?}
         */
        fn => fn()));
        this._onInitFns = [];
    }
    /**
     * @return {?}
     */
    finish() {
        super.finish();
        this.__finished = true;
    }
    /**
     * @return {?}
     */
    destroy() {
        super.destroy();
        this.__finished = true;
    }
    /* @internal */
    /**
     * @return {?}
     */
    triggerMicrotask() { }
    /**
     * @return {?}
     */
    play() {
        super.play();
        this.__started = true;
    }
    /**
     * @return {?}
     */
    hasStarted() {
        return this.__started;
    }
    /**
     * @return {?}
     */
    beforeDestroy() {
        /** @type {?} */
        const captures = {};
        Object.keys(this.previousStyles).forEach((/**
         * @param {?} prop
         * @return {?}
         */
        prop => {
            captures[prop] = this.previousStyles[prop];
        }));
        if (this.hasStarted()) {
            // when assembling the captured styles, it's important that
            // we build the keyframe styles in the following order:
            // {other styles within keyframes, ... previousStyles }
            this.keyframes.forEach((/**
             * @param {?} kf
             * @return {?}
             */
            kf => {
                Object.keys(kf).forEach((/**
                 * @param {?} prop
                 * @return {?}
                 */
                prop => {
                    if (prop != 'offset') {
                        captures[prop] = this.__finished ? kf[prop] : AUTO_STYLE;
                    }
                }));
            }));
        }
        this.currentSnapshot = captures;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    MockAnimationPlayer.prototype.__finished;
    /**
     * @type {?}
     * @private
     */
    MockAnimationPlayer.prototype.__started;
    /** @type {?} */
    MockAnimationPlayer.prototype.previousStyles;
    /**
     * @type {?}
     * @private
     */
    MockAnimationPlayer.prototype._onInitFns;
    /** @type {?} */
    MockAnimationPlayer.prototype.currentSnapshot;
    /** @type {?} */
    MockAnimationPlayer.prototype.element;
    /** @type {?} */
    MockAnimationPlayer.prototype.keyframes;
    /** @type {?} */
    MockAnimationPlayer.prototype.duration;
    /** @type {?} */
    MockAnimationPlayer.prototype.delay;
    /** @type {?} */
    MockAnimationPlayer.prototype.easing;
    /** @type {?} */
    MockAnimationPlayer.prototype.previousPlayers;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9ja19hbmltYXRpb25fZHJpdmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYW5pbWF0aW9ucy9icm93c2VyL3Rlc3Rpbmcvc3JjL21vY2tfYW5pbWF0aW9uX2RyaXZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFPQSxPQUFPLEVBQWtCLFVBQVUsRUFBRSxtQkFBbUIsRUFBYSxNQUFNLHFCQUFxQixDQUFDO0FBQ2pHLE9BQU8sRUFBa0IsK0JBQStCLElBQUksOEJBQThCLEVBQUUsZ0JBQWdCLElBQUksZUFBZSxFQUFFLFlBQVksSUFBSSxXQUFXLEVBQUUsZUFBZSxJQUFJLGNBQWMsRUFBRSxzQkFBc0IsSUFBSSxxQkFBcUIsRUFBQyxNQUFNLDZCQUE2QixDQUFDOzs7O0FBTXJSLE1BQU0sT0FBTyxtQkFBbUI7Ozs7O0lBRzlCLHFCQUFxQixDQUFDLElBQVk7UUFDaEMsT0FBTyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNyQyxDQUFDOzs7Ozs7SUFFRCxjQUFjLENBQUMsT0FBWSxFQUFFLFFBQWdCO1FBQzNDLE9BQU8sY0FBYyxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQztJQUMzQyxDQUFDOzs7Ozs7SUFFRCxlQUFlLENBQUMsSUFBUyxFQUFFLElBQVM7UUFDbEMsT0FBTyxlQUFlLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3JDLENBQUM7Ozs7Ozs7SUFFRCxLQUFLLENBQUMsT0FBWSxFQUFFLFFBQWdCLEVBQUUsS0FBYztRQUNsRCxPQUFPLFdBQVcsQ0FBQyxPQUFPLEVBQUUsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQy9DLENBQUM7Ozs7Ozs7SUFFRCxZQUFZLENBQUMsT0FBWSxFQUFFLElBQVksRUFBRSxZQUFxQjtRQUM1RCxPQUFPLFlBQVksSUFBSSxFQUFFLENBQUM7SUFDNUIsQ0FBQzs7Ozs7Ozs7OztJ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OztRQUFDLElBQUksQ0FBQyxFQUFFO1lBQzlDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzdDLENBQUMsRUFBQyxDQUFDO1FBRUgsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFLEVBQUU7WUFDckIsMkRBQTJEO1lBQzNELHVEQUF1RDtZQUN2RCx1REFBdUQ7WUFDdkQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPOzs7O1lBQUMsRUFBRSxDQUFDLEVBQUU7Z0JBQzFCLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsT0FBTzs7OztnQkFBQyxJQUFJLENBQUMsRUFBRTtvQkFDN0IsSUFBSSxJQUFJLElBQUksUUFBUSxFQUFFO3dCQUNwQixRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUM7cUJBQzFEO2dCQUNILENBQUMsRUFBQyxDQUFDO1lBQ0wsQ0FBQyxFQUFDLENBQUM7U0FDSjtRQUVELElBQUksQ0FBQyxlQUFlLEdBQUcsUUFBUSxDQUFDO0lBQ2xDLENBQUM7Q0FDRjs7Ozs7O0lBOUVDLHlDQUEyQjs7Ozs7SUFDM0Isd0NBQTBCOztJQUMxQiw2Q0FBMkQ7Ozs7O0lBQzNELHlDQUF1Qzs7SUFDdkMsOENBQXdDOztJQUdwQyxzQ0FBbUI7O0lBQUUsd0NBQWtEOztJQUN2RSx1Q0FBdUI7O0lBQUUsb0NBQW9COztJQUFFLHFDQUFxQjs7SUFDcEUsOENBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuaW1wb3J0IHtBbmltYXRpb25QbGF5ZXIsIEFVVE9fU1RZTEUsIE5vb3BBbmltYXRpb25QbGF5ZXIsIMm1U3R5bGVEYXRhfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcbmltcG9ydCB7QW5pbWF0aW9uRHJpdmVyLCDJtWFsbG93UHJldmlvdXNQbGF5ZXJTdHlsZXNNZXJnZSBhcyBhbGxvd1ByZXZpb3VzUGxheWVyU3R5bGVzTWVyZ2UsIMm1Y29udGFpbnNFbGVtZW50IGFzIGNvbnRhaW5zRWxlbWVudCwgybVpbnZva2VRdWVyeSBhcyBpbnZva2VRdWVyeSwgybVtYXRjaGVzRWxlbWVudCBhcyBtYXRjaGVzRWxlbWVudCwgybV2YWxpZGF0ZVN0eWxlUHJvcGVydHkgYXMgdmFsaWRhdGVTdHlsZVByb3BlcnR5fSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zL2Jyb3dzZXInO1xuXG5cbi8qKlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgY2xhc3MgTW9ja0FuaW1hdGlvbkRyaXZlciBpbXBsZW1lbnRzIEFuaW1hdGlvbkRyaXZlciB7XG4gIHN0YXRpYyBsb2c6IEFuaW1hdGlvblBsYXllcltdID0gW107XG5cbiAgdmFsaWRhdGVTdHlsZVByb3BlcnR5KHByb3A6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB2YWxpZGF0ZVN0eWxlUHJvcGVydHkocHJvcCk7XG4gIH1cblxuICBtYXRjaGVzRWxlbWVudChlbGVtZW50OiBhbnksIHNlbGVjdG9yOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gbWF0Y2hlc0VsZW1lbnQoZWxlbWVudCwgc2VsZWN0b3IpO1xuICB9XG5cbiAgY29udGFpbnNFbGVtZW50KGVsbTE6IGFueSwgZWxtMjogYW55KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGNvbnRhaW5zRWxlbWVudChlbG0xLCBlbG0yKTtcbiAgfVxuXG4gIHF1ZXJ5KGVsZW1lbnQ6IGFueSwgc2VsZWN0b3I6IHN0cmluZywgbXVsdGk6IGJvb2xlYW4pOiBhbnlbXSB7XG4gICAgcmV0dXJuIGludm9rZVF1ZXJ5KGVsZW1lbnQsIHNlbGVjdG9yLCBtdWx0aSk7XG4gIH1cblxuICBjb21wdXRlU3R5bGUoZWxlbWVudDogYW55LCBwcm9wOiBzdHJpbmcsIGRlZmF1bHRWYWx1ZT86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGRlZmF1bHRWYWx1ZSB8fCAnJztcbiAgfVxuXG4gIGFuaW1hdGUoXG4gICAgICBlbGVtZW50OiBhbnksIGtleWZyYW1lczoge1trZXk6IHN0cmluZ106IHN0cmluZ3xudW1iZXJ9W10sIGR1cmF0aW9uOiBudW1iZXIsIGRlbGF5OiBudW1iZXIsXG4gICAgICBlYXNpbmc6IHN0cmluZywgcHJldmlvdXNQbGF5ZXJzOiBhbnlbXSA9IFtdKTogTW9ja0FuaW1hdGlvblBsYXllciB7XG4gICAgY29uc3QgcGxheWVyID1cbiAgICAgICAgbmV3IE1vY2tBbmltYXRpb25QbGF5ZXIoZWxlbWVudCwga2V5ZnJhbWVzLCBkdXJhdGlvbiwgZGVsYXksIGVhc2luZywgcHJldmlvdXNQbGF5ZXJzKTtcbiAgICBNb2NrQW5pbWF0aW9uRHJpdmVyLmxvZy5wdXNoKDxBbmltYXRpb25QbGF5ZXI+cGxheWVyKTtcbiAgICByZXR1cm4gcGxheWVyO1xuICB9XG59XG5cbi8qKlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgY2xhc3MgTW9ja0FuaW1hdGlvblBsYXllciBleHRlbmRzIE5vb3BBbmltYXRpb25QbGF5ZXIge1xuICBwcml2YXRlIF9fZmluaXNoZWQgPSBmYWxzZTtcbiAgcHJpdmF0ZSBfX3N0YXJ0ZWQgPSBmYWxzZTtcbiAgcHVibGljIHByZXZpb3VzU3R5bGVzOiB7W2tleTogc3RyaW5nXTogc3RyaW5nfG51bWJlcn0gPSB7fTtcbiAgcHJpdmF0ZSBfb25Jbml0Rm5zOiAoKCkgPT4gYW55KVtdID0gW107XG4gIHB1YmxpYyBjdXJyZW50U25hcHNob3Q6IMm1U3R5bGVEYXRhID0ge307XG5cbiAgY29uc3RydWN0b3IoXG4gICAgICBwdWJsaWMgZWxlbWVudDogYW55LCBwdWJsaWMga2V5ZnJhbWVzOiB7W2tleTogc3RyaW5nXTogc3RyaW5nfG51bWJlcn1bXSxcbiAgICAgIHB1YmxpYyBkdXJhdGlvbjogbnVtYmVyLCBwdWJsaWMgZGVsYXk6IG51bWJlciwgcHVibGljIGVhc2luZzogc3RyaW5nLFxuICAgICAgcHVibGljIHByZXZpb3VzUGxheWVyczogYW55W10pIHtcbiAgICBzdXBlcihkdXJhdGlvbiwgZGVsYXkpO1xuXG4gICAgaWYgKGFsbG93UHJldmlvdXNQbGF5ZXJTdHlsZXNNZXJnZShkdXJhdGlvbiwgZGVsYXkpKSB7XG4gICAgICBwcmV2aW91c1BsYXllcnMuZm9yRWFjaChwbGF5ZXIgPT4ge1xuICAgICAgICBpZiAocGxheWVyIGluc3RhbmNlb2YgTW9ja0FuaW1hdGlvblBsYXllcikge1xuICAgICAgICAgIGNvbnN0IHN0eWxlcyA9IHBsYXllci5jdXJyZW50U25hcHNob3Q7XG4gICAgICAgICAgT2JqZWN0LmtleXMoc3R5bGVzKS5mb3JFYWNoKHByb3AgPT4gdGhpcy5wcmV2aW91c1N0eWxlc1twcm9wXSA9IHN0eWxlc1twcm9wXSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qIEBpbnRlcm5hbCAqL1xuICBvbkluaXQoZm46ICgpID0+IGFueSkge1xuICAgIHRoaXMuX29uSW5pdEZucy5wdXNoKGZuKTtcbiAgfVxuXG4gIC8qIEBpbnRlcm5hbCAqL1xuICBpbml0KCkge1xuICAgIHN1cGVyLmluaXQoKTtcbiAgICB0aGlzLl9vbkluaXRGbnMuZm9yRWFjaChmbiA9PiBmbigpKTtcbiAgICB0aGlzLl9vbkluaXRGbnMgPSBbXTtcbiAgfVxuXG4gIGZpbmlzaCgpOiB2b2lkIHtcbiAgICBzdXBlci5maW5pc2goKTtcbiAgICB0aGlzLl9fZmluaXNoZWQgPSB0cnVlO1xuICB9XG5cbiAgZGVzdHJveSgpOiB2b2lkIHtcbiAgICBzdXBlci5kZXN0cm95KCk7XG4gICAgdGhpcy5fX2ZpbmlzaGVkID0gdHJ1ZTtcbiAgfVxuXG4gIC8qIEBpbnRlcm5hbCAqL1xuICB0cmlnZ2VyTWljcm90YXNrKCkge31cblxuICBwbGF5KCk6IHZvaWQge1xuICAgIHN1cGVyLnBsYXkoKTtcbiAgICB0aGlzLl9fc3RhcnRlZCA9IHRydWU7XG4gIH1cblxuICBoYXNTdGFydGVkKCkge1xuICAgIHJldHVybiB0aGlzLl9fc3RhcnRlZDtcbiAgfVxuXG4gIGJlZm9yZURlc3Ryb3koKSB7XG4gICAgY29uc3QgY2FwdHVyZXM6IMm1U3R5bGVEYXRhID0ge307XG5cbiAgICBPYmplY3Qua2V5cyh0aGlzLnByZXZpb3VzU3R5bGVzKS5mb3JFYWNoKHByb3AgPT4ge1xuICAgICAgY2FwdHVyZXNbcHJvcF0gPSB0aGlzLnByZXZpb3VzU3R5bGVzW3Byb3BdO1xuICAgIH0pO1xuXG4gICAgaWYgKHRoaXMuaGFzU3RhcnRlZCgpKSB7XG4gICAgICAvLyB3aGVuIGFzc2VtYmxpbmcgdGhlIGNhcHR1cmVkIHN0eWxlcywgaXQncyBpbXBvcnRhbnQgdGhhdFxuICAgICAgLy8gd2UgYnVpbGQgdGhlIGtleWZyYW1lIHN0eWxlcyBpbiB0aGUgZm9sbG93aW5nIG9yZGVyOlxuICAgICAgLy8ge290aGVyIHN0eWxlcyB3aXRoaW4ga2V5ZnJhbWVzLCAuLi4gcHJldmlvdXNTdHlsZXMgfVxuICAgICAgdGhpcy5rZXlmcmFtZXMuZm9yRWFjaChrZiA9PiB7XG4gICAgICAgIE9iamVjdC5rZXlzKGtmKS5mb3JFYWNoKHByb3AgPT4ge1xuICAgICAgICAgIGlmIChwcm9wICE9ICdvZmZzZXQnKSB7XG4gICAgICAgICAgICBjYXB0dXJlc1twcm9wXSA9IHRoaXMuX19maW5pc2hlZCA/IGtmW3Byb3BdIDogQVVUT19TVFlMRTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5jdXJyZW50U25hcHNob3QgPSBjYXB0dXJlcztcbiAgfVxufVxuIl19
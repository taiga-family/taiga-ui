/**
 * @license Angular v9.1.12
 * (c) 2010-2020 Google LLC. https://angular.io/
 * License: MIT
 */

import { NoopAnimationPlayer, AUTO_STYLE } from '@angular/animations';
import { ɵvalidateStyleProperty, ɵmatchesElement, ɵcontainsElement, ɵinvokeQuery, ɵallowPreviousPlayerStylesMerge } from '@angular/animations/browser';

/**
 * @fileoverview added by tsickle
 * Generated from: packages/animations/browser/testing/src/mock_animation_driver.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@publicApi
 */
class MockAnimationDriver {
    /**
     * @param {?} prop
     * @return {?}
     */
    validateStyleProperty(prop) {
        return ɵvalidateStyleProperty(prop);
    }
    /**
     * @param {?} element
     * @param {?} selector
     * @return {?}
     */
    matchesElement(element, selector) {
        return ɵmatchesElement(element, selector);
    }
    /**
     * @param {?} elm1
     * @param {?} elm2
     * @return {?}
     */
    containsElement(elm1, elm2) {
        return ɵcontainsElement(elm1, elm2);
    }
    /**
     * @param {?} element
     * @param {?} selector
     * @param {?} multi
     * @return {?}
     */
    query(element, selector, multi) {
        return ɵinvokeQuery(element, selector, multi);
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
class MockAnimationPlayer extends NoopAnimationPlayer {
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
        if (ɵallowPreviousPlayerStylesMerge(duration, delay)) {
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

/**
 * @fileoverview added by tsickle
 * Generated from: packages/animations/browser/testing/src/testing.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: packages/animations/browser/testing/public_api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: packages/animations/browser/testing/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Generated bundle index. Do not edit.
 */

export { MockAnimationDriver, MockAnimationPlayer };

//# sourceMappingURL=testing.js.map
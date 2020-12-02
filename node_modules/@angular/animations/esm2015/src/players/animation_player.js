/**
 * @fileoverview added by tsickle
 * Generated from: packages/animations/src/players/animation_player.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { scheduleMicroTask } from '../util';
/**
 * Provides programmatic control of a reusable animation sequence,
 * built using the `build()` method of `AnimationBuilder`. The `build()` method
 * returns a factory, whose `create()` method instantiates and initializes this interface.
 *
 * @see `AnimationBuilder`
 * @see `AnimationFactory`
 * @see `animate()`
 *
 * \@publicApi
 * @record
 */
export function AnimationPlayer() { }
if (false) {
    /**
     * The parent of this player, if any.
     * @type {?}
     */
    AnimationPlayer.prototype.parentPlayer;
    /**
     * The total run time of the animation, in milliseconds.
     * @type {?}
     */
    AnimationPlayer.prototype.totalTime;
    /**
     * Provides a callback to invoke before the animation is destroyed.
     * @type {?|undefined}
     */
    AnimationPlayer.prototype.beforeDestroy;
    /**
     * \@internal
     * Internal
     * @type {?|undefined}
     */
    AnimationPlayer.prototype.triggerCallback;
    /**
     * \@internal
     * Internal
     * @type {?|undefined}
     */
    AnimationPlayer.prototype.disabled;
    /**
     * Provides a callback to invoke when the animation finishes.
     * @see `finish()`
     * @param {?} fn The callback function.
     * @return {?}
     */
    AnimationPlayer.prototype.onDone = function (fn) { };
    /**
     * Provides a callback to invoke when the animation starts.
     * @see `run()`
     * @param {?} fn The callback function.
     * @return {?}
     */
    AnimationPlayer.prototype.onStart = function (fn) { };
    /**
     * Provides a callback to invoke after the animation is destroyed.
     * @see `destroy()` / `beforeDestroy()`
     * @param {?} fn The callback function.
     * @return {?}
     */
    AnimationPlayer.prototype.onDestroy = function (fn) { };
    /**
     * Initializes the animation.
     * @return {?}
     */
    AnimationPlayer.prototype.init = function () { };
    /**
     * Reports whether the animation has started.
     * @return {?} True if the animation has started, false otherwise.
     */
    AnimationPlayer.prototype.hasStarted = function () { };
    /**
     * Runs the animation, invoking the `onStart()` callback.
     * @return {?}
     */
    AnimationPlayer.prototype.play = function () { };
    /**
     * Pauses the animation.
     * @return {?}
     */
    AnimationPlayer.prototype.pause = function () { };
    /**
     * Restarts the paused animation.
     * @return {?}
     */
    AnimationPlayer.prototype.restart = function () { };
    /**
     * Ends the animation, invoking the `onDone()` callback.
     * @return {?}
     */
    AnimationPlayer.prototype.finish = function () { };
    /**
     * Destroys the animation, after invoking the `beforeDestroy()` callback.
     * Calls the `onDestroy()` callback when destruction is completed.
     * @return {?}
     */
    AnimationPlayer.prototype.destroy = function () { };
    /**
     * Resets the animation to its initial state.
     * @return {?}
     */
    AnimationPlayer.prototype.reset = function () { };
    /**
     * Sets the position of the animation.
     * @param {?} position A 0-based offset into the duration, in milliseconds.
     * @return {?}
     */
    AnimationPlayer.prototype.setPosition = function (position) { };
    /**
     * Reports the current position of the animation.
     * @return {?} A 0-based offset into the duration, in milliseconds.
     */
    AnimationPlayer.prototype.getPosition = function () { };
}
/**
 * An empty programmatic controller for reusable animations.
 * Used internally when animations are disabled, to avoid
 * checking for the null case when an animation player is expected.
 *
 * @see `animate()`
 * @see `AnimationPlayer`
 * @see `GroupPlayer`
 *
 * \@publicApi
 */
export class NoopAnimationPlayer {
    /**
     * @param {?=} duration
     * @param {?=} delay
     */
    constructor(duration = 0, delay = 0) {
        this._onDoneFns = [];
        this._onStartFns = [];
        this._onDestroyFns = [];
        this._started = false;
        this._destroyed = false;
        this._finished = false;
        this.parentPlayer = null;
        this.totalTime = duration + delay;
    }
    /**
     * @private
     * @return {?}
     */
    _onFinish() {
        if (!this._finished) {
            this._finished = true;
            this._onDoneFns.forEach((/**
             * @param {?} fn
             * @return {?}
             */
            fn => fn()));
            this._onDoneFns = [];
        }
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    onStart(fn) {
        this._onStartFns.push(fn);
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    onDone(fn) {
        this._onDoneFns.push(fn);
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    onDestroy(fn) {
        this._onDestroyFns.push(fn);
    }
    /**
     * @return {?}
     */
    hasStarted() {
        return this._started;
    }
    /**
     * @return {?}
     */
    init() { }
    /**
     * @return {?}
     */
    play() {
        if (!this.hasStarted()) {
            this._onStart();
            this.triggerMicrotask();
        }
        this._started = true;
    }
    /**
     * \@internal
     * @return {?}
     */
    triggerMicrotask() {
        scheduleMicroTask((/**
         * @return {?}
         */
        () => this._onFinish()));
    }
    /**
     * @private
     * @return {?}
     */
    _onStart() {
        this._onStartFns.forEach((/**
         * @param {?} fn
         * @return {?}
         */
        fn => fn()));
        this._onStartFns = [];
    }
    /**
     * @return {?}
     */
    pause() { }
    /**
     * @return {?}
     */
    restart() { }
    /**
     * @return {?}
     */
    finish() {
        this._onFinish();
    }
    /**
     * @return {?}
     */
    destroy() {
        if (!this._destroyed) {
            this._destroyed = true;
            if (!this.hasStarted()) {
                this._onStart();
            }
            this.finish();
            this._onDestroyFns.forEach((/**
             * @param {?} fn
             * @return {?}
             */
            fn => fn()));
            this._onDestroyFns = [];
        }
    }
    /**
     * @return {?}
     */
    reset() { }
    /**
     * @param {?} position
     * @return {?}
     */
    setPosition(position) { }
    /**
     * @return {?}
     */
    getPosition() {
        return 0;
    }
    /**
     * \@internal
     * @param {?} phaseName
     * @return {?}
     */
    triggerCallback(phaseName) {
        /** @type {?} */
        const methods = phaseName == 'start' ? this._onStartFns : this._onDoneFns;
        methods.forEach((/**
         * @param {?} fn
         * @return {?}
         */
        fn => fn()));
        methods.length = 0;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    NoopAnimationPlayer.prototype._onDoneFns;
    /**
     * @type {?}
     * @private
     */
    NoopAnimationPlayer.prototype._onStartFns;
    /**
     * @type {?}
     * @private
     */
    NoopAnimationPlayer.prototype._onDestroyFns;
    /**
     * @type {?}
     * @private
     */
    NoopAnimationPlayer.prototype._started;
    /**
     * @type {?}
     * @private
     */
    NoopAnimationPlayer.prototype._destroyed;
    /**
     * @type {?}
     * @private
     */
    NoopAnimationPlayer.prototype._finished;
    /** @type {?} */
    NoopAnimationPlayer.prototype.parentPlayer;
    /** @type {?} */
    NoopAnimationPlayer.prototype.totalTime;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5pbWF0aW9uX3BsYXllci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FuaW1hdGlvbnMvc3JjL3BsYXllcnMvYW5pbWF0aW9uX3BsYXllci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFPQSxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxTQUFTLENBQUM7Ozs7Ozs7Ozs7Ozs7QUFhMUMscUNBc0ZDOzs7Ozs7SUFuQkMsdUNBQW1DOzs7OztJQUluQyxvQ0FBMkI7Ozs7O0lBSTNCLHdDQUEwQjs7Ozs7O0lBSzFCLDBDQUE4Qzs7Ozs7O0lBSzlDLG1DQUFtQjs7Ozs7OztJQS9FbkIscURBQTZCOzs7Ozs7O0lBTTdCLHNEQUE4Qjs7Ozs7OztJQU85Qix3REFBZ0M7Ozs7O0lBSWhDLGlEQUFhOzs7OztJQUtiLHVEQUFzQjs7Ozs7SUFJdEIsaURBQWE7Ozs7O0lBSWIsa0RBQWM7Ozs7O0lBSWQsb0RBQWdCOzs7OztJQUloQixtREFBZTs7Ozs7O0lBS2Ysb0RBQWdCOzs7OztJQUloQixrREFBYzs7Ozs7O0lBS2QsZ0VBQW1EOzs7OztJQUtuRCx3REFBc0I7Ozs7Ozs7Ozs7Ozs7QUFvQ3hCLE1BQU0sT0FBTyxtQkFBbUI7Ozs7O0lBUzlCLFlBQVksV0FBbUIsQ0FBQyxFQUFFLFFBQWdCLENBQUM7UUFSM0MsZUFBVSxHQUFlLEVBQUUsQ0FBQztRQUM1QixnQkFBVyxHQUFlLEVBQUUsQ0FBQztRQUM3QixrQkFBYSxHQUFlLEVBQUUsQ0FBQztRQUMvQixhQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2pCLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFDbkIsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUNuQixpQkFBWSxHQUF5QixJQUFJLENBQUM7UUFHL0MsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLEdBQUcsS0FBSyxDQUFDO0lBQ3BDLENBQUM7Ozs7O0lBQ08sU0FBUztRQUNmLElBQUks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MUIsMkNBQWlEOztJQUNqRCx3Q0FBa0MiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5pbXBvcnQge3NjaGVkdWxlTWljcm9UYXNrfSBmcm9tICcuLi91dGlsJztcblxuLyoqXG4gKiBQcm92aWRlcyBwcm9ncmFtbWF0aWMgY29udHJvbCBvZiBhIHJldXNhYmxlIGFuaW1hdGlvbiBzZXF1ZW5jZSxcbiAqIGJ1aWx0IHVzaW5nIHRoZSBgYnVpbGQoKWAgbWV0aG9kIG9mIGBBbmltYXRpb25CdWlsZGVyYC4gVGhlIGBidWlsZCgpYCBtZXRob2RcbiAqIHJldHVybnMgYSBmYWN0b3J5LCB3aG9zZSBgY3JlYXRlKClgIG1ldGhvZCBpbnN0YW50aWF0ZXMgYW5kIGluaXRpYWxpemVzIHRoaXMgaW50ZXJmYWNlLlxuICpcbiAqIEBzZWUgYEFuaW1hdGlvbkJ1aWxkZXJgXG4gKiBAc2VlIGBBbmltYXRpb25GYWN0b3J5YFxuICogQHNlZSBgYW5pbWF0ZSgpYFxuICpcbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBBbmltYXRpb25QbGF5ZXIge1xuICAvKipcbiAgICogUHJvdmlkZXMgYSBjYWxsYmFjayB0byBpbnZva2Ugd2hlbiB0aGUgYW5pbWF0aW9uIGZpbmlzaGVzLlxuICAgKiBAcGFyYW0gZm4gVGhlIGNhbGxiYWNrIGZ1bmN0aW9uLlxuICAgKiBAc2VlIGBmaW5pc2goKWBcbiAgICovXG4gIG9uRG9uZShmbjogKCkgPT4gdm9pZCk6IHZvaWQ7XG4gIC8qKlxuICAgKiBQcm92aWRlcyBhIGNhbGxiYWNrIHRvIGludm9rZSB3aGVuIHRoZSBhbmltYXRpb24gc3RhcnRzLlxuICAgKiBAcGFyYW0gZm4gVGhlIGNhbGxiYWNrIGZ1bmN0aW9uLlxuICAgKiBAc2VlIGBydW4oKWBcbiAgICovXG4gIG9uU3RhcnQoZm46ICgpID0+IHZvaWQpOiB2b2lkO1xuICAvKipcbiAgICogUHJvdmlkZXMgYSBjYWxsYmFjayB0byBpbnZva2UgYWZ0ZXIgdGhlIGFuaW1hdGlvbiBpcyBkZXN0cm95ZWQuXG4gICAqIEBwYXJhbSBmbiBUaGUgY2FsbGJhY2sgZnVuY3Rpb24uXG4gICAqIEBzZWUgYGRlc3Ryb3koKWBcbiAgICogQHNlZSBgYmVmb3JlRGVzdHJveSgpYFxuICAgKi9cbiAgb25EZXN0cm95KGZuOiAoKSA9PiB2b2lkKTogdm9pZDtcbiAgLyoqXG4gICAqIEluaXRpYWxpemVzIHRoZSBhbmltYXRpb24uXG4gICAqL1xuICBpbml0KCk6IHZvaWQ7XG4gIC8qKlxuICAgKiBSZXBvcnRzIHdoZXRoZXIgdGhlIGFuaW1hdGlvbiBoYXMgc3RhcnRlZC5cbiAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgYW5pbWF0aW9uIGhhcyBzdGFydGVkLCBmYWxzZSBvdGhlcndpc2UuXG4gICAqL1xuICBoYXNTdGFydGVkKCk6IGJvb2xlYW47XG4gIC8qKlxuICAgKiBSdW5zIHRoZSBhbmltYXRpb24sIGludm9raW5nIHRoZSBgb25TdGFydCgpYCBjYWxsYmFjay5cbiAgICovXG4gIHBsYXkoKTogdm9pZDtcbiAgLyoqXG4gICAqIFBhdXNlcyB0aGUgYW5pbWF0aW9uLlxuICAgKi9cbiAgcGF1c2UoKTogdm9pZDtcbiAgLyoqXG4gICAqIFJlc3RhcnRzIHRoZSBwYXVzZWQgYW5pbWF0aW9uLlxuICAgKi9cbiAgcmVzdGFydCgpOiB2b2lkO1xuICAvKipcbiAgICogRW5kcyB0aGUgYW5pbWF0aW9uLCBpbnZva2luZyB0aGUgYG9uRG9uZSgpYCBjYWxsYmFjay5cbiAgICovXG4gIGZpbmlzaCgpOiB2b2lkO1xuICAvKipcbiAgICogRGVzdHJveXMgdGhlIGFuaW1hdGlvbiwgYWZ0ZXIgaW52b2tpbmcgdGhlIGBiZWZvcmVEZXN0cm95KClgIGNhbGxiYWNrLlxuICAgKiBDYWxscyB0aGUgYG9uRGVzdHJveSgpYCBjYWxsYmFjayB3aGVuIGRlc3RydWN0aW9uIGlzIGNvbXBsZXRlZC5cbiAgICovXG4gIGRlc3Ryb3koKTogdm9pZDtcbiAgLyoqXG4gICAqIFJlc2V0cyB0aGUgYW5pbWF0aW9uIHRvIGl0cyBpbml0aWFsIHN0YXRlLlxuICAgKi9cbiAgcmVzZXQoKTogdm9pZDtcbiAgLyoqXG4gICAqIFNldHMgdGhlIHBvc2l0aW9uIG9mIHRoZSBhbmltYXRpb24uXG4gICAqIEBwYXJhbSBwb3NpdGlvbiBBIDAtYmFzZWQgb2Zmc2V0IGludG8gdGhlIGR1cmF0aW9uLCBpbiBtaWxsaXNlY29uZHMuXG4gICAqL1xuICBzZXRQb3NpdGlvbihwb3NpdGlvbjogYW55IC8qKiBUT0RPICM5MTAwICovKTogdm9pZDtcbiAgLyoqXG4gICAqIFJlcG9ydHMgdGhlIGN1cnJlbnQgcG9zaXRpb24gb2YgdGhlIGFuaW1hdGlvbi5cbiAgICogQHJldHVybnMgQSAwLWJhc2VkIG9mZnNldCBpbnRvIHRoZSBkdXJhdGlvbiwgaW4gbWlsbGlzZWNvbmRzLlxuICAgKi9cbiAgZ2V0UG9zaXRpb24oKTogbnVtYmVyO1xuICAvKipcbiAgICogVGhlIHBhcmVudCBvZiB0aGlzIHBsYXllciwgaWYgYW55LlxuICAgKi9cbiAgcGFyZW50UGxheWVyOiBBbmltYXRpb25QbGF5ZXJ8bnVsbDtcbiAgLyoqXG4gICAqIFRoZSB0b3RhbCBydW4gdGltZSBvZiB0aGUgYW5pbWF0aW9uLCBpbiBtaWxsaXNlY29uZHMuXG4gICAqL1xuICByZWFkb25seSB0b3RhbFRpbWU6IG51bWJlcjtcbiAgLyoqXG4gICAqIFByb3ZpZGVzIGEgY2FsbGJhY2sgdG8gaW52b2tlIGJlZm9yZSB0aGUgYW5pbWF0aW9uIGlzIGRlc3Ryb3llZC5cbiAgICovXG4gIGJlZm9yZURlc3Ryb3k/OiAoKSA9PiBhbnk7XG4gIC8qKlxuICAgKiBAaW50ZXJuYWxcbiAgICogSW50ZXJuYWxcbiAgICovXG4gIHRyaWdnZXJDYWxsYmFjaz86IChwaGFzZU5hbWU6IHN0cmluZykgPT4gdm9pZDtcbiAgLyoqXG4gICAqIEBpbnRlcm5hbFxuICAgKiBJbnRlcm5hbFxuICAgKi9cbiAgZGlzYWJsZWQ/OiBib29sZWFuO1xufVxuXG4vKipcbiAqIEFuIGVtcHR5IHByb2dyYW1tYXRpYyBjb250cm9sbGVyIGZvciByZXVzYWJsZSBhbmltYXRpb25zLlxuICogVXNlZCBpbnRlcm5hbGx5IHdoZW4gYW5pbWF0aW9ucyBhcmUgZGlzYWJsZWQsIHRvIGF2b2lkXG4gKiBjaGVja2luZyBmb3IgdGhlIG51bGwgY2FzZSB3aGVuIGFuIGFuaW1hdGlvbiBwbGF5ZXIgaXMgZXhwZWN0ZWQuXG4gKlxuICogQHNlZSBgYW5pbWF0ZSgpYFxuICogQHNlZSBgQW5pbWF0aW9uUGxheWVyYFxuICogQHNlZSBgR3JvdXBQbGF5ZXJgXG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgY2xhc3MgTm9vcEFuaW1hdGlvblBsYXllciBpbXBsZW1lbnRzIEFuaW1hdGlvblBsYXllciB7XG4gIHByaXZhdGUgX29uRG9uZUZuczogRnVuY3Rpb25bXSA9IFtdO1xuICBwcml2YXRlIF9vblN0YXJ0Rm5zOiBGdW5jdGlvbltdID0gW107XG4gIHByaXZhdGUgX29uRGVzdHJveUZuczogRnVuY3Rpb25bXSA9IFtdO1xuICBwcml2YXRlIF9zdGFydGVkID0gZmFsc2U7XG4gIHByaXZhdGUgX2Rlc3Ryb3llZCA9IGZhbHNlO1xuICBwcml2YXRlIF9maW5pc2hlZCA9IGZhbHNlO1xuICBwdWJsaWMgcGFyZW50UGxheWVyOiBBbmltYXRpb25QbGF5ZXJ8bnVsbCA9IG51bGw7XG4gIHB1YmxpYyByZWFkb25seSB0b3RhbFRpbWU6IG51bWJlcjtcbiAgY29uc3RydWN0b3IoZHVyYXRpb246IG51bWJlciA9IDAsIGRlbGF5OiBudW1iZXIgPSAwKSB7XG4gICAgdGhpcy50b3RhbFRpbWUgPSBkdXJhdGlvbiArIGRlbGF5O1xuICB9XG4gIHByaXZhdGUgX29uRmluaXNoKCkge1xuICAgIGlmICghdGhpcy5fZmluaXNoZWQpIHtcbiAgICAgIHRoaXMuX2ZpbmlzaGVkID0gdHJ1ZTtcbiAgICAgIHRoaXMuX29uRG9uZUZucy5mb3JFYWNoKGZuID0+IGZuKCkpO1xuICAgICAgdGhpcy5fb25Eb25lRm5zID0gW107XG4gICAgfVxuICB9XG4gIG9uU3RhcnQoZm46ICgpID0+IHZvaWQpOiB2b2lkIHtcbiAgICB0aGlzLl9vblN0YXJ0Rm5zLnB1c2goZm4pO1xuICB9XG4gIG9uRG9uZShmbjogKCkgPT4gdm9pZCk6IHZvaWQge1xuICAgIHRoaXMuX29uRG9uZUZucy5wdXNoKGZuKTtcbiAgfVxuICBvbkRlc3Ryb3koZm46ICgpID0+IHZvaWQpOiB2b2lkIHtcbiAgICB0aGlzLl9vbkRlc3Ryb3lGbnMucHVzaChmbik7XG4gIH1cbiAgaGFzU3RhcnRlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhcnRlZDtcbiAgfVxuICBpbml0KCk6IHZvaWQge31cbiAgcGxheSgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuaGFzU3RhcnRlZCgpKSB7XG4gICAgICB0aGlzLl9vblN0YXJ0KCk7XG4gICAgICB0aGlzLnRyaWdnZXJNaWNyb3Rhc2soKTtcbiAgICB9XG4gICAgdGhpcy5fc3RhcnRlZCA9IHRydWU7XG4gIH1cblxuICAvKiogQGludGVybmFsICovXG4gIHRyaWdnZXJNaWNyb3Rhc2soKSB7XG4gICAgc2NoZWR1bGVNaWNyb1Rhc2soKCkgPT4gdGhpcy5fb25GaW5pc2goKSk7XG4gIH1cblxuICBwcml2YXRlIF9vblN0YXJ0KCkge1xuICAgIHRoaXMuX29uU3RhcnRGbnMuZm9yRWFjaChmbiA9PiBmbigpKTtcbiAgICB0aGlzLl9vblN0YXJ0Rm5zID0gW107XG4gIH1cblxuICBwYXVzZSgpOiB2b2lkIHt9XG4gIHJlc3RhcnQoKTogdm9pZCB7fVxuICBmaW5pc2goKTogdm9pZCB7XG4gICAgdGhpcy5fb25GaW5pc2goKTtcbiAgfVxuICBkZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5fZGVzdHJveWVkKSB7XG4gICAgICB0aGlzLl9kZXN0cm95ZWQgPSB0cnVlO1xuICAgICAgaWYgKCF0aGlzLmhhc1N0YXJ0ZWQoKSkge1xuICAgICAgICB0aGlzLl9vblN0YXJ0KCk7XG4gICAgICB9XG4gICAgICB0aGlzLmZpbmlzaCgpO1xuICAgICAgdGhpcy5fb25EZXN0cm95Rm5zLmZvckVhY2goZm4gPT4gZm4oKSk7XG4gICAgICB0aGlzLl9vbkRlc3Ryb3lGbnMgPSBbXTtcbiAgICB9XG4gIH1cbiAgcmVzZXQoKTogdm9pZCB7fVxuICBzZXRQb3NpdGlvbihwb3NpdGlvbjogbnVtYmVyKTogdm9pZCB7fVxuICBnZXRQb3NpdGlvbigpOiBudW1iZXIge1xuICAgIHJldHVybiAwO1xuICB9XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICB0cmlnZ2VyQ2FsbGJhY2socGhhc2VOYW1lOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBtZXRob2RzID0gcGhhc2VOYW1lID09ICdzdGFydCcgPyB0aGlzLl9vblN0YXJ0Rm5zIDogdGhpcy5fb25Eb25lRm5zO1xuICAgIG1ldGhvZHMuZm9yRWFjaChmbiA9PiBmbigpKTtcbiAgICBtZXRob2RzLmxlbmd0aCA9IDA7XG4gIH1cbn1cbiJdfQ==
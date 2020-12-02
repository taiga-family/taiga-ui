/**
 * @fileoverview added by tsickle
 * Generated from: packages/animations/browser/src/render/css_keyframes/css_keyframes_player.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { computeStyle } from '../../util';
import { ElementAnimationStyleHandler } from './element_animation_style_handler';
/** @type {?} */
const DEFAULT_FILL_MODE = 'forwards';
/** @type {?} */
const DEFAULT_EASING = 'linear';
/** @enum {number} */
const AnimatorControlState = {
    INITIALIZED: 1,
    STARTED: 2,
    FINISHED: 3,
    DESTROYED: 4,
};
export { AnimatorControlState };
export class CssKeyframesPlayer {
    /**
     * @param {?} element
     * @param {?} keyframes
     * @param {?} animationName
     * @param {?} _duration
     * @param {?} _delay
     * @param {?} easing
     * @param {?} _finalStyles
     * @param {?=} _specialStyles
     */
    constructor(element, keyframes, animationName, _duration, _delay, easing, _finalStyles, _specialStyles) {
        this.element = element;
        this.keyframes = keyframes;
        this.animationName = animationName;
        this._duration = _duration;
        this._delay = _delay;
        this._finalStyles = _finalStyles;
        this._specialStyles = _specialStyles;
        this._onDoneFns = [];
        this._onStartFns = [];
        this._onDestroyFns = [];
        this._started = false;
        this.currentSnapshot = {};
        this._state = 0;
        this.easing = easing || DEFAULT_EASING;
        this.totalTime = _duration + _delay;
        this._buildStyler();
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
    destroy() {
        this.init();
        if (this._state >= 4 /* DESTROYED */)
            return;
        this._state = 4 /* DESTROYED */;
        this._styler.destroy();
        this._flushStartFns();
        this._flushDoneFns();
        if (this._specialStyles) {
            this._specialStyles.destroy();
        }
        this._onDestroyFns.forEach((/**
         * @param {?} fn
         * @return {?}
         */
        fn => fn()));
        this._onDestroyFns = [];
    }
    /**
     * @private
     * @return {?}
     */
    _flushDoneFns() {
        this._onDoneFns.forEach((/**
         * @param {?} fn
         * @return {?}
         */
        fn => fn()));
        this._onDoneFns = [];
    }
    /**
     * @private
     * @return {?}
     */
    _flushStartFns() {
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
    finish() {
        this.init();
        if (this._state >= 3 /* FINISHED */)
            return;
        this._state = 3 /* FINISHED */;
        this._styler.finish();
        this._flushStartFns();
        if (this._specialStyles) {
            this._specialStyles.finish();
        }
        this._flushDoneFns();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setPosition(value) {
        this._styler.setPosition(value);
    }
    /**
     * @return {?}
     */
    getPosition() {
        return this._styler.getPosition();
    }
    /**
     * @return {?}
     */
    hasStarted() {
        return this._state >= 2 /* STARTED */;
    }
    /**
     * @return {?}
     */
    init() {
        if (this._state >= 1 /* INITIALIZED */)
            return;
        this._state = 1 /* INITIALIZED */;
        /** @type {?} */
        const elm = this.element;
        this._styler.apply();
        if (this._delay) {
            this._styler.pause();
        }
    }
    /**
     * @return {?}
     */
    play() {
        this.init();
        if (!this.hasStarted()) {
            this._flushStartFns();
            this._state = 2 /* STARTED */;
            if (this._specialStyles) {
                this._specialStyles.start();
            }
        }
        this._styler.resume();
    }
    /**
     * @return {?}
     */
    pause() {
        this.init();
        this._styler.pause();
    }
    /**
     * @return {?}
     */
    restart() {
        this.reset();
        this.play();
    }
    /**
     * @return {?}
     */
    reset() {
        this._styler.destroy();
        this._buildStyler();
        this._styler.apply();
    }
    /**
     * @private
     * @return {?}
     */
    _buildStyler() {
        this._styler = new ElementAnimationStyleHandler(this.element, this.animationName, this._duration, this._delay, this.easing, DEFAULT_FILL_MODE, (/**
         * @return {?}
         */
        () => this.finish()));
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
    /**
     * @return {?}
     */
    beforeDestroy() {
        this.init();
        /** @type {?} */
        const styles = {};
        if (this.hasStarted()) {
            /** @type {?} */
            const finished = this._state >= 3 /* FINISHED */;
            Object.keys(this._finalStyles).forEach((/**
             * @param {?} prop
             * @return {?}
             */
            prop => {
                if (prop != 'offset') {
                    styles[prop] = finished ? this._finalStyles[prop] : computeStyle(this.element, prop);
                }
            }));
        }
        this.currentSnapshot = styles;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    CssKeyframesPlayer.prototype._onDoneFns;
    /**
     * @type {?}
     * @private
     */
    CssKeyframesPlayer.prototype._onStartFns;
    /**
     * @type {?}
     * @private
     */
    CssKeyframesPlayer.prototype._onDestroyFns;
    /**
     * @type {?}
     * @private
     */
    CssKeyframesPlayer.prototype._started;
    /**
     * @type {?}
     * @private
     */
    CssKeyframesPlayer.prototype._styler;
    /** @type {?} */
    CssKeyframesPlayer.prototype.parentPlayer;
    /** @type {?} */
    CssKeyframesPlayer.prototype.totalTime;
    /** @type {?} */
    CssKeyframesPlayer.prototype.easing;
    /** @type {?} */
    CssKeyframesPlayer.prototype.currentSnapshot;
    /**
     * @type {?}
     * @private
     */
    CssKeyframesPlayer.prototype._state;
    /** @type {?} */
    CssKeyframesPlayer.prototype.element;
    /** @type {?} */
    CssKeyframesPlayer.prototype.keyframes;
    /** @type {?} */
    CssKeyframesPlayer.prototype.animationName;
    /**
     * @type {?}
     * @private
     */
    CssKeyframesPlayer.prototype._duration;
    /**
     * @type {?}
     * @private
     */
    CssKeyframesPlayer.prototype._delay;
    /**
     * @type {?}
     * @private
     */
    CssKeyframesPlayer.prototype._finalStyles;
    /**
     * @type {?}
     * @private
     */
    CssKeyframesPlayer.prototype._specialStyles;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3NzX2tleWZyYW1lc19wbGF5ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9hbmltYXRpb25zL2Jyb3dzZXIvc3JjL3JlbmRlci9jc3Nfa2V5ZnJhbWVzL2Nzc19rZXlmcmFtZXNfcGxheWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBU0EsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLFlBQVksQ0FBQztBQUV4QyxPQUFPLEVBQUMsNEJBQTRCLEVBQUMsTUFBTSxtQ0FBbUMsQ0FBQzs7TUFFekUsaUJBQWlCLEdBQUcsVUFBVTs7TUFDOUIsY0FBYyxHQUFHLFFBQVE7O0FBRS9CLE1BQWtCLG9CQUFvQjtJQUNwQyxXQUFXLEdBQUk7SUFDZixPQUFPLEdBQUk7SUFDWCxRQUFRLEdBQUk7SUFDWixTQUFTLEdBQUk7RUFDZDs7QUFFRCxNQUFNLE9BQU8sa0JBQWtCOzs7Ozs7Ozs7OztJQWlCN0IsWUFDb0IsT0FBWSxFQUFrQixTQUEyQyxFQUN6RSxhQUFxQixFQUFtQixTQUFpQixFQUN4RCxNQUFjLEVBQUUsTUFBYyxFQUM5QixZQUFrQyxFQUNsQyxjQUF3QztRQUp6QyxZQUFPLEdBQVAsT0FBTyxDQUFLO1FBQWtCLGNBQVMsR0FBVCxTQUFTLENBQWtDO1FBQ3pFLGtCQUFhLEdBQWIsYUFBYSxDQUFRO1FBQW1CLGNBQVMsR0FBVCxTQUFTLENBQVE7UUFDeEQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLGlCQUFZLEdBQVosWUFBWSxDQUFzQjtRQUNsQyxtQkFBYyxHQUFkLGNBQWMsQ0FBMEI7UUFyQnJELGVBQVUsR0FBZSxFQUFFLENBQUM7UUFDNUIsZ0JBQVcsR0FBZSxFQUFFLENBQUM7UUFDN0Isa0JBQWEsR0FBZSxFQUFFLENBQUM7UUFFL0IsYUFBUSxHQUFHLEtBQUssQ0FBQztRQVFsQixvQkFBZSxHQUE0QixFQUFFLENBQUM7UUFFN0MsV0FBTSxHQUF5QixDQUFD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RiwyQ0FBcUM7Ozs7O0lBQUUsdUNBQWtDOzs7OztJQUN6RSxvQ0FBK0I7Ozs7O0lBQy9CLDBDQUFtRDs7Ozs7SUFDbkQsNENBQXlEIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuaW1wb3J0IHtBbmltYXRpb25QbGF5ZXJ9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuXG5pbXBvcnQge2NvbXB1dGVTdHlsZX0gZnJvbSAnLi4vLi4vdXRpbCc7XG5pbXBvcnQge1NwZWNpYWxDYXNlZFN0eWxlc30gZnJvbSAnLi4vc3BlY2lhbF9jYXNlZF9zdHlsZXMnO1xuaW1wb3J0IHtFbGVtZW50QW5pbWF0aW9uU3R5bGVIYW5kbGVyfSBmcm9tICcuL2VsZW1lbnRfYW5pbWF0aW9uX3N0eWxlX2hhbmRsZXInO1xuXG5jb25zdCBERUZBVUxUX0ZJTExfTU9ERSA9ICdmb3J3YXJkcyc7XG5jb25zdCBERUZBVUxUX0VBU0lORyA9ICdsaW5lYXInO1xuXG5leHBvcnQgY29uc3QgZW51bSBBbmltYXRvckNvbnRyb2xTdGF0ZSB7XG4gIElOSVRJQUxJWkVEID0gMSxcbiAgU1RBUlRFRCA9IDIsXG4gIEZJTklTSEVEID0gMyxcbiAgREVTVFJPWUVEID0gNFxufVxuXG5leHBvcnQgY2xhc3MgQ3NzS2V5ZnJhbWVzUGxheWVyIGltcGxlbWVudHMgQW5pbWF0aW9uUGxheWVyIHtcbiAgcHJpdmF0ZSBfb25Eb25lRm5zOiBGdW5jdGlvbltdID0gW107XG4gIHByaXZhdGUgX29uU3RhcnRGbnM6IEZ1bmN0aW9uW10gPSBbXTtcbiAgcHJpdmF0ZSBfb25EZXN0cm95Rm5zOiBGdW5jdGlvbltdID0gW107XG5cbiAgcHJpdmF0ZSBfc3RhcnRlZCA9IGZhbHNlO1xuICAvLyBUT0RPKGlzc3VlLzI0NTcxKTogcmVtb3ZlICchJy5cbiAgcHJpdmF0ZSBfc3R5bGVyITogRWxlbWVudEFuaW1hdGlvblN0eWxlSGFuZGxlcjtcblxuICAvLyBUT0RPKGlzc3VlLzI0NTcxKTogcmVtb3ZlICchJy5cbiAgcHVibGljIHBhcmVudFBsYXllciE6IEFuaW1hdGlvblBsYXllcjtcbiAgcHVibGljIHJlYWRvbmx5IHRvdGFsVGltZTogbnVtYmVyO1xuICBwdWJsaWMgcmVhZG9ubHkgZWFzaW5nOiBzdHJpbmc7XG4gIHB1YmxpYyBjdXJyZW50U25hcHNob3Q6IHtba2V5OiBzdHJpbmddOiBzdHJpbmd9ID0ge307XG5cbiAgcHJpdmF0ZSBfc3RhdGU6IEFuaW1hdG9yQ29udHJvbFN0YXRlID0gMDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICAgIHB1YmxpYyByZWFkb25seSBlbGVtZW50OiBhbnksIHB1YmxpYyByZWFkb25seSBrZXlmcmFtZXM6IHtba2V5OiBzdHJpbmddOiBzdHJpbmd8bnVtYmVyfVtdLFxuICAgICAgcHVibGljIHJlYWRvbmx5IGFuaW1hdGlvbk5hbWU6IHN0cmluZywgcHJpdmF0ZSByZWFkb25seSBfZHVyYXRpb246IG51bWJlcixcbiAgICAgIHByaXZhdGUgcmVhZG9ubHkgX2RlbGF5OiBudW1iZXIsIGVhc2luZzogc3RyaW5nLFxuICAgICAgcHJpdmF0ZSByZWFkb25seSBfZmluYWxTdHlsZXM6IHtba2V5OiBzdHJpbmddOiBhbnl9LFxuICAgICAgcHJpdmF0ZSByZWFkb25seSBfc3BlY2lhbFN0eWxlcz86IFNwZWNpYWxDYXNlZFN0eWxlc3xudWxsKSB7XG4gICAgdGhpcy5lYXNpbmcgPSBlYXNpbmcgfHwgREVGQVVMVF9FQVNJTkc7XG4gICAgdGhpcy50b3RhbFRpbWUgPSBfZHVyYXRpb24gKyBfZGVsYXk7XG4gICAgdGhpcy5fYnVpbGRTdHlsZXIoKTtcbiAgfVxuXG4gIG9uU3RhcnQoZm46ICgpID0+IHZvaWQpOiB2b2lkIHtcbiAgICB0aGlzLl9vblN0YXJ0Rm5zLnB1c2goZm4pO1xuICB9XG5cbiAgb25Eb25lKGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy5fb25Eb25lRm5zLnB1c2goZm4pO1xuICB9XG5cbiAgb25EZXN0cm95KGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy5fb25EZXN0cm95Rm5zLnB1c2goZm4pO1xuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICB0aGlzLmluaXQoKTtcbiAgICBpZiAodGhpcy5fc3RhdGUgPj0gQW5pbWF0b3JDb250cm9sU3RhdGUuREVTVFJPWUVEKSByZXR1cm47XG4gICAgdGhpcy5fc3RhdGUgPSBBbmltYXRvckNvbnRyb2xTdGF0ZS5ERVNUUk9ZRUQ7XG4gICAgdGhpcy5fc3R5bGVyLmRlc3Ryb3koKTtcbiAgICB0aGlzLl9mbHVzaFN0YXJ0Rm5zKCk7XG4gICAgdGhpcy5fZmx1c2hEb25lRm5zKCk7XG4gICAgaWYgKHRoaXMuX3NwZWNpYWxTdHlsZXMpIHtcbiAgICAgIHRoaXMuX3NwZWNpYWxTdHlsZXMuZGVzdHJveSgpO1xuICAgIH1cbiAgICB0aGlzLl9vbkRlc3Ryb3lGbnMuZm9yRWFjaChmbiA9PiBmbigpKTtcbiAgICB0aGlzLl9vbkRlc3Ryb3lGbnMgPSBbXTtcbiAgfVxuXG4gIHByaXZhdGUgX2ZsdXNoRG9uZUZucygpIHtcbiAgICB0aGlzLl9vbkRvbmVGbnMuZm9yRWFjaChmbiA9PiBmbigpKTtcbiAgICB0aGlzLl9vbkRvbmVGbnMgPSBbXTtcbiAgfVxuXG4gIHByaXZhdGUgX2ZsdXNoU3RhcnRGbnMoKSB7XG4gICAgdGhpcy5fb25TdGFydEZucy5mb3JFYWNoKGZuID0+IGZuKCkpO1xuICAgIHRoaXMuX29uU3RhcnRGbnMgPSBbXTtcbiAgfVxuXG4gIGZpbmlzaCgpIHtcbiAgICB0aGlzLmluaXQoKTtcbiAgICBpZiAodGhpcy5fc3RhdGUgPj0gQW5pbWF0b3JDb250cm9sU3RhdGUuRklOSVNIRUQpIHJldHVybjtcbiAgICB0aGlzLl9zdGF0ZSA9IEFuaW1hdG9yQ29udHJvbFN0YXRlLkZJTklTSEVEO1xuICAgIHRoaXMuX3N0eWxlci5maW5pc2goKTtcbiAgICB0aGlzLl9mbHVzaFN0YXJ0Rm5zKCk7XG4gICAgaWYgKHRoaXMuX3NwZWNpYWxTdHlsZXMpIHtcbiAgICAgIHRoaXMuX3NwZWNpYWxTdHlsZXMuZmluaXNoKCk7XG4gICAgfVxuICAgIHRoaXMuX2ZsdXNoRG9uZUZucygpO1xuICB9XG5cbiAgc2V0UG9zaXRpb24odmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX3N0eWxlci5zZXRQb3NpdGlvbih2YWx1ZSk7XG4gIH1cblxuICBnZXRQb3NpdGlvbigpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9zdHlsZXIuZ2V0UG9zaXRpb24oKTtcbiAgfVxuXG4gIGhhc1N0YXJ0ZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3N0YXRlID49IEFuaW1hdG9yQ29udHJvbFN0YXRlLlNUQVJURUQ7XG4gIH1cbiAgaW5pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fc3RhdGUgPj0gQW5pbWF0b3JDb250cm9sU3RhdGUuSU5JVElBTElaRUQpIHJldHVybjtcbiAgICB0aGlzLl9zdGF0ZSA9IEFuaW1hdG9yQ29udHJvbFN0YXRlLklOSVRJQUxJWkVEO1xuICAgIGNvbnN0IGVsbSA9IHRoaXMuZWxlbWVudDtcbiAgICB0aGlzLl9zdHlsZXIuYXBwbHkoKTtcbiAgICBpZiAodGhpcy5fZGVsYXkpIHtcbiAgICAgIHRoaXMuX3N0eWxlci5wYXVzZSgpO1xuICAgIH1cbiAgfVxuXG4gIHBsYXkoKTogdm9pZCB7XG4gICAgdGhpcy5pbml0KCk7XG4gICAgaWYgKCF0aGlzLmhhc1N0YXJ0ZWQoKSkge1xuICAgICAgdGhpcy5fZmx1c2hTdGFydEZucygpO1xuICAgICAgdGhpcy5fc3RhdGUgPSBBbmltYXRvckNvbnRyb2xTdGF0ZS5TVEFSVEVEO1xuICAgICAgaWYgKHRoaXMuX3NwZWNpYWxTdHlsZXMpIHtcbiAgICAgICAgdGhpcy5fc3BlY2lhbFN0eWxlcy5zdGFydCgpO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLl9zdHlsZXIucmVzdW1lKCk7XG4gIH1cblxuICBwYXVzZSgpOiB2b2lkIHtcbiAgICB0aGlzLmluaXQoKTtcbiAgICB0aGlzLl9zdHlsZXIucGF1c2UoKTtcbiAgfVxuICByZXN0YXJ0KCk6IHZvaWQge1xuICAgIHRoaXMucmVzZXQoKTtcbiAgICB0aGlzLnBsYXkoKTtcbiAgfVxuICByZXNldCgpOiB2b2lkIHtcbiAgICB0aGlzLl9zdHlsZXIuZGVzdHJveSgpO1xuICAgIHRoaXMuX2J1aWxkU3R5bGVyKCk7XG4gICAgdGhpcy5fc3R5bGVyLmFwcGx5KCk7XG4gIH1cblxuICBwcml2YXRlIF9idWlsZFN0eWxlcigpIHtcbiAgICB0aGlzLl9zdHlsZXIgPSBuZXcgRWxlbWVudEFuaW1hdGlvblN0eWxlSGFuZGxlcihcbiAgICAgICAgdGhpcy5lbGVtZW50LCB0aGlzLmFuaW1hdGlvbk5hbWUsIHRoaXMuX2R1cmF0aW9uLCB0aGlzLl9kZWxheSwgdGhpcy5lYXNpbmcsXG4gICAgICAgIERFRkFVTFRfRklMTF9NT0RFLCAoKSA9PiB0aGlzLmZpbmlzaCgpKTtcbiAgfVxuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgdHJpZ2dlckNhbGxiYWNrKHBoYXNlTmFtZTogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgbWV0aG9kcyA9IHBoYXNlTmFtZSA9PSAnc3RhcnQnID8gdGhpcy5fb25TdGFydEZucyA6IHRoaXMuX29uRG9uZUZucztcbiAgICBtZXRob2RzLmZvckVhY2goZm4gPT4gZm4oKSk7XG4gICAgbWV0aG9kcy5sZW5ndGggPSAwO1xuICB9XG5cbiAgYmVmb3JlRGVzdHJveSgpIHtcbiAgICB0aGlzLmluaXQoKTtcbiAgICBjb25zdCBzdHlsZXM6IHtba2V5OiBzdHJpbmddOiBzdHJpbmd9ID0ge307XG4gICAgaWYgKHRoaXMuaGFzU3RhcnRlZCgpKSB7XG4gICAgICBjb25zdCBmaW5pc2hlZCA9IHRoaXMuX3N0YXRlID49IEFuaW1hdG9yQ29udHJvbFN0YXRlLkZJTklTSEVEO1xuICAgICAgT2JqZWN0LmtleXModGhpcy5fZmluYWxTdHlsZXMpLmZvckVhY2gocHJvcCA9PiB7XG4gICAgICAgIGlmIChwcm9wICE9ICdvZmZzZXQnKSB7XG4gICAgICAgICAgc3R5bGVzW3Byb3BdID0gZmluaXNoZWQgPyB0aGlzLl9maW5hbFN0eWxlc1twcm9wXSA6IGNvbXB1dGVTdHlsZSh0aGlzLmVsZW1lbnQsIHByb3ApO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgdGhpcy5jdXJyZW50U25hcHNob3QgPSBzdHlsZXM7XG4gIH1cbn1cbiJdfQ==
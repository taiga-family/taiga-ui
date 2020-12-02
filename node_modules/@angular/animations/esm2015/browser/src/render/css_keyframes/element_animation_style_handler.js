/**
 * @fileoverview added by tsickle
 * Generated from: packages/animations/browser/src/render/css_keyframes/element_animation_style_handler.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 * @type {?}
 */
const ELAPSED_TIME_MAX_DECIMAL_PLACES = 3;
/** @type {?} */
const ANIMATION_PROP = 'animation';
/** @type {?} */
const ANIMATIONEND_EVENT = 'animationend';
/** @type {?} */
const ONE_SECOND = 1000;
export class ElementAnimationStyleHandler {
    /**
     * @param {?} _element
     * @param {?} _name
     * @param {?} _duration
     * @param {?} _delay
     * @param {?} _easing
     * @param {?} _fillMode
     * @param {?} _onDoneFn
     */
    constructor(_element, _name, _duration, _delay, _easing, _fillMode, _onDoneFn) {
        this._element = _element;
        this._name = _name;
        this._duration = _duration;
        this._delay = _delay;
        this._easing = _easing;
        this._fillMode = _fillMode;
        this._onDoneFn = _onDoneFn;
        this._finished = false;
        this._destroyed = false;
        this._startTime = 0;
        this._position = 0;
        this._eventFn = (/**
         * @param {?} e
         * @return {?}
         */
        (e) => this._handleCallback(e));
    }
    /**
     * @return {?}
     */
    apply() {
        applyKeyframeAnimation(this._element, `${this._duration}ms ${this._easing} ${this._delay}ms 1 normal ${this._fillMode} ${this._name}`);
        addRemoveAnimationEvent(this._element, this._eventFn, false);
        this._startTime = Date.now();
    }
    /**
     * @return {?}
     */
    pause() {
        playPauseAnimation(this._element, this._name, 'paused');
    }
    /**
     * @return {?}
     */
    resume() {
        playPauseAnimation(this._element, this._name, 'running');
    }
    /**
     * @param {?} position
     * @return {?}
     */
    setPosition(position) {
        /** @type {?} */
        const index = findIndexForAnimation(this._element, this._name);
        this._position = position * this._duration;
        setAnimationStyle(this._element, 'Delay', `-${this._position}ms`, index);
    }
    /**
     * @return {?}
     */
    getPosition() {
        return this._position;
    }
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    _handleCallback(event) {
        /** @type {?} */
        const timestamp = event._ngTestManualTimestamp || Date.now();
        /** @type {?} */
        const elapsedTime = parseFloat(event.elapsedTime.toFixed(ELAPSED_TIME_MAX_DECIMAL_PLACES)) * ONE_SECOND;
        if (event.animationName == this._name &&
            Math.max(timestamp - this._startTime, 0) >= this._delay && elapsedTime >= this._duration) {
            this.finish();
        }
    }
    /**
     * @return {?}
     */
    finish() {
        if (this._finished)
            return;
        this._finished = true;
        this._onDoneFn();
        addRemoveAnimationEvent(this._element, this._eventFn, true);
    }
    /**
     * @return {?}
     */
    destroy() {
        if (this._destroyed)
            return;
        this._destroyed = true;
        this.finish();
        removeKeyframeAnimation(this._element, this._name);
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    ElementAnimationStyleHandler.prototype._eventFn;
    /**
     * @type {?}
     * @private
     */
    ElementAnimationStyleHandler.prototype._finished;
    /**
     * @type {?}
     * @private
     */
    ElementAnimationStyleHandler.prototype._destroyed;
    /**
     * @type {?}
     * @private
     */
    ElementAnimationStyleHandler.prototype._startTime;
    /**
     * @type {?}
     * @private
     */
    ElementAnimationStyleHandler.prototype._position;
    /**
     * @type {?}
     * @private
     */
    ElementAnimationStyleHandler.prototype._element;
    /**
     * @type {?}
     * @private
     */
    ElementAnimationStyleHandler.prototype._name;
    /**
     * @type {?}
     * @private
     */
    ElementAnimationStyleHandler.prototype._duration;
    /**
     * @type {?}
     * @private
     */
    ElementAnimationStyleHandler.prototype._delay;
    /**
     * @type {?}
     * @private
     */
    ElementAnimationStyleHandler.prototype._easing;
    /**
     * @type {?}
     * @private
     */
    ElementAnimationStyleHandler.prototype._fillMode;
    /**
     * @type {?}
     * @private
     */
    ElementAnimationStyleHandler.prototype._onDoneFn;
}
/**
 * @param {?} element
 * @param {?} name
 * @param {?} status
 * @return {?}
 */
function playPauseAnimation(element, name, status) {
    /** @type {?} */
    const index = findIndexForAnimation(element, name);
    setAnimationStyle(element, 'PlayState', status, index);
}
/**
 * @param {?} element
 * @param {?} value
 * @return {?}
 */
function applyKeyframeAnimation(element, value) {
    /** @type {?} */
    const anim = getAnimationStyle(element, '').trim();
    /** @type {?} */
    let index = 0;
    if (anim.length) {
        index = countChars(anim, ',') + 1;
        value = `${anim}, ${value}`;
    }
    setAnimationStyle(element, '', value);
    return index;
}
/**
 * @param {?} element
 * @param {?} name
 * @return {?}
 */
function removeKeyframeAnimation(element, name) {
    /** @type {?} */
    const anim = getAnimationStyle(element, '');
    /** @type {?} */
    const tokens = anim.split(',');
    /** @type {?} */
    const index = findMatchingTokenIndex(tokens, name);
    if (index >= 0) {
        tokens.splice(index, 1);
        /** @type {?} */
        const newValue = tokens.join(',');
        setAnimationStyle(element, '', newValue);
    }
}
/**
 * @param {?} element
 * @param {?} value
 * @return {?}
 */
function findIndexForAnimation(element, value) {
    /** @type {?} */
    const anim = getAnimationStyle(element, '');
    if (anim.indexOf(',') > 0) {
        /** @type {?} */
        const tokens = anim.split(',');
        return findMatchingTokenIndex(tokens, value);
    }
    return findMatchingTokenIndex([anim], value);
}
/**
 * @param {?} tokens
 * @param {?} searchToken
 * @return {?}
 */
function findMatchingTokenIndex(tokens, searchToken) {
    for (let i = 0; i < tokens.length; i++) {
        if (tokens[i].indexOf(searchToken) >= 0) {
            return i;
        }
    }
    return -1;
}
/**
 * @param {?} element
 * @param {?} fn
 * @param {?} doRemove
 * @return {?}
 */
function addRemoveAnimationEvent(element, fn, doRemove) {
    doRemove ? element.removeEventListener(ANIMATIONEND_EVENT, fn) :
        element.addEventListener(ANIMATIONEND_EVENT, fn);
}
/**
 * @param {?} element
 * @param {?} name
 * @param {?} value
 * @param {?=} index
 * @return {?}
 */
function setAnimationStyle(element, name, value, index) {
    /** @type {?} */
    const prop = ANIMATION_PROP + name;
    if (index != null) {
        /** @type {?} */
        const oldValue = element.style[prop];
        if (oldValue.length) {
            /** @type {?} */
            const tokens = oldValue.split(',');
            tokens[index] = value;
            value = tokens.join(',');
        }
    }
    element.style[prop] = value;
}
/**
 * @param {?} element
 * @param {?} name
 * @return {?}
 */
function getAnimationStyle(element, name) {
    return element.style[ANIMATION_PROP + name];
}
/**
 * @param {?} value
 * @param {?} char
 * @return {?}
 */
function countChars(value, char) {
    /** @type {?} */
    let count = 0;
    for (let i = 0; i < value.length; i++) {
        /** @type {?} */
        const c = value.charAt(i);
        if (c === char)
            count++;
    }
    return count;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxlbWVudF9hbmltYXRpb25fc3R5bGVfaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FuaW1hdGlvbnMvYnJvd3Nlci9zcmMvcmVuZGVyL2Nzc19rZXlmcmFtZXMvZWxlbWVudF9hbmltYXRpb25fc3R5bGVfaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O01BT00sK0JBQStCLEdBQUcsQ0FBQzs7TUFDbkMsY0FBYyxHQUFHLFdBQVc7O01BQzVCLGtCQUFrQixHQUFHLGNBQWM7O01BQ25DLFVBQVUsR0FBRyxJQUFJO0FBRXZCLE1BQU0sT0FBTyw0QkFBNEI7Ozs7Ozs7Ozs7SUFPdkMsWUFDcUIsUUFBYSxFQUFtQixLQUFhLEVBQzdDLFNBQWlCLEVBQW1CLE1BQWMsRUFDbEQsT0FBZSxFQUFtQixTQUErQixFQUNqRSxTQUFvQjtRQUhwQixhQUFRLEdBQVIsUUFBUSxDQUFLO1FBQW1CLFVBQUssR0FBTCxLQUFLLENBQVE7UUFDN0MsY0FBUyxHQUFULFNBQVMsQ0FBUTtRQUFtQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2xELFlBQU8sR0FBUCxPQUFPLENBQVE7UUFBbUIsY0FBUyxHQUFULFNBQVMsQ0FBc0I7UUFDakUsY0FBUyxHQUFULFNBQVMsQ0FBVztRQVRqQyxjQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFDbkIsZUFBVSxHQUFHLENBQUMsQ0FBQztRQUNmLGNBQVMsR0FBRyxDQUFDLENBQUM7UUFPcEIsSUFBSSxDQUFDLFFBQVE7Ozs7UUFBRyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQSxDQUFDO0lBQ2pELENBQUM7Ozs7SUFFRCxLQUFLO1FBQ0gsc0JBQXNCLENBQ2xCLElBQUksQ0FBQyxRQUFRLEVBQ2IsR0FBRyxJQUFJLENB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QUFDLE1BQU0sRUFBRTs7a0JBQ2IsTUFBTSxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO1lBQ2xDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxLQUFLLENBQUM7WUFDdEIsS0FBSyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDMUI7S0FDRjtJQUNELE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFDO0FBQzlCLENBQUM7Ozs7OztBQUVELFNBQVMsaUJBQWlCLENBQUMsT0FBWSxFQUFFLElBQVk7SUFDbkQsT0FBTyxPQUFPLENBQUMsS0FBSyxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsQ0FBQztBQUM5QyxDQUFDOzs7Ozs7QUFFRCxTQUFTLFVBQVUsQ0FBQyxLQUFhLEVBQUUsSUFBWTs7UUFDekMsS0FBSyxHQUFHLENBQUM7SUFDYixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTs7Y0FDL0IsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxLQUFLLElBQUk7WUFBRSxLQUFLLEVBQUUsQ0FBQztLQUN6QjtJQUNELE9BQU8sS0FBSyxDQUFDO0FBQ2YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbmNvbnN0IEVMQVBTRURfVElNRV9NQVhfREVDSU1BTF9QTEFDRVMgPSAzO1xuY29uc3QgQU5JTUFUSU9OX1BST1AgPSAnYW5pbWF0aW9uJztcbmNvbnN0IEFOSU1BVElPTkVORF9FVkVOVCA9ICdhbmltYXRpb25lbmQnO1xuY29uc3QgT05FX1NFQ09ORCA9IDEwMDA7XG5cbmV4cG9ydCBjbGFzcyBFbGVtZW50QW5pbWF0aW9uU3R5bGVIYW5kbGVyIHtcbiAgcHJpdmF0ZSByZWFkb25seSBfZXZlbnRGbjogKGU6IGFueSkgPT4gYW55O1xuICBwcml2YXRlIF9maW5pc2hlZCA9IGZhbHNlO1xuICBwcml2YXRlIF9kZXN0cm95ZWQgPSBmYWxzZTtcbiAgcHJpdmF0ZSBfc3RhcnRUaW1lID0gMDtcbiAgcHJpdmF0ZSBfcG9zaXRpb24gPSAwO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgICAgcHJpdmF0ZSByZWFkb25seSBfZWxlbWVudDogYW55LCBwcml2YXRlIHJlYWRvbmx5IF9uYW1lOiBzdHJpbmcsXG4gICAgICBwcml2YXRlIHJlYWRvbmx5IF9kdXJhdGlvbjogbnVtYmVyLCBwcml2YXRlIHJlYWRvbmx5IF9kZWxheTogbnVtYmVyLFxuICAgICAgcHJpdmF0ZSByZWFkb25seSBfZWFzaW5nOiBzdHJpbmcsIHByaXZhdGUgcmVhZG9ubHkgX2ZpbGxNb2RlOiAnJ3wnYm90aCd8J2ZvcndhcmRzJyxcbiAgICAgIHByaXZhdGUgcmVhZG9ubHkgX29uRG9uZUZuOiAoKSA9PiBhbnkpIHtcbiAgICB0aGlzLl9ldmVudEZuID0gKGUpID0+IHRoaXMuX2hhbmRsZUNhbGxiYWNrKGUpO1xuICB9XG5cbiAgYXBwbHkoKSB7XG4gICAgYXBwbHlLZXlmcmFtZUFuaW1hdGlvbihcbiAgICAgICAgdGhpcy5fZWxlbWVudCxcbiAgICAgICAgYCR7dGhpcy5fZHVyYXRpb259bXMgJHt0aGlzLl9lYXNpbmd9ICR7dGhpcy5fZGVsYXl9bXMgMSBub3JtYWwgJHt0aGlzLl9maWxsTW9kZX0gJHtcbiAgICAgICAgICAgIHRoaXMuX25hbWV9YCk7XG4gICAgYWRkUmVtb3ZlQW5pbWF0aW9uRXZlbnQodGhpcy5fZWxlbWVudCwgdGhpcy5fZXZlbnRGbiwgZmFsc2UpO1xuICAgIHRoaXMuX3N0YXJ0VGltZSA9IERhdGUubm93KCk7XG4gIH1cblxuICBwYXVzZSgpIHtcbiAgICBwbGF5UGF1c2VBbmltYXRpb24odGhpcy5fZWxlbWVudCwgdGhpcy5fbmFtZSwgJ3BhdXNlZCcpO1xuICB9XG5cbiAgcmVzdW1lKCkge1xuICAgIHBsYXlQYXVzZUFuaW1hdGlvbih0aGlzLl9lbGVtZW50LCB0aGlzLl9uYW1lLCAncnVubmluZycpO1xuICB9XG5cbiAgc2V0UG9zaXRpb24ocG9zaXRpb246IG51bWJlcikge1xuICAgIGNvbnN0IGluZGV4ID0gZmluZEluZGV4Rm9yQW5pbWF0aW9uKHRoaXMuX2VsZW1lbnQsIHRoaXMuX25hbWUpO1xuICAgIHRoaXMuX3Bvc2l0aW9uID0gcG9zaXRpb24gKiB0aGlzLl9kdXJhdGlvbjtcbiAgICBzZXRBbmltYXRpb25TdHlsZSh0aGlzLl9lbGVtZW50LCAnRGVsYXknLCBgLSR7dGhpcy5fcG9zaXRpb259bXNgLCBpbmRleCk7XG4gIH1cblxuICBnZXRQb3NpdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fcG9zaXRpb247XG4gIH1cblxuICBwcml2YXRlIF9oYW5kbGVDYWxsYmFjayhldmVudDogYW55KSB7XG4gICAgY29uc3QgdGltZXN0YW1wID0gZXZlbnQuX25nVGVzdE1hbnVhbFRpbWVzdGFtcCB8fCBEYXRlLm5vdygpO1xuICAgIGNvbnN0IGVsYXBzZWRUaW1lID1cbiAgICAgICAgcGFyc2VGbG9hdChldmVudC5lbGFwc2VkVGltZS50b0ZpeGVkKEVMQVBTRURfVElNRV9NQVhfREVDSU1BTF9QTEFDRVMpKSAqIE9ORV9TRUNPTkQ7XG4gICAgaWYgKGV2ZW50LmFuaW1hdGlvbk5hbWUgPT0gdGhpcy5fbmFtZSAmJlxuICAgICAgICBNYXRoLm1heCh0aW1lc3RhbXAgLSB0aGlzLl9zdGFydFRpbWUsIDApID49IHRoaXMuX2RlbGF5ICYmIGVsYXBzZWRUaW1lID49IHRoaXMuX2R1cmF0aW9uKSB7XG4gICAgICB0aGlzLmZpbmlzaCgpO1xuICAgIH1cbiAgfVxuXG4gIGZpbmlzaCgpIHtcbiAgICBpZiAodGhpcy5fZmluaXNoZWQpIHJldHVybjtcbiAgICB0aGlzLl9maW5pc2hlZCA9IHRydWU7XG4gICAgdGhpcy5fb25Eb25lRm4oKTtcbiAgICBhZGRSZW1vdmVBbmltYXRpb25FdmVudCh0aGlzLl9lbGVtZW50LCB0aGlzLl9ldmVudEZuLCB0cnVlKTtcbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMuX2Rlc3Ryb3llZCkgcmV0dXJuO1xuICAgIHRoaXMuX2Rlc3Ryb3llZCA9IHRydWU7XG4gICAgdGhpcy5maW5pc2goKTtcbiAgICByZW1vdmVLZXlmcmFtZUFuaW1hdGlvbih0aGlzLl9lbGVtZW50LCB0aGlzLl9uYW1lKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBwbGF5UGF1c2VBbmltYXRpb24oZWxlbWVudDogYW55LCBuYW1lOiBzdHJpbmcsIHN0YXR1czogJ3J1bm5pbmcnfCdwYXVzZWQnKSB7XG4gIGNvbnN0IGluZGV4ID0gZmluZEluZGV4Rm9yQW5pbWF0aW9uKGVsZW1lbnQsIG5hbWUpO1xuICBzZXRBbmltYXRpb25TdHlsZShlbGVtZW50LCAnUGxheVN0YXRlJywgc3RhdHVzLCBpbmRleCk7XG59XG5cbmZ1bmN0aW9uIGFwcGx5S2V5ZnJhbWVBbmltYXRpb24oZWxlbWVudDogYW55LCB2YWx1ZTogc3RyaW5nKTogbnVtYmVyIHtcbiAgY29uc3QgYW5pbSA9IGdldEFuaW1hdGlvblN0eWxlKGVsZW1lbnQsICcnKS50cmltKCk7XG4gIGxldCBpbmRleCA9IDA7XG4gIGlmIChhbmltLmxlbmd0aCkge1xuICAgIGluZGV4ID0gY291bnRDaGFycyhhbmltLCAnLCcpICsgMTtcbiAgICB2YWx1ZSA9IGAke2FuaW19LCAke3ZhbHVlfWA7XG4gIH1cbiAgc2V0QW5pbWF0aW9uU3R5bGUoZWxlbWVudCwgJycsIHZhbHVlKTtcbiAgcmV0dXJuIGluZGV4O1xufVxuXG5mdW5jdGlvbiByZW1vdmVLZXlmcmFtZUFuaW1hdGlvbihlbGVtZW50OiBhbnksIG5hbWU6IHN0cmluZykge1xuICBjb25zdCBhbmltID0gZ2V0QW5pbWF0aW9uU3R5bGUoZWxlbWVudCwgJycpO1xuICBjb25zdCB0b2tlbnMgPSBhbmltLnNwbGl0KCcsJyk7XG4gIGNvbnN0IGluZGV4ID0gZmluZE1hdGNoaW5nVG9rZW5JbmRleCh0b2tlbnMsIG5hbWUpO1xuICBpZiAoaW5kZXggPj0gMCkge1xuICAgIHRva2Vucy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIGNvbnN0IG5ld1ZhbHVlID0gdG9rZW5zLmpvaW4oJywnKTtcbiAgICBzZXRBbmltYXRpb25TdHlsZShlbGVtZW50LCAnJywgbmV3VmFsdWUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGZpbmRJbmRleEZvckFuaW1hdGlvbihlbGVtZW50OiBhbnksIHZhbHVlOiBzdHJpbmcpIHtcbiAgY29uc3QgYW5pbSA9IGdldEFuaW1hdGlvblN0eWxlKGVsZW1lbnQsICcnKTtcbiAgaWYgKGFuaW0uaW5kZXhPZignLCcpID4gMCkge1xuICAgIGNvbnN0IHRva2VucyA9IGFuaW0uc3BsaXQoJywnKTtcbiAgICByZXR1cm4gZmluZE1hdGNoaW5nVG9rZW5JbmRleCh0b2tlbnMsIHZhbHVlKTtcbiAgfVxuICByZXR1cm4gZmluZE1hdGNoaW5nVG9rZW5JbmRleChbYW5pbV0sIHZhbHVlKTtcbn1cblxuZnVuY3Rpb24gZmluZE1hdGNoaW5nVG9rZW5JbmRleCh0b2tlbnM6IHN0cmluZ1tdLCBzZWFyY2hUb2tlbjogc3RyaW5nKTogbnVtYmVyIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b2tlbnMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAodG9rZW5zW2ldLmluZGV4T2Yoc2VhcmNoVG9rZW4pID49IDApIHtcbiAgICAgIHJldHVybiBpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gLTE7XG59XG5cbmZ1bmN0aW9uIGFkZFJlbW92ZUFuaW1hdGlvbkV2ZW50KGVsZW1lbnQ6IGFueSwgZm46IChlOiBhbnkpID0+IGFueSwgZG9SZW1vdmU6IGJvb2xlYW4pIHtcbiAgZG9SZW1vdmUgPyBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoQU5JTUFUSU9ORU5EX0VWRU5ULCBmbikgOlxuICAgICAgICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihBTklNQVRJT05FTkRfRVZFTlQsIGZuKTtcbn1cblxuZnVuY3Rpb24gc2V0QW5pbWF0aW9uU3R5bGUoZWxlbWVudDogYW55LCBuYW1lOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcsIGluZGV4PzogbnVtYmVyKSB7XG4gIGNvbnN0IHByb3AgPSBBTklNQVRJT05fUFJPUCArIG5hbWU7XG4gIGlmIChpbmRleCAhPSBudWxsKSB7XG4gICAgY29uc3Qgb2xkVmFsdWUgPSBlbGVtZW50LnN0eWxlW3Byb3BdO1xuICAgIGlmIChvbGRWYWx1ZS5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IHRva2VucyA9IG9sZFZhbHVlLnNwbGl0KCcsJyk7XG4gICAgICB0b2tlbnNbaW5kZXhdID0gdmFsdWU7XG4gICAgICB2YWx1ZSA9IHRva2Vucy5qb2luKCcsJyk7XG4gICAgfVxuICB9XG4gIGVsZW1lbnQuc3R5bGVbcHJvcF0gPSB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gZ2V0QW5pbWF0aW9uU3R5bGUoZWxlbWVudDogYW55LCBuYW1lOiBzdHJpbmcpIHtcbiAgcmV0dXJuIGVsZW1lbnQuc3R5bGVbQU5JTUFUSU9OX1BST1AgKyBuYW1lXTtcbn1cblxuZnVuY3Rpb24gY291bnRDaGFycyh2YWx1ZTogc3RyaW5nLCBjaGFyOiBzdHJpbmcpOiBudW1iZXIge1xuICBsZXQgY291bnQgPSAwO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHZhbHVlLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgYyA9IHZhbHVlLmNoYXJBdChpKTtcbiAgICBpZiAoYyA9PT0gY2hhcikgY291bnQrKztcbiAgfVxuICByZXR1cm4gY291bnQ7XG59XG4iXX0=
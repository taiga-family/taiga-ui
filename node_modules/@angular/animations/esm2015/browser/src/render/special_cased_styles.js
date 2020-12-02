/**
 * @fileoverview added by tsickle
 * Generated from: packages/animations/browser/src/render/special_cased_styles.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { eraseStyles, setStyles } from '../util';
/**
 * Returns an instance of `SpecialCasedStyles` if and when any special (non animateable) styles are
 * detected.
 *
 * In CSS there exist properties that cannot be animated within a keyframe animation
 * (whether it be via CSS keyframes or web-animations) and the animation implementation
 * will ignore them. This function is designed to detect those special cased styles and
 * return a container that will be executed at the start and end of the animation.
 *
 * @param {?} element
 * @param {?} styles
 * @return {?} an instance of `SpecialCasedStyles` if any special styles are detected otherwise `null`
 */
export function packageNonAnimatableStyles(element, styles) {
    /** @type {?} */
    let startStyles = null;
    /** @type {?} */
    let endStyles = null;
    if (Array.isArray(styles) && styles.length) {
        startStyles = filterNonAnimatableStyles(styles[0]);
        if (styles.length > 1) {
            endStyles = filterNonAnimatableStyles(styles[styles.length - 1]);
        }
    }
    else if (styles) {
        startStyles = filterNonAnimatableStyles(styles);
    }
    return (startStyles || endStyles) ? new SpecialCasedStyles(element, startStyles, endStyles) :
        null;
}
/**
 * Designed to be executed during a keyframe-based animation to apply any special-cased styles.
 *
 * When started (when the `start()` method is run) then the provided `startStyles`
 * will be applied. When finished (when the `finish()` method is called) the
 * `endStyles` will be applied as well any any starting styles. Finally when
 * `destroy()` is called then all styles will be removed.
 */
export class SpecialCasedStyles {
    /**
     * @param {?} _element
     * @param {?} _startStyles
     * @param {?} _endStyles
     */
    constructor(_element, _startStyles, _endStyles) {
        this._element = _element;
        this._startStyles = _startStyles;
        this._endStyles = _endStyles;
        this._state = 0 /* Pending */;
        /** @type {?} */
        let initialStyles = SpecialCasedStyles.initialStylesByElement.get(_element);
        if (!initialStyles) {
            SpecialCasedStyles.initialStylesByElement.set(_element, initialStyles = {});
        }
        this._initialStyles = initialStyles;
    }
    /**
     * @return {?}
     */
    start() {
        if (this._state < 1 /* Started */) {
            if (this._startStyles) {
                setStyles(this._element, this._startStyles, this._initialStyles);
            }
            this._state = 1 /* Started */;
        }
    }
    /**
     * @return {?}
     */
    finish() {
        this.start();
        if (this._state < 2 /* Finished */) {
            setStyles(this._element, this._initialStyles);
            if (this._endStyles) {
                setStyles(this._element, this._endStyles);
                this._endStyles = null;
            }
            this._state = 1 /* Started */;
        }
    }
    /**
     * @return {?}
     */
    destroy() {
        this.finish();
        if (this._state < 3 /* Destroyed */) {
            SpecialCasedStyles.initialStylesByElement.delete(this._element);
            if (this._startStyles) {
                eraseStyles(this._element, this._startStyles);
                this._endStyles = null;
            }
            if (this._endStyles) {
                eraseStyles(this._element, this._endStyles);
                this._endStyles = null;
            }
            setStyles(this._element, this._initialStyles);
            this._state = 3 /* Destroyed */;
        }
    }
}
SpecialCasedStyles.initialStylesByElement = new WeakMap();
if (false) {
    /** @type {?} */
    SpecialCasedStyles.initialStylesByElement;
    /**
     * @type {?}
     * @private
     */
    SpecialCasedStyles.prototype._state;
    /**
     * @type {?}
     * @private
     */
    SpecialCasedStyles.prototype._initialStyles;
    /**
     * @type {?}
     * @private
     */
    SpecialCasedStyles.prototype._element;
    /**
     * @type {?}
     * @private
     */
    SpecialCasedStyles.prototype._startStyles;
    /**
     * @type {?}
     * @private
     */
    SpecialCasedStyles.prototype._endStyles;
}
/** @enum {number} */
const SpecialCasedStylesState = {
    Pending: 0,
    Started: 1,
    Finished: 2,
    Destroyed: 3,
};
/**
 * @param {?} styles
 * @return {?}
 */
function filterNonAnimatableStyles(styles) {
    /** @type {?} */
    let result = null;
    /** @type {?} */
    const props = Object.keys(styles);
    for (let i = 0; i < props.length; i++) {
        /** @type {?} */
        const prop = props[i];
        if (isNonAnimatableStyle(prop)) {
            result = result || {};
            result[prop] = styles[prop];
        }
    }
    return result;
}
/**
 * @param {?} prop
 * @return {?}
 */
function isNonAnimatableStyle(prop) {
    return prop === 'display' || prop === 'position';
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BlY2lhbF9jYXNlZF9zdHlsZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9hbmltYXRpb25zL2Jyb3dzZXIvc3JjL3JlbmRlci9zcGVjaWFsX2Nhc2VkX3N0eWxlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFPQSxPQUFPLEVBQUMsV0FBVyxFQUFFLFNBQVMsRUFBQyxNQUFNLFNBQVMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7QUFhL0MsTUFBTSxVQUFVLDBCQUEwQixDQUN0QyxPQUFZLEVBQUUsTUFBbUQ7O1FBQy9ELFdBQVcsR0FBOEIsSUFBSTs7UUFDN0MsU0FBUyxHQUE4QixJQUFJO0lBQy9DLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxNQUFNLENBQUMsTUFBTSxFQUFFO1FBQzFDLFdBQVcsR0FBRyx5QkFBeUIsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNuRCxJQUFJLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ3JCLFNBQVMsR0FBRyx5QkFBeUIsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2xFO0tBQ0Y7U0FBTSxJQUFJLE1BQU0sRUFBRTtRQUNqQixXQUFXLEdBQUcseUJBQXlCLENBQUMsTUFBTSxDQUFDLENBQUM7S0FDakQ7SUFFRCxPQUFPLENBQUMsV0FBVyxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLGtCQUFrQixDQUFDLE9BQU8sRUFBRSxXQUFXLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUM7QUFDM0MsQ0FBQzs7Ozs7Ozs7O0FBVUQsTUFBTSxPQUFPLGtCQUFrQjs7Ozs7O0lBTTdCLFlBQ1ksUUFBYSxFQUFVLFlBQXVDLEVBQzlELFVBQXFDO1FBRHJDLGFBQVEsR0FBUixR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QUMsQ0FBQztRQUNyQixJQUFJLG9CQUFvQixDQUFDLElBQUksQ0FBQyxFQUFFO1lBQzlCLE1BQU0sR0FBRyxNQUFNLElBQUksRUFBRSxDQUFDO1lBQ3RCLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDN0I7S0FDRjtJQUNELE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUM7Ozs7O0FBRUQsU0FBUyxvQkFBb0IsQ0FBQyxJQUFZO0lBQ3hDLE9BQU8sSUFBSSxLQUFLLFNBQVMsSUFBSSxJQUFJLEtBQUssVUFBVSxDQUFDO0FBQ25ELENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5pbXBvcnQge2VyYXNlU3R5bGVzLCBzZXRTdHlsZXN9IGZyb20gJy4uL3V0aWwnO1xuXG4vKipcbiAqIFJldHVybnMgYW4gaW5zdGFuY2Ugb2YgYFNwZWNpYWxDYXNlZFN0eWxlc2AgaWYgYW5kIHdoZW4gYW55IHNwZWNpYWwgKG5vbiBhbmltYXRlYWJsZSkgc3R5bGVzIGFyZVxuICogZGV0ZWN0ZWQuXG4gKlxuICogSW4gQ1NTIHRoZXJlIGV4aXN0IHByb3BlcnRpZXMgdGhhdCBjYW5ub3QgYmUgYW5pbWF0ZWQgd2l0aGluIGEga2V5ZnJhbWUgYW5pbWF0aW9uXG4gKiAod2hldGhlciBpdCBiZSB2aWEgQ1NTIGtleWZyYW1lcyBvciB3ZWItYW5pbWF0aW9ucykgYW5kIHRoZSBhbmltYXRpb24gaW1wbGVtZW50YXRpb25cbiAqIHdpbGwgaWdub3JlIHRoZW0uIFRoaXMgZnVuY3Rpb24gaXMgZGVzaWduZWQgdG8gZGV0ZWN0IHRob3NlIHNwZWNpYWwgY2FzZWQgc3R5bGVzIGFuZFxuICogcmV0dXJuIGEgY29udGFpbmVyIHRoYXQgd2lsbCBiZSBleGVjdXRlZCBhdCB0aGUgc3RhcnQgYW5kIGVuZCBvZiB0aGUgYW5pbWF0aW9uLlxuICpcbiAqIEByZXR1cm5zIGFuIGluc3RhbmNlIG9mIGBTcGVjaWFsQ2FzZWRTdHlsZXNgIGlmIGFueSBzcGVjaWFsIHN0eWxlcyBhcmUgZGV0ZWN0ZWQgb3RoZXJ3aXNlIGBudWxsYFxuICovXG5leHBvcnQgZnVuY3Rpb24gcGFja2FnZU5vbkFuaW1hdGFibGVTdHlsZXMoXG4gICAgZWxlbWVudDogYW55LCBzdHlsZXM6IHtba2V5OiBzdHJpbmddOiBhbnl9fHtba2V5OiBzdHJpbmddOiBhbnl9W10pOiBTcGVjaWFsQ2FzZWRTdHlsZXN8bnVsbCB7XG4gIGxldCBzdGFydFN0eWxlczoge1trZXk6IHN0cmluZ106IGFueX18bnVsbCA9IG51bGw7XG4gIGxldCBlbmRTdHlsZXM6IHtba2V5OiBzdHJpbmddOiBhbnl9fG51bGwgPSBudWxsO1xuICBpZiAoQXJyYXkuaXNBcnJheShzdHlsZXMpICYmIHN0eWxlcy5sZW5ndGgpIHtcbiAgICBzdGFydFN0eWxlcyA9IGZpbHRlck5vbkFuaW1hdGFibGVTdHlsZXMoc3R5bGVzWzBdKTtcbiAgICBpZiAoc3R5bGVzLmxlbmd0aCA+IDEpIHtcbiAgICAgIGVuZFN0eWxlcyA9IGZpbHRlck5vbkFuaW1hdGFibGVTdHlsZXMoc3R5bGVzW3N0eWxlcy5sZW5ndGggLSAxXSk7XG4gICAgfVxuICB9IGVsc2UgaWYgKHN0eWxlcykge1xuICAgIHN0YXJ0U3R5bGVzID0gZmlsdGVyTm9uQW5pbWF0YWJsZVN0eWxlcyhzdHlsZXMpO1xuICB9XG5cbiAgcmV0dXJuIChzdGFydFN0eWxlcyB8fCBlbmRTdHlsZXMpID8gbmV3IFNwZWNpYWxDYXNlZFN0eWxlcyhlbGVtZW50LCBzdGFydFN0eWxlcywgZW5kU3R5bGVzKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGw7XG59XG5cbi8qKlxuICogRGVzaWduZWQgdG8gYmUgZXhlY3V0ZWQgZHVyaW5nIGEga2V5ZnJhbWUtYmFzZWQgYW5pbWF0aW9uIHRvIGFwcGx5IGFueSBzcGVjaWFsLWNhc2VkIHN0eWxlcy5cbiAqXG4gKiBXaGVuIHN0YXJ0ZWQgKHdoZW4gdGhlIGBzdGFydCgpYCBtZXRob2QgaXMgcnVuKSB0aGVuIHRoZSBwcm92aWRlZCBgc3RhcnRTdHlsZXNgXG4gKiB3aWxsIGJlIGFwcGxpZWQuIFdoZW4gZmluaXNoZWQgKHdoZW4gdGhlIGBmaW5pc2goKWAgbWV0aG9kIGlzIGNhbGxlZCkgdGhlXG4gKiBgZW5kU3R5bGVzYCB3aWxsIGJlIGFwcGxpZWQgYXMgd2VsbCBhbnkgYW55IHN0YXJ0aW5nIHN0eWxlcy4gRmluYWxseSB3aGVuXG4gKiBgZGVzdHJveSgpYCBpcyBjYWxsZWQgdGhlbiBhbGwgc3R5bGVzIHdpbGwgYmUgcmVtb3ZlZC5cbiAqL1xuZXhwb3J0IGNsYXNzIFNwZWNpYWxDYXNlZFN0eWxlcyB7XG4gIHN0YXRpYyBpbml0aWFsU3R5bGVzQnlFbGVtZW50ID0gbmV3IFdlYWtNYXA8YW55LCB7W2tleTogc3RyaW5nXTogYW55fT4oKTtcblxuICBwcml2YXRlIF9zdGF0ZSA9IFNwZWNpYWxDYXNlZFN0eWxlc1N0YXRlLlBlbmRpbmc7XG4gIHByaXZhdGUgX2luaXRpYWxTdHlsZXMhOiB7W2tleTogc3RyaW5nXTogYW55fTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICAgIHByaXZhdGUgX2VsZW1lbnQ6IGFueSwgcHJpdmF0ZSBfc3RhcnRTdHlsZXM6IHtba2V5OiBzdHJpbmddOiBhbnl9fG51bGwsXG4gICAgICBwcml2YXRlIF9lbmRTdHlsZXM6IHtba2V5OiBzdHJpbmddOiBhbnl9fG51bGwpIHtcbiAgICBsZXQgaW5pdGlhbFN0eWxlcyA9IFNwZWNpYWxDYXNlZFN0eWxlcy5pbml0aWFsU3R5bGVzQnlFbGVtZW50LmdldChfZWxlbWVudCk7XG4gICAgaWYgKCFpbml0aWFsU3R5bGVzKSB7XG4gICAgICBTcGVjaWFsQ2FzZWRTdHlsZXMuaW5pdGlhbFN0eWxlc0J5RWxlbWVudC5zZXQoX2VsZW1lbnQsIGluaXRpYWxTdHlsZXMgPSB7fSk7XG4gICAgfVxuICAgIHRoaXMuX2luaXRpYWxTdHlsZXMgPSBpbml0aWFsU3R5bGVzO1xuICB9XG5cbiAgc3RhcnQoKSB7XG4gICAgaWYgKHRoaXMuX3N0YXRlIDwgU3BlY2lhbENhc2VkU3R5bGVzU3RhdGUuU3RhcnRlZCkge1xuICAgICAgaWYgKHRoaXMuX3N0YXJ0U3R5bGVzKSB7XG4gICAgICAgIHNldFN0eWxlcyh0aGlzLl9lbGVtZW50LCB0aGlzLl9zdGFydFN0eWxlcywgdGhpcy5faW5pdGlhbFN0eWxlcyk7XG4gICAgICB9XG4gICAgICB0aGlzLl9zdGF0ZSA9IFNwZWNpYWxDYXNlZFN0eWxlc1N0YXRlLlN0YXJ0ZWQ7XG4gICAgfVxuICB9XG5cbiAgZmluaXNoKCkge1xuICAgIHRoaXMuc3RhcnQoKTtcbiAgICBpZiAodGhpcy5fc3RhdGUgPCBTcGVjaWFsQ2FzZWRTdHlsZXNTdGF0ZS5GaW5pc2hlZCkge1xuICAgICAgc2V0U3R5bGVzKHRoaXMuX2VsZW1lbnQsIHRoaXMuX2luaXRpYWxTdHlsZXMpO1xuICAgICAgaWYgKHRoaXMuX2VuZFN0eWxlcykge1xuICAgICAgICBzZXRTdHlsZXModGhpcy5fZWxlbWVudCwgdGhpcy5fZW5kU3R5bGVzKTtcbiAgICAgICAgdGhpcy5fZW5kU3R5bGVzID0gbnVsbDtcbiAgICAgIH1cbiAgICAgIHRoaXMuX3N0YXRlID0gU3BlY2lhbENhc2VkU3R5bGVzU3RhdGUuU3RhcnRlZDtcbiAgICB9XG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIHRoaXMuZmluaXNoKCk7XG4gICAgaWYgKHRoaXMuX3N0YXRlIDwgU3BlY2lhbENhc2VkU3R5bGVzU3RhdGUuRGVzdHJveWVkKSB7XG4gICAgICBTcGVjaWFsQ2FzZWRTdHlsZXMuaW5pdGlhbFN0eWxlc0J5RWxlbWVudC5kZWxldGUodGhpcy5fZWxlbWVudCk7XG4gICAgICBpZiAodGhpcy5fc3RhcnRTdHlsZXMpIHtcbiAgICAgICAgZXJhc2VTdHlsZXModGhpcy5fZWxlbWVudCwgdGhpcy5fc3RhcnRTdHlsZXMpO1xuICAgICAgICB0aGlzLl9lbmRTdHlsZXMgPSBudWxsO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuX2VuZFN0eWxlcykge1xuICAgICAgICBlcmFzZVN0eWxlcyh0aGlzLl9lbGVtZW50LCB0aGlzLl9lbmRTdHlsZXMpO1xuICAgICAgICB0aGlzLl9lbmRTdHlsZXMgPSBudWxsO1xuICAgICAgfVxuICAgICAgc2V0U3R5bGVzKHRoaXMuX2VsZW1lbnQsIHRoaXMuX2luaXRpYWxTdHlsZXMpO1xuICAgICAgdGhpcy5fc3RhdGUgPSBTcGVjaWFsQ2FzZWRTdHlsZXNTdGF0ZS5EZXN0cm95ZWQ7XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQW4gZW51bSBvZiBzdGF0ZXMgcmVmbGVjdGl2ZSBvZiB3aGF0IHRoZSBzdGF0dXMgb2YgYFNwZWNpYWxDYXNlZFN0eWxlc2AgaXMuXG4gKlxuICogRGVwZW5kaW5nIG9uIGhvdyBgU3BlY2lhbENhc2VkU3R5bGVzYCBpcyBpbnRlcmFjdGVkIHdpdGgsIHRoZSBzdGFydCBhbmQgZW5kXG4gKiBzdHlsZXMgbWF5IG5vdCBiZSBhcHBsaWVkIGluIHRoZSBzYW1lIHdheS4gVGhpcyBlbnVtIGVuc3VyZXMgdGhhdCBpZiBhbmQgd2hlblxuICogdGhlIGVuZGluZyBzdHlsZXMgYXJlIGFwcGxpZWQgdGhlbiB0aGUgc3RhcnRpbmcgc3R5bGVzIGFyZSBhcHBsaWVkLiBJdCBpc1xuICogYWxzbyB1c2VkIHRvIHJlZmxlY3Qgd2hhdCB0aGUgY3VycmVudCBzdGF0dXMgb2YgdGhlIHNwZWNpYWwgY2FzZWQgc3R5bGVzIGFyZVxuICogd2hpY2ggaGVscHMgcHJldmVudCB0aGUgc3RhcnRpbmcvZW5kaW5nIHN0eWxlcyBub3QgYmUgYXBwbGllZCB0d2ljZS4gSXQgaXNcbiAqIGFsc28gdXNlZCB0byBjbGVhbnVwIHRoZSBzdHlsZXMgb25jZSBgU3BlY2lhbENhc2VkU3R5bGVzYCBpcyBkZXN0cm95ZWQuXG4gKi9cbmNvbnN0IGVudW0gU3BlY2lhbENhc2VkU3R5bGVzU3RhdGUge1xuICBQZW5kaW5nID0gMCxcbiAgU3RhcnRlZCA9IDEsXG4gIEZpbmlzaGVkID0gMixcbiAgRGVzdHJveWVkID0gMyxcbn1cblxuZnVuY3Rpb24gZmlsdGVyTm9uQW5pbWF0YWJsZVN0eWxlcyhzdHlsZXM6IHtba2V5OiBzdHJpbmddOiBhbnl9KSB7XG4gIGxldCByZXN1bHQ6IHtba2V5OiBzdHJpbmddOiBhbnl9fG51bGwgPSBudWxsO1xuICBjb25zdCBwcm9wcyA9IE9iamVjdC5rZXlzKHN0eWxlcyk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBwcm9wID0gcHJvcHNbaV07XG4gICAgaWYgKGlzTm9uQW5pbWF0YWJsZVN0eWxlKHByb3ApKSB7XG4gICAgICByZXN1bHQgPSByZXN1bHQgfHwge307XG4gICAgICByZXN1bHRbcHJvcF0gPSBzdHlsZXNbcHJvcF07XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIGlzTm9uQW5pbWF0YWJsZVN0eWxlKHByb3A6IHN0cmluZykge1xuICByZXR1cm4gcHJvcCA9PT0gJ2Rpc3BsYXknIHx8IHByb3AgPT09ICdwb3NpdGlvbic7XG59XG4iXX0=
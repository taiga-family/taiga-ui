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
 * @returns an instance of `SpecialCasedStyles` if any special styles are detected otherwise `null`
 */
export function packageNonAnimatableStyles(element, styles) {
    var startStyles = null;
    var endStyles = null;
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
var SpecialCasedStyles = /** @class */ (function () {
    function SpecialCasedStyles(_element, _startStyles, _endStyles) {
        this._element = _element;
        this._startStyles = _startStyles;
        this._endStyles = _endStyles;
        this._state = 0 /* Pending */;
        var initialStyles = SpecialCasedStyles.initialStylesByElement.get(_element);
        if (!initialStyles) {
            SpecialCasedStyles.initialStylesByElement.set(_element, initialStyles = {});
        }
        this._initialStyles = initialStyles;
    }
    SpecialCasedStyles.prototype.start = function () {
        if (this._state < 1 /* Started */) {
            if (this._startStyles) {
                setStyles(this._element, this._startStyles, this._initialStyles);
            }
            this._state = 1 /* Started */;
        }
    };
    SpecialCasedStyles.prototype.finish = function () {
        this.start();
        if (this._state < 2 /* Finished */) {
            setStyles(this._element, this._initialStyles);
            if (this._endStyles) {
                setStyles(this._element, this._endStyles);
                this._endStyles = null;
            }
            this._state = 1 /* Started */;
        }
    };
    SpecialCasedStyles.prototype.destroy = function () {
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
    };
    SpecialCasedStyles.initialStylesByElement = new WeakMap();
    return SpecialCasedStyles;
}());
export { SpecialCasedStyles };
function filterNonAnimatableStyles(styles) {
    var result = null;
    var props = Object.keys(styles);
    for (var i = 0; i < props.length; i++) {
        var prop = props[i];
        if (isNonAnimatableStyle(prop)) {
            result = result || {};
            result[prop] = styles[prop];
        }
    }
    return result;
}
function isNonAnimatableStyle(prop) {
    return prop === 'display' || prop === 'position';
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BlY2lhbF9jYXNlZF9zdHlsZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9hbmltYXRpb25zL2Jyb3dzZXIvc3JjL3JlbmRlci9zcGVjaWFsX2Nhc2VkX3N0eWxlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFDSCxPQUFPLEVBQUMsV0FBVyxFQUFFLFNBQVMsRUFBQyxNQUFNLFNBQVMsQ0FBQztBQUUvQzs7Ozs7Ozs7OztHQVVHO0FBQ0gsTUFBTSxVQUFVLDBCQUEwQixDQUN0QyxPQUFZLEVBQUUsTUFBbUQ7SUFDbkUsSUFBSSxXQUFXLEdBQThCLElBQUksQ0FBQztJQUNsRCxJQUFJLFNBQVMsR0FBOEIsSUFBSSxDQUFDO0lBQ2hELElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxNQUFNLENBQUMsTUFBTSxFQUFFO1FBQzFDLFdBQVcsR0FBRyx5QkFBeUIsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNuRCxJQUFJLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ3JCLFNBQVMsR0FBRyx5QkFBeUIsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2xFO0tBQ0Y7U0FBTSxJQUFJLE1BQU0sRUFBRTtRQUNqQixXQUFXLEdBQUcseUJBQXlCLENBQUMsTUFBTSxDQUFDLENBQUM7S0FDakQ7SUFFRCxPQUFPLENBQUMsV0FBVyxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLGtCQUFrQixDQUFDLE9BQU8sRUFBRSxXQUFXLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUM7QUFDM0MsQ0FBQztBQUVEOzs7Ozs7O0dBT0c7QUFDSDtJQU1FLDRCQUNZLFFBQWEsRUFBVSxZQUF1QyxFQUM5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LENBQUM7WUFDdEIsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUM3QjtLQUNGO0lBQ0QsT0FBTyxNQUFNLENBQUM7QUFDaEIsQ0FBQztBQUVELFNBQVMsb0JBQW9CLENBQUMsSUFBWTtJQUN4QyxPQUFPLElBQUksS0FBSyxTQUFTLElBQUksSUFBSSxLQUFLLFVBQVUsQ0FBQztBQUNuRCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuaW1wb3J0IHtlcmFzZVN0eWxlcywgc2V0U3R5bGVzfSBmcm9tICcuLi91dGlsJztcblxuLyoqXG4gKiBSZXR1cm5zIGFuIGluc3RhbmNlIG9mIGBTcGVjaWFsQ2FzZWRTdHlsZXNgIGlmIGFuZCB3aGVuIGFueSBzcGVjaWFsIChub24gYW5pbWF0ZWFibGUpIHN0eWxlcyBhcmVcbiAqIGRldGVjdGVkLlxuICpcbiAqIEluIENTUyB0aGVyZSBleGlzdCBwcm9wZXJ0aWVzIHRoYXQgY2Fubm90IGJlIGFuaW1hdGVkIHdpdGhpbiBhIGtleWZyYW1lIGFuaW1hdGlvblxuICogKHdoZXRoZXIgaXQgYmUgdmlhIENTUyBrZXlmcmFtZXMgb3Igd2ViLWFuaW1hdGlvbnMpIGFuZCB0aGUgYW5pbWF0aW9uIGltcGxlbWVudGF0aW9uXG4gKiB3aWxsIGlnbm9yZSB0aGVtLiBUaGlzIGZ1bmN0aW9uIGlzIGRlc2lnbmVkIHRvIGRldGVjdCB0aG9zZSBzcGVjaWFsIGNhc2VkIHN0eWxlcyBhbmRcbiAqIHJldHVybiBhIGNvbnRhaW5lciB0aGF0IHdpbGwgYmUgZXhlY3V0ZWQgYXQgdGhlIHN0YXJ0IGFuZCBlbmQgb2YgdGhlIGFuaW1hdGlvbi5cbiAqXG4gKiBAcmV0dXJucyBhbiBpbnN0YW5jZSBvZiBgU3BlY2lhbENhc2VkU3R5bGVzYCBpZiBhbnkgc3BlY2lhbCBzdHlsZXMgYXJlIGRldGVjdGVkIG90aGVyd2lzZSBgbnVsbGBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhY2thZ2VOb25BbmltYXRhYmxlU3R5bGVzKFxuICAgIGVsZW1lbnQ6IGFueSwgc3R5bGVzOiB7W2tleTogc3RyaW5nXTogYW55fXx7W2tleTogc3RyaW5nXTogYW55fVtdKTogU3BlY2lhbENhc2VkU3R5bGVzfG51bGwge1xuICBsZXQgc3RhcnRTdHlsZXM6IHtba2V5OiBzdHJpbmddOiBhbnl9fG51bGwgPSBudWxsO1xuICBsZXQgZW5kU3R5bGVzOiB7W2tleTogc3RyaW5nXTogYW55fXxudWxsID0gbnVsbDtcbiAgaWYgKEFycmF5LmlzQXJyYXkoc3R5bGVzKSAmJiBzdHlsZXMubGVuZ3RoKSB7XG4gICAgc3RhcnRTdHlsZXMgPSBmaWx0ZXJOb25BbmltYXRhYmxlU3R5bGVzKHN0eWxlc1swXSk7XG4gICAgaWYgKHN0eWxlcy5sZW5ndGggPiAxKSB7XG4gICAgICBlbmRTdHlsZXMgPSBmaWx0ZXJOb25BbmltYXRhYmxlU3R5bGVzKHN0eWxlc1tzdHlsZXMubGVuZ3RoIC0gMV0pO1xuICAgIH1cbiAgfSBlbHNlIGlmIChzdHlsZXMpIHtcbiAgICBzdGFydFN0eWxlcyA9IGZpbHRlck5vbkFuaW1hdGFibGVTdHlsZXMoc3R5bGVzKTtcbiAgfVxuXG4gIHJldHVybiAoc3RhcnRTdHlsZXMgfHwgZW5kU3R5bGVzKSA/IG5ldyBTcGVjaWFsQ2FzZWRTdHlsZXMoZWxlbWVudCwgc3RhcnRTdHlsZXMsIGVuZFN0eWxlcykgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsO1xufVxuXG4vKipcbiAqIERlc2lnbmVkIHRvIGJlIGV4ZWN1dGVkIGR1cmluZyBhIGtleWZyYW1lLWJhc2VkIGFuaW1hdGlvbiB0byBhcHBseSBhbnkgc3BlY2lhbC1jYXNlZCBzdHlsZXMuXG4gKlxuICogV2hlbiBzdGFydGVkICh3aGVuIHRoZSBgc3RhcnQoKWAgbWV0aG9kIGlzIHJ1bikgdGhlbiB0aGUgcHJvdmlkZWQgYHN0YXJ0U3R5bGVzYFxuICogd2lsbCBiZSBhcHBsaWVkLiBXaGVuIGZpbmlzaGVkICh3aGVuIHRoZSBgZmluaXNoKClgIG1ldGhvZCBpcyBjYWxsZWQpIHRoZVxuICogYGVuZFN0eWxlc2Agd2lsbCBiZSBhcHBsaWVkIGFzIHdlbGwgYW55IGFueSBzdGFydGluZyBzdHlsZXMuIEZpbmFsbHkgd2hlblxuICogYGRlc3Ryb3koKWAgaXMgY2FsbGVkIHRoZW4gYWxsIHN0eWxlcyB3aWxsIGJlIHJlbW92ZWQuXG4gKi9cbmV4cG9ydCBjbGFzcyBTcGVjaWFsQ2FzZWRTdHlsZXMge1xuICBzdGF0aWMgaW5pdGlhbFN0eWxlc0J5RWxlbWVudCA9IG5ldyBXZWFrTWFwPGFueSwge1trZXk6IHN0cmluZ106IGFueX0+KCk7XG5cbiAgcHJpdmF0ZSBfc3RhdGUgPSBTcGVjaWFsQ2FzZWRTdHlsZXNTdGF0ZS5QZW5kaW5nO1xuICBwcml2YXRlIF9pbml0aWFsU3R5bGVzIToge1trZXk6IHN0cmluZ106IGFueX07XG5cbiAgY29uc3RydWN0b3IoXG4gICAgICBwcml2YXRlIF9lbGVtZW50OiBhbnksIHByaXZhdGUgX3N0YXJ0U3R5bGVzOiB7W2tleTogc3RyaW5nXTogYW55fXxudWxsLFxuICAgICAgcHJpdmF0ZSBfZW5kU3R5bGVzOiB7W2tleTogc3RyaW5nXTogYW55fXxudWxsKSB7XG4gICAgbGV0IGluaXRpYWxTdHlsZXMgPSBTcGVjaWFsQ2FzZWRTdHlsZXMuaW5pdGlhbFN0eWxlc0J5RWxlbWVudC5nZXQoX2VsZW1lbnQpO1xuICAgIGlmICghaW5pdGlhbFN0eWxlcykge1xuICAgICAgU3BlY2lhbENhc2VkU3R5bGVzLmluaXRpYWxTdHlsZXNCeUVsZW1lbnQuc2V0KF9lbGVtZW50LCBpbml0aWFsU3R5bGVzID0ge30pO1xuICAgIH1cbiAgICB0aGlzLl9pbml0aWFsU3R5bGVzID0gaW5pdGlhbFN0eWxlcztcbiAgfVxuXG4gIHN0YXJ0KCkge1xuICAgIGlmICh0aGlzLl9zdGF0ZSA8IFNwZWNpYWxDYXNlZFN0eWxlc1N0YXRlLlN0YXJ0ZWQpIHtcbiAgICAgIGlmICh0aGlzLl9zdGFydFN0eWxlcykge1xuICAgICAgICBzZXRTdHlsZXModGhpcy5fZWxlbWVudCwgdGhpcy5fc3RhcnRTdHlsZXMsIHRoaXMuX2luaXRpYWxTdHlsZXMpO1xuICAgICAgfVxuICAgICAgdGhpcy5fc3RhdGUgPSBTcGVjaWFsQ2FzZWRTdHlsZXNTdGF0ZS5TdGFydGVkO1xuICAgIH1cbiAgfVxuXG4gIGZpbmlzaCgpIHtcbiAgICB0aGlzLnN0YXJ0KCk7XG4gICAgaWYgKHRoaXMuX3N0YXRlIDwgU3BlY2lhbENhc2VkU3R5bGVzU3RhdGUuRmluaXNoZWQpIHtcbiAgICAgIHNldFN0eWxlcyh0aGlzLl9lbGVtZW50LCB0aGlzLl9pbml0aWFsU3R5bGVzKTtcbiAgICAgIGlmICh0aGlzLl9lbmRTdHlsZXMpIHtcbiAgICAgICAgc2V0U3R5bGVzKHRoaXMuX2VsZW1lbnQsIHRoaXMuX2VuZFN0eWxlcyk7XG4gICAgICAgIHRoaXMuX2VuZFN0eWxlcyA9IG51bGw7XG4gICAgICB9XG4gICAgICB0aGlzLl9zdGF0ZSA9IFNwZWNpYWxDYXNlZFN0eWxlc1N0YXRlLlN0YXJ0ZWQ7XG4gICAgfVxuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICB0aGlzLmZpbmlzaCgpO1xuICAgIGlmICh0aGlzLl9zdGF0ZSA8IFNwZWNpYWxDYXNlZFN0eWxlc1N0YXRlLkRlc3Ryb3llZCkge1xuICAgICAgU3BlY2lhbENhc2VkU3R5bGVzLmluaXRpYWxTdHlsZXNCeUVsZW1lbnQuZGVsZXRlKHRoaXMuX2VsZW1lbnQpO1xuICAgICAgaWYgKHRoaXMuX3N0YXJ0U3R5bGVzKSB7XG4gICAgICAgIGVyYXNlU3R5bGVzKHRoaXMuX2VsZW1lbnQsIHRoaXMuX3N0YXJ0U3R5bGVzKTtcbiAgICAgICAgdGhpcy5fZW5kU3R5bGVzID0gbnVsbDtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLl9lbmRTdHlsZXMpIHtcbiAgICAgICAgZXJhc2VTdHlsZXModGhpcy5fZWxlbWVudCwgdGhpcy5fZW5kU3R5bGVzKTtcbiAgICAgICAgdGhpcy5fZW5kU3R5bGVzID0gbnVsbDtcbiAgICAgIH1cbiAgICAgIHNldFN0eWxlcyh0aGlzLl9lbGVtZW50LCB0aGlzLl9pbml0aWFsU3R5bGVzKTtcbiAgICAgIHRoaXMuX3N0YXRlID0gU3BlY2lhbENhc2VkU3R5bGVzU3RhdGUuRGVzdHJveWVkO1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIEFuIGVudW0gb2Ygc3RhdGVzIHJlZmxlY3RpdmUgb2Ygd2hhdCB0aGUgc3RhdHVzIG9mIGBTcGVjaWFsQ2FzZWRTdHlsZXNgIGlzLlxuICpcbiAqIERlcGVuZGluZyBvbiBob3cgYFNwZWNpYWxDYXNlZFN0eWxlc2AgaXMgaW50ZXJhY3RlZCB3aXRoLCB0aGUgc3RhcnQgYW5kIGVuZFxuICogc3R5bGVzIG1heSBub3QgYmUgYXBwbGllZCBpbiB0aGUgc2FtZSB3YXkuIFRoaXMgZW51bSBlbnN1cmVzIHRoYXQgaWYgYW5kIHdoZW5cbiAqIHRoZSBlbmRpbmcgc3R5bGVzIGFyZSBhcHBsaWVkIHRoZW4gdGhlIHN0YXJ0aW5nIHN0eWxlcyBhcmUgYXBwbGllZC4gSXQgaXNcbiAqIGFsc28gdXNlZCB0byByZWZsZWN0IHdoYXQgdGhlIGN1cnJlbnQgc3RhdHVzIG9mIHRoZSBzcGVjaWFsIGNhc2VkIHN0eWxlcyBhcmVcbiAqIHdoaWNoIGhlbHBzIHByZXZlbnQgdGhlIHN0YXJ0aW5nL2VuZGluZyBzdHlsZXMgbm90IGJlIGFwcGxpZWQgdHdpY2UuIEl0IGlzXG4gKiBhbHNvIHVzZWQgdG8gY2xlYW51cCB0aGUgc3R5bGVzIG9uY2UgYFNwZWNpYWxDYXNlZFN0eWxlc2AgaXMgZGVzdHJveWVkLlxuICovXG5jb25zdCBlbnVtIFNwZWNpYWxDYXNlZFN0eWxlc1N0YXRlIHtcbiAgUGVuZGluZyA9IDAsXG4gIFN0YXJ0ZWQgPSAxLFxuICBGaW5pc2hlZCA9IDIsXG4gIERlc3Ryb3llZCA9IDMsXG59XG5cbmZ1bmN0aW9uIGZpbHRlck5vbkFuaW1hdGFibGVTdHlsZXMoc3R5bGVzOiB7W2tleTogc3RyaW5nXTogYW55fSkge1xuICBsZXQgcmVzdWx0OiB7W2tleTogc3RyaW5nXTogYW55fXxudWxsID0gbnVsbDtcbiAgY29uc3QgcHJvcHMgPSBPYmplY3Qua2V5cyhzdHlsZXMpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgcHJvcCA9IHByb3BzW2ldO1xuICAgIGlmIChpc05vbkFuaW1hdGFibGVTdHlsZShwcm9wKSkge1xuICAgICAgcmVzdWx0ID0gcmVzdWx0IHx8IHt9O1xuICAgICAgcmVzdWx0W3Byb3BdID0gc3R5bGVzW3Byb3BdO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBpc05vbkFuaW1hdGFibGVTdHlsZShwcm9wOiBzdHJpbmcpIHtcbiAgcmV0dXJuIHByb3AgPT09ICdkaXNwbGF5JyB8fCBwcm9wID09PSAncG9zaXRpb24nO1xufVxuIl19
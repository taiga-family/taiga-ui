/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { __extends, __read, __spread } from "tslib";
import { coerceBooleanProperty } from '@angular/cdk/coercion';
/**
 * Mixin to provide a directive with a function that checks if the sticky input has been
 * changed since the last time the function was called. Essentially adds a dirty-check to the
 * sticky value.
 * @docs-private
 */
export function mixinHasStickyInput(base) {
    return /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var _this = _super.apply(this, __spread(args)) || this;
            _this._sticky = false;
            /** Whether the sticky input has changed since it was last checked. */
            _this._hasStickyChanged = false;
            return _this;
        }
        Object.defineProperty(class_1.prototype, "sticky", {
            /** Whether sticky positioning should be applied. */
            get: function () { return this._sticky; },
            set: function (v) {
                var prevValue = this._sticky;
                this._sticky = coerceBooleanProperty(v);
                this._hasStickyChanged = prevValue !== this._sticky;
            },
            enumerable: true,
            configurable: true
        });
        /** Whether the sticky value has changed since this was last called. */
        class_1.prototype.hasStickyChanged = function () {
            var hasStickyChanged = this._hasStickyChanged;
            this._hasStickyChanged = false;
            return hasStickyChanged;
        };
        /** Resets the dirty check for cases where the sticky state has been used without checking. */
        class_1.prototype.resetStickyChanged = function () {
            this._hasStickyChanged = false;
        };
        return class_1;
    }(base));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FuLXN0aWNrLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2Nkay90YWJsZS9jYW4tc3RpY2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HOztBQUVILE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBNEI1RDs7Ozs7R0FLRztBQUNILE1BQU0sVUFBVSxtQkFBbUIsQ0FBNEIsSUFBTztJQUNwRTtRQUFxQiwyQkFBSTtRQXlCdkI7WUFBWSxjQUFjO2lCQUFkLFVBQWMsRUFBZCxxQkFBYyxFQUFkLElBQWM7Z0JBQWQseUJBQWM7O1lBQTFCLHdDQUF1QyxJQUFJLFdBQUk7WUFqQi9DLGFBQU8sR0FBWSxLQUFLLENBQUM7WUFFekIsc0VBQXNFO1lBQ3RFLHVCQUFpQixHQUFZLEtBQUssQ0FBQzs7UUFjVyxDQUFDO1FBdkIvQyxzQkFBSSwyQkFBTTtZQURWLG9EQUFvRDtpQkFDcEQsY0FBd0IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztpQkFDOUMsVUFBVyxDQUFVO2dCQUNuQixJQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO2dCQUMvQixJQUFJLENBQUMsT0FBTyxHQUFHLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN4QyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsU0FBUyxLQUFLLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDdEQsQ0FBQzs7O1dBTDZDO1FBVzlDLHVFQUF1RTtRQUN2RSxrQ0FBZ0IsR0FBaEI7WUFDRSxJQUFNLGdCQUFnQixHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztZQUNoRCxJQUFJLENBQUMsaUJBQWlCLEdBQUcsS0FBSyxDQUFDO1lBQy9CLE9BQU8sZ0JBQWdCLENBQUM7UUFDMUIsQ0FBQztRQUVELDhGQUE4RjtRQUM5RixvQ0FBa0IsR0FBbEI7WUFDRSxJQUFJLENBQUMsaUJBQWlCLEdBQUcsS0FBSyxDQUFDO1FBQ2pDLENBQUM7UUFHSCxjQUFDO0lBQUQsQ0FBQyxBQTFCTSxDQUFjLElBQUksR0EwQnZCO0FBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge2NvZXJjZUJvb2xlYW5Qcm9wZXJ0eX0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcblxuLyoqIEBkb2NzLXByaXZhdGUgKi9cbmV4cG9ydCB0eXBlIENvbnN0cnVjdG9yPFQ+ID0gbmV3KC4uLmFyZ3M6IGFueVtdKSA9PiBUO1xuXG4vKipcbiAqIEludGVyZmFjZSBmb3IgYSBtaXhpbiB0byBwcm92aWRlIGEgZGlyZWN0aXZlIHdpdGggYSBmdW5jdGlvbiB0aGF0IGNoZWNrcyBpZiB0aGUgc3RpY2t5IGlucHV0IGhhc1xuICogYmVlbiBjaGFuZ2VkIHNpbmNlIHRoZSBsYXN0IHRpbWUgdGhlIGZ1bmN0aW9uIHdhcyBjYWxsZWQuIEVzc2VudGlhbGx5IGFkZHMgYSBkaXJ0eS1jaGVjayB0byB0aGVcbiAqIHN0aWNreSB2YWx1ZS5cbiAqIEBkb2NzLXByaXZhdGVcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBDYW5TdGljayB7XG4gIC8qKiBXaGV0aGVyIHN0aWNreSBwb3NpdGlvbmluZyBzaG91bGQgYmUgYXBwbGllZC4gKi9cbiAgc3RpY2t5OiBib29sZWFuO1xuXG4gIC8qKiBXaGV0aGVyIHRoZSBzdGlja3kgaW5wdXQgaGFzIGNoYW5nZWQgc2luY2UgaXQgd2FzIGxhc3QgY2hlY2tlZC4gKi9cbiAgX2hhc1N0aWNreUNoYW5nZWQ6IGJvb2xlYW47XG5cbiAgLyoqIFdoZXRoZXIgdGhlIHN0aWNreSB2YWx1ZSBoYXMgY2hhbmdlZCBzaW5jZSB0aGlzIHdhcyBsYXN0IGNhbGxlZC4gKi9cbiAgaGFzU3RpY2t5Q2hhbmdlZCgpOiBib29sZWFuO1xuXG4gIC8qKiBSZXNldHMgdGhlIGRpcnR5IGNoZWNrIGZvciBjYXNlcyB3aGVyZSB0aGUgc3RpY2t5IHN0YXRlIGhhcyBiZWVuIHVzZWQgd2l0aG91dCBjaGVja2luZy4gKi9cbiAgcmVzZXRTdGlja3lDaGFuZ2VkKCk6IHZvaWQ7XG59XG5cbi8qKiBAZG9jcy1wcml2YXRlICovXG5leHBvcnQgdHlwZSBDYW5TdGlja0N0b3IgPSBDb25zdHJ1Y3RvcjxDYW5TdGljaz47XG5cbi8qKlxuICogTWl4aW4gdG8gcHJvdmlkZSBhIGRpcmVjdGl2ZSB3aXRoIGEgZnVuY3Rpb24gdGhhdCBjaGVja3MgaWYgdGhlIHN0aWNreSBpbnB1dCBoYXMgYmVlblxuICogY2hhbmdlZCBzaW5jZSB0aGUgbGFzdCB0aW1lIHRoZSBmdW5jdGlvbiB3YXMgY2FsbGVkLiBFc3NlbnRpYWxseSBhZGRzIGEgZGlydHktY2hlY2sgdG8gdGhlXG4gKiBzdGlja3kgdmFsdWUuXG4gKiBAZG9jcy1wcml2YXRlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtaXhpbkhhc1N0aWNreUlucHV0PFQgZXh0ZW5kcyBDb25zdHJ1Y3Rvcjx7fT4+KGJhc2U6IFQpOiBDYW5TdGlja0N0b3IgJiBUIHtcbiAgcmV0dXJuIGNsYXNzIGV4dGVuZHMgYmFzZSB7XG4gICAgLyoqIFdoZXRoZXIgc3RpY2t5IHBvc2l0aW9uaW5nIHNob3VsZCBiZSBhcHBsaWVkLiAqL1xuICAgIGdldCBzdGlja3koKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLl9zdGlja3k7IH1cbiAgICBzZXQgc3RpY2t5KHY6IGJvb2xlYW4pIHtcbiAgICAgIGNvbnN0IHByZXZWYWx1ZSA9IHRoaXMuX3N0aWNreTtcbiAgICAgIHRoaXMuX3N0aWNreSA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2KTtcbiAgICAgIHRoaXMuX2hhc1N0aWNreUNoYW5nZWQgPSBwcmV2VmFsdWUgIT09IHRoaXMuX3N0aWNreTtcbiAgICB9XG4gICAgX3N0aWNreTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgLyoqIFdoZXRoZXIgdGhlIHN0aWNreSBpbnB1dCBoYXMgY2hhbmdlZCBzaW5jZSBpdCB3YXMgbGFzdCBjaGVja2VkLiAqL1xuICAgIF9oYXNTdGlja3lDaGFuZ2VkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICAvKiogV2hldGhlciB0aGUgc3RpY2t5IHZhbHVlIGhhcyBjaGFuZ2VkIHNpbmNlIHRoaXMgd2FzIGxhc3QgY2FsbGVkLiAqL1xuICAgIGhhc1N0aWNreUNoYW5nZWQoKTogYm9vbGVhbiB7XG4gICAgICBjb25zdCBoYXNTdGlja3lDaGFuZ2VkID0gdGhpcy5faGFzU3RpY2t5Q2hhbmdlZDtcbiAgICAgIHRoaXMuX2hhc1N0aWNreUNoYW5nZWQgPSBmYWxzZTtcbiAgICAgIHJldHVybiBoYXNTdGlja3lDaGFuZ2VkO1xuICAgIH1cblxuICAgIC8qKiBSZXNldHMgdGhlIGRpcnR5IGNoZWNrIGZvciBjYXNlcyB3aGVyZSB0aGUgc3RpY2t5IHN0YXRlIGhhcyBiZWVuIHVzZWQgd2l0aG91dCBjaGVja2luZy4gKi9cbiAgICByZXNldFN0aWNreUNoYW5nZWQoKSB7XG4gICAgICB0aGlzLl9oYXNTdGlja3lDaGFuZ2VkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoLi4uYXJnczogYW55W10pIHsgc3VwZXIoLi4uYXJncyk7IH1cbiAgfTtcbn1cbiJdfQ==
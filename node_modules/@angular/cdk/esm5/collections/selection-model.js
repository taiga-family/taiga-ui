/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Subject } from 'rxjs';
/**
 * Class to be used to power selecting one or more options from a list.
 */
var SelectionModel = /** @class */ (function () {
    function SelectionModel(_multiple, initiallySelectedValues, _emitChanges) {
        var _this = this;
        if (_multiple === void 0) { _multiple = false; }
        if (_emitChanges === void 0) { _emitChanges = true; }
        this._multiple = _multiple;
        this._emitChanges = _emitChanges;
        /** Currently-selected values. */
        this._selection = new Set();
        /** Keeps track of the deselected options that haven't been emitted by the change event. */
        this._deselectedToEmit = [];
        /** Keeps track of the selected options that haven't been emitted by the change event. */
        this._selectedToEmit = [];
        /** Event emitted when the value has changed. */
        this.changed = new Subject();
        if (initiallySelectedValues && initiallySelectedValues.length) {
            if (_multiple) {
                initiallySelectedValues.forEach(function (value) { return _this._markSelected(value); });
            }
            else {
                this._markSelected(initiallySelectedValues[0]);
            }
            // Clear the array in order to avoid firing the change event for preselected values.
            this._selectedToEmit.length = 0;
        }
    }
    Object.defineProperty(SelectionModel.prototype, "selected", {
        /** Selected values. */
        get: function () {
            if (!this._selected) {
                this._selected = Array.from(this._selection.values());
            }
            return this._selected;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Selects a value or an array of values.
     */
    SelectionModel.prototype.select = function () {
        var _this = this;
        var values = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            values[_i] = arguments[_i];
        }
        this._verifyValueAssignment(values);
        values.forEach(function (value) { return _this._markSelected(value); });
        this._emitChangeEvent();
    };
    /**
     * Deselects a value or an array of values.
     */
    SelectionModel.prototype.deselect = function () {
        var _this = this;
        var values = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            values[_i] = arguments[_i];
        }
        this._verifyValueAssignment(values);
        values.forEach(function (value) { return _this._unmarkSelected(value); });
        this._emitChangeEvent();
    };
    /**
     * Toggles a value between selected and deselected.
     */
    SelectionModel.prototype.toggle = function (value) {
        this.isSelected(value) ? this.deselect(value) : this.select(value);
    };
    /**
     * Clears all of the selected values.
     */
    SelectionModel.prototype.clear = function () {
        this._unmarkAll();
        this._emitChangeEvent();
    };
    /**
     * Determines whether a value is selected.
     */
    SelectionModel.prototype.isSelected = function (value) {
        return this._selection.has(value);
    };
    /**
     * Determines whether the model does not have a value.
     */
    SelectionModel.prototype.isEmpty = function () {
        return this._selection.size === 0;
    };
    /**
     * Determines whether the model has a value.
     */
    SelectionModel.prototype.hasValue = function () {
        return !this.isEmpty();
    };
    /**
     * Sorts the selected values based on a predicate function.
     */
    SelectionModel.prototype.sort = function (predicate) {
        if (this._multiple && this.selected) {
            this._selected.sort(predicate);
        }
    };
    /**
     * Gets whether multiple values can be selected.
     */
    SelectionModel.prototype.isMultipleSelection = function () {
        return this._multiple;
    };
    /** Emits a change event and clears the records of selected and deselected values. */
    SelectionModel.prototype._emitChangeEvent = function () {
        // Clear the selected values so they can be re-cached.
        this._selected = null;
        if (this._selectedToEmit.length || this._deselectedToEmit.length) {
            this.changed.next({
                source: this,
                added: this._selectedToEmit,
                removed: this._deselectedToEmit
            });
            this._deselectedToEmit = [];
            this._selectedToEmit = [];
        }
    };
    /** Selects a value. */
    SelectionModel.prototype._markSelected = function (value) {
        if (!this.isSelected(value)) {
            if (!this._multiple) {
                this._unmarkAll();
            }
            this._selection.add(value);
            if (this._emitChanges) {
                this._selectedToEmit.push(value);
            }
        }
    };
    /** Deselects a value. */
    SelectionModel.prototype._unmarkSelected = function (value) {
        if (this.isSelected(value)) {
            this._selection.delete(value);
            if (this._emitChanges) {
                this._deselectedToEmit.push(value);
            }
        }
    };
    /** Clears out the selected values. */
    SelectionModel.prototype._unmarkAll = function () {
        var _this = this;
        if (!this.isEmpty()) {
            this._selection.forEach(function (value) { return _this._unmarkSelected(value); });
        }
    };
    /**
     * Verifies the value assignment and throws an error if the specified value array is
     * including multiple values while the selection model is not supporting multiple values.
     */
    SelectionModel.prototype._verifyValueAssignment = function (values) {
        if (values.length > 1 && !this._multiple) {
            throw getMultipleValuesInSingleSelectionError();
        }
    };
    return SelectionModel;
}());
export { SelectionModel };
/**
 * Returns an error that reports that multiple values are passed into a selection model
 * with a single value.
 * @docs-private
 */
export function getMultipleValuesInSingleSelectionError() {
    return Error('Cannot pass multiple values into SelectionModel with single-value mode.');
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0aW9uLW1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2Nkay9jb2xsZWN0aW9ucy9zZWxlY3Rpb24tbW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUFDLE9BQU8sRUFBQyxNQUFNLE1BQU0sQ0FBQztBQUU3Qjs7R0FFRztBQUNIO0lBeUJFLHdCQUNVLFNBQWlCLEVBQ3pCLHVCQUE2QixFQUNyQixZQUFtQjtRQUg3QixpQkFlQztRQWRTLDBCQUFBLEVBQUEsaUJBQWlCO1FBRWpCLDZCQUFBLEVBQUEsbUJBQW1CO1FBRm5CLGNBQVMsR0FBVCxTQUFTLENBQVE7UUFFakIsaUJBQVksR0FBWixZQUFZLENBQU87UUEzQjdCLGlDQUFpQztRQUN6QixlQUFVLEdBQUcsSUFBSSxHQUFHLEVBQUssQ0FBQztRQUVsQywyRkFBMkY7UUFDbkYsc0JBQWlCLEdBQVEsRUFBRSxDQUFDO1FBRXBDLHlGQUF5RjtRQUNqRixvQkFBZSxHQUFRLEVBQUUsQ0FBQztRQWNsQyxnREFBZ0Q7UUFDaEQsWUFBTyxHQUFnQyxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBT25ELElBQUksdUJBQXVCLElBQUksdUJBQXVCLENBQUMsTUFBTSxFQUFFO1lBQzdELElBQUksU0FBUyxFQUFFO2dCQUNiLHVCQUF1QixDQUFDLE9BQU8sQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLEVBQXpCLENBQXlCLENBQUMsQ0FBQzthQUNyRTtpQkFBTTtnQkFDTCxJQUFJLENBQUMsYUFBYSxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDaEQ7WUFFRCxvRkFBb0Y7WUFDcEYsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1NBQ2pDO0lBQ0gsQ0FBQztJQTFCRCxzQkFBSSxv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LEdBQTlCLFVBQStCLE1BQVc7UUFDeEMsSUFBSSxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDeEMsTUFBTSx1Q0FBdUMsRUFBRSxDQUFDO1NBQ2pEO0lBQ0gsQ0FBQztJQUNILHFCQUFDO0FBQUQsQ0FBQyxBQTNLRCxJQTJLQzs7QUFlRDs7OztHQUlHO0FBQ0gsTUFBTSxVQUFVLHVDQUF1QztJQUNyRCxPQUFPLEtBQUssQ0FBQyx5RUFBeUUsQ0FBQyxDQUFDO0FBQzFGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtTdWJqZWN0fSBmcm9tICdyeGpzJztcblxuLyoqXG4gKiBDbGFzcyB0byBiZSB1c2VkIHRvIHBvd2VyIHNlbGVjdGluZyBvbmUgb3IgbW9yZSBvcHRpb25zIGZyb20gYSBsaXN0LlxuICovXG5leHBvcnQgY2xhc3MgU2VsZWN0aW9uTW9kZWw8VD4ge1xuICAvKiogQ3VycmVudGx5LXNlbGVjdGVkIHZhbHVlcy4gKi9cbiAgcHJpdmF0ZSBfc2VsZWN0aW9uID0gbmV3IFNldDxUPigpO1xuXG4gIC8qKiBLZWVwcyB0cmFjayBvZiB0aGUgZGVzZWxlY3RlZCBvcHRpb25zIHRoYXQgaGF2ZW4ndCBiZWVuIGVtaXR0ZWQgYnkgdGhlIGNoYW5nZSBldmVudC4gKi9cbiAgcHJpdmF0ZSBfZGVzZWxlY3RlZFRvRW1pdDogVFtdID0gW107XG5cbiAgLyoqIEtlZXBzIHRyYWNrIG9mIHRoZSBzZWxlY3RlZCBvcHRpb25zIHRoYXQgaGF2ZW4ndCBiZWVuIGVtaXR0ZWQgYnkgdGhlIGNoYW5nZSBldmVudC4gKi9cbiAgcHJpdmF0ZSBfc2VsZWN0ZWRUb0VtaXQ6IFRbXSA9IFtdO1xuXG4gIC8qKiBDYWNoZSBmb3IgdGhlIGFycmF5IHZhbHVlIG9mIHRoZSBzZWxlY3RlZCBpdGVtcy4gKi9cbiAgcHJpdmF0ZSBfc2VsZWN0ZWQ6IFRbXSB8IG51bGw7XG5cbiAgLyoqIFNlbGVjdGVkIHZhbHVlcy4gKi9cbiAgZ2V0IHNlbGVjdGVkKCk6IFRbXSB7XG4gICAgaWYgKCF0aGlzLl9zZWxlY3RlZCkge1xuICAgICAgdGhpcy5fc2VsZWN0ZWQgPSBBcnJheS5mcm9tKHRoaXMuX3NlbGVjdGlvbi52YWx1ZXMoKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX3NlbGVjdGVkO1xuICB9XG5cbiAgLyoqIEV2ZW50IGVtaXR0ZWQgd2hlbiB0aGUgdmFsdWUgaGFzIGNoYW5nZWQuICovXG4gIGNoYW5nZWQ6IFN1YmplY3Q8U2VsZWN0aW9uQ2hhbmdlPFQ+PiA9IG5ldyBTdWJqZWN0KCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfbXVsdGlwbGUgPSBmYWxzZSxcbiAgICBpbml0aWFsbHlTZWxlY3RlZFZhbHVlcz86IFRbXSxcbiAgICBwcml2YXRlIF9lbWl0Q2hhbmdlcyA9IHRydWUpIHtcblxuICAgIGlmIChpbml0aWFsbHlTZWxlY3RlZFZhbHVlcyAmJiBpbml0aWFsbHlTZWxlY3RlZFZhbHVlcy5sZW5ndGgpIHtcbiAgICAgIGlmIChfbXVsdGlwbGUpIHtcbiAgICAgICAgaW5pdGlhbGx5U2VsZWN0ZWRWYWx1ZXMuZm9yRWFjaCh2YWx1ZSA9PiB0aGlzLl9tYXJrU2VsZWN0ZWQodmFsdWUpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX21hcmtTZWxlY3RlZChpbml0aWFsbHlTZWxlY3RlZFZhbHVlc1swXSk7XG4gICAgICB9XG5cbiAgICAgIC8vIENsZWFyIHRoZSBhcnJheSBpbiBvcmRlciB0byBhdm9pZCBmaXJpbmcgdGhlIGNoYW5nZSBldmVudCBmb3IgcHJlc2VsZWN0ZWQgdmFsdWVzLlxuICAgICAgdGhpcy5fc2VsZWN0ZWRUb0VtaXQubGVuZ3RoID0gMDtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU2VsZWN0cyBhIHZhbHVlIG9yIGFuIGFycmF5IG9mIHZhbHVlcy5cbiAgICovXG4gIHNlbGVjdCguLi52YWx1ZXM6IFRbXSk6IHZvaWQge1xuICAgIHRoaXMuX3ZlcmlmeVZhbHVlQXNzaWdubWVudCh2YWx1ZXMpO1xuICAgIHZhbHVlcy5mb3JFYWNoKHZhbHVlID0+IHRoaXMuX21hcmtTZWxlY3RlZCh2YWx1ZSkpO1xuICAgIHRoaXMuX2VtaXRDaGFuZ2VFdmVudCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc2VsZWN0cyBhIHZhbHVlIG9yIGFuIGFycmF5IG9mIHZhbHVlcy5cbiAgICovXG4gIGRlc2VsZWN0KC4uLnZhbHVlczogVFtdKTogdm9pZCB7XG4gICAgdGhpcy5fdmVyaWZ5VmFsdWVBc3NpZ25tZW50KHZhbHVlcyk7XG4gICAgdmFsdWVzLmZvckVhY2godmFsdWUgPT4gdGhpcy5fdW5tYXJrU2VsZWN0ZWQodmFsdWUpKTtcbiAgICB0aGlzLl9lbWl0Q2hhbmdlRXZlbnQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUb2dnbGVzIGEgdmFsdWUgYmV0d2VlbiBzZWxlY3RlZCBhbmQgZGVzZWxlY3RlZC5cbiAgICovXG4gIHRvZ2dsZSh2YWx1ZTogVCk6IHZvaWQge1xuICAgIHRoaXMuaXNTZWxlY3RlZCh2YWx1ZSkgPyB0aGlzLmRlc2VsZWN0KHZhbHVlKSA6IHRoaXMuc2VsZWN0KHZhbHVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhcnMgYWxsIG9mIHRoZSBzZWxlY3RlZCB2YWx1ZXMuXG4gICAqL1xuICBjbGVhcigpOiB2b2lkIHtcbiAgICB0aGlzLl91bm1hcmtBbGwoKTtcbiAgICB0aGlzLl9lbWl0Q2hhbmdlRXZlbnQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmVzIHdoZXRoZXIgYSB2YWx1ZSBpcyBzZWxlY3RlZC5cbiAgICovXG4gIGlzU2VsZWN0ZWQodmFsdWU6IFQpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fc2VsZWN0aW9uLmhhcyh2YWx1ZSk7XG4gIH1cblxuICAvKipcbiAgICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBtb2RlbCBkb2VzIG5vdCBoYXZlIGEgdmFsdWUuXG4gICAqL1xuICBpc0VtcHR5KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9zZWxlY3Rpb24uc2l6ZSA9PT0gMDtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIG1vZGVsIGhhcyBhIHZhbHVlLlxuICAgKi9cbiAgaGFzVmFsdWUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICF0aGlzLmlzRW1wdHkoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTb3J0cyB0aGUgc2VsZWN0ZWQgdmFsdWVzIGJhc2VkIG9uIGEgcHJlZGljYXRlIGZ1bmN0aW9uLlxuICAgKi9cbiAgc29ydChwcmVkaWNhdGU/OiAoYTogVCwgYjogVCkgPT4gbnVtYmVyKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX211bHRpcGxlICYmIHRoaXMuc2VsZWN0ZWQpIHtcbiAgICAgIHRoaXMuX3NlbGVjdGVkIS5zb3J0KHByZWRpY2F0ZSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgd2hldGhlciBtdWx0aXBsZSB2YWx1ZXMgY2FuIGJlIHNlbGVjdGVkLlxuICAgKi9cbiAgaXNNdWx0aXBsZVNlbGVjdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fbXVsdGlwbGU7XG4gIH1cblxuICAvKiogRW1pdHMgYSBjaGFuZ2UgZXZlbnQgYW5kIGNsZWFycyB0aGUgcmVjb3JkcyBvZiBzZWxlY3RlZCBhbmQgZGVzZWxlY3RlZCB2YWx1ZXMuICovXG4gIHByaXZhdGUgX2VtaXRDaGFuZ2VFdmVudCgpIHtcbiAgICAvLyBDbGVhciB0aGUgc2VsZWN0ZWQgdmFsdWVzIHNvIHRoZXkgY2FuIGJlIHJlLWNhY2hlZC5cbiAgICB0aGlzLl9zZWxlY3RlZCA9IG51bGw7XG5cbiAgICBpZiAodGhpcy5fc2VsZWN0ZWRUb0VtaXQubGVuZ3RoIHx8IHRoaXMuX2Rlc2VsZWN0ZWRUb0VtaXQubGVuZ3RoKSB7XG4gICAgICB0aGlzLmNoYW5nZWQubmV4dCh7XG4gICAgICAgIHNvdXJjZTogdGhpcyxcbiAgICAgICAgYWRkZWQ6IHRoaXMuX3NlbGVjdGVkVG9FbWl0LFxuICAgICAgICByZW1vdmVkOiB0aGlzLl9kZXNlbGVjdGVkVG9FbWl0XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5fZGVzZWxlY3RlZFRvRW1pdCA9IFtdO1xuICAgICAgdGhpcy5fc2VsZWN0ZWRUb0VtaXQgPSBbXTtcbiAgICB9XG4gIH1cblxuICAvKiogU2VsZWN0cyBhIHZhbHVlLiAqL1xuICBwcml2YXRlIF9tYXJrU2VsZWN0ZWQodmFsdWU6IFQpIHtcbiAgICBpZiAoIXRoaXMuaXNTZWxlY3RlZCh2YWx1ZSkpIHtcbiAgICAgIGlmICghdGhpcy5fbXVsdGlwbGUpIHtcbiAgICAgICAgdGhpcy5fdW5tYXJrQWxsKCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX3NlbGVjdGlvbi5hZGQodmFsdWUpO1xuXG4gICAgICBpZiAodGhpcy5fZW1pdENoYW5nZXMpIHtcbiAgICAgICAgdGhpcy5fc2VsZWN0ZWRUb0VtaXQucHVzaCh2YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqIERlc2VsZWN0cyBhIHZhbHVlLiAqL1xuICBwcml2YXRlIF91bm1hcmtTZWxlY3RlZCh2YWx1ZTogVCkge1xuICAgIGlmICh0aGlzLmlzU2VsZWN0ZWQodmFsdWUpKSB7XG4gICAgICB0aGlzLl9zZWxlY3Rpb24uZGVsZXRlKHZhbHVlKTtcblxuICAgICAgaWYgKHRoaXMuX2VtaXRDaGFuZ2VzKSB7XG4gICAgICAgIHRoaXMuX2Rlc2VsZWN0ZWRUb0VtaXQucHVzaCh2YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqIENsZWFycyBvdXQgdGhlIHNlbGVjdGVkIHZhbHVlcy4gKi9cbiAgcHJpdmF0ZSBfdW5tYXJrQWxsKCkge1xuICAgIGlmICghdGhpcy5pc0VtcHR5KCkpIHtcbiAgICAgIHRoaXMuX3NlbGVjdGlvbi5mb3JFYWNoKHZhbHVlID0+IHRoaXMuX3VubWFya1NlbGVjdGVkKHZhbHVlKSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFZlcmlmaWVzIHRoZSB2YWx1ZSBhc3NpZ25tZW50IGFuZCB0aHJvd3MgYW4gZXJyb3IgaWYgdGhlIHNwZWNpZmllZCB2YWx1ZSBhcnJheSBpc1xuICAgKiBpbmNsdWRpbmcgbXVsdGlwbGUgdmFsdWVzIHdoaWxlIHRoZSBzZWxlY3Rpb24gbW9kZWwgaXMgbm90IHN1cHBvcnRpbmcgbXVsdGlwbGUgdmFsdWVzLlxuICAgKi9cbiAgcHJpdmF0ZSBfdmVyaWZ5VmFsdWVBc3NpZ25tZW50KHZhbHVlczogVFtdKSB7XG4gICAgaWYgKHZhbHVlcy5sZW5ndGggPiAxICYmICF0aGlzLl9tdWx0aXBsZSkge1xuICAgICAgdGhyb3cgZ2V0TXVsdGlwbGVWYWx1ZXNJblNpbmdsZVNlbGVjdGlvbkVycm9yKCk7XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogRXZlbnQgZW1pdHRlZCB3aGVuIHRoZSB2YWx1ZSBvZiBhIE1hdFNlbGVjdGlvbk1vZGVsIGhhcyBjaGFuZ2VkLlxuICogQGRvY3MtcHJpdmF0ZVxuICovXG5leHBvcnQgaW50ZXJmYWNlIFNlbGVjdGlvbkNoYW5nZTxUPiB7XG4gIC8qKiBNb2RlbCB0aGF0IGRpc3BhdGNoZWQgdGhlIGV2ZW50LiAqL1xuICBzb3VyY2U6IFNlbGVjdGlvbk1vZGVsPFQ+O1xuICAvKiogT3B0aW9ucyB0aGF0IHdlcmUgYWRkZWQgdG8gdGhlIG1vZGVsLiAqL1xuICBhZGRlZDogVFtdO1xuICAvKiogT3B0aW9ucyB0aGF0IHdlcmUgcmVtb3ZlZCBmcm9tIHRoZSBtb2RlbC4gKi9cbiAgcmVtb3ZlZDogVFtdO1xufVxuXG4vKipcbiAqIFJldHVybnMgYW4gZXJyb3IgdGhhdCByZXBvcnRzIHRoYXQgbXVsdGlwbGUgdmFsdWVzIGFyZSBwYXNzZWQgaW50byBhIHNlbGVjdGlvbiBtb2RlbFxuICogd2l0aCBhIHNpbmdsZSB2YWx1ZS5cbiAqIEBkb2NzLXByaXZhdGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldE11bHRpcGxlVmFsdWVzSW5TaW5nbGVTZWxlY3Rpb25FcnJvcigpIHtcbiAgcmV0dXJuIEVycm9yKCdDYW5ub3QgcGFzcyBtdWx0aXBsZSB2YWx1ZXMgaW50byBTZWxlY3Rpb25Nb2RlbCB3aXRoIHNpbmdsZS12YWx1ZSBtb2RlLicpO1xufVxuIl19
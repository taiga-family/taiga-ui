/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/collections/selection-model.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
 * @template T
 */
export class SelectionModel {
    /**
     * @param {?=} _multiple
     * @param {?=} initiallySelectedValues
     * @param {?=} _emitChanges
     */
    constructor(_multiple = false, initiallySelectedValues, _emitChanges = true) {
        this._multiple = _multiple;
        this._emitChanges = _emitChanges;
        /**
         * Currently-selected values.
         */
        this._selection = new Set();
        /**
         * Keeps track of the deselected options that haven't been emitted by the change event.
         */
        this._deselectedToEmit = [];
        /**
         * Keeps track of the selected options that haven't been emitted by the change event.
         */
        this._selectedToEmit = [];
        /**
         * Event emitted when the value has changed.
         */
        this.changed = new Subject();
        if (initiallySelectedValues && initiallySelectedValues.length) {
            if (_multiple) {
                initiallySelectedValues.forEach((/**
                 * @param {?} value
                 * @return {?}
                 */
                value => this._markSelected(value)));
            }
            else {
                this._markSelected(initiallySelectedValues[0]);
            }
            // Clear the array in order to avoid firing the change event for preselected values.
            this._selectedToEmit.length = 0;
        }
    }
    /**
     * Selected values.
     * @return {?}
     */
    get selected() {
        if (!this._selected) {
            this._selected = Array.from(this._selection.values());
        }
        return this._selected;
    }
    /**
     * Selects a value or an array of values.
     * @param {...?} values
     * @return {?}
     */
    select(...values) {
        this._verifyValueAssignment(values);
        values.forEach((/**
         * @param {?} value
         * @return {?}
         */
        value => this._markSelected(value)));
        this._emitChangeEvent();
    }
    /**
     * Deselects a value or an array of values.
     * @param {...?} values
     * @return {?}
     */
    deselect(...values) {
        this._verifyValueAssignment(values);
        values.forEach((/**
         * @param {?} value
         * @return {?}
         */
        value => this._unmarkSelected(value)));
        this._emitChangeEvent();
    }
    /**
     * Toggles a value between selected and deselected.
     * @param {?} value
     * @return {?}
     */
    toggle(value) {
        this.isSelected(value) ? this.deselect(value) : this.select(value);
    }
    /**
     * Clears all of the selected values.
     * @return {?}
     */
    clear() {
        this._unmarkAll();
        this._emitChangeEvent();
    }
    /**
     * Determines whether a value is selected.
     * @param {?} value
     * @return {?}
     */
    isSelected(value) {
        return this._selection.has(value);
    }
    /**
     * Determines whether the model does not have a value.
     * @return {?}
     */
    isEmpty() {
        return this._selection.size === 0;
    }
    /**
     * Determines whether the model has a value.
     * @return {?}
     */
    hasValue() {
        return !this.isEmpty();
    }
    /**
     * Sorts the selected values based on a predicate function.
     * @param {?=} predicate
     * @return {?}
     */
    sort(predicate) {
        if (this._multiple && this.selected) {
            (/** @type {?} */ (this._selected)).sort(predicate);
        }
    }
    /**
     * Gets whether multiple values can be selected.
     * @return {?}
     */
    isMultipleSelection() {
        return this._multiple;
    }
    /**
     * Emits a change event and clears the records of selected and deselected values.
     * @private
     * @return {?}
     */
    _emitChangeEvent() {
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
    }
    /**
     * Selects a value.
     * @private
     * @param {?} value
     * @return {?}
     */
    _markSelected(value) {
        if (!this.isSelected(value)) {
            if (!this._multiple) {
                this._unmarkAll();
            }
            this._selection.add(value);
            if (this._emitChanges) {
                this._selectedToEmit.push(value);
            }
        }
    }
    /**
     * Deselects a value.
     * @private
     * @param {?} value
     * @return {?}
     */
    _unmarkSelected(value) {
        if (this.isSelected(value)) {
            this._selection.delete(value);
            if (this._emitChanges) {
                this._deselectedToEmit.push(value);
            }
        }
    }
    /**
     * Clears out the selected values.
     * @private
     * @return {?}
     */
    _unmarkAll() {
        if (!this.isEmpty()) {
            this._selection.forEach((/**
             * @param {?} value
             * @return {?}
             */
            value => this._unmarkSelected(value)));
        }
    }
    /**
     * Verifies the value assignment and throws an error if the specified value array is
     * including multiple values while the selection model is not supporting multiple values.
     * @private
     * @param {?} values
     * @return {?}
     */
    _verifyValueAssignment(values) {
        if (values.length > 1 && !this._multiple) {
            throw getMultipleValuesInSingleSelectionError();
        }
    }
}
if (false) {
    /**
     * Currently-selected values.
     * @type {?}
     * @private
     */
    SelectionModel.prototype._selection;
    /**
     * Keeps track of the deselected options that haven't been emitted by the change event.
     * @type {?}
     * @private
     */
    SelectionModel.prototype._deselectedToEmit;
    /**
     * Keeps track of the selected options that haven't been emitted by the change event.
     * @type {?}
     * @private
     */
    SelectionModel.prototype._selectedToEmit;
    /**
     * Cache for the array value of the selected items.
     * @type {?}
     * @private
     */
    SelectionModel.prototype._selected;
    /**
     * Event emitted when the value has changed.
     * @type {?}
     */
    SelectionModel.prototype.changed;
    /**
     * @type {?}
     * @private
     */
    SelectionModel.prototype._multiple;
    /**
     * @type {?}
     * @private
     */
    SelectionModel.prototype._emitChanges;
}
/**
 * Event emitted when the value of a MatSelectionModel has changed.
 * \@docs-private
 * @record
 * @template T
 */
export function SelectionChange() { }
if (false) {
    /**
     * Model that dispatched the event.
     * @type {?}
     */
    SelectionChange.prototype.source;
    /**
     * Options that were added to the model.
     * @type {?}
     */
    SelectionChange.prototype.added;
    /**
     * Options that were removed from the model.
     * @type {?}
     */
    SelectionChange.prototype.removed;
}
/**
 * Returns an error that reports that multiple values are passed into a selection model
 * with a single value.
 * \@docs-private
 * @return {?}
 */
export function getMultipleValuesInSingleSelectionError() {
    return Error('Cannot pass multiple values into SelectionModel with single-value mode.');
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0aW9uLW1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2Nkay9jb2xsZWN0aW9ucy9zZWxlY3Rpb24tbW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFDLE9BQU8sRUFBQyxNQUFNLE1BQU0sQ0FBQzs7Ozs7QUFLN0IsTUFBTSxPQUFPLGNBQWM7Ozs7OztJQXlCekIsWUFDVSxZQUFZLEtBQUssRUFDekIsdUJBQTZCLEVBQ3JCLGVBQWUsSUFBSTtRQUZuQixjQUFTLEdBQVQsU0FBUyxDQUFRO1FBRWpCLGlCQUFZLEdBQVosWUFBWSxDQUFPOzs7O1FBMUJyQixlQUFVLEdBQUcsSUFBSSxHQUFHLEVBQUssQ0FBQzs7OztRQUcxQixzQkFBaUIsR0FBUSxFQUFFLENBQUM7Ozs7UUFHNUIsb0JBQWUsR0FBUSxFQUFFLENBQUM7Ozs7UUFlbEMsWUFBTyxHQUFnQyxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBT25ELElBQUksdUJBQXVCLElBQUksdUJBQXVCLENBQUMsTUFBTSxFQUFFO1lBQzdELElBQUksU0FBUyxFQUFFO2dCQUNiLHVCQUF1QixDQUFDLE9BQU87Ozs7Z0JBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxFQUFDLENBQUM7YUFDckU7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLGFBQWEsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ2hEO1lBRUQsb0ZBQW9GO1lBQ3BGLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztTQUNqQztJQUNILENBQUM7Ozs7O0lBMUJELElBQUksUUFBUTtRQUNWLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ25CLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFB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QGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge1N1YmplY3R9IGZyb20gJ3J4anMnO1xuXG4vKipcbiAqIENsYXNzIHRvIGJlIHVzZWQgdG8gcG93ZXIgc2VsZWN0aW5nIG9uZSBvciBtb3JlIG9wdGlvbnMgZnJvbSBhIGxpc3QuXG4gKi9cbmV4cG9ydCBjbGFzcyBTZWxlY3Rpb25Nb2RlbDxUPiB7XG4gIC8qKiBDdXJyZW50bHktc2VsZWN0ZWQgdmFsdWVzLiAqL1xuICBwcml2YXRlIF9zZWxlY3Rpb24gPSBuZXcgU2V0PFQ+KCk7XG5cbiAgLyoqIEtlZXBzIHRyYWNrIG9mIHRoZSBkZXNlbGVjdGVkIG9wdGlvbnMgdGhhdCBoYXZlbid0IGJlZW4gZW1pdHRlZCBieSB0aGUgY2hhbmdlIGV2ZW50LiAqL1xuICBwcml2YXRlIF9kZXNlbGVjdGVkVG9FbWl0OiBUW10gPSBbXTtcblxuICAvKiogS2VlcHMgdHJhY2sgb2YgdGhlIHNlbGVjdGVkIG9wdGlvbnMgdGhhdCBoYXZlbid0IGJlZW4gZW1pdHRlZCBieSB0aGUgY2hhbmdlIGV2ZW50LiAqL1xuICBwcml2YXRlIF9zZWxlY3RlZFRvRW1pdDogVFtdID0gW107XG5cbiAgLyoqIENhY2hlIGZvciB0aGUgYXJyYXkgdmFsdWUgb2YgdGhlIHNlbGVjdGVkIGl0ZW1zLiAqL1xuICBwcml2YXRlIF9zZWxlY3RlZDogVFtdIHwgbnVsbDtcblxuICAvKiogU2VsZWN0ZWQgdmFsdWVzLiAqL1xuICBnZXQgc2VsZWN0ZWQoKTogVFtdIHtcbiAgICBpZiAoIXRoaXMuX3NlbGVjdGVkKSB7XG4gICAgICB0aGlzLl9zZWxlY3RlZCA9IEFycmF5LmZyb20odGhpcy5fc2VsZWN0aW9uLnZhbHVlcygpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5fc2VsZWN0ZWQ7XG4gIH1cblxuICAvKiogRXZlbnQgZW1pdHRlZCB3aGVuIHRoZSB2YWx1ZSBoYXMgY2hhbmdlZC4gKi9cbiAgY2hhbmdlZDogU3ViamVjdDxTZWxlY3Rpb25DaGFuZ2U8VD4+ID0gbmV3IFN1YmplY3QoKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9tdWx0aXBsZSA9IGZhbHNlLFxuICAgIGluaXRpYWxseVNlbGVjdGVkVmFsdWVzPzogVFtdLFxuICAgIHByaXZhdGUgX2VtaXRDaGFuZ2VzID0gdHJ1ZSkge1xuXG4gICAgaWYgKGluaXRpYWxseVNlbGVjdGVkVmFsdWVzICYmIGluaXRpYWxseVNlbGVjdGVkVmFsdWVzLmxlbmd0aCkge1xuICAgICAgaWYgKF9tdWx0aXBsZSkge1xuICAgICAgICBpbml0aWFsbHlTZWxlY3RlZFZhbHVlcy5mb3JFYWNoKHZhbHVlID0+IHRoaXMuX21hcmtTZWxlY3RlZCh2YWx1ZSkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fbWFya1NlbGVjdGVkKGluaXRpYWxseVNlbGVjdGVkVmFsdWVzWzBdKTtcbiAgICAgIH1cblxuICAgICAgLy8gQ2xlYXIgdGhlIGFycmF5IGluIG9yZGVyIHRvIGF2b2lkIGZpcmluZyB0aGUgY2hhbmdlIGV2ZW50IGZvciBwcmVzZWxlY3RlZCB2YWx1ZXMuXG4gICAgICB0aGlzLl9zZWxlY3RlZFRvRW1pdC5sZW5ndGggPSAwO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTZWxlY3RzIGEgdmFsdWUgb3IgYW4gYXJyYXkgb2YgdmFsdWVzLlxuICAgKi9cbiAgc2VsZWN0KC4uLnZhbHVlczogVFtdKTogdm9pZCB7XG4gICAgdGhpcy5fdmVyaWZ5VmFsdWVBc3NpZ25tZW50KHZhbHVlcyk7XG4gICAgdmFsdWVzLmZvckVhY2godmFsdWUgPT4gdGhpcy5fbWFya1NlbGVjdGVkKHZhbHVlKSk7XG4gICAgdGhpcy5fZW1pdENoYW5nZUV2ZW50KCk7XG4gIH1cblxuICAvKipcbiAgICogRGVzZWxlY3RzIGEgdmFsdWUgb3IgYW4gYXJyYXkgb2YgdmFsdWVzLlxuICAgKi9cbiAgZGVzZWxlY3QoLi4udmFsdWVzOiBUW10pOiB2b2lkIHtcbiAgICB0aGlzLl92ZXJpZnlWYWx1ZUFzc2lnbm1lbnQodmFsdWVzKTtcbiAgICB2YWx1ZXMuZm9yRWFjaCh2YWx1ZSA9PiB0aGlzLl91bm1hcmtTZWxlY3RlZCh2YWx1ZSkpO1xuICAgIHRoaXMuX2VtaXRDaGFuZ2VFdmVudCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRvZ2dsZXMgYSB2YWx1ZSBiZXR3ZWVuIHNlbGVjdGVkIGFuZCBkZXNlbGVjdGVkLlxuICAgKi9cbiAgdG9nZ2xlKHZhbHVlOiBUKTogdm9pZCB7XG4gICAgdGhpcy5pc1NlbGVjdGVkKHZhbHVlKSA/IHRoaXMuZGVzZWxlY3QodmFsdWUpIDogdGhpcy5zZWxlY3QodmFsdWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIENsZWFycyBhbGwgb2YgdGhlIHNlbGVjdGVkIHZhbHVlcy5cbiAgICovXG4gIGNsZWFyKCk6IHZvaWQge1xuICAgIHRoaXMuX3VubWFya0FsbCgpO1xuICAgIHRoaXMuX2VtaXRDaGFuZ2VFdmVudCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIERldGVybWluZXMgd2hldGhlciBhIHZhbHVlIGlzIHNlbGVjdGVkLlxuICAgKi9cbiAgaXNTZWxlY3RlZCh2YWx1ZTogVCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9zZWxlY3Rpb24uaGFzKHZhbHVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIG1vZGVsIGRvZXMgbm90IGhhdmUgYSB2YWx1ZS5cbiAgICovXG4gIGlzRW1wdHkoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3NlbGVjdGlvbi5zaXplID09PSAwO1xuICB9XG5cbiAgLyoqXG4gICAqIERldGVybWluZXMgd2hldGhlciB0aGUgbW9kZWwgaGFzIGEgdmFsdWUuXG4gICAqL1xuICBoYXNWYWx1ZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gIXRoaXMuaXNFbXB0eSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNvcnRzIHRoZSBzZWxlY3RlZCB2YWx1ZXMgYmFzZWQgb24gYSBwcmVkaWNhdGUgZnVuY3Rpb24uXG4gICAqL1xuICBzb3J0KHByZWRpY2F0ZT86IChhOiBULCBiOiBUKSA9PiBudW1iZXIpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fbXVsdGlwbGUgJiYgdGhpcy5zZWxlY3RlZCkge1xuICAgICAgdGhpcy5fc2VsZWN0ZWQhLnNvcnQocHJlZGljYXRlKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogR2V0cyB3aGV0aGVyIG11bHRpcGxlIHZhbHVlcyBjYW4gYmUgc2VsZWN0ZWQuXG4gICAqL1xuICBpc011bHRpcGxlU2VsZWN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9tdWx0aXBsZTtcbiAgfVxuXG4gIC8qKiBFbWl0cyBhIGNoYW5nZSBldmVudCBhbmQgY2xlYXJzIHRoZSByZWNvcmRzIG9mIHNlbGVjdGVkIGFuZCBkZXNlbGVjdGVkIHZhbHVlcy4gKi9cbiAgcHJpdmF0ZSBfZW1pdENoYW5nZUV2ZW50KCkge1xuICAgIC8vIENsZWFyIHRoZSBzZWxlY3RlZCB2YWx1ZXMgc28gdGhleSBjYW4gYmUgcmUtY2FjaGVkLlxuICAgIHRoaXMuX3NlbGVjdGVkID0gbnVsbDtcblxuICAgIGlmICh0aGlzLl9zZWxlY3RlZFRvRW1pdC5sZW5ndGggfHwgdGhpcy5fZGVzZWxlY3RlZFRvRW1pdC5sZW5ndGgpIHtcbiAgICAgIHRoaXMuY2hhbmdlZC5uZXh0KHtcbiAgICAgICAgc291cmNlOiB0aGlzLFxuICAgICAgICBhZGRlZDogdGhpcy5fc2VsZWN0ZWRUb0VtaXQsXG4gICAgICAgIHJlbW92ZWQ6IHRoaXMuX2Rlc2VsZWN0ZWRUb0VtaXRcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLl9kZXNlbGVjdGVkVG9FbWl0ID0gW107XG4gICAgICB0aGlzLl9zZWxlY3RlZFRvRW1pdCA9IFtdO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBTZWxlY3RzIGEgdmFsdWUuICovXG4gIHByaXZhdGUgX21hcmtTZWxlY3RlZCh2YWx1ZTogVCkge1xuICAgIGlmICghdGhpcy5pc1NlbGVjdGVkKHZhbHVlKSkge1xuICAgICAgaWYgKCF0aGlzLl9tdWx0aXBsZSkge1xuICAgICAgICB0aGlzLl91bm1hcmtBbGwoKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fc2VsZWN0aW9uLmFkZCh2YWx1ZSk7XG5cbiAgICAgIGlmICh0aGlzLl9lbWl0Q2hhbmdlcykge1xuICAgICAgICB0aGlzLl9zZWxlY3RlZFRvRW1pdC5wdXNoKHZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKiogRGVzZWxlY3RzIGEgdmFsdWUuICovXG4gIHByaXZhdGUgX3VubWFya1NlbGVjdGVkKHZhbHVlOiBUKSB7XG4gICAgaWYgKHRoaXMuaXNTZWxlY3RlZCh2YWx1ZSkpIHtcbiAgICAgIHRoaXMuX3NlbGVjdGlvbi5kZWxldGUodmFsdWUpO1xuXG4gICAgICBpZiAodGhpcy5fZW1pdENoYW5nZXMpIHtcbiAgICAgICAgdGhpcy5fZGVzZWxlY3RlZFRvRW1pdC5wdXNoKHZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKiogQ2xlYXJzIG91dCB0aGUgc2VsZWN0ZWQgdmFsdWVzLiAqL1xuICBwcml2YXRlIF91bm1hcmtBbGwoKSB7XG4gICAgaWYgKCF0aGlzLmlzRW1wdHkoKSkge1xuICAgICAgdGhpcy5fc2VsZWN0aW9uLmZvckVhY2godmFsdWUgPT4gdGhpcy5fdW5tYXJrU2VsZWN0ZWQodmFsdWUpKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVmVyaWZpZXMgdGhlIHZhbHVlIGFzc2lnbm1lbnQgYW5kIHRocm93cyBhbiBlcnJvciBpZiB0aGUgc3BlY2lmaWVkIHZhbHVlIGFycmF5IGlzXG4gICAqIGluY2x1ZGluZyBtdWx0aXBsZSB2YWx1ZXMgd2hpbGUgdGhlIHNlbGVjdGlvbiBtb2RlbCBpcyBub3Qgc3VwcG9ydGluZyBtdWx0aXBsZSB2YWx1ZXMuXG4gICAqL1xuICBwcml2YXRlIF92ZXJpZnlWYWx1ZUFzc2lnbm1lbnQodmFsdWVzOiBUW10pIHtcbiAgICBpZiAodmFsdWVzLmxlbmd0aCA+IDEgJiYgIXRoaXMuX211bHRpcGxlKSB7XG4gICAgICB0aHJvdyBnZXRNdWx0aXBsZVZhbHVlc0luU2luZ2xlU2VsZWN0aW9uRXJyb3IoKTtcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBFdmVudCBlbWl0dGVkIHdoZW4gdGhlIHZhbHVlIG9mIGEgTWF0U2VsZWN0aW9uTW9kZWwgaGFzIGNoYW5nZWQuXG4gKiBAZG9jcy1wcml2YXRlXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgU2VsZWN0aW9uQ2hhbmdlPFQ+IHtcbiAgLyoqIE1vZGVsIHRoYXQgZGlzcGF0Y2hlZCB0aGUgZXZlbnQuICovXG4gIHNvdXJjZTogU2VsZWN0aW9uTW9kZWw8VD47XG4gIC8qKiBPcHRpb25zIHRoYXQgd2VyZSBhZGRlZCB0byB0aGUgbW9kZWwuICovXG4gIGFkZGVkOiBUW107XG4gIC8qKiBPcHRpb25zIHRoYXQgd2VyZSByZW1vdmVkIGZyb20gdGhlIG1vZGVsLiAqL1xuICByZW1vdmVkOiBUW107XG59XG5cbi8qKlxuICogUmV0dXJucyBhbiBlcnJvciB0aGF0IHJlcG9ydHMgdGhhdCBtdWx0aXBsZSB2YWx1ZXMgYXJlIHBhc3NlZCBpbnRvIGEgc2VsZWN0aW9uIG1vZGVsXG4gKiB3aXRoIGEgc2luZ2xlIHZhbHVlLlxuICogQGRvY3MtcHJpdmF0ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0TXVsdGlwbGVWYWx1ZXNJblNpbmdsZVNlbGVjdGlvbkVycm9yKCkge1xuICByZXR1cm4gRXJyb3IoJ0Nhbm5vdCBwYXNzIG11bHRpcGxlIHZhbHVlcyBpbnRvIFNlbGVjdGlvbk1vZGVsIHdpdGggc2luZ2xlLXZhbHVlIG1vZGUuJyk7XG59XG4iXX0=
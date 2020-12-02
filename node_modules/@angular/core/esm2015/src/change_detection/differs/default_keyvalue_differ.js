/**
 * @fileoverview added by tsickle
 * Generated from: packages/core/src/change_detection/differs/default_keyvalue_differ.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { looseIdentical } from '../../util/comparison';
import { stringify } from '../../util/stringify';
import { isJsObject } from '../change_detection_util';
/**
 * @template K, V
 */
export class DefaultKeyValueDifferFactory {
    constructor() { }
    /**
     * @param {?} obj
     * @return {?}
     */
    supports(obj) {
        return obj instanceof Map || isJsObject(obj);
    }
    /**
     * @template K, V
     * @return {?}
     */
    create() {
        return new DefaultKeyValueDiffer();
    }
}
/**
 * @template K, V
 */
export class DefaultKeyValueDiffer {
    constructor() {
        this._records = new Map();
        this._mapHead = null;
        // _appendAfter is used in the check loop
        this._appendAfter = null;
        this._previousMapHead = null;
        this._changesHead = null;
        this._changesTail = null;
        this._additionsHead = null;
        this._additionsTail = null;
        this._removalsHead = null;
        this._removalsTail = null;
    }
    /**
     * @return {?}
     */
    get isDirty() {
        return this._additionsHead !== null || this._changesHead !== null ||
            this._removalsHead !== null;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    forEachItem(fn) {
        /** @type {?} */
        let record;
        for (record = this._mapHead; record !== null; record = record._next) {
            fn(record);
        }
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    forEachPreviousItem(fn) {
        /** @type {?} */
        let record;
        for (record = this._previousMapHead; record !== null; record = record._nextPrevious) {
            fn(record);
        }
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    forEachChangedItem(fn) {
        /** @type {?} */
        let record;
        for (record = this._changesHead; record !== null; record = record._nextChanged) {
            fn(record);
        }
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    forEachAddedItem(fn) {
        /** @type {?} */
        let record;
        for (record = this._additionsHead; record !== null; record = record._nextAdded) {
            fn(record);
        }
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    forEachRemovedItem(fn) {
        /** @type {?} */
        let record;
        for (record = this._removalsHead; record !== null; record = record._nextRemoved) {
            fn(record);
        }
    }
    /**
     * @param {?=} map
     * @return {?}
     */
    diff(map) {
        if (!map) {
            map = new Map();
        }
        else if (!(map instanceof Map || isJsObject(map))) {
            throw new Error(`Error trying to diff '${stringify(map)}'. Only maps and objects are allowed`);
        }
        return this.check(map) ? this : null;
    }
    /**
     * @return {?}
     */
    onDestroy() { }
    /**
     * Check the current state of the map vs the previous.
     * The algorithm is optimised for when the keys do no change.
     * @param {?} map
     * @return {?}
     */
    check(map) {
        this._reset();
        /** @type {?} */
        let insertBefore = this._mapHead;
        this._appendAfter = null;
        this._forEach(map, (/**
         * @param {?} value
         * @param {?} key
         * @return {?}
         */
        (value, key) => {
            if (insertBefore && insertBefore.key === key) {
                this._maybeAddToChanges(insertBefore, value);
                this._appendAfter = insertBefore;
                insertBefore = insertBefore._next;
            }
            else {
                /** @type {?} */
                const record = this._getOrCreateRecordForKey(key, value);
                insertBefore = this._insertBeforeOrAppend(insertBefore, record);
            }
        }));
        // Items remaining at the end of the list have been deleted
        if (insertBefore) {
            if (insertBefore._prev) {
                insertBefore._prev._next = null;
            }
            this._removalsHead = insertBefore;
            for (let record = insertBefore; record !== null; record = record._nextRemoved) {
                if (record === this._mapHead) {
                    this._mapHead = null;
                }
                this._records.delete(record.key);
                record._nextRemoved = record._next;
                record.previousValue = record.currentValue;
                record.currentValue = null;
                record._prev = null;
                record._next = null;
            }
        }
        // Make sure tails have no next records from previous runs
        if (this._changesTail)
            this._changesTail._nextChanged = null;
        if (this._additionsTail)
            this._additionsTail._nextAdded = null;
        return this.isDirty;
    }
    /**
     * Inserts a record before `before` or append at the end of the list when `before` is null.
     *
     * Notes:
     * - This method appends at `this._appendAfter`,
     * - This method updates `this._appendAfter`,
     * - The return value is the new value for the insertion pointer.
     * @private
     * @param {?} before
     * @param {?} record
     * @return {?}
     */
    _insertBeforeOrAppend(before, record) {
        if (before) {
            /** @type {?} */
            const prev = before._prev;
            record._next = before;
            record._prev = prev;
            before._prev = record;
            if (prev) {
                prev._next = record;
            }
            if (before === this._mapHead) {
                this._mapHead = record;
            }
            this._appendAfter = before;
            return before;
        }
        if (this._appendAfter) {
            this._appendAfter._next = record;
            record._prev = this._appendAfter;
        }
        else {
            this._mapHead = record;
        }
        this._appendAfter = record;
        return null;
    }
    /**
     * @private
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    _getOrCreateRecordForKey(key, value) {
        if (this._records.has(key)) {
            /** @type {?} */
            const record = (/** @type {?} */ (this._records.get(key)));
            this._maybeAddToChanges(record, value);
            /** @type {?} */
            const prev = record._prev;
            /** @type {?} */
            const next = record._next;
            if (prev) {
                prev._next = next;
            }
            if (next) {
                next._prev = prev;
            }
            record._next = null;
            record._prev = null;
            return record;
        }
        /** @type {?} */
        const record = new KeyValueChangeRecord_(key);
        this._records.set(key, record);
        record.currentValue = value;
        this._addToAdditions(record);
        return record;
    }
    /**
     * \@internal
     * @return {?}
     */
    _reset() {
        if (this.isDirty) {
            /** @type {?} */
            let record;
            // let `_previousMapHead` contain the state of the map before the changes
            this._previousMapHead = this._mapHead;
            for (record = this._previousMapHead; record !== null; record = record._next) {
                record._nextPrevious = record._next;
            }
            // Update `record.previousValue` with the value of the item before the changes
            // We need to update all changed items (that's those which have been added and changed)
            for (record = this._changesHead; record !== null; record = record._nextChanged) {
                record.previousValue = record.currentValue;
            }
            for (record = this._additionsHead; record != null; record = record._nextAdded) {
                record.previousValue = record.currentValue;
            }
            this._changesHead = this._changesTail = null;
            this._additionsHead = this._additionsTail = null;
            this._removalsHead = null;
        }
    }
    // Add the record or a given key to the list of changes only when the value has actually changed
    /**
     * @private
     * @param {?} record
     * @param {?} newValue
     * @return {?}
     */
    _maybeAddToChanges(record, newValue) {
        if (!looseIdentical(newValue, record.currentValue)) {
            record.previousValue = record.currentValue;
            record.currentValue = newValue;
            this._addToChanges(record);
        }
    }
    /**
     * @private
     * @param {?} record
     * @return {?}
     */
    _addToAdditions(record) {
        if (this._additionsHead === null) {
            this._additionsHead = this._additionsTail = record;
        }
        else {
            (/** @type {?} */ (this._additionsTail))._nextAdded = record;
            this._additionsTail = record;
        }
    }
    /**
     * @private
     * @param {?} record
     * @return {?}
     */
    _addToChanges(record) {
        if (this._changesHead === null) {
            this._changesHead = this._changesTail = record;
        }
        else {
            (/** @type {?} */ (this._changesTail))._nextChanged = record;
            this._changesTail = record;
        }
    }
    /**
     * \@internal
     * @private
     * @template K, V
     * @param {?} obj
     * @param {?} fn
     * @return {?}
     */
    _forEach(obj, fn) {
        if (obj instanceof Map) {
            obj.forEach(fn);
        }
        else {
            Object.keys(obj).forEach((/**
             * @param {?} k
             * @return {?}
             */
            k => fn(obj[k], k)));
        }
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    DefaultKeyValueDiffer.prototype._records;
    /**
     * @type {?}
     * @private
     */
    DefaultKeyValueDiffer.prototype._mapHead;
    /**
     * @type {?}
     * @private
     */
    DefaultKeyValueDiffer.prototype._appendAfter;
    /**
     * @type {?}
     * @private
     */
    DefaultKeyValueDiffer.prototype._previousMapHead;
    /**
     * @type {?}
     * @private
     */
    DefaultKeyValueDiffer.prototype._changesHead;
    /**
     * @type {?}
     * @private
     */
    DefaultKeyValueDiffer.prototype._changesTail;
    /**
     * @type {?}
     * @private
     */
    DefaultKeyValueDiffer.prototype._additionsHead;
    /**
     * @type {?}
     * @private
     */
    DefaultKeyValueDiffer.prototype._additionsTail;
    /**
     * @type {?}
     * @private
     */
    DefaultKeyValueDiffer.prototype._removalsHead;
    /**
     * @type {?}
     * @private
     */
    DefaultKeyValueDiffer.prototype._removalsTail;
}
/**
 * @template K, V
 */
class KeyValueChangeRecord_ {
    /**
     * @param {?} key
     */
    constructor(key) {
        this.key = key;
        this.previousValue = null;
        this.currentValue = null;
        /**
         * \@internal
         */
        this._nextPrevious = null;
        /**
         * \@internal
         */
        this._next = null;
        /**
         * \@internal
         */
        this._prev = null;
        /**
         * \@internal
         */
        this._nextAdded = null;
        /**
         * \@internal
         */
        this._nextRemoved = null;
        /**
         * \@internal
         */
        this._nextChanged = null;
    }
}
if (false) {
    /** @type {?} */
    KeyValueChangeRecord_.prototype.previousValue;
    /** @type {?} */
    KeyValueChangeRecord_.prototype.currentValue;
    /**
     * \@internal
     * @type {?}
     */
    KeyValueChangeRecord_.prototype._nextPrevious;
    /**
     * \@internal
     * @type {?}
     */
    KeyValueChangeRecord_.prototype._next;
    /**
     * \@internal
     * @type {?}
     */
    KeyValueChangeRecord_.prototype._prev;
    /**
     * \@internal
     * @type {?}
     */
    KeyValueChangeRecord_.prototype._nextAdded;
    /**
     * \@internal
     * @type {?}
     */
    KeyValueChangeRecord_.prototype._nextRemoved;
    /**
     * \@internal
     * @type {?}
     */
    KeyValueChangeRecord_.prototype._nextChanged;
    /** @type {?} */
    KeyValueChangeRecord_.prototype.key;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdF9rZXl2YWx1ZV9kaWZmZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb3JlL3NyYy9jaGFuZ2VfZGV0ZWN0aW9uL2RpZmZlcnMvZGVmYXVsdF9rZXl2YWx1ZV9kaWZmZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBQ3JELE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUMvQyxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7Ozs7QUFJcEQsTUFBTSxPQUFPLDRCQUE0QjtJQUN2QyxnQkFBZSxDQUFDOzs7OztJQUNoQixRQUFRLENBQUMsR0FBUTtRQUNmLE9BQU8sR0FBRyxZQUFZLEdBQUcsSUFBSSxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDL0MsQ0FBQzs7Ozs7SUFFRCxNQUFNO1FBQ0osT0FBTyxJQUFJLHFCQUFxQixFQUFRLENBQUM7SUFDM0MsQ0FBQztDQUNGOzs7O0FBRUQsTUFBTSxPQUFPLHFCQUFxQjtJQUFsQztRQUNVLGFBQVEsR0FBRyxJQUFJLEdBQUcsRUFBa0MsQ0FBQztRQUNyRCxhQUFRLEdBQXFDLElBQUksQ0FBQzs7UUFFbEQsaUJBQVksR0FBcUMsSUFBSSxDQUFDO1FBQ3RELHFCQUFnQixHQUFxQyxJQUFJLENBQUM7UUFDMUQsaUJBQVksR0FBcUMsSUFBSSxDQUFDO1FBQ3RELGlCQUFZLEdBQXFDLElBQUksQ0FBQztRQUN0RCxtQkFBYyxHQUFxQyxJQUFJLENBQUM7UUFDeEQsbUJBQWMsR0FBcUMsSUFBSSxDQUFDO1FBQ3hELGtCQUFhLEdBQXFDLElBQUksQ0FBQztRQUN2RCxrQkFBYSxHQUFxQyxJQUFJLENBQUM7SUFvT2pFLENBQUM7Ozs7SUFsT0MsSUFBSSxPQUFPO1FBQ1QsT0FBTyxJQUFJLENB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NEI7Ozs7O0lBRzVCLDhDQUF1RDs7Ozs7SUFFdkQsc0NBQStDOzs7OztJQUUvQyxzQ0FBK0M7Ozs7O0lBRS9DLDJDQUFvRDs7Ozs7SUFFcEQsNkNBQXNEOzs7OztJQUV0RCw2Q0FBc0Q7O0lBRTFDLG9DQUFhIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge2xvb3NlSWRlbnRpY2FsfSBmcm9tICcuLi8uLi91dGlsL2NvbXBhcmlzb24nO1xuaW1wb3J0IHtzdHJpbmdpZnl9IGZyb20gJy4uLy4uL3V0aWwvc3RyaW5naWZ5JztcbmltcG9ydCB7aXNKc09iamVjdH0gZnJvbSAnLi4vY2hhbmdlX2RldGVjdGlvbl91dGlsJztcbmltcG9ydCB7S2V5VmFsdWVDaGFuZ2VSZWNvcmQsIEtleVZhbHVlQ2hhbmdlcywgS2V5VmFsdWVEaWZmZXIsIEtleVZhbHVlRGlmZmVyRmFjdG9yeX0gZnJvbSAnLi9rZXl2YWx1ZV9kaWZmZXJzJztcblxuXG5leHBvcnQgY2xhc3MgRGVmYXVsdEtleVZhbHVlRGlmZmVyRmFjdG9yeTxLLCBWPiBpbXBsZW1lbnRzIEtleVZhbHVlRGlmZmVyRmFjdG9yeSB7XG4gIGNvbnN0cnVjdG9yKCkge31cbiAgc3VwcG9ydHMob2JqOiBhbnkpOiBib29sZWFuIHtcbiAgICByZXR1cm4gb2JqIGluc3RhbmNlb2YgTWFwIHx8IGlzSnNPYmplY3Qob2JqKTtcbiAgfVxuXG4gIGNyZWF0ZTxLLCBWPigpOiBLZXlWYWx1ZURpZmZlcjxLLCBWPiB7XG4gICAgcmV0dXJuIG5ldyBEZWZhdWx0S2V5VmFsdWVEaWZmZXI8SywgVj4oKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGVmYXVsdEtleVZhbHVlRGlmZmVyPEssIFY+IGltcGxlbWVudHMgS2V5VmFsdWVEaWZmZXI8SywgVj4sIEtleVZhbHVlQ2hhbmdlczxLLCBWPiB7XG4gIHByaXZhdGUgX3JlY29yZHMgPSBuZXcgTWFwPEssIEtleVZhbHVlQ2hhbmdlUmVjb3JkXzxLLCBWPj4oKTtcbiAgcHJpdmF0ZSBfbWFwSGVhZDogS2V5VmFsdWVDaGFuZ2VSZWNvcmRfPEssIFY+fG51bGwgPSBudWxsO1xuICAvLyBfYXBwZW5kQWZ0ZXIgaXMgdXNlZCBpbiB0aGUgY2hlY2sgbG9vcFxuICBwcml2YXRlIF9hcHBlbmRBZnRlcjogS2V5VmFsdWVDaGFuZ2VSZWNvcmRfPEssIFY+fG51bGwgPSBudWxsO1xuICBwcml2YXRlIF9wcmV2aW91c01hcEhlYWQ6IEtleVZhbHVlQ2hhbmdlUmVjb3JkXzxLLCBWPnxudWxsID0gbnVsbDtcbiAgcHJpdmF0ZSBfY2hhbmdlc0hlYWQ6IEtleVZhbHVlQ2hhbmdlUmVjb3JkXzxLLCBWPnxudWxsID0gbnVsbDtcbiAgcHJpdmF0ZSBfY2hhbmdlc1RhaWw6IEtleVZhbHVlQ2hhbmdlUmVjb3JkXzxLLCBWPnxudWxsID0gbnVsbDtcbiAgcHJpdmF0ZSBfYWRkaXRpb25zSGVhZDogS2V5VmFsdWVDaGFuZ2VSZWNvcmRfPEssIFY+fG51bGwgPSBudWxsO1xuICBwcml2YXRlIF9hZGRpdGlvbnNUYWlsOiBLZXlWYWx1ZUNoYW5nZVJlY29yZF88SywgVj58bnVsbCA9IG51bGw7XG4gIHByaXZhdGUgX3JlbW92YWxzSGVhZDogS2V5VmFsdWVDaGFuZ2VSZWNvcmRfPEssIFY+fG51bGwgPSBudWxsO1xuICBwcml2YXRlIF9yZW1vdmFsc1RhaWw6IEtleVZhbHVlQ2hhbmdlUmVjb3JkXzxLLCBWPnxudWxsID0gbnVsbDtcblxuICBnZXQgaXNEaXJ0eSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fYWRkaXRpb25zSGVhZCAhPT0gbnVsbCB8fCB0aGlzLl9jaGFuZ2VzSGVhZCAhPT0gbnVsbCB8fFxuICAgICAgICB0aGlzLl9yZW1vdmFsc0hlYWQgIT09IG51bGw7XG4gIH1cblxuICBmb3JFYWNoSXRlbShmbjogKHI6IEtleVZhbHVlQ2hhbmdlUmVjb3JkPEssIFY+KSA9PiB2b2lkKSB7XG4gICAgbGV0IHJlY29yZDogS2V5VmFsdWVDaGFuZ2VSZWNvcmRfPEssIFY+fG51bGw7XG4gICAgZm9yIChyZWNvcmQgPSB0aGlzLl9tYXBIZWFkOyByZWNvcmQgIT09IG51bGw7IHJlY29yZCA9IHJlY29yZC5fbmV4dCkge1xuICAgICAgZm4ocmVjb3JkKTtcbiAgICB9XG4gIH1cblxuICBmb3JFYWNoUHJldmlvdXNJdGVtKGZuOiAocjogS2V5VmFsdWVDaGFuZ2VSZWNvcmQ8SywgVj4pID0+IHZvaWQpIHtcbiAgICBsZXQgcmVjb3JkOiBLZXlWYWx1ZUNoYW5nZVJlY29yZF88SywgVj58bnVsbDtcbiAgICBmb3IgKHJlY29yZCA9IHRoaXMuX3ByZXZpb3VzTWFwSGVhZDsgcmVjb3JkICE9PSBudWxsOyByZWNvcmQgPSByZWNvcmQuX25leHRQcmV2aW91cykge1xuICAgICAgZm4ocmVjb3JkKTtcbiAgICB9XG4gIH1cblxuICBmb3JFYWNoQ2hhbmdlZEl0ZW0oZm46IChyOiBLZXlWYWx1ZUNoYW5nZVJlY29yZDxLLCBWPikgPT4gdm9pZCkge1xuICAgIGxldCByZWNvcmQ6IEtleVZhbHVlQ2hhbmdlUmVjb3JkXzxLLCBWPnxudWxsO1xuICAgIGZvciAocmVjb3JkID0gdGhpcy5fY2hhbmdlc0hlYWQ7IHJlY29yZCAhPT0gbnVsbDsgcmVjb3JkID0gcmVjb3JkLl9uZXh0Q2hhbmdlZCkge1xuICAgICAgZm4ocmVjb3JkKTtcbiAgICB9XG4gIH1cblxuICBmb3JFYWNoQWRkZWRJdGVtKGZuOiAocjogS2V5VmFsdWVDaGFuZ2VSZWNvcmQ8SywgVj4pID0+IHZvaWQpIHtcbiAgICBsZXQgcmVjb3JkOiBLZXlWYWx1ZUNoYW5nZVJlY29yZF88SywgVj58bnVsbDtcbiAgICBmb3IgKHJlY29yZCA9IHRoaXMuX2FkZGl0aW9uc0hlYWQ7IHJlY29yZCAhPT0gbnVsbDsgcmVjb3JkID0gcmVjb3JkLl9uZXh0QWRkZWQpIHtcbiAgICAgIGZuKHJlY29yZCk7XG4gICAgfVxuICB9XG5cbiAgZm9yRWFjaFJlbW92ZWRJdGVtKGZuOiAocjogS2V5VmFsdWVDaGFuZ2VSZWNvcmQ8SywgVj4pID0+IHZvaWQpIHtcbiAgICBsZXQgcmVjb3JkOiBLZXlWYWx1ZUNoYW5nZVJlY29yZF88SywgVj58bnVsbDtcbiAgICBmb3IgKHJlY29yZCA9IHRoaXMuX3JlbW92YWxzSGVhZDsgcmVjb3JkICE9PSBudWxsOyByZWNvcmQgPSByZWNvcmQuX25leHRSZW1vdmVkKSB7XG4gICAgICBmbihyZWNvcmQpO1xuICAgIH1cbiAgfVxuXG4gIGRpZmYobWFwPzogTWFwPGFueSwgYW55Pnx7W2s6IHN0cmluZ106IGFueX18bnVsbCk6IGFueSB7XG4gICAgaWYgKCFtYXApIHtcbiAgICAgIG1hcCA9IG5ldyBNYXAoKTtcbiAgICB9IGVsc2UgaWYgKCEobWFwIGluc3RhbmNlb2YgTWFwIHx8IGlzSnNPYmplY3QobWFwKSkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICBgRXJyb3IgdHJ5aW5nIHRvIGRpZmYgJyR7c3RyaW5naWZ5KG1hcCl9Jy4gT25seSBtYXBzIGFuZCBvYmplY3RzIGFyZSBhbGxvd2VkYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuY2hlY2sobWFwKSA/IHRoaXMgOiBudWxsO1xuICB9XG5cbiAgb25EZXN0cm95KCkge31cblxuICAvKipcbiAgICogQ2hlY2sgdGhlIGN1cnJlbnQgc3RhdGUgb2YgdGhlIG1hcCB2cyB0aGUgcHJldmlvdXMuXG4gICAqIFRoZSBhbGdvcml0aG0gaXMgb3B0aW1pc2VkIGZvciB3aGVuIHRoZSBrZXlzIGRvIG5vIGNoYW5nZS5cbiAgICovXG4gIGNoZWNrKG1hcDogTWFwPGFueSwgYW55Pnx7W2s6IHN0cmluZ106IGFueX0pOiBib29sZWFuIHtcbiAgICB0aGlzLl9yZXNldCgpO1xuXG4gICAgbGV0IGluc2VydEJlZm9yZSA9IHRoaXMuX21hcEhlYWQ7XG4gICAgdGhpcy5fYXBwZW5kQWZ0ZXIgPSBudWxsO1xuXG4gICAgdGhpcy5fZm9yRWFjaChtYXAsICh2YWx1ZTogYW55LCBrZXk6IGFueSkgPT4ge1xuICAgICAgaWYgKGluc2VydEJlZm9yZSAmJiBpbnNlcnRCZWZvcmUua2V5ID09PSBrZXkpIHtcbiAgICAgICAgdGhpcy5fbWF5YmVBZGRUb0NoYW5nZXMoaW5zZXJ0QmVmb3JlLCB2YWx1ZSk7XG4gICAgICAgIHRoaXMuX2FwcGVuZEFmdGVyID0gaW5zZXJ0QmVmb3JlO1xuICAgICAgICBpbnNlcnRCZWZvcmUgPSBpbnNlcnRCZWZvcmUuX25leHQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCByZWNvcmQgPSB0aGlzLl9nZXRPckNyZWF0ZVJlY29yZEZvcktleShrZXksIHZhbHVlKTtcbiAgICAgICAgaW5zZXJ0QmVmb3JlID0gdGhpcy5faW5zZXJ0QmVmb3JlT3JBcHBlbmQoaW5zZXJ0QmVmb3JlLCByZWNvcmQpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gSXRlbXMgcmVtYWluaW5nIGF0IHRoZSBlbmQgb2YgdGhlIGxpc3QgaGF2ZSBiZWVuIGRlbGV0ZWRcbiAgICBpZiAoaW5zZXJ0QmVmb3JlKSB7XG4gICAgICBpZiAoaW5zZXJ0QmVmb3JlLl9wcmV2KSB7XG4gICAgICAgIGluc2VydEJlZm9yZS5fcHJldi5fbmV4dCA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX3JlbW92YWxzSGVhZCA9IGluc2VydEJlZm9yZTtcblxuICAgICAgZm9yIChsZXQgcmVjb3JkOiBLZXlWYWx1ZUNoYW5nZVJlY29yZF88SywgVj58bnVsbCA9IGluc2VydEJlZm9yZTsgcmVjb3JkICE9PSBudWxsO1xuICAgICAgICAgICByZWNvcmQgPSByZWNvcmQuX25leHRSZW1vdmVkKSB7XG4gICAgICAgIGlmIChyZWNvcmQgPT09IHRoaXMuX21hcEhlYWQpIHtcbiAgICAgICAgICB0aGlzLl9tYXBIZWFkID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9yZWNvcmRzLmRlbGV0ZShyZWNvcmQua2V5KTtcbiAgICAgICAgcmVjb3JkLl9uZXh0UmVtb3ZlZCA9IHJlY29yZC5fbmV4dDtcbiAgICAgICAgcmVjb3JkLnByZXZpb3VzVmFsdWUgPSByZWNvcmQuY3VycmVudFZhbHVlO1xuICAgICAgICByZWNvcmQuY3VycmVudFZhbHVlID0gbnVsbDtcbiAgICAgICAgcmVjb3JkLl9wcmV2ID0gbnVsbDtcbiAgICAgICAgcmVjb3JkLl9uZXh0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBNYWtlIHN1cmUgdGFpbHMgaGF2ZSBubyBuZXh0IHJlY29yZHMgZnJvbSBwcmV2aW91cyBydW5zXG4gICAgaWYgKHRoaXMuX2NoYW5nZXNUYWlsKSB0aGlzLl9jaGFuZ2VzVGFpbC5fbmV4dENoYW5nZWQgPSBudWxsO1xuICAgIGlmICh0aGlzLl9hZGRpdGlvbnNUYWlsKSB0aGlzLl9hZGRpdGlvbnNUYWlsLl9uZXh0QWRkZWQgPSBudWxsO1xuXG4gICAgcmV0dXJuIHRoaXMuaXNEaXJ0eTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbnNlcnRzIGEgcmVjb3JkIGJlZm9yZSBgYmVmb3JlYCBvciBhcHBlbmQgYXQgdGhlIGVuZCBvZiB0aGUgbGlzdCB3aGVuIGBiZWZvcmVgIGlzIG51bGwuXG4gICAqXG4gICAqIE5vdGVzOlxuICAgKiAtIFRoaXMgbWV0aG9kIGFwcGVuZHMgYXQgYHRoaXMuX2FwcGVuZEFmdGVyYCxcbiAgICogLSBUaGlzIG1ldGhvZCB1cGRhdGVzIGB0aGlzLl9hcHBlbmRBZnRlcmAsXG4gICAqIC0gVGhlIHJldHVybiB2YWx1ZSBpcyB0aGUgbmV3IHZhbHVlIGZvciB0aGUgaW5zZXJ0aW9uIHBvaW50ZXIuXG4gICAqL1xuICBwcml2YXRlIF9pbnNlcnRCZWZvcmVPckFwcGVuZChcbiAgICAgIGJlZm9yZTogS2V5VmFsdWVDaGFuZ2VSZWNvcmRfPEssIFY+fG51bGwsXG4gICAgICByZWNvcmQ6IEtleVZhbHVlQ2hhbmdlUmVjb3JkXzxLLCBWPik6IEtleVZhbHVlQ2hhbmdlUmVjb3JkXzxLLCBWPnxudWxsIHtcbiAgICBpZiAoYmVmb3JlKSB7XG4gICAgICBjb25zdCBwcmV2ID0gYmVmb3JlLl9wcmV2O1xuICAgICAgcmVjb3JkLl9uZXh0ID0gYmVmb3JlO1xuICAgICAgcmVjb3JkLl9wcmV2ID0gcHJldjtcbiAgICAgIGJlZm9yZS5fcHJldiA9IHJlY29yZDtcbiAgICAgIGlmIChwcmV2KSB7XG4gICAgICAgIHByZXYuX25leHQgPSByZWNvcmQ7XG4gICAgICB9XG4gICAgICBpZiAoYmVmb3JlID09PSB0aGlzLl9tYXBIZWFkKSB7XG4gICAgICAgIHRoaXMuX21hcEhlYWQgPSByZWNvcmQ7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2FwcGVuZEFmdGVyID0gYmVmb3JlO1xuICAgICAgcmV0dXJuIGJlZm9yZTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fYXBwZW5kQWZ0ZXIpIHtcbiAgICAgIHRoaXMuX2FwcGVuZEFmdGVyLl9uZXh0ID0gcmVjb3JkO1xuICAgICAgcmVjb3JkLl9wcmV2ID0gdGhpcy5fYXBwZW5kQWZ0ZXI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX21hcEhlYWQgPSByZWNvcmQ7XG4gICAgfVxuXG4gICAgdGhpcy5fYXBwZW5kQWZ0ZXIgPSByZWNvcmQ7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBwcml2YXRlIF9nZXRPckNyZWF0ZVJlY29yZEZvcktleShrZXk6IEssIHZhbHVlOiBWKTogS2V5VmFsdWVDaGFuZ2VSZWNvcmRfPEssIFY+IHtcbiAgICBpZiAodGhpcy5fcmVjb3Jkcy5oYXMoa2V5KSkge1xuICAgICAgY29uc3QgcmVjb3JkID0gdGhpcy5fcmVjb3Jkcy5nZXQoa2V5KSE7XG4gICAgICB0aGlzLl9tYXliZUFkZFRvQ2hhbmdlcyhyZWNvcmQsIHZhbHVlKTtcbiAgICAgIGNvbnN0IHByZXYgPSByZWNvcmQuX3ByZXY7XG4gICAgICBjb25zdCBuZXh0ID0gcmVjb3JkLl9uZXh0O1xuICAgICAgaWYgKHByZXYpIHtcbiAgICAgICAgcHJldi5fbmV4dCA9IG5leHQ7XG4gICAgICB9XG4gICAgICBpZiAobmV4dCkge1xuICAgICAgICBuZXh0Ll9wcmV2ID0gcHJldjtcbiAgICAgIH1cbiAgICAgIHJlY29yZC5fbmV4dCA9IG51bGw7XG4gICAgICByZWNvcmQuX3ByZXYgPSBudWxsO1xuXG4gICAgICByZXR1cm4gcmVjb3JkO1xuICAgIH1cblxuICAgIGNvbnN0IHJlY29yZCA9IG5ldyBLZXlWYWx1ZUNoYW5nZVJlY29yZF88SywgVj4oa2V5KTtcbiAgICB0aGlzLl9yZWNvcmRzLnNldChrZXksIHJlY29yZCk7XG4gICAgcmVjb3JkLmN1cnJlbnRWYWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMuX2FkZFRvQWRkaXRpb25zKHJlY29yZCk7XG4gICAgcmV0dXJuIHJlY29yZDtcbiAgfVxuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgX3Jlc2V0KCkge1xuICAgIGlmICh0aGlzLmlzRGlydHkpIHtcbiAgICAgIGxldCByZWNvcmQ6IEtleVZhbHVlQ2hhbmdlUmVjb3JkXzxLLCBWPnxudWxsO1xuICAgICAgLy8gbGV0IGBfcHJldmlvdXNNYXBIZWFkYCBjb250YWluIHRoZSBzdGF0ZSBvZiB0aGUgbWFwIGJlZm9yZSB0aGUgY2hhbmdlc1xuICAgICAgdGhpcy5fcHJldmlvdXNNYXBIZWFkID0gdGhpcy5fbWFwSGVhZDtcbiAgICAgIGZvciAocmVjb3JkID0gdGhpcy5fcHJldmlvdXNNYXBIZWFkOyByZWNvcmQgIT09IG51bGw7IHJlY29yZCA9IHJlY29yZC5fbmV4dCkge1xuICAgICAgICByZWNvcmQuX25leHRQcmV2aW91cyA9IHJlY29yZC5fbmV4dDtcbiAgICAgIH1cblxuICAgICAgLy8gVXBkYXRlIGByZWNvcmQucHJldmlvdXNWYWx1ZWAgd2l0aCB0aGUgdmFsdWUgb2YgdGhlIGl0ZW0gYmVmb3JlIHRoZSBjaGFuZ2VzXG4gICAgICAvLyBXZSBuZWVkIHRvIHVwZGF0ZSBhbGwgY2hhbmdlZCBpdGVtcyAodGhhdCdzIHRob3NlIHdoaWNoIGhhdmUgYmVlbiBhZGRlZCBhbmQgY2hhbmdlZClcbiAgICAgIGZvciAocmVjb3JkID0gdGhpcy5fY2hhbmdlc0hlYWQ7IHJlY29yZCAhPT0gbnVsbDsgcmVjb3JkID0gcmVjb3JkLl9uZXh0Q2hhbmdlZCkge1xuICAgICAgICByZWNvcmQucHJldmlvdXNWYWx1ZSA9IHJlY29yZC5jdXJyZW50VmFsdWU7XG4gICAgICB9XG4gICAgICBmb3IgKHJlY29yZCA9IHRoaXMuX2FkZGl0aW9uc0hlYWQ7IHJlY29yZCAhPSBudWxsOyByZWNvcmQgPSByZWNvcmQuX25leHRBZGRlZCkge1xuICAgICAgICByZWNvcmQucHJldmlvdXNWYWx1ZSA9IHJlY29yZC5jdXJyZW50VmFsdWU7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2NoYW5nZXNIZWFkID0gdGhpcy5fY2hhbmdlc1RhaWwgPSBudWxsO1xuICAgICAgdGhpcy5fYWRkaXRpb25zSGVhZCA9IHRoaXMuX2FkZGl0aW9uc1RhaWwgPSBudWxsO1xuICAgICAgdGhpcy5fcmVtb3ZhbHNIZWFkID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICAvLyBBZGQgdGhlIHJlY29yZCBvciBhIGdpdmVuIGtleSB0byB0aGUgbGlzdCBvZiBjaGFuZ2VzIG9ubHkgd2hlbiB0aGUgdmFsdWUgaGFzIGFjdHVhbGx5IGNoYW5nZWRcbiAgcHJpdmF0ZSBfbWF5YmVBZGRUb0NoYW5nZXMocmVjb3JkOiBLZXlWYWx1ZUNoYW5nZVJlY29yZF88SywgVj4sIG5ld1ZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICBpZiAoIWxvb3NlSWRlbnRpY2FsKG5ld1ZhbHVlLCByZWNvcmQuY3VycmVudFZhbHVlKSkge1xuICAgICAgcmVjb3JkLnByZXZpb3VzVmFsdWUgPSByZWNvcmQuY3VycmVudFZhbHVlO1xuICAgICAgcmVjb3JkLmN1cnJlbnRWYWx1ZSA9IG5ld1ZhbHVlO1xuICAgICAgdGhpcy5fYWRkVG9DaGFuZ2VzKHJlY29yZCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfYWRkVG9BZGRpdGlvbnMocmVjb3JkOiBLZXlWYWx1ZUNoYW5nZVJlY29yZF88SywgVj4pIHtcbiAgICBpZiAodGhpcy5fYWRkaXRpb25zSGVhZCA9PT0gbnVsbCkge1xuICAgICAgdGhpcy5fYWRkaXRpb25zSGVhZCA9IHRoaXMuX2FkZGl0aW9uc1RhaWwgPSByZWNvcmQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2FkZGl0aW9uc1RhaWwhLl9uZXh0QWRkZWQgPSByZWNvcmQ7XG4gICAgICB0aGlzLl9hZGRpdGlvbnNUYWlsID0gcmVjb3JkO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2FkZFRvQ2hhbmdlcyhyZWNvcmQ6IEtleVZhbHVlQ2hhbmdlUmVjb3JkXzxLLCBWPikge1xuICAgIGlmICh0aGlzLl9jaGFuZ2VzSGVhZCA9PT0gbnVsbCkge1xuICAgICAgdGhpcy5fY2hhbmdlc0hlYWQgPSB0aGlzLl9jaGFuZ2VzVGFpbCA9IHJlY29yZDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fY2hhbmdlc1RhaWwhLl9uZXh0Q2hhbmdlZCA9IHJlY29yZDtcbiAgICAgIHRoaXMuX2NoYW5nZXNUYWlsID0gcmVjb3JkO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgcHJpdmF0ZSBfZm9yRWFjaDxLLCBWPihvYmo6IE1hcDxLLCBWPnx7W2s6IHN0cmluZ106IFZ9LCBmbjogKHY6IFYsIGs6IGFueSkgPT4gdm9pZCkge1xuICAgIGlmIChvYmogaW5zdGFuY2VvZiBNYXApIHtcbiAgICAgIG9iai5mb3JFYWNoKGZuKTtcbiAgICB9IGVsc2Uge1xuICAgICAgT2JqZWN0LmtleXMob2JqKS5mb3JFYWNoKGsgPT4gZm4ob2JqW2tdLCBrKSk7XG4gICAgfVxuICB9XG59XG5cbmNsYXNzIEtleVZhbHVlQ2hhbmdlUmVjb3JkXzxLLCBWPiBpbXBsZW1lbnRzIEtleVZhbHVlQ2hhbmdlUmVjb3JkPEssIFY+IHtcbiAgcHJldmlvdXNWYWx1ZTogVnxudWxsID0gbnVsbDtcbiAgY3VycmVudFZhbHVlOiBWfG51bGwgPSBudWxsO1xuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgX25leHRQcmV2aW91czogS2V5VmFsdWVDaGFuZ2VSZWNvcmRfPEssIFY+fG51bGwgPSBudWxsO1xuICAvKiogQGludGVybmFsICovXG4gIF9uZXh0OiBLZXlWYWx1ZUNoYW5nZVJlY29yZF88SywgVj58bnVsbCA9IG51bGw7XG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgX3ByZXY6IEtleVZhbHVlQ2hhbmdlUmVjb3JkXzxLLCBWPnxudWxsID0gbnVsbDtcbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBfbmV4dEFkZGVkOiBLZXlWYWx1ZUNoYW5nZVJlY29yZF88SywgVj58bnVsbCA9IG51bGw7XG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgX25leHRSZW1vdmVkOiBLZXlWYWx1ZUNoYW5nZVJlY29yZF88SywgVj58bnVsbCA9IG51bGw7XG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgX25leHRDaGFuZ2VkOiBLZXlWYWx1ZUNoYW5nZVJlY29yZF88SywgVj58bnVsbCA9IG51bGw7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGtleTogSykge31cbn1cbiJdfQ==
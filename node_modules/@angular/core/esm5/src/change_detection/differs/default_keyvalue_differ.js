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
var DefaultKeyValueDifferFactory = /** @class */ (function () {
    function DefaultKeyValueDifferFactory() {
    }
    DefaultKeyValueDifferFactory.prototype.supports = function (obj) {
        return obj instanceof Map || isJsObject(obj);
    };
    DefaultKeyValueDifferFactory.prototype.create = function () {
        return new DefaultKeyValueDiffer();
    };
    return DefaultKeyValueDifferFactory;
}());
export { DefaultKeyValueDifferFactory };
var DefaultKeyValueDiffer = /** @class */ (function () {
    function DefaultKeyValueDiffer() {
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
    Object.defineProperty(DefaultKeyValueDiffer.prototype, "isDirty", {
        get: function () {
            return this._additionsHead !== null || this._changesHead !== null ||
                this._removalsHead !== null;
        },
        enumerable: true,
        configurable: true
    });
    DefaultKeyValueDiffer.prototype.forEachItem = function (fn) {
        var record;
        for (record = this._mapHead; record !== null; record = record._next) {
            fn(record);
        }
    };
    DefaultKeyValueDiffer.prototype.forEachPreviousItem = function (fn) {
        var record;
        for (record = this._previousMapHead; record !== null; record = record._nextPrevious) {
            fn(record);
        }
    };
    DefaultKeyValueDiffer.prototype.forEachChangedItem = function (fn) {
        var record;
        for (record = this._changesHead; record !== null; record = record._nextChanged) {
            fn(record);
        }
    };
    DefaultKeyValueDiffer.prototype.forEachAddedItem = function (fn) {
        var record;
        for (record = this._additionsHead; record !== null; record = record._nextAdded) {
            fn(record);
        }
    };
    DefaultKeyValueDiffer.prototype.forEachRemovedItem = function (fn) {
        var record;
        for (record = this._removalsHead; record !== null; record = record._nextRemoved) {
            fn(record);
        }
    };
    DefaultKeyValueDiffer.prototype.diff = function (map) {
        if (!map) {
            map = new Map();
        }
        else if (!(map instanceof Map || isJsObject(map))) {
            throw new Error("Error trying to diff '" + stringify(map) + "'. Only maps and objects are allowed");
        }
        return this.check(map) ? this : null;
    };
    DefaultKeyValueDiffer.prototype.onDestroy = function () { };
    /**
     * Check the current state of the map vs the previous.
     * The algorithm is optimised for when the keys do no change.
     */
    DefaultKeyValueDiffer.prototype.check = function (map) {
        var _this = this;
        this._reset();
        var insertBefore = this._mapHead;
        this._appendAfter = null;
        this._forEach(map, function (value, key) {
            if (insertBefore && insertBefore.key === key) {
                _this._maybeAddToChanges(insertBefore, value);
                _this._appendAfter = insertBefore;
                insertBefore = insertBefore._next;
            }
            else {
                var record = _this._getOrCreateRecordForKey(key, value);
                insertBefore = _this._insertBeforeOrAppend(insertBefore, record);
            }
        });
        // Items remaining at the end of the list have been deleted
        if (insertBefore) {
            if (insertBefore._prev) {
                insertBefore._prev._next = null;
            }
            this._removalsHead = insertBefore;
            for (var record = insertBefore; record !== null; record = record._nextRemoved) {
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
    };
    /**
     * Inserts a record before `before` or append at the end of the list when `before` is null.
     *
     * Notes:
     * - This method appends at `this._appendAfter`,
     * - This method updates `this._appendAfter`,
     * - The return value is the new value for the insertion pointer.
     */
    DefaultKeyValueDiffer.prototype._insertBeforeOrAppend = function (before, record) {
        if (before) {
            var prev = before._prev;
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
    };
    DefaultKeyValueDiffer.prototype._getOrCreateRecordForKey = function (key, value) {
        if (this._records.has(key)) {
            var record_1 = this._records.get(key);
            this._maybeAddToChanges(record_1, value);
            var prev = record_1._prev;
            var next = record_1._next;
            if (prev) {
                prev._next = next;
            }
            if (next) {
                next._prev = prev;
            }
            record_1._next = null;
            record_1._prev = null;
            return record_1;
        }
        var record = new KeyValueChangeRecord_(key);
        this._records.set(key, record);
        record.currentValue = value;
        this._addToAdditions(record);
        return record;
    };
    /** @internal */
    DefaultKeyValueDiffer.prototype._reset = function () {
        if (this.isDirty) {
            var record = void 0;
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
    };
    // Add the record or a given key to the list of changes only when the value has actually changed
    DefaultKeyValueDiffer.prototype._maybeAddToChanges = function (record, newValue) {
        if (!looseIdentical(newValue, record.currentValue)) {
            record.previousValue = record.currentValue;
            record.currentValue = newValue;
            this._addToChanges(record);
        }
    };
    DefaultKeyValueDiffer.prototype._addToAdditions = function (record) {
        if (this._additionsHead === null) {
            this._additionsHead = this._additionsTail = record;
        }
        else {
            this._additionsTail._nextAdded = record;
            this._additionsTail = record;
        }
    };
    DefaultKeyValueDiffer.prototype._addToChanges = function (record) {
        if (this._changesHead === null) {
            this._changesHead = this._changesTail = record;
        }
        else {
            this._changesTail._nextChanged = record;
            this._changesTail = record;
        }
    };
    /** @internal */
    DefaultKeyValueDiffer.prototype._forEach = function (obj, fn) {
        if (obj instanceof Map) {
            obj.forEach(fn);
        }
        else {
            Object.keys(obj).forEach(function (k) { return fn(obj[k], k); });
        }
    };
    return DefaultKeyValueDiffer;
}());
export { DefaultKeyValueDiffer };
var KeyValueChangeRecord_ = /** @class */ (function () {
    function KeyValueChangeRecord_(key) {
        this.key = key;
        this.previousValue = null;
        this.currentValue = null;
        /** @internal */
        this._nextPrevious = null;
        /** @internal */
        this._next = null;
        /** @internal */
        this._prev = null;
        /** @internal */
        this._nextAdded = null;
        /** @internal */
        this._nextRemoved = null;
        /** @internal */
        this._nextChanged = null;
    }
    return KeyValueChangeRecord_;
}());
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdF9rZXl2YWx1ZV9kaWZmZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb3JlL3NyYy9jaGFuZ2VfZGV0ZWN0aW9uL2RpZmZlcnMvZGVmYXVsdF9rZXl2YWx1ZV9kaWZmZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBQ3JELE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUMvQyxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFJcEQ7SUFDRTtJQUFlLENBQUM7SUFDaEIsK0NBQVEsR0FBUixVQUFTLEdBQVE7UUFDZixPQUFPLEdBQUcsWUFBWSxHQUFHLElBQUksVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFRCw2Q0FBTSxHQUFOO1FBQ0UsT0FBTyxJQUFJLHFCQUFxQixFQUFRLENBQUM7SUFDM0MsQ0FBQztJQUNILG1DQUFDO0FBQUQsQ0FBQyxBQVRELElBU0M7O0FBRUQ7SUFBQTtRQUNVLGFBQVEsR0FBRyxJQUFJLEdBQUcsRUFBa0MsQ0FBQztRQUNyRCxhQUFRLEdBQXFDLElBQUksQ0FBQztRQUMxRCx5Q0FBeUM7UUFDakMsaUJBQVksR0FBcUMsSUFBSSxDQUFDO1FBQ3RELHFCQUFnQixHQUFxQyxJQUFJLENBQUM7UUFDMUQsaUJBQVksR0FBcUMsSUFBSSxDQUFDO1FBQ3RELGlCQUFZLEdBQXFDLElBQUksQ0FBQztRQUN0RCxtQkFBYyxHQUFxQyxJQUFJLENBQUM7UUFDeEQsbUJBQWMsR0FBcUMsSUFBSSxDQUFDO1FBQ3hELGtCQUFhLEdBQXFDLElBQUksQ0FBQztRQUN2RCxrQkFBYSxHQUFxQyxJQUFJLENBQUM7SUFvT2pFLENBQUM7SUFsT0Msc0JBQUksMENBQU87YUFBWDtZ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QUFxQyxJQUFJLENBQUM7UUFDdEQsZ0JBQWdCO1FBQ2hCLGlCQUFZLEdBQXFDLElBQUksQ0FBQztJQUUxQixDQUFDO0lBQy9CLDRCQUFDO0FBQUQsQ0FBQyxBQWxCRCxJQWtCQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtsb29zZUlkZW50aWNhbH0gZnJvbSAnLi4vLi4vdXRpbC9jb21wYXJpc29uJztcbmltcG9ydCB7c3RyaW5naWZ5fSBmcm9tICcuLi8uLi91dGlsL3N0cmluZ2lmeSc7XG5pbXBvcnQge2lzSnNPYmplY3R9IGZyb20gJy4uL2NoYW5nZV9kZXRlY3Rpb25fdXRpbCc7XG5pbXBvcnQge0tleVZhbHVlQ2hhbmdlUmVjb3JkLCBLZXlWYWx1ZUNoYW5nZXMsIEtleVZhbHVlRGlmZmVyLCBLZXlWYWx1ZURpZmZlckZhY3Rvcnl9IGZyb20gJy4va2V5dmFsdWVfZGlmZmVycyc7XG5cblxuZXhwb3J0IGNsYXNzIERlZmF1bHRLZXlWYWx1ZURpZmZlckZhY3Rvcnk8SywgVj4gaW1wbGVtZW50cyBLZXlWYWx1ZURpZmZlckZhY3Rvcnkge1xuICBjb25zdHJ1Y3RvcigpIHt9XG4gIHN1cHBvcnRzKG9iajogYW55KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIG9iaiBpbnN0YW5jZW9mIE1hcCB8fCBpc0pzT2JqZWN0KG9iaik7XG4gIH1cblxuICBjcmVhdGU8SywgVj4oKTogS2V5VmFsdWVEaWZmZXI8SywgVj4ge1xuICAgIHJldHVybiBuZXcgRGVmYXVsdEtleVZhbHVlRGlmZmVyPEssIFY+KCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERlZmF1bHRLZXlWYWx1ZURpZmZlcjxLLCBWPiBpbXBsZW1lbnRzIEtleVZhbHVlRGlmZmVyPEssIFY+LCBLZXlWYWx1ZUNoYW5nZXM8SywgVj4ge1xuICBwcml2YXRlIF9yZWNvcmRzID0gbmV3IE1hcDxLLCBLZXlWYWx1ZUNoYW5nZVJlY29yZF88SywgVj4+KCk7XG4gIHByaXZhdGUgX21hcEhlYWQ6IEtleVZhbHVlQ2hhbmdlUmVjb3JkXzxLLCBWPnxudWxsID0gbnVsbDtcbiAgLy8gX2FwcGVuZEFmdGVyIGlzIHVzZWQgaW4gdGhlIGNoZWNrIGxvb3BcbiAgcHJpdmF0ZSBfYXBwZW5kQWZ0ZXI6IEtleVZhbHVlQ2hhbmdlUmVjb3JkXzxLLCBWPnxudWxsID0gbnVsbDtcbiAgcHJpdmF0ZSBfcHJldmlvdXNNYXBIZWFkOiBLZXlWYWx1ZUNoYW5nZVJlY29yZF88SywgVj58bnVsbCA9IG51bGw7XG4gIHByaXZhdGUgX2NoYW5nZXNIZWFkOiBLZXlWYWx1ZUNoYW5nZVJlY29yZF88SywgVj58bnVsbCA9IG51bGw7XG4gIHByaXZhdGUgX2NoYW5nZXNUYWlsOiBLZXlWYWx1ZUNoYW5nZVJlY29yZF88SywgVj58bnVsbCA9IG51bGw7XG4gIHByaXZhdGUgX2FkZGl0aW9uc0hlYWQ6IEtleVZhbHVlQ2hhbmdlUmVjb3JkXzxLLCBWPnxudWxsID0gbnVsbDtcbiAgcHJpdmF0ZSBfYWRkaXRpb25zVGFpbDogS2V5VmFsdWVDaGFuZ2VSZWNvcmRfPEssIFY+fG51bGwgPSBudWxsO1xuICBwcml2YXRlIF9yZW1vdmFsc0hlYWQ6IEtleVZhbHVlQ2hhbmdlUmVjb3JkXzxLLCBWPnxudWxsID0gbnVsbDtcbiAgcHJpdmF0ZSBfcmVtb3ZhbHNUYWlsOiBLZXlWYWx1ZUNoYW5nZVJlY29yZF88SywgVj58bnVsbCA9IG51bGw7XG5cbiAgZ2V0IGlzRGlydHkoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2FkZGl0aW9uc0hlYWQgIT09IG51bGwgfHwgdGhpcy5fY2hhbmdlc0hlYWQgIT09IG51bGwgfHxcbiAgICAgICAgdGhpcy5fcmVtb3ZhbHNIZWFkICE9PSBudWxsO1xuICB9XG5cbiAgZm9yRWFjaEl0ZW0oZm46IChyOiBLZXlWYWx1ZUNoYW5nZVJlY29yZDxLLCBWPikgPT4gdm9pZCkge1xuICAgIGxldCByZWNvcmQ6IEtleVZhbHVlQ2hhbmdlUmVjb3JkXzxLLCBWPnxudWxsO1xuICAgIGZvciAocmVjb3JkID0gdGhpcy5fbWFwSGVhZDsgcmVjb3JkICE9PSBudWxsOyByZWNvcmQgPSByZWNvcmQuX25leHQpIHtcbiAgICAgIGZuKHJlY29yZCk7XG4gICAgfVxuICB9XG5cbiAgZm9yRWFjaFByZXZpb3VzSXRlbShmbjogKHI6IEtleVZhbHVlQ2hhbmdlUmVjb3JkPEssIFY+KSA9PiB2b2lkKSB7XG4gICAgbGV0IHJlY29yZDogS2V5VmFsdWVDaGFuZ2VSZWNvcmRfPEssIFY+fG51bGw7XG4gICAgZm9yIChyZWNvcmQgPSB0aGlzLl9wcmV2aW91c01hcEhlYWQ7IHJlY29yZCAhPT0gbnVsbDsgcmVjb3JkID0gcmVjb3JkLl9uZXh0UHJldmlvdXMpIHtcbiAgICAgIGZuKHJlY29yZCk7XG4gICAgfVxuICB9XG5cbiAgZm9yRWFjaENoYW5nZWRJdGVtKGZuOiAocjogS2V5VmFsdWVDaGFuZ2VSZWNvcmQ8SywgVj4pID0+IHZvaWQpIHtcbiAgICBsZXQgcmVjb3JkOiBLZXlWYWx1ZUNoYW5nZVJlY29yZF88SywgVj58bnVsbDtcbiAgICBmb3IgKHJlY29yZCA9IHRoaXMuX2NoYW5nZXNIZWFkOyByZWNvcmQgIT09IG51bGw7IHJlY29yZCA9IHJlY29yZC5fbmV4dENoYW5nZWQpIHtcbiAgICAgIGZuKHJlY29yZCk7XG4gICAgfVxuICB9XG5cbiAgZm9yRWFjaEFkZGVkSXRlbShmbjogKHI6IEtleVZhbHVlQ2hhbmdlUmVjb3JkPEssIFY+KSA9PiB2b2lkKSB7XG4gICAgbGV0IHJlY29yZDogS2V5VmFsdWVDaGFuZ2VSZWNvcmRfPEssIFY+fG51bGw7XG4gICAgZm9yIChyZWNvcmQgPSB0aGlzLl9hZGRpdGlvbnNIZWFkOyByZWNvcmQgIT09IG51bGw7IHJlY29yZCA9IHJlY29yZC5fbmV4dEFkZGVkKSB7XG4gICAgICBmbihyZWNvcmQpO1xuICAgIH1cbiAgfVxuXG4gIGZvckVhY2hSZW1vdmVkSXRlbShmbjogKHI6IEtleVZhbHVlQ2hhbmdlUmVjb3JkPEssIFY+KSA9PiB2b2lkKSB7XG4gICAgbGV0IHJlY29yZDogS2V5VmFsdWVDaGFuZ2VSZWNvcmRfPEssIFY+fG51bGw7XG4gICAgZm9yIChyZWNvcmQgPSB0aGlzLl9yZW1vdmFsc0hlYWQ7IHJlY29yZCAhPT0gbnVsbDsgcmVjb3JkID0gcmVjb3JkLl9uZXh0UmVtb3ZlZCkge1xuICAgICAgZm4ocmVjb3JkKTtcbiAgICB9XG4gIH1cblxuICBkaWZmKG1hcD86IE1hcDxhbnksIGFueT58e1trOiBzdHJpbmddOiBhbnl9fG51bGwpOiBhbnkge1xuICAgIGlmICghbWFwKSB7XG4gICAgICBtYXAgPSBuZXcgTWFwKCk7XG4gICAgfSBlbHNlIGlmICghKG1hcCBpbnN0YW5jZW9mIE1hcCB8fCBpc0pzT2JqZWN0KG1hcCkpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgYEVycm9yIHRyeWluZyB0byBkaWZmICcke3N0cmluZ2lmeShtYXApfScuIE9ubHkgbWFwcyBhbmQgb2JqZWN0cyBhcmUgYWxsb3dlZGApO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmNoZWNrKG1hcCkgPyB0aGlzIDogbnVsbDtcbiAgfVxuXG4gIG9uRGVzdHJveSgpIHt9XG5cbiAgLyoqXG4gICAqIENoZWNrIHRoZSBjdXJyZW50IHN0YXRlIG9mIHRoZSBtYXAgdnMgdGhlIHByZXZpb3VzLlxuICAgKiBUaGUgYWxnb3JpdGhtIGlzIG9wdGltaXNlZCBmb3Igd2hlbiB0aGUga2V5cyBkbyBubyBjaGFuZ2UuXG4gICAqL1xuICBjaGVjayhtYXA6IE1hcDxhbnksIGFueT58e1trOiBzdHJpbmddOiBhbnl9KTogYm9vbGVhbiB7XG4gICAgdGhpcy5fcmVzZXQoKTtcblxuICAgIGxldCBpbnNlcnRCZWZvcmUgPSB0aGlzLl9tYXBIZWFkO1xuICAgIHRoaXMuX2FwcGVuZEFmdGVyID0gbnVsbDtcblxuICAgIHRoaXMuX2ZvckVhY2gobWFwLCAodmFsdWU6IGFueSwga2V5OiBhbnkpID0+IHtcbiAgICAgIGlmIChpbnNlcnRCZWZvcmUgJiYgaW5zZXJ0QmVmb3JlLmtleSA9PT0ga2V5KSB7XG4gICAgICAgIHRoaXMuX21heWJlQWRkVG9DaGFuZ2VzKGluc2VydEJlZm9yZSwgdmFsdWUpO1xuICAgICAgICB0aGlzLl9hcHBlbmRBZnRlciA9IGluc2VydEJlZm9yZTtcbiAgICAgICAgaW5zZXJ0QmVmb3JlID0gaW5zZXJ0QmVmb3JlLl9uZXh0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgcmVjb3JkID0gdGhpcy5fZ2V0T3JDcmVhdGVSZWNvcmRGb3JLZXkoa2V5LCB2YWx1ZSk7XG4gICAgICAgIGluc2VydEJlZm9yZSA9IHRoaXMuX2luc2VydEJlZm9yZU9yQXBwZW5kKGluc2VydEJlZm9yZSwgcmVjb3JkKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIEl0ZW1zIHJlbWFpbmluZyBhdCB0aGUgZW5kIG9mIHRoZSBsaXN0IGhhdmUgYmVlbiBkZWxldGVkXG4gICAgaWYgKGluc2VydEJlZm9yZSkge1xuICAgICAgaWYgKGluc2VydEJlZm9yZS5fcHJldikge1xuICAgICAgICBpbnNlcnRCZWZvcmUuX3ByZXYuX25leHQgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9yZW1vdmFsc0hlYWQgPSBpbnNlcnRCZWZvcmU7XG5cbiAgICAgIGZvciAobGV0IHJlY29yZDogS2V5VmFsdWVDaGFuZ2VSZWNvcmRfPEssIFY+fG51bGwgPSBpbnNlcnRCZWZvcmU7IHJlY29yZCAhPT0gbnVsbDtcbiAgICAgICAgICAgcmVjb3JkID0gcmVjb3JkLl9uZXh0UmVtb3ZlZCkge1xuICAgICAgICBpZiAocmVjb3JkID09PSB0aGlzLl9tYXBIZWFkKSB7XG4gICAgICAgICAgdGhpcy5fbWFwSGVhZCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fcmVjb3Jkcy5kZWxldGUocmVjb3JkLmtleSk7XG4gICAgICAgIHJlY29yZC5fbmV4dFJlbW92ZWQgPSByZWNvcmQuX25leHQ7XG4gICAgICAgIHJlY29yZC5wcmV2aW91c1ZhbHVlID0gcmVjb3JkLmN1cnJlbnRWYWx1ZTtcbiAgICAgICAgcmVjb3JkLmN1cnJlbnRWYWx1ZSA9IG51bGw7XG4gICAgICAgIHJlY29yZC5fcHJldiA9IG51bGw7XG4gICAgICAgIHJlY29yZC5fbmV4dCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gTWFrZSBzdXJlIHRhaWxzIGhhdmUgbm8gbmV4dCByZWNvcmRzIGZyb20gcHJldmlvdXMgcnVuc1xuICAgIGlmICh0aGlzLl9jaGFuZ2VzVGFpbCkgdGhpcy5fY2hhbmdlc1RhaWwuX25leHRDaGFuZ2VkID0gbnVsbDtcbiAgICBpZiAodGhpcy5fYWRkaXRpb25zVGFpbCkgdGhpcy5fYWRkaXRpb25zVGFpbC5fbmV4dEFkZGVkID0gbnVsbDtcblxuICAgIHJldHVybiB0aGlzLmlzRGlydHk7XG4gIH1cblxuICAvKipcbiAgICogSW5zZXJ0cyBhIHJlY29yZCBiZWZvcmUgYGJlZm9yZWAgb3IgYXBwZW5kIGF0IHRoZSBlbmQgb2YgdGhlIGxpc3Qgd2hlbiBgYmVmb3JlYCBpcyBudWxsLlxuICAgKlxuICAgKiBOb3RlczpcbiAgICogLSBUaGlzIG1ldGhvZCBhcHBlbmRzIGF0IGB0aGlzLl9hcHBlbmRBZnRlcmAsXG4gICAqIC0gVGhpcyBtZXRob2QgdXBkYXRlcyBgdGhpcy5fYXBwZW5kQWZ0ZXJgLFxuICAgKiAtIFRoZSByZXR1cm4gdmFsdWUgaXMgdGhlIG5ldyB2YWx1ZSBmb3IgdGhlIGluc2VydGlvbiBwb2ludGVyLlxuICAgKi9cbiAgcHJpdmF0ZSBfaW5zZXJ0QmVmb3JlT3JBcHBlbmQoXG4gICAgICBiZWZvcmU6IEtleVZhbHVlQ2hhbmdlUmVjb3JkXzxLLCBWPnxudWxsLFxuICAgICAgcmVjb3JkOiBLZXlWYWx1ZUNoYW5nZVJlY29yZF88SywgVj4pOiBLZXlWYWx1ZUNoYW5nZVJlY29yZF88SywgVj58bnVsbCB7XG4gICAgaWYgKGJlZm9yZSkge1xuICAgICAgY29uc3QgcHJldiA9IGJlZm9yZS5fcHJldjtcbiAgICAgIHJlY29yZC5fbmV4dCA9IGJlZm9yZTtcbiAgICAgIHJlY29yZC5fcHJldiA9IHByZXY7XG4gICAgICBiZWZvcmUuX3ByZXYgPSByZWNvcmQ7XG4gICAgICBpZiAocHJldikge1xuICAgICAgICBwcmV2Ll9uZXh0ID0gcmVjb3JkO1xuICAgICAgfVxuICAgICAgaWYgKGJlZm9yZSA9PT0gdGhpcy5fbWFwSGVhZCkge1xuICAgICAgICB0aGlzLl9tYXBIZWFkID0gcmVjb3JkO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9hcHBlbmRBZnRlciA9IGJlZm9yZTtcbiAgICAgIHJldHVybiBiZWZvcmU7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2FwcGVuZEFmdGVyKSB7XG4gICAgICB0aGlzLl9hcHBlbmRBZnRlci5fbmV4dCA9IHJlY29yZDtcbiAgICAgIHJlY29yZC5fcHJldiA9IHRoaXMuX2FwcGVuZEFmdGVyO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9tYXBIZWFkID0gcmVjb3JkO1xuICAgIH1cblxuICAgIHRoaXMuX2FwcGVuZEFmdGVyID0gcmVjb3JkO1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0T3JDcmVhdGVSZWNvcmRGb3JLZXkoa2V5OiBLLCB2YWx1ZTogVik6IEtleVZhbHVlQ2hhbmdlUmVjb3JkXzxLLCBWPiB7XG4gICAgaWYgKHRoaXMuX3JlY29yZHMuaGFzKGtleSkpIHtcbiAgICAgIGNvbnN0IHJlY29yZCA9IHRoaXMuX3JlY29yZHMuZ2V0KGtleSkhO1xuICAgICAgdGhpcy5fbWF5YmVBZGRUb0NoYW5nZXMocmVjb3JkLCB2YWx1ZSk7XG4gICAgICBjb25zdCBwcmV2ID0gcmVjb3JkLl9wcmV2O1xuICAgICAgY29uc3QgbmV4dCA9IHJlY29yZC5fbmV4dDtcbiAgICAgIGlmIChwcmV2KSB7XG4gICAgICAgIHByZXYuX25leHQgPSBuZXh0O1xuICAgICAgfVxuICAgICAgaWYgKG5leHQpIHtcbiAgICAgICAgbmV4dC5fcHJldiA9IHByZXY7XG4gICAgICB9XG4gICAgICByZWNvcmQuX25leHQgPSBudWxsO1xuICAgICAgcmVjb3JkLl9wcmV2ID0gbnVsbDtcblxuICAgICAgcmV0dXJuIHJlY29yZDtcbiAgICB9XG5cbiAgICBjb25zdCByZWNvcmQgPSBuZXcgS2V5VmFsdWVDaGFuZ2VSZWNvcmRfPEssIFY+KGtleSk7XG4gICAgdGhpcy5fcmVjb3Jkcy5zZXQoa2V5LCByZWNvcmQpO1xuICAgIHJlY29yZC5jdXJyZW50VmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLl9hZGRUb0FkZGl0aW9ucyhyZWNvcmQpO1xuICAgIHJldHVybiByZWNvcmQ7XG4gIH1cblxuICAvKiogQGludGVybmFsICovXG4gIF9yZXNldCgpIHtcbiAgICBpZiAodGhpcy5pc0RpcnR5KSB7XG4gICAgICBsZXQgcmVjb3JkOiBLZXlWYWx1ZUNoYW5nZVJlY29yZF88SywgVj58bnVsbDtcbiAgICAgIC8vIGxldCBgX3ByZXZpb3VzTWFwSGVhZGAgY29udGFpbiB0aGUgc3RhdGUgb2YgdGhlIG1hcCBiZWZvcmUgdGhlIGNoYW5nZXNcbiAgICAgIHRoaXMuX3ByZXZpb3VzTWFwSGVhZCA9IHRoaXMuX21hcEhlYWQ7XG4gICAgICBmb3IgKHJlY29yZCA9IHRoaXMuX3ByZXZpb3VzTWFwSGVhZDsgcmVjb3JkICE9PSBudWxsOyByZWNvcmQgPSByZWNvcmQuX25leHQpIHtcbiAgICAgICAgcmVjb3JkLl9uZXh0UHJldmlvdXMgPSByZWNvcmQuX25leHQ7XG4gICAgICB9XG5cbiAgICAgIC8vIFVwZGF0ZSBgcmVjb3JkLnByZXZpb3VzVmFsdWVgIHdpdGggdGhlIHZhbHVlIG9mIHRoZSBpdGVtIGJlZm9yZSB0aGUgY2hhbmdlc1xuICAgICAgLy8gV2UgbmVlZCB0byB1cGRhdGUgYWxsIGNoYW5nZWQgaXRlbXMgKHRoYXQncyB0aG9zZSB3aGljaCBoYXZlIGJlZW4gYWRkZWQgYW5kIGNoYW5nZWQpXG4gICAgICBmb3IgKHJlY29yZCA9IHRoaXMuX2NoYW5nZXNIZWFkOyByZWNvcmQgIT09IG51bGw7IHJlY29yZCA9IHJlY29yZC5fbmV4dENoYW5nZWQpIHtcbiAgICAgICAgcmVjb3JkLnByZXZpb3VzVmFsdWUgPSByZWNvcmQuY3VycmVudFZhbHVlO1xuICAgICAgfVxuICAgICAgZm9yIChyZWNvcmQgPSB0aGlzLl9hZGRpdGlvbnNIZWFkOyByZWNvcmQgIT0gbnVsbDsgcmVjb3JkID0gcmVjb3JkLl9uZXh0QWRkZWQpIHtcbiAgICAgICAgcmVjb3JkLnByZXZpb3VzVmFsdWUgPSByZWNvcmQuY3VycmVudFZhbHVlO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9jaGFuZ2VzSGVhZCA9IHRoaXMuX2NoYW5nZXNUYWlsID0gbnVsbDtcbiAgICAgIHRoaXMuX2FkZGl0aW9uc0hlYWQgPSB0aGlzLl9hZGRpdGlvbnNUYWlsID0gbnVsbDtcbiAgICAgIHRoaXMuX3JlbW92YWxzSGVhZCA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgLy8gQWRkIHRoZSByZWNvcmQgb3IgYSBnaXZlbiBrZXkgdG8gdGhlIGxpc3Qgb2YgY2hhbmdlcyBvbmx5IHdoZW4gdGhlIHZhbHVlIGhhcyBhY3R1YWxseSBjaGFuZ2VkXG4gIHByaXZhdGUgX21heWJlQWRkVG9DaGFuZ2VzKHJlY29yZDogS2V5VmFsdWVDaGFuZ2VSZWNvcmRfPEssIFY+LCBuZXdWYWx1ZTogYW55KTogdm9pZCB7XG4gICAgaWYgKCFsb29zZUlkZW50aWNhbChuZXdWYWx1ZSwgcmVjb3JkLmN1cnJlbnRWYWx1ZSkpIHtcbiAgICAgIHJlY29yZC5wcmV2aW91c1ZhbHVlID0gcmVjb3JkLmN1cnJlbnRWYWx1ZTtcbiAgICAgIHJlY29yZC5jdXJyZW50VmFsdWUgPSBuZXdWYWx1ZTtcbiAgICAgIHRoaXMuX2FkZFRvQ2hhbmdlcyhyZWNvcmQpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2FkZFRvQWRkaXRpb25zKHJlY29yZDogS2V5VmFsdWVDaGFuZ2VSZWNvcmRfPEssIFY+KSB7XG4gICAgaWYgKHRoaXMuX2FkZGl0aW9uc0hlYWQgPT09IG51bGwpIHtcbiAgICAgIHRoaXMuX2FkZGl0aW9uc0hlYWQgPSB0aGlzLl9hZGRpdGlvbnNUYWlsID0gcmVjb3JkO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9hZGRpdGlvbnNUYWlsIS5fbmV4dEFkZGVkID0gcmVjb3JkO1xuICAgICAgdGhpcy5fYWRkaXRpb25zVGFpbCA9IHJlY29yZDtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9hZGRUb0NoYW5nZXMocmVjb3JkOiBLZXlWYWx1ZUNoYW5nZVJlY29yZF88SywgVj4pIHtcbiAgICBpZiAodGhpcy5fY2hhbmdlc0hlYWQgPT09IG51bGwpIHtcbiAgICAgIHRoaXMuX2NoYW5nZXNIZWFkID0gdGhpcy5fY2hhbmdlc1RhaWwgPSByZWNvcmQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2NoYW5nZXNUYWlsIS5fbmV4dENoYW5nZWQgPSByZWNvcmQ7XG4gICAgICB0aGlzLl9jaGFuZ2VzVGFpbCA9IHJlY29yZDtcbiAgICB9XG4gIH1cblxuICAvKiogQGludGVybmFsICovXG4gIHByaXZhdGUgX2ZvckVhY2g8SywgVj4ob2JqOiBNYXA8SywgVj58e1trOiBzdHJpbmddOiBWfSwgZm46ICh2OiBWLCBrOiBhbnkpID0+IHZvaWQpIHtcbiAgICBpZiAob2JqIGluc3RhbmNlb2YgTWFwKSB7XG4gICAgICBvYmouZm9yRWFjaChmbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIE9iamVjdC5rZXlzKG9iaikuZm9yRWFjaChrID0+IGZuKG9ialtrXSwgaykpO1xuICAgIH1cbiAgfVxufVxuXG5jbGFzcyBLZXlWYWx1ZUNoYW5nZVJlY29yZF88SywgVj4gaW1wbGVtZW50cyBLZXlWYWx1ZUNoYW5nZVJlY29yZDxLLCBWPiB7XG4gIHByZXZpb3VzVmFsdWU6IFZ8bnVsbCA9IG51bGw7XG4gIGN1cnJlbnRWYWx1ZTogVnxudWxsID0gbnVsbDtcblxuICAvKiogQGludGVybmFsICovXG4gIF9uZXh0UHJldmlvdXM6IEtleVZhbHVlQ2hhbmdlUmVjb3JkXzxLLCBWPnxudWxsID0gbnVsbDtcbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBfbmV4dDogS2V5VmFsdWVDaGFuZ2VSZWNvcmRfPEssIFY+fG51bGwgPSBudWxsO1xuICAvKiogQGludGVybmFsICovXG4gIF9wcmV2OiBLZXlWYWx1ZUNoYW5nZVJlY29yZF88SywgVj58bnVsbCA9IG51bGw7XG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgX25leHRBZGRlZDogS2V5VmFsdWVDaGFuZ2VSZWNvcmRfPEssIFY+fG51bGwgPSBudWxsO1xuICAvKiogQGludGVybmFsICovXG4gIF9uZXh0UmVtb3ZlZDogS2V5VmFsdWVDaGFuZ2VSZWNvcmRfPEssIFY+fG51bGwgPSBudWxsO1xuICAvKiogQGludGVybmFsICovXG4gIF9uZXh0Q2hhbmdlZDogS2V5VmFsdWVDaGFuZ2VSZWNvcmRfPEssIFY+fG51bGwgPSBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBrZXk6IEspIHt9XG59XG4iXX0=
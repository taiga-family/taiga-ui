/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/collections/array-data-source.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { isObservable, of as observableOf } from 'rxjs';
import { DataSource } from './data-source';
/**
 * DataSource wrapper for a native array.
 * @template T
 */
export class ArrayDataSource extends DataSource {
    /**
     * @param {?} _data
     */
    constructor(_data) {
        super();
        this._data = _data;
    }
    /**
     * @return {?}
     */
    connect() {
        return isObservable(this._data) ? this._data : observableOf(this._data);
    }
    /**
     * @return {?}
     */
    disconnect() { }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    ArrayDataSource.prototype._data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJyYXktZGF0YS1zb3VyY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvY2RrL2NvbGxlY3Rpb25zL2FycmF5LWRhdGEtc291cmNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBYSxZQUFZLEVBQUUsRUFBRSxJQUFJLFlBQVksRUFBQyxNQUFNLE1BQU0sQ0FBQztBQUNsRSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7OztBQUl6QyxNQUFNLE9BQU8sZUFBbUIsU0FBUSxVQUFhOzs7O0lBQ25ELFlBQW9CLEtBQWtFO1FBQ3BGLEtBQUssRUFBRSxDQUFDO1FBRFUsVUFBSyxHQUFMLEtBQUssQ0FBNkQ7SUFFdEYsQ0FBQzs7OztJQUVELE9BQU87UUFDTCxPQUFPLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUUsQ0FBQzs7OztJQUVELFVBQVUsS0FBSSxDQUFDO0NBQ2hCOzs7Ozs7SUFUYSxnQ0FBMEUiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtPYnNlcnZhYmxlLCBpc09ic2VydmFibGUsIG9mIGFzIG9ic2VydmFibGVPZn0gZnJvbSAncnhqcyc7XG5pbXBvcnQge0RhdGFTb3VyY2V9IGZyb20gJy4vZGF0YS1zb3VyY2UnO1xuXG5cbi8qKiBEYXRhU291cmNlIHdyYXBwZXIgZm9yIGEgbmF0aXZlIGFycmF5LiAqL1xuZXhwb3J0IGNsYXNzIEFycmF5RGF0YVNvdXJjZTxUPiBleHRlbmRzIERhdGFTb3VyY2U8VD4ge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9kYXRhOiBUW10gfCBSZWFkb25seUFycmF5PFQ+IHwgT2JzZXJ2YWJsZTxUW10gfCBSZWFkb25seUFycmF5PFQ+Pikge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBjb25uZWN0KCk6IE9ic2VydmFibGU8VFtdIHwgUmVhZG9ubHlBcnJheTxUPj4ge1xuICAgIHJldHVybiBpc09ic2VydmFibGUodGhpcy5fZGF0YSkgPyB0aGlzLl9kYXRhIDogb2JzZXJ2YWJsZU9mKHRoaXMuX2RhdGEpO1xuICB9XG5cbiAgZGlzY29ubmVjdCgpIHt9XG59XG4iXX0=
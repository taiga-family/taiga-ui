/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { __extends } from "tslib";
import { isObservable, of as observableOf } from 'rxjs';
import { DataSource } from './data-source';
/** DataSource wrapper for a native array. */
var ArrayDataSource = /** @class */ (function (_super) {
    __extends(ArrayDataSource, _super);
    function ArrayDataSource(_data) {
        var _this = _super.call(this) || this;
        _this._data = _data;
        return _this;
    }
    ArrayDataSource.prototype.connect = function () {
        return isObservable(this._data) ? this._data : observableOf(this._data);
    };
    ArrayDataSource.prototype.disconnect = function () { };
    return ArrayDataSource;
}(DataSource));
export { ArrayDataSource };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJyYXktZGF0YS1zb3VyY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY2RrL2NvbGxlY3Rpb25zL2FycmF5LWRhdGEtc291cmNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRzs7QUFFSCxPQUFPLEVBQWEsWUFBWSxFQUFFLEVBQUUsSUFBSSxZQUFZLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFDbEUsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUd6Qyw2Q0FBNkM7QUFDN0M7SUFBd0MsbUNBQWE7SUFDbkQseUJBQW9CLEtBQWtFO1FBQXRGLFlBQ0UsaUJBQU8sU0FDUjtRQUZtQixXQUFLLEdBQUwsS0FBSyxDQUE2RDs7SUFFdEYsQ0FBQztJQUVELGlDQUFPLEdBQVA7UUFDRSxPQUFPLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUUsQ0FBQztJQUVELG9DQUFVLEdBQVYsY0FBYyxDQUFDO0lBQ2pCLHNCQUFDO0FBQUQsQ0FBQyxBQVZELENBQXdDLFVBQVUsR0FVakQiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtPYnNlcnZhYmxlLCBpc09ic2VydmFibGUsIG9mIGFzIG9ic2VydmFibGVPZn0gZnJvbSAncnhqcyc7XG5pbXBvcnQge0RhdGFTb3VyY2V9IGZyb20gJy4vZGF0YS1zb3VyY2UnO1xuXG5cbi8qKiBEYXRhU291cmNlIHdyYXBwZXIgZm9yIGEgbmF0aXZlIGFycmF5LiAqL1xuZXhwb3J0IGNsYXNzIEFycmF5RGF0YVNvdXJjZTxUPiBleHRlbmRzIERhdGFTb3VyY2U8VD4ge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9kYXRhOiBUW10gfCBSZWFkb25seUFycmF5PFQ+IHwgT2JzZXJ2YWJsZTxUW10gfCBSZWFkb25seUFycmF5PFQ+Pikge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBjb25uZWN0KCk6IE9ic2VydmFibGU8VFtdIHwgUmVhZG9ubHlBcnJheTxUPj4ge1xuICAgIHJldHVybiBpc09ic2VydmFibGUodGhpcy5fZGF0YSkgPyB0aGlzLl9kYXRhIDogb2JzZXJ2YWJsZU9mKHRoaXMuX2RhdGEpO1xuICB9XG5cbiAgZGlzY29ubmVjdCgpIHt9XG59XG4iXX0=
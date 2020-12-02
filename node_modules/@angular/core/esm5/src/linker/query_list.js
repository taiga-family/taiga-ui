/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { EventEmitter } from '../event_emitter';
import { flatten } from '../util/array_utils';
import { getSymbolIterator } from '../util/symbol';
function symbolIterator() {
    return this._results[getSymbolIterator()]();
}
/**
 * An unmodifiable list of items that Angular keeps up to date when the state
 * of the application changes.
 *
 * The type of object that {@link ViewChildren}, {@link ContentChildren}, and {@link QueryList}
 * provide.
 *
 * Implements an iterable interface, therefore it can be used in both ES6
 * javascript `for (var i of items)` loops as well as in Angular templates with
 * `*ngFor="let i of myList"`.
 *
 * Changes can be observed by subscribing to the changes `Observable`.
 *
 * NOTE: In the future this class will implement an `Observable` interface.
 *
 * @usageNotes
 * ### Example
 * ```typescript
 * @Component({...})
 * class Container {
 *   @ViewChildren(Item) items:QueryList<Item>;
 * }
 * ```
 *
 * @publicApi
 */
var QueryList = /** @class */ (function () {
    function QueryList() {
        this.dirty = true;
        this._results = [];
        this.changes = new EventEmitter();
        this.length = 0;
        // This function should be declared on the prototype, but doing so there will cause the class
        // declaration to have side-effects and become not tree-shakable. For this reason we do it in
        // the constructor.
        // [getSymbolIterator()](): Iterator<T> { ... }
        var symbol = getSymbolIterator();
        var proto = QueryList.prototype;
        if (!proto[symbol])
            proto[symbol] = symbolIterator;
    }
    /**
     * See
     * [Array.map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
     */
    QueryList.prototype.map = function (fn) {
        return this._results.map(fn);
    };
    /**
     * See
     * [Array.filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
     */
    QueryList.prototype.filter = function (fn) {
        return this._results.filter(fn);
    };
    /**
     * See
     * [Array.find](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)
     */
    QueryList.prototype.find = function (fn) {
        return this._results.find(fn);
    };
    /**
     * See
     * [Array.reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
     */
    QueryList.prototype.reduce = function (fn, init) {
        return this._results.reduce(fn, init);
    };
    /**
     * See
     * [Array.forEach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
     */
    QueryList.prototype.forEach = function (fn) {
        this._results.forEach(fn);
    };
    /**
     * See
     * [Array.some](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some)
     */
    QueryList.prototype.some = function (fn) {
        return this._results.some(fn);
    };
    /**
     * Returns a copy of the internal results list as an Array.
     */
    QueryList.prototype.toArray = function () {
        return this._results.slice();
    };
    QueryList.prototype.toString = function () {
        return this._results.toString();
    };
    /**
     * Updates the stored data of the query list, and resets the `dirty` flag to `false`, so that
     * on change detection, it will not notify of changes to the queries, unless a new change
     * occurs.
     *
     * @param resultsTree The query results to store
     */
    QueryList.prototype.reset = function (resultsTree) {
        this._results = flatten(resultsTree);
        this.dirty = false;
        this.length = this._results.length;
        this.last = this._results[this.length - 1];
        this.first = this._results[0];
    };
    /**
     * Triggers a change event by emitting on the `changes` {@link EventEmitter}.
     */
    QueryList.prototype.notifyOnChanges = function () {
        this.changes.emit(this);
    };
    /** internal */
    QueryList.prototype.setDirty = function () {
        this.dirty = true;
    };
    /** internal */
    QueryList.prototype.destroy = function () {
        this.changes.complete();
        this.changes.unsubscribe();
    };
    return QueryList;
}());
export { QueryList };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlcnlfbGlzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvcmUvc3JjL2xpbmtlci9xdWVyeV9saXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUlILE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQztBQUM5QyxPQUFPLEVBQUMsT0FBTyxFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFDNUMsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFFakQsU0FBUyxjQUFjO0lBQ3JCLE9BQVMsSUFBb0MsQ0FBQyxRQUFnQixDQUFDLGlCQUFpQixFQUFFLENBQUMsRUFBRSxDQUFDO0FBQ3hGLENBQUM7QUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXlCRztBQUNIO0lBV0U7UUFWZ0IsVUFBSyxHQUFHLElBQUksQ0FBQztRQUNyQixhQUFRLEdBQWEsRUFBRSxDQUFDO1FBQ2hCLFlBQU8sR0FBb0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUVyRCxXQUFNLEdBQVcsQ0FBQyxDQUFDO1FBTzFCLDZGQUE2RjtRQUM3Riw2RkFBNkY7UUFDN0YsbUJBQW1CO1FBQ25CLCtDQUErQztRQUMvQyxJQUFNLE1BQU0sR0FBRyxpQkFBaUIsRUFBRSxDQUFDO1FBQ25DLElBQU0sS0FBSyxHQUFHLFNBQVMsQ0FBQyxTQUFnQixDQUFDO1FBQ3pDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDO1lBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLGNBQWMsQ0FBQztJQUNyRCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsdUJBQUcsR0FBSCxVQUFPLEVBQTZDO1FBQ2xELE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUVEOzs7T0FHRztJQUNILDBCQUFNLEdBQU4sVUFBTyxFQUFtRDtRQUN4RCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFRDs7O09BR0c7SUFDSCx3QkFBSSxHQUFKLFVBQUssRUFBbUQ7UUFDdEQsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsMEJBQU0sR0FBTixVQUFVLEVBQWtFLEVBQUUsSUFBTztRQUNuRixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsMkJBQU8sR0FBUCxVQUFRLEVBQWdEO1FBQ3RELElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFRDs7O09BR0c7SUFDSCx3QkFBSSxHQUFKLFVBQUssRUFBb0Q7UUFDdkQsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRUQ7O09BRUc7SUFDSCwyQkFBTyxHQUFQO1FBQ0UsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQy9CLENBQUM7SUFFRCw0QkFBUSxHQUFSO1FBQ0UsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ2xDLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSCx5QkFBSyxHQUFMLFVBQU0sV0FBMkI7UUFDL0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDcEMsSUFBeUIsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ3hDLElBQXlCLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO1FBQ3hELElBQWtCLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN6RCxJQUFtQixDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFRDs7T0FFRztJQUNILG1DQUFlLEdBQWY7UUFDRyxJQUFJLENBQUMsT0FBNkIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUVELGVBQWU7SUFDZiw0QkFBUSxHQUFSO1FBQ0csSUFBeUIsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO0lBQzFDLENBQUM7SUFFRCxlQUFlO0lBQ2YsMkJBQU8sR0FBUDtRQUNHLElBQUksQ0FBQyxPQUE2QixDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzlDLElBQUksQ0FBQyxPQUE2QixDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3BELENBQUM7SUFRSCxnQkFBQztBQUFELENBQUMsQUF2SEQsSUF1SEMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7RXZlbnRFbWl0dGVyfSBmcm9tICcuLi9ldmVudF9lbWl0dGVyJztcbmltcG9ydCB7ZmxhdHRlbn0gZnJvbSAnLi4vdXRpbC9hcnJheV91dGlscyc7XG5pbXBvcnQge2dldFN5bWJvbEl0ZXJhdG9yfSBmcm9tICcuLi91dGlsL3N5bWJvbCc7XG5cbmZ1bmN0aW9uIHN5bWJvbEl0ZXJhdG9yPFQ+KHRoaXM6IFF1ZXJ5TGlzdDxUPik6IEl0ZXJhdG9yPFQ+IHtcbiAgcmV0dXJuICgodGhpcyBhcyBhbnkgYXMge19yZXN1bHRzOiBBcnJheTxUPn0pLl9yZXN1bHRzIGFzIGFueSlbZ2V0U3ltYm9sSXRlcmF0b3IoKV0oKTtcbn1cblxuLyoqXG4gKiBBbiB1bm1vZGlmaWFibGUgbGlzdCBvZiBpdGVtcyB0aGF0IEFuZ3VsYXIga2VlcHMgdXAgdG8gZGF0ZSB3aGVuIHRoZSBzdGF0ZVxuICogb2YgdGhlIGFwcGxpY2F0aW9uIGNoYW5nZXMuXG4gKlxuICogVGhlIHR5cGUgb2Ygb2JqZWN0IHRoYXQge0BsaW5rIFZpZXdDaGlsZHJlbn0sIHtAbGluayBDb250ZW50Q2hpbGRyZW59LCBhbmQge0BsaW5rIFF1ZXJ5TGlzdH1cbiAqIHByb3ZpZGUuXG4gKlxuICogSW1wbGVtZW50cyBhbiBpdGVyYWJsZSBpbnRlcmZhY2UsIHRoZXJlZm9yZSBpdCBjYW4gYmUgdXNlZCBpbiBib3RoIEVTNlxuICogamF2YXNjcmlwdCBgZm9yICh2YXIgaSBvZiBpdGVtcylgIGxvb3BzIGFzIHdlbGwgYXMgaW4gQW5ndWxhciB0ZW1wbGF0ZXMgd2l0aFxuICogYCpuZ0Zvcj1cImxldCBpIG9mIG15TGlzdFwiYC5cbiAqXG4gKiBDaGFuZ2VzIGNhbiBiZSBvYnNlcnZlZCBieSBzdWJzY3JpYmluZyB0byB0aGUgY2hhbmdlcyBgT2JzZXJ2YWJsZWAuXG4gKlxuICogTk9URTogSW4gdGhlIGZ1dHVyZSB0aGlzIGNsYXNzIHdpbGwgaW1wbGVtZW50IGFuIGBPYnNlcnZhYmxlYCBpbnRlcmZhY2UuXG4gKlxuICogQHVzYWdlTm90ZXNcbiAqICMjIyBFeGFtcGxlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBAQ29tcG9uZW50KHsuLi59KVxuICogY2xhc3MgQ29udGFpbmVyIHtcbiAqICAgQFZpZXdDaGlsZHJlbihJdGVtKSBpdGVtczpRdWVyeUxpc3Q8SXRlbT47XG4gKiB9XG4gKiBgYGBcbiAqXG4gKiBAcHVibGljQXBpXG4gKi9cbmV4cG9ydCBjbGFzcyBRdWVyeUxpc3Q8VD4gaW1wbGVtZW50cyBJdGVyYWJsZTxUPiB7XG4gIHB1YmxpYyByZWFkb25seSBkaXJ0eSA9IHRydWU7XG4gIHByaXZhdGUgX3Jlc3VsdHM6IEFycmF5PFQ+ID0gW107XG4gIHB1YmxpYyByZWFkb25seSBjaGFuZ2VzOiBPYnNlcnZhYmxlPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgcmVhZG9ubHkgbGVuZ3RoOiBudW1iZXIgPSAwO1xuICAvLyBUT0RPKGlzc3VlLzI0NTcxKTogcmVtb3ZlICchJy5cbiAgcmVhZG9ubHkgZmlyc3QhOiBUO1xuICAvLyBUT0RPKGlzc3VlLzI0NTcxKTogcmVtb3ZlICchJy5cbiAgcmVhZG9ubHkgbGFzdCE6IFQ7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgLy8gVGhpcyBmdW5jdGlvbiBzaG91bGQgYmUgZGVjbGFyZWQgb24gdGhlIHByb3RvdHlwZSwgYnV0IGRvaW5nIHNvIHRoZXJlIHdpbGwgY2F1c2UgdGhlIGNsYXNzXG4gICAgLy8gZGVjbGFyYXRpb24gdG8gaGF2ZSBzaWRlLWVmZmVjdHMgYW5kIGJlY29tZSBub3QgdHJlZS1zaGFrYWJsZS4gRm9yIHRoaXMgcmVhc29uIHdlIGRvIGl0IGluXG4gICAgLy8gdGhlIGNvbnN0cnVjdG9yLlxuICAgIC8vIFtnZXRTeW1ib2xJdGVyYXRvcigpXSgpOiBJdGVyYXRvcjxUPiB7IC4uLiB9XG4gICAgY29uc3Qgc3ltYm9sID0gZ2V0U3ltYm9sSXRlcmF0b3IoKTtcbiAgICBjb25zdCBwcm90byA9IFF1ZXJ5TGlzdC5wcm90b3R5cGUgYXMgYW55O1xuICAgIGlmICghcHJvdG9bc3ltYm9sXSkgcHJvdG9bc3ltYm9sXSA9IHN5bWJvbEl0ZXJhdG9yO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlZVxuICAgKiBbQXJyYXkubWFwXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9BcnJheS9tYXApXG4gICAqL1xuICBtYXA8VT4oZm46IChpdGVtOiBULCBpbmRleDogbnVtYmVyLCBhcnJheTogVFtdKSA9PiBVKTogVVtdIHtcbiAgICByZXR1cm4gdGhpcy5fcmVzdWx0cy5tYXAoZm4pO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlZVxuICAgKiBbQXJyYXkuZmlsdGVyXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9BcnJheS9maWx0ZXIpXG4gICAqL1xuICBmaWx0ZXIoZm46IChpdGVtOiBULCBpbmRleDogbnVtYmVyLCBhcnJheTogVFtdKSA9PiBib29sZWFuKTogVFtdIHtcbiAgICByZXR1cm4gdGhpcy5fcmVzdWx0cy5maWx0ZXIoZm4pO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlZVxuICAgKiBbQXJyYXkuZmluZF0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvQXJyYXkvZmluZClcbiAgICovXG4gIGZpbmQoZm46IChpdGVtOiBULCBpbmRleDogbnVtYmVyLCBhcnJheTogVFtdKSA9PiBib29sZWFuKTogVHx1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9yZXN1bHRzLmZpbmQoZm4pO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlZVxuICAgKiBbQXJyYXkucmVkdWNlXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9BcnJheS9yZWR1Y2UpXG4gICAqL1xuICByZWR1Y2U8VT4oZm46IChwcmV2VmFsdWU6IFUsIGN1clZhbHVlOiBULCBjdXJJbmRleDogbnVtYmVyLCBhcnJheTogVFtdKSA9PiBVLCBpbml0OiBVKTogVSB7XG4gICAgcmV0dXJuIHRoaXMuX3Jlc3VsdHMucmVkdWNlKGZuLCBpbml0KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZWVcbiAgICogW0FycmF5LmZvckVhY2hdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL0FycmF5L2ZvckVhY2gpXG4gICAqL1xuICBmb3JFYWNoKGZuOiAoaXRlbTogVCwgaW5kZXg6IG51bWJlciwgYXJyYXk6IFRbXSkgPT4gdm9pZCk6IHZvaWQge1xuICAgIHRoaXMuX3Jlc3VsdHMuZm9yRWFjaChmbik7XG4gIH1cblxuICAvKipcbiAgICogU2VlXG4gICAqIFtBcnJheS5zb21lXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9BcnJheS9zb21lKVxuICAgKi9cbiAgc29tZShmbjogKHZhbHVlOiBULCBpbmRleDogbnVtYmVyLCBhcnJheTogVFtdKSA9PiBib29sZWFuKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3Jlc3VsdHMuc29tZShmbik7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIGNvcHkgb2YgdGhlIGludGVybmFsIHJlc3VsdHMgbGlzdCBhcyBhbiBBcnJheS5cbiAgICovXG4gIHRvQXJyYXkoKTogVFtdIHtcbiAgICByZXR1cm4gdGhpcy5fcmVzdWx0cy5zbGljZSgpO1xuICB9XG5cbiAgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fcmVzdWx0cy50b1N0cmluZygpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZXMgdGhlIHN0b3JlZCBkYXRhIG9mIHRoZSBxdWVyeSBsaXN0LCBhbmQgcmVzZXRzIHRoZSBgZGlydHlgIGZsYWcgdG8gYGZhbHNlYCwgc28gdGhhdFxuICAgKiBvbiBjaGFuZ2UgZGV0ZWN0aW9uLCBpdCB3aWxsIG5vdCBub3RpZnkgb2YgY2hhbmdlcyB0byB0aGUgcXVlcmllcywgdW5sZXNzIGEgbmV3IGNoYW5nZVxuICAgKiBvY2N1cnMuXG4gICAqXG4gICAqIEBwYXJhbSByZXN1bHRzVHJlZSBUaGUgcXVlcnkgcmVzdWx0cyB0byBzdG9yZVxuICAgKi9cbiAgcmVzZXQocmVzdWx0c1RyZWU6IEFycmF5PFR8YW55W10+KTogdm9pZCB7XG4gICAgdGhpcy5fcmVzdWx0cyA9IGZsYXR0ZW4ocmVzdWx0c1RyZWUpO1xuICAgICh0aGlzIGFzIHtkaXJ0eTogYm9vbGVhbn0pLmRpcnR5ID0gZmFsc2U7XG4gICAgKHRoaXMgYXMge2xlbmd0aDogbnVtYmVyfSkubGVuZ3RoID0gdGhpcy5fcmVzdWx0cy5sZW5ndGg7XG4gICAgKHRoaXMgYXMge2xhc3Q6IFR9KS5sYXN0ID0gdGhpcy5fcmVzdWx0c1t0aGlzLmxlbmd0aCAtIDFdO1xuICAgICh0aGlzIGFzIHtmaXJzdDogVH0pLmZpcnN0ID0gdGhpcy5fcmVzdWx0c1swXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUcmlnZ2VycyBhIGNoYW5nZSBldmVudCBieSBlbWl0dGluZyBvbiB0aGUgYGNoYW5nZXNgIHtAbGluayBFdmVudEVtaXR0ZXJ9LlxuICAgKi9cbiAgbm90aWZ5T25DaGFuZ2VzKCk6IHZvaWQge1xuICAgICh0aGlzLmNoYW5nZXMgYXMgRXZlbnRFbWl0dGVyPGFueT4pLmVtaXQodGhpcyk7XG4gIH1cblxuICAvKiogaW50ZXJuYWwgKi9cbiAgc2V0RGlydHkoKSB7XG4gICAgKHRoaXMgYXMge2RpcnR5OiBib29sZWFufSkuZGlydHkgPSB0cnVlO1xuICB9XG5cbiAgLyoqIGludGVybmFsICovXG4gIGRlc3Ryb3koKTogdm9pZCB7XG4gICAgKHRoaXMuY2hhbmdlcyBhcyBFdmVudEVtaXR0ZXI8YW55PikuY29tcGxldGUoKTtcbiAgICAodGhpcy5jaGFuZ2VzIGFzIEV2ZW50RW1pdHRlcjxhbnk+KS51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgLy8gVGhlIGltcGxlbWVudGF0aW9uIG9mIGBTeW1ib2wuaXRlcmF0b3JgIHNob3VsZCBiZSBkZWNsYXJlZCBoZXJlLCBidXQgdGhpcyB3b3VsZCBjYXVzZVxuICAvLyB0cmVlLXNoYWtpbmcgaXNzdWVzIHdpdGggYFF1ZXJ5TGlzdC4gU28gaW5zdGVhZCwgaXQncyBhZGRlZCBpbiB0aGUgY29uc3RydWN0b3IgKHNlZSBjb21tZW50c1xuICAvLyB0aGVyZSkgYW5kIHRoaXMgZGVjbGFyYXRpb24gaXMgbGVmdCBoZXJlIHRvIGVuc3VyZSB0aGF0IFR5cGVTY3JpcHQgY29uc2lkZXJzIFF1ZXJ5TGlzdCB0b1xuICAvLyBpbXBsZW1lbnQgdGhlIEl0ZXJhYmxlIGludGVyZmFjZS4gVGhpcyBpcyByZXF1aXJlZCBmb3IgdGVtcGxhdGUgdHlwZS1jaGVja2luZyBvZiBOZ0ZvciBsb29wc1xuICAvLyBvdmVyIFF1ZXJ5TGlzdHMgdG8gd29yayBjb3JyZWN0bHksIHNpbmNlIFF1ZXJ5TGlzdCBtdXN0IGJlIGFzc2lnbmFibGUgdG8gTmdJdGVyYWJsZS5cbiAgW1N5bWJvbC5pdGVyYXRvcl0hOiAoKSA9PiBJdGVyYXRvcjxUPjtcbn1cbiJdfQ==
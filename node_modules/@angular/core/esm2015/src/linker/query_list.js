/**
 * @fileoverview added by tsickle
 * Generated from: packages/core/src/linker/query_list.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
/**
 * @template T
 * @this {?}
 * @return {?}
 */
function symbolIterator() {
    return ((/** @type {?} */ (((/** @type {?} */ ((/** @type {?} */ (this)))))._results)))[getSymbolIterator()]();
}
/**
 * An unmodifiable list of items that Angular keeps up to date when the state
 * of the application changes.
 *
 * The type of object that {\@link ViewChildren}, {\@link ContentChildren}, and {\@link QueryList}
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
 * \@usageNotes
 * ### Example
 * ```typescript
 * \@Component({...})
 * class Container {
 * \@ViewChildren(Item) items:QueryList<Item>;
 * }
 * ```
 *
 * \@publicApi
 * @template T
 */
export class QueryList {
    constructor() {
        this.dirty = true;
        this._results = [];
        this.changes = new EventEmitter();
        this.length = 0;
        // This function should be declared on the prototype, but doing so there will cause the class
        // declaration to have side-effects and become not tree-shakable. For this reason we do it in
        // the constructor.
        // [getSymbolIterator()](): Iterator<T> { ... }
        /** @type {?} */
        const symbol = getSymbolIterator();
        /** @type {?} */
        const proto = (/** @type {?} */ (QueryList.prototype));
        if (!proto[symbol])
            proto[symbol] = symbolIterator;
    }
    /**
     * See
     * [Array.map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
     * @template U
     * @param {?} fn
     * @return {?}
     */
    map(fn) {
        return this._results.map(fn);
    }
    /**
     * See
     * [Array.filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
     * @param {?} fn
     * @return {?}
     */
    filter(fn) {
        return this._results.filter(fn);
    }
    /**
     * See
     * [Array.find](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)
     * @param {?} fn
     * @return {?}
     */
    find(fn) {
        return this._results.find(fn);
    }
    /**
     * See
     * [Array.reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
     * @template U
     * @param {?} fn
     * @param {?} init
     * @return {?}
     */
    reduce(fn, init) {
        return this._results.reduce(fn, init);
    }
    /**
     * See
     * [Array.forEach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
     * @param {?} fn
     * @return {?}
     */
    forEach(fn) {
        this._results.forEach(fn);
    }
    /**
     * See
     * [Array.some](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some)
     * @param {?} fn
     * @return {?}
     */
    some(fn) {
        return this._results.some(fn);
    }
    /**
     * Returns a copy of the internal results list as an Array.
     * @return {?}
     */
    toArray() {
        return this._results.slice();
    }
    /**
     * @return {?}
     */
    toString() {
        return this._results.toString();
    }
    /**
     * Updates the stored data of the query list, and resets the `dirty` flag to `false`, so that
     * on change detection, it will not notify of changes to the queries, unless a new change
     * occurs.
     *
     * @param {?} resultsTree The query results to store
     * @return {?}
     */
    reset(resultsTree) {
        this._results = flatten(resultsTree);
        ((/** @type {?} */ (this))).dirty = false;
        ((/** @type {?} */ (this))).length = this._results.length;
        ((/** @type {?} */ (this))).last = this._results[this.length - 1];
        ((/** @type {?} */ (this))).first = this._results[0];
    }
    /**
     * Triggers a change event by emitting on the `changes` {\@link EventEmitter}.
     * @return {?}
     */
    notifyOnChanges() {
        ((/** @type {?} */ (this.changes))).emit(this);
    }
    /**
     * internal
     * @return {?}
     */
    setDirty() {
        ((/** @type {?} */ (this))).dirty = true;
    }
    /**
     * internal
     * @return {?}
     */
    destroy() {
        ((/** @type {?} */ (this.changes))).complete();
        ((/** @type {?} */ (this.changes))).unsubscribe();
    }
}
if (false) {
    /** @type {?} */
    QueryList.prototype.dirty;
    /**
     * @type {?}
     * @private
     */
    QueryList.prototype._results;
    /** @type {?} */
    QueryList.prototype.changes;
    /** @type {?} */
    QueryList.prototype.length;
    /** @type {?} */
    QueryList.prototype.first;
    /** @type {?} */
    QueryList.prototype.last;
    /* Skipping unnamed member:
    [Symbol.iterator]!: () => Iterator<T>;*/
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlcnlfbGlzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvcmUvc3JjL2xpbmtlci9xdWVyeV9saXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVVBLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQztBQUM5QyxPQUFPLEVBQUMsT0FBTyxFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFDNUMsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sZ0JBQWdCLENBQUM7Ozs7OztBQUVqRCxTQUFTLGNBQWM7SUFDckIsT0FBTyxDQUFDLG1CQUFBLENBQUMsbUJBQUEsbUJBQUEsSUFBSSxFQUFPLEVBQXdCLENBQUMsQ0FBQyxRQUFRLEVBQU8sQ0FBQyxDQUFDLGlCQUFpQixFQUFFLENBQUMsRUFBRSxDQUFDO0FBQ3hGLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE0QkQsTUFBTSxPQUFPLFNBQVM7SUFXcEI7UUFWZ0IsVUFBSyxHQUFHLElBQUksQ0FBQztRQUNyQixhQUFRLEdBQWEsRUFBRSxDQUFDO1FBQ2hCLFlBQU8sR0FBb0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUVyRCxXQUFNLEdBQVcsQ0FBQyxDQUFDOzs7Ozs7Y0FXcEIsTUFBTSxHQUFHLGlCQUFpQixFQUFFOztjQUM1QixLQUFLLEdBQUcsbUJBQUEsU0FBUyxDQUFDLFNBQVMsRUFBTztRQUN4QyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQztZQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxjQUFjLENBQUM7SUFDckQsQ0FBQzs7Ozs7Ozs7SUFNRCxHQUFHLENBQUksRUFBNkM7UUFDbEQsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUMvQixDQUFDOzs7Ozs7O0lBTUQsTUFBTSxDQUFDLEVBQW1EO1FBQ3hELE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDbEMsQ0FBQzs7Ozs7OztJQU1ELElBQUksQ0FBQyxFQUFtRDtRQUN0RCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7Ozs7Ozs7OztJQU1ELE1BQU0sQ0FBSSxFQUFrRSxFQUFFLElBQU87UUFDbkYsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDeEMsQ0FBQzs7Ozs7OztJQU1ELE9BQU8sQ0FBQyxFQUFnRDtRQUN0RCxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUM1QixDQUFDOzs7Ozs7O0lBTUQsSUFBSSxDQUFDLEVBQW9EO1FBQ3ZELE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDaEMsQ0FBQzs7Ozs7SUFLRCxPQUFPO1FBQ0wsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQy9CLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ04sT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ2xDLENBQUM7Ozs7Ozs7OztJQVNELEtBQUssQ0FBQyxXQUEyQjtRQUMvQixJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNyQyxDQUFDLG1CQUFBLElBQUksRUFBb0IsQ0FBQyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDekMsQ0FBQyxtQkFBQSxJQUFJLEVBQW9CLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7UUFDekQsQ0FBQyxtQkFBQSxJQUFJLEVBQWEsQ0FBQyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDMUQsQ0FBQyxtQkFBQSxJQUFJLEVBQWMsQ0FBQyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2hELENBQUM7Ozs7O0lBS0QsZUFBZTtRQUNiLENBQUMsbUJBQUEsSUFBSSxDQUFDLE9BQU8sRUFBcUIsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNqRCxDQUFDOzs7OztJQUdELFFBQVE7UUFDTixDQUFDLG1CQUFBLElBQUksRUFBb0IsQ0FBQyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7SUFDMUMsQ0FBQzs7Ozs7SUFHRCxPQUFPO1FBQ0wsQ0FBQyxtQkFBQSxJQUFJLENBQUMsT0FBTyxFQUFxQixDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDL0MsQ0FBQyxtQkFBQSxJQUFJLENBQUMsT0FBTyxFQUFxQixDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDcEQsQ0FBQztDQVFGOzs7SUF0SEMsMEJBQTZCOzs7OztJQUM3Qiw2QkFBZ0M7O0lBQ2hDLDRCQUE4RDs7SUFFOUQsMkJBQTRCOztJQUU1QiwwQkFBbUI7O0lBRW5CLHlCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHtFdmVudEVtaXR0ZXJ9IGZyb20gJy4uL2V2ZW50X2VtaXR0ZXInO1xuaW1wb3J0IHtmbGF0dGVufSBmcm9tICcuLi91dGlsL2FycmF5X3V0aWxzJztcbmltcG9ydCB7Z2V0U3ltYm9sSXRlcmF0b3J9IGZyb20gJy4uL3V0aWwvc3ltYm9sJztcblxuZnVuY3Rpb24gc3ltYm9sSXRlcmF0b3I8VD4odGhpczogUXVlcnlMaXN0PFQ+KTogSXRlcmF0b3I8VD4ge1xuICByZXR1cm4gKCh0aGlzIGFzIGFueSBhcyB7X3Jlc3VsdHM6IEFycmF5PFQ+fSkuX3Jlc3VsdHMgYXMgYW55KVtnZXRTeW1ib2xJdGVyYXRvcigpXSgpO1xufVxuXG4vKipcbiAqIEFuIHVubW9kaWZpYWJsZSBsaXN0IG9mIGl0ZW1zIHRoYXQgQW5ndWxhciBrZWVwcyB1cCB0byBkYXRlIHdoZW4gdGhlIHN0YXRlXG4gKiBvZiB0aGUgYXBwbGljYXRpb24gY2hhbmdlcy5cbiAqXG4gKiBUaGUgdHlwZSBvZiBvYmplY3QgdGhhdCB7QGxpbmsgVmlld0NoaWxkcmVufSwge0BsaW5rIENvbnRlbnRDaGlsZHJlbn0sIGFuZCB7QGxpbmsgUXVlcnlMaXN0fVxuICogcHJvdmlkZS5cbiAqXG4gKiBJbXBsZW1lbnRzIGFuIGl0ZXJhYmxlIGludGVyZmFjZSwgdGhlcmVmb3JlIGl0IGNhbiBiZSB1c2VkIGluIGJvdGggRVM2XG4gKiBqYXZhc2NyaXB0IGBmb3IgKHZhciBpIG9mIGl0ZW1zKWAgbG9vcHMgYXMgd2VsbCBhcyBpbiBBbmd1bGFyIHRlbXBsYXRlcyB3aXRoXG4gKiBgKm5nRm9yPVwibGV0IGkgb2YgbXlMaXN0XCJgLlxuICpcbiAqIENoYW5nZXMgY2FuIGJlIG9ic2VydmVkIGJ5IHN1YnNjcmliaW5nIHRvIHRoZSBjaGFuZ2VzIGBPYnNlcnZhYmxlYC5cbiAqXG4gKiBOT1RFOiBJbiB0aGUgZnV0dXJlIHRoaXMgY2xhc3Mgd2lsbCBpbXBsZW1lbnQgYW4gYE9ic2VydmFibGVgIGludGVyZmFjZS5cbiAqXG4gKiBAdXNhZ2VOb3Rlc1xuICogIyMjIEV4YW1wbGVcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIEBDb21wb25lbnQoey4uLn0pXG4gKiBjbGFzcyBDb250YWluZXIge1xuICogICBAVmlld0NoaWxkcmVuKEl0ZW0pIGl0ZW1zOlF1ZXJ5TGlzdDxJdGVtPjtcbiAqIH1cbiAqIGBgYFxuICpcbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IGNsYXNzIFF1ZXJ5TGlzdDxUPiBpbXBsZW1lbnRzIEl0ZXJhYmxlPFQ+IHtcbiAgcHVibGljIHJlYWRvbmx5IGRpcnR5ID0gdHJ1ZTtcbiAgcHJpdmF0ZSBfcmVzdWx0czogQXJyYXk8VD4gPSBbXTtcbiAgcHVibGljIHJlYWRvbmx5IGNoYW5nZXM6IE9ic2VydmFibGU8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICByZWFkb25seSBsZW5ndGg6IG51bWJlciA9IDA7XG4gIC8vIFRPRE8oaXNzdWUvMjQ1NzEpOiByZW1vdmUgJyEnLlxuICByZWFkb25seSBmaXJzdCE6IFQ7XG4gIC8vIFRPRE8oaXNzdWUvMjQ1NzEpOiByZW1vdmUgJyEnLlxuICByZWFkb25seSBsYXN0ITogVDtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAvLyBUaGlzIGZ1bmN0aW9uIHNob3VsZCBiZSBkZWNsYXJlZCBvbiB0aGUgcHJvdG90eXBlLCBidXQgZG9pbmcgc28gdGhlcmUgd2lsbCBjYXVzZSB0aGUgY2xhc3NcbiAgICAvLyBkZWNsYXJhdGlvbiB0byBoYXZlIHNpZGUtZWZmZWN0cyBhbmQgYmVjb21lIG5vdCB0cmVlLXNoYWthYmxlLiBGb3IgdGhpcyByZWFzb24gd2UgZG8gaXQgaW5cbiAgICAvLyB0aGUgY29uc3RydWN0b3IuXG4gICAgLy8gW2dldFN5bWJvbEl0ZXJhdG9yKCldKCk6IEl0ZXJhdG9yPFQ+IHsgLi4uIH1cbiAgICBjb25zdCBzeW1ib2wgPSBnZXRTeW1ib2xJdGVyYXRvcigpO1xuICAgIGNvbnN0IHByb3RvID0gUXVlcnlMaXN0LnByb3RvdHlwZSBhcyBhbnk7XG4gICAgaWYgKCFwcm90b1tzeW1ib2xdKSBwcm90b1tzeW1ib2xdID0gc3ltYm9sSXRlcmF0b3I7XG4gIH1cblxuICAvKipcbiAgICogU2VlXG4gICAqIFtBcnJheS5tYXBdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL0FycmF5L21hcClcbiAgICovXG4gIG1hcDxVPihmbjogKGl0ZW06IFQsIGluZGV4OiBudW1iZXIsIGFycmF5OiBUW10pID0+IFUpOiBVW10ge1xuICAgIHJldHVybiB0aGlzLl9yZXN1bHRzLm1hcChmbik7XG4gIH1cblxuICAvKipcbiAgICogU2VlXG4gICAqIFtBcnJheS5maWx0ZXJdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL0FycmF5L2ZpbHRlcilcbiAgICovXG4gIGZpbHRlcihmbjogKGl0ZW06IFQsIGluZGV4OiBudW1iZXIsIGFycmF5OiBUW10pID0+IGJvb2xlYW4pOiBUW10ge1xuICAgIHJldHVybiB0aGlzLl9yZXN1bHRzLmZpbHRlcihmbik7XG4gIH1cblxuICAvKipcbiAgICogU2VlXG4gICAqIFtBcnJheS5maW5kXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9BcnJheS9maW5kKVxuICAgKi9cbiAgZmluZChmbjogKGl0ZW06IFQsIGluZGV4OiBudW1iZXIsIGFycmF5OiBUW10pID0+IGJvb2xlYW4pOiBUfHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3Jlc3VsdHMuZmluZChmbik7XG4gIH1cblxuICAvKipcbiAgICogU2VlXG4gICAqIFtBcnJheS5yZWR1Y2VdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL0FycmF5L3JlZHVjZSlcbiAgICovXG4gIHJlZHVjZTxVPihmbjogKHByZXZWYWx1ZTogVSwgY3VyVmFsdWU6IFQsIGN1ckluZGV4OiBudW1iZXIsIGFycmF5OiBUW10pID0+IFUsIGluaXQ6IFUpOiBVIHtcbiAgICByZXR1cm4gdGhpcy5fcmVzdWx0cy5yZWR1Y2UoZm4sIGluaXQpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlZVxuICAgKiBbQXJyYXkuZm9yRWFjaF0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvQXJyYXkvZm9yRWFjaClcbiAgICovXG4gIGZvckVhY2goZm46IChpdGVtOiBULCBpbmRleDogbnVtYmVyLCBhcnJheTogVFtdKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy5fcmVzdWx0cy5mb3JFYWNoKGZuKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZWVcbiAgICogW0FycmF5LnNvbWVdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL0FycmF5L3NvbWUpXG4gICAqL1xuICBzb21lKGZuOiAodmFsdWU6IFQsIGluZGV4OiBudW1iZXIsIGFycmF5OiBUW10pID0+IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fcmVzdWx0cy5zb21lKGZuKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgY29weSBvZiB0aGUgaW50ZXJuYWwgcmVzdWx0cyBsaXN0IGFzIGFuIEFycmF5LlxuICAgKi9cbiAgdG9BcnJheSgpOiBUW10ge1xuICAgIHJldHVybiB0aGlzLl9yZXN1bHRzLnNsaWNlKCk7XG4gIH1cblxuICB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9yZXN1bHRzLnRvU3RyaW5nKCk7XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlcyB0aGUgc3RvcmVkIGRhdGEgb2YgdGhlIHF1ZXJ5IGxpc3QsIGFuZCByZXNldHMgdGhlIGBkaXJ0eWAgZmxhZyB0byBgZmFsc2VgLCBzbyB0aGF0XG4gICAqIG9uIGNoYW5nZSBkZXRlY3Rpb24sIGl0IHdpbGwgbm90IG5vdGlmeSBvZiBjaGFuZ2VzIHRvIHRoZSBxdWVyaWVzLCB1bmxlc3MgYSBuZXcgY2hhbmdlXG4gICAqIG9jY3Vycy5cbiAgICpcbiAgICogQHBhcmFtIHJlc3VsdHNUcmVlIFRoZSBxdWVyeSByZXN1bHRzIHRvIHN0b3JlXG4gICAqL1xuICByZXNldChyZXN1bHRzVHJlZTogQXJyYXk8VHxhbnlbXT4pOiB2b2lkIHtcbiAgICB0aGlzLl9yZXN1bHRzID0gZmxhdHRlbihyZXN1bHRzVHJlZSk7XG4gICAgKHRoaXMgYXMge2RpcnR5OiBib29sZWFufSkuZGlydHkgPSBmYWxzZTtcbiAgICAodGhpcyBhcyB7bGVuZ3RoOiBudW1iZXJ9KS5sZW5ndGggPSB0aGlzLl9yZXN1bHRzLmxlbmd0aDtcbiAgICAodGhpcyBhcyB7bGFzdDogVH0pLmxhc3QgPSB0aGlzLl9yZXN1bHRzW3RoaXMubGVuZ3RoIC0gMV07XG4gICAgKHRoaXMgYXMge2ZpcnN0OiBUfSkuZmlyc3QgPSB0aGlzLl9yZXN1bHRzWzBdO1xuICB9XG5cbiAgLyoqXG4gICAqIFRyaWdnZXJzIGEgY2hhbmdlIGV2ZW50IGJ5IGVtaXR0aW5nIG9uIHRoZSBgY2hhbmdlc2Age0BsaW5rIEV2ZW50RW1pdHRlcn0uXG4gICAqL1xuICBub3RpZnlPbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgKHRoaXMuY2hhbmdlcyBhcyBFdmVudEVtaXR0ZXI8YW55PikuZW1pdCh0aGlzKTtcbiAgfVxuXG4gIC8qKiBpbnRlcm5hbCAqL1xuICBzZXREaXJ0eSgpIHtcbiAgICAodGhpcyBhcyB7ZGlydHk6IGJvb2xlYW59KS5kaXJ0eSA9IHRydWU7XG4gIH1cblxuICAvKiogaW50ZXJuYWwgKi9cbiAgZGVzdHJveSgpOiB2b2lkIHtcbiAgICAodGhpcy5jaGFuZ2VzIGFzIEV2ZW50RW1pdHRlcjxhbnk+KS5jb21wbGV0ZSgpO1xuICAgICh0aGlzLmNoYW5nZXMgYXMgRXZlbnRFbWl0dGVyPGFueT4pLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICAvLyBUaGUgaW1wbGVtZW50YXRpb24gb2YgYFN5bWJvbC5pdGVyYXRvcmAgc2hvdWxkIGJlIGRlY2xhcmVkIGhlcmUsIGJ1dCB0aGlzIHdvdWxkIGNhdXNlXG4gIC8vIHRyZWUtc2hha2luZyBpc3N1ZXMgd2l0aCBgUXVlcnlMaXN0LiBTbyBpbnN0ZWFkLCBpdCdzIGFkZGVkIGluIHRoZSBjb25zdHJ1Y3RvciAoc2VlIGNvbW1lbnRzXG4gIC8vIHRoZXJlKSBhbmQgdGhpcyBkZWNsYXJhdGlvbiBpcyBsZWZ0IGhlcmUgdG8gZW5zdXJlIHRoYXQgVHlwZVNjcmlwdCBjb25zaWRlcnMgUXVlcnlMaXN0IHRvXG4gIC8vIGltcGxlbWVudCB0aGUgSXRlcmFibGUgaW50ZXJmYWNlLiBUaGlzIGlzIHJlcXVpcmVkIGZvciB0ZW1wbGF0ZSB0eXBlLWNoZWNraW5nIG9mIE5nRm9yIGxvb3BzXG4gIC8vIG92ZXIgUXVlcnlMaXN0cyB0byB3b3JrIGNvcnJlY3RseSwgc2luY2UgUXVlcnlMaXN0IG11c3QgYmUgYXNzaWduYWJsZSB0byBOZ0l0ZXJhYmxlLlxuICBbU3ltYm9sLml0ZXJhdG9yXSE6ICgpID0+IEl0ZXJhdG9yPFQ+O1xufVxuIl19
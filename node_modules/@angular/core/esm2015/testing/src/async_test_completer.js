/**
 * @fileoverview added by tsickle
 * Generated from: packages/core/testing/src/async_test_completer.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Injectable completer that allows signaling completion of an asynchronous test. Used internally.
 */
export class AsyncTestCompleter {
    constructor() {
        this._promise = new Promise((/**
         * @param {?} res
         * @param {?} rej
         * @return {?}
         */
        (res, rej) => {
            this._resolve = res;
            this._reject = rej;
        }));
    }
    /**
     * @param {?=} value
     * @return {?}
     */
    done(value) {
        this._resolve(value);
    }
    /**
     * @param {?=} error
     * @param {?=} stackTrace
     * @return {?}
     */
    fail(error, stackTrace) {
        this._reject(error);
    }
    /**
     * @return {?}
     */
    get promise() {
        return this._promise;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    AsyncTestCompleter.prototype._resolve;
    /**
     * @type {?}
     * @private
     */
    AsyncTestCompleter.prototype._reject;
    /**
     * @type {?}
     * @private
     */
    AsyncTestCompleter.prototype._promise;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXN5bmNfdGVzdF9jb21wbGV0ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb3JlL3Rlc3Rpbmcvc3JjL2FzeW5jX3Rlc3RfY29tcGxldGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQVdBLE1BQU0sT0FBTyxrQkFBa0I7SUFBL0I7UUFLVSxhQUFRLEdBQWlCLElBQUksT0FBTzs7Ozs7UUFBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRTtZQUN4RCxJQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQztZQUNwQixJQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztRQUNyQixDQUFDLEVBQUMsQ0FBQztJQVlMLENBQUM7Ozs7O0lBWEMsSUFBSSxDQUFDLEtBQVc7UUFDZCxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7Ozs7OztJQUVELElBQUksQ0FBQyxLQUFXLEVBQUUsVUFBbUI7UUFDbkMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN0QixDQUFDOzs7O0lBRUQsSUFBSSxPQUFPO1FBQ1QsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3ZCLENBQUM7Q0FDRjs7Ozs7O0lBbEJDLHNDQUF5Qzs7Ozs7SUFFekMscUNBQXFDOzs7OztJQUNyQyxzQ0FHRyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuLyoqXG4gKiBJbmplY3RhYmxlIGNvbXBsZXRlciB0aGF0IGFsbG93cyBzaWduYWxpbmcgY29tcGxldGlvbiBvZiBhbiBhc3luY2hyb25vdXMgdGVzdC4gVXNlZCBpbnRlcm5hbGx5LlxuICovXG5leHBvcnQgY2xhc3MgQXN5bmNUZXN0Q29tcGxldGVyIHtcbiAgLy8gVE9ETyhpc3N1ZS8yNDU3MSk6IHJlbW92ZSAnIScuXG4gIHByaXZhdGUgX3Jlc29sdmUhOiAocmVzdWx0OiBhbnkpID0+IHZvaWQ7XG4gIC8vIFRPRE8oaXNzdWUvMjQ1NzEpOiByZW1vdmUgJyEnLlxuICBwcml2YXRlIF9yZWplY3QhOiAoZXJyOiBhbnkpID0+IHZvaWQ7XG4gIHByaXZhdGUgX3Byb21pc2U6IFByb21pc2U8YW55PiA9IG5ldyBQcm9taXNlKChyZXMsIHJlaikgPT4ge1xuICAgIHRoaXMuX3Jlc29sdmUgPSByZXM7XG4gICAgdGhpcy5fcmVqZWN0ID0gcmVqO1xuICB9KTtcbiAgZG9uZSh2YWx1ZT86IGFueSkge1xuICAgIHRoaXMuX3Jlc29sdmUodmFsdWUpO1xuICB9XG5cbiAgZmFpbChlcnJvcj86IGFueSwgc3RhY2tUcmFjZT86IHN0cmluZykge1xuICAgIHRoaXMuX3JlamVjdChlcnJvcik7XG4gIH1cblxuICBnZXQgcHJvbWlzZSgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLl9wcm9taXNlO1xuICB9XG59XG4iXX0=
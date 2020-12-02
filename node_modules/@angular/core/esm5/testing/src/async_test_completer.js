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
var AsyncTestCompleter = /** @class */ (function () {
    function AsyncTestCompleter() {
        var _this = this;
        this._promise = new Promise(function (res, rej) {
            _this._resolve = res;
            _this._reject = rej;
        });
    }
    AsyncTestCompleter.prototype.done = function (value) {
        this._resolve(value);
    };
    AsyncTestCompleter.prototype.fail = function (error, stackTrace) {
        this._reject(error);
    };
    Object.defineProperty(AsyncTestCompleter.prototype, "promise", {
        get: function () {
            return this._promise;
        },
        enumerable: true,
        configurable: true
    });
    return AsyncTestCompleter;
}());
export { AsyncTestCompleter };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXN5bmNfdGVzdF9jb21wbGV0ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb3JlL3Rlc3Rpbmcvc3JjL2FzeW5jX3Rlc3RfY29tcGxldGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUVIOztHQUVHO0FBQ0g7SUFBQTtRQUFBLGlCQW9CQztRQWZTLGFBQVEsR0FBaUIsSUFBSSxPQUFPLENBQUMsVUFBQyxHQUFHLEVBQUUsR0FBRztZQUNwRCxLQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQztZQUNwQixLQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztRQUNyQixDQUFDLENBQUMsQ0FBQztJQVlMLENBQUM7SUFYQyxpQ0FBSSxHQUFKLFVBQUssS0FBVztRQUNkLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdkIsQ0FBQztJQUVELGlDQUFJLEdBQUosVUFBSyxLQUFXLEVBQUUsVUFBbUI7UUFDbkMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN0QixDQUFDO0lBRUQsc0JBQUksdUNBQU87YUFBWDtZQUNFLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUN2QixDQUFDOzs7T0FBQTtJQUNILHlCQUFDO0FBQUQsQ0FBQyxBQXBCRCxJQW9CQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuLyoqXG4gKiBJbmplY3RhYmxlIGNvbXBsZXRlciB0aGF0IGFsbG93cyBzaWduYWxpbmcgY29tcGxldGlvbiBvZiBhbiBhc3luY2hyb25vdXMgdGVzdC4gVXNlZCBpbnRlcm5hbGx5LlxuICovXG5leHBvcnQgY2xhc3MgQXN5bmNUZXN0Q29tcGxldGVyIHtcbiAgLy8gVE9ETyhpc3N1ZS8yNDU3MSk6IHJlbW92ZSAnIScuXG4gIHByaXZhdGUgX3Jlc29sdmUhOiAocmVzdWx0OiBhbnkpID0+IHZvaWQ7XG4gIC8vIFRPRE8oaXNzdWUvMjQ1NzEpOiByZW1vdmUgJyEnLlxuICBwcml2YXRlIF9yZWplY3QhOiAoZXJyOiBhbnkpID0+IHZvaWQ7XG4gIHByaXZhdGUgX3Byb21pc2U6IFByb21pc2U8YW55PiA9IG5ldyBQcm9taXNlKChyZXMsIHJlaikgPT4ge1xuICAgIHRoaXMuX3Jlc29sdmUgPSByZXM7XG4gICAgdGhpcy5fcmVqZWN0ID0gcmVqO1xuICB9KTtcbiAgZG9uZSh2YWx1ZT86IGFueSkge1xuICAgIHRoaXMuX3Jlc29sdmUodmFsdWUpO1xuICB9XG5cbiAgZmFpbChlcnJvcj86IGFueSwgc3RhY2tUcmFjZT86IHN0cmluZykge1xuICAgIHRoaXMuX3JlamVjdChlcnJvcik7XG4gIH1cblxuICBnZXQgcHJvbWlzZSgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLl9wcm9taXNlO1xuICB9XG59XG4iXX0=
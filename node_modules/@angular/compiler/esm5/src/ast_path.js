/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * A path is an ordered set of elements. Typically a path is to  a
 * particular offset in a source file. The head of the list is the top
 * most node. The tail is the node that contains the offset directly.
 *
 * For example, the expression `a + b + c` might have an ast that looks
 * like:
 *     +
 *    / \
 *   a   +
 *      / \
 *     b   c
 *
 * The path to the node at offset 9 would be `['+' at 1-10, '+' at 7-10,
 * 'c' at 9-10]` and the path the node at offset 1 would be
 * `['+' at 1-10, 'a' at 1-2]`.
 */
var AstPath = /** @class */ (function () {
    function AstPath(path, position) {
        if (position === void 0) { position = -1; }
        this.path = path;
        this.position = position;
    }
    Object.defineProperty(AstPath.prototype, "empty", {
        get: function () {
            return !this.path || !this.path.length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AstPath.prototype, "head", {
        get: function () {
            return this.path[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AstPath.prototype, "tail", {
        get: function () {
            return this.path[this.path.length - 1];
        },
        enumerable: true,
        configurable: true
    });
    AstPath.prototype.parentOf = function (node) {
        return node && this.path[this.path.indexOf(node) - 1];
    };
    AstPath.prototype.childOf = function (node) {
        return this.path[this.path.indexOf(node) + 1];
    };
    AstPath.prototype.first = function (ctor) {
        for (var i = this.path.length - 1; i >= 0; i--) {
            var item = this.path[i];
            if (item instanceof ctor)
                return item;
        }
    };
    AstPath.prototype.push = function (node) {
        this.path.push(node);
    };
    AstPath.prototype.pop = function () {
        return this.path.pop();
    };
    return AstPath;
}());
export { AstPath };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXN0X3BhdGguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21waWxlci9zcmMvYXN0X3BhdGgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUg7Ozs7Ozs7Ozs7Ozs7Ozs7R0FnQkc7QUFDSDtJQUNFLGlCQUFvQixJQUFTLEVBQVMsUUFBcUI7UUFBckIseUJBQUEsRUFBQSxZQUFvQixDQUFDO1FBQXZDLFNBQUksR0FBSixJQUFJLENBQUs7UUFBUyxhQUFRLEdBQVIsUUFBUSxDQUFhO0lBQUcsQ0FBQztJQUUvRCxzQkFBSSwwQkFBSzthQUFUO1lBQ0UsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUN6QyxDQUFDOzs7T0FBQTtJQUNELHNCQUFJLHlCQUFJO2FBQVI7WUFDRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdEIsQ0FBQzs7O09BQUE7SUFDRCxzQkFBSSx5QkFBSTthQUFSO1lBQ0UsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3pDLENBQUM7OztPQUFBO0lBRUQsMEJBQVEsR0FBUixVQUFTLElBQWlCO1FBQ3hCLE9BQU8sSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUNELHlCQUFPLEdBQVAsVUFBUSxJQUFPO1FBQ2IsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFRCx1QkFBSyxHQUFMLFVBQW1CLElBQThCO1FBQy9DLEtBQUssSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDOUMsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN4QixJQUFJLElBQUksWUFBWSxJQUFJO2dCQUFFLE9BQVUsSUFBSSxDQUFDO1NBQzFDO0lBQ0gsQ0FBQztJQUVELHNCQUFJLEdBQUosVUFBSyxJQUFPO1FBQ1YsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdkIsQ0FBQztJQUVELHFCQUFHLEdBQUg7UUFDRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFHLENBQUM7SUFDMUIsQ0FBQztJQUNILGNBQUM7QUFBRCxDQUFDLEFBbENELElBa0NDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG4vKipcbiAqIEEgcGF0aCBpcyBhbiBvcmRlcmVkIHNldCBvZiBlbGVtZW50cy4gVHlwaWNhbGx5IGEgcGF0aCBpcyB0byAgYVxuICogcGFydGljdWxhciBvZmZzZXQgaW4gYSBzb3VyY2UgZmlsZS4gVGhlIGhlYWQgb2YgdGhlIGxpc3QgaXMgdGhlIHRvcFxuICogbW9zdCBub2RlLiBUaGUgdGFpbCBpcyB0aGUgbm9kZSB0aGF0IGNvbnRhaW5zIHRoZSBvZmZzZXQgZGlyZWN0bHkuXG4gKlxuICogRm9yIGV4YW1wbGUsIHRoZSBleHByZXNzaW9uIGBhICsgYiArIGNgIG1pZ2h0IGhhdmUgYW4gYXN0IHRoYXQgbG9va3NcbiAqIGxpa2U6XG4gKiAgICAgK1xuICogICAgLyBcXFxuICogICBhICAgK1xuICogICAgICAvIFxcXG4gKiAgICAgYiAgIGNcbiAqXG4gKiBUaGUgcGF0aCB0byB0aGUgbm9kZSBhdCBvZmZzZXQgOSB3b3VsZCBiZSBgWycrJyBhdCAxLTEwLCAnKycgYXQgNy0xMCxcbiAqICdjJyBhdCA5LTEwXWAgYW5kIHRoZSBwYXRoIHRoZSBub2RlIGF0IG9mZnNldCAxIHdvdWxkIGJlXG4gKiBgWycrJyBhdCAxLTEwLCAnYScgYXQgMS0yXWAuXG4gKi9cbmV4cG9ydCBjbGFzcyBBc3RQYXRoPFQ+IHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBwYXRoOiBUW10sIHB1YmxpYyBwb3NpdGlvbjogbnVtYmVyID0gLTEpIHt9XG5cbiAgZ2V0IGVtcHR5KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhdGhpcy5wYXRoIHx8ICF0aGlzLnBhdGgubGVuZ3RoO1xuICB9XG4gIGdldCBoZWFkKCk6IFR8dW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5wYXRoWzBdO1xuICB9XG4gIGdldCB0YWlsKCk6IFR8dW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5wYXRoW3RoaXMucGF0aC5sZW5ndGggLSAxXTtcbiAgfVxuXG4gIHBhcmVudE9mKG5vZGU6IFR8dW5kZWZpbmVkKTogVHx1bmRlZmluZWQge1xuICAgIHJldHVybiBub2RlICYmIHRoaXMucGF0aFt0aGlzLnBhdGguaW5kZXhPZihub2RlKSAtIDFdO1xuICB9XG4gIGNoaWxkT2Yobm9kZTogVCk6IFR8dW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5wYXRoW3RoaXMucGF0aC5pbmRleE9mKG5vZGUpICsgMV07XG4gIH1cblxuICBmaXJzdDxOIGV4dGVuZHMgVD4oY3Rvcjoge25ldyguLi5hcmdzOiBhbnlbXSk6IE59KTogTnx1bmRlZmluZWQge1xuICAgIGZvciAobGV0IGkgPSB0aGlzLnBhdGgubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGxldCBpdGVtID0gdGhpcy5wYXRoW2ldO1xuICAgICAgaWYgKGl0ZW0gaW5zdGFuY2VvZiBjdG9yKSByZXR1cm4gPE4+aXRlbTtcbiAgICB9XG4gIH1cblxuICBwdXNoKG5vZGU6IFQpIHtcbiAgICB0aGlzLnBhdGgucHVzaChub2RlKTtcbiAgfVxuXG4gIHBvcCgpOiBUIHtcbiAgICByZXR1cm4gdGhpcy5wYXRoLnBvcCgpITtcbiAgfVxufVxuIl19
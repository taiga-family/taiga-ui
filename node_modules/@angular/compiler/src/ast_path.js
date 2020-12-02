/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define("@angular/compiler/src/ast_path", ["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
    exports.AstPath = AstPath;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXN0X3BhdGguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21waWxlci9zcmMvYXN0X3BhdGgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HOzs7Ozs7Ozs7Ozs7SUFFSDs7Ozs7Ozs7Ozs7Ozs7OztPQWdCRztJQUNIO1FBQ0UsaUJBQW9CLElBQVMsRUFBUyxRQUFxQjtZQUFyQix5QkFBQSxFQUFBLFlBQW9CLENBQUM7WUFBdkMsU0FBSSxHQUFKLElBQUksQ0FBSztZQUFTLGFBQVEsR0FBUixRQUFRLENBQWE7UUFBRyxDQUFDO1FBRS9ELHNCQUFJLDBCQUFLO2lCQUFUO2dCQUNFLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7WUFDekMsQ0FBQzs7O1dBQUE7UUFDRCxzQkFBSSx5QkFBSTtpQkFBUjtnQkFDRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdEIsQ0FBQzs7O1dBQUE7UUFDRCxzQkFBSSx5QkFBSTtpQkFBUjtnQkFDRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDekMsQ0FBQzs7O1dBQUE7UUFFRCwwQkFBUSxHQUFSLFVBQVMsSUFBaUI7WUFDeEIsT0FBTyxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN4RCxDQUFDO1FBQ0QseUJBQU8sR0FBUCxVQUFRLElBQU87WUFDYixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDaEQsQ0FBQztRQUVELHVCQUFLLEdBQUwsVUFBbUIsSUFBOEI7WUFDL0MsS0FBSyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDOUMsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDeEIsSUFBSSxJQUFJLFlBQVksSUFBSTtvQkFBRSxPQUFVLElBQUksQ0FBQzthQUMxQztRQUNILENBQUM7UUFFRCxzQkFBSSxHQUFKLFVBQUssSUFBTztZQUNWLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZCLENBQUM7UUFFRCxxQkFBRyxHQUFIO1lBQ0UsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRyxDQUFDO1FBQzFCLENBQUM7UUFDSCxjQUFDO0lBQUQsQ0FBQyxBQWxDRCxJQWtDQztJQWxDWSwwQkFBTyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuLyoqXG4gKiBBIHBhdGggaXMgYW4gb3JkZXJlZCBzZXQgb2YgZWxlbWVudHMuIFR5cGljYWxseSBhIHBhdGggaXMgdG8gIGFcbiAqIHBhcnRpY3VsYXIgb2Zmc2V0IGluIGEgc291cmNlIGZpbGUuIFRoZSBoZWFkIG9mIHRoZSBsaXN0IGlzIHRoZSB0b3BcbiAqIG1vc3Qgbm9kZS4gVGhlIHRhaWwgaXMgdGhlIG5vZGUgdGhhdCBjb250YWlucyB0aGUgb2Zmc2V0IGRpcmVjdGx5LlxuICpcbiAqIEZvciBleGFtcGxlLCB0aGUgZXhwcmVzc2lvbiBgYSArIGIgKyBjYCBtaWdodCBoYXZlIGFuIGFzdCB0aGF0IGxvb2tzXG4gKiBsaWtlOlxuICogICAgICtcbiAqICAgIC8gXFxcbiAqICAgYSAgICtcbiAqICAgICAgLyBcXFxuICogICAgIGIgICBjXG4gKlxuICogVGhlIHBhdGggdG8gdGhlIG5vZGUgYXQgb2Zmc2V0IDkgd291bGQgYmUgYFsnKycgYXQgMS0xMCwgJysnIGF0IDctMTAsXG4gKiAnYycgYXQgOS0xMF1gIGFuZCB0aGUgcGF0aCB0aGUgbm9kZSBhdCBvZmZzZXQgMSB3b3VsZCBiZVxuICogYFsnKycgYXQgMS0xMCwgJ2EnIGF0IDEtMl1gLlxuICovXG5leHBvcnQgY2xhc3MgQXN0UGF0aDxUPiB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcGF0aDogVFtdLCBwdWJsaWMgcG9zaXRpb246IG51bWJlciA9IC0xKSB7fVxuXG4gIGdldCBlbXB0eSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gIXRoaXMucGF0aCB8fCAhdGhpcy5wYXRoLmxlbmd0aDtcbiAgfVxuICBnZXQgaGVhZCgpOiBUfHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMucGF0aFswXTtcbiAgfVxuICBnZXQgdGFpbCgpOiBUfHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMucGF0aFt0aGlzLnBhdGgubGVuZ3RoIC0gMV07XG4gIH1cblxuICBwYXJlbnRPZihub2RlOiBUfHVuZGVmaW5lZCk6IFR8dW5kZWZpbmVkIHtcbiAgICByZXR1cm4gbm9kZSAmJiB0aGlzLnBhdGhbdGhpcy5wYXRoLmluZGV4T2Yobm9kZSkgLSAxXTtcbiAgfVxuICBjaGlsZE9mKG5vZGU6IFQpOiBUfHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMucGF0aFt0aGlzLnBhdGguaW5kZXhPZihub2RlKSArIDFdO1xuICB9XG5cbiAgZmlyc3Q8TiBleHRlbmRzIFQ+KGN0b3I6IHtuZXcoLi4uYXJnczogYW55W10pOiBOfSk6IE58dW5kZWZpbmVkIHtcbiAgICBmb3IgKGxldCBpID0gdGhpcy5wYXRoLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBsZXQgaXRlbSA9IHRoaXMucGF0aFtpXTtcbiAgICAgIGlmIChpdGVtIGluc3RhbmNlb2YgY3RvcikgcmV0dXJuIDxOPml0ZW07XG4gICAgfVxuICB9XG5cbiAgcHVzaChub2RlOiBUKSB7XG4gICAgdGhpcy5wYXRoLnB1c2gobm9kZSk7XG4gIH1cblxuICBwb3AoKTogVCB7XG4gICAgcmV0dXJuIHRoaXMucGF0aC5wb3AoKSE7XG4gIH1cbn1cbiJdfQ==
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Scroll strategy that doesn't do anything. */
var NoopScrollStrategy = /** @class */ (function () {
    function NoopScrollStrategy() {
    }
    /** Does nothing, as this scroll strategy is a no-op. */
    NoopScrollStrategy.prototype.enable = function () { };
    /** Does nothing, as this scroll strategy is a no-op. */
    NoopScrollStrategy.prototype.disable = function () { };
    /** Does nothing, as this scroll strategy is a no-op. */
    NoopScrollStrategy.prototype.attach = function () { };
    return NoopScrollStrategy;
}());
export { NoopScrollStrategy };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm9vcC1zY3JvbGwtc3RyYXRlZ3kuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY2RrL292ZXJsYXkvc2Nyb2xsL25vb3Atc2Nyb2xsLXN0cmF0ZWd5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUlILGdEQUFnRDtBQUNoRDtJQUFBO0lBT0EsQ0FBQztJQU5DLHdEQUF3RDtJQUN4RCxtQ0FBTSxHQUFOLGNBQVcsQ0FBQztJQUNaLHdEQUF3RDtJQUN4RCxvQ0FBTyxHQUFQLGNBQVksQ0FBQztJQUNiLHdEQUF3RDtJQUN4RCxtQ0FBTSxHQUFOLGNBQVcsQ0FBQztJQUNkLHlCQUFDO0FBQUQsQ0FBQyxBQVBELElBT0MiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtTY3JvbGxTdHJhdGVneX0gZnJvbSAnLi9zY3JvbGwtc3RyYXRlZ3knO1xuXG4vKiogU2Nyb2xsIHN0cmF0ZWd5IHRoYXQgZG9lc24ndCBkbyBhbnl0aGluZy4gKi9cbmV4cG9ydCBjbGFzcyBOb29wU2Nyb2xsU3RyYXRlZ3kgaW1wbGVtZW50cyBTY3JvbGxTdHJhdGVneSB7XG4gIC8qKiBEb2VzIG5vdGhpbmcsIGFzIHRoaXMgc2Nyb2xsIHN0cmF0ZWd5IGlzIGEgbm8tb3AuICovXG4gIGVuYWJsZSgpIHsgfVxuICAvKiogRG9lcyBub3RoaW5nLCBhcyB0aGlzIHNjcm9sbCBzdHJhdGVneSBpcyBhIG5vLW9wLiAqL1xuICBkaXNhYmxlKCkgeyB9XG4gIC8qKiBEb2VzIG5vdGhpbmcsIGFzIHRoaXMgc2Nyb2xsIHN0cmF0ZWd5IGlzIGEgbm8tb3AuICovXG4gIGF0dGFjaCgpIHsgfVxufVxuIl19
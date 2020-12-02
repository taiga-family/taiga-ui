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
export class AstPath {
    constructor(path, position = -1) {
        this.path = path;
        this.position = position;
    }
    get empty() {
        return !this.path || !this.path.length;
    }
    get head() {
        return this.path[0];
    }
    get tail() {
        return this.path[this.path.length - 1];
    }
    parentOf(node) {
        return node && this.path[this.path.indexOf(node) - 1];
    }
    childOf(node) {
        return this.path[this.path.indexOf(node) + 1];
    }
    first(ctor) {
        for (let i = this.path.length - 1; i >= 0; i--) {
            let item = this.path[i];
            if (item instanceof ctor)
                return item;
        }
    }
    push(node) {
        this.path.push(node);
    }
    pop() {
        return this.path.pop();
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXN0X3BhdGguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21waWxlci9zcmMvYXN0X3BhdGgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUg7Ozs7Ozs7Ozs7Ozs7Ozs7R0FnQkc7QUFDSCxNQUFNLE9BQU8sT0FBTztJQUNsQixZQUFvQixJQUFTLEVBQVMsV0FBbUIsQ0FBQyxDQUFDO1FBQXZDLFNBQUksR0FBSixJQUFJLENBQUs7UUFBUyxhQUFRLEdBQVIsUUFBUSxDQUFhO0lBQUcsQ0FBQztJQUUvRCxJQUFJLEtBQUs7UUFDUCxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3pDLENBQUM7SUFDRCxJQUFJLElBQUk7UUFDTixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdEIsQ0FBQztJQUNELElBQUksSUFBSTtRQUNOLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRUQsUUFBUSxDQUFDLElBQWlCO1FBQ3hCLE9BQU8sSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUNELE9BQU8sQ0FBQyxJQUFPO1FBQ2IsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFRCxLQUFLLENBQWMsSUFBOEI7UUFDL0MsS0FBSyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUM5QyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3hCLElBQUksSUFBSSxZQUFZLElBQUk7Z0JBQUUsT0FBVSxJQUFJLENBQUM7U0FDMUM7SUFDSCxDQUFDO0lBRUQsSUFBSSxDQUFDLElBQU87UUFDVixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN2QixDQUFDO0lBRUQsR0FBRztRQUNELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUcsQ0FBQztJQUMxQixDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbi8qKlxuICogQSBwYXRoIGlzIGFuIG9yZGVyZWQgc2V0IG9mIGVsZW1lbnRzLiBUeXBpY2FsbHkgYSBwYXRoIGlzIHRvICBhXG4gKiBwYXJ0aWN1bGFyIG9mZnNldCBpbiBhIHNvdXJjZSBmaWxlLiBUaGUgaGVhZCBvZiB0aGUgbGlzdCBpcyB0aGUgdG9wXG4gKiBtb3N0IG5vZGUuIFRoZSB0YWlsIGlzIHRoZSBub2RlIHRoYXQgY29udGFpbnMgdGhlIG9mZnNldCBkaXJlY3RseS5cbiAqXG4gKiBGb3IgZXhhbXBsZSwgdGhlIGV4cHJlc3Npb24gYGEgKyBiICsgY2AgbWlnaHQgaGF2ZSBhbiBhc3QgdGhhdCBsb29rc1xuICogbGlrZTpcbiAqICAgICArXG4gKiAgICAvIFxcXG4gKiAgIGEgICArXG4gKiAgICAgIC8gXFxcbiAqICAgICBiICAgY1xuICpcbiAqIFRoZSBwYXRoIHRvIHRoZSBub2RlIGF0IG9mZnNldCA5IHdvdWxkIGJlIGBbJysnIGF0IDEtMTAsICcrJyBhdCA3LTEwLFxuICogJ2MnIGF0IDktMTBdYCBhbmQgdGhlIHBhdGggdGhlIG5vZGUgYXQgb2Zmc2V0IDEgd291bGQgYmVcbiAqIGBbJysnIGF0IDEtMTAsICdhJyBhdCAxLTJdYC5cbiAqL1xuZXhwb3J0IGNsYXNzIEFzdFBhdGg8VD4ge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhdGg6IFRbXSwgcHVibGljIHBvc2l0aW9uOiBudW1iZXIgPSAtMSkge31cblxuICBnZXQgZW1wdHkoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICF0aGlzLnBhdGggfHwgIXRoaXMucGF0aC5sZW5ndGg7XG4gIH1cbiAgZ2V0IGhlYWQoKTogVHx1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLnBhdGhbMF07XG4gIH1cbiAgZ2V0IHRhaWwoKTogVHx1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLnBhdGhbdGhpcy5wYXRoLmxlbmd0aCAtIDFdO1xuICB9XG5cbiAgcGFyZW50T2Yobm9kZTogVHx1bmRlZmluZWQpOiBUfHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIG5vZGUgJiYgdGhpcy5wYXRoW3RoaXMucGF0aC5pbmRleE9mKG5vZGUpIC0gMV07XG4gIH1cbiAgY2hpbGRPZihub2RlOiBUKTogVHx1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLnBhdGhbdGhpcy5wYXRoLmluZGV4T2Yobm9kZSkgKyAxXTtcbiAgfVxuXG4gIGZpcnN0PE4gZXh0ZW5kcyBUPihjdG9yOiB7bmV3KC4uLmFyZ3M6IGFueVtdKTogTn0pOiBOfHVuZGVmaW5lZCB7XG4gICAgZm9yIChsZXQgaSA9IHRoaXMucGF0aC5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgbGV0IGl0ZW0gPSB0aGlzLnBhdGhbaV07XG4gICAgICBpZiAoaXRlbSBpbnN0YW5jZW9mIGN0b3IpIHJldHVybiA8Tj5pdGVtO1xuICAgIH1cbiAgfVxuXG4gIHB1c2gobm9kZTogVCkge1xuICAgIHRoaXMucGF0aC5wdXNoKG5vZGUpO1xuICB9XG5cbiAgcG9wKCk6IFQge1xuICAgIHJldHVybiB0aGlzLnBhdGgucG9wKCkhO1xuICB9XG59XG4iXX0=
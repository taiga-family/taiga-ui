/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Indicates that the result of a {@link Pipe} transformation has changed even though the
 * reference has not changed.
 *
 * Wrapped values are unwrapped automatically during the change detection, and the unwrapped value
 * is stored.
 *
 * Example:
 *
 * ```
 * if (this._latestValue === this._latestReturnedValue) {
 *    return this._latestReturnedValue;
 *  } else {
 *    this._latestReturnedValue = this._latestValue;
 *    return WrappedValue.wrap(this._latestValue); // this will force update
 *  }
 * ```
 *
 * @publicApi
 */
export class WrappedValue {
    constructor(value) {
        this.wrapped = value;
    }
    /** Creates a wrapped value. */
    static wrap(value) {
        return new WrappedValue(value);
    }
    /**
     * Returns the underlying value of a wrapped value.
     * Returns the given `value` when it is not wrapped.
     **/
    static unwrap(value) {
        return WrappedValue.isWrapped(value) ? value.wrapped : value;
    }
    /** Returns true if `value` is a wrapped value. */
    static isWrapped(value) {
        return value instanceof WrappedValue;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV3JhcHBlZFZhbHVlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29yZS9zcmMvdXRpbC9XcmFwcGVkVmFsdWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUg7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FtQkc7QUFDSCxNQUFNLE9BQU8sWUFBWTtJQUl2QixZQUFZLEtBQVU7UUFDcEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7SUFDdkIsQ0FBQztJQUVELCtCQUErQjtJQUMvQixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQVU7UUFDcEIsT0FBTyxJQUFJLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRUQ7OztRQUdJO0lBQ0osTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFVO1FBQ3RCLE9BQU8sWUFBWSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO0lBQy9ELENBQUM7SUFFRCxrREFBa0Q7SUFDbEQsTUFBTSxDQUFDLFNBQVMsQ0FBQyxLQUFVO1FBQ3pCLE9BQU8sS0FBSyxZQUFZLFlBQVksQ0FBQztJQUN2QyxDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbi8qKlxuICogSW5kaWNhdGVzIHRoYXQgdGhlIHJlc3VsdCBvZiBhIHtAbGluayBQaXBlfSB0cmFuc2Zvcm1hdGlvbiBoYXMgY2hhbmdlZCBldmVuIHRob3VnaCB0aGVcbiAqIHJlZmVyZW5jZSBoYXMgbm90IGNoYW5nZWQuXG4gKlxuICogV3JhcHBlZCB2YWx1ZXMgYXJlIHVud3JhcHBlZCBhdXRvbWF0aWNhbGx5IGR1cmluZyB0aGUgY2hhbmdlIGRldGVjdGlvbiwgYW5kIHRoZSB1bndyYXBwZWQgdmFsdWVcbiAqIGlzIHN0b3JlZC5cbiAqXG4gKiBFeGFtcGxlOlxuICpcbiAqIGBgYFxuICogaWYgKHRoaXMuX2xhdGVzdFZhbHVlID09PSB0aGlzLl9sYXRlc3RSZXR1cm5lZFZhbHVlKSB7XG4gKiAgICByZXR1cm4gdGhpcy5fbGF0ZXN0UmV0dXJuZWRWYWx1ZTtcbiAqICB9IGVsc2Uge1xuICogICAgdGhpcy5fbGF0ZXN0UmV0dXJuZWRWYWx1ZSA9IHRoaXMuX2xhdGVzdFZhbHVlO1xuICogICAgcmV0dXJuIFdyYXBwZWRWYWx1ZS53cmFwKHRoaXMuX2xhdGVzdFZhbHVlKTsgLy8gdGhpcyB3aWxsIGZvcmNlIHVwZGF0ZVxuICogIH1cbiAqIGBgYFxuICpcbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IGNsYXNzIFdyYXBwZWRWYWx1ZSB7XG4gIC8qKiBAZGVwcmVjYXRlZCBmcm9tIDUuMywgdXNlIGB1bndyYXAoKWAgaW5zdGVhZCAtIHdpbGwgc3dpdGNoIHRvIHByb3RlY3RlZCAqL1xuICB3cmFwcGVkOiBhbnk7XG5cbiAgY29uc3RydWN0b3IodmFsdWU6IGFueSkge1xuICAgIHRoaXMud3JhcHBlZCA9IHZhbHVlO1xuICB9XG5cbiAgLyoqIENyZWF0ZXMgYSB3cmFwcGVkIHZhbHVlLiAqL1xuICBzdGF0aWMgd3JhcCh2YWx1ZTogYW55KTogV3JhcHBlZFZhbHVlIHtcbiAgICByZXR1cm4gbmV3IFdyYXBwZWRWYWx1ZSh2YWx1ZSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgdW5kZXJseWluZyB2YWx1ZSBvZiBhIHdyYXBwZWQgdmFsdWUuXG4gICAqIFJldHVybnMgdGhlIGdpdmVuIGB2YWx1ZWAgd2hlbiBpdCBpcyBub3Qgd3JhcHBlZC5cbiAgICoqL1xuICBzdGF0aWMgdW53cmFwKHZhbHVlOiBhbnkpOiBhbnkge1xuICAgIHJldHVybiBXcmFwcGVkVmFsdWUuaXNXcmFwcGVkKHZhbHVlKSA/IHZhbHVlLndyYXBwZWQgOiB2YWx1ZTtcbiAgfVxuXG4gIC8qKiBSZXR1cm5zIHRydWUgaWYgYHZhbHVlYCBpcyBhIHdyYXBwZWQgdmFsdWUuICovXG4gIHN0YXRpYyBpc1dyYXBwZWQodmFsdWU6IGFueSk6IHZhbHVlIGlzIFdyYXBwZWRWYWx1ZSB7XG4gICAgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgV3JhcHBlZFZhbHVlO1xuICB9XG59XG4iXX0=
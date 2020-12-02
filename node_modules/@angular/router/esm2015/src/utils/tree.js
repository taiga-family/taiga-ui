/**
 * @fileoverview added by tsickle
 * Generated from: packages/router/src/utils/tree.ts
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
 * @template T
 */
export class Tree {
    /**
     * @param {?} root
     */
    constructor(root) {
        this._root = root;
    }
    /**
     * @return {?}
     */
    get root() {
        return this._root.value;
    }
    /**
     * \@internal
     * @param {?} t
     * @return {?}
     */
    parent(t) {
        /** @type {?} */
        const p = this.pathFromRoot(t);
        return p.length > 1 ? p[p.length - 2] : null;
    }
    /**
     * \@internal
     * @param {?} t
     * @return {?}
     */
    children(t) {
        /** @type {?} */
        const n = findNode(t, this._root);
        return n ? n.children.map((/**
         * @param {?} t
         * @return {?}
         */
        t => t.value)) : [];
    }
    /**
     * \@internal
     * @param {?} t
     * @return {?}
     */
    firstChild(t) {
        /** @type {?} */
        const n = findNode(t, this._root);
        return n && n.children.length > 0 ? n.children[0].value : null;
    }
    /**
     * \@internal
     * @param {?} t
     * @return {?}
     */
    siblings(t) {
        /** @type {?} */
        const p = findPath(t, this._root);
        if (p.length < 2)
            return [];
        /** @type {?} */
        const c = p[p.length - 2].children.map((/**
         * @param {?} c
         * @return {?}
         */
        c => c.value));
        return c.filter((/**
         * @param {?} cc
         * @return {?}
         */
        cc => cc !== t));
    }
    /**
     * \@internal
     * @param {?} t
     * @return {?}
     */
    pathFromRoot(t) {
        return findPath(t, this._root).map((/**
         * @param {?} s
         * @return {?}
         */
        s => s.value));
    }
}
if (false) {
    /**
     * \@internal
     * @type {?}
     */
    Tree.prototype._root;
}
// DFS for the node matching the value
/**
 * @template T
 * @param {?} value
 * @param {?} node
 * @return {?}
 */
function findNode(value, node) {
    if (value === node.value)
        return node;
    for (const child of node.children) {
        /** @type {?} */
        const node = findNode(value, child);
        if (node)
            return node;
    }
    return null;
}
// Return the path to the node with the given value using DFS
/**
 * @template T
 * @param {?} value
 * @param {?} node
 * @return {?}
 */
function findPath(value, node) {
    if (value === node.value)
        return [node];
    for (const child of node.children) {
        /** @type {?} */
        const path = findPath(value, child);
        if (path.length) {
            path.unshift(node);
            return path;
        }
    }
    return [];
}
/**
 * @template T
 */
export class TreeNode {
    /**
     * @param {?} value
     * @param {?} children
     */
    constructor(value, children) {
        this.value = value;
        this.children = children;
    }
    /**
     * @return {?}
     */
    toString() {
        return `TreeNode(${this.value})`;
    }
}
if (false) {
    /** @type {?} */
    TreeNode.prototype.value;
    /** @type {?} */
    TreeNode.prototype.children;
}
// Return the list of T indexed by outlet name
/**
 * @template T
 * @param {?} node
 * @return {?}
 */
export function nodeChildrenAsMap(node) {
    /** @type {?} */
    const map = {};
    if (node) {
        node.children.forEach((/**
         * @param {?} child
         * @return {?}
         */
        child => map[child.value.outlet] = child));
    }
    return map;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3JvdXRlci9zcmMvdXRpbHMvdHJlZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFRQSxNQUFNLE9BQU8sSUFBSTs7OztJQUlmLFlBQVksSUFBaUI7UUFDM0IsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7SUFDcEIsQ0FBQzs7OztJQUVELElBQUksSUFBSTtRQUNOLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7SUFDMUIsQ0FBQzs7Ozs7O0lBS0QsTUFBTSxDQUFDLENBQUk7O2NBQ0gsQ0FBQyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1FBQzlCLE9BQU8sQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDL0MsQ0FBQzs7Ozs7O0lBS0QsUUFBUSxDQUFDLENBQUk7O2NBQ0wsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUNqQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxHQUFHOzs7O1FBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUMvQyxDQUFDOzs7Ozs7SUFLRCxVQUFVLENBQUMsQ0FBSTs7Y0FDUCxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ2pDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUNqRSxDQUFDOzs7Ozs7SUFLRCxRQUFRLENBQUMsQ0FBSTs7Y0FDTCxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDO1lBQUUsT0FBTyxFQUFFLENBQUM7O2NBRXRCLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsR0FBRzs7OztRQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBQztRQUNwRCxPQUFPLENBQUMsQ0FBQyxNQUFNOzs7O1FBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxFQUFDLENBQUM7SUFDbEMsQ0FBQzs7Ozs7O0lBS0QsWUFBWSxDQUFDLENBQUk7UUFDZixPQUFPLFFBQVEsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUc7Ozs7UUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUMsQ0FBQztJQUNuRCxDQUFDO0NBQ0Y7Ozs7OztJQW5EQyxxQkFBbUI7Ozs7Ozs7OztBQXVEckIsU0FBUyxRQUFRLENBQUksS0FBUSxFQUFFLElBQWlCO0lBQzlDLElBQUksS0FBSyxLQUFLLElBQUksQ0FBQyxLQUFLO1FBQUUsT0FBTyxJQUFJLENBQUM7SUFFdEMsS0FBSyxNQUFNLEtBQUssSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFOztjQUMzQixJQUFJLEdBQUcsUUFBUSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUM7UUFDbkMsSUFBSSxJQUFJO1lBQUUsT0FBTyxJQUFJLENBQUM7S0FDdkI7SUFFRCxPQUFPLElBQUksQ0FBQztBQUNkLENBQUM7Ozs7Ozs7O0FBR0QsU0FBUyxRQUFRLENBQUksS0FBUSxFQUFFLElBQWlCO0lBQzlDLElBQUksS0FBSyxLQUFLLElBQUksQ0FBQyxLQUFLO1FBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRXhDLEtBQUssTUFBTSxLQUFLLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTs7Y0FDM0IsSUFBSSxHQUFHLFFBQVEsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDO1FBQ25DLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNmLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbkIsT0FBTyxJQUFJLENBQUM7U0FDYjtLQUNGO0lBRUQsT0FBTyxFQUFFLENBQUM7QUFDWixDQUFDOzs7O0FBRUQsTUFBTSxPQUFPLFFBQVE7Ozs7O0lBQ25CLFlBQW1CLEtBQVEsRUFBUyxRQUF1QjtRQUF4QyxVQUFLLEdBQUwsS0FBSyxDQUFHO1FBQVMsYUFBUSxHQUFSLFFBQVEsQ0FBZTtJQUFHLENBQUM7Ozs7SUFFL0QsUUFBUTtRQUNOLE9BQU8sWUFBWSxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUM7SUFDbkMsQ0FBQztDQUNGOzs7SUFMYSx5QkFBZTs7SUFBRSw0QkFBOEI7Ozs7Ozs7O0FBUTdELE1BQU0sVUFBVSxpQkFBaUIsQ0FBNkIsSUFBc0I7O1VBQzVFLEdBQUcsR0FBb0MsRUFBRTtJQUUvQyxJQUFJLElBQUksRUFBRTtRQUNSLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTzs7OztRQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsS0FBSyxFQUFDLENBQUM7S0FDakU7SUFFRCxPQUFPLEdBQUcsQ0FBQztBQUNiLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmV4cG9ydCBjbGFzcyBUcmVlPFQ+IHtcbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBfcm9vdDogVHJlZU5vZGU8VD47XG5cbiAgY29uc3RydWN0b3Iocm9vdDogVHJlZU5vZGU8VD4pIHtcbiAgICB0aGlzLl9yb290ID0gcm9vdDtcbiAgfVxuXG4gIGdldCByb290KCk6IFQge1xuICAgIHJldHVybiB0aGlzLl9yb290LnZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgcGFyZW50KHQ6IFQpOiBUfG51bGwge1xuICAgIGNvbnN0IHAgPSB0aGlzLnBhdGhGcm9tUm9vdCh0KTtcbiAgICByZXR1cm4gcC5sZW5ndGggPiAxID8gcFtwLmxlbmd0aCAtIDJdIDogbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIGNoaWxkcmVuKHQ6IFQpOiBUW10ge1xuICAgIGNvbnN0IG4gPSBmaW5kTm9kZSh0LCB0aGlzLl9yb290KTtcbiAgICByZXR1cm4gbiA/IG4uY2hpbGRyZW4ubWFwKHQgPT4gdC52YWx1ZSkgOiBbXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIGZpcnN0Q2hpbGQodDogVCk6IFR8bnVsbCB7XG4gICAgY29uc3QgbiA9IGZpbmROb2RlKHQsIHRoaXMuX3Jvb3QpO1xuICAgIHJldHVybiBuICYmIG4uY2hpbGRyZW4ubGVuZ3RoID4gMCA/IG4uY2hpbGRyZW5bMF0udmFsdWUgOiBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgc2libGluZ3ModDogVCk6IFRbXSB7XG4gICAgY29uc3QgcCA9IGZpbmRQYXRoKHQsIHRoaXMuX3Jvb3QpO1xuICAgIGlmIChwLmxlbmd0aCA8IDIpIHJldHVybiBbXTtcblxuICAgIGNvbnN0IGMgPSBwW3AubGVuZ3RoIC0gMl0uY2hpbGRyZW4ubWFwKGMgPT4gYy52YWx1ZSk7XG4gICAgcmV0dXJuIGMuZmlsdGVyKGNjID0+IGNjICE9PSB0KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIHBhdGhGcm9tUm9vdCh0OiBUKTogVFtdIHtcbiAgICByZXR1cm4gZmluZFBhdGgodCwgdGhpcy5fcm9vdCkubWFwKHMgPT4gcy52YWx1ZSk7XG4gIH1cbn1cblxuXG4vLyBERlMgZm9yIHRoZSBub2RlIG1hdGNoaW5nIHRoZSB2YWx1ZVxuZnVuY3Rpb24gZmluZE5vZGU8VD4odmFsdWU6IFQsIG5vZGU6IFRyZWVOb2RlPFQ+KTogVHJlZU5vZGU8VD58bnVsbCB7XG4gIGlmICh2YWx1ZSA9PT0gbm9kZS52YWx1ZSkgcmV0dXJuIG5vZGU7XG5cbiAgZm9yIChjb25zdCBjaGlsZCBvZiBub2RlLmNoaWxkcmVuKSB7XG4gICAgY29uc3Qgbm9kZSA9IGZpbmROb2RlKHZhbHVlLCBjaGlsZCk7XG4gICAgaWYgKG5vZGUpIHJldHVybiBub2RlO1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbi8vIFJldHVybiB0aGUgcGF0aCB0byB0aGUgbm9kZSB3aXRoIHRoZSBnaXZlbiB2YWx1ZSB1c2luZyBERlNcbmZ1bmN0aW9uIGZpbmRQYXRoPFQ+KHZhbHVlOiBULCBub2RlOiBUcmVlTm9kZTxUPik6IFRyZWVOb2RlPFQ+W10ge1xuICBpZiAodmFsdWUgPT09IG5vZGUudmFsdWUpIHJldHVybiBbbm9kZV07XG5cbiAgZm9yIChjb25zdCBjaGlsZCBvZiBub2RlLmNoaWxkcmVuKSB7XG4gICAgY29uc3QgcGF0aCA9IGZpbmRQYXRoKHZhbHVlLCBjaGlsZCk7XG4gICAgaWYgKHBhdGgubGVuZ3RoKSB7XG4gICAgICBwYXRoLnVuc2hpZnQobm9kZSk7XG4gICAgICByZXR1cm4gcGF0aDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gW107XG59XG5cbmV4cG9ydCBjbGFzcyBUcmVlTm9kZTxUPiB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyB2YWx1ZTogVCwgcHVibGljIGNoaWxkcmVuOiBUcmVlTm9kZTxUPltdKSB7fVxuXG4gIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGBUcmVlTm9kZSgke3RoaXMudmFsdWV9KWA7XG4gIH1cbn1cblxuLy8gUmV0dXJuIHRoZSBsaXN0IG9mIFQgaW5kZXhlZCBieSBvdXRsZXQgbmFtZVxuZXhwb3J0IGZ1bmN0aW9uIG5vZGVDaGlsZHJlbkFzTWFwPFQgZXh0ZW5kcyB7b3V0bGV0OiBzdHJpbmd9Pihub2RlOiBUcmVlTm9kZTxUPnxudWxsKSB7XG4gIGNvbnN0IG1hcDoge1tvdXRsZXQ6IHN0cmluZ106IFRyZWVOb2RlPFQ+fSA9IHt9O1xuXG4gIGlmIChub2RlKSB7XG4gICAgbm9kZS5jaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IG1hcFtjaGlsZC52YWx1ZS5vdXRsZXRdID0gY2hpbGQpO1xuICB9XG5cbiAgcmV0dXJuIG1hcDtcbn0iXX0=
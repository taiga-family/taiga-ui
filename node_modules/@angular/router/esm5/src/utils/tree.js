/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { __values } from "tslib";
var Tree = /** @class */ (function () {
    function Tree(root) {
        this._root = root;
    }
    Object.defineProperty(Tree.prototype, "root", {
        get: function () {
            return this._root.value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @internal
     */
    Tree.prototype.parent = function (t) {
        var p = this.pathFromRoot(t);
        return p.length > 1 ? p[p.length - 2] : null;
    };
    /**
     * @internal
     */
    Tree.prototype.children = function (t) {
        var n = findNode(t, this._root);
        return n ? n.children.map(function (t) { return t.value; }) : [];
    };
    /**
     * @internal
     */
    Tree.prototype.firstChild = function (t) {
        var n = findNode(t, this._root);
        return n && n.children.length > 0 ? n.children[0].value : null;
    };
    /**
     * @internal
     */
    Tree.prototype.siblings = function (t) {
        var p = findPath(t, this._root);
        if (p.length < 2)
            return [];
        var c = p[p.length - 2].children.map(function (c) { return c.value; });
        return c.filter(function (cc) { return cc !== t; });
    };
    /**
     * @internal
     */
    Tree.prototype.pathFromRoot = function (t) {
        return findPath(t, this._root).map(function (s) { return s.value; });
    };
    return Tree;
}());
export { Tree };
// DFS for the node matching the value
function findNode(value, node) {
    var e_1, _a;
    if (value === node.value)
        return node;
    try {
        for (var _b = __values(node.children), _c = _b.next(); !_c.done; _c = _b.next()) {
            var child = _c.value;
            var node_1 = findNode(value, child);
            if (node_1)
                return node_1;
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return null;
}
// Return the path to the node with the given value using DFS
function findPath(value, node) {
    var e_2, _a;
    if (value === node.value)
        return [node];
    try {
        for (var _b = __values(node.children), _c = _b.next(); !_c.done; _c = _b.next()) {
            var child = _c.value;
            var path = findPath(value, child);
            if (path.length) {
                path.unshift(node);
                return path;
            }
        }
    }
    catch (e_2_1) { e_2 = { error: e_2_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_2) throw e_2.error; }
    }
    return [];
}
var TreeNode = /** @class */ (function () {
    function TreeNode(value, children) {
        this.value = value;
        this.children = children;
    }
    TreeNode.prototype.toString = function () {
        return "TreeNode(" + this.value + ")";
    };
    return TreeNode;
}());
export { TreeNode };
// Return the list of T indexed by outlet name
export function nodeChildrenAsMap(node) {
    var map = {};
    if (node) {
        node.children.forEach(function (child) { return map[child.value.outlet] = child; });
    }
    return map;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3JvdXRlci9zcmMvdXRpbHMvdHJlZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7O0FBRUg7SUFJRSxjQUFZLElBQWlCO1FBQzNCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO0lBQ3BCLENBQUM7SUFFRCxzQkFBSSxzQkFBSTthQUFSO1lBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztRQUMxQixDQUFDOzs7T0FBQTtJQUVEOztPQUVHO0lBQ0gscUJBQU0sR0FBTixVQUFPLENBQUk7UUFDVCxJQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQy9CLE9BQU8sQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDL0MsQ0FBQztJQUVEOztPQUVHO0lBQ0gsdUJBQVEsR0FBUixVQUFTLENBQUk7UUFDWCxJQUFNLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNsQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsS0FBSyxFQUFQLENBQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDL0MsQ0FBQztJQUVEOztPQUVHO0lBQ0gseUJBQVUsR0FBVixVQUFXLENBQUk7UUFDYixJQUFNLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNsQyxPQUFPLENBQUMsSUFB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S0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxLQUFLLEVBQS9CLENBQStCLENBQUMsQ0FBQztLQUNqRTtJQUVELE9BQU8sR0FBRyxDQUFDO0FBQ2IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuZXhwb3J0IGNsYXNzIFRyZWU8VD4ge1xuICAvKiogQGludGVybmFsICovXG4gIF9yb290OiBUcmVlTm9kZTxUPjtcblxuICBjb25zdHJ1Y3Rvcihyb290OiBUcmVlTm9kZTxUPikge1xuICAgIHRoaXMuX3Jvb3QgPSByb290O1xuICB9XG5cbiAgZ2V0IHJvb3QoKTogVCB7XG4gICAgcmV0dXJuIHRoaXMuX3Jvb3QudmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogQGludGVybmFsXG4gICAqL1xuICBwYXJlbnQodDogVCk6IFR8bnVsbCB7XG4gICAgY29uc3QgcCA9IHRoaXMucGF0aEZyb21Sb290KHQpO1xuICAgIHJldHVybiBwLmxlbmd0aCA+IDEgPyBwW3AubGVuZ3RoIC0gMl0gOiBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgY2hpbGRyZW4odDogVCk6IFRbXSB7XG4gICAgY29uc3QgbiA9IGZpbmROb2RlKHQsIHRoaXMuX3Jvb3QpO1xuICAgIHJldHVybiBuID8gbi5jaGlsZHJlbi5tYXAodCA9PiB0LnZhbHVlKSA6IFtdO1xuICB9XG5cbiAgLyoqXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgZmlyc3RDaGlsZCh0OiBUKTogVHxudWxsIHtcbiAgICBjb25zdCBuID0gZmluZE5vZGUodCwgdGhpcy5fcm9vdCk7XG4gICAgcmV0dXJuIG4gJiYgbi5jaGlsZHJlbi5sZW5ndGggPiAwID8gbi5jaGlsZHJlblswXS52YWx1ZSA6IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogQGludGVybmFsXG4gICAqL1xuICBzaWJsaW5ncyh0OiBUKTogVFtdIHtcbiAgICBjb25zdCBwID0gZmluZFBhdGgodCwgdGhpcy5fcm9vdCk7XG4gICAgaWYgKHAubGVuZ3RoIDwgMikgcmV0dXJuIFtdO1xuXG4gICAgY29uc3QgYyA9IHBbcC5sZW5ndGggLSAyXS5jaGlsZHJlbi5tYXAoYyA9PiBjLnZhbHVlKTtcbiAgICByZXR1cm4gYy5maWx0ZXIoY2MgPT4gY2MgIT09IHQpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgcGF0aEZyb21Sb290KHQ6IFQpOiBUW10ge1xuICAgIHJldHVybiBmaW5kUGF0aCh0LCB0aGlzLl9yb290KS5tYXAocyA9PiBzLnZhbHVlKTtcbiAgfVxufVxuXG5cbi8vIERGUyBmb3IgdGhlIG5vZGUgbWF0Y2hpbmcgdGhlIHZhbHVlXG5mdW5jdGlvbiBmaW5kTm9kZTxUPih2YWx1ZTogVCwgbm9kZTogVHJlZU5vZGU8VD4pOiBUcmVlTm9kZTxUPnxudWxsIHtcbiAgaWYgKHZhbHVlID09PSBub2RlLnZhbHVlKSByZXR1cm4gbm9kZTtcblxuICBmb3IgKGNvbnN0IGNoaWxkIG9mIG5vZGUuY2hpbGRyZW4pIHtcbiAgICBjb25zdCBub2RlID0gZmluZE5vZGUodmFsdWUsIGNoaWxkKTtcbiAgICBpZiAobm9kZSkgcmV0dXJuIG5vZGU7XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxuLy8gUmV0dXJuIHRoZSBwYXRoIHRvIHRoZSBub2RlIHdpdGggdGhlIGdpdmVuIHZhbHVlIHVzaW5nIERGU1xuZnVuY3Rpb24gZmluZFBhdGg8VD4odmFsdWU6IFQsIG5vZGU6IFRyZWVOb2RlPFQ+KTogVHJlZU5vZGU8VD5bXSB7XG4gIGlmICh2YWx1ZSA9PT0gbm9kZS52YWx1ZSkgcmV0dXJuIFtub2RlXTtcblxuICBmb3IgKGNvbnN0IGNoaWxkIG9mIG5vZGUuY2hpbGRyZW4pIHtcbiAgICBjb25zdCBwYXRoID0gZmluZFBhdGgodmFsdWUsIGNoaWxkKTtcbiAgICBpZiAocGF0aC5sZW5ndGgpIHtcbiAgICAgIHBhdGgudW5zaGlmdChub2RlKTtcbiAgICAgIHJldHVybiBwYXRoO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBbXTtcbn1cblxuZXhwb3J0IGNsYXNzIFRyZWVOb2RlPFQ+IHtcbiAgY29uc3RydWN0b3IocHVibGljIHZhbHVlOiBULCBwdWJsaWMgY2hpbGRyZW46IFRyZWVOb2RlPFQ+W10pIHt9XG5cbiAgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYFRyZWVOb2RlKCR7dGhpcy52YWx1ZX0pYDtcbiAgfVxufVxuXG4vLyBSZXR1cm4gdGhlIGxpc3Qgb2YgVCBpbmRleGVkIGJ5IG91dGxldCBuYW1lXG5leHBvcnQgZnVuY3Rpb24gbm9kZUNoaWxkcmVuQXNNYXA8VCBleHRlbmRzIHtvdXRsZXQ6IHN0cmluZ30+KG5vZGU6IFRyZWVOb2RlPFQ+fG51bGwpIHtcbiAgY29uc3QgbWFwOiB7W291dGxldDogc3RyaW5nXTogVHJlZU5vZGU8VD59ID0ge307XG5cbiAgaWYgKG5vZGUpIHtcbiAgICBub2RlLmNoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4gbWFwW2NoaWxkLnZhbHVlLm91dGxldF0gPSBjaGlsZCk7XG4gIH1cblxuICByZXR1cm4gbWFwO1xufSJdfQ==
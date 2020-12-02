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
        define("@angular/compiler-cli/src/ngtsc/util/src/visitor", ["require", "exports", "tslib", "typescript"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = require("tslib");
    var ts = require("typescript");
    /**
     * Visit a node with the given visitor and return a transformed copy.
     */
    function visit(node, visitor, context) {
        return visitor._visit(node, context);
    }
    exports.visit = visit;
    /**
     * Abstract base class for visitors, which processes certain nodes specially to allow insertion
     * of other nodes before them.
     */
    var Visitor = /** @class */ (function () {
        function Visitor() {
            /**
             * Maps statements to an array of statements that should be inserted before them.
             */
            this._before = new Map();
            /**
             * Maps statements to an array of statements that should be inserted after them.
             */
            this._after = new Map();
        }
        /**
         * Visit a class declaration, returning at least the transformed declaration and optionally other
         * nodes to insert before the declaration.
         */
        Visitor.prototype.visitClassDeclaration = function (node) {
            return { node: node };
        };
        Visitor.prototype._visitListEntryNode = function (node, visitor) {
            var result = visitor(node);
            if (result.before !== undefined) {
                // Record that some nodes should be inserted before the given declaration. The declaration's
                // parent's _visit call is responsible for performing this insertion.
                this._before.set(result.node, result.before);
            }
            if (result.after !== undefined) {
                // Same with nodes that should be inserted after.
                this._after.set(result.node, result.after);
            }
            return result.node;
        };
        /**
         * Visit types of nodes which don't have their own explicit visitor.
         */
        Visitor.prototype.visitOtherNode = function (node) {
            return node;
        };
        /**
         * @internal
         */
        Visitor.prototype._visit = function (node, context) {
            var _this = this;
            // First, visit the node. visitedNode starts off as `null` but should be set after visiting
            // is completed.
            var visitedNode = null;
            node = ts.visitEachChild(node, function (child) { return _this._visit(child, context); }, context);
            if (ts.isClassDeclaration(node)) {
                visitedNode =
                    this._visitListEntryNode(node, function (node) { return _this.visitClassDeclaration(node); });
            }
            else {
                visitedNode = this.visitOtherNode(node);
            }
            // If the visited node has a `statements` array then process them, maybe replacing the visited
            // node and adding additional statements.
            if (hasStatements(visitedNode)) {
                visitedNode = this._maybeProcessStatements(visitedNode);
            }
            return visitedNode;
        };
        Visitor.prototype._maybeProcessStatements = function (node) {
            var _this = this;
            // Shortcut - if every statement doesn't require nodes to be prepended or appended,
            // this is a no-op.
            if (node.statements.every(function (stmt) { return !_this._before.has(stmt) && !_this._after.has(stmt); })) {
                return node;
            }
            // There are statements to prepend, so clone the original node.
            var clone = ts.getMutableClone(node);
            // Build a new list of statements and patch it onto the clone.
            var newStatements = [];
            clone.statements.forEach(function (stmt) {
                if (_this._before.has(stmt)) {
                    newStatements.push.apply(newStatements, tslib_1.__spread(_this._before.get(stmt)));
                    _this._before.delete(stmt);
                }
                newStatements.push(stmt);
                if (_this._after.has(stmt)) {
                    newStatements.push.apply(newStatements, tslib_1.__spread(_this._after.get(stmt)));
                    _this._after.delete(stmt);
                }
            });
            clone.statements = ts.createNodeArray(newStatements, node.statements.hasTrailingComma);
            return clone;
        };
        return Visitor;
    }());
    exports.Visitor = Visitor;
    function hasStatements(node) {
        var block = node;
        return block.statements !== undefined && Array.isArray(block.statements);
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlzaXRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbXBpbGVyLWNsaS9zcmMvbmd0c2MvdXRpbC9zcmMvdmlzaXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7Ozs7Ozs7Ozs7Ozs7SUFFSCwrQkFBaUM7SUFZakM7O09BRUc7SUFDSCxTQUFnQixLQUFLLENBQ2pCLElBQU8sRUFBRSxPQUFnQixFQUFFLE9BQWlDO1FBQzlELE9BQU8sT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUhELHNCQUdDO0lBRUQ7OztPQUdHO0lBQ0g7UUFBQTtZQUNFOztlQUVHO1lBQ0ssWUFBTyxHQUFHLElBQUksR0FBRyxFQUEyQixDQUFDO1lBRXJEOztlQUVHO1lBQ0ssV0FBTSxHQUFHLElBQUksR0FBRyxFQUEyQixDQUFDO1FBdUZ0RCxDQUFDO1FBckZDOzs7V0FHRztRQUNILHVDQUFxQixHQUFyQixVQUFzQixJQUF5QjtZQUU3QyxPQUFPLEVBQUMsSUFBSSxNQUFBLEVBQUMsQ0FBQztRQUNoQixDQUFDO1FBRU8scUNBQW1CLEdBQTNCLFVBQ0ksSUFBTyxFQUFFLE9BQTJEO1lBQ3RFLElBQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM3QixJQUFJLE1BQU0sQ0FBQyxNQUFNLEtBQUssU0FBUyxFQUFFO2dCQUMvQiw0RkFBNEY7Z0JBQzVGLHFFQUFxRTtnQkFDckUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDOUM7WUFDRCxJQUFJLE1BQU0sQ0FBQyxLQUFLLEtBQUssU0FBUyxFQUFFO2dCQUM5QixpREFBaUQ7Z0JBQ2pELElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0s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T0FBTyxLQUFLLENBQUM7UUFDZixDQUFDO1FBQ0gsY0FBQztJQUFELENBQUMsQUFoR0QsSUFnR0M7SUFoR3FCLDBCQUFPO0lBa0c3QixTQUFTLGFBQWEsQ0FBQyxJQUFhO1FBQ2xDLElBQU0sS0FBSyxHQUFHLElBQTBCLENBQUM7UUFDekMsT0FBTyxLQUFLLENBQUMsVUFBVSxLQUFLLFNBQVMsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUMzRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQgKiBhcyB0cyBmcm9tICd0eXBlc2NyaXB0JztcblxuLyoqXG4gKiBSZXN1bHQgdHlwZSBvZiB2aXNpdGluZyBhIG5vZGUgdGhhdCdzIHR5cGljYWxseSBhbiBlbnRyeSBpbiBhIGxpc3QsIHdoaWNoIGFsbG93cyBzcGVjaWZ5aW5nIHRoYXRcbiAqIG5vZGVzIHNob3VsZCBiZSBhZGRlZCBiZWZvcmUgdGhlIHZpc2l0ZWQgbm9kZSBpbiB0aGUgb3V0cHV0LlxuICovXG5leHBvcnQgdHlwZSBWaXNpdExpc3RFbnRyeVJlc3VsdDxCIGV4dGVuZHMgdHMuTm9kZSwgVCBleHRlbmRzIEI+ID0ge1xuICBub2RlOiBULFxuICBiZWZvcmU/OiBCW10sXG4gIGFmdGVyPzogQltdLFxufTtcblxuLyoqXG4gKiBWaXNpdCBhIG5vZGUgd2l0aCB0aGUgZ2l2ZW4gdmlzaXRvciBhbmQgcmV0dXJuIGEgdHJhbnNmb3JtZWQgY29weS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHZpc2l0PFQgZXh0ZW5kcyB0cy5Ob2RlPihcbiAgICBub2RlOiBULCB2aXNpdG9yOiBWaXNpdG9yLCBjb250ZXh0OiB0cy5UcmFuc2Zvcm1hdGlvbkNvbnRleHQpOiBUIHtcbiAgcmV0dXJuIHZpc2l0b3IuX3Zpc2l0KG5vZGUsIGNvbnRleHQpO1xufVxuXG4vKipcbiAqIEFic3RyYWN0IGJhc2UgY2xhc3MgZm9yIHZpc2l0b3JzLCB3aGljaCBwcm9jZXNzZXMgY2VydGFpbiBub2RlcyBzcGVjaWFsbHkgdG8gYWxsb3cgaW5zZXJ0aW9uXG4gKiBvZiBvdGhlciBub2RlcyBiZWZvcmUgdGhlbS5cbiAqL1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFZpc2l0b3Ige1xuICAvKipcbiAgICogTWFwcyBzdGF0ZW1lbnRzIHRvIGFuIGFycmF5IG9mIHN0YXRlbWVudHMgdGhhdCBzaG91bGQgYmUgaW5zZXJ0ZWQgYmVmb3JlIHRoZW0uXG4gICAqL1xuICBwcml2YXRlIF9iZWZvcmUgPSBuZXcgTWFwPHRzLk5vZGUsIHRzLlN0YXRlbWVudFtdPigpO1xuXG4gIC8qKlxuICAgKiBNYXBzIHN0YXRlbWVudHMgdG8gYW4gYXJyYXkgb2Ygc3RhdGVtZW50cyB0aGF0IHNob3VsZCBiZSBpbnNlcnRlZCBhZnRlciB0aGVtLlxuICAgKi9cbiAgcHJpdmF0ZSBfYWZ0ZXIgPSBuZXcgTWFwPHRzLk5vZGUsIHRzLlN0YXRlbWVudFtdPigpO1xuXG4gIC8qKlxuICAgKiBWaXNpdCBhIGNsYXNzIGRlY2xhcmF0aW9uLCByZXR1cm5pbmcgYXQgbGVhc3QgdGhlIHRyYW5zZm9ybWVkIGRlY2xhcmF0aW9uIGFuZCBvcHRpb25hbGx5IG90aGVyXG4gICAqIG5vZGVzIHRvIGluc2VydCBiZWZvcmUgdGhlIGRlY2xhcmF0aW9uLlxuICAgKi9cbiAgdmlzaXRDbGFzc0RlY2xhcmF0aW9uKG5vZGU6IHRzLkNsYXNzRGVjbGFyYXRpb24pOlxuICAgICAgVmlzaXRMaXN0RW50cnlSZXN1bHQ8dHMuU3RhdGVtZW50LCB0cy5DbGFzc0RlY2xhcmF0aW9uPiB7XG4gICAgcmV0dXJuIHtub2RlfTtcbiAgfVxuXG4gIHByaXZhdGUgX3Zpc2l0TGlzdEVudHJ5Tm9kZTxUIGV4dGVuZHMgdHMuU3RhdGVtZW50PihcbiAgICAgIG5vZGU6IFQsIHZpc2l0b3I6IChub2RlOiBUKSA9PiBWaXNpdExpc3RFbnRyeVJlc3VsdDx0cy5TdGF0ZW1lbnQsIFQ+KTogVCB7XG4gICAgY29uc3QgcmVzdWx0ID0gdmlzaXRvcihub2RlKTtcbiAgICBpZiAocmVzdWx0LmJlZm9yZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBSZWNvcmQgdGhhdCBzb21lIG5vZGVzIHNob3VsZCBiZSBpbnNlcnRlZCBiZWZvcmUgdGhlIGdpdmVuIGRlY2xhcmF0aW9uLiBUaGUgZGVjbGFyYXRpb24nc1xuICAgICAgLy8gcGFyZW50J3MgX3Zpc2l0IGNhbGwgaXMgcmVzcG9uc2libGUgZm9yIHBlcmZvcm1pbmcgdGhpcyBpbnNlcnRpb24uXG4gICAgICB0aGlzLl9iZWZvcmUuc2V0KHJlc3VsdC5ub2RlLCByZXN1bHQuYmVmb3JlKTtcbiAgICB9XG4gICAgaWYgKHJlc3VsdC5hZnRlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBTYW1lIHdpdGggbm9kZXMgdGhhdCBzaG91bGQgYmUgaW5zZXJ0ZWQgYWZ0ZXIuXG4gICAgICB0aGlzLl9hZnRlci5zZXQocmVzdWx0Lm5vZGUsIHJlc3VsdC5hZnRlcik7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQubm9kZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBWaXNpdCB0eXBlcyBvZiBub2RlcyB3aGljaCBkb24ndCBoYXZlIHRoZWlyIG93biBleHBsaWNpdCB2aXNpdG9yLlxuICAgKi9cbiAgdmlzaXRPdGhlck5vZGU8VCBleHRlbmRzIHRzLk5vZGU+KG5vZGU6IFQpOiBUIHtcbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIF92aXNpdDxUIGV4dGVuZHMgdHMuTm9kZT4obm9kZTogVCwgY29udGV4dDogdHMuVHJhbnNmb3JtYXRpb25Db250ZXh0KTogVCB7XG4gICAgLy8gRmlyc3QsIHZpc2l0IHRoZSBub2RlLiB2aXNpdGVkTm9kZSBzdGFydHMgb2ZmIGFzIGBudWxsYCBidXQgc2hvdWxkIGJlIHNldCBhZnRlciB2aXNpdGluZ1xuICAgIC8vIGlzIGNvbXBsZXRlZC5cbiAgICBsZXQgdmlzaXRlZE5vZGU6IFR8bnVsbCA9IG51bGw7XG5cbiAgICBub2RlID0gdHMudmlzaXRFYWNoQ2hpbGQobm9kZSwgY2hpbGQgPT4gdGhpcy5fdmlzaXQoY2hpbGQsIGNvbnRleHQpLCBjb250ZXh0KSBhcyBUO1xuXG4gICAgaWYgKHRzLmlzQ2xhc3NEZWNsYXJhdGlvbihub2RlKSkge1xuICAgICAgdmlzaXRlZE5vZGUgPVxuICAgICAgICAgIHRoaXMuX3Zpc2l0TGlzdEVudHJ5Tm9kZShcbiAgICAgICAgICAgICAgbm9kZSwgKG5vZGU6IHRzLkNsYXNzRGVjbGFyYXRpb24pID0+IHRoaXMudmlzaXRDbGFzc0RlY2xhcmF0aW9uKG5vZGUpKSBhcyB0eXBlb2Ygbm9kZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmlzaXRlZE5vZGUgPSB0aGlzLnZpc2l0T3RoZXJOb2RlKG5vZGUpO1xuICAgIH1cblxuICAgIC8vIElmIHRoZSB2aXNpdGVkIG5vZGUgaGFzIGEgYHN0YXRlbWVudHNgIGFycmF5IHRoZW4gcHJvY2VzcyB0aGVtLCBtYXliZSByZXBsYWNpbmcgdGhlIHZpc2l0ZWRcbiAgICAvLyBub2RlIGFuZCBhZGRpbmcgYWRkaXRpb25hbCBzdGF0ZW1lbnRzLlxuICAgIGlmIChoYXNTdGF0ZW1lbnRzKHZpc2l0ZWROb2RlKSkge1xuICAgICAgdmlzaXRlZE5vZGUgPSB0aGlzLl9tYXliZVByb2Nlc3NTdGF0ZW1lbnRzKHZpc2l0ZWROb2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmlzaXRlZE5vZGU7XG4gIH1cblxuICBwcml2YXRlIF9tYXliZVByb2Nlc3NTdGF0ZW1lbnRzPFQgZXh0ZW5kcyB0cy5Ob2RlJntzdGF0ZW1lbnRzOiB0cy5Ob2RlQXJyYXk8dHMuU3RhdGVtZW50Pn0+KFxuICAgICAgbm9kZTogVCk6IFQge1xuICAgIC8vIFNob3J0Y3V0IC0gaWYgZXZlcnkgc3RhdGVtZW50IGRvZXNuJ3QgcmVxdWlyZSBub2RlcyB0byBiZSBwcmVwZW5kZWQgb3IgYXBwZW5kZWQsXG4gICAgLy8gdGhpcyBpcyBhIG5vLW9wLlxuICAgIGlmIChub2RlLnN0YXRlbWVudHMuZXZlcnkoc3RtdCA9PiAhdGhpcy5fYmVmb3JlLmhhcyhzdG10KSAmJiAhdGhpcy5fYWZ0ZXIuaGFzKHN0bXQpKSkge1xuICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfVxuXG4gICAgLy8gVGhlcmUgYXJlIHN0YXRlbWVudHMgdG8gcHJlcGVuZCwgc28gY2xvbmUgdGhlIG9yaWdpbmFsIG5vZGUuXG4gICAgY29uc3QgY2xvbmUgPSB0cy5nZXRNdXRhYmxlQ2xvbmUobm9kZSk7XG5cbiAgICAvLyBCdWlsZCBhIG5ldyBsaXN0IG9mIHN0YXRlbWVudHMgYW5kIHBhdGNoIGl0IG9udG8gdGhlIGNsb25lLlxuICAgIGNvbnN0IG5ld1N0YXRlbWVudHM6IHRzLlN0YXRlbWVudFtdID0gW107XG4gICAgY2xvbmUuc3RhdGVtZW50cy5mb3JFYWNoKHN0bXQgPT4ge1xuICAgICAgaWYgKHRoaXMuX2JlZm9yZS5oYXMoc3RtdCkpIHtcbiAgICAgICAgbmV3U3RhdGVtZW50cy5wdXNoKC4uLih0aGlzLl9iZWZvcmUuZ2V0KHN0bXQpISBhcyB0cy5TdGF0ZW1lbnRbXSkpO1xuICAgICAgICB0aGlzLl9iZWZvcmUuZGVsZXRlKHN0bXQpO1xuICAgICAgfVxuICAgICAgbmV3U3RhdGVtZW50cy5wdXNoKHN0bXQpO1xuICAgICAgaWYgKHRoaXMuX2FmdGVyLmhhcyhzdG10KSkge1xuICAgICAgICBuZXdTdGF0ZW1lbnRzLnB1c2goLi4uKHRoaXMuX2FmdGVyLmdldChzdG10KSEgYXMgdHMuU3RhdGVtZW50W10pKTtcbiAgICAgICAgdGhpcy5fYWZ0ZXIuZGVsZXRlKHN0bXQpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGNsb25lLnN0YXRlbWVudHMgPSB0cy5jcmVhdGVOb2RlQXJyYXkobmV3U3RhdGVtZW50cywgbm9kZS5zdGF0ZW1lbnRzLmhhc1RyYWlsaW5nQ29tbWEpO1xuICAgIHJldHVybiBjbG9uZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBoYXNTdGF0ZW1lbnRzKG5vZGU6IHRzLk5vZGUpOiBub2RlIGlzIHRzLk5vZGUme3N0YXRlbWVudHM6IHRzLk5vZGVBcnJheTx0cy5TdGF0ZW1lbnQ+fSB7XG4gIGNvbnN0IGJsb2NrID0gbm9kZSBhcyB7c3RhdGVtZW50cz86IGFueX07XG4gIHJldHVybiBibG9jay5zdGF0ZW1lbnRzICE9PSB1bmRlZmluZWQgJiYgQXJyYXkuaXNBcnJheShibG9jay5zdGF0ZW1lbnRzKTtcbn1cbiJdfQ==
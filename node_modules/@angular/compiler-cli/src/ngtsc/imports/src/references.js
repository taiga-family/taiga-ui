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
        define("@angular/compiler-cli/src/ngtsc/imports/src/references", ["require", "exports", "tslib", "@angular/compiler-cli/src/ngtsc/util/src/typescript"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = require("tslib");
    var typescript_1 = require("@angular/compiler-cli/src/ngtsc/util/src/typescript");
    /**
     * A `ts.Node` plus the context in which it was discovered.
     *
     * A `Reference` is a pointer to a `ts.Node` that was extracted from the program somehow. It
     * contains not only the node itself, but the information regarding how the node was located. In
     * particular, it might track different identifiers by which the node is exposed, as well as
     * potentially a module specifier which might expose the node.
     *
     * The Angular compiler uses `Reference`s instead of `ts.Node`s when tracking classes or generating
     * imports.
     */
    var Reference = /** @class */ (function () {
        function Reference(node, bestGuessOwningModule) {
            if (bestGuessOwningModule === void 0) { bestGuessOwningModule = null; }
            this.node = node;
            this.identifiers = [];
            /**
             * Indicates that the Reference was created synthetically, not as a result of natural value
             * resolution.
             *
             * This is used to avoid misinterpreting the Reference in certain contexts.
             */
            this.synthetic = false;
            this._alias = null;
            this.bestGuessOwningModule = bestGuessOwningModule;
            var id = typescript_1.identifierOfNode(node);
            if (id !== null) {
                this.identifiers.push(id);
            }
        }
        Object.defineProperty(Reference.prototype, "ownedByModuleGuess", {
            /**
             * The best guess at which module specifier owns this particular reference, or `null` if there
             * isn't one.
             */
            get: function () {
                if (this.bestGuessOwningModule !== null) {
                    return this.bestGuessOwningModule.specifier;
                }
                else {
                    return null;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Reference.prototype, "hasOwningModuleGuess", {
            /**
             * Whether this reference has a potential owning module or not.
             *
             * See `bestGuessOwningModule`.
             */
            get: function () {
                return this.bestGuessOwningModule !== null;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Reference.prototype, "debugName", {
            /**
             * A name for the node, if one is available.
             *
             * This is only suited for debugging. Any actual references to this node should be made with
             * `ts.Identifier`s (see `getIdentityIn`).
             */
            get: function () {
                var id = typescript_1.identifierOfNode(this.node);
                return id !== null ? id.text : null;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Reference.prototype, "alias", {
            get: function () {
                return this._alias;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Record a `ts.Identifier` by which it's valid to refer to this node, within the context of this
         * `Reference`.
         */
        Reference.prototype.addIdentifier = function (identifier) {
            this.identifiers.push(identifier);
        };
        /**
         * Get a `ts.Identifier` within this `Reference` that can be used to refer within the context of a
         * given `ts.SourceFile`, if any.
         */
        Reference.prototype.getIdentityIn = function (context) {
            return this.identifiers.find(function (id) { return id.getSourceFile() === context; }) || null;
        };
        /**
         * Get a `ts.Identifier` for this `Reference` that exists within the given expression.
         *
         * This is very useful for producing `ts.Diagnostic`s that reference `Reference`s that were
         * extracted from some larger expression, as it can be used to pinpoint the `ts.Identifier` within
         * the expression from which the `Reference` originated.
         */
        Reference.prototype.getIdentityInExpression = function (expr) {
            var sf = expr.getSourceFile();
            return this.identifiers.find(function (id) {
                if (id.getSourceFile() !== sf) {
                    return false;
                }
                // This identifier is a match if its position lies within the given expression.
                return id.pos >= expr.pos && id.end <= expr.end;
            }) ||
                null;
        };
        /**
         * Given the 'container' expression from which this `Reference` was extracted, produce a
         * `ts.Expression` to use in a diagnostic which best indicates the position within the container
         * expression that generated the `Reference`.
         *
         * For example, given a `Reference` to the class 'Bar' and the containing expression:
         * `[Foo, Bar, Baz]`, this function would attempt to return the `ts.Identifier` for `Bar` within
         * the array. This could be used to produce a nice diagnostic context:
         *
         * ```text
         * [Foo, Bar, Baz]
         *       ~~~
         * ```
         *
         * If no specific node can be found, then the `fallback` expression is used, which defaults to the
         * entire containing expression.
         */
        Reference.prototype.getOriginForDiagnostics = function (container, fallback) {
            if (fallback === void 0) { fallback = container; }
            var id = this.getIdentityInExpression(container);
            return id !== null ? id : fallback;
        };
        Reference.prototype.cloneWithAlias = function (alias) {
            var ref = new Reference(this.node, this.bestGuessOwningModule);
            ref.identifiers = tslib_1.__spread(this.identifiers);
            ref._alias = alias;
            return ref;
        };
        Reference.prototype.cloneWithNoIdentifiers = function () {
            var ref = new Reference(this.node, this.bestGuessOwningModule);
            ref._alias = this._alias;
            ref.identifiers = [];
            return ref;
        };
        return Reference;
    }());
    exports.Reference = Reference;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVmZXJlbmNlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbXBpbGVyLWNsaS9zcmMvbmd0c2MvaW1wb3J0cy9zcmMvcmVmZXJlbmNlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7Ozs7Ozs7Ozs7Ozs7SUFLSCxrRkFBMkQ7SUFPM0Q7Ozs7Ozs7Ozs7T0FVRztJQUNIO1FBMkJFLG1CQUFxQixJQUFPLEVBQUUscUJBQStDO1lBQS9DLHNDQUFBLEVBQUEsNEJBQStDO1lBQXhELFNBQUksR0FBSixJQUFJLENBQUc7WUFacEIsZ0JBQVcsR0FBb0IsRUFBRSxDQUFDO1lBRTFDOzs7OztlQUtHO1lBQ0gsY0FBUyxHQUFHLEtBQUssQ0FBQztZQUVWLFdBQU0sR0FBb0IsSUFBSSxDQUFDO1lBR3JDLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxxQkFBcUIsQ0FBQztZQUVuRCxJQUFNLEVBQUUsR0FBRyw2QkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNsQyxJQUFJLEVBQUUsS0FBSyxJQUFJLEVBQUU7Z0JBQ2YsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7YUFDM0I7UUFDSCxDQUFDO1FBTUQsc0JBQUkseUNBQWtCO1lBSnRCOzs7ZUFHRztpQkFDSDtnQkFDRSxJQUFJLElBQUksQ0FBQyxxQkFBcUIsS0FBSyxJQUFJLEVBQUU7b0JBQ3ZDLE9BQU8sSUFBSSxDQUFDLHFCQUFxQixDQUFDLFNBQVMsQ0FBQztpQkFDN0M7cUJBQU07b0JBQ0wsT0FBTyxJQUFJLENBQUM7aUJBQ2I7WUFDSCxDQUFDOzs7V0FBQTtRQU9ELHNCQUFJLDJDQUFvQjtZQUx4Qjs7OztlQUlHO2lCQUNIO2dCQUNFLE9BQU8sSUFBSSxDQUFDLHFCQUFxQixLQUFLLElBQUksQ0FBQztZQUM3QyxDQUFDOzs7V0FBQTtRQVFELHNCQUFJLGdDQUFTO1lBTmI7Ozs7O2VBS0c7aUJBQ0g7Z0JBQ0UsSUFBTSxFQUFFLEdBQUcsNkJBQWdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUN2QyxPQUFPLEVBQUUsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUN0QyxDQUFDOzs7V0FBQTtRQUVELHNCQUFJLDRCQUFLO2lCQUFUO2dCQUNFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUNyQixDQUFDOzs7V0FBQTtRQUdEOzs7V0FHRztRQUNILGlDQUFhLEdBQWIsVUFBYyxVQUF5QjtZQUNyQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNwQyxDQUFDO1FBRUQ7OztXQUdHO1FBQ0gsaUNBQWEsR0FBYixVQUFjLE9BQXNCO1lBQ2xDLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBQSxFQUFFLElBQUksT0FBQSxFQUFFLENBQUMsYUFBYSxFQUFFLEtBQUssT0FBTyxFQUE5QixDQUE4QixDQUFDLElBQUksSUFBSSxDQUFDO1FBQzdFLENBQUM7UUFFRDs7Ozs7O1dBTUc7UUFDSCwyQ0FBdUIsR0FBdkIsVUFBd0IsSUFBbUI7WUFDekMsSUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQ2hDLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBQSxFQUFFO2dCQUM3QixJQUFJLEVBQUUsQ0FBQyxhQUFhLEVBQUUsS0FBSyxFQUFFLEVBQUU7b0JBQzdCLE9BQU8sS0FBSyxDQUFDO2lCQUNkO2dCQUVELCtFQUErRTtnQkFDL0UsT0FBTyxFQUFFLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDO1lBQ2xELENBQUMsQ0FBQztnQkFDRSxJQUFJLENBQUM7UUFDWCxDQUFDO1FBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7V0FnQkc7UUFDSCwyQ0FBdUIsR0FBdkIsVUFBd0IsU0FBd0IsRUFBRSxRQUFtQztZQUFuQyx5QkFBQSxFQUFBLG9CQUFtQztZQUVuRixJQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsdUJBQXVCLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDbkQsT0FBTyxFQUFFLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQztRQUNyQyxDQUFDO1FBRUQsa0NBQWMsR0FBZCxVQUFlLEtBQWlCO1lBQzlCLElBQU0sR0FBRyxHQUFHLElBQUksU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUM7WUFDakUsR0FBRyxDQUFDLFdBQVcsb0JBQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ3hDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQ25CLE9BQU8sR0FBRyxDQUFDO1FBQ2IsQ0FBQztRQUVELDBDQUFzQixHQUF0QjtZQUNFLElBQU0sR0FBRyxHQUFHLElBQUksU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUM7WUFDakUsR0FBRyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1lBQ3pCLEdBQUcsQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO1lBQ3JCLE9BQU8sR0FBRyxDQUFDO1FBQ2IsQ0FBQztRQUNILGdCQUFDO0lBQUQsQ0FBQyxBQWpKRCxJQWlKQztJQWpKWSw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtFeHByZXNzaW9ufSBmcm9tICdAYW5ndWxhci9jb21waWxlcic7XG5pbXBvcnQgKiBhcyB0cyBmcm9tICd0eXBlc2NyaXB0JztcblxuaW1wb3J0IHtpZGVudGlmaWVyT2ZOb2RlfSBmcm9tICcuLi8uLi91dGlsL3NyYy90eXBlc2NyaXB0JztcblxuZXhwb3J0IGludGVyZmFjZSBPd25pbmdNb2R1bGUge1xuICBzcGVjaWZpZXI6IHN0cmluZztcbiAgcmVzb2x1dGlvbkNvbnRleHQ6IHN0cmluZztcbn1cblxuLyoqXG4gKiBBIGB0cy5Ob2RlYCBwbHVzIHRoZSBjb250ZXh0IGluIHdoaWNoIGl0IHdhcyBkaXNjb3ZlcmVkLlxuICpcbiAqIEEgYFJlZmVyZW5jZWAgaXMgYSBwb2ludGVyIHRvIGEgYHRzLk5vZGVgIHRoYXQgd2FzIGV4dHJhY3RlZCBmcm9tIHRoZSBwcm9ncmFtIHNvbWVob3cuIEl0XG4gKiBjb250YWlucyBub3Qgb25seSB0aGUgbm9kZSBpdHNlbGYsIGJ1dCB0aGUgaW5mb3JtYXRpb24gcmVnYXJkaW5nIGhvdyB0aGUgbm9kZSB3YXMgbG9jYXRlZC4gSW5cbiAqIHBhcnRpY3VsYXIsIGl0IG1pZ2h0IHRyYWNrIGRpZmZlcmVudCBpZGVudGlmaWVycyBieSB3aGljaCB0aGUgbm9kZSBpcyBleHBvc2VkLCBhcyB3ZWxsIGFzXG4gKiBwb3RlbnRpYWxseSBhIG1vZHVsZSBzcGVjaWZpZXIgd2hpY2ggbWlnaHQgZXhwb3NlIHRoZSBub2RlLlxuICpcbiAqIFRoZSBBbmd1bGFyIGNvbXBpbGVyIHVzZXMgYFJlZmVyZW5jZWBzIGluc3RlYWQgb2YgYHRzLk5vZGVgcyB3aGVuIHRyYWNraW5nIGNsYXNzZXMgb3IgZ2VuZXJhdGluZ1xuICogaW1wb3J0cy5cbiAqL1xuZXhwb3J0IGNsYXNzIFJlZmVyZW5jZTxUIGV4dGVuZHMgdHMuTm9kZSA9IHRzLk5vZGU+IHtcbiAgLyoqXG4gICAqIFRoZSBjb21waWxlcidzIGJlc3QgZ3Vlc3MgYXQgYW4gYWJzb2x1dGUgbW9kdWxlIHNwZWNpZmllciB3aGljaCBvd25zIHRoaXMgYFJlZmVyZW5jZWAuXG4gICAqXG4gICAqIFRoaXMgaXMgdXN1YWxseSBkZXRlcm1pbmVkIGJ5IHRyYWNraW5nIHRoZSBpbXBvcnQgc3RhdGVtZW50cyB3aGljaCBsZWQgdGhlIGNvbXBpbGVyIHRvIGEgZ2l2ZW5cbiAgICogbm9kZS4gSWYgYW55IG9mIHRoZXNlIGltcG9ydHMgYXJlIGFic29sdXRlLCBpdCdzIGFuIGluZGljYXRpb24gdGhhdCB0aGUgbm9kZSBiZWluZyBpbXBvcnRlZFxuICAgKiBtaWdodCBjb21lIGZyb20gdGhhdCBtb2R1bGUuXG4gICAqXG4gICAqIEl0IGlzIG5vdCBfZ3VhcmFudGVlZF8gdGhhdCB0aGUgbm9kZSBpbiBxdWVzdGlvbiBpcyBleHBvcnRlZCBmcm9tIGl0cyBgYmVzdEd1ZXNzT3duaW5nTW9kdWxlYCAtXG4gICAqIHRoYXQgaXMgbW9zdGx5IGEgY29udmVudGlvbiB0aGF0IGFwcGxpZXMgaW4gY2VydGFpbiBwYWNrYWdlIGZvcm1hdHMuXG4gICAqXG4gICAqIElmIGBiZXN0R3Vlc3NPd25pbmdNb2R1bGVgIGlzIGBudWxsYCwgdGhlbiBpdCdzIGxpa2VseSB0aGUgbm9kZSBjYW1lIGZyb20gdGhlIGN1cnJlbnQgcHJvZ3JhbS5cbiAgICovXG4gIHJlYWRvbmx5IGJlc3RHdWVzc093bmluZ01vZHVsZTogT3duaW5nTW9kdWxlfG51bGw7XG5cbiAgcHJpdmF0ZSBpZGVudGlmaWVyczogdHMuSWRlbnRpZmllcltdID0gW107XG5cbiAgLyoqXG4gICAqIEluZGljYXRlcyB0aGF0IHRoZSBSZWZlcmVuY2Ugd2FzIGNyZWF0ZWQgc3ludGhldGljYWxseSwgbm90IGFzIGEgcmVzdWx0IG9mIG5hdHVyYWwgdmFsdWVcbiAgICogcmVzb2x1dGlvbi5cbiAgICpcbiAgICogVGhpcyBpcyB1c2VkIHRvIGF2b2lkIG1pc2ludGVycHJldGluZyB0aGUgUmVmZXJlbmNlIGluIGNlcnRhaW4gY29udGV4dHMuXG4gICAqL1xuICBzeW50aGV0aWMgPSBmYWxzZTtcblxuICBwcml2YXRlIF9hbGlhczogRXhwcmVzc2lvbnxudWxsID0gbnVsbDtcblxuICBjb25zdHJ1Y3RvcihyZWFkb25seSBub2RlOiBULCBiZXN0R3Vlc3NPd25pbmdNb2R1bGU6IE93bmluZ01vZHVsZXxudWxsID0gbnVsbCkge1xuICAgIHRoaXMuYmVzdEd1ZXNzT3duaW5nTW9kdWxlID0gYmVzdEd1ZXNzT3duaW5nTW9kdWxlO1xuXG4gICAgY29uc3QgaWQgPSBpZGVudGlmaWVyT2ZOb2RlKG5vZGUpO1xuICAgIGlmIChpZCAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5pZGVudGlmaWVycy5wdXNoKGlkKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVGhlIGJlc3QgZ3Vlc3MgYXQgd2hpY2ggbW9kdWxlIHNwZWNpZmllciBvd25zIHRoaXMgcGFydGljdWxhciByZWZlcmVuY2UsIG9yIGBudWxsYCBpZiB0aGVyZVxuICAgKiBpc24ndCBvbmUuXG4gICAqL1xuICBnZXQgb3duZWRCeU1vZHVsZUd1ZXNzKCk6IHN0cmluZ3xudWxsIHtcbiAgICBpZiAodGhpcy5iZXN0R3Vlc3NPd25pbmdNb2R1bGUgIT09IG51bGwpIHtcbiAgICAgIHJldHVybiB0aGlzLmJlc3RHdWVzc093bmluZ01vZHVsZS5zcGVjaWZpZXI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBXaGV0aGVyIHRoaXMgcmVmZXJlbmNlIGhhcyBhIHBvdGVudGlhbCBvd25pbmcgbW9kdWxlIG9yIG5vdC5cbiAgICpcbiAgICogU2VlIGBiZXN0R3Vlc3NPd25pbmdNb2R1bGVgLlxuICAgKi9cbiAgZ2V0IGhhc093bmluZ01vZHVsZUd1ZXNzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmJlc3RHdWVzc093bmluZ01vZHVsZSAhPT0gbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBBIG5hbWUgZm9yIHRoZSBub2RlLCBpZiBvbmUgaXMgYXZhaWxhYmxlLlxuICAgKlxuICAgKiBUaGlzIGlzIG9ubHkgc3VpdGVkIGZvciBkZWJ1Z2dpbmcuIEFueSBhY3R1YWwgcmVmZXJlbmNlcyB0byB0aGlzIG5vZGUgc2hvdWxkIGJlIG1hZGUgd2l0aFxuICAgKiBgdHMuSWRlbnRpZmllcmBzIChzZWUgYGdldElkZW50aXR5SW5gKS5cbiAgICovXG4gIGdldCBkZWJ1Z05hbWUoKTogc3RyaW5nfG51bGwge1xuICAgIGNvbnN0IGlkID0gaWRlbnRpZmllck9mTm9kZSh0aGlzLm5vZGUpO1xuICAgIHJldHVybiBpZCAhPT0gbnVsbCA/IGlkLnRleHQgOiBudWxsO1xuICB9XG5cbiAgZ2V0IGFsaWFzKCk6IEV4cHJlc3Npb258bnVsbCB7XG4gICAgcmV0dXJuIHRoaXMuX2FsaWFzO1xuICB9XG5cblxuICAvKipcbiAgICogUmVjb3JkIGEgYHRzLklkZW50aWZpZXJgIGJ5IHdoaWNoIGl0J3MgdmFsaWQgdG8gcmVmZXIgdG8gdGhpcyBub2RlLCB3aXRoaW4gdGhlIGNvbnRleHQgb2YgdGhpc1xuICAgKiBgUmVmZXJlbmNlYC5cbiAgICovXG4gIGFkZElkZW50aWZpZXIoaWRlbnRpZmllcjogdHMuSWRlbnRpZmllcik6IHZvaWQge1xuICAgIHRoaXMuaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYSBgdHMuSWRlbnRpZmllcmAgd2l0aGluIHRoaXMgYFJlZmVyZW5jZWAgdGhhdCBjYW4gYmUgdXNlZCB0byByZWZlciB3aXRoaW4gdGhlIGNvbnRleHQgb2YgYVxuICAgKiBnaXZlbiBgdHMuU291cmNlRmlsZWAsIGlmIGFueS5cbiAgICovXG4gIGdldElkZW50aXR5SW4oY29udGV4dDogdHMuU291cmNlRmlsZSk6IHRzLklkZW50aWZpZXJ8bnVsbCB7XG4gICAgcmV0dXJuIHRoaXMuaWRlbnRpZmllcnMuZmluZChpZCA9PiBpZC5nZXRTb3VyY2VGaWxlKCkgPT09IGNvbnRleHQpIHx8IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGEgYHRzLklkZW50aWZpZXJgIGZvciB0aGlzIGBSZWZlcmVuY2VgIHRoYXQgZXhpc3RzIHdpdGhpbiB0aGUgZ2l2ZW4gZXhwcmVzc2lvbi5cbiAgICpcbiAgICogVGhpcyBpcyB2ZXJ5IHVzZWZ1bCBmb3IgcHJvZHVjaW5nIGB0cy5EaWFnbm9zdGljYHMgdGhhdCByZWZlcmVuY2UgYFJlZmVyZW5jZWBzIHRoYXQgd2VyZVxuICAgKiBleHRyYWN0ZWQgZnJvbSBzb21lIGxhcmdlciBleHByZXNzaW9uLCBhcyBpdCBjYW4gYmUgdXNlZCB0byBwaW5wb2ludCB0aGUgYHRzLklkZW50aWZpZXJgIHdpdGhpblxuICAgKiB0aGUgZXhwcmVzc2lvbiBmcm9tIHdoaWNoIHRoZSBgUmVmZXJlbmNlYCBvcmlnaW5hdGVkLlxuICAgKi9cbiAgZ2V0SWRlbnRpdHlJbkV4cHJlc3Npb24oZXhwcjogdHMuRXhwcmVzc2lvbik6IHRzLklkZW50aWZpZXJ8bnVsbCB7XG4gICAgY29uc3Qgc2YgPSBleHByLmdldFNvdXJjZUZpbGUoKTtcbiAgICByZXR1cm4gdGhpcy5pZGVudGlmaWVycy5maW5kKGlkID0+IHtcbiAgICAgIGlmIChpZC5nZXRTb3VyY2VGaWxlKCkgIT09IHNmKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgLy8gVGhpcyBpZGVudGlmaWVyIGlzIGEgbWF0Y2ggaWYgaXRzIHBvc2l0aW9uIGxpZXMgd2l0aGluIHRoZSBnaXZlbiBleHByZXNzaW9uLlxuICAgICAgcmV0dXJuIGlkLnBvcyA+PSBleHByLnBvcyAmJiBpZC5lbmQgPD0gZXhwci5lbmQ7XG4gICAgfSkgfHxcbiAgICAgICAgbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHaXZlbiB0aGUgJ2NvbnRhaW5lcicgZXhwcmVzc2lvbiBmcm9tIHdoaWNoIHRoaXMgYFJlZmVyZW5jZWAgd2FzIGV4dHJhY3RlZCwgcHJvZHVjZSBhXG4gICAqIGB0cy5FeHByZXNzaW9uYCB0byB1c2UgaW4gYSBkaWFnbm9zdGljIHdoaWNoIGJlc3QgaW5kaWNhdGVzIHRoZSBwb3NpdGlvbiB3aXRoaW4gdGhlIGNvbnRhaW5lclxuICAgKiBleHByZXNzaW9uIHRoYXQgZ2VuZXJhdGVkIHRoZSBgUmVmZXJlbmNlYC5cbiAgICpcbiAgICogRm9yIGV4YW1wbGUsIGdpdmVuIGEgYFJlZmVyZW5jZWAgdG8gdGhlIGNsYXNzICdCYXInIGFuZCB0aGUgY29udGFpbmluZyBleHByZXNzaW9uOlxuICAgKiBgW0ZvbywgQmFyLCBCYXpdYCwgdGhpcyBmdW5jdGlvbiB3b3VsZCBhdHRlbXB0IHRvIHJldHVybiB0aGUgYHRzLklkZW50aWZpZXJgIGZvciBgQmFyYCB3aXRoaW5cbiAgICogdGhlIGFycmF5LiBUaGlzIGNvdWxkIGJlIHVzZWQgdG8gcHJvZHVjZSBhIG5pY2UgZGlhZ25vc3RpYyBjb250ZXh0OlxuICAgKlxuICAgKiBgYGB0ZXh0XG4gICAqIFtGb28sIEJhciwgQmF6XVxuICAgKiAgICAgICB+fn5cbiAgICogYGBgXG4gICAqXG4gICAqIElmIG5vIHNwZWNpZmljIG5vZGUgY2FuIGJlIGZvdW5kLCB0aGVuIHRoZSBgZmFsbGJhY2tgIGV4cHJlc3Npb24gaXMgdXNlZCwgd2hpY2ggZGVmYXVsdHMgdG8gdGhlXG4gICAqIGVudGlyZSBjb250YWluaW5nIGV4cHJlc3Npb24uXG4gICAqL1xuICBnZXRPcmlnaW5Gb3JEaWFnbm9zdGljcyhjb250YWluZXI6IHRzLkV4cHJlc3Npb24sIGZhbGxiYWNrOiB0cy5FeHByZXNzaW9uID0gY29udGFpbmVyKTpcbiAgICAgIHRzLkV4cHJlc3Npb24ge1xuICAgIGNvbnN0IGlkID0gdGhpcy5nZXRJZGVudGl0eUluRXhwcmVzc2lvbihjb250YWluZXIpO1xuICAgIHJldHVybiBpZCAhPT0gbnVsbCA/IGlkIDogZmFsbGJhY2s7XG4gIH1cblxuICBjbG9uZVdpdGhBbGlhcyhhbGlhczogRXhwcmVzc2lvbik6IFJlZmVyZW5jZTxUPiB7XG4gICAgY29uc3QgcmVmID0gbmV3IFJlZmVyZW5jZSh0aGlzLm5vZGUsIHRoaXMuYmVzdEd1ZXNzT3duaW5nTW9kdWxlKTtcbiAgICByZWYuaWRlbnRpZmllcnMgPSBbLi4udGhpcy5pZGVudGlmaWVyc107XG4gICAgcmVmLl9hbGlhcyA9IGFsaWFzO1xuICAgIHJldHVybiByZWY7XG4gIH1cblxuICBjbG9uZVdpdGhOb0lkZW50aWZpZXJzKCk6IFJlZmVyZW5jZTxUPiB7XG4gICAgY29uc3QgcmVmID0gbmV3IFJlZmVyZW5jZSh0aGlzLm5vZGUsIHRoaXMuYmVzdEd1ZXNzT3duaW5nTW9kdWxlKTtcbiAgICByZWYuX2FsaWFzID0gdGhpcy5fYWxpYXM7XG4gICAgcmVmLmlkZW50aWZpZXJzID0gW107XG4gICAgcmV0dXJuIHJlZjtcbiAgfVxufVxuIl19
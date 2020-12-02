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
        define("@angular/compiler-cli/src/ngtsc/imports/src/default", ["require", "exports", "typescript", "@angular/compiler-cli/src/ngtsc/util/src/typescript"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ts = require("typescript");
    var typescript_1 = require("@angular/compiler-cli/src/ngtsc/util/src/typescript");
    /**
     * An implementation of `DefaultImportRecorder` which does nothing.
     *
     * This is useful when default import tracking isn't required, such as when emitting .d.ts code
     * or for ngcc.
     */
    exports.NOOP_DEFAULT_IMPORT_RECORDER = {
        recordImportedIdentifier: function (id) { return void {}; },
        recordUsedIdentifier: function (id) { return void {}; },
    };
    /**
     * TypeScript has trouble with generating default imports inside of transformers for some module
     * formats. The issue is that for the statement:
     *
     * import X from 'some/module';
     * console.log(X);
     *
     * TypeScript will not use the "X" name in generated code. For normal user code, this is fine
     * because references to X will also be renamed. However, if both the import and any references are
     * added in a transformer, TypeScript does not associate the two, and will leave the "X" references
     * dangling while renaming the import variable. The generated code looks something like:
     *
     * const module_1 = require('some/module');
     * console.log(X); // now X is a dangling reference.
     *
     * Therefore, we cannot synthetically add default imports, and must reuse the imports that users
     * include. Doing this poses a challenge for imports that are only consumed in the type position in
     * the user's code. If Angular reuses the imported symbol in a value position (for example, we
     * see a constructor parameter of type Foo and try to write "inject(Foo)") we will also end up with
     * a dangling reference, as TS will elide the import because it was only used in the type position
     * originally.
     *
     * To avoid this, the compiler must "touch" the imports with `ts.getMutableClone`, and should
     * only do this for imports which are actually consumed. The `DefaultImportTracker` keeps track of
     * these imports as they're encountered and emitted, and implements a transform which can correctly
     * flag the imports as required.
     *
     * This problem does not exist for non-default imports as the compiler can easily insert
     * "import * as X" style imports for those, and the "X" identifier survives transformation.
     */
    var DefaultImportTracker = /** @class */ (function () {
        function DefaultImportTracker() {
            /**
             * A `Map` which tracks the `Map` of default import `ts.Identifier`s to their
             * `ts.ImportDeclaration`s. These declarations are not guaranteed to be used.
             */
            this.sourceFileToImportMap = new Map();
            /**
             * A `Map` which tracks the `Set` of `ts.ImportDeclaration`s for default imports that were used in
             * a given `ts.SourceFile` and need to be preserved.
             */
            this.sourceFileToUsedImports = new Map();
        }
        DefaultImportTracker.prototype.recordImportedIdentifier = function (id, decl) {
            var sf = typescript_1.getSourceFile(id);
            if (!this.sourceFileToImportMap.has(sf)) {
                this.sourceFileToImportMap.set(sf, new Map());
            }
            this.sourceFileToImportMap.get(sf).set(id, decl);
        };
        DefaultImportTracker.prototype.recordUsedIdentifier = function (id) {
            var sf = typescript_1.getSourceFile(id);
            if (!this.sourceFileToImportMap.has(sf)) {
                // The identifier's source file has no registered default imports at all.
                return;
            }
            var identiferToDeclaration = this.sourceFileToImportMap.get(sf);
            if (!identiferToDeclaration.has(id)) {
                // The identifier isn't from a registered default import.
                return;
            }
            var decl = identiferToDeclaration.get(id);
            // Add the default import declaration to the set of used import declarations for the file.
            if (!this.sourceFileToUsedImports.has(sf)) {
                this.sourceFileToUsedImports.set(sf, new Set());
            }
            this.sourceFileToUsedImports.get(sf).add(decl);
        };
        /**
         * Get a `ts.TransformerFactory` which will preserve default imports that were previously marked
         * as used.
         *
         * This transformer must run after any other transformers which call `recordUsedIdentifier`.
         */
        DefaultImportTracker.prototype.importPreservingTransformer = function () {
            var _this = this;
            return function (context) {
                return function (sf) {
                    return _this.transformSourceFile(sf);
                };
            };
        };
        /**
         * Process a `ts.SourceFile` and replace any `ts.ImportDeclaration`s.
         */
        DefaultImportTracker.prototype.transformSourceFile = function (sf) {
            var originalSf = ts.getOriginalNode(sf);
            // Take a fast path if no import declarations need to be preserved in the file.
            if (!this.sourceFileToUsedImports.has(originalSf)) {
                return sf;
            }
            // There are declarations that need to be preserved.
            var importsToPreserve = this.sourceFileToUsedImports.get(originalSf);
            // Generate a new statement list which preserves any imports present in `importsToPreserve`.
            var statements = sf.statements.map(function (stmt) {
                if (ts.isImportDeclaration(stmt) && importsToPreserve.has(stmt)) {
                    // Preserving an import that's marked as unreferenced (type-only) is tricky in TypeScript.
                    //
                    // Various approaches have been tried, with mixed success:
                    //
                    // 1. Using `ts.updateImportDeclaration` does not cause the import to be retained.
                    //
                    // 2. Using `ts.createImportDeclaration` with the same `ts.ImportClause` causes the import
                    //    to correctly be retained, but when emitting CommonJS module format code, references
                    //    to the imported value will not match the import variable.
                    //
                    // 3. Emitting "import * as" imports instead generates the correct import variable, but
                    //    references are missing the ".default" access. This happens to work for tsickle code
                    //    with goog.module transformations as tsickle strips the ".default" anyway.
                    //
                    // 4. It's possible to trick TypeScript by setting `ts.NodeFlag.Synthesized` on the import
                    //    declaration. This causes the import to be correctly retained and generated, but can
                    //    violate invariants elsewhere in the compiler and cause crashes.
                    //
                    // 5. Using `ts.getMutableClone` seems to correctly preserve the import and correctly
                    //    generate references to the import variable across all module types.
                    //
                    // Therefore, option 5 is the one used here. It seems to be implemented as the correct way
                    // to perform option 4, which preserves all the compiler's invariants.
                    //
                    // TODO(alxhub): discuss with the TypeScript team and determine if there's a better way to
                    // deal with this issue.
                    stmt = ts.getMutableClone(stmt);
                }
                return stmt;
            });
            // Save memory - there's no need to keep these around once the transform has run for the given
            // file.
            this.sourceFileToImportMap.delete(originalSf);
            this.sourceFileToUsedImports.delete(originalSf);
            return ts.updateSourceFileNode(sf, statements);
        };
        return DefaultImportTracker;
    }());
    exports.DefaultImportTracker = DefaultImportTracker;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbXBpbGVyLWNsaS9zcmMvbmd0c2MvaW1wb3J0cy9zcmMvZGVmYXVsdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7Ozs7Ozs7Ozs7OztJQUVILCtCQUFpQztJQUVqQyxrRkFBd0Q7SUE2QnhEOzs7OztPQUtHO0lBQ1UsUUFBQSw0QkFBNEIsR0FBMEI7UUFDakUsd0JBQXdCLEVBQUUsVUFBQyxFQUFpQixJQUFLLE9BQUEsS0FBSSxFQUFFLEVBQU4sQ0FBTTtRQUN2RCxvQkFBb0IsRUFBRSxVQUFDLEVBQWlCLElBQUssT0FBQSxLQUFJLEVBQUUsRUFBTixDQUFNO0tBQ3BELENBQUM7SUFFRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0E2Qkc7SUFDSDtRQUFBO1lBQ0U7OztlQUdHO1lBQ0ssMEJBQXFCLEdBQ3pCLElBQUksR0FBRyxFQUEyRCxDQUFDO1lBRXZFOzs7ZUFHRztZQUNLLDRCQUF1QixHQUFHLElBQUksR0FBRyxFQUE0QyxDQUFDO1FBaUd4RixDQUFDO1FBaEdDLHVEQUF3QixHQUF4QixVQUF5QixFQUFpQixFQUFFLElBQTBCO1lBQ3BFLElBQU0sRUFBRSxHQUFHLDBCQUFhLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDN0IsSUFBSSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUU7Z0JBQ3ZDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLElBQUksR0FBRyxFQUF1QyxDQUFDLENBQUM7YUFDcEY7WUFDRCxJQUFJLENBQUMscUJBQXFCLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDcEQsQ0FBQztRQUVELG1EQUFvQixHQUFwQixV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RCxPQUFPLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQyxFQUFFLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFDakQsQ0FBQztRQUNILDJCQUFDO0lBQUQsQ0FBQyxBQTdHRCxJQTZHQztJQTdHWSxvREFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCAqIGFzIHRzIGZyb20gJ3R5cGVzY3JpcHQnO1xuXG5pbXBvcnQge2dldFNvdXJjZUZpbGV9IGZyb20gJy4uLy4uL3V0aWwvc3JjL3R5cGVzY3JpcHQnO1xuXG4vKipcbiAqIFJlZ2lzdGVycyBhbmQgcmVjb3JkcyB1c2FnZXMgb2YgYHRzLklkZW50aWZlcmBzIHRoYXQgY2FtZSBmcm9tIGRlZmF1bHQgaW1wb3J0IHN0YXRlbWVudHMuXG4gKlxuICogU2VlIGBEZWZhdWx0SW1wb3J0VHJhY2tlcmAgZm9yIGRldGFpbHMuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgRGVmYXVsdEltcG9ydFJlY29yZGVyIHtcbiAgLyoqXG4gICAqIFJlY29yZCBhbiBhc3NvY2lhdGlvbiBiZXR3ZWVuIGEgYHRzLklkZW50aWZpZXJgIHdoaWNoIG1pZ2h0IGJlIGVtaXR0ZWQgYW5kIHRoZVxuICAgKiBgdHMuSW1wb3J0RGVjbGFyYXRpb25gIGZyb20gd2hpY2ggaXQgY2FtZS5cbiAgICpcbiAgICogQWxvbmUsIHRoaXMgbWV0aG9kIGhhcyBubyBlZmZlY3QgYXMgdGhlIGB0cy5JZGVudGlmaWVyYCBtaWdodCBub3QgYmUgdXNlZCBpbiB0aGUgb3V0cHV0LlxuICAgKiBUaGUgaWRlbnRpZmllciBtdXN0IGxhdGVyIGJlIG1hcmtlZCBhcyB1c2VkIHdpdGggYHJlY29yZFVzZWRJZGVudGlmaWVyYCBpbiBvcmRlciBmb3IgaXRzXG4gICAqIGltcG9ydCB0byBiZSBwcmVzZXJ2ZWQuXG4gICAqL1xuICByZWNvcmRJbXBvcnRlZElkZW50aWZpZXIoaWQ6IHRzLklkZW50aWZpZXIsIGRlY2w6IHRzLkltcG9ydERlY2xhcmF0aW9uKTogdm9pZDtcblxuICAvKipcbiAgICogUmVjb3JkIHRoZSBmYWN0IHRoYXQgdGhlIGdpdmVuIGB0cy5JZGVudGlmZXJgIHdpbGwgYmUgZW1pdHRlZCwgYW5kIHRodXMgaXRzXG4gICAqIGB0cy5JbXBvcnREZWNsYXJhdGlvbmAsIGlmIGl0IHdhcyBhIHByZXZpb3VzbHkgcmVnaXN0ZXJlZCBkZWZhdWx0IGltcG9ydCwgbXVzdCBiZSBwcmVzZXJ2ZWQuXG4gICAqXG4gICAqIFRoaXMgbWV0aG9kIGNhbiBiZSBjYWxsZWQgc2FmZWx5IGZvciBhbnkgYHRzLklkZW50aWZlcmAsIHJlZ2FyZGxlc3Mgb2YgaXRzIG9yaWdpbi4gSXQgd2lsbCBvbmx5XG4gICAqIGhhdmUgYW4gZWZmZWN0IGlmIHRoZSBpZGVudGlmaWVyIGNhbWUgZnJvbSBhIGB0cy5JbXBvcnREZWNsYXJhdGlvbmAgZGVmYXVsdCBpbXBvcnQgd2hpY2ggd2FzXG4gICAqIHByZXZpb3VzbHkgcmVnaXN0ZXJlZCB3aXRoIGByZWNvcmRJbXBvcnRlZElkZW50aWZpZXJgLlxuICAgKi9cbiAgcmVjb3JkVXNlZElkZW50aWZpZXIoaWQ6IHRzLklkZW50aWZpZXIpOiB2b2lkO1xufVxuXG4vKipcbiAqIEFuIGltcGxlbWVudGF0aW9uIG9mIGBEZWZhdWx0SW1wb3J0UmVjb3JkZXJgIHdoaWNoIGRvZXMgbm90aGluZy5cbiAqXG4gKiBUaGlzIGlzIHVzZWZ1bCB3aGVuIGRlZmF1bHQgaW1wb3J0IHRyYWNraW5nIGlzbid0IHJlcXVpcmVkLCBzdWNoIGFzIHdoZW4gZW1pdHRpbmcgLmQudHMgY29kZVxuICogb3IgZm9yIG5nY2MuXG4gKi9cbmV4cG9ydCBjb25zdCBOT09QX0RFRkFVTFRfSU1QT1JUX1JFQ09SREVSOiBEZWZhdWx0SW1wb3J0UmVjb3JkZXIgPSB7XG4gIHJlY29yZEltcG9ydGVkSWRlbnRpZmllcjogKGlkOiB0cy5JZGVudGlmaWVyKSA9PiB2b2lke30sXG4gIHJlY29yZFVzZWRJZGVudGlmaWVyOiAoaWQ6IHRzLklkZW50aWZpZXIpID0+IHZvaWR7fSxcbn07XG5cbi8qKlxuICogVHlwZVNjcmlwdCBoYXMgdHJvdWJsZSB3aXRoIGdlbmVyYXRpbmcgZGVmYXVsdCBpbXBvcnRzIGluc2lkZSBvZiB0cmFuc2Zvcm1lcnMgZm9yIHNvbWUgbW9kdWxlXG4gKiBmb3JtYXRzLiBUaGUgaXNzdWUgaXMgdGhhdCBmb3IgdGhlIHN0YXRlbWVudDpcbiAqXG4gKiBpbXBvcnQgWCBmcm9tICdzb21lL21vZHVsZSc7XG4gKiBjb25zb2xlLmxvZyhYKTtcbiAqXG4gKiBUeXBlU2NyaXB0IHdpbGwgbm90IHVzZSB0aGUgXCJYXCIgbmFtZSBpbiBnZW5lcmF0ZWQgY29kZS4gRm9yIG5vcm1hbCB1c2VyIGNvZGUsIHRoaXMgaXMgZmluZVxuICogYmVjYXVzZSByZWZlcmVuY2VzIHRvIFggd2lsbCBhbHNvIGJlIHJlbmFtZWQuIEhvd2V2ZXIsIGlmIGJvdGggdGhlIGltcG9ydCBhbmQgYW55IHJlZmVyZW5jZXMgYXJlXG4gKiBhZGRlZCBpbiBhIHRyYW5zZm9ybWVyLCBUeXBlU2NyaXB0IGRvZXMgbm90IGFzc29jaWF0ZSB0aGUgdHdvLCBhbmQgd2lsbCBsZWF2ZSB0aGUgXCJYXCIgcmVmZXJlbmNlc1xuICogZGFuZ2xpbmcgd2hpbGUgcmVuYW1pbmcgdGhlIGltcG9ydCB2YXJpYWJsZS4gVGhlIGdlbmVyYXRlZCBjb2RlIGxvb2tzIHNvbWV0aGluZyBsaWtlOlxuICpcbiAqIGNvbnN0IG1vZHVsZV8xID0gcmVxdWlyZSgnc29tZS9tb2R1bGUnKTtcbiAqIGNvbnNvbGUubG9nKFgpOyAvLyBub3cgWCBpcyBhIGRhbmdsaW5nIHJlZmVyZW5jZS5cbiAqXG4gKiBUaGVyZWZvcmUsIHdlIGNhbm5vdCBzeW50aGV0aWNhbGx5IGFkZCBkZWZhdWx0IGltcG9ydHMsIGFuZCBtdXN0IHJldXNlIHRoZSBpbXBvcnRzIHRoYXQgdXNlcnNcbiAqIGluY2x1ZGUuIERvaW5nIHRoaXMgcG9zZXMgYSBjaGFsbGVuZ2UgZm9yIGltcG9ydHMgdGhhdCBhcmUgb25seSBjb25zdW1lZCBpbiB0aGUgdHlwZSBwb3NpdGlvbiBpblxuICogdGhlIHVzZXIncyBjb2RlLiBJZiBBbmd1bGFyIHJldXNlcyB0aGUgaW1wb3J0ZWQgc3ltYm9sIGluIGEgdmFsdWUgcG9zaXRpb24gKGZvciBleGFtcGxlLCB3ZVxuICogc2VlIGEgY29uc3RydWN0b3IgcGFyYW1ldGVyIG9mIHR5cGUgRm9vIGFuZCB0cnkgdG8gd3JpdGUgXCJpbmplY3QoRm9vKVwiKSB3ZSB3aWxsIGFsc28gZW5kIHVwIHdpdGhcbiAqIGEgZGFuZ2xpbmcgcmVmZXJlbmNlLCBhcyBUUyB3aWxsIGVsaWRlIHRoZSBpbXBvcnQgYmVjYXVzZSBpdCB3YXMgb25seSB1c2VkIGluIHRoZSB0eXBlIHBvc2l0aW9uXG4gKiBvcmlnaW5hbGx5LlxuICpcbiAqIFRvIGF2b2lkIHRoaXMsIHRoZSBjb21waWxlciBtdXN0IFwidG91Y2hcIiB0aGUgaW1wb3J0cyB3aXRoIGB0cy5nZXRNdXRhYmxlQ2xvbmVgLCBhbmQgc2hvdWxkXG4gKiBvbmx5IGRvIHRoaXMgZm9yIGltcG9ydHMgd2hpY2ggYXJlIGFjdHVhbGx5IGNvbnN1bWVkLiBUaGUgYERlZmF1bHRJbXBvcnRUcmFja2VyYCBrZWVwcyB0cmFjayBvZlxuICogdGhlc2UgaW1wb3J0cyBhcyB0aGV5J3JlIGVuY291bnRlcmVkIGFuZCBlbWl0dGVkLCBhbmQgaW1wbGVtZW50cyBhIHRyYW5zZm9ybSB3aGljaCBjYW4gY29ycmVjdGx5XG4gKiBmbGFnIHRoZSBpbXBvcnRzIGFzIHJlcXVpcmVkLlxuICpcbiAqIFRoaXMgcHJvYmxlbSBkb2VzIG5vdCBleGlzdCBmb3Igbm9uLWRlZmF1bHQgaW1wb3J0cyBhcyB0aGUgY29tcGlsZXIgY2FuIGVhc2lseSBpbnNlcnRcbiAqIFwiaW1wb3J0ICogYXMgWFwiIHN0eWxlIGltcG9ydHMgZm9yIHRob3NlLCBhbmQgdGhlIFwiWFwiIGlkZW50aWZpZXIgc3Vydml2ZXMgdHJhbnNmb3JtYXRpb24uXG4gKi9cbmV4cG9ydCBjbGFzcyBEZWZhdWx0SW1wb3J0VHJhY2tlciBpbXBsZW1lbnRzIERlZmF1bHRJbXBvcnRSZWNvcmRlciB7XG4gIC8qKlxuICAgKiBBIGBNYXBgIHdoaWNoIHRyYWNrcyB0aGUgYE1hcGAgb2YgZGVmYXVsdCBpbXBvcnQgYHRzLklkZW50aWZpZXJgcyB0byB0aGVpclxuICAgKiBgdHMuSW1wb3J0RGVjbGFyYXRpb25gcy4gVGhlc2UgZGVjbGFyYXRpb25zIGFyZSBub3QgZ3VhcmFudGVlZCB0byBiZSB1c2VkLlxuICAgKi9cbiAgcHJpdmF0ZSBzb3VyY2VGaWxlVG9JbXBvcnRNYXAgPVxuICAgICAgbmV3IE1hcDx0cy5Tb3VyY2VGaWxlLCBNYXA8dHMuSWRlbnRpZmllciwgdHMuSW1wb3J0RGVjbGFyYXRpb24+PigpO1xuXG4gIC8qKlxuICAgKiBBIGBNYXBgIHdoaWNoIHRyYWNrcyB0aGUgYFNldGAgb2YgYHRzLkltcG9ydERlY2xhcmF0aW9uYHMgZm9yIGRlZmF1bHQgaW1wb3J0cyB0aGF0IHdlcmUgdXNlZCBpblxuICAgKiBhIGdpdmVuIGB0cy5Tb3VyY2VGaWxlYCBhbmQgbmVlZCB0byBiZSBwcmVzZXJ2ZWQuXG4gICAqL1xuICBwcml2YXRlIHNvdXJjZUZpbGVUb1VzZWRJbXBvcnRzID0gbmV3IE1hcDx0cy5Tb3VyY2VGaWxlLCBTZXQ8dHMuSW1wb3J0RGVjbGFyYXRpb24+PigpO1xuICByZWNvcmRJbXBvcnRlZElkZW50aWZpZXIoaWQ6IHRzLklkZW50aWZpZXIsIGRlY2w6IHRzLkltcG9ydERlY2xhcmF0aW9uKTogdm9pZCB7XG4gICAgY29uc3Qgc2YgPSBnZXRTb3VyY2VGaWxlKGlkKTtcbiAgICBpZiAoIXRoaXMuc291cmNlRmlsZVRvSW1wb3J0TWFwLmhhcyhzZikpIHtcbiAgICAgIHRoaXMuc291cmNlRmlsZVRvSW1wb3J0TWFwLnNldChzZiwgbmV3IE1hcDx0cy5JZGVudGlmaWVyLCB0cy5JbXBvcnREZWNsYXJhdGlvbj4oKSk7XG4gICAgfVxuICAgIHRoaXMuc291cmNlRmlsZVRvSW1wb3J0TWFwLmdldChzZikhLnNldChpZCwgZGVjbCk7XG4gIH1cblxuICByZWNvcmRVc2VkSWRlbnRpZmllcihpZDogdHMuSWRlbnRpZmllcik6IHZvaWQge1xuICAgIGNvbnN0IHNmID0gZ2V0U291cmNlRmlsZShpZCk7XG4gICAgaWYgKCF0aGlzLnNvdXJjZUZpbGVUb0ltcG9ydE1hcC5oYXMoc2YpKSB7XG4gICAgICAvLyBUaGUgaWRlbnRpZmllcidzIHNvdXJjZSBmaWxlIGhhcyBubyByZWdpc3RlcmVkIGRlZmF1bHQgaW1wb3J0cyBhdCBhbGwuXG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGlkZW50aWZlclRvRGVjbGFyYXRpb24gPSB0aGlzLnNvdXJjZUZpbGVUb0ltcG9ydE1hcC5nZXQoc2YpITtcbiAgICBpZiAoIWlkZW50aWZlclRvRGVjbGFyYXRpb24uaGFzKGlkKSkge1xuICAgICAgLy8gVGhlIGlkZW50aWZpZXIgaXNuJ3QgZnJvbSBhIHJlZ2lzdGVyZWQgZGVmYXVsdCBpbXBvcnQuXG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGRlY2wgPSBpZGVudGlmZXJUb0RlY2xhcmF0aW9uLmdldChpZCkhO1xuXG4gICAgLy8gQWRkIHRoZSBkZWZhdWx0IGltcG9ydCBkZWNsYXJhdGlvbiB0byB0aGUgc2V0IG9mIHVzZWQgaW1wb3J0IGRlY2xhcmF0aW9ucyBmb3IgdGhlIGZpbGUuXG4gICAgaWYgKCF0aGlzLnNvdXJjZUZpbGVUb1VzZWRJbXBvcnRzLmhhcyhzZikpIHtcbiAgICAgIHRoaXMuc291cmNlRmlsZVRvVXNlZEltcG9ydHMuc2V0KHNmLCBuZXcgU2V0PHRzLkltcG9ydERlY2xhcmF0aW9uPigpKTtcbiAgICB9XG4gICAgdGhpcy5zb3VyY2VGaWxlVG9Vc2VkSW1wb3J0cy5nZXQoc2YpIS5hZGQoZGVjbCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGEgYHRzLlRyYW5zZm9ybWVyRmFjdG9yeWAgd2hpY2ggd2lsbCBwcmVzZXJ2ZSBkZWZhdWx0IGltcG9ydHMgdGhhdCB3ZXJlIHByZXZpb3VzbHkgbWFya2VkXG4gICAqIGFzIHVzZWQuXG4gICAqXG4gICAqIFRoaXMgdHJhbnNmb3JtZXIgbXVzdCBydW4gYWZ0ZXIgYW55IG90aGVyIHRyYW5zZm9ybWVycyB3aGljaCBjYWxsIGByZWNvcmRVc2VkSWRlbnRpZmllcmAuXG4gICAqL1xuICBpbXBvcnRQcmVzZXJ2aW5nVHJhbnNmb3JtZXIoKTogdHMuVHJhbnNmb3JtZXJGYWN0b3J5PHRzLlNvdXJjZUZpbGU+IHtcbiAgICByZXR1cm4gKGNvbnRleHQ6IHRzLlRyYW5zZm9ybWF0aW9uQ29udGV4dCkgPT4ge1xuICAgICAgcmV0dXJuIChzZjogdHMuU291cmNlRmlsZSkgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy50cmFuc2Zvcm1Tb3VyY2VGaWxlKHNmKTtcbiAgICAgIH07XG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm9jZXNzIGEgYHRzLlNvdXJjZUZpbGVgIGFuZCByZXBsYWNlIGFueSBgdHMuSW1wb3J0RGVjbGFyYXRpb25gcy5cbiAgICovXG4gIHByaXZhdGUgdHJhbnNmb3JtU291cmNlRmlsZShzZjogdHMuU291cmNlRmlsZSk6IHRzLlNvdXJjZUZpbGUge1xuICAgIGNvbnN0IG9yaWdpbmFsU2YgPSB0cy5nZXRPcmlnaW5hbE5vZGUoc2YpIGFzIHRzLlNvdXJjZUZpbGU7XG4gICAgLy8gVGFrZSBhIGZhc3QgcGF0aCBpZiBubyBpbXBvcnQgZGVjbGFyYXRpb25zIG5lZWQgdG8gYmUgcHJlc2VydmVkIGluIHRoZSBmaWxlLlxuICAgIGlmICghdGhpcy5zb3VyY2VGaWxlVG9Vc2VkSW1wb3J0cy5oYXMob3JpZ2luYWxTZikpIHtcbiAgICAgIHJldHVybiBzZjtcbiAgICB9XG5cbiAgICAvLyBUaGVyZSBhcmUgZGVjbGFyYXRpb25zIHRoYXQgbmVlZCB0byBiZSBwcmVzZXJ2ZWQuXG4gICAgY29uc3QgaW1wb3J0c1RvUHJlc2VydmUgPSB0aGlzLnNvdXJjZUZpbGVUb1VzZWRJbXBvcnRzLmdldChvcmlnaW5hbFNmKSE7XG5cbiAgICAvLyBHZW5lcmF0ZSBhIG5ldyBzdGF0ZW1lbnQgbGlzdCB3aGljaCBwcmVzZXJ2ZXMgYW55IGltcG9ydHMgcHJlc2VudCBpbiBgaW1wb3J0c1RvUHJlc2VydmVgLlxuICAgIGNvbnN0IHN0YXRlbWVudHMgPSBzZi5zdGF0ZW1lbnRzLm1hcChzdG10ID0+IHtcbiAgICAgIGlmICh0cy5pc0ltcG9ydERlY2xhcmF0aW9uKHN0bXQpICYmIGltcG9ydHNUb1ByZXNlcnZlLmhhcyhzdG10KSkge1xuICAgICAgICAvLyBQcmVzZXJ2aW5nIGFuIGltcG9ydCB0aGF0J3MgbWFya2VkIGFzIHVucmVmZXJlbmNlZCAodHlwZS1vbmx5KSBpcyB0cmlja3kgaW4gVHlwZVNjcmlwdC5cbiAgICAgICAgLy9cbiAgICAgICAgLy8gVmFyaW91cyBhcHByb2FjaGVzIGhhdmUgYmVlbiB0cmllZCwgd2l0aCBtaXhlZCBzdWNjZXNzOlxuICAgICAgICAvL1xuICAgICAgICAvLyAxLiBVc2luZyBgdHMudXBkYXRlSW1wb3J0RGVjbGFyYXRpb25gIGRvZXMgbm90IGNhdXNlIHRoZSBpbXBvcnQgdG8gYmUgcmV0YWluZWQuXG4gICAgICAgIC8vXG4gICAgICAgIC8vIDIuIFVzaW5nIGB0cy5jcmVhdGVJbXBvcnREZWNsYXJhdGlvbmAgd2l0aCB0aGUgc2FtZSBgdHMuSW1wb3J0Q2xhdXNlYCBjYXVzZXMgdGhlIGltcG9ydFxuICAgICAgICAvLyAgICB0byBjb3JyZWN0bHkgYmUgcmV0YWluZWQsIGJ1dCB3aGVuIGVtaXR0aW5nIENvbW1vbkpTIG1vZHVsZSBmb3JtYXQgY29kZSwgcmVmZXJlbmNlc1xuICAgICAgICAvLyAgICB0byB0aGUgaW1wb3J0ZWQgdmFsdWUgd2lsbCBub3QgbWF0Y2ggdGhlIGltcG9ydCB2YXJpYWJsZS5cbiAgICAgICAgLy9cbiAgICAgICAgLy8gMy4gRW1pdHRpbmcgXCJpbXBvcnQgKiBhc1wiIGltcG9ydHMgaW5zdGVhZCBnZW5lcmF0ZXMgdGhlIGNvcnJlY3QgaW1wb3J0IHZhcmlhYmxlLCBidXRcbiAgICAgICAgLy8gICAgcmVmZXJlbmNlcyBhcmUgbWlzc2luZyB0aGUgXCIuZGVmYXVsdFwiIGFjY2Vzcy4gVGhpcyBoYXBwZW5zIHRvIHdvcmsgZm9yIHRzaWNrbGUgY29kZVxuICAgICAgICAvLyAgICB3aXRoIGdvb2cubW9kdWxlIHRyYW5zZm9ybWF0aW9ucyBhcyB0c2lja2xlIHN0cmlwcyB0aGUgXCIuZGVmYXVsdFwiIGFueXdheS5cbiAgICAgICAgLy9cbiAgICAgICAgLy8gNC4gSXQncyBwb3NzaWJsZSB0byB0cmljayBUeXBlU2NyaXB0IGJ5IHNldHRpbmcgYHRzLk5vZGVGbGFnLlN5bnRoZXNpemVkYCBvbiB0aGUgaW1wb3J0XG4gICAgICAgIC8vICAgIGRlY2xhcmF0aW9uLiBUaGlzIGNhdXNlcyB0aGUgaW1wb3J0IHRvIGJlIGNvcnJlY3RseSByZXRhaW5lZCBhbmQgZ2VuZXJhdGVkLCBidXQgY2FuXG4gICAgICAgIC8vICAgIHZpb2xhdGUgaW52YXJpYW50cyBlbHNld2hlcmUgaW4gdGhlIGNvbXBpbGVyIGFuZCBjYXVzZSBjcmFzaGVzLlxuICAgICAgICAvL1xuICAgICAgICAvLyA1LiBVc2luZyBgdHMuZ2V0TXV0YWJsZUNsb25lYCBzZWVtcyB0byBjb3JyZWN0bHkgcHJlc2VydmUgdGhlIGltcG9ydCBhbmQgY29ycmVjdGx5XG4gICAgICAgIC8vICAgIGdlbmVyYXRlIHJlZmVyZW5jZXMgdG8gdGhlIGltcG9ydCB2YXJpYWJsZSBhY3Jvc3MgYWxsIG1vZHVsZSB0eXBlcy5cbiAgICAgICAgLy9cbiAgICAgICAgLy8gVGhlcmVmb3JlLCBvcHRpb24gNSBpcyB0aGUgb25lIHVzZWQgaGVyZS4gSXQgc2VlbXMgdG8gYmUgaW1wbGVtZW50ZWQgYXMgdGhlIGNvcnJlY3Qgd2F5XG4gICAgICAgIC8vIHRvIHBlcmZvcm0gb3B0aW9uIDQsIHdoaWNoIHByZXNlcnZlcyBhbGwgdGhlIGNvbXBpbGVyJ3MgaW52YXJpYW50cy5cbiAgICAgICAgLy9cbiAgICAgICAgLy8gVE9ETyhhbHhodWIpOiBkaXNjdXNzIHdpdGggdGhlIFR5cGVTY3JpcHQgdGVhbSBhbmQgZGV0ZXJtaW5lIGlmIHRoZXJlJ3MgYSBiZXR0ZXIgd2F5IHRvXG4gICAgICAgIC8vIGRlYWwgd2l0aCB0aGlzIGlzc3VlLlxuICAgICAgICBzdG10ID0gdHMuZ2V0TXV0YWJsZUNsb25lKHN0bXQpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHN0bXQ7XG4gICAgfSk7XG5cbiAgICAvLyBTYXZlIG1lbW9yeSAtIHRoZXJlJ3Mgbm8gbmVlZCB0byBrZWVwIHRoZXNlIGFyb3VuZCBvbmNlIHRoZSB0cmFuc2Zvcm0gaGFzIHJ1biBmb3IgdGhlIGdpdmVuXG4gICAgLy8gZmlsZS5cbiAgICB0aGlzLnNvdXJjZUZpbGVUb0ltcG9ydE1hcC5kZWxldGUob3JpZ2luYWxTZik7XG4gICAgdGhpcy5zb3VyY2VGaWxlVG9Vc2VkSW1wb3J0cy5kZWxldGUob3JpZ2luYWxTZik7XG5cbiAgICByZXR1cm4gdHMudXBkYXRlU291cmNlRmlsZU5vZGUoc2YsIHN0YXRlbWVudHMpO1xuICB9XG59XG4iXX0=
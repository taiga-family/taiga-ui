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
        define("@angular/compiler-cli/src/metadata/symbols", ["require", "exports", "tslib", "typescript"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = require("tslib");
    var ts = require("typescript");
    var Symbols = /** @class */ (function () {
        function Symbols(sourceFile) {
            this.sourceFile = sourceFile;
            this.references = new Map();
        }
        Symbols.prototype.resolve = function (name, preferReference) {
            return (preferReference && this.references.get(name)) || this.symbols.get(name);
        };
        Symbols.prototype.define = function (name, value) {
            this.symbols.set(name, value);
        };
        Symbols.prototype.defineReference = function (name, value) {
            this.references.set(name, value);
        };
        Symbols.prototype.has = function (name) {
            return this.symbols.has(name);
        };
        Object.defineProperty(Symbols.prototype, "symbols", {
            get: function () {
                var result = this._symbols;
                if (!result) {
                    result = this._symbols = new Map();
                    populateBuiltins(result);
                    this.buildImports();
                }
                return result;
            },
            enumerable: true,
            configurable: true
        });
        Symbols.prototype.buildImports = function () {
            var _this = this;
            var symbols = this._symbols;
            // Collect the imported symbols into this.symbols
            var stripQuotes = function (s) { return s.replace(/^['"]|['"]$/g, ''); };
            var visit = function (node) {
                var e_1, _a;
                switch (node.kind) {
                    case ts.SyntaxKind.ImportEqualsDeclaration:
                        var importEqualsDeclaration = node;
                        if (importEqualsDeclaration.moduleReference.kind ===
                            ts.SyntaxKind.ExternalModuleReference) {
                            var externalReference = importEqualsDeclaration.moduleReference;
                            if (externalReference.expression) {
                                // An `import <identifier> = require(<module-specifier>);
                                if (!externalReference.expression.parent) {
                                    // The `parent` field of a node is set by the TypeScript binder (run as
                                    // part of the type checker). Setting it here allows us to call `getText()`
                                    // even if the `SourceFile` was not type checked (which looks for `SourceFile`
                                    // in the parent chain). This doesn't damage the node as the binder unconditionally
                                    // sets the parent.
                                    externalReference.expression.parent = externalReference;
                                    externalReference.parent = _this.sourceFile;
                                }
                                var from_1 = stripQuotes(externalReference.expression.getText());
                                symbols.set(importEqualsDeclaration.name.text, { __symbolic: 'reference', module: from_1 });
                                break;
                            }
                        }
                        symbols.set(importEqualsDeclaration.name.text, { __symbolic: 'error', message: "Unsupported import syntax" });
                        break;
                    case ts.SyntaxKind.ImportDeclaration:
                        var importDecl = node;
                        if (!importDecl.importClause) {
                            // An `import <module-specifier>` clause which does not bring symbols into scope.
                            break;
                        }
                        if (!importDecl.moduleSpecifier.parent) {
                            // See note above in the `ImportEqualDeclaration` case.
                            importDecl.moduleSpecifier.parent = importDecl;
                            importDecl.parent = _this.sourceFile;
                        }
                        var from = stripQuotes(importDecl.moduleSpecifier.getText());
                        if (importDecl.importClause.name) {
                            // An `import <identifier> form <module-specifier>` clause. Record the default symbol.
                            symbols.set(importDecl.importClause.name.text, { __symbolic: 'reference', module: from, default: true });
                        }
                        var bindings = importDecl.importClause.namedBindings;
                        if (bindings) {
                            switch (bindings.kind) {
                                case ts.SyntaxKind.NamedImports:
                                    try {
                                        // An `import { [<identifier> [, <identifier>] } from <module-specifier>` clause
                                        for (var _b = tslib_1.__values(bindings.elements), _c = _b.next(); !_c.done; _c = _b.next()) {
                                            var binding = _c.value;
                                            symbols.set(binding.name.text, {
                                                __symbolic: 'reference',
                                                module: from,
                                                name: binding.propertyName ? binding.propertyName.text : binding.name.text
                                            });
                                        }
                                    }
                                    catch (e_1_1) { e_1 = { error: e_1_1 }; }
                                    finally {
                                        try {
                                            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                                        }
                                        finally { if (e_1) throw e_1.error; }
                                    }
                                    break;
                                case ts.SyntaxKind.NamespaceImport:
                                    // An `input * as <identifier> from <module-specifier>` clause.
                                    symbols.set(bindings.name.text, { __symbolic: 'reference', module: from });
                                    break;
                            }
                        }
                        break;
                }
                ts.forEachChild(node, visit);
            };
            if (this.sourceFile) {
                ts.forEachChild(this.sourceFile, visit);
            }
        };
        return Symbols;
    }());
    exports.Symbols = Symbols;
    function populateBuiltins(symbols) {
        // From lib.core.d.ts (all "define const")
        ['Object', 'Function', 'String', 'Number', 'Array', 'Boolean', 'Map', 'NaN', 'Infinity', 'Math',
            'Date', 'RegExp', 'Error', 'Error', 'EvalError', 'RangeError', 'ReferenceError', 'SyntaxError',
            'TypeError', 'URIError', 'JSON', 'ArrayBuffer', 'DataView', 'Int8Array', 'Uint8Array',
            'Uint8ClampedArray', 'Uint16Array', 'Int16Array', 'Int32Array', 'Uint32Array', 'Float32Array',
            'Float64Array']
            .forEach(function (name) { return symbols.set(name, { __symbolic: 'reference', name: name }); });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3ltYm9scy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbXBpbGVyLWNsaS9zcmMvbWV0YWRhdGEvc3ltYm9scy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7Ozs7Ozs7Ozs7Ozs7SUFFSCwrQkFBaUM7SUFJakM7UUFLRSxpQkFBb0IsVUFBeUI7WUFBekIsZUFBVSxHQUFWLFVBQVUsQ0FBZTtZQUZyQyxlQUFVLEdBQUcsSUFBSSxHQUFHLEVBQStDLENBQUM7UUFFNUIsQ0FBQztRQUVqRCx5QkFBTyxHQUFQLFVBQVEsSUFBWSxFQUFFLGVBQXlCO1lBQzdDLE9BQU8sQ0FBQyxlQUFlLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsRixDQUFDO1FBRUQsd0JBQU0sR0FBTixVQUFPLElBQVksRUFBRSxLQUFvQjtZQUN2QyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDaEMsQ0FBQztRQUNELGlDQUFlLEdBQWYsVUFBZ0IsSUFBWSxFQUFFLEtBQTBDO1lBQ3RFLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNuQyxDQUFDO1FBRUQscUJBQUcsR0FBSCxVQUFJLElBQVk7WUFDZCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2hDLENBQUM7UUFFRCxzQkFBWSw0QkFBTztpQkFBbkI7Z0JBQ0UsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztnQkFDM0IsSUFBSSxDQUFDLE1BQU0sRUFBRTtvQkFDWCxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsR0FBRyxJ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Z0IsQ0FBQyxPQUFtQztRQUMzRCwwQ0FBMEM7UUFDMUMsQ0FBQyxRQUFRLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxNQUFNO1lBQzlGLE1BQU0sRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLGdCQUFnQixFQUFFLGFBQWE7WUFDOUYsV0FBVyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsYUFBYSxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsWUFBWTtZQUNyRixtQkFBbUIsRUFBRSxhQUFhLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxhQUFhLEVBQUUsY0FBYztZQUM3RixjQUFjLENBQUM7YUFDWCxPQUFPLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFDLFVBQVUsRUFBRSxXQUFXLEVBQUUsSUFBSSxNQUFBLEVBQUMsQ0FBQyxFQUFsRCxDQUFrRCxDQUFDLENBQUM7SUFDM0UsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0ICogYXMgdHMgZnJvbSAndHlwZXNjcmlwdCc7XG5cbmltcG9ydCB7TWV0YWRhdGFTeW1ib2xpY1JlZmVyZW5jZUV4cHJlc3Npb24sIE1ldGFkYXRhVmFsdWV9IGZyb20gJy4vc2NoZW1hJztcblxuZXhwb3J0IGNsYXNzIFN5bWJvbHMge1xuICAvLyBUT0RPKGlzc3VlLzI0NTcxKTogcmVtb3ZlICchJy5cbiAgcHJpdmF0ZSBfc3ltYm9scyE6IE1hcDxzdHJpbmcsIE1ldGFkYXRhVmFsdWU+O1xuICBwcml2YXRlIHJlZmVyZW5jZXMgPSBuZXcgTWFwPHN0cmluZywgTWV0YWRhdGFTeW1ib2xpY1JlZmVyZW5jZUV4cHJlc3Npb24+KCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzb3VyY2VGaWxlOiB0cy5Tb3VyY2VGaWxlKSB7fVxuXG4gIHJlc29sdmUobmFtZTogc3RyaW5nLCBwcmVmZXJSZWZlcmVuY2U/OiBib29sZWFuKTogTWV0YWRhdGFWYWx1ZXx1bmRlZmluZWQge1xuICAgIHJldHVybiAocHJlZmVyUmVmZXJlbmNlICYmIHRoaXMucmVmZXJlbmNlcy5nZXQobmFtZSkpIHx8IHRoaXMuc3ltYm9scy5nZXQobmFtZSk7XG4gIH1cblxuICBkZWZpbmUobmFtZTogc3RyaW5nLCB2YWx1ZTogTWV0YWRhdGFWYWx1ZSkge1xuICAgIHRoaXMuc3ltYm9scy5zZXQobmFtZSwgdmFsdWUpO1xuICB9XG4gIGRlZmluZVJlZmVyZW5jZShuYW1lOiBzdHJpbmcsIHZhbHVlOiBNZXRhZGF0YVN5bWJvbGljUmVmZXJlbmNlRXhwcmVzc2lvbikge1xuICAgIHRoaXMucmVmZXJlbmNlcy5zZXQobmFtZSwgdmFsdWUpO1xuICB9XG5cbiAgaGFzKG5hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnN5bWJvbHMuaGFzKG5hbWUpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXQgc3ltYm9scygpOiBNYXA8c3RyaW5nLCBNZXRhZGF0YVZhbHVlPiB7XG4gICAgbGV0IHJlc3VsdCA9IHRoaXMuX3N5bWJvbHM7XG4gICAgaWYgKCFyZXN1bHQpIHtcbiAgICAgIHJlc3VsdCA9IHRoaXMuX3N5bWJvbHMgPSBuZXcgTWFwPHN0cmluZywgTWV0YWRhdGFWYWx1ZT4oKTtcbiAgICAgIHBvcHVsYXRlQnVpbHRpbnMocmVzdWx0KTtcbiAgICAgIHRoaXMuYnVpbGRJbXBvcnRzKCk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBwcml2YXRlIGJ1aWxkSW1wb3J0cygpOiB2b2lkIHtcbiAgICBjb25zdCBzeW1ib2xzID0gdGhpcy5fc3ltYm9scztcbiAgICAvLyBDb2xsZWN0IHRoZSBpbXBvcnRlZCBzeW1ib2xzIGludG8gdGhpcy5zeW1ib2xzXG4gICAgY29uc3Qgc3RyaXBRdW90ZXMgPSAoczogc3RyaW5nKSA9PiBzLnJlcGxhY2UoL15bJ1wiXXxbJ1wiXSQvZywgJycpO1xuICAgIGNvbnN0IHZpc2l0ID0gKG5vZGU6IHRzLk5vZGUpID0+IHtcbiAgICAgIHN3aXRjaCAobm9kZS5raW5kKSB7XG4gICAgICAgIGNhc2UgdHMuU3ludGF4S2luZC5JbXBvcnRFcXVhbHNEZWNsYXJhdGlvbjpcbiAgICAgICAgICBjb25zdCBpbXBvcnRFcXVhbHNEZWNsYXJhdGlvbiA9IDx0cy5JbXBvcnRFcXVhbHNEZWNsYXJhdGlvbj5ub2RlO1xuICAgICAgICAgIGlmIChpbXBvcnRFcXVhbHNEZWNsYXJhdGlvbi5tb2R1bGVSZWZlcmVuY2Uua2luZCA9PT1cbiAgICAgICAgICAgICAgdHMuU3ludGF4S2luZC5FeHRlcm5hbE1vZHVsZVJlZmVyZW5jZSkge1xuICAgICAgICAgICAgY29uc3QgZXh0ZXJuYWxSZWZlcmVuY2UgPVxuICAgICAgICAgICAgICAgIDx0cy5FeHRlcm5hbE1vZHVsZVJlZmVyZW5jZT5pbXBvcnRFcXVhbHNEZWNsYXJhdGlvbi5tb2R1bGVSZWZlcmVuY2U7XG4gICAgICAgICAgICBpZiAoZXh0ZXJuYWxSZWZlcmVuY2UuZXhwcmVzc2lvbikge1xuICAgICAgICAgICAgICAvLyBBbiBgaW1wb3J0IDxpZGVudGlmaWVyPiA9IHJlcXVpcmUoPG1vZHVsZS1zcGVjaWZpZXI+KTtcbiAgICAgICAgICAgICAgaWYgKCFleHRlcm5hbFJlZmVyZW5jZS5leHByZXNzaW9uLnBhcmVudCkge1xuICAgICAgICAgICAgICAgIC8vIFRoZSBgcGFyZW50YCBmaWVsZCBvZiBhIG5vZGUgaXMgc2V0IGJ5IHRoZSBUeXBlU2NyaXB0IGJpbmRlciAocnVuIGFzXG4gICAgICAgICAgICAgICAgLy8gcGFydCBvZiB0aGUgdHlwZSBjaGVja2VyKS4gU2V0dGluZyBpdCBoZXJlIGFsbG93cyB1cyB0byBjYWxsIGBnZXRUZXh0KClgXG4gICAgICAgICAgICAgICAgLy8gZXZlbiBpZiB0aGUgYFNvdXJjZUZpbGVgIHdhcyBub3QgdHlwZSBjaGVja2VkICh3aGljaCBsb29rcyBmb3IgYFNvdXJjZUZpbGVgXG4gICAgICAgICAgICAgICAgLy8gaW4gdGhlIHBhcmVudCBjaGFpbikuIFRoaXMgZG9lc24ndCBkYW1hZ2UgdGhlIG5vZGUgYXMgdGhlIGJpbmRlciB1bmNvbmRpdGlvbmFsbHlcbiAgICAgICAgICAgICAgICAvLyBzZXRzIHRoZSBwYXJlbnQuXG4gICAgICAgICAgICAgICAgZXh0ZXJuYWxSZWZlcmVuY2UuZXhwcmVzc2lvbi5wYXJlbnQgPSBleHRlcm5hbFJlZmVyZW5jZTtcbiAgICAgICAgICAgICAgICBleHRlcm5hbFJlZmVyZW5jZS5wYXJlbnQgPSB0aGlzLnNvdXJjZUZpbGUgYXMgYW55O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGNvbnN0IGZyb20gPSBzdHJpcFF1b3RlcyhleHRlcm5hbFJlZmVyZW5jZS5leHByZXNzaW9uLmdldFRleHQoKSk7XG4gICAgICAgICAgICAgIHN5bWJvbHMuc2V0KFxuICAgICAgICAgICAgICAgICAgaW1wb3J0RXF1YWxzRGVjbGFyYXRpb24ubmFtZS50ZXh0LCB7X19zeW1ib2xpYzogJ3JlZmVyZW5jZScsIG1vZHVsZTogZnJvbX0pO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgc3ltYm9scy5zZXQoXG4gICAgICAgICAgICAgIGltcG9ydEVxdWFsc0RlY2xhcmF0aW9uLm5hbWUudGV4dCxcbiAgICAgICAgICAgICAge19fc3ltYm9saWM6ICdlcnJvcicsIG1lc3NhZ2U6IGBVbnN1cHBvcnRlZCBpbXBvcnQgc3ludGF4YH0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIHRzLlN5bnRheEtpbmQuSW1wb3J0RGVjbGFyYXRpb246XG4gICAgICAgICAgY29uc3QgaW1wb3J0RGVjbCA9IDx0cy5JbXBvcnREZWNsYXJhdGlvbj5ub2RlO1xuICAgICAgICAgIGlmICghaW1wb3J0RGVjbC5pbXBvcnRDbGF1c2UpIHtcbiAgICAgICAgICAgIC8vIEFuIGBpbXBvcnQgPG1vZHVsZS1zcGVjaWZpZXI+YCBjbGF1c2Ugd2hpY2ggZG9lcyBub3QgYnJpbmcgc3ltYm9scyBpbnRvIHNjb3BlLlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghaW1wb3J0RGVjbC5tb2R1bGVTcGVjaWZpZXIucGFyZW50KSB7XG4gICAgICAgICAgICAvLyBTZWUgbm90ZSBhYm92ZSBpbiB0aGUgYEltcG9ydEVxdWFsRGVjbGFyYXRpb25gIGNhc2UuXG4gICAgICAgICAgICBpbXBvcnREZWNsLm1vZHVsZVNwZWNpZmllci5wYXJlbnQgPSBpbXBvcnREZWNsO1xuICAgICAgICAgICAgaW1wb3J0RGVjbC5wYXJlbnQgPSB0aGlzLnNvdXJjZUZpbGU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnN0IGZyb20gPSBzdHJpcFF1b3RlcyhpbXBvcnREZWNsLm1vZHVsZVNwZWNpZmllci5nZXRUZXh0KCkpO1xuICAgICAgICAgIGlmIChpbXBvcnREZWNsLmltcG9ydENsYXVzZS5uYW1lKSB7XG4gICAgICAgICAgICAvLyBBbiBgaW1wb3J0IDxpZGVudGlmaWVyPiBmb3JtIDxtb2R1bGUtc3BlY2lmaWVyPmAgY2xhdXNlLiBSZWNvcmQgdGhlIGRlZmF1bHQgc3ltYm9sLlxuICAgICAgICAgICAgc3ltYm9scy5zZXQoXG4gICAgICAgICAgICAgICAgaW1wb3J0RGVjbC5pbXBvcnRDbGF1c2UubmFtZS50ZXh0LFxuICAgICAgICAgICAgICAgIHtfX3N5bWJvbGljOiAncmVmZXJlbmNlJywgbW9kdWxlOiBmcm9tLCBkZWZhdWx0OiB0cnVlfSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnN0IGJpbmRpbmdzID0gaW1wb3J0RGVjbC5pbXBvcnRDbGF1c2UubmFtZWRCaW5kaW5ncztcbiAgICAgICAgICBpZiAoYmluZGluZ3MpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoYmluZGluZ3Mua2luZCkge1xuICAgICAgICAgICAgICBjYXNlIHRzLlN5bnRheEtpbmQuTmFtZWRJbXBvcnRzOlxuICAgICAgICAgICAgICAgIC8vIEFuIGBpbXBvcnQgeyBbPGlkZW50aWZpZXI+IFssIDxpZGVudGlmaWVyPl0gfSBmcm9tIDxtb2R1bGUtc3BlY2lmaWVyPmAgY2xhdXNlXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBiaW5kaW5nIG9mICg8dHMuTmFtZWRJbXBvcnRzPmJpbmRpbmdzKS5lbGVtZW50cykge1xuICAgICAgICAgICAgICAgICAgc3ltYm9scy5zZXQoYmluZGluZy5uYW1lLnRleHQsIHtcbiAgICAgICAgICAgICAgICAgICAgX19zeW1ib2xpYzogJ3JlZmVyZW5jZScsXG4gICAgICAgICAgICAgICAgICAgIG1vZHVsZTogZnJvbSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogYmluZGluZy5wcm9wZXJ0eU5hbWUgPyBiaW5kaW5nLnByb3BlcnR5TmFtZS50ZXh0IDogYmluZGluZy5uYW1lLnRleHRcbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSB0cy5TeW50YXhLaW5kLk5hbWVzcGFjZUltcG9ydDpcbiAgICAgICAgICAgICAgICAvLyBBbiBgaW5wdXQgKiBhcyA8aWRlbnRpZmllcj4gZnJvbSA8bW9kdWxlLXNwZWNpZmllcj5gIGNsYXVzZS5cbiAgICAgICAgICAgICAgICBzeW1ib2xzLnNldChcbiAgICAgICAgICAgICAgICAgICAgKDx0cy5OYW1lc3BhY2VJbXBvcnQ+YmluZGluZ3MpLm5hbWUudGV4dCxcbiAgICAgICAgICAgICAgICAgICAge19fc3ltYm9saWM6ICdyZWZlcmVuY2UnLCBtb2R1bGU6IGZyb219KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICB0cy5mb3JFYWNoQ2hpbGQobm9kZSwgdmlzaXQpO1xuICAgIH07XG4gICAgaWYgKHRoaXMuc291cmNlRmlsZSkge1xuICAgICAgdHMuZm9yRWFjaENoaWxkKHRoaXMuc291cmNlRmlsZSwgdmlzaXQpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBwb3B1bGF0ZUJ1aWx0aW5zKHN5bWJvbHM6IE1hcDxzdHJpbmcsIE1ldGFkYXRhVmFsdWU+KSB7XG4gIC8vIEZyb20gbGliLmNvcmUuZC50cyAoYWxsIFwiZGVmaW5lIGNvbnN0XCIpXG4gIFsnT2JqZWN0JywgJ0Z1bmN0aW9uJywgJ1N0cmluZycsICdOdW1iZXInLCAnQXJyYXknLCAnQm9vbGVhbicsICdNYXAnLCAnTmFOJywgJ0luZmluaXR5JywgJ01hdGgnLFxuICAgJ0RhdGUnLCAnUmVnRXhwJywgJ0Vycm9yJywgJ0Vycm9yJywgJ0V2YWxFcnJvcicsICdSYW5nZUVycm9yJywgJ1JlZmVyZW5jZUVycm9yJywgJ1N5bnRheEVycm9yJyxcbiAgICdUeXBlRXJyb3InLCAnVVJJRXJyb3InLCAnSlNPTicsICdBcnJheUJ1ZmZlcicsICdEYXRhVmlldycsICdJbnQ4QXJyYXknLCAnVWludDhBcnJheScsXG4gICAnVWludDhDbGFtcGVkQXJyYXknLCAnVWludDE2QXJyYXknLCAnSW50MTZBcnJheScsICdJbnQzMkFycmF5JywgJ1VpbnQzMkFycmF5JywgJ0Zsb2F0MzJBcnJheScsXG4gICAnRmxvYXQ2NEFycmF5J11cbiAgICAgIC5mb3JFYWNoKG5hbWUgPT4gc3ltYm9scy5zZXQobmFtZSwge19fc3ltYm9saWM6ICdyZWZlcmVuY2UnLCBuYW1lfSkpO1xufVxuIl19
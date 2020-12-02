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
        define("@angular/compiler-cli/src/ngtsc/metadata/src/dts", ["require", "exports", "tslib", "typescript", "@angular/compiler-cli/src/ngtsc/imports", "@angular/compiler-cli/src/ngtsc/reflection", "@angular/compiler-cli/src/ngtsc/metadata/src/util"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = require("tslib");
    var ts = require("typescript");
    var imports_1 = require("@angular/compiler-cli/src/ngtsc/imports");
    var reflection_1 = require("@angular/compiler-cli/src/ngtsc/reflection");
    var util_1 = require("@angular/compiler-cli/src/ngtsc/metadata/src/util");
    /**
     * A `MetadataReader` that can read metadata from `.d.ts` files, which have static Ivy properties
     * from an upstream compilation already.
     */
    var DtsMetadataReader = /** @class */ (function () {
        function DtsMetadataReader(checker, reflector) {
            this.checker = checker;
            this.reflector = reflector;
        }
        /**
         * Read the metadata from a class that has already been compiled somehow (either it's in a .d.ts
         * file, or in a .ts file with a handwritten definition).
         *
         * @param ref `Reference` to the class of interest, with the context of how it was obtained.
         */
        DtsMetadataReader.prototype.getNgModuleMetadata = function (ref) {
            var clazz = ref.node;
            var resolutionContext = clazz.getSourceFile().fileName;
            // This operation is explicitly not memoized, as it depends on `ref.ownedByModuleGuess`.
            // TODO(alxhub): investigate caching of .d.ts module metadata.
            var ngModuleDef = this.reflector.getMembersOfClass(clazz).find(function (member) { return member.name === 'ɵmod' && member.isStatic; });
            if (ngModuleDef === undefined) {
                return null;
            }
            else if (
            // Validate that the shape of the ngModuleDef type is correct.
            ngModuleDef.type === null || !ts.isTypeReferenceNode(ngModuleDef.type) ||
                ngModuleDef.type.typeArguments === undefined ||
                ngModuleDef.type.typeArguments.length !== 4) {
                return null;
            }
            // Read the ModuleData out of the type arguments.
            var _a = tslib_1.__read(ngModuleDef.type.typeArguments, 4), _ = _a[0], declarationMetadata = _a[1], importMetadata = _a[2], exportMetadata = _a[3];
            return {
                ref: ref,
                declarations: util_1.extractReferencesFromType(this.checker, declarationMetadata, ref.ownedByModuleGuess, resolutionContext),
                exports: util_1.extractReferencesFromType(this.checker, exportMetadata, ref.ownedByModuleGuess, resolutionContext),
                imports: util_1.extractReferencesFromType(this.checker, importMetadata, ref.ownedByModuleGuess, resolutionContext),
                schemas: [],
                rawDeclarations: null,
            };
        };
        /**
         * Read directive (or component) metadata from a referenced class in a .d.ts file.
         */
        DtsMetadataReader.prototype.getDirectiveMetadata = function (ref) {
            var clazz = ref.node;
            var def = this.reflector.getMembersOfClass(clazz).find(function (field) { return field.isStatic && (field.name === 'ɵcmp' || field.name === 'ɵdir'); });
            if (def === undefined) {
                // No definition could be found.
                return null;
            }
            else if (def.type === null || !ts.isTypeReferenceNode(def.type) ||
                def.type.typeArguments === undefined || def.type.typeArguments.length < 2) {
                // The type metadata was the wrong shape.
                return null;
            }
            return tslib_1.__assign(tslib_1.__assign({ ref: ref, name: clazz.name.text, isComponent: def.name === 'ɵcmp', selector: util_1.readStringType(def.type.typeArguments[1]), exportAs: util_1.readStringArrayType(def.type.typeArguments[2]), inputs: util_1.readStringMapType(def.type.typeArguments[3]), outputs: util_1.readStringMapType(def.type.typeArguments[4]), queries: util_1.readStringArrayType(def.type.typeArguments[5]) }, util_1.extractDirectiveGuards(clazz, this.reflector)), { baseClass: readBaseClass(clazz, this.checker, this.reflector) });
        };
        /**
         * Read pipe metadata from a referenced class in a .d.ts file.
         */
        DtsMetadataReader.prototype.getPipeMetadata = function (ref) {
            var def = this.reflector.getMembersOfClass(ref.node).find(function (field) { return field.isStatic && field.name === 'ɵpipe'; });
            if (def === undefined) {
                // No definition could be found.
                return null;
            }
            else if (def.type === null || !ts.isTypeReferenceNode(def.type) ||
                def.type.typeArguments === undefined || def.type.typeArguments.length < 2) {
                // The type metadata was the wrong shape.
                return null;
            }
            var type = def.type.typeArguments[1];
            if (!ts.isLiteralTypeNode(type) || !ts.isStringLiteral(type.literal)) {
                // The type metadata was the wrong type.
                return null;
            }
            var name = type.literal.text;
            return { ref: ref, name: name };
        };
        return DtsMetadataReader;
    }());
    exports.DtsMetadataReader = DtsMetadataReader;
    function readBaseClass(clazz, checker, reflector) {
        var e_1, _a;
        if (!reflection_1.isNamedClassDeclaration(clazz)) {
            // Technically this is an error in a .d.ts file, but for the purposes of finding the base class
            // it's ignored.
            return reflector.hasBaseClass(clazz) ? 'dynamic' : null;
        }
        if (clazz.heritageClauses !== undefined) {
            try {
                for (var _b = tslib_1.__values(clazz.heritageClauses), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var clause = _c.value;
                    if (clause.token === ts.SyntaxKind.ExtendsKeyword) {
                        var baseExpr = clause.types[0].expression;
                        var symbol = checker.getSymbolAtLocation(baseExpr);
                        if (symbol === undefined) {
                            return 'dynamic';
                        }
                        else if (symbol.flags & ts.SymbolFlags.Alias) {
                            symbol = checker.getAliasedSymbol(symbol);
                        }
                        if (symbol.valueDeclaration !== undefined &&
                            reflection_1.isNamedClassDeclaration(symbol.valueDeclaration)) {
                            return new imports_1.Reference(symbol.valueDeclaration);
                        }
                        else {
                            return 'dynamic';
                        }
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        return null;
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29tcGlsZXItY2xpL3NyYy9uZ3RzYy9tZXRhZGF0YS9zcmMvZHRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRzs7Ozs7Ozs7Ozs7OztJQUVILCtCQUFpQztJQUVqQyxtRUFBd0M7SUFDeEMseUVBQTJGO0lBRzNGLDBFQUFpSTtJQUVqSTs7O09BR0c7SUFDSDtRQUNFLDJCQUFvQixPQUF1QixFQUFVLFNBQXlCO1lBQTFELFlBQU8sR0FBUCxPQUFPLENBQWdCO1lBQVUsY0FBUyxHQUFULFNBQVMsQ0FBZ0I7UUFBRyxDQUFDO1FBRWxGOzs7OztXQUtHO1FBQ0gsK0NBQW1CLEdBQW5CLFVBQW9CLEdBQWdDO1lBQ2xELElBQU0sS0FBSyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUM7WUFDdkIsSUFBTSxpQkFBaUIsR0FBRyxLQUFLLENBQUMsYUFBYSxFQUFFLENBQUMsUUFBUSxDQUFDO1lBQ3pELHdGQUF3RjtZQUN4Riw4REFBOEQ7WUFDOUQsSUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQzVELFVBQUEsTUFBTSxJQUFJLE9BQUEsTUFBTSxDQUFDLElBQUksS0FBSyxNQUFNLElBQUksTUFBTSxDQUFDLFFBQVEsRUFBekMsQ0FBeUMsQ0FBQyxDQUFDO1lBQ3pELElBQUksV0FBVyxLQUFLLFNBQVMsRUFBRTtnQkFDN0IsT0FBTyxJQUFJLENBQUM7YUFDYjtpQkFBTTtZQUNILDhEQUE4RDtZQUM5RCxXQUFXLENBQUMsSUFBSSxLQUFLLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDO2dCQUN0RSxXQUFXLENBQUMsSUFBSSxDQUFDLGFBQWEsS0FBSyxTQUFTO2dCQUM1QyxXQUFXLENB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IEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQgKiBhcyB0cyBmcm9tICd0eXBlc2NyaXB0JztcblxuaW1wb3J0IHtSZWZlcmVuY2V9IGZyb20gJy4uLy4uL2ltcG9ydHMnO1xuaW1wb3J0IHtDbGFzc0RlY2xhcmF0aW9uLCBpc05hbWVkQ2xhc3NEZWNsYXJhdGlvbiwgUmVmbGVjdGlvbkhvc3R9IGZyb20gJy4uLy4uL3JlZmxlY3Rpb24nO1xuXG5pbXBvcnQge0RpcmVjdGl2ZU1ldGEsIE1ldGFkYXRhUmVhZGVyLCBOZ01vZHVsZU1ldGEsIFBpcGVNZXRhfSBmcm9tICcuL2FwaSc7XG5pbXBvcnQge2V4dHJhY3REaXJlY3RpdmVHdWFyZHMsIGV4dHJhY3RSZWZlcmVuY2VzRnJvbVR5cGUsIHJlYWRTdHJpbmdBcnJheVR5cGUsIHJlYWRTdHJpbmdNYXBUeXBlLCByZWFkU3RyaW5nVHlwZX0gZnJvbSAnLi91dGlsJztcblxuLyoqXG4gKiBBIGBNZXRhZGF0YVJlYWRlcmAgdGhhdCBjYW4gcmVhZCBtZXRhZGF0YSBmcm9tIGAuZC50c2AgZmlsZXMsIHdoaWNoIGhhdmUgc3RhdGljIEl2eSBwcm9wZXJ0aWVzXG4gKiBmcm9tIGFuIHVwc3RyZWFtIGNvbXBpbGF0aW9uIGFscmVhZHkuXG4gKi9cbmV4cG9ydCBjbGFzcyBEdHNNZXRhZGF0YVJlYWRlciBpbXBsZW1lbnRzIE1ldGFkYXRhUmVhZGVyIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjaGVja2VyOiB0cy5UeXBlQ2hlY2tlciwgcHJpdmF0ZSByZWZsZWN0b3I6IFJlZmxlY3Rpb25Ib3N0KSB7fVxuXG4gIC8qKlxuICAgKiBSZWFkIHRoZSBtZXRhZGF0YSBmcm9tIGEgY2xhc3MgdGhhdCBoYXMgYWxyZWFkeSBiZWVuIGNvbXBpbGVkIHNvbWVob3cgKGVpdGhlciBpdCdzIGluIGEgLmQudHNcbiAgICogZmlsZSwgb3IgaW4gYSAudHMgZmlsZSB3aXRoIGEgaGFuZHdyaXR0ZW4gZGVmaW5pdGlvbikuXG4gICAqXG4gICAqIEBwYXJhbSByZWYgYFJlZmVyZW5jZWAgdG8gdGhlIGNsYXNzIG9mIGludGVyZXN0LCB3aXRoIHRoZSBjb250ZXh0IG9mIGhvdyBpdCB3YXMgb2J0YWluZWQuXG4gICAqL1xuICBnZXROZ01vZHVsZU1ldGFkYXRhKHJlZjogUmVmZXJlbmNlPENsYXNzRGVjbGFyYXRpb24+KTogTmdNb2R1bGVNZXRhfG51bGwge1xuICAgIGNvbnN0IGNsYXp6ID0gcmVmLm5vZGU7XG4gICAgY29uc3QgcmVzb2x1dGlvbkNvbnRleHQgPSBjbGF6ei5nZXRTb3VyY2VGaWxlKCkuZmlsZU5hbWU7XG4gICAgLy8gVGhpcyBvcGVyYXRpb24gaXMgZXhwbGljaXRseSBub3QgbWVtb2l6ZWQsIGFzIGl0IGRlcGVuZHMgb24gYHJlZi5vd25lZEJ5TW9kdWxlR3Vlc3NgLlxuICAgIC8vIFRPRE8oYWx4aHViKTogaW52ZXN0aWdhdGUgY2FjaGluZyBvZiAuZC50cyBtb2R1bGUgbWV0YWRhdGEuXG4gICAgY29uc3QgbmdNb2R1bGVEZWYgPSB0aGlzLnJlZmxlY3Rvci5nZXRNZW1iZXJzT2ZDbGFzcyhjbGF6eikuZmluZChcbiAgICAgICAgbWVtYmVyID0+IG1lbWJlci5uYW1lID09PSAnybVtb2QnICYmIG1lbWJlci5pc1N0YXRpYyk7XG4gICAgaWYgKG5nTW9kdWxlRGVmID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIC8vIFZhbGlkYXRlIHRoYXQgdGhlIHNoYXBlIG9mIHRoZSBuZ01vZHVsZURlZiB0eXBlIGlzIGNvcnJlY3QuXG4gICAgICAgIG5nTW9kdWxlRGVmLnR5cGUgPT09IG51bGwgfHwgIXRzLmlzVHlwZVJlZmVyZW5jZU5vZGUobmdNb2R1bGVEZWYudHlwZSkgfHxcbiAgICAgICAgbmdNb2R1bGVEZWYudHlwZS50eXBlQXJndW1lbnRzID09PSB1bmRlZmluZWQgfHxcbiAgICAgICAgbmdNb2R1bGVEZWYudHlwZS50eXBlQXJndW1lbnRzLmxlbmd0aCAhPT0gNCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgLy8gUmVhZCB0aGUgTW9kdWxlRGF0YSBvdXQgb2YgdGhlIHR5cGUgYXJndW1lbnRzLlxuICAgIGNvbnN0IFtfLCBkZWNsYXJhdGlvbk1ldGFkYXRhLCBpbXBvcnRNZXRhZGF0YSwgZXhwb3J0TWV0YWRhdGFdID0gbmdNb2R1bGVEZWYudHlwZS50eXBlQXJndW1lbnRzO1xuICAgIHJldHVybiB7XG4gICAgICByZWYsXG4gICAgICBkZWNsYXJhdGlvbnM6IGV4dHJhY3RSZWZlcmVuY2VzRnJvbVR5cGUoXG4gICAgICAgICAgdGhpcy5jaGVja2VyLCBkZWNsYXJhdGlvbk1ldGFkYXRhLCByZWYub3duZWRCeU1vZHVsZUd1ZXNzLCByZXNvbHV0aW9uQ29udGV4dCksXG4gICAgICBleHBvcnRzOiBleHRyYWN0UmVmZXJlbmNlc0Zyb21UeXBlKFxuICAgICAgICAgIHRoaXMuY2hlY2tlciwgZXhwb3J0TWV0YWRhdGEsIHJlZi5vd25lZEJ5TW9kdWxlR3Vlc3MsIHJlc29sdXRpb25Db250ZXh0KSxcbiAgICAgIGltcG9ydHM6IGV4dHJhY3RSZWZlcmVuY2VzRnJvbVR5cGUoXG4gICAgICAgICAgdGhpcy5jaGVja2VyLCBpbXBvcnRNZXRhZGF0YSwgcmVmLm93bmVkQnlNb2R1bGVHdWVzcywgcmVzb2x1dGlvbkNvbnRleHQpLFxuICAgICAgc2NoZW1hczogW10sXG4gICAgICByYXdEZWNsYXJhdGlvbnM6IG51bGwsXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWFkIGRpcmVjdGl2ZSAob3IgY29tcG9uZW50KSBtZXRhZGF0YSBmcm9tIGEgcmVmZXJlbmNlZCBjbGFzcyBpbiBhIC5kLnRzIGZpbGUuXG4gICAqL1xuICBnZXREaXJlY3RpdmVNZXRhZGF0YShyZWY6IFJlZmVyZW5jZTxDbGFzc0RlY2xhcmF0aW9uPik6IERpcmVjdGl2ZU1ldGF8bnVsbCB7XG4gICAgY29uc3QgY2xhenogPSByZWYubm9kZTtcbiAgICBjb25zdCBkZWYgPSB0aGlzLnJlZmxlY3Rvci5nZXRNZW1iZXJzT2ZDbGFzcyhjbGF6eikuZmluZChcbiAgICAgICAgZmllbGQgPT4gZmllbGQuaXNTdGF0aWMgJiYgKGZpZWxkLm5hbWUgPT09ICfJtWNtcCcgfHwgZmllbGQubmFtZSA9PT0gJ8m1ZGlyJykpO1xuICAgIGlmIChkZWYgPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gTm8gZGVmaW5pdGlvbiBjb3VsZCBiZSBmb3VuZC5cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIGRlZi50eXBlID09PSBudWxsIHx8ICF0cy5pc1R5cGVSZWZlcmVuY2VOb2RlKGRlZi50eXBlKSB8fFxuICAgICAgICBkZWYudHlwZS50eXBlQXJndW1lbnRzID09PSB1bmRlZmluZWQgfHwgZGVmLnR5cGUudHlwZUFyZ3VtZW50cy5sZW5ndGggPCAyKSB7XG4gICAgICAvLyBUaGUgdHlwZSBtZXRhZGF0YSB3YXMgdGhlIHdyb25nIHNoYXBlLlxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHJlZixcbiAgICAgIG5hbWU6IGNsYXp6Lm5hbWUudGV4dCxcbiAgICAgIGlzQ29tcG9uZW50OiBkZWYubmFtZSA9PT0gJ8m1Y21wJyxcbiAgICAgIHNlbGVjdG9yOiByZWFkU3RyaW5nVHlwZShkZWYudHlwZS50eXBlQXJndW1lbnRzWzFdKSxcbiAgICAgIGV4cG9ydEFzOiByZWFkU3RyaW5nQXJyYXlUeXBlKGRlZi50eXBlLnR5cGVBcmd1bWVudHNbMl0pLFxuICAgICAgaW5wdXRzOiByZWFkU3RyaW5nTWFwVHlwZShkZWYudHlwZS50eXBlQXJndW1lbnRzWzNdKSxcbiAgICAgIG91dHB1dHM6IHJlYWRTdHJpbmdNYXBUeXBlKGRlZi50eXBlLnR5cGVBcmd1bWVudHNbNF0pLFxuICAgICAgcXVlcmllczogcmVhZFN0cmluZ0FycmF5VHlwZShkZWYudHlwZS50eXBlQXJndW1lbnRzWzVdKSxcbiAgICAgIC4uLmV4dHJhY3REaXJlY3RpdmVHdWFyZHMoY2xhenosIHRoaXMucmVmbGVjdG9yKSxcbiAgICAgIGJhc2VDbGFzczogcmVhZEJhc2VDbGFzcyhjbGF6eiwgdGhpcy5jaGVja2VyLCB0aGlzLnJlZmxlY3RvciksXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWFkIHBpcGUgbWV0YWRhdGEgZnJvbSBhIHJlZmVyZW5jZWQgY2xhc3MgaW4gYSAuZC50cyBmaWxlLlxuICAgKi9cbiAgZ2V0UGlwZU1ldGFkYXRhKHJlZjogUmVmZXJlbmNlPENsYXNzRGVjbGFyYXRpb24+KTogUGlwZU1ldGF8bnVsbCB7XG4gICAgY29uc3QgZGVmID0gdGhpcy5yZWZsZWN0b3IuZ2V0TWVtYmVyc09mQ2xhc3MocmVmLm5vZGUpLmZpbmQoXG4gICAgICAgIGZpZWxkID0+IGZpZWxkLmlzU3RhdGljICYmIGZpZWxkLm5hbWUgPT09ICfJtXBpcGUnKTtcbiAgICBpZiAoZGVmID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIE5vIGRlZmluaXRpb24gY291bGQgYmUgZm91bmQuXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgICBkZWYudHlwZSA9PT0gbnVsbCB8fCAhdHMuaXNUeXBlUmVmZXJlbmNlTm9kZShkZWYudHlwZSkgfHxcbiAgICAgICAgZGVmLnR5cGUudHlwZUFyZ3VtZW50cyA9PT0gdW5kZWZpbmVkIHx8IGRlZi50eXBlLnR5cGVBcmd1bWVudHMubGVuZ3RoIDwgMikge1xuICAgICAgLy8gVGhlIHR5cGUgbWV0YWRhdGEgd2FzIHRoZSB3cm9uZyBzaGFwZS5cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBjb25zdCB0eXBlID0gZGVmLnR5cGUudHlwZUFyZ3VtZW50c1sxXTtcbiAgICBpZiAoIXRzLmlzTGl0ZXJhbFR5cGVOb2RlKHR5cGUpIHx8ICF0cy5pc1N0cmluZ0xpdGVyYWwodHlwZS5saXRlcmFsKSkge1xuICAgICAgLy8gVGhlIHR5cGUgbWV0YWRhdGEgd2FzIHRoZSB3cm9uZyB0eXBlLlxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGNvbnN0IG5hbWUgPSB0eXBlLmxpdGVyYWwudGV4dDtcbiAgICByZXR1cm4ge3JlZiwgbmFtZX07XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVhZEJhc2VDbGFzcyhjbGF6ejogQ2xhc3NEZWNsYXJhdGlvbiwgY2hlY2tlcjogdHMuVHlwZUNoZWNrZXIsIHJlZmxlY3RvcjogUmVmbGVjdGlvbkhvc3QpOlxuICAgIFJlZmVyZW5jZTxDbGFzc0RlY2xhcmF0aW9uPnwnZHluYW1pYyd8bnVsbCB7XG4gIGlmICghaXNOYW1lZENsYXNzRGVjbGFyYXRpb24oY2xhenopKSB7XG4gICAgLy8gVGVjaG5pY2FsbHkgdGhpcyBpcyBhbiBlcnJvciBpbiBhIC5kLnRzIGZpbGUsIGJ1dCBmb3IgdGhlIHB1cnBvc2VzIG9mIGZpbmRpbmcgdGhlIGJhc2UgY2xhc3NcbiAgICAvLyBpdCdzIGlnbm9yZWQuXG4gICAgcmV0dXJuIHJlZmxlY3Rvci5oYXNCYXNlQ2xhc3MoY2xhenopID8gJ2R5bmFtaWMnIDogbnVsbDtcbiAgfVxuXG4gIGlmIChjbGF6ei5oZXJpdGFnZUNsYXVzZXMgIT09IHVuZGVmaW5lZCkge1xuICAgIGZvciAoY29uc3QgY2xhdXNlIG9mIGNsYXp6Lmhlcml0YWdlQ2xhdXNlcykge1xuICAgICAgaWYgKGNsYXVzZS50b2tlbiA9PT0gdHMuU3ludGF4S2luZC5FeHRlbmRzS2V5d29yZCkge1xuICAgICAgICBjb25zdCBiYXNlRXhwciA9IGNsYXVzZS50eXBlc1swXS5leHByZXNzaW9uO1xuICAgICAgICBsZXQgc3ltYm9sID0gY2hlY2tlci5nZXRTeW1ib2xBdExvY2F0aW9uKGJhc2VFeHByKTtcbiAgICAgICAgaWYgKHN5bWJvbCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgcmV0dXJuICdkeW5hbWljJztcbiAgICAgICAgfSBlbHNlIGlmIChzeW1ib2wuZmxhZ3MgJiB0cy5TeW1ib2xGbGFncy5BbGlhcykge1xuICAgICAgICAgIHN5bWJvbCA9IGNoZWNrZXIuZ2V0QWxpYXNlZFN5bWJvbChzeW1ib2wpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzeW1ib2wudmFsdWVEZWNsYXJhdGlvbiAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAgICAgICBpc05hbWVkQ2xhc3NEZWNsYXJhdGlvbihzeW1ib2wudmFsdWVEZWNsYXJhdGlvbikpIHtcbiAgICAgICAgICByZXR1cm4gbmV3IFJlZmVyZW5jZShzeW1ib2wudmFsdWVEZWNsYXJhdGlvbik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuICdkeW5hbWljJztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gbnVsbDtcbn1cbiJdfQ==
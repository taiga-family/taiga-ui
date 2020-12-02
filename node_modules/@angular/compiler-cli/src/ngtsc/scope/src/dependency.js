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
        define("@angular/compiler-cli/src/ngtsc/scope/src/dependency", ["require", "exports", "tslib"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = require("tslib");
    /**
     * Reads Angular metadata from classes declared in .d.ts files and computes an `ExportScope`.
     *
     * Given an NgModule declared in a .d.ts file, this resolver can produce a transitive `ExportScope`
     * of all of the directives/pipes it exports. It does this by reading metadata off of Ivy static
     * fields on directives, components, pipes, and NgModules.
     */
    var MetadataDtsModuleScopeResolver = /** @class */ (function () {
        /**
         * @param dtsMetaReader a `MetadataReader` which can read metadata from `.d.ts` files.
         */
        function MetadataDtsModuleScopeResolver(dtsMetaReader, aliasingHost) {
            this.dtsMetaReader = dtsMetaReader;
            this.aliasingHost = aliasingHost;
            /**
             * Cache which holds fully resolved scopes for NgModule classes from .d.ts files.
             */
            this.cache = new Map();
        }
        /**
         * Resolve a `Reference`'d NgModule from a .d.ts file and produce a transitive `ExportScope`
         * listing the directives and pipes which that NgModule exports to others.
         *
         * This operation relies on a `Reference` instead of a direct TypeScrpt node as the `Reference`s
         * produced depend on how the original NgModule was imported.
         */
        MetadataDtsModuleScopeResolver.prototype.resolve = function (ref) {
            var e_1, _a, e_2, _b, e_3, _c, e_4, _d;
            var clazz = ref.node;
            var sourceFile = clazz.getSourceFile();
            if (!sourceFile.isDeclarationFile) {
                throw new Error("Debug error: DtsModuleScopeResolver.read(" + ref.debugName + " from " + sourceFile.fileName + "), but not a .d.ts file");
            }
            if (this.cache.has(clazz)) {
                return this.cache.get(clazz);
            }
            // Build up the export scope - those directives and pipes made visible by this module.
            var directives = [];
            var pipes = [];
            var meta = this.dtsMetaReader.getNgModuleMetadata(ref);
            if (meta === null) {
                this.cache.set(clazz, null);
                return null;
            }
            var declarations = new Set();
            try {
                for (var _e = tslib_1.__values(meta.declarations), _f = _e.next(); !_f.done; _f = _e.next()) {
                    var declRef = _f.value;
                    declarations.add(declRef.node);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_f && !_f.done && (_a = _e.return)) _a.call(_e);
                }
                finally { if (e_1) throw e_1.error; }
            }
            try {
                // Only the 'exports' field of the NgModule's metadata is important. Imports and declarations
                // don't affect the export scope.
                for (var _g = tslib_1.__values(meta.exports), _h = _g.next(); !_h.done; _h = _g.next()) {
                    var exportRef = _h.value;
                    // Attempt to process the export as a directive.
                    var directive = this.dtsMetaReader.getDirectiveMetadata(exportRef);
                    if (directive !== null) {
                        var isReExport = !declarations.has(exportRef.node);
                        directives.push(this.maybeAlias(directive, sourceFile, isReExport));
                        continue;
                    }
                    // Attempt to process the export as a pipe.
                    var pipe = this.dtsMetaReader.getPipeMetadata(exportRef);
                    if (pipe !== null) {
                        var isReExport = !declarations.has(exportRef.node);
                        pipes.push(this.maybeAlias(pipe, sourceFile, isReExport));
                        continue;
                    }
                    // Attempt to process the export as a module.
                    var exportScope_1 = this.resolve(exportRef);
                    if (exportScope_1 !== null) {
                        // It is a module. Add exported directives and pipes to the current scope. This might
                        // involve rewriting the `Reference`s to those types to have an alias expression if one is
                        // required.
                        if (this.aliasingHost === null) {
                            // Fast path when aliases aren't required.
                            directives.push.apply(directives, tslib_1.__spread(exportScope_1.exported.directives));
                            pipes.push.apply(pipes, tslib_1.__spread(exportScope_1.exported.pipes));
                        }
                        else {
                            try {
                                // It's necessary to rewrite the `Reference`s to add alias expressions. This way, imports
                                // generated to these directives and pipes will use a shallow import to `sourceFile`
                                // instead of a deep import directly to the directive or pipe class.
                                //
                                // One important check here is whether the directive/pipe is declared in the same
                                // source file as the re-exporting NgModule. This can happen if both a directive, its
                                // NgModule, and the re-exporting NgModule are all in the same file. In this case,
                                // no import alias is needed as it would go to the same file anyway.
                                for (var _j = (e_3 = void 0, tslib_1.__values(exportScope_1.exported.directives)), _k = _j.next(); !_k.done; _k = _j.next()) {
                                    var directive_1 = _k.value;
                                    directives.push(this.maybeAlias(directive_1, sourceFile, /* isReExport */ true));
                                }
                            }
                            catch (e_3_1) { e_3 = { error: e_3_1 }; }
                            finally {
                                try {
                                    if (_k && !_k.done && (_c = _j.return)) _c.call(_j);
                                }
                                finally { if (e_3) throw e_3.error; }
                            }
                            try {
                                for (var _l = (e_4 = void 0, tslib_1.__values(exportScope_1.exported.pipes)), _m = _l.next(); !_m.done; _m = _l.next()) {
                                    var pipe_1 = _m.value;
                                    pipes.push(this.maybeAlias(pipe_1, sourceFile, /* isReExport */ true));
                                }
                            }
                            catch (e_4_1) { e_4 = { error: e_4_1 }; }
                            finally {
                                try {
                                    if (_m && !_m.done && (_d = _l.return)) _d.call(_l);
                                }
                                finally { if (e_4) throw e_4.error; }
                            }
                        }
                    }
                    continue;
                    // The export was not a directive, a pipe, or a module. This is an error.
                    // TODO(alxhub): produce a ts.Diagnostic
                    throw new Error("Exported value " + exportRef.debugName + " was not a directive, pipe, or module");
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_h && !_h.done && (_b = _g.return)) _b.call(_g);
                }
                finally { if (e_2) throw e_2.error; }
            }
            var exportScope = {
                exported: { directives: directives, pipes: pipes },
            };
            this.cache.set(clazz, exportScope);
            return exportScope;
        };
        MetadataDtsModuleScopeResolver.prototype.maybeAlias = function (dirOrPipe, maybeAliasFrom, isReExport) {
            var ref = dirOrPipe.ref;
            if (this.aliasingHost === null || ref.node.getSourceFile() === maybeAliasFrom) {
                return dirOrPipe;
            }
            var alias = this.aliasingHost.getAliasIn(ref.node, maybeAliasFrom, isReExport);
            if (alias === null) {
                return dirOrPipe;
            }
            return tslib_1.__assign(tslib_1.__assign({}, dirOrPipe), { ref: ref.cloneWithAlias(alias) });
        };
        return MetadataDtsModuleScopeResolver;
    }());
    exports.MetadataDtsModuleScopeResolver = MetadataDtsModuleScopeResolver;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVwZW5kZW5jeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbXBpbGVyLWNsaS9zcmMvbmd0c2Mvc2NvcGUvc3JjL2RlcGVuZGVuY3kudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HOzs7Ozs7Ozs7Ozs7O0lBY0g7Ozs7OztPQU1HO0lBQ0g7UUFNRTs7V0FFRztRQUNILHdDQUFvQixhQUE2QixFQUFVLFlBQStCO1lBQXRFLGtCQUFhLEdBQWIsYUFBYSxDQUFnQjtZQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFtQjtZQVIxRjs7ZUFFRztZQUNLLFVBQUssR0FBRyxJQUFJLEdBQUcsRUFBc0MsQ0FBQztRQUsrQixDQUFDO1FBRTlGOzs7Ozs7V0FNRztRQUNILGdEQUFPLEdBQVAsVUFBUSxHQUFnQzs7WUFDdEMsSUFBTSxLQUFLLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQztZQUN2QixJQUFNLFVBQVUsR0FBRyxLQUFLLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDekMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsRUFBRTtnQkFDakMsTUFBTSxJQUFJLEtBQUssQ0FBQyw4Q0FBNEMsR0FBRyxDQUFDLFNBQVMsY0FDckUsVUFBVSxDQUFDLFFBQVEsNEJBQXlCLENBQUMsQ0FBQzthQUNuRDtZQUVELElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQ3pCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFFLENBQUM7YUFDL0I7WUFFRCxzRkFBc0Y7WUFDdEYsSUFBTSxVQUFVLEdBQW9CLEVBQUUsQ0FBQztZQUN2QyxJQUFNLEtBQUssR0FBZSxFQUFFLENBQUM7WUFFN0IsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN6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ZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQgKiBhcyB0cyBmcm9tICd0eXBlc2NyaXB0JztcblxuaW1wb3J0IHtBbGlhc2luZ0hvc3QsIFJlZmVyZW5jZX0gZnJvbSAnLi4vLi4vaW1wb3J0cyc7XG5pbXBvcnQge0RpcmVjdGl2ZU1ldGEsIE1ldGFkYXRhUmVhZGVyLCBQaXBlTWV0YX0gZnJvbSAnLi4vLi4vbWV0YWRhdGEnO1xuaW1wb3J0IHtDbGFzc0RlY2xhcmF0aW9ufSBmcm9tICcuLi8uLi9yZWZsZWN0aW9uJztcblxuaW1wb3J0IHtFeHBvcnRTY29wZX0gZnJvbSAnLi9hcGknO1xuXG5leHBvcnQgaW50ZXJmYWNlIER0c01vZHVsZVNjb3BlUmVzb2x2ZXIge1xuICByZXNvbHZlKHJlZjogUmVmZXJlbmNlPENsYXNzRGVjbGFyYXRpb24+KTogRXhwb3J0U2NvcGV8bnVsbDtcbn1cblxuLyoqXG4gKiBSZWFkcyBBbmd1bGFyIG1ldGFkYXRhIGZyb20gY2xhc3NlcyBkZWNsYXJlZCBpbiAuZC50cyBmaWxlcyBhbmQgY29tcHV0ZXMgYW4gYEV4cG9ydFNjb3BlYC5cbiAqXG4gKiBHaXZlbiBhbiBOZ01vZHVsZSBkZWNsYXJlZCBpbiBhIC5kLnRzIGZpbGUsIHRoaXMgcmVzb2x2ZXIgY2FuIHByb2R1Y2UgYSB0cmFuc2l0aXZlIGBFeHBvcnRTY29wZWBcbiAqIG9mIGFsbCBvZiB0aGUgZGlyZWN0aXZlcy9waXBlcyBpdCBleHBvcnRzLiBJdCBkb2VzIHRoaXMgYnkgcmVhZGluZyBtZXRhZGF0YSBvZmYgb2YgSXZ5IHN0YXRpY1xuICogZmllbGRzIG9uIGRpcmVjdGl2ZXMsIGNvbXBvbmVudHMsIHBpcGVzLCBhbmQgTmdNb2R1bGVzLlxuICovXG5leHBvcnQgY2xhc3MgTWV0YWRhdGFEdHNNb2R1bGVTY29wZVJlc29sdmVyIGltcGxlbWVudHMgRHRzTW9kdWxlU2NvcGVSZXNvbHZlciB7XG4gIC8qKlxuICAgKiBDYWNoZSB3aGljaCBob2xkcyBmdWxseSByZXNvbHZlZCBzY29wZXMgZm9yIE5nTW9kdWxlIGNsYXNzZXMgZnJvbSAuZC50cyBmaWxlcy5cbiAgICovXG4gIHByaXZhdGUgY2FjaGUgPSBuZXcgTWFwPENsYXNzRGVjbGFyYXRpb24sIEV4cG9ydFNjb3BlfG51bGw+KCk7XG5cbiAgLyoqXG4gICAqIEBwYXJhbSBkdHNNZXRhUmVhZGVyIGEgYE1ldGFkYXRhUmVhZGVyYCB3aGljaCBjYW4gcmVhZCBtZXRhZGF0YSBmcm9tIGAuZC50c2AgZmlsZXMuXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGR0c01ldGFSZWFkZXI6IE1ldGFkYXRhUmVhZGVyLCBwcml2YXRlIGFsaWFzaW5nSG9zdDogQWxpYXNpbmdIb3N0fG51bGwpIHt9XG5cbiAgLyoqXG4gICAqIFJlc29sdmUgYSBgUmVmZXJlbmNlYCdkIE5nTW9kdWxlIGZyb20gYSAuZC50cyBmaWxlIGFuZCBwcm9kdWNlIGEgdHJhbnNpdGl2ZSBgRXhwb3J0U2NvcGVgXG4gICAqIGxpc3RpbmcgdGhlIGRpcmVjdGl2ZXMgYW5kIHBpcGVzIHdoaWNoIHRoYXQgTmdNb2R1bGUgZXhwb3J0cyB0byBvdGhlcnMuXG4gICAqXG4gICAqIFRoaXMgb3BlcmF0aW9uIHJlbGllcyBvbiBhIGBSZWZlcmVuY2VgIGluc3RlYWQgb2YgYSBkaXJlY3QgVHlwZVNjcnB0IG5vZGUgYXMgdGhlIGBSZWZlcmVuY2Vgc1xuICAgKiBwcm9kdWNlZCBkZXBlbmQgb24gaG93IHRoZSBvcmlnaW5hbCBOZ01vZHVsZSB3YXMgaW1wb3J0ZWQuXG4gICAqL1xuICByZXNvbHZlKHJlZjogUmVmZXJlbmNlPENsYXNzRGVjbGFyYXRpb24+KTogRXhwb3J0U2NvcGV8bnVsbCB7XG4gICAgY29uc3QgY2xhenogPSByZWYubm9kZTtcbiAgICBjb25zdCBzb3VyY2VGaWxlID0gY2xhenouZ2V0U291cmNlRmlsZSgpO1xuICAgIGlmICghc291cmNlRmlsZS5pc0RlY2xhcmF0aW9uRmlsZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBEZWJ1ZyBlcnJvcjogRHRzTW9kdWxlU2NvcGVSZXNvbHZlci5yZWFkKCR7cmVmLmRlYnVnTmFtZX0gZnJvbSAke1xuICAgICAgICAgIHNvdXJjZUZpbGUuZmlsZU5hbWV9KSwgYnV0IG5vdCBhIC5kLnRzIGZpbGVgKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5jYWNoZS5oYXMoY2xhenopKSB7XG4gICAgICByZXR1cm4gdGhpcy5jYWNoZS5nZXQoY2xhenopITtcbiAgICB9XG5cbiAgICAvLyBCdWlsZCB1cCB0aGUgZXhwb3J0IHNjb3BlIC0gdGhvc2UgZGlyZWN0aXZlcyBhbmQgcGlwZXMgbWFkZSB2aXNpYmxlIGJ5IHRoaXMgbW9kdWxlLlxuICAgIGNvbnN0IGRpcmVjdGl2ZXM6IERpcmVjdGl2ZU1ldGFbXSA9IFtdO1xuICAgIGNvbnN0IHBpcGVzOiBQaXBlTWV0YVtdID0gW107XG5cbiAgICBjb25zdCBtZXRhID0gdGhpcy5kdHNNZXRhUmVhZGVyLmdldE5nTW9kdWxlTWV0YWRhdGEocmVmKTtcbiAgICBpZiAobWV0YSA9PT0gbnVsbCkge1xuICAgICAgdGhpcy5jYWNoZS5zZXQoY2xhenosIG51bGwpO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgZGVjbGFyYXRpb25zID0gbmV3IFNldDxDbGFzc0RlY2xhcmF0aW9uPigpO1xuICAgIGZvciAoY29uc3QgZGVjbFJlZiBvZiBtZXRhLmRlY2xhcmF0aW9ucykge1xuICAgICAgZGVjbGFyYXRpb25zLmFkZChkZWNsUmVmLm5vZGUpO1xuICAgIH1cblxuICAgIC8vIE9ubHkgdGhlICdleHBvcnRzJyBmaWVsZCBvZiB0aGUgTmdNb2R1bGUncyBtZXRhZGF0YSBpcyBpbXBvcnRhbnQuIEltcG9ydHMgYW5kIGRlY2xhcmF0aW9uc1xuICAgIC8vIGRvbid0IGFmZmVjdCB0aGUgZXhwb3J0IHNjb3BlLlxuICAgIGZvciAoY29uc3QgZXhwb3J0UmVmIG9mIG1ldGEuZXhwb3J0cykge1xuICAgICAgLy8gQXR0ZW1wdCB0byBwcm9jZXNzIHRoZSBleHBvcnQgYXMgYSBkaXJlY3RpdmUuXG4gICAgICBjb25zdCBkaXJlY3RpdmUgPSB0aGlzLmR0c01ldGFSZWFkZXIuZ2V0RGlyZWN0aXZlTWV0YWRhdGEoZXhwb3J0UmVmKTtcbiAgICAgIGlmIChkaXJlY3RpdmUgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgaXNSZUV4cG9ydCA9ICFkZWNsYXJhdGlvbnMuaGFzKGV4cG9ydFJlZi5ub2RlKTtcbiAgICAgICAgZGlyZWN0aXZlcy5wdXNoKHRoaXMubWF5YmVBbGlhcyhkaXJlY3RpdmUsIHNvdXJjZUZpbGUsIGlzUmVFeHBvcnQpKTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIC8vIEF0dGVtcHQgdG8gcHJvY2VzcyB0aGUgZXhwb3J0IGFzIGEgcGlwZS5cbiAgICAgIGNvbnN0IHBpcGUgPSB0aGlzLmR0c01ldGFSZWFkZXIuZ2V0UGlwZU1ldGFkYXRhKGV4cG9ydFJlZik7XG4gICAgICBpZiAocGlwZSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBpc1JlRXhwb3J0ID0gIWRlY2xhcmF0aW9ucy5oYXMoZXhwb3J0UmVmLm5vZGUpO1xuICAgICAgICBwaXBlcy5wdXNoKHRoaXMubWF5YmVBbGlhcyhwaXBlLCBzb3VyY2VGaWxlLCBpc1JlRXhwb3J0KSk7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICAvLyBBdHRlbXB0IHRvIHByb2Nlc3MgdGhlIGV4cG9ydCBhcyBhIG1vZHVsZS5cbiAgICAgIGNvbnN0IGV4cG9ydFNjb3BlID0gdGhpcy5yZXNvbHZlKGV4cG9ydFJlZik7XG4gICAgICBpZiAoZXhwb3J0U2NvcGUgIT09IG51bGwpIHtcbiAgICAgICAgLy8gSXQgaXMgYSBtb2R1bGUuIEFkZCBleHBvcnRlZCBkaXJlY3RpdmVzIGFuZCBwaXBlcyB0byB0aGUgY3VycmVudCBzY29wZS4gVGhpcyBtaWdodFxuICAgICAgICAvLyBpbnZvbHZlIHJld3JpdGluZyB0aGUgYFJlZmVyZW5jZWBzIHRvIHRob3NlIHR5cGVzIHRvIGhhdmUgYW4gYWxpYXMgZXhwcmVzc2lvbiBpZiBvbmUgaXNcbiAgICAgICAgLy8gcmVxdWlyZWQuXG4gICAgICAgIGlmICh0aGlzLmFsaWFzaW5nSG9zdCA9PT0gbnVsbCkge1xuICAgICAgICAgIC8vIEZhc3QgcGF0aCB3aGVuIGFsaWFzZXMgYXJlbid0IHJlcXVpcmVkLlxuICAgICAgICAgIGRpcmVjdGl2ZXMucHVzaCguLi5leHBvcnRTY29wZS5leHBvcnRlZC5kaXJlY3RpdmVzKTtcbiAgICAgICAgICBwaXBlcy5wdXNoKC4uLmV4cG9ydFNjb3BlLmV4cG9ydGVkLnBpcGVzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBJdCdzIG5lY2Vzc2FyeSB0byByZXdyaXRlIHRoZSBgUmVmZXJlbmNlYHMgdG8gYWRkIGFsaWFzIGV4cHJlc3Npb25zLiBUaGlzIHdheSwgaW1wb3J0c1xuICAgICAgICAgIC8vIGdlbmVyYXRlZCB0byB0aGVzZSBkaXJlY3RpdmVzIGFuZCBwaXBlcyB3aWxsIHVzZSBhIHNoYWxsb3cgaW1wb3J0IHRvIGBzb3VyY2VGaWxlYFxuICAgICAgICAgIC8vIGluc3RlYWQgb2YgYSBkZWVwIGltcG9ydCBkaXJlY3RseSB0byB0aGUgZGlyZWN0aXZlIG9yIHBpcGUgY2xhc3MuXG4gICAgICAgICAgLy9cbiAgICAgICAgICAvLyBPbmUgaW1wb3J0YW50IGNoZWNrIGhlcmUgaXMgd2hldGhlciB0aGUgZGlyZWN0aXZlL3BpcGUgaXMgZGVjbGFyZWQgaW4gdGhlIHNhbWVcbiAgICAgICAgICAvLyBzb3VyY2UgZmlsZSBhcyB0aGUgcmUtZXhwb3J0aW5nIE5nTW9kdWxlLiBUaGlzIGNhbiBoYXBwZW4gaWYgYm90aCBhIGRpcmVjdGl2ZSwgaXRzXG4gICAgICAgICAgLy8gTmdNb2R1bGUsIGFuZCB0aGUgcmUtZXhwb3J0aW5nIE5nTW9kdWxlIGFyZSBhbGwgaW4gdGhlIHNhbWUgZmlsZS4gSW4gdGhpcyBjYXNlLFxuICAgICAgICAgIC8vIG5vIGltcG9ydCBhbGlhcyBpcyBuZWVkZWQgYXMgaXQgd291bGQgZ28gdG8gdGhlIHNhbWUgZmlsZSBhbnl3YXkuXG4gICAgICAgICAgZm9yIChjb25zdCBkaXJlY3RpdmUgb2YgZXhwb3J0U2NvcGUuZXhwb3J0ZWQuZGlyZWN0aXZlcykge1xuICAgICAgICAgICAgZGlyZWN0aXZlcy5wdXNoKHRoaXMubWF5YmVBbGlhcyhkaXJlY3RpdmUsIHNvdXJjZUZpbGUsIC8qIGlzUmVFeHBvcnQgKi8gdHJ1ZSkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBmb3IgKGNvbnN0IHBpcGUgb2YgZXhwb3J0U2NvcGUuZXhwb3J0ZWQucGlwZXMpIHtcbiAgICAgICAgICAgIHBpcGVzLnB1c2godGhpcy5tYXliZUFsaWFzKHBpcGUsIHNvdXJjZUZpbGUsIC8qIGlzUmVFeHBvcnQgKi8gdHJ1ZSkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgY29udGludWU7XG5cbiAgICAgIC8vIFRoZSBleHBvcnQgd2FzIG5vdCBhIGRpcmVjdGl2ZSwgYSBwaXBlLCBvciBhIG1vZHVsZS4gVGhpcyBpcyBhbiBlcnJvci5cbiAgICAgIC8vIFRPRE8oYWx4aHViKTogcHJvZHVjZSBhIHRzLkRpYWdub3N0aWNcbiAgICAgIHRocm93IG5ldyBFcnJvcihgRXhwb3J0ZWQgdmFsdWUgJHtleHBvcnRSZWYuZGVidWdOYW1lfSB3YXMgbm90IGEgZGlyZWN0aXZlLCBwaXBlLCBvciBtb2R1bGVgKTtcbiAgICB9XG5cbiAgICBjb25zdCBleHBvcnRTY29wZTogRXhwb3J0U2NvcGUgPSB7XG4gICAgICBleHBvcnRlZDoge2RpcmVjdGl2ZXMsIHBpcGVzfSxcbiAgICB9O1xuICAgIHRoaXMuY2FjaGUuc2V0KGNsYXp6LCBleHBvcnRTY29wZSk7XG4gICAgcmV0dXJuIGV4cG9ydFNjb3BlO1xuICB9XG5cbiAgcHJpdmF0ZSBtYXliZUFsaWFzPFQgZXh0ZW5kcyBEaXJlY3RpdmVNZXRhfFBpcGVNZXRhPihcbiAgICAgIGRpck9yUGlwZTogVCwgbWF5YmVBbGlhc0Zyb206IHRzLlNvdXJjZUZpbGUsIGlzUmVFeHBvcnQ6IGJvb2xlYW4pOiBUIHtcbiAgICBjb25zdCByZWYgPSBkaXJPclBpcGUucmVmO1xuICAgIGlmICh0aGlzLmFsaWFzaW5nSG9zdCA9PT0gbnVsbCB8fCByZWYubm9kZS5nZXRTb3VyY2VGaWxlKCkgPT09IG1heWJlQWxpYXNGcm9tKSB7XG4gICAgICByZXR1cm4gZGlyT3JQaXBlO1xuICAgIH1cblxuICAgIGNvbnN0IGFsaWFzID0gdGhpcy5hbGlhc2luZ0hvc3QuZ2V0QWxpYXNJbihyZWYubm9kZSwgbWF5YmVBbGlhc0Zyb20sIGlzUmVFeHBvcnQpO1xuICAgIGlmIChhbGlhcyA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGRpck9yUGlwZTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgLi4uZGlyT3JQaXBlLFxuICAgICAgcmVmOiByZWYuY2xvbmVXaXRoQWxpYXMoYWxpYXMpLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==
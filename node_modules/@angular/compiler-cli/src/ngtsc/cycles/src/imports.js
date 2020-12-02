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
        define("@angular/compiler-cli/src/ngtsc/cycles/src/imports", ["require", "exports", "typescript"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ts = require("typescript");
    /**
     * A cached graph of imports in the `ts.Program`.
     *
     * The `ImportGraph` keeps track of dependencies (imports) of individual `ts.SourceFile`s. Only
     * dependencies within the same program are tracked; imports into packages on NPM are not.
     */
    var ImportGraph = /** @class */ (function () {
        function ImportGraph(resolver) {
            this.resolver = resolver;
            this.map = new Map();
        }
        /**
         * List the direct (not transitive) imports of a given `ts.SourceFile`.
         *
         * This operation is cached.
         */
        ImportGraph.prototype.importsOf = function (sf) {
            if (!this.map.has(sf)) {
                this.map.set(sf, this.scanImports(sf));
            }
            return this.map.get(sf);
        };
        /**
         * Lists the transitive imports of a given `ts.SourceFile`.
         */
        ImportGraph.prototype.transitiveImportsOf = function (sf) {
            var imports = new Set();
            this.transitiveImportsOfHelper(sf, imports);
            return imports;
        };
        ImportGraph.prototype.transitiveImportsOfHelper = function (sf, results) {
            var _this = this;
            if (results.has(sf)) {
                return;
            }
            results.add(sf);
            this.importsOf(sf).forEach(function (imported) {
                _this.transitiveImportsOfHelper(imported, results);
            });
        };
        /**
         * Add a record of an import from `sf` to `imported`, that's not present in the original
         * `ts.Program` but will be remembered by the `ImportGraph`.
         */
        ImportGraph.prototype.addSyntheticImport = function (sf, imported) {
            if (isLocalFile(imported)) {
                this.importsOf(sf).add(imported);
            }
        };
        ImportGraph.prototype.scanImports = function (sf) {
            var _this = this;
            var imports = new Set();
            // Look through the source file for import statements.
            sf.statements.forEach(function (stmt) {
                if ((ts.isImportDeclaration(stmt) || ts.isExportDeclaration(stmt)) &&
                    stmt.moduleSpecifier !== undefined && ts.isStringLiteral(stmt.moduleSpecifier)) {
                    // Resolve the module to a file, and check whether that file is in the ts.Program.
                    var moduleName = stmt.moduleSpecifier.text;
                    var moduleFile = _this.resolver.resolveModule(moduleName, sf.fileName);
                    if (moduleFile !== null && isLocalFile(moduleFile)) {
                        // Record this local import.
                        imports.add(moduleFile);
                    }
                }
            });
            return imports;
        };
        return ImportGraph;
    }());
    exports.ImportGraph = ImportGraph;
    function isLocalFile(sf) {
        return !sf.fileName.endsWith('.d.ts');
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1wb3J0cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbXBpbGVyLWNsaS9zcmMvbmd0c2MvY3ljbGVzL3NyYy9pbXBvcnRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRzs7Ozs7Ozs7Ozs7O0lBRUgsK0JBQWlDO0lBSWpDOzs7OztPQUtHO0lBQ0g7UUFHRSxxQkFBb0IsUUFBd0I7WUFBeEIsYUFBUSxHQUFSLFFBQVEsQ0FBZ0I7WUFGcEMsUUFBRyxHQUFHLElBQUksR0FBRyxFQUFxQyxDQUFDO1FBRVosQ0FBQztRQUVoRDs7OztXQUlHO1FBQ0gsK0JBQVMsR0FBVCxVQUFVLEVBQWlCO1lBQ3pCLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRTtnQkFDckIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzthQUN4QztZQUNELE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFFLENBQUM7UUFDM0IsQ0FBQztRQUVEOztXQUVHO1FBQ0gseUNBQW1CLEdBQW5CLFVBQW9CLEVBQWlCO1lBQ25DLElBQU0sT0FBTyxHQUFHLElBQUksR0FBRyxFQUFpQixDQUFDO1lBQ3pDLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxFQUFFLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFDNUMsT0FBTyxPQUFPLENBQUM7UUFDakIsQ0FBQztRQUVPLCtDQUF5QixHQUFqQyxVQUFrQyxFQUFpQixFQUFFLE9BQTJCO1lBQWhGLGlCQVFDO1lBUEMsSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFO2dCQUNuQixPQUFPO2FBQ1I7WUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ2hCLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUEsUUFBUTtnQkFDakMsS0FBSSxDQUFDLHlCQUF5QixDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQztZQUNwRCxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUM7UUFFRDs7O1dBR0c7UUFDSCx3Q0FBa0IsR0FBbEIsVUFBbUIsRUFBaUIsRUFBRSxRQUF1QjtZQUMzRCxJQUFJLFdBQVcsQ0FBQyxRQUFRLENBQUMsRUFBRTtnQkFDekIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDbEM7UUFDSCxDQUFDO1FBRU8saUNBQVcsR0FBbkIsVUFBb0IsRUFBaUI7WUFBckMsaUJBZ0JDO1lBZkMsSUFBTSxPQUFPLEdBQUcsSUFBSSxHQUFHLEVBQWlCLENBQUM7WUFDekMsc0RBQXNEO1lBQ3RELEVBQUUsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLFVBQUEsSUFBSTtnQkFDeEIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQzlELElBQUksQ0FBQyxlQUFlLEtBQUssU0FBUyxJQUFJLEVBQUUsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxFQUFFO29CQUNsRixrRkFBa0Y7b0JBQ2xGLElBQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDO29CQUM3QyxJQUFNLFVBQVUsR0FBRyxLQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUN4RSxJQUFJLFVBQVUsS0FBSyxJQUFJLElBQUksV0FBVyxDQUFDLFVBQVUsQ0FBQyxFQUFFO3dCQUNsRCw0QkFBNEI7d0JBQzVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7cUJBQ3pCO2lCQUNGO1lBQ0gsQ0FBQyxDQUFDLENBQUM7WUFDSCxPQUFPLE9BQU8sQ0FBQztRQUNqQixDQUFDO1FBQ0gsa0JBQUM7SUFBRCxDQUFDLEFBL0RELElBK0RDO0lBL0RZLGtDQUFXO0lBaUV4QixTQUFTLFdBQVcsQ0FBQyxFQUFpQjtRQUNwQyxPQUFPLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDeEMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0ICogYXMgdHMgZnJvbSAndHlwZXNjcmlwdCc7XG5cbmltcG9ydCB7TW9kdWxlUmVzb2x2ZXJ9IGZyb20gJy4uLy4uL2ltcG9ydHMnO1xuXG4vKipcbiAqIEEgY2FjaGVkIGdyYXBoIG9mIGltcG9ydHMgaW4gdGhlIGB0cy5Qcm9ncmFtYC5cbiAqXG4gKiBUaGUgYEltcG9ydEdyYXBoYCBrZWVwcyB0cmFjayBvZiBkZXBlbmRlbmNpZXMgKGltcG9ydHMpIG9mIGluZGl2aWR1YWwgYHRzLlNvdXJjZUZpbGVgcy4gT25seVxuICogZGVwZW5kZW5jaWVzIHdpdGhpbiB0aGUgc2FtZSBwcm9ncmFtIGFyZSB0cmFja2VkOyBpbXBvcnRzIGludG8gcGFja2FnZXMgb24gTlBNIGFyZSBub3QuXG4gKi9cbmV4cG9ydCBjbGFzcyBJbXBvcnRHcmFwaCB7XG4gIHByaXZhdGUgbWFwID0gbmV3IE1hcDx0cy5Tb3VyY2VGaWxlLCBTZXQ8dHMuU291cmNlRmlsZT4+KCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZXNvbHZlcjogTW9kdWxlUmVzb2x2ZXIpIHt9XG5cbiAgLyoqXG4gICAqIExpc3QgdGhlIGRpcmVjdCAobm90IHRyYW5zaXRpdmUpIGltcG9ydHMgb2YgYSBnaXZlbiBgdHMuU291cmNlRmlsZWAuXG4gICAqXG4gICAqIFRoaXMgb3BlcmF0aW9uIGlzIGNhY2hlZC5cbiAgICovXG4gIGltcG9ydHNPZihzZjogdHMuU291cmNlRmlsZSk6IFNldDx0cy5Tb3VyY2VGaWxlPiB7XG4gICAgaWYgKCF0aGlzLm1hcC5oYXMoc2YpKSB7XG4gICAgICB0aGlzLm1hcC5zZXQoc2YsIHRoaXMuc2NhbkltcG9ydHMoc2YpKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMubWFwLmdldChzZikhO1xuICB9XG5cbiAgLyoqXG4gICAqIExpc3RzIHRoZSB0cmFuc2l0aXZlIGltcG9ydHMgb2YgYSBnaXZlbiBgdHMuU291cmNlRmlsZWAuXG4gICAqL1xuICB0cmFuc2l0aXZlSW1wb3J0c09mKHNmOiB0cy5Tb3VyY2VGaWxlKTogU2V0PHRzLlNvdXJjZUZpbGU+IHtcbiAgICBjb25zdCBpbXBvcnRzID0gbmV3IFNldDx0cy5Tb3VyY2VGaWxlPigpO1xuICAgIHRoaXMudHJhbnNpdGl2ZUltcG9ydHNPZkhlbHBlcihzZiwgaW1wb3J0cyk7XG4gICAgcmV0dXJuIGltcG9ydHM7XG4gIH1cblxuICBwcml2YXRlIHRyYW5zaXRpdmVJbXBvcnRzT2ZIZWxwZXIoc2Y6IHRzLlNvdXJjZUZpbGUsIHJlc3VsdHM6IFNldDx0cy5Tb3VyY2VGaWxlPik6IHZvaWQge1xuICAgIGlmIChyZXN1bHRzLmhhcyhzZikpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcmVzdWx0cy5hZGQoc2YpO1xuICAgIHRoaXMuaW1wb3J0c09mKHNmKS5mb3JFYWNoKGltcG9ydGVkID0+IHtcbiAgICAgIHRoaXMudHJhbnNpdGl2ZUltcG9ydHNPZkhlbHBlcihpbXBvcnRlZCwgcmVzdWx0cyk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQWRkIGEgcmVjb3JkIG9mIGFuIGltcG9ydCBmcm9tIGBzZmAgdG8gYGltcG9ydGVkYCwgdGhhdCdzIG5vdCBwcmVzZW50IGluIHRoZSBvcmlnaW5hbFxuICAgKiBgdHMuUHJvZ3JhbWAgYnV0IHdpbGwgYmUgcmVtZW1iZXJlZCBieSB0aGUgYEltcG9ydEdyYXBoYC5cbiAgICovXG4gIGFkZFN5bnRoZXRpY0ltcG9ydChzZjogdHMuU291cmNlRmlsZSwgaW1wb3J0ZWQ6IHRzLlNvdXJjZUZpbGUpOiB2b2lkIHtcbiAgICBpZiAoaXNMb2NhbEZpbGUoaW1wb3J0ZWQpKSB7XG4gICAgICB0aGlzLmltcG9ydHNPZihzZikuYWRkKGltcG9ydGVkKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHNjYW5JbXBvcnRzKHNmOiB0cy5Tb3VyY2VGaWxlKTogU2V0PHRzLlNvdXJjZUZpbGU+IHtcbiAgICBjb25zdCBpbXBvcnRzID0gbmV3IFNldDx0cy5Tb3VyY2VGaWxlPigpO1xuICAgIC8vIExvb2sgdGhyb3VnaCB0aGUgc291cmNlIGZpbGUgZm9yIGltcG9ydCBzdGF0ZW1lbnRzLlxuICAgIHNmLnN0YXRlbWVudHMuZm9yRWFjaChzdG10ID0+IHtcbiAgICAgIGlmICgodHMuaXNJbXBvcnREZWNsYXJhdGlvbihzdG10KSB8fCB0cy5pc0V4cG9ydERlY2xhcmF0aW9uKHN0bXQpKSAmJlxuICAgICAgICAgIHN0bXQubW9kdWxlU3BlY2lmaWVyICE9PSB1bmRlZmluZWQgJiYgdHMuaXNTdHJpbmdMaXRlcmFsKHN0bXQubW9kdWxlU3BlY2lmaWVyKSkge1xuICAgICAgICAvLyBSZXNvbHZlIHRoZSBtb2R1bGUgdG8gYSBmaWxlLCBhbmQgY2hlY2sgd2hldGhlciB0aGF0IGZpbGUgaXMgaW4gdGhlIHRzLlByb2dyYW0uXG4gICAgICAgIGNvbnN0IG1vZHVsZU5hbWUgPSBzdG10Lm1vZHVsZVNwZWNpZmllci50ZXh0O1xuICAgICAgICBjb25zdCBtb2R1bGVGaWxlID0gdGhpcy5yZXNvbHZlci5yZXNvbHZlTW9kdWxlKG1vZHVsZU5hbWUsIHNmLmZpbGVOYW1lKTtcbiAgICAgICAgaWYgKG1vZHVsZUZpbGUgIT09IG51bGwgJiYgaXNMb2NhbEZpbGUobW9kdWxlRmlsZSkpIHtcbiAgICAgICAgICAvLyBSZWNvcmQgdGhpcyBsb2NhbCBpbXBvcnQuXG4gICAgICAgICAgaW1wb3J0cy5hZGQobW9kdWxlRmlsZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gaW1wb3J0cztcbiAgfVxufVxuXG5mdW5jdGlvbiBpc0xvY2FsRmlsZShzZjogdHMuU291cmNlRmlsZSk6IGJvb2xlYW4ge1xuICByZXR1cm4gIXNmLmZpbGVOYW1lLmVuZHNXaXRoKCcuZC50cycpO1xufVxuIl19
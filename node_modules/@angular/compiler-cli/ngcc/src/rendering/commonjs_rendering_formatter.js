(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define("@angular/compiler-cli/ngcc/src/rendering/commonjs_rendering_formatter", ["require", "exports", "tslib", "canonical-path", "typescript", "@angular/compiler-cli/ngcc/src/host/commonjs_umd_utils", "@angular/compiler-cli/ngcc/src/rendering/esm5_rendering_formatter", "@angular/compiler-cli/ngcc/src/rendering/utils"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = require("tslib");
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var canonical_path_1 = require("canonical-path");
    var ts = require("typescript");
    var commonjs_umd_utils_1 = require("@angular/compiler-cli/ngcc/src/host/commonjs_umd_utils");
    var esm5_rendering_formatter_1 = require("@angular/compiler-cli/ngcc/src/rendering/esm5_rendering_formatter");
    var utils_1 = require("@angular/compiler-cli/ngcc/src/rendering/utils");
    /**
     * A RenderingFormatter that works with CommonJS files, instead of `import` and `export` statements
     * the module is an IIFE with a factory function call with dependencies, which are defined in a
     * wrapper function for AMD, CommonJS and global module formats.
     */
    var CommonJsRenderingFormatter = /** @class */ (function (_super) {
        tslib_1.__extends(CommonJsRenderingFormatter, _super);
        function CommonJsRenderingFormatter(commonJsHost, isCore) {
            var _this = _super.call(this, commonJsHost, isCore) || this;
            _this.commonJsHost = commonJsHost;
            return _this;
        }
        /**
         *  Add the imports below any in situ imports as `require` calls.
         */
        CommonJsRenderingFormatter.prototype.addImports = function (output, imports, file) {
            // Avoid unnecessary work if there are no imports to add.
            if (imports.length === 0) {
                return;
            }
            var insertionPoint = this.findEndOfImports(file);
            var renderedImports = imports.map(function (i) { return "var " + i.qualifier + " = require('" + i.specifier + "');\n"; }).join('');
            output.appendLeft(insertionPoint, renderedImports);
        };
        /**
         * Add the exports to the bottom of the file.
         */
        CommonJsRenderingFormatter.prototype.addExports = function (output, entryPointBasePath, exports, importManager, file) {
            exports.forEach(function (e) {
                var basePath = utils_1.stripExtension(e.from);
                var relativePath = './' + canonical_path_1.relative(canonical_path_1.dirname(entryPointBasePath), basePath);
                var namedImport = entryPointBasePath !== basePath ?
                    importManager.generateNamedImport(relativePath, e.identifier) :
                    { symbol: e.identifier, moduleImport: null };
                var importNamespace = namedImport.moduleImport ? namedImport.moduleImport + "." : '';
                var exportStr = "\nexports." + e.identifier + " = " + importNamespace + namedImport.symbol + ";";
                output.append(exportStr);
            });
        };
        CommonJsRenderingFormatter.prototype.addDirectExports = function (output, exports, importManager, file) {
            var e_1, _a;
            try {
                for (var exports_1 = tslib_1.__values(exports), exports_1_1 = exports_1.next(); !exports_1_1.done; exports_1_1 = exports_1.next()) {
                    var e = exports_1_1.value;
                    var namedImport = importManager.generateNamedImport(e.fromModule, e.symbolName);
                    var importNamespace = namedImport.moduleImport ? namedImport.moduleImport + "." : '';
                    var exportStr = "\nexports." + e.asAlias + " = " + importNamespace + namedImport.symbol + ";";
                    output.append(exportStr);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (exports_1_1 && !exports_1_1.done && (_a = exports_1.return)) _a.call(exports_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        };
        CommonJsRenderingFormatter.prototype.findEndOfImports = function (sf) {
            var e_2, _a;
            try {
                for (var _b = tslib_1.__values(sf.statements), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var statement = _c.value;
                    if (ts.isExpressionStatement(statement) && commonjs_umd_utils_1.isRequireCall(statement.expression)) {
                        continue;
                    }
                    var declarations = ts.isVariableStatement(statement) ?
                        Array.from(statement.declarationList.declarations) :
                        [];
                    if (declarations.some(function (d) { return !d.initializer || !commonjs_umd_utils_1.isRequireCall(d.initializer); })) {
                        return statement.getStart();
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
            return 0;
        };
        return CommonJsRenderingFormatter;
    }(esm5_rendering_formatter_1.Esm5RenderingFormatter));
    exports.CommonJsRenderingFormatter = CommonJsRenderingFormatter;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uanNfcmVuZGVyaW5nX2Zvcm1hdHRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbXBpbGVyLWNsaS9uZ2NjL3NyYy9yZW5kZXJpbmcvY29tbW9uanNfcmVuZGVyaW5nX2Zvcm1hdHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFBQTs7Ozs7O09BTUc7SUFDSCxpREFBaUQ7SUFFakQsK0JBQWlDO0lBS2pDLDZGQUF5RDtJQUd6RCw4R0FBa0U7SUFDbEUsd0VBQXVDO0lBRXZDOzs7O09BSUc7SUFDSDtRQUFnRCxzREFBc0I7UUFDcEUsb0NBQXNCLFlBQWdDLEVBQUUsTUFBZTtZQUF2RSxZQUNFLGtCQUFNLFlBQVksRUFBRSxNQUFNLENBQUMsU0FDNUI7WUFGcUIsa0JBQVksR0FBWixZQUFZLENBQW9COztRQUV0RCxDQUFDO1FBRUQ7O1dBRUc7UUFDSCwrQ0FBVSxHQUFWLFVBQVcsTUFBbUIsRUFBRSxPQUFpQixFQUFFLElBQW1CO1lBQ3BFLHlEQUF5RDtZQUN6RCxJQUFJLE9BQU8sQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO2dCQUN4QixPQUFPO2FBQ1I7WUFFRCxJQUFNLGNBQWMsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbkQsSUFBTSxlQUFlLEdBQ2pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxTQUFPLENBQUMsQ0FBQyxTQUFTLG9CQUFlLENBQUMsQ0FBQyxTQUFTLFVBQU8sRUFBbkQsQ0FBbUQsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNuRixNQUFNLENBQUMsVUFBVSxDQUFDLGNBQWMsRUFBRSxlQUFlLENBQUMsQ0FBQztRQUNyRCxDQUFDO1FBRUQ7O1dBRUc7UUFDSCwrQ0FBVSxHQUFWLFVBQ0ksTUFBbUIsRUFBRSxrQkFBMEIsRUFBRSxP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XG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5pbXBvcnQge2Rpcm5hbWUsIHJlbGF0aXZlfSBmcm9tICdjYW5vbmljYWwtcGF0aCc7XG5pbXBvcnQgTWFnaWNTdHJpbmcgZnJvbSAnbWFnaWMtc3RyaW5nJztcbmltcG9ydCAqIGFzIHRzIGZyb20gJ3R5cGVzY3JpcHQnO1xuXG5pbXBvcnQge1JlZXhwb3J0fSBmcm9tICcuLi8uLi8uLi9zcmMvbmd0c2MvaW1wb3J0cyc7XG5pbXBvcnQge0ltcG9ydCwgSW1wb3J0TWFuYWdlcn0gZnJvbSAnLi4vLi4vLi4vc3JjL25ndHNjL3RyYW5zbGF0b3InO1xuaW1wb3J0IHtFeHBvcnRJbmZvfSBmcm9tICcuLi9hbmFseXNpcy9wcml2YXRlX2RlY2xhcmF0aW9uc19hbmFseXplcic7XG5pbXBvcnQge2lzUmVxdWlyZUNhbGx9IGZyb20gJy4uL2hvc3QvY29tbW9uanNfdW1kX3V0aWxzJztcbmltcG9ydCB7TmdjY1JlZmxlY3Rpb25Ib3N0fSBmcm9tICcuLi9ob3N0L25nY2NfaG9zdCc7XG5cbmltcG9ydCB7RXNtNVJlbmRlcmluZ0Zvcm1hdHRlcn0gZnJvbSAnLi9lc201X3JlbmRlcmluZ19mb3JtYXR0ZXInO1xuaW1wb3J0IHtzdHJpcEV4dGVuc2lvbn0gZnJvbSAnLi91dGlscyc7XG5cbi8qKlxuICogQSBSZW5kZXJpbmdGb3JtYXR0ZXIgdGhhdCB3b3JrcyB3aXRoIENvbW1vbkpTIGZpbGVzLCBpbnN0ZWFkIG9mIGBpbXBvcnRgIGFuZCBgZXhwb3J0YCBzdGF0ZW1lbnRzXG4gKiB0aGUgbW9kdWxlIGlzIGFuIElJRkUgd2l0aCBhIGZhY3RvcnkgZnVuY3Rpb24gY2FsbCB3aXRoIGRlcGVuZGVuY2llcywgd2hpY2ggYXJlIGRlZmluZWQgaW4gYVxuICogd3JhcHBlciBmdW5jdGlvbiBmb3IgQU1ELCBDb21tb25KUyBhbmQgZ2xvYmFsIG1vZHVsZSBmb3JtYXRzLlxuICovXG5leHBvcnQgY2xhc3MgQ29tbW9uSnNSZW5kZXJpbmdGb3JtYXR0ZXIgZXh0ZW5kcyBFc201UmVuZGVyaW5nRm9ybWF0dGVyIHtcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIGNvbW1vbkpzSG9zdDogTmdjY1JlZmxlY3Rpb25Ib3N0LCBpc0NvcmU6IGJvb2xlYW4pIHtcbiAgICBzdXBlcihjb21tb25Kc0hvc3QsIGlzQ29yZSk7XG4gIH1cblxuICAvKipcbiAgICogIEFkZCB0aGUgaW1wb3J0cyBiZWxvdyBhbnkgaW4gc2l0dSBpbXBvcnRzIGFzIGByZXF1aXJlYCBjYWxscy5cbiAgICovXG4gIGFkZEltcG9ydHMob3V0cHV0OiBNYWdpY1N0cmluZywgaW1wb3J0czogSW1wb3J0W10sIGZpbGU6IHRzLlNvdXJjZUZpbGUpOiB2b2lkIHtcbiAgICAvLyBBdm9pZCB1bm5lY2Vzc2FyeSB3b3JrIGlmIHRoZXJlIGFyZSBubyBpbXBvcnRzIHRvIGFkZC5cbiAgICBpZiAoaW1wb3J0cy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBpbnNlcnRpb25Qb2ludCA9IHRoaXMuZmluZEVuZE9mSW1wb3J0cyhmaWxlKTtcbiAgICBjb25zdCByZW5kZXJlZEltcG9ydHMgPVxuICAgICAgICBpbXBvcnRzLm1hcChpID0+IGB2YXIgJHtpLnF1YWxpZmllcn0gPSByZXF1aXJlKCcke2kuc3BlY2lmaWVyfScpO1xcbmApLmpvaW4oJycpO1xuICAgIG91dHB1dC5hcHBlbmRMZWZ0KGluc2VydGlvblBvaW50LCByZW5kZXJlZEltcG9ydHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCB0aGUgZXhwb3J0cyB0byB0aGUgYm90dG9tIG9mIHRoZSBmaWxlLlxuICAgKi9cbiAgYWRkRXhwb3J0cyhcbiAgICAgIG91dHB1dDogTWFnaWNTdHJpbmcsIGVudHJ5UG9pbnRCYXNlUGF0aDogc3RyaW5nLCBleHBvcnRzOiBFeHBvcnRJbmZvW10sXG4gICAgICBpbXBvcnRNYW5hZ2VyOiBJbXBvcnRNYW5hZ2VyLCBmaWxlOiB0cy5Tb3VyY2VGaWxlKTogdm9pZCB7XG4gICAgZXhwb3J0cy5mb3JFYWNoKGUgPT4ge1xuICAgICAgY29uc3QgYmFzZVBhdGggPSBzdHJpcEV4dGVuc2lvbihlLmZyb20pO1xuICAgICAgY29uc3QgcmVsYXRpdmVQYXRoID0gJy4vJyArIHJlbGF0aXZlKGRpcm5hbWUoZW50cnlQb2ludEJhc2VQYXRoKSwgYmFzZVBhdGgpO1xuICAgICAgY29uc3QgbmFtZWRJbXBvcnQgPSBlbnRyeVBvaW50QmFzZVBhdGggIT09IGJhc2VQYXRoID9cbiAgICAgICAgICBpbXBvcnRNYW5hZ2VyLmdlbmVyYXRlTmFtZWRJbXBvcnQocmVsYXRpdmVQYXRoLCBlLmlkZW50aWZpZXIpIDpcbiAgICAgICAgICB7c3ltYm9sOiBlLmlkZW50aWZpZXIsIG1vZHVsZUltcG9ydDogbnVsbH07XG4gICAgICBjb25zdCBpbXBvcnROYW1lc3BhY2UgPSBuYW1lZEltcG9ydC5tb2R1bGVJbXBvcnQgPyBgJHtuYW1lZEltcG9ydC5tb2R1bGVJbXBvcnR9LmAgOiAnJztcbiAgICAgIGNvbnN0IGV4cG9ydFN0ciA9IGBcXG5leHBvcnRzLiR7ZS5pZGVudGlmaWVyfSA9ICR7aW1wb3J0TmFtZXNwYWNlfSR7bmFtZWRJbXBvcnQuc3ltYm9sfTtgO1xuICAgICAgb3V0cHV0LmFwcGVuZChleHBvcnRTdHIpO1xuICAgIH0pO1xuICB9XG5cbiAgYWRkRGlyZWN0RXhwb3J0cyhcbiAgICAgIG91dHB1dDogTWFnaWNTdHJpbmcsIGV4cG9ydHM6IFJlZXhwb3J0W10sIGltcG9ydE1hbmFnZXI6IEltcG9ydE1hbmFnZXIsXG4gICAgICBmaWxlOiB0cy5Tb3VyY2VGaWxlKTogdm9pZCB7XG4gICAgZm9yIChjb25zdCBlIG9mIGV4cG9ydHMpIHtcbiAgICAgIGNvbnN0IG5hbWVkSW1wb3J0ID0gaW1wb3J0TWFuYWdlci5nZW5lcmF0ZU5hbWVkSW1wb3J0KGUuZnJvbU1vZHVsZSwgZS5zeW1ib2xOYW1lKTtcbiAgICAgIGNvbnN0IGltcG9ydE5hbWVzcGFjZSA9IG5hbWVkSW1wb3J0Lm1vZHVsZUltcG9ydCA/IGAke25hbWVkSW1wb3J0Lm1vZHVsZUltcG9ydH0uYCA6ICcnO1xuICAgICAgY29uc3QgZXhwb3J0U3RyID0gYFxcbmV4cG9ydHMuJHtlLmFzQWxpYXN9ID0gJHtpbXBvcnROYW1lc3BhY2V9JHtuYW1lZEltcG9ydC5zeW1ib2x9O2A7XG4gICAgICBvdXRwdXQuYXBwZW5kKGV4cG9ydFN0cik7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIGZpbmRFbmRPZkltcG9ydHMoc2Y6IHRzLlNvdXJjZUZpbGUpOiBudW1iZXIge1xuICAgIGZvciAoY29uc3Qgc3RhdGVtZW50IG9mIHNmLnN0YXRlbWVudHMpIHtcbiAgICAgIGlmICh0cy5pc0V4cHJlc3Npb25TdGF0ZW1lbnQoc3RhdGVtZW50KSAmJiBpc1JlcXVpcmVDYWxsKHN0YXRlbWVudC5leHByZXNzaW9uKSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGRlY2xhcmF0aW9ucyA9IHRzLmlzVmFyaWFibGVTdGF0ZW1lbnQoc3RhdGVtZW50KSA/XG4gICAgICAgICAgQXJyYXkuZnJvbShzdGF0ZW1lbnQuZGVjbGFyYXRpb25MaXN0LmRlY2xhcmF0aW9ucykgOlxuICAgICAgICAgIFtdO1xuICAgICAgaWYgKGRlY2xhcmF0aW9ucy5zb21lKGQgPT4gIWQuaW5pdGlhbGl6ZXIgfHwgIWlzUmVxdWlyZUNhbGwoZC5pbml0aWFsaXplcikpKSB7XG4gICAgICAgIHJldHVybiBzdGF0ZW1lbnQuZ2V0U3RhcnQoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIDA7XG4gIH1cbn1cbiJdfQ==
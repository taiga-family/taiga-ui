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
        define("@angular/compiler/src/render3/r3_module_compiler", ["require", "exports", "tslib", "@angular/compiler/src/compile_metadata", "@angular/compiler/src/output/map_util", "@angular/compiler/src/output/output_ast", "@angular/compiler/src/render3/r3_factory", "@angular/compiler/src/render3/r3_identifiers", "@angular/compiler/src/render3/util"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = require("tslib");
    var compile_metadata_1 = require("@angular/compiler/src/compile_metadata");
    var map_util_1 = require("@angular/compiler/src/output/map_util");
    var o = require("@angular/compiler/src/output/output_ast");
    var r3_factory_1 = require("@angular/compiler/src/render3/r3_factory");
    var r3_identifiers_1 = require("@angular/compiler/src/render3/r3_identifiers");
    var util_1 = require("@angular/compiler/src/render3/util");
    /**
     * Construct an `R3NgModuleDef` for the given `R3NgModuleMetadata`.
     */
    function compileNgModule(meta) {
        var internalType = meta.internalType, moduleType = meta.type, bootstrap = meta.bootstrap, declarations = meta.declarations, imports = meta.imports, exports = meta.exports, schemas = meta.schemas, containsForwardDecls = meta.containsForwardDecls, emitInline = meta.emitInline, id = meta.id;
        var additionalStatements = [];
        var definitionMap = { type: internalType };
        // Only generate the keys in the metadata if the arrays have values.
        if (bootstrap.length) {
            definitionMap.bootstrap = refsToArray(bootstrap, containsForwardDecls);
        }
        // If requested to emit scope information inline, pass the declarations, imports and exports to
        // the `ɵɵdefineNgModule` call. The JIT compilation uses this.
        if (emitInline) {
            if (declarations.length) {
                definitionMap.declarations = refsToArray(declarations, containsForwardDecls);
            }
            if (imports.length) {
                definitionMap.imports = refsToArray(imports, containsForwardDecls);
            }
            if (exports.length) {
                definitionMap.exports = refsToArray(exports, containsForwardDecls);
            }
        }
        // If not emitting inline, the scope information is not passed into `ɵɵdefineNgModule` as it would
        // prevent tree-shaking of the declarations, imports and exports references.
        else {
            var setNgModuleScopeCall = generateSetNgModuleScopeCall(meta);
            if (setNgModuleScopeCall !== null) {
                additionalStatements.push(setNgModuleScopeCall);
            }
        }
        if (schemas && schemas.length) {
            definitionMap.schemas = o.literalArr(schemas.map(function (ref) { return ref.value; }));
        }
        if (id) {
            definitionMap.id = id;
        }
        var expression = o.importExpr(r3_identifiers_1.Identifiers.defineNgModule).callFn([util_1.mapToMapExpression(definitionMap)]);
        var type = new o.ExpressionType(o.importExpr(r3_identifiers_1.Identifiers.NgModuleDefWithMeta, [
            new o.ExpressionType(moduleType.type), tupleTypeOf(declarations), tupleTypeOf(imports),
            tupleTypeOf(exports)
        ]));
        return { expression: expression, type: type, additionalStatements: additionalStatements };
    }
    exports.compileNgModule = compileNgModule;
    /**
     * Generates a function call to `ɵɵsetNgModuleScope` with all necessary information so that the
     * transitive module scope can be computed during runtime in JIT mode. This call is marked pure
     * such that the references to declarations, imports and exports may be elided causing these
     * symbols to become tree-shakeable.
     */
    function generateSetNgModuleScopeCall(meta) {
        var moduleType = meta.adjacentType, declarations = meta.declarations, imports = meta.imports, exports = meta.exports, containsForwardDecls = meta.containsForwardDecls;
        var scopeMap = {};
        if (declarations.length) {
            scopeMap.declarations = refsToArray(declarations, containsForwardDecls);
        }
        if (imports.length) {
            scopeMap.imports = refsToArray(imports, containsForwardDecls);
        }
        if (exports.length) {
            scopeMap.exports = refsToArray(exports, containsForwardDecls);
        }
        if (Object.keys(scopeMap).length === 0) {
            return null;
        }
        // setNgModuleScope(...)
        var fnCall = new o.InvokeFunctionExpr(
        /* fn */ o.importExpr(r3_identifiers_1.Identifiers.setNgModuleScope), 
        /* args */ [moduleType, util_1.mapToMapExpression(scopeMap)]);
        // (ngJitMode guard) && setNgModuleScope(...)
        var guardedCall = util_1.jitOnlyGuardedExpression(fnCall);
        // function() { (ngJitMode guard) && setNgModuleScope(...); }
        var iife = new o.FunctionExpr(
        /* params */ [], 
        /* statements */ [guardedCall.toStmt()]);
        // (function() { (ngJitMode guard) && setNgModuleScope(...); })()
        var iifeCall = new o.InvokeFunctionExpr(
        /* fn */ iife, 
        /* args */ []);
        return iifeCall.toStmt();
    }
    function compileInjector(meta) {
        var result = r3_factory_1.compileFactoryFunction({
            name: meta.name,
            type: meta.type,
            internalType: meta.internalType,
            typeArgumentCount: 0,
            deps: meta.deps,
            injectFn: r3_identifiers_1.Identifiers.inject,
            target: r3_factory_1.R3FactoryTarget.NgModule,
        });
        var definitionMap = {
            factory: result.factory,
        };
        if (meta.providers !== null) {
            definitionMap.providers = meta.providers;
        }
        if (meta.imports.length > 0) {
            definitionMap.imports = o.literalArr(meta.imports);
        }
        var expression = o.importExpr(r3_identifiers_1.Identifiers.defineInjector).callFn([util_1.mapToMapExpression(definitionMap)]);
        var type = new o.ExpressionType(o.importExpr(r3_identifiers_1.Identifiers.InjectorDef, [new o.ExpressionType(meta.type.type)]));
        return { expression: expression, type: type, statements: result.statements };
    }
    exports.compileInjector = compileInjector;
    // TODO(alxhub): integrate this with `compileNgModule`. Currently the two are separate operations.
    function compileNgModuleFromRender2(ctx, ngModule, injectableCompiler) {
        var className = compile_metadata_1.identifierName(ngModule.type);
        var rawImports = ngModule.rawImports ? [ngModule.rawImports] : [];
        var rawExports = ngModule.rawExports ? [ngModule.rawExports] : [];
        var injectorDefArg = map_util_1.mapLiteral({
            'factory': injectableCompiler.factoryFor({ type: ngModule.type, symbol: ngModule.type.reference }, ctx),
            'providers': util_1.convertMetaToOutput(ngModule.rawProviders, ctx),
            'imports': util_1.convertMetaToOutput(tslib_1.__spread(rawImports, rawExports), ctx),
        });
        var injectorDef = o.importExpr(r3_identifiers_1.Identifiers.defineInjector).callFn([injectorDefArg]);
        ctx.statements.push(new o.ClassStmt(
        /* name */ className, 
        /* parent */ null, 
        /* fields */ [new o.ClassField(
            /* name */ 'ɵinj', 
            /* type */ o.INFERRED_TYPE, 
            /* modifiers */ [o.StmtModifier.Static], 
            /* initializer */ injectorDef)], 
        /* getters */ [], 
        /* constructorMethod */ new o.ClassMethod(null, [], []), 
        /* methods */ []));
    }
    exports.compileNgModuleFromRender2 = compileNgModuleFromRender2;
    function accessExportScope(module) {
        var selectorScope = new o.ReadPropExpr(module, 'ɵmod');
        return new o.ReadPropExpr(selectorScope, 'exported');
    }
    function tupleTypeOf(exp) {
        var types = exp.map(function (ref) { return o.typeofExpr(ref.type); });
        return exp.length > 0 ? o.expressionType(o.literalArr(types)) : o.NONE_TYPE;
    }
    function refsToArray(refs, shouldForwardDeclare) {
        var values = o.literalArr(refs.map(function (ref) { return ref.value; }));
        return shouldForwardDeclare ? o.fn([], [new o.ReturnStatement(values)]) : values;
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicjNfbW9kdWxlX2NvbXBpbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29tcGlsZXIvc3JjL3JlbmRlcjMvcjNfbW9kdWxlX2NvbXBpbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRzs7Ozs7Ozs7Ozs7OztJQUVILDJFQUFpRjtJQUVqRixrRUFBOEM7SUFDOUMsMkRBQTBDO0lBRzFDLHVFQUEyRjtJQUMzRiwrRUFBbUQ7SUFDbkQsMkRBQXNHO0lBNEV0Rzs7T0FFRztJQUNILFNBQWdCLGVBQWUsQ0FBQyxJQUF3QjtRQUVwRCxJQUFBLGdDQUFZLEVBQ1osc0JBQWdCLEVBQ2hCLDBCQUFTLEVBQ1QsZ0NBQVksRUFDWixzQkFBTyxFQUNQLHNCQUFPLEVBQ1Asc0JBQU8sRUFDUCxnREFBb0IsRUFDcEIsNEJBQVUsRUFDVixZQUFFLENBQ0s7UUFFVCxJQUFNLG9CQUFvQixHQUFrQixFQUFFLENBQUM7UUFDL0MsSUFBTSxhQUFhLEdBQUcsRUFBQyxJQUFJLEVBQUUsWUFBWSxFQVF4QyxDQUFDO1FBRUYsb0VBQW9FO1FBQ3BFLElBQUksU0FBUyxDQUFDLE1BQU0sRUFBRTtZQUNwQixhQUFhLENBQUMsU0FBUyxHQUFHLFdBQVcsQ0FBQyxTQUFTLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztTQUN4RTtRQUVELCtGQUErRjtRQUMvRiw4REFBOEQ7UUFDOUQsSUFBSSxVQUFVLEVBQUU7WUFDZCxJQUFJLFlBQVksQ0FBQyxNQUFNLEVBQUU7Z0JBQ3ZCLGFBQWEsQ0FBQyxZQUFZLEdBQUcsV0FBVyxDQUFDLFlBQVksRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO2FBQzlFO1lBRUQsSUFBSSxPQUFPLENBQUMsTUFBTSxFQUFFO2dCQUNsQixhQUFhLENBQUMsT0FBTyxHQUFHLFdBQVcsQ0FBQyxPQUFPLEVBQUUsb0JBQW9CLENBQUMsQ0FBQzthQUNwRTtZQUVELElBQUksT0FBTyxDQUFD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LFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQzlFLENBQUM7SUFFRCxTQUFTLFdBQVcsQ0FBQyxJQUFtQixFQUFFLG9CQUE2QjtRQUNyRSxJQUFNLE1BQU0sR0FBRyxDQUFDLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsS0FBSyxFQUFULENBQVMsQ0FBQyxDQUFDLENBQUM7UUFDeEQsT0FBTyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7SUFDbkYsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtDb21waWxlU2hhbGxvd01vZHVsZU1ldGFkYXRhLCBpZGVudGlmaWVyTmFtZX0gZnJvbSAnLi4vY29tcGlsZV9tZXRhZGF0YSc7XG5pbXBvcnQge0luamVjdGFibGVDb21waWxlcn0gZnJvbSAnLi4vaW5qZWN0YWJsZV9jb21waWxlcic7XG5pbXBvcnQge21hcExpdGVyYWx9IGZyb20gJy4uL291dHB1dC9tYXBfdXRpbCc7XG5pbXBvcnQgKiBhcyBvIGZyb20gJy4uL291dHB1dC9vdXRwdXRfYXN0JztcbmltcG9ydCB7T3V0cHV0Q29udGV4dH0gZnJvbSAnLi4vdXRpbCc7XG5cbmltcG9ydCB7Y29tcGlsZUZhY3RvcnlGdW5jdGlvbiwgUjNEZXBlbmRlbmN5TWV0YWRhdGEsIFIzRmFjdG9yeVRhcmdldH0gZnJvbSAnLi9yM19mYWN0b3J5JztcbmltcG9ydCB7SWRlbnRpZmllcnMgYXMgUjN9IGZyb20gJy4vcjNfaWRlbnRpZmllcnMnO1xuaW1wb3J0IHtjb252ZXJ0TWV0YVRvT3V0cHV0LCBqaXRPbmx5R3VhcmRlZEV4cHJlc3Npb24sIG1hcFRvTWFwRXhwcmVzc2lvbiwgUjNSZWZlcmVuY2V9IGZyb20gJy4vdXRpbCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUjNOZ01vZHVsZURlZiB7XG4gIGV4cHJlc3Npb246IG8uRXhwcmVzc2lvbjtcbiAgdHlwZTogby5UeXBlO1xuICBhZGRpdGlvbmFsU3RhdGVtZW50czogby5TdGF0ZW1lbnRbXTtcbn1cblxuLyoqXG4gKiBNZXRhZGF0YSByZXF1aXJlZCBieSB0aGUgbW9kdWxlIGNvbXBpbGVyIHRvIGdlbmVyYXRlIGEgbW9kdWxlIGRlZiAoYMm1bW9kYCkgZm9yIGEgdHlwZS5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSM05nTW9kdWxlTWV0YWRhdGEge1xuICAvKipcbiAgICogQW4gZXhwcmVzc2lvbiByZXByZXNlbnRpbmcgdGhlIG1vZHVsZSB0eXBlIGJlaW5nIGNvbXBpbGVkLlxuICAgKi9cbiAgdHlwZTogUjNSZWZlcmVuY2U7XG5cbiAgLyoqXG4gICAqIEFuIGV4cHJlc3Npb24gcmVwcmVzZW50aW5nIHRoZSBtb2R1bGUgdHlwZSBiZWluZyBjb21waWxlZCwgaW50ZW5kZWQgZm9yIHVzZSB3aXRoaW4gYSBjbGFzc1xuICAgKiBkZWZpbml0aW9uIGl0c2VsZi5cbiAgICpcbiAgICogVGhpcyBjYW4gZGlmZmVyIGZyb20gdGhlIG91dGVyIGB0eXBlYCBpZiB0aGUgY2xhc3MgaXMgYmVpbmcgY29tcGlsZWQgYnkgbmdjYyBhbmQgaXMgaW5zaWRlXG4gICAqIGFuIElJRkUgc3RydWN0dXJlIHRoYXQgdXNlcyBhIGRpZmZlcmVudCBuYW1lIGludGVybmFsbHkuXG4gICAqL1xuICBpbnRlcm5hbFR5cGU6IG8uRXhwcmVzc2lvbjtcblxuICAvKipcbiAgICogQW4gZXhwcmVzc2lvbiBpbnRlbmRlZCBmb3IgdXNlIGJ5IHN0YXRlbWVudHMgdGhhdCBhcmUgYWRqYWNlbnQgKGkuZS4gdGlnaHRseSBjb3VwbGVkKSB0byBidXRcbiAgICogbm90IGludGVybmFsIHRvIGEgY2xhc3MgZGVmaW5pdGlvbi5cbiAgICpcbiAgICogVGhpcyBjYW4gZGlmZmVyIGZyb20gdGhlIG91dGVyIGB0eXBlYCBpZiB0aGUgY2xhc3MgaXMgYmVpbmcgY29tcGlsZWQgYnkgbmdjYyBhbmQgaXMgaW5zaWRlXG4gICAqIGFuIElJRkUgc3RydWN0dXJlIHRoYXQgdXNlcyBhIGRpZmZlcmVudCBuYW1lIGludGVybmFsbHkuXG4gICAqL1xuICBhZGphY2VudFR5cGU6IG8uRXhwcmVzc2lvbjtcblxuICAvKipcbiAgICogQW4gYXJyYXkgb2YgZXhwcmVzc2lvbnMgcmVwcmVzZW50aW5nIHRoZSBib290c3RyYXAgY29tcG9uZW50cyBzcGVjaWZpZWQgYnkgdGhlIG1vZHVsZS5cbiAgICovXG4gIGJvb3RzdHJhcDogUjNSZWZlcmVuY2VbXTtcblxuICAvKipcbiAgICogQW4gYXJyYXkgb2YgZXhwcmVzc2lvbnMgcmVwcmVzZW50aW5nIHRoZSBkaXJlY3RpdmVzIGFuZCBwaXBlcyBkZWNsYXJlZCBieSB0aGUgbW9kdWxlLlxuICAgKi9cbiAgZGVjbGFyYXRpb25zOiBSM1JlZmVyZW5jZVtdO1xuXG4gIC8qKlxuICAgKiBBbiBhcnJheSBvZiBleHByZXNzaW9ucyByZXByZXNlbnRpbmcgdGhlIGltcG9ydHMgb2YgdGhlIG1vZHVsZS5cbiAgICovXG4gIGltcG9ydHM6IFIzUmVmZXJlbmNlW107XG5cbiAgLyoqXG4gICAqIEFuIGFycmF5IG9mIGV4cHJlc3Npb25zIHJlcHJlc2VudGluZyB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlLlxuICAgKi9cbiAgZXhwb3J0czogUjNSZWZlcmVuY2VbXTtcblxuICAvKipcbiAgICogV2hldGhlciB0byBlbWl0IHRoZSBzZWxlY3RvciBzY29wZSB2YWx1ZXMgKGRlY2xhcmF0aW9ucywgaW1wb3J0cywgZXhwb3J0cykgaW5saW5lIGludG8gdGhlXG4gICAqIG1vZHVsZSBkZWZpbml0aW9uLCBvciB0byBnZW5lcmF0ZSBhZGRpdGlvbmFsIHN0YXRlbWVudHMgd2hpY2ggcGF0Y2ggdGhlbSBvbi4gSW5saW5lIGVtaXNzaW9uXG4gICAqIGRvZXMgbm90IGFsbG93IGNvbXBvbmVudHMgdG8gYmUgdHJlZS1zaGFrZW4sIGJ1dCBpcyB1c2VmdWwgZm9yIEpJVCBtb2RlLlxuICAgKi9cbiAgZW1pdElubGluZTogYm9vbGVhbjtcblxuICAvKipcbiAgICogV2hldGhlciB0byBnZW5lcmF0ZSBjbG9zdXJlIHdyYXBwZXJzIGZvciBib290c3RyYXAsIGRlY2xhcmF0aW9ucywgaW1wb3J0cywgYW5kIGV4cG9ydHMuXG4gICAqL1xuICBjb250YWluc0ZvcndhcmREZWNsczogYm9vbGVhbjtcblxuICAvKipcbiAgICogVGhlIHNldCBvZiBzY2hlbWFzIHRoYXQgZGVjbGFyZSBlbGVtZW50cyB0byBiZSBhbGxvd2VkIGluIHRoZSBOZ01vZHVsZS5cbiAgICovXG4gIHNjaGVtYXM6IFIzUmVmZXJlbmNlW118bnVsbDtcblxuICAvKiogVW5pcXVlIElEIG9yIGV4cHJlc3Npb24gcmVwcmVzZW50aW5nIHRoZSB1bmlxdWUgSUQgb2YgYW4gTmdNb2R1bGUuICovXG4gIGlkOiBvLkV4cHJlc3Npb258bnVsbDtcbn1cblxuLyoqXG4gKiBDb25zdHJ1Y3QgYW4gYFIzTmdNb2R1bGVEZWZgIGZvciB0aGUgZ2l2ZW4gYFIzTmdNb2R1bGVNZXRhZGF0YWAuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb21waWxlTmdNb2R1bGUobWV0YTogUjNOZ01vZHVsZU1ldGFkYXRhKTogUjNOZ01vZHVsZURlZiB7XG4gIGNvbnN0IHtcbiAgICBpbnRlcm5hbFR5cGUsXG4gICAgdHlwZTogbW9kdWxlVHlwZSxcbiAgICBib290c3RyYXAsXG4gICAgZGVjbGFyYXRpb25zLFxuICAgIGltcG9ydHMsXG4gICAgZXhwb3J0cyxcbiAgICBzY2hlbWFzLFxuICAgIGNvbnRhaW5zRm9yd2FyZERlY2xzLFxuICAgIGVtaXRJbmxpbmUsXG4gICAgaWRcbiAgfSA9IG1ldGE7XG5cbiAgY29uc3QgYWRkaXRpb25hbFN0YXRlbWVudHM6IG8uU3RhdGVtZW50W10gPSBbXTtcbiAgY29uc3QgZGVmaW5pdGlvbk1hcCA9IHt0eXBlOiBpbnRlcm5hbFR5cGV9IGFzIHtcbiAgICB0eXBlOiBvLkV4cHJlc3Npb24sXG4gICAgYm9vdHN0cmFwOiBvLkV4cHJlc3Npb24sXG4gICAgZGVjbGFyYXRpb25zOiBvLkV4cHJlc3Npb24sXG4gICAgaW1wb3J0czogby5FeHByZXNzaW9uLFxuICAgIGV4cG9ydHM6IG8uRXhwcmVzc2lvbixcbiAgICBzY2hlbWFzOiBvLkxpdGVyYWxBcnJheUV4cHIsXG4gICAgaWQ6IG8uRXhwcmVzc2lvblxuICB9O1xuXG4gIC8vIE9ubHkgZ2VuZXJhdGUgdGhlIGtleXMgaW4gdGhlIG1ldGFkYXRhIGlmIHRoZSBhcnJheXMgaGF2ZSB2YWx1ZXMuXG4gIGlmIChib290c3RyYXAubGVuZ3RoKSB7XG4gICAgZGVmaW5pdGlvbk1hcC5ib290c3RyYXAgPSByZWZzVG9BcnJheShib290c3RyYXAsIGNvbnRhaW5zRm9yd2FyZERlY2xzKTtcbiAgfVxuXG4gIC8vIElmIHJlcXVlc3RlZCB0byBlbWl0IHNjb3BlIGluZm9ybWF0aW9uIGlubGluZSwgcGFzcyB0aGUgZGVjbGFyYXRpb25zLCBpbXBvcnRzIGFuZCBleHBvcnRzIHRvXG4gIC8vIHRoZSBgybXJtWRlZmluZU5nTW9kdWxlYCBjYWxsLiBUaGUgSklUIGNvbXBpbGF0aW9uIHVzZXMgdGhpcy5cbiAgaWYgKGVtaXRJbmxpbmUpIHtcbiAgICBpZiAoZGVjbGFyYXRpb25zLmxlbmd0aCkge1xuICAgICAgZGVmaW5pdGlvbk1hcC5kZWNsYXJhdGlvbnMgPSByZWZzVG9BcnJheShkZWNsYXJhdGlvbnMsIGNvbnRhaW5zRm9yd2FyZERlY2xzKTtcbiAgICB9XG5cbiAgICBpZiAoaW1wb3J0cy5sZW5ndGgpIHtcbiAgICAgIGRlZmluaXRpb25NYXAuaW1wb3J0cyA9IHJlZnNUb0FycmF5KGltcG9ydHMsIGNvbnRhaW5zRm9yd2FyZERlY2xzKTtcbiAgICB9XG5cbiAgICBpZiAoZXhwb3J0cy5sZW5ndGgpIHtcbiAgICAgIGRlZmluaXRpb25NYXAuZXhwb3J0cyA9IHJlZnNUb0FycmF5KGV4cG9ydHMsIGNvbnRhaW5zRm9yd2FyZERlY2xzKTtcbiAgICB9XG4gIH1cblxuICAvLyBJZiBub3QgZW1pdHRpbmcgaW5saW5lLCB0aGUgc2NvcGUgaW5mb3JtYXRpb24gaXMgbm90IHBhc3NlZCBpbnRvIGDJtcm1ZGVmaW5lTmdNb2R1bGVgIGFzIGl0IHdvdWxkXG4gIC8vIHByZXZlbnQgdHJlZS1zaGFraW5nIG9mIHRoZSBkZWNsYXJhdGlvbnMsIGltcG9ydHMgYW5kIGV4cG9ydHMgcmVmZXJlbmNlcy5cbiAgZWxzZSB7XG4gICAgY29uc3Qgc2V0TmdNb2R1bGVTY29wZUNhbGwgPSBnZW5lcmF0ZVNldE5nTW9kdWxlU2NvcGVDYWxsKG1ldGEpO1xuICAgIGlmIChzZXROZ01vZHVsZVNjb3BlQ2FsbCAhPT0gbnVsbCkge1xuICAgICAgYWRkaXRpb25hbFN0YXRlbWVudHMucHVzaChzZXROZ01vZHVsZVNjb3BlQ2FsbCk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHNjaGVtYXMgJiYgc2NoZW1hcy5sZW5ndGgpIHtcbiAgICBkZWZpbml0aW9uTWFwLnNjaGVtYXMgPSBvLmxpdGVyYWxBcnIoc2NoZW1hcy5tYXAocmVmID0+IHJlZi52YWx1ZSkpO1xuICB9XG5cbiAgaWYgKGlkKSB7XG4gICAgZGVmaW5pdGlvbk1hcC5pZCA9IGlkO1xuICB9XG5cbiAgY29uc3QgZXhwcmVzc2lvbiA9IG8uaW1wb3J0RXhwcihSMy5kZWZpbmVOZ01vZHVsZSkuY2FsbEZuKFttYXBUb01hcEV4cHJlc3Npb24oZGVmaW5pdGlvbk1hcCldKTtcbiAgY29uc3QgdHlwZSA9IG5ldyBvLkV4cHJlc3Npb25UeXBlKG8uaW1wb3J0RXhwcihSMy5OZ01vZHVsZURlZldpdGhNZXRhLCBbXG4gICAgbmV3IG8uRXhwcmVzc2lvblR5cGUobW9kdWxlVHlwZS50eXBlKSwgdHVwbGVUeXBlT2YoZGVjbGFyYXRpb25zKSwgdHVwbGVUeXBlT2YoaW1wb3J0cyksXG4gICAgdHVwbGVUeXBlT2YoZXhwb3J0cylcbiAgXSkpO1xuXG5cbiAgcmV0dXJuIHtleHByZXNzaW9uLCB0eXBlLCBhZGRpdGlvbmFsU3RhdGVtZW50c307XG59XG5cbi8qKlxuICogR2VuZXJhdGVzIGEgZnVuY3Rpb24gY2FsbCB0byBgybXJtXNldE5nTW9kdWxlU2NvcGVgIHdpdGggYWxsIG5lY2Vzc2FyeSBpbmZvcm1hdGlvbiBzbyB0aGF0IHRoZVxuICogdHJhbnNpdGl2ZSBtb2R1bGUgc2NvcGUgY2FuIGJlIGNvbXB1dGVkIGR1cmluZyBydW50aW1lIGluIEpJVCBtb2RlLiBUaGlzIGNhbGwgaXMgbWFya2VkIHB1cmVcbiAqIHN1Y2ggdGhhdCB0aGUgcmVmZXJlbmNlcyB0byBkZWNsYXJhdGlvbnMsIGltcG9ydHMgYW5kIGV4cG9ydHMgbWF5IGJlIGVsaWRlZCBjYXVzaW5nIHRoZXNlXG4gKiBzeW1ib2xzIHRvIGJlY29tZSB0cmVlLXNoYWtlYWJsZS5cbiAqL1xuZnVuY3Rpb24gZ2VuZXJhdGVTZXROZ01vZHVsZVNjb3BlQ2FsbChtZXRhOiBSM05nTW9kdWxlTWV0YWRhdGEpOiBvLlN0YXRlbWVudHxudWxsIHtcbiAgY29uc3Qge2FkamFjZW50VHlwZTogbW9kdWxlVHlwZSwgZGVjbGFyYXRpb25zLCBpbXBvcnRzLCBleHBvcnRzLCBjb250YWluc0ZvcndhcmREZWNsc30gPSBtZXRhO1xuXG4gIGNvbnN0IHNjb3BlTWFwID0ge30gYXMge1xuICAgIGRlY2xhcmF0aW9uczogby5FeHByZXNzaW9uLFxuICAgIGltcG9ydHM6IG8uRXhwcmVzc2lvbixcbiAgICBleHBvcnRzOiBvLkV4cHJlc3Npb24sXG4gIH07XG5cbiAgaWYgKGRlY2xhcmF0aW9ucy5sZW5ndGgpIHtcbiAgICBzY29wZU1hcC5kZWNsYXJhdGlvbnMgPSByZWZzVG9BcnJheShkZWNsYXJhdGlvbnMsIGNvbnRhaW5zRm9yd2FyZERlY2xzKTtcbiAgfVxuXG4gIGlmIChpbXBvcnRzLmxlbmd0aCkge1xuICAgIHNjb3BlTWFwLmltcG9ydHMgPSByZWZzVG9BcnJheShpbXBvcnRzLCBjb250YWluc0ZvcndhcmREZWNscyk7XG4gIH1cblxuICBpZiAoZXhwb3J0cy5sZW5ndGgpIHtcbiAgICBzY29wZU1hcC5leHBvcnRzID0gcmVmc1RvQXJyYXkoZXhwb3J0cywgY29udGFpbnNGb3J3YXJkRGVjbHMpO1xuICB9XG5cbiAgaWYgKE9iamVjdC5rZXlzKHNjb3BlTWFwKS5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIC8vIHNldE5nTW9kdWxlU2NvcGUoLi4uKVxuICBjb25zdCBmbkNhbGwgPSBuZXcgby5JbnZva2VGdW5jdGlvbkV4cHIoXG4gICAgICAvKiBmbiAqLyBvLmltcG9ydEV4cHIoUjMuc2V0TmdNb2R1bGVTY29wZSksXG4gICAgICAvKiBhcmdzICovW21vZHVsZVR5cGUsIG1hcFRvTWFwRXhwcmVzc2lvbihzY29wZU1hcCldKTtcblxuICAvLyAobmdKaXRNb2RlIGd1YXJkKSAmJiBzZXROZ01vZHVsZVNjb3BlKC4uLilcbiAgY29uc3QgZ3VhcmRlZENhbGwgPSBqaXRPbmx5R3VhcmRlZEV4cHJlc3Npb24oZm5DYWxsKTtcblxuICAvLyBmdW5jdGlvbigpIHsgKG5nSml0TW9kZSBndWFyZCkgJiYgc2V0TmdNb2R1bGVTY29wZSguLi4pOyB9XG4gIGNvbnN0IGlpZmUgPSBuZXcgby5GdW5jdGlvbkV4cHIoXG4gICAgICAvKiBwYXJhbXMgKi9bXSxcbiAgICAgIC8qIHN0YXRlbWVudHMgKi9bZ3VhcmRlZENhbGwudG9TdG10KCldKTtcblxuICAvLyAoZnVuY3Rpb24oKSB7IChuZ0ppdE1vZGUgZ3VhcmQpICYmIHNldE5nTW9kdWxlU2NvcGUoLi4uKTsgfSkoKVxuICBjb25zdCBpaWZlQ2FsbCA9IG5ldyBvLkludm9rZUZ1bmN0aW9uRXhwcihcbiAgICAgIC8qIGZuICovIGlpZmUsXG4gICAgICAvKiBhcmdzICovW10pO1xuXG4gIHJldHVybiBpaWZlQ2FsbC50b1N0bXQoKTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSM0luamVjdG9yRGVmIHtcbiAgZXhwcmVzc2lvbjogby5FeHByZXNzaW9uO1xuICB0eXBlOiBvLlR5cGU7XG4gIHN0YXRlbWVudHM6IG8uU3RhdGVtZW50W107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUjNJbmplY3Rvck1ldGFkYXRhIHtcbiAgbmFtZTogc3RyaW5nO1xuICB0eXBlOiBSM1JlZmVyZW5jZTtcbiAgaW50ZXJuYWxUeXBlOiBvLkV4cHJlc3Npb247XG4gIGRlcHM6IFIzRGVwZW5kZW5jeU1ldGFkYXRhW118bnVsbDtcbiAgcHJvdmlkZXJzOiBvLkV4cHJlc3Npb258bnVsbDtcbiAgaW1wb3J0czogby5FeHByZXNzaW9uW107XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21waWxlSW5qZWN0b3IobWV0YTogUjNJbmplY3Rvck1ldGFkYXRhKTogUjNJbmplY3RvckRlZiB7XG4gIGNvbnN0IHJlc3VsdCA9IGNvbXBpbGVGYWN0b3J5RnVuY3Rpb24oe1xuICAgIG5hbWU6IG1ldGEubmFtZSxcbiAgICB0eXBlOiBtZXRhLnR5cGUsXG4gICAgaW50ZXJuYWxUeXBlOiBtZXRhLmludGVybmFsVHlwZSxcbiAgICB0eXBlQXJndW1lbnRDb3VudDogMCxcbiAgICBkZXBzOiBtZXRhLmRlcHMsXG4gICAgaW5qZWN0Rm46IFIzLmluamVjdCxcbiAgICB0YXJnZXQ6IFIzRmFjdG9yeVRhcmdldC5OZ01vZHVsZSxcbiAgfSk7XG4gIGNvbnN0IGRlZmluaXRpb25NYXAgPSB7XG4gICAgZmFjdG9yeTogcmVzdWx0LmZhY3RvcnksXG4gIH0gYXMge2ZhY3Rvcnk6IG8uRXhwcmVzc2lvbiwgcHJvdmlkZXJzOiBvLkV4cHJlc3Npb24sIGltcG9ydHM6IG8uRXhwcmVzc2lvbn07XG5cbiAgaWYgKG1ldGEucHJvdmlkZXJzICE9PSBudWxsKSB7XG4gICAgZGVmaW5pdGlvbk1hcC5wcm92aWRlcnMgPSBtZXRhLnByb3ZpZGVycztcbiAgfVxuXG4gIGlmIChtZXRhLmltcG9ydHMubGVuZ3RoID4gMCkge1xuICAgIGRlZmluaXRpb25NYXAuaW1wb3J0cyA9IG8ubGl0ZXJhbEFycihtZXRhLmltcG9ydHMpO1xuICB9XG5cbiAgY29uc3QgZXhwcmVzc2lvbiA9IG8uaW1wb3J0RXhwcihSMy5kZWZpbmVJbmplY3RvcikuY2FsbEZuKFttYXBUb01hcEV4cHJlc3Npb24oZGVmaW5pdGlvbk1hcCldKTtcbiAgY29uc3QgdHlwZSA9XG4gICAgICBuZXcgby5FeHByZXNzaW9uVHlwZShvLmltcG9ydEV4cHIoUjMuSW5qZWN0b3JEZWYsIFtuZXcgby5FeHByZXNzaW9uVHlwZShtZXRhLnR5cGUudHlwZSldKSk7XG4gIHJldHVybiB7ZXhwcmVzc2lvbiwgdHlwZSwgc3RhdGVtZW50czogcmVzdWx0LnN0YXRlbWVudHN9O1xufVxuXG4vLyBUT0RPKGFseGh1Yik6IGludGVncmF0ZSB0aGlzIHdpdGggYGNvbXBpbGVOZ01vZHVsZWAuIEN1cnJlbnRseSB0aGUgdHdvIGFyZSBzZXBhcmF0ZSBvcGVyYXRpb25zLlxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBpbGVOZ01vZHVsZUZyb21SZW5kZXIyKFxuICAgIGN0eDogT3V0cHV0Q29udGV4dCwgbmdNb2R1bGU6IENvbXBpbGVTaGFsbG93TW9kdWxlTWV0YWRhdGEsXG4gICAgaW5qZWN0YWJsZUNvbXBpbGVyOiBJbmplY3RhYmxlQ29tcGlsZXIpOiB2b2lkIHtcbiAgY29uc3QgY2xhc3NOYW1lID0gaWRlbnRpZmllck5hbWUobmdNb2R1bGUudHlwZSkhO1xuXG4gIGNvbnN0IHJhd0ltcG9ydHMgPSBuZ01vZHVsZS5yYXdJbXBvcnRzID8gW25nTW9kdWxlLnJhd0ltcG9ydHNdIDogW107XG4gIGNvbnN0IHJhd0V4cG9ydHMgPSBuZ01vZHVsZS5yYXdFeHBvcnRzID8gW25nTW9kdWxlLnJhd0V4cG9ydHNdIDogW107XG5cbiAgY29uc3QgaW5qZWN0b3JEZWZBcmcgPSBtYXBMaXRlcmFsKHtcbiAgICAnZmFjdG9yeSc6XG4gICAgICAgIGluamVjdGFibGVDb21waWxlci5mYWN0b3J5Rm9yKHt0eXBlOiBuZ01vZHVsZS50eXBlLCBzeW1ib2w6IG5nTW9kdWxlLnR5cGUucmVmZXJlbmNlfSwgY3R4KSxcbiAgICAncHJvdmlkZXJzJzogY29udmVydE1ldGFUb091dHB1dChuZ01vZHVsZS5yYXdQcm92aWRlcnMsIGN0eCksXG4gICAgJ2ltcG9ydHMnOiBjb252ZXJ0TWV0YVRvT3V0cHV0KFsuLi5yYXdJbXBvcnRzLCAuLi5yYXdFeHBvcnRzXSwgY3R4KSxcbiAgfSk7XG5cbiAgY29uc3QgaW5qZWN0b3JEZWYgPSBvLmltcG9ydEV4cHIoUjMuZGVmaW5lSW5qZWN0b3IpLmNhbGxGbihbaW5qZWN0b3JEZWZBcmddKTtcblxuICBjdHguc3RhdGVtZW50cy5wdXNoKG5ldyBvLkNsYXNzU3RtdChcbiAgICAgIC8qIG5hbWUgKi8gY2xhc3NOYW1lLFxuICAgICAgLyogcGFyZW50ICovIG51bGwsXG4gICAgICAvKiBmaWVsZHMgKi9bbmV3IG8uQ2xhc3NGaWVsZChcbiAgICAgICAgICAvKiBuYW1lICovICfJtWluaicsXG4gICAgICAgICAgLyogdHlwZSAqLyBvLklORkVSUkVEX1RZUEUsXG4gICAgICAgICAgLyogbW9kaWZpZXJzICovW28uU3RtdE1vZGlmaWVyLlN0YXRpY10sXG4gICAgICAgICAgLyogaW5pdGlhbGl6ZXIgKi8gaW5qZWN0b3JEZWYsXG4gICAgICAgICAgKV0sXG4gICAgICAvKiBnZXR0ZXJzICovW10sXG4gICAgICAvKiBjb25zdHJ1Y3Rvck1ldGhvZCAqLyBuZXcgby5DbGFzc01ldGhvZChudWxsLCBbXSwgW10pLFxuICAgICAgLyogbWV0aG9kcyAqL1tdKSk7XG59XG5cbmZ1bmN0aW9uIGFjY2Vzc0V4cG9ydFNjb3BlKG1vZHVsZTogby5FeHByZXNzaW9uKTogby5FeHByZXNzaW9uIHtcbiAgY29uc3Qgc2VsZWN0b3JTY29wZSA9IG5ldyBvLlJlYWRQcm9wRXhwcihtb2R1bGUsICfJtW1vZCcpO1xuICByZXR1cm4gbmV3IG8uUmVhZFByb3BFeHByKHNlbGVjdG9yU2NvcGUsICdleHBvcnRlZCcpO1xufVxuXG5mdW5jdGlvbiB0dXBsZVR5cGVPZihleHA6IFIzUmVmZXJlbmNlW10pOiBvLlR5cGUge1xuICBjb25zdCB0eXBlcyA9IGV4cC5tYXAocmVmID0+IG8udHlwZW9mRXhwcihyZWYudHlwZSkpO1xuICByZXR1cm4gZXhwLmxlbmd0aCA+IDAgPyBvLmV4cHJlc3Npb25UeXBlKG8ubGl0ZXJhbEFycih0eXBlcykpIDogby5OT05FX1RZUEU7XG59XG5cbmZ1bmN0aW9uIHJlZnNUb0FycmF5KHJlZnM6IFIzUmVmZXJlbmNlW10sIHNob3VsZEZvcndhcmREZWNsYXJlOiBib29sZWFuKTogby5FeHByZXNzaW9uIHtcbiAgY29uc3QgdmFsdWVzID0gby5saXRlcmFsQXJyKHJlZnMubWFwKHJlZiA9PiByZWYudmFsdWUpKTtcbiAgcmV0dXJuIHNob3VsZEZvcndhcmREZWNsYXJlID8gby5mbihbXSwgW25ldyBvLlJldHVyblN0YXRlbWVudCh2YWx1ZXMpXSkgOiB2YWx1ZXM7XG59XG4iXX0=
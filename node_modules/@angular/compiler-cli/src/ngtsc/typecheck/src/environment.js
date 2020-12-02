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
        define("@angular/compiler-cli/src/ngtsc/typecheck/src/environment", ["require", "exports", "tslib", "@angular/compiler", "typescript", "@angular/compiler-cli/src/ngtsc/imports", "@angular/compiler-cli/src/ngtsc/translator", "@angular/compiler-cli/src/ngtsc/typecheck/src/ts_util", "@angular/compiler-cli/src/ngtsc/typecheck/src/type_constructor", "@angular/compiler-cli/src/ngtsc/typecheck/src/type_parameter_emitter"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = require("tslib");
    var compiler_1 = require("@angular/compiler");
    var ts = require("typescript");
    var imports_1 = require("@angular/compiler-cli/src/ngtsc/imports");
    var translator_1 = require("@angular/compiler-cli/src/ngtsc/translator");
    var ts_util_1 = require("@angular/compiler-cli/src/ngtsc/typecheck/src/ts_util");
    var type_constructor_1 = require("@angular/compiler-cli/src/ngtsc/typecheck/src/type_constructor");
    var type_parameter_emitter_1 = require("@angular/compiler-cli/src/ngtsc/typecheck/src/type_parameter_emitter");
    /**
     * A context which hosts one or more Type Check Blocks (TCBs).
     *
     * An `Environment` supports the generation of TCBs by tracking necessary imports, declarations of
     * type constructors, and other statements beyond the type-checking code within the TCB itself.
     * Through method calls on `Environment`, the TCB generator can request `ts.Expression`s which
     * reference declarations in the `Environment` for these artifacts`.
     *
     * `Environment` can be used in a standalone fashion, or can be extended to support more specialized
     * usage.
     */
    var Environment = /** @class */ (function () {
        function Environment(config, importManager, refEmitter, reflector, contextFile) {
            this.config = config;
            this.importManager = importManager;
            this.refEmitter = refEmitter;
            this.reflector = reflector;
            this.contextFile = contextFile;
            this.nextIds = {
                pipeInst: 1,
                typeCtor: 1,
            };
            this.typeCtors = new Map();
            this.typeCtorStatements = [];
            this.pipeInsts = new Map();
            this.pipeInstStatements = [];
            this.outputHelperIdent = null;
            this.helperStatements = [];
        }
        /**
         * Get an expression referring to a type constructor for the given directive.
         *
         * Depending on the shape of the directive itself, this could be either a reference to a declared
         * type constructor, or to an inline type constructor.
         */
        Environment.prototype.typeCtorFor = function (dir) {
            var dirRef = dir.ref;
            var node = dirRef.node;
            if (this.typeCtors.has(node)) {
                return this.typeCtors.get(node);
            }
            if (type_constructor_1.requiresInlineTypeCtor(node, this.reflector)) {
                // The constructor has already been created inline, we just need to construct a reference to
                // it.
                var ref = this.reference(dirRef);
                var typeCtorExpr = ts.createPropertyAccess(ref, 'ngTypeCtor');
                this.typeCtors.set(node, typeCtorExpr);
                return typeCtorExpr;
            }
            else {
                var fnName = "_ctor" + this.nextIds.typeCtor++;
                var nodeTypeRef = this.referenceType(dirRef);
                if (!ts.isTypeReferenceNode(nodeTypeRef)) {
                    throw new Error("Expected TypeReferenceNode from reference to " + dirRef.debugName);
                }
                var meta = {
                    fnName: fnName,
                    body: true,
                    fields: {
                        inputs: Object.keys(dir.inputs),
                        outputs: Object.keys(dir.outputs),
                        // TODO: support queries
                        queries: dir.queries,
                    },
                    coercedInputFields: dir.coercedInputFields,
                };
                var typeParams = this.emitTypeParameters(node);
                var typeCtor = type_constructor_1.generateTypeCtorDeclarationFn(node, meta, nodeTypeRef.typeName, typeParams, this.reflector);
                this.typeCtorStatements.push(typeCtor);
                var fnId = ts.createIdentifier(fnName);
                this.typeCtors.set(node, fnId);
                return fnId;
            }
        };
        /*
         * Get an expression referring to an instance of the given pipe.
         */
        Environment.prototype.pipeInst = function (ref) {
            if (this.pipeInsts.has(ref.node)) {
                return this.pipeInsts.get(ref.node);
            }
            var pipeType = this.referenceType(ref);
            var pipeInstId = ts.createIdentifier("_pipe" + this.nextIds.pipeInst++);
            this.pipeInstStatements.push(ts_util_1.tsDeclareVariable(pipeInstId, pipeType));
            this.pipeInsts.set(ref.node, pipeInstId);
            return pipeInstId;
        };
        /**
         * Declares a helper function to be able to cast directive outputs of type `EventEmitter<T>` to
         * have an accurate `subscribe()` method that properly carries over the generic type `T` into the
         * listener function passed as argument to `subscribe`. This is done to work around a typing
         * deficiency in `EventEmitter.subscribe`, where the listener function is typed as any.
         */
        Environment.prototype.declareOutputHelper = function () {
            if (this.outputHelperIdent !== null) {
                return this.outputHelperIdent;
            }
            var outputHelperIdent = ts.createIdentifier('_outputHelper');
            var genericTypeDecl = ts.createTypeParameterDeclaration('T');
            var genericTypeRef = ts.createTypeReferenceNode('T', /* typeParameters */ undefined);
            var eventEmitter = this.referenceExternalType('@angular/core', 'EventEmitter', [new compiler_1.ExpressionType(new compiler_1.WrappedNodeExpr(genericTypeRef))]);
            // Declare a type that has a `subscribe` method that carries over type `T` as parameter
            // into the callback. The below code generates the following type literal:
            // `{subscribe(cb: (event: T) => any): void;}`
            var observableLike = ts.createTypeLiteralNode([ts.createMethodSignature(
                /* typeParameters */ undefined, 
                /* parameters */ [ts.createParameter(
                    /* decorators */ undefined, 
                    /* modifiers */ undefined, 
                    /* dotDotDotToken */ undefined, 
                    /* name */ 'cb', 
                    /* questionToken */ undefined, 
                    /* type */
                    ts.createFunctionTypeNode(
                    /* typeParameters */ undefined, 
                    /* parameters */ [ts.createParameter(
                        /* decorators */ undefined, 
                        /* modifiers */ undefined, 
                        /* dotDotDotToken */ undefined, 
                        /* name */ 'event', 
                        /* questionToken */ undefined, 
                        /* type */ genericTypeRef)], 
                    /* type */ ts.createKeywordTypeNode(ts.SyntaxKind.AnyKeyword)))], 
                /* type */ ts.createKeywordTypeNode(ts.SyntaxKind.VoidKeyword), 
                /* name */ 'subscribe', 
                /* questionToken */ undefined)]);
            // Declares the first signature of `_outputHelper` that matches arguments of type
            // `EventEmitter`, to convert them into `observableLike` defined above. The following
            // statement is generated:
            // `declare function _outputHelper<T>(output: EventEmitter<T>): observableLike;`
            this.helperStatements.push(ts.createFunctionDeclaration(
            /* decorators */ undefined, 
            /* modifiers */ [ts.createModifier(ts.SyntaxKind.DeclareKeyword)], 
            /* asteriskToken */ undefined, 
            /* name */ outputHelperIdent, 
            /* typeParameters */ [genericTypeDecl], 
            /* parameters */ [ts.createParameter(
                /* decorators */ undefined, 
                /* modifiers */ undefined, 
                /* dotDotDotToken */ undefined, 
                /* name */ 'output', 
                /* questionToken */ undefined, 
                /* type */ eventEmitter)], 
            /* type */ observableLike, 
            /* body */ undefined));
            // Declares the second signature of `_outputHelper` that matches all other argument types,
            // i.e. ensures type identity for output types other than `EventEmitter`. This corresponds
            // with the following statement:
            // `declare function _outputHelper<T>(output: T): T;`
            this.helperStatements.push(ts.createFunctionDeclaration(
            /* decorators */ undefined, 
            /* modifiers */ [ts.createModifier(ts.SyntaxKind.DeclareKeyword)], 
            /* asteriskToken */ undefined, 
            /* name */ outputHelperIdent, 
            /* typeParameters */ [genericTypeDecl], 
            /* parameters */ [ts.createParameter(
                /* decorators */ undefined, 
                /* modifiers */ undefined, 
                /* dotDotDotToken */ undefined, 
                /* name */ 'output', 
                /* questionToken */ undefined, 
                /* type */ genericTypeRef)], 
            /* type */ genericTypeRef, 
            /* body */ undefined));
            return this.outputHelperIdent = outputHelperIdent;
        };
        /**
         * Generate a `ts.Expression` that references the given node.
         *
         * This may involve importing the node into the file if it's not declared there already.
         */
        Environment.prototype.reference = function (ref) {
            // Disable aliasing for imports generated in a template type-checking context, as there is no
            // guarantee that any alias re-exports exist in the .d.ts files. It's safe to use direct imports
            // in these cases as there is no strict dependency checking during the template type-checking
            // pass.
            var ngExpr = this.refEmitter.emit(ref, this.contextFile, imports_1.ImportFlags.NoAliasing);
            // Use `translateExpression` to convert the `Expression` into a `ts.Expression`.
            return translator_1.translateExpression(ngExpr, this.importManager, imports_1.NOOP_DEFAULT_IMPORT_RECORDER, ts.ScriptTarget.ES2015);
        };
        /**
         * Generate a `ts.TypeNode` that references the given node as a type.
         *
         * This may involve importing the node into the file if it's not declared there already.
         */
        Environment.prototype.referenceType = function (ref) {
            var ngExpr = this.refEmitter.emit(ref, this.contextFile, imports_1.ImportFlags.NoAliasing | imports_1.ImportFlags.AllowTypeImports);
            // Create an `ExpressionType` from the `Expression` and translate it via `translateType`.
            // TODO(alxhub): support references to types with generic arguments in a clean way.
            return translator_1.translateType(new compiler_1.ExpressionType(ngExpr), this.importManager);
        };
        Environment.prototype.emitTypeParameters = function (declaration) {
            var _this = this;
            var emitter = new type_parameter_emitter_1.TypeParameterEmitter(declaration.typeParameters, this.reflector);
            return emitter.emit(function (ref) { return _this.referenceType(ref); });
        };
        /**
         * Generate a `ts.TypeNode` that references a given type from the provided module.
         *
         * This will involve importing the type into the file, and will also add type parameters if
         * provided.
         */
        Environment.prototype.referenceExternalType = function (moduleName, name, typeParams) {
            var external = new compiler_1.ExternalExpr({ moduleName: moduleName, name: name });
            return translator_1.translateType(new compiler_1.ExpressionType(external, null, typeParams), this.importManager);
        };
        Environment.prototype.getPreludeStatements = function () {
            return tslib_1.__spread(this.helperStatements, this.pipeInstStatements, this.typeCtorStatements);
        };
        return Environment;
    }());
    exports.Environment = Environment;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW52aXJvbm1lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21waWxlci1jbGkvc3JjL25ndHNjL3R5cGVjaGVjay9zcmMvZW52aXJvbm1lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HOzs7Ozs7Ozs7Ozs7O0lBRUgsOENBQXNGO0lBQ3RGLCtCQUFpQztJQUVqQyxtRUFBcUc7SUFFckcseUVBQW1GO0lBR25GLGlGQUE0QztJQUM1QyxtR0FBeUY7SUFDekYsK0dBQThEO0lBRTlEOzs7Ozs7Ozs7O09BVUc7SUFDSDtRQWVFLHFCQUNhLE1BQTBCLEVBQVksYUFBNEIsRUFDbkUsVUFBNEIsRUFBVSxTQUF5QixFQUM3RCxXQUEwQjtZQUYzQixXQUFNLEdBQU4sTUFBTSxDQUFvQjtZQUFZLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1lBQ25FLGVBQVUsR0FBVixVQUFVLENBQWtCO1lBQVUsY0FBUyxHQUFULFNBQVMsQ0FBZ0I7WUFDN0QsZ0JBQVcsR0FBWCxXQUFXLENBQWU7WUFqQmhDLFlBQU8sR0FBRztnQkFDaEIsUUFBUSxFQUFFLENBQUM7Z0JBQ1gsUUFBUSxFQUFFLENBQUM7YUFDWixDQUFDO1lBRU0sY0FBUyxHQUFHLElBQUksR0FBRyxFQUFtQyxDQUFDO1lBQ3JELHVCQUFrQixHQUFtQixFQUFFLENBQUM7WUFFMUMsY0FBUyxHQUFHLElBQUksR0FBRyxFQUFtQyxDQUFDO1lBQ3JELHVCQUFrQixHQUFtQixFQUFFLENBQUM7WUFFMUMsc0JBQWlCLEdBQXVCLElBQUksQ0FBQztZQUMzQyxxQkFBZ0IsR0FBbUIsRUFBRSxDQUFDO1FBS0wsQ0FBQztRQUU1Qzs7Ozs7V0FLRztRQUNILGlDQUFXLEdBQVgsVUFBWSxHQUErQjtZQUN6QyxJQUFNLE1BQU0sR0FBRyxHQUFHLENBQUMsR0FBdUQsQ0FBQztZQUMzRSxJQUFNLElBQUksR0FBRyxNQUFNLENBQUMs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b3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7RXhwcmVzc2lvblR5cGUsIEV4dGVybmFsRXhwciwgVHlwZSwgV3JhcHBlZE5vZGVFeHByfSBmcm9tICdAYW5ndWxhci9jb21waWxlcic7XG5pbXBvcnQgKiBhcyB0cyBmcm9tICd0eXBlc2NyaXB0JztcblxuaW1wb3J0IHtJbXBvcnRGbGFncywgTk9PUF9ERUZBVUxUX0lNUE9SVF9SRUNPUkRFUiwgUmVmZXJlbmNlLCBSZWZlcmVuY2VFbWl0dGVyfSBmcm9tICcuLi8uLi9pbXBvcnRzJztcbmltcG9ydCB7Q2xhc3NEZWNsYXJhdGlvbiwgUmVmbGVjdGlvbkhvc3R9IGZyb20gJy4uLy4uL3JlZmxlY3Rpb24nO1xuaW1wb3J0IHtJbXBvcnRNYW5hZ2VyLCB0cmFuc2xhdGVFeHByZXNzaW9uLCB0cmFuc2xhdGVUeXBlfSBmcm9tICcuLi8uLi90cmFuc2xhdG9yJztcblxuaW1wb3J0IHtUeXBlQ2hlY2thYmxlRGlyZWN0aXZlTWV0YSwgVHlwZUNoZWNraW5nQ29uZmlnLCBUeXBlQ3Rvck1ldGFkYXRhfSBmcm9tICcuL2FwaSc7XG5pbXBvcnQge3RzRGVjbGFyZVZhcmlhYmxlfSBmcm9tICcuL3RzX3V0aWwnO1xuaW1wb3J0IHtnZW5lcmF0ZVR5cGVDdG9yRGVjbGFyYXRpb25GbiwgcmVxdWlyZXNJbmxpbmVUeXBlQ3Rvcn0gZnJvbSAnLi90eXBlX2NvbnN0cnVjdG9yJztcbmltcG9ydCB7VHlwZVBhcmFtZXRlckVtaXR0ZXJ9IGZyb20gJy4vdHlwZV9wYXJhbWV0ZXJfZW1pdHRlcic7XG5cbi8qKlxuICogQSBjb250ZXh0IHdoaWNoIGhvc3RzIG9uZSBvciBtb3JlIFR5cGUgQ2hlY2sgQmxvY2tzIChUQ0JzKS5cbiAqXG4gKiBBbiBgRW52aXJvbm1lbnRgIHN1cHBvcnRzIHRoZSBnZW5lcmF0aW9uIG9mIFRDQnMgYnkgdHJhY2tpbmcgbmVjZXNzYXJ5IGltcG9ydHMsIGRlY2xhcmF0aW9ucyBvZlxuICogdHlwZSBjb25zdHJ1Y3RvcnMsIGFuZCBvdGhlciBzdGF0ZW1lbnRzIGJleW9uZCB0aGUgdHlwZS1jaGVja2luZyBjb2RlIHdpdGhpbiB0aGUgVENCIGl0c2VsZi5cbiAqIFRocm91Z2ggbWV0aG9kIGNhbGxzIG9uIGBFbnZpcm9ubWVudGAsIHRoZSBUQ0IgZ2VuZXJhdG9yIGNhbiByZXF1ZXN0IGB0cy5FeHByZXNzaW9uYHMgd2hpY2hcbiAqIHJlZmVyZW5jZSBkZWNsYXJhdGlvbnMgaW4gdGhlIGBFbnZpcm9ubWVudGAgZm9yIHRoZXNlIGFydGlmYWN0c2AuXG4gKlxuICogYEVudmlyb25tZW50YCBjYW4gYmUgdXNlZCBpbiBhIHN0YW5kYWxvbmUgZmFzaGlvbiwgb3IgY2FuIGJlIGV4dGVuZGVkIHRvIHN1cHBvcnQgbW9yZSBzcGVjaWFsaXplZFxuICogdXNhZ2UuXG4gKi9cbmV4cG9ydCBjbGFzcyBFbnZpcm9ubWVudCB7XG4gIHByaXZhdGUgbmV4dElkcyA9IHtcbiAgICBwaXBlSW5zdDogMSxcbiAgICB0eXBlQ3RvcjogMSxcbiAgfTtcblxuICBwcml2YXRlIHR5cGVDdG9ycyA9IG5ldyBNYXA8Q2xhc3NEZWNsYXJhdGlvbiwgdHMuRXhwcmVzc2lvbj4oKTtcbiAgcHJvdGVjdGVkIHR5cGVDdG9yU3RhdGVtZW50czogdHMuU3RhdGVtZW50W10gPSBbXTtcblxuICBwcml2YXRlIHBpcGVJbnN0cyA9IG5ldyBNYXA8Q2xhc3NEZWNsYXJhdGlvbiwgdHMuRXhwcmVzc2lvbj4oKTtcbiAgcHJvdGVjdGVkIHBpcGVJbnN0U3RhdGVtZW50czogdHMuU3RhdGVtZW50W10gPSBbXTtcblxuICBwcml2YXRlIG91dHB1dEhlbHBlcklkZW50OiB0cy5JZGVudGlmaWVyfG51bGwgPSBudWxsO1xuICBwcm90ZWN0ZWQgaGVscGVyU3RhdGVtZW50czogdHMuU3RhdGVtZW50W10gPSBbXTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICAgIHJlYWRvbmx5IGNvbmZpZzogVHlwZUNoZWNraW5nQ29uZmlnLCBwcm90ZWN0ZWQgaW1wb3J0TWFuYWdlcjogSW1wb3J0TWFuYWdlcixcbiAgICAgIHByaXZhdGUgcmVmRW1pdHRlcjogUmVmZXJlbmNlRW1pdHRlciwgcHJpdmF0ZSByZWZsZWN0b3I6IFJlZmxlY3Rpb25Ib3N0LFxuICAgICAgcHJvdGVjdGVkIGNvbnRleHRGaWxlOiB0cy5Tb3VyY2VGaWxlKSB7fVxuXG4gIC8qKlxuICAgKiBHZXQgYW4gZXhwcmVzc2lvbiByZWZlcnJpbmcgdG8gYSB0eXBlIGNvbnN0cnVjdG9yIGZvciB0aGUgZ2l2ZW4gZGlyZWN0aXZlLlxuICAgKlxuICAgKiBEZXBlbmRpbmcgb24gdGhlIHNoYXBlIG9mIHRoZSBkaXJlY3RpdmUgaXRzZWxmLCB0aGlzIGNvdWxkIGJlIGVpdGhlciBhIHJlZmVyZW5jZSB0byBhIGRlY2xhcmVkXG4gICAqIHR5cGUgY29uc3RydWN0b3IsIG9yIHRvIGFuIGlubGluZSB0eXBlIGNvbnN0cnVjdG9yLlxuICAgKi9cbiAgdHlwZUN0b3JGb3IoZGlyOiBUeXBlQ2hlY2thYmxlRGlyZWN0aXZlTWV0YSk6IHRzLkV4cHJlc3Npb24ge1xuICAgIGNvbnN0IGRpclJlZiA9IGRpci5yZWYgYXMgUmVmZXJlbmNlPENsYXNzRGVjbGFyYXRpb248dHMuQ2xhc3NEZWNsYXJhdGlvbj4+O1xuICAgIGNvbnN0IG5vZGUgPSBkaXJSZWYubm9kZTtcbiAgICBpZiAodGhpcy50eXBlQ3RvcnMuaGFzKG5vZGUpKSB7XG4gICAgICByZXR1cm4gdGhpcy50eXBlQ3RvcnMuZ2V0KG5vZGUpITtcbiAgICB9XG5cbiAgICBpZiAocmVxdWlyZXNJbmxpbmVUeXBlQ3Rvcihub2RlLCB0aGlzLnJlZmxlY3RvcikpIHtcbiAgICAgIC8vIFRoZSBjb25zdHJ1Y3RvciBoYXMgYWxyZWFkeSBiZWVuIGNyZWF0ZWQgaW5saW5lLCB3ZSBqdXN0IG5lZWQgdG8gY29uc3RydWN0IGEgcmVmZXJlbmNlIHRvXG4gICAgICAvLyBpdC5cbiAgICAgIGNvbnN0IHJlZiA9IHRoaXMucmVmZXJlbmNlKGRpclJlZik7XG4gICAgICBjb25zdCB0eXBlQ3RvckV4cHIgPSB0cy5jcmVhdGVQcm9wZXJ0eUFjY2VzcyhyZWYsICduZ1R5cGVDdG9yJyk7XG4gICAgICB0aGlzLnR5cGVDdG9ycy5zZXQobm9kZSwgdHlwZUN0b3JFeHByKTtcbiAgICAgIHJldHVybiB0eXBlQ3RvckV4cHI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGZuTmFtZSA9IGBfY3RvciR7dGhpcy5uZXh0SWRzLnR5cGVDdG9yKyt9YDtcbiAgICAgIGNvbnN0IG5vZGVUeXBlUmVmID0gdGhpcy5yZWZlcmVuY2VUeXBlKGRpclJlZik7XG4gICAgICBpZiAoIXRzLmlzVHlwZVJlZmVyZW5jZU5vZGUobm9kZVR5cGVSZWYpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgRXhwZWN0ZWQgVHlwZVJlZmVyZW5jZU5vZGUgZnJvbSByZWZlcmVuY2UgdG8gJHtkaXJSZWYuZGVidWdOYW1lfWApO1xuICAgICAgfVxuICAgICAgY29uc3QgbWV0YTogVHlwZUN0b3JNZXRhZGF0YSA9IHtcbiAgICAgICAgZm5OYW1lLFxuICAgICAgICBib2R5OiB0cnVlLFxuICAgICAgICBmaWVsZHM6IHtcbiAgICAgICAgICBpbnB1dHM6IE9iamVjdC5rZXlzKGRpci5pbnB1dHMpLFxuICAgICAgICAgIG91dHB1dHM6IE9iamVjdC5rZXlzKGRpci5vdXRwdXRzKSxcbiAgICAgICAgICAvLyBUT0RPOiBzdXBwb3J0IHF1ZXJpZXNcbiAgICAgICAgICBxdWVyaWVzOiBkaXIucXVlcmllcyxcbiAgICAgICAgfSxcbiAgICAgICAgY29lcmNlZElucHV0RmllbGRzOiBkaXIuY29lcmNlZElucHV0RmllbGRzLFxuICAgICAgfTtcbiAgICAgIGNvbnN0IHR5cGVQYXJhbXMgPSB0aGlzLmVtaXRUeXBlUGFyYW1ldGVycyhub2RlKTtcbiAgICAgIGNvbnN0IHR5cGVDdG9yID0gZ2VuZXJhdGVUeXBlQ3RvckRlY2xhcmF0aW9uRm4oXG4gICAgICAgICAgbm9kZSwgbWV0YSwgbm9kZVR5cGVSZWYudHlwZU5hbWUsIHR5cGVQYXJhbXMsIHRoaXMucmVmbGVjdG9yKTtcbiAgICAgIHRoaXMudHlwZUN0b3JTdGF0ZW1lbnRzLnB1c2godHlwZUN0b3IpO1xuICAgICAgY29uc3QgZm5JZCA9IHRzLmNyZWF0ZUlkZW50aWZpZXIoZm5OYW1lKTtcbiAgICAgIHRoaXMudHlwZUN0b3JzLnNldChub2RlLCBmbklkKTtcbiAgICAgIHJldHVybiBmbklkO1xuICAgIH1cbiAgfVxuXG4gIC8qXG4gICAqIEdldCBhbiBleHByZXNzaW9uIHJlZmVycmluZyB0byBhbiBpbnN0YW5jZSBvZiB0aGUgZ2l2ZW4gcGlwZS5cbiAgICovXG4gIHBpcGVJbnN0KHJlZjogUmVmZXJlbmNlPENsYXNzRGVjbGFyYXRpb248dHMuQ2xhc3NEZWNsYXJhdGlvbj4+KTogdHMuRXhwcmVzc2lvbiB7XG4gICAgaWYgKHRoaXMucGlwZUluc3RzLmhhcyhyZWYubm9kZSkpIHtcbiAgICAgIHJldHVybiB0aGlzLnBpcGVJbnN0cy5nZXQocmVmLm5vZGUpITtcbiAgICB9XG5cbiAgICBjb25zdCBwaXBlVHlwZSA9IHRoaXMucmVmZXJlbmNlVHlwZShyZWYpO1xuICAgIGNvbnN0IHBpcGVJbnN0SWQgPSB0cy5jcmVhdGVJZGVudGlmaWVyKGBfcGlwZSR7dGhpcy5uZXh0SWRzLnBpcGVJbnN0Kyt9YCk7XG5cbiAgICB0aGlzLnBpcGVJbnN0U3RhdGVtZW50cy5wdXNoKHRzRGVjbGFyZVZhcmlhYmxlKHBpcGVJbnN0SWQsIHBpcGVUeXBlKSk7XG4gICAgdGhpcy5waXBlSW5zdHMuc2V0KHJlZi5ub2RlLCBwaXBlSW5zdElkKTtcblxuICAgIHJldHVybiBwaXBlSW5zdElkO1xuICB9XG5cbiAgLyoqXG4gICAqIERlY2xhcmVzIGEgaGVscGVyIGZ1bmN0aW9uIHRvIGJlIGFibGUgdG8gY2FzdCBkaXJlY3RpdmUgb3V0cHV0cyBvZiB0eXBlIGBFdmVudEVtaXR0ZXI8VD5gIHRvXG4gICAqIGhhdmUgYW4gYWNjdXJhdGUgYHN1YnNjcmliZSgpYCBtZXRob2QgdGhhdCBwcm9wZXJseSBjYXJyaWVzIG92ZXIgdGhlIGdlbmVyaWMgdHlwZSBgVGAgaW50byB0aGVcbiAgICogbGlzdGVuZXIgZnVuY3Rpb24gcGFzc2VkIGFzIGFyZ3VtZW50IHRvIGBzdWJzY3JpYmVgLiBUaGlzIGlzIGRvbmUgdG8gd29yayBhcm91bmQgYSB0eXBpbmdcbiAgICogZGVmaWNpZW5jeSBpbiBgRXZlbnRFbWl0dGVyLnN1YnNjcmliZWAsIHdoZXJlIHRoZSBsaXN0ZW5lciBmdW5jdGlvbiBpcyB0eXBlZCBhcyBhbnkuXG4gICAqL1xuICBkZWNsYXJlT3V0cHV0SGVscGVyKCk6IHRzLkV4cHJlc3Npb24ge1xuICAgIGlmICh0aGlzLm91dHB1dEhlbHBlcklkZW50ICE9PSBudWxsKSB7XG4gICAgICByZXR1cm4gdGhpcy5vdXRwdXRIZWxwZXJJZGVudDtcbiAgICB9XG5cbiAgICBjb25zdCBvdXRwdXRIZWxwZXJJZGVudCA9IHRzLmNyZWF0ZUlkZW50aWZpZXIoJ19vdXRwdXRIZWxwZXInKTtcbiAgICBjb25zdCBnZW5lcmljVHlwZURlY2wgPSB0cy5jcmVhdGVUeXBlUGFyYW1ldGVyRGVjbGFyYXRpb24oJ1QnKTtcbiAgICBjb25zdCBnZW5lcmljVHlwZVJlZiA9IHRzLmNyZWF0ZVR5cGVSZWZlcmVuY2VOb2RlKCdUJywgLyogdHlwZVBhcmFtZXRlcnMgKi8gdW5kZWZpbmVkKTtcblxuICAgIGNvbnN0IGV2ZW50RW1pdHRlciA9IHRoaXMucmVmZXJlbmNlRXh0ZXJuYWxUeXBlKFxuICAgICAgICAnQGFuZ3VsYXIvY29yZScsICdFdmVudEVtaXR0ZXInLCBbbmV3IEV4cHJlc3Npb25UeXBlKG5ldyBXcmFwcGVkTm9kZUV4cHIoZ2VuZXJpY1R5cGVSZWYpKV0pO1xuXG4gICAgLy8gRGVjbGFyZSBhIHR5cGUgdGhhdCBoYXMgYSBgc3Vic2NyaWJlYCBtZXRob2QgdGhhdCBjYXJyaWVzIG92ZXIgdHlwZSBgVGAgYXMgcGFyYW1ldGVyXG4gICAgLy8gaW50byB0aGUgY2FsbGJhY2suIFRoZSBiZWxvdyBjb2RlIGdlbmVyYXRlcyB0aGUgZm9sbG93aW5nIHR5cGUgbGl0ZXJhbDpcbiAgICAvLyBge3N1YnNjcmliZShjYjogKGV2ZW50OiBUKSA9PiBhbnkpOiB2b2lkO31gXG4gICAgY29uc3Qgb2JzZXJ2YWJsZUxpa2UgPSB0cy5jcmVhdGVUeXBlTGl0ZXJhbE5vZGUoW3RzLmNyZWF0ZU1ldGhvZFNpZ25hdHVyZShcbiAgICAgICAgLyogdHlwZVBhcmFtZXRlcnMgKi8gdW5kZWZpbmVkLFxuICAgICAgICAvKiBwYXJhbWV0ZXJzICovW3RzLmNyZWF0ZVBhcmFtZXRlcihcbiAgICAgICAgICAgIC8qIGRlY29yYXRvcnMgKi8gdW5kZWZpbmVkLFxuICAgICAgICAgICAgLyogbW9kaWZpZXJzICovIHVuZGVmaW5lZCxcbiAgICAgICAgICAgIC8qIGRvdERvdERvdFRva2VuICovIHVuZGVmaW5lZCxcbiAgICAgICAgICAgIC8qIG5hbWUgKi8gJ2NiJyxcbiAgICAgICAgICAgIC8qIHF1ZXN0aW9uVG9rZW4gKi8gdW5kZWZpbmVkLFxuICAgICAgICAgICAgLyogdHlwZSAqL1xuICAgICAgICAgICAgdHMuY3JlYXRlRnVuY3Rpb25UeXBlTm9kZShcbiAgICAgICAgICAgICAgICAvKiB0eXBlUGFyYW1ldGVycyAqLyB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgLyogcGFyYW1ldGVycyAqL1t0cy5jcmVhdGVQYXJhbWV0ZXIoXG4gICAgICAgICAgICAgICAgICAgIC8qIGRlY29yYXRvcnMgKi8gdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgICAgICAvKiBtb2RpZmllcnMgKi8gdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgICAgICAvKiBkb3REb3REb3RUb2tlbiAqLyB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgICAgIC8qIG5hbWUgKi8gJ2V2ZW50JyxcbiAgICAgICAgICAgICAgICAgICAgLyogcXVlc3Rpb25Ub2tlbiAqLyB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgICAgIC8qIHR5cGUgKi8gZ2VuZXJpY1R5cGVSZWYpXSxcbiAgICAgICAgICAgICAgICAvKiB0eXBlICovIHRzLmNyZWF0ZUtleXdvcmRUeXBlTm9kZSh0cy5TeW50YXhLaW5kLkFueUtleXdvcmQpKSldLFxuICAgICAgICAvKiB0eXBlICovIHRzLmNyZWF0ZUtleXdvcmRUeXBlTm9kZSh0cy5TeW50YXhLaW5kLlZvaWRLZXl3b3JkKSxcbiAgICAgICAgLyogbmFtZSAqLyAnc3Vic2NyaWJlJyxcbiAgICAgICAgLyogcXVlc3Rpb25Ub2tlbiAqLyB1bmRlZmluZWQpXSk7XG5cbiAgICAvLyBEZWNsYXJlcyB0aGUgZmlyc3Qgc2lnbmF0dXJlIG9mIGBfb3V0cHV0SGVscGVyYCB0aGF0IG1hdGNoZXMgYXJndW1lbnRzIG9mIHR5cGVcbiAgICAvLyBgRXZlbnRFbWl0dGVyYCwgdG8gY29udmVydCB0aGVtIGludG8gYG9ic2VydmFibGVMaWtlYCBkZWZpbmVkIGFib3ZlLiBUaGUgZm9sbG93aW5nXG4gICAgLy8gc3RhdGVtZW50IGlzIGdlbmVyYXRlZDpcbiAgICAvLyBgZGVjbGFyZSBmdW5jdGlvbiBfb3V0cHV0SGVscGVyPFQ+KG91dHB1dDogRXZlbnRFbWl0dGVyPFQ+KTogb2JzZXJ2YWJsZUxpa2U7YFxuICAgIHRoaXMuaGVscGVyU3RhdGVtZW50cy5wdXNoKHRzLmNyZWF0ZUZ1bmN0aW9uRGVjbGFyYXRpb24oXG4gICAgICAgIC8qIGRlY29yYXRvcnMgKi8gdW5kZWZpbmVkLFxuICAgICAgICAvKiBtb2RpZmllcnMgKi9bdHMuY3JlYXRlTW9kaWZpZXIodHMuU3ludGF4S2luZC5EZWNsYXJlS2V5d29yZCldLFxuICAgICAgICAvKiBhc3Rlcmlza1Rva2VuICovIHVuZGVmaW5lZCxcbiAgICAgICAgLyogbmFtZSAqLyBvdXRwdXRIZWxwZXJJZGVudCxcbiAgICAgICAgLyogdHlwZVBhcmFtZXRlcnMgKi9bZ2VuZXJpY1R5cGVEZWNsXSxcbiAgICAgICAgLyogcGFyYW1ldGVycyAqL1t0cy5jcmVhdGVQYXJhbWV0ZXIoXG4gICAgICAgICAgICAvKiBkZWNvcmF0b3JzICovIHVuZGVmaW5lZCxcbiAgICAgICAgICAgIC8qIG1vZGlmaWVycyAqLyB1bmRlZmluZWQsXG4gICAgICAgICAgICAvKiBkb3REb3REb3RUb2tlbiAqLyB1bmRlZmluZWQsXG4gICAgICAgICAgICAvKiBuYW1lICovICdvdXRwdXQnLFxuICAgICAgICAgICAgLyogcXVlc3Rpb25Ub2tlbiAqLyB1bmRlZmluZWQsXG4gICAgICAgICAgICAvKiB0eXBlICovIGV2ZW50RW1pdHRlcildLFxuICAgICAgICAvKiB0eXBlICovIG9ic2VydmFibGVMaWtlLFxuICAgICAgICAvKiBib2R5ICovIHVuZGVmaW5lZCkpO1xuXG4gICAgLy8gRGVjbGFyZXMgdGhlIHNlY29uZCBzaWduYXR1cmUgb2YgYF9vdXRwdXRIZWxwZXJgIHRoYXQgbWF0Y2hlcyBhbGwgb3RoZXIgYXJndW1lbnQgdHlwZXMsXG4gICAgLy8gaS5lLiBlbnN1cmVzIHR5cGUgaWRlbnRpdHkgZm9yIG91dHB1dCB0eXBlcyBvdGhlciB0aGFuIGBFdmVudEVtaXR0ZXJgLiBUaGlzIGNvcnJlc3BvbmRzXG4gICAgLy8gd2l0aCB0aGUgZm9sbG93aW5nIHN0YXRlbWVudDpcbiAgICAvLyBgZGVjbGFyZSBmdW5jdGlvbiBfb3V0cHV0SGVscGVyPFQ+KG91dHB1dDogVCk6IFQ7YFxuICAgIHRoaXMuaGVscGVyU3RhdGVtZW50cy5wdXNoKHRzLmNyZWF0ZUZ1bmN0aW9uRGVjbGFyYXRpb24oXG4gICAgICAgIC8qIGRlY29yYXRvcnMgKi8gdW5kZWZpbmVkLFxuICAgICAgICAvKiBtb2RpZmllcnMgKi9bdHMuY3JlYXRlTW9kaWZpZXIodHMuU3ludGF4S2luZC5EZWNsYXJlS2V5d29yZCldLFxuICAgICAgICAvKiBhc3Rlcmlza1Rva2VuICovIHVuZGVmaW5lZCxcbiAgICAgICAgLyogbmFtZSAqLyBvdXRwdXRIZWxwZXJJZGVudCxcbiAgICAgICAgLyogdHlwZVBhcmFtZXRlcnMgKi9bZ2VuZXJpY1R5cGVEZWNsXSxcbiAgICAgICAgLyogcGFyYW1ldGVycyAqL1t0cy5jcmVhdGVQYXJhbWV0ZXIoXG4gICAgICAgICAgICAvKiBkZWNvcmF0b3JzICovIHVuZGVmaW5lZCxcbiAgICAgICAgICAgIC8qIG1vZGlmaWVycyAqLyB1bmRlZmluZWQsXG4gICAgICAgICAgICAvKiBkb3REb3REb3RUb2tlbiAqLyB1bmRlZmluZWQsXG4gICAgICAgICAgICAvKiBuYW1lICovICdvdXRwdXQnLFxuICAgICAgICAgICAgLyogcXVlc3Rpb25Ub2tlbiAqLyB1bmRlZmluZWQsXG4gICAgICAgICAgICAvKiB0eXBlICovIGdlbmVyaWNUeXBlUmVmKV0sXG4gICAgICAgIC8qIHR5cGUgKi8gZ2VuZXJpY1R5cGVSZWYsXG4gICAgICAgIC8qIGJvZHkgKi8gdW5kZWZpbmVkKSk7XG5cbiAgICByZXR1cm4gdGhpcy5vdXRwdXRIZWxwZXJJZGVudCA9IG91dHB1dEhlbHBlcklkZW50O1xuICB9XG5cbiAgLyoqXG4gICAqIEdlbmVyYXRlIGEgYHRzLkV4cHJlc3Npb25gIHRoYXQgcmVmZXJlbmNlcyB0aGUgZ2l2ZW4gbm9kZS5cbiAgICpcbiAgICogVGhpcyBtYXkgaW52b2x2ZSBpbXBvcnRpbmcgdGhlIG5vZGUgaW50byB0aGUgZmlsZSBpZiBpdCdzIG5vdCBkZWNsYXJlZCB0aGVyZSBhbHJlYWR5LlxuICAgKi9cbiAgcmVmZXJlbmNlKHJlZjogUmVmZXJlbmNlPENsYXNzRGVjbGFyYXRpb248dHMuQ2xhc3NEZWNsYXJhdGlvbj4+KTogdHMuRXhwcmVzc2lvbiB7XG4gICAgLy8gRGlzYWJsZSBhbGlhc2luZyBmb3IgaW1wb3J0cyBnZW5lcmF0ZWQgaW4gYSB0ZW1wbGF0ZSB0eXBlLWNoZWNraW5nIGNvbnRleHQsIGFzIHRoZXJlIGlzIG5vXG4gICAgLy8gZ3VhcmFudGVlIHRoYXQgYW55IGFsaWFzIHJlLWV4cG9ydHMgZXhpc3QgaW4gdGhlIC5kLnRzIGZpbGVzLiBJdCdzIHNhZmUgdG8gdXNlIGRpcmVjdCBpbXBvcnRzXG4gICAgLy8gaW4gdGhlc2UgY2FzZXMgYXMgdGhlcmUgaXMgbm8gc3RyaWN0IGRlcGVuZGVuY3kgY2hlY2tpbmcgZHVyaW5nIHRoZSB0ZW1wbGF0ZSB0eXBlLWNoZWNraW5nXG4gICAgLy8gcGFzcy5cbiAgICBjb25zdCBuZ0V4cHIgPSB0aGlzLnJlZkVtaXR0ZXIuZW1pdChyZWYsIHRoaXMuY29udGV4dEZpbGUsIEltcG9ydEZsYWdzLk5vQWxpYXNpbmcpO1xuXG4gICAgLy8gVXNlIGB0cmFuc2xhdGVFeHByZXNzaW9uYCB0byBjb252ZXJ0IHRoZSBgRXhwcmVzc2lvbmAgaW50byBhIGB0cy5FeHByZXNzaW9uYC5cbiAgICByZXR1cm4gdHJhbnNsYXRlRXhwcmVzc2lvbihcbiAgICAgICAgbmdFeHByLCB0aGlzLmltcG9ydE1hbmFnZXIsIE5PT1BfREVGQVVMVF9JTVBPUlRfUkVDT1JERVIsIHRzLlNjcmlwdFRhcmdldC5FUzIwMTUpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdlbmVyYXRlIGEgYHRzLlR5cGVOb2RlYCB0aGF0IHJlZmVyZW5jZXMgdGhlIGdpdmVuIG5vZGUgYXMgYSB0eXBlLlxuICAgKlxuICAgKiBUaGlzIG1heSBpbnZvbHZlIGltcG9ydGluZyB0aGUgbm9kZSBpbnRvIHRoZSBmaWxlIGlmIGl0J3Mgbm90IGRlY2xhcmVkIHRoZXJlIGFscmVhZHkuXG4gICAqL1xuICByZWZlcmVuY2VUeXBlKHJlZjogUmVmZXJlbmNlKTogdHMuVHlwZU5vZGUge1xuICAgIGNvbnN0IG5nRXhwciA9IHRoaXMucmVmRW1pdHRlci5lbWl0KFxuICAgICAgICByZWYsIHRoaXMuY29udGV4dEZpbGUsIEltcG9ydEZsYWdzLk5vQWxpYXNpbmcgfCBJbXBvcnRGbGFncy5BbGxvd1R5cGVJbXBvcnRzKTtcblxuICAgIC8vIENyZWF0ZSBhbiBgRXhwcmVzc2lvblR5cGVgIGZyb20gdGhlIGBFeHByZXNzaW9uYCBhbmQgdHJhbnNsYXRlIGl0IHZpYSBgdHJhbnNsYXRlVHlwZWAuXG4gICAgLy8gVE9ETyhhbHhodWIpOiBzdXBwb3J0IHJlZmVyZW5jZXMgdG8gdHlwZXMgd2l0aCBnZW5lcmljIGFyZ3VtZW50cyBpbiBhIGNsZWFuIHdheS5cbiAgICByZXR1cm4gdHJhbnNsYXRlVHlwZShuZXcgRXhwcmVzc2lvblR5cGUobmdFeHByKSwgdGhpcy5pbXBvcnRNYW5hZ2VyKTtcbiAgfVxuXG4gIHByaXZhdGUgZW1pdFR5cGVQYXJhbWV0ZXJzKGRlY2xhcmF0aW9uOiBDbGFzc0RlY2xhcmF0aW9uPHRzLkNsYXNzRGVjbGFyYXRpb24+KTpcbiAgICAgIHRzLlR5cGVQYXJhbWV0ZXJEZWNsYXJhdGlvbltdfHVuZGVmaW5lZCB7XG4gICAgY29uc3QgZW1pdHRlciA9IG5ldyBUeXBlUGFyYW1ldGVyRW1pdHRlcihkZWNsYXJhdGlvbi50eXBlUGFyYW1ldGVycywgdGhpcy5yZWZsZWN0b3IpO1xuICAgIHJldHVybiBlbWl0dGVyLmVtaXQocmVmID0+IHRoaXMucmVmZXJlbmNlVHlwZShyZWYpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZW5lcmF0ZSBhIGB0cy5UeXBlTm9kZWAgdGhhdCByZWZlcmVuY2VzIGEgZ2l2ZW4gdHlwZSBmcm9tIHRoZSBwcm92aWRlZCBtb2R1bGUuXG4gICAqXG4gICAqIFRoaXMgd2lsbCBpbnZvbHZlIGltcG9ydGluZyB0aGUgdHlwZSBpbnRvIHRoZSBmaWxlLCBhbmQgd2lsbCBhbHNvIGFkZCB0eXBlIHBhcmFtZXRlcnMgaWZcbiAgICogcHJvdmlkZWQuXG4gICAqL1xuICByZWZlcmVuY2VFeHRlcm5hbFR5cGUobW9kdWxlTmFtZTogc3RyaW5nLCBuYW1lOiBzdHJpbmcsIHR5cGVQYXJhbXM/OiBUeXBlW10pOiB0cy5UeXBlTm9kZSB7XG4gICAgY29uc3QgZXh0ZXJuYWwgPSBuZXcgRXh0ZXJuYWxFeHByKHttb2R1bGVOYW1lLCBuYW1lfSk7XG4gICAgcmV0dXJuIHRyYW5zbGF0ZVR5cGUobmV3IEV4cHJlc3Npb25UeXBlKGV4dGVybmFsLCBudWxsLCB0eXBlUGFyYW1zKSwgdGhpcy5pbXBvcnRNYW5hZ2VyKTtcbiAgfVxuXG4gIGdldFByZWx1ZGVTdGF0ZW1lbnRzKCk6IHRzLlN0YXRlbWVudFtdIHtcbiAgICByZXR1cm4gW1xuICAgICAgLi4udGhpcy5oZWxwZXJTdGF0ZW1lbnRzLFxuICAgICAgLi4udGhpcy5waXBlSW5zdFN0YXRlbWVudHMsXG4gICAgICAuLi50aGlzLnR5cGVDdG9yU3RhdGVtZW50cyxcbiAgICBdO1xuICB9XG59XG4iXX0=
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
        define("@angular/compiler-cli/src/ngtsc/typecheck/src/type_constructor", ["require", "exports", "tslib", "typescript", "@angular/compiler-cli/src/ngtsc/typecheck/src/type_parameter_emitter"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = require("tslib");
    var ts = require("typescript");
    var type_parameter_emitter_1 = require("@angular/compiler-cli/src/ngtsc/typecheck/src/type_parameter_emitter");
    function generateTypeCtorDeclarationFn(node, meta, nodeTypeRef, typeParams, reflector) {
        if (requiresInlineTypeCtor(node, reflector)) {
            throw new Error(node.name.text + " requires an inline type constructor");
        }
        var rawTypeArgs = typeParams !== undefined ? generateGenericArgs(typeParams) : undefined;
        var rawType = ts.createTypeReferenceNode(nodeTypeRef, rawTypeArgs);
        var initParam = constructTypeCtorParameter(node, meta, rawType);
        var typeParameters = typeParametersWithDefaultTypes(typeParams);
        if (meta.body) {
            var fnType = ts.createFunctionTypeNode(
            /* typeParameters */ typeParameters, 
            /* parameters */ [initParam], 
            /* type */ rawType);
            var decl = ts.createVariableDeclaration(
            /* name */ meta.fnName, 
            /* type */ fnType, 
            /* body */ ts.createNonNullExpression(ts.createNull()));
            var declList = ts.createVariableDeclarationList([decl], ts.NodeFlags.Const);
            return ts.createVariableStatement(
            /* modifiers */ undefined, 
            /* declarationList */ declList);
        }
        else {
            return ts.createFunctionDeclaration(
            /* decorators */ undefined, 
            /* modifiers */ [ts.createModifier(ts.SyntaxKind.DeclareKeyword)], 
            /* asteriskToken */ undefined, 
            /* name */ meta.fnName, 
            /* typeParameters */ typeParameters, 
            /* parameters */ [initParam], 
            /* type */ rawType, 
            /* body */ undefined);
        }
    }
    exports.generateTypeCtorDeclarationFn = generateTypeCtorDeclarationFn;
    /**
     * Generate an inline type constructor for the given class and metadata.
     *
     * An inline type constructor is a specially shaped TypeScript static method, intended to be placed
     * within a directive class itself, that permits type inference of any generic type parameters of
     * the class from the types of expressions bound to inputs or outputs, and the types of elements
     * that match queries performed by the directive. It also catches any errors in the types of these
     * expressions. This method is never called at runtime, but is used in type-check blocks to
     * construct directive types.
     *
     * An inline type constructor for NgFor looks like:
     *
     * static ngTypeCtor<T>(init: Pick<NgForOf<T>, 'ngForOf'|'ngForTrackBy'|'ngForTemplate'>):
     *   NgForOf<T>;
     *
     * A typical constructor would be:
     *
     * NgForOf.ngTypeCtor(init: {
     *   ngForOf: ['foo', 'bar'],
     *   ngForTrackBy: null as any,
     *   ngForTemplate: null as any,
     * }); // Infers a type of NgForOf<string>.
     *
     * Any inputs declared on the type for which no property binding is present are assigned a value of
     * type `any`, to avoid producing any type errors for unset inputs.
     *
     * Inline type constructors are used when the type being created has bounded generic types which
     * make writing a declared type constructor (via `generateTypeCtorDeclarationFn`) difficult or
     * impossible.
     *
     * @param node the `ClassDeclaration<ts.ClassDeclaration>` for which a type constructor will be
     * generated.
     * @param meta additional metadata required to generate the type constructor.
     * @returns a `ts.MethodDeclaration` for the type constructor.
     */
    function generateInlineTypeCtor(node, meta) {
        // Build rawType, a `ts.TypeNode` of the class with its generic parameters passed through from
        // the definition without any type bounds. For example, if the class is
        // `FooDirective<T extends Bar>`, its rawType would be `FooDirective<T>`.
        var rawTypeArgs = node.typeParameters !== undefined ? generateGenericArgs(node.typeParameters) : undefined;
        var rawType = ts.createTypeReferenceNode(node.name, rawTypeArgs);
        var initParam = constructTypeCtorParameter(node, meta, rawType);
        // If this constructor is being generated into a .ts file, then it needs a fake body. The body
        // is set to a return of `null!`. If the type constructor is being generated into a .d.ts file,
        // it needs no body.
        var body = undefined;
        if (meta.body) {
            body = ts.createBlock([
                ts.createReturn(ts.createNonNullExpression(ts.createNull())),
            ]);
        }
        // Create the type constructor method declaration.
        return ts.createMethod(
        /* decorators */ undefined, 
        /* modifiers */ [ts.createModifier(ts.SyntaxKind.StaticKeyword)], 
        /* asteriskToken */ undefined, 
        /* name */ meta.fnName, 
        /* questionToken */ undefined, 
        /* typeParameters */ typeParametersWithDefaultTypes(node.typeParameters), 
        /* parameters */ [initParam], 
        /* type */ rawType, 
        /* body */ body);
    }
    exports.generateInlineTypeCtor = generateInlineTypeCtor;
    function constructTypeCtorParameter(node, meta, rawType) {
        var e_1, _a;
        // initType is the type of 'init', the single argument to the type constructor method.
        // If the Directive has any inputs, its initType will be:
        //
        // Pick<rawType, 'inputA'|'inputB'>
        //
        // Pick here is used to select only those fields from which the generic type parameters of the
        // directive will be inferred.
        //
        // In the special case there are no inputs, initType is set to {}.
        var initType = null;
        var keys = meta.fields.inputs;
        var plainKeys = [];
        var coercedKeys = [];
        try {
            for (var keys_1 = tslib_1.__values(keys), keys_1_1 = keys_1.next(); !keys_1_1.done; keys_1_1 = keys_1.next()) {
                var key = keys_1_1.value;
                if (!meta.coercedInputFields.has(key)) {
                    plainKeys.push(ts.createLiteralTypeNode(ts.createStringLiteral(key)));
                }
                else {
                    coercedKeys.push(ts.createPropertySignature(
                    /* modifiers */ undefined, 
                    /* name */ key, 
                    /* questionToken */ undefined, 
                    /* type */
                    ts.createTypeQueryNode(ts.createQualifiedName(rawType.typeName, "ngAcceptInputType_" + key)), 
                    /* initializer */ undefined));
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (keys_1_1 && !keys_1_1.done && (_a = keys_1.return)) _a.call(keys_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        if (plainKeys.length > 0) {
            // Construct a union of all the field names.
            var keyTypeUnion = ts.createUnionTypeNode(plainKeys);
            // Construct the Pick<rawType, keyTypeUnion>.
            initType = ts.createTypeReferenceNode('Pick', [rawType, keyTypeUnion]);
        }
        if (coercedKeys.length > 0) {
            var coercedLiteral = ts.createTypeLiteralNode(coercedKeys);
            initType =
                initType !== null ? ts.createUnionTypeNode([initType, coercedLiteral]) : coercedLiteral;
        }
        if (initType === null) {
            // Special case - no inputs, outputs, or other fields which could influence the result type.
            initType = ts.createTypeLiteralNode([]);
        }
        // Create the 'init' parameter itself.
        return ts.createParameter(
        /* decorators */ undefined, 
        /* modifiers */ undefined, 
        /* dotDotDotToken */ undefined, 
        /* name */ 'init', 
        /* questionToken */ undefined, 
        /* type */ initType, 
        /* initializer */ undefined);
    }
    function generateGenericArgs(params) {
        return params.map(function (param) { return ts.createTypeReferenceNode(param.name, undefined); });
    }
    function requiresInlineTypeCtor(node, host) {
        // The class requires an inline type constructor if it has generic type bounds that can not be
        // emitted into a different context.
        return !checkIfGenericTypeBoundsAreContextFree(node, host);
    }
    exports.requiresInlineTypeCtor = requiresInlineTypeCtor;
    function checkIfGenericTypeBoundsAreContextFree(node, reflector) {
        // Generic type parameters are considered context free if they can be emitted into any context.
        return new type_parameter_emitter_1.TypeParameterEmitter(node.typeParameters, reflector).canEmit();
    }
    /**
     * Add a default `= any` to type parameters that don't have a default value already.
     *
     * TypeScript uses the default type of a type parameter whenever inference of that parameter fails.
     * This can happen when inferring a complex type from 'any'. For example, if `NgFor`'s inference is
     * done with the TCB code:
     *
     * ```
     * class NgFor<T> {
     *   ngForOf: T[];
     * }
     *
     * declare function ctor<T>(o: Pick<NgFor<T>, 'ngForOf'|'ngForTrackBy'|'ngForTemplate'>): NgFor<T>;
     * ```
     *
     * An invocation looks like:
     *
     * ```
     * var _t1 = ctor({ngForOf: [1, 2], ngForTrackBy: null as any, ngForTemplate: null as any});
     * ```
     *
     * This correctly infers the type `NgFor<number>` for `_t1`, since `T` is inferred from the
     * assignment of type `number[]` to `ngForOf`'s type `T[]`. However, if `any` is passed instead:
     *
     * ```
     * var _t2 = ctor({ngForOf: [1, 2] as any, ngForTrackBy: null as any, ngForTemplate: null as any});
     * ```
     *
     * then inference for `T` fails (it cannot be inferred from `T[] = any`). In this case, `T` takes
     * the type `{}`, and so `_t2` is inferred as `NgFor<{}>`. This is obviously wrong.
     *
     * Adding a default type to the generic declaration in the constructor solves this problem, as the
     * default type will be used in the event that inference fails.
     *
     * ```
     * declare function ctor<T = any>(o: Pick<NgFor<T>, 'ngForOf'>): NgFor<T>;
     *
     * var _t3 = ctor({ngForOf: [1, 2] as any});
     * ```
     *
     * This correctly infers `T` as `any`, and therefore `_t3` as `NgFor<any>`.
     */
    function typeParametersWithDefaultTypes(params) {
        if (params === undefined) {
            return undefined;
        }
        return params.map(function (param) {
            if (param.default === undefined) {
                return ts.updateTypeParameterDeclaration(
                /* node */ param, 
                /* name */ param.name, 
                /* constraint */ param.constraint, 
                /* defaultType */ ts.createKeywordTypeNode(ts.SyntaxKind.AnyKeyword));
            }
            else {
                return param;
            }
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZV9jb25zdHJ1Y3Rvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbXBpbGVyLWNsaS9zcmMvbmd0c2MvdHlwZWNoZWNrL3NyYy90eXBlX2NvbnN0cnVjdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRzs7Ozs7Ozs7Ozs7OztJQUVILCtCQUFpQztJQUtqQywrR0FBOEQ7SUFFOUQsU0FBZ0IsNkJBQTZCLENBQ3pDLElBQTJDLEVBQUUsSUFBc0IsRUFBRSxXQUEwQixFQUMvRixVQUFtRCxFQUFFLFNBQXlCO1FBQ2hGLElBQUksc0JBQXNCLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxFQUFFO1lBQzNDLE1BQU0sSUFBSSxLQUFLLENBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLHlDQUFzQyxDQUFDLENBQUM7U0FDMUU7UUFFRCxJQUFNLFdBQVcsR0FBRyxVQUFVLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQzNGLElBQU0sT0FBTyxHQUFHLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQyxXQUFXLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFFckUsSUFBTSxTQUFTLEdBQUcsMEJBQTBCLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztRQUVsRSxJQUFNLGNBQWMsR0FBRyw4QkFBOEIsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUVsRSxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDYixJQUFNLE1BQU0sR0FBRyxFQUFFLENBQUMsc0JBQXNCO1lBQ3BDLG9CQUFvQixDQUFDLGNBQWM7WUFDbkMsZ0JBQWdCLENBQUEsQ0FBQyxTQUFTLENBQUM7WUFDM0IsVUFBVSxDQUFDLE9BQU8sQ0FDckIsQ0FBQztZQUVGLElBQU0sSUFBSSxHQUFHLEVBQUUs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QUksNkNBQW9CLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxTQUFTLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUM1RSxDQUFDO0lBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O09BeUNHO0lBQ0gsU0FBUyw4QkFBOEIsQ0FBQyxNQUNTO1FBQy9DLElBQUksTUFBTSxLQUFLLFNBQVMsRUFBRTtZQUN4QixPQUFPLFNBQVMsQ0FBQztTQUNsQjtRQUVELE9BQU8sTUFBTSxDQUFDLEdBQUcsQ0FBQyxVQUFBLEtBQUs7WUFDckIsSUFBSSxLQUFLLENBQUMsT0FBTyxLQUFLLFNBQVMsRUFBRTtnQkFDL0IsT0FBTyxFQUFFLENBQUMsOEJBQThCO2dCQUNwQyxVQUFVLENBQUMsS0FBSztnQkFDaEIsVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJO2dCQUNyQixnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsVUFBVTtnQkFDakMsaUJBQWlCLENBQUMsRUFBRSxDQUFDLHFCQUFxQixDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQzthQUMzRTtpQkFBTTtnQkFDTCxPQUFPLEtBQUssQ0FBQzthQUNkO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQgKiBhcyB0cyBmcm9tICd0eXBlc2NyaXB0JztcblxuaW1wb3J0IHtDbGFzc0RlY2xhcmF0aW9uLCBSZWZsZWN0aW9uSG9zdH0gZnJvbSAnLi4vLi4vcmVmbGVjdGlvbic7XG5cbmltcG9ydCB7VHlwZUN0b3JNZXRhZGF0YX0gZnJvbSAnLi9hcGknO1xuaW1wb3J0IHtUeXBlUGFyYW1ldGVyRW1pdHRlcn0gZnJvbSAnLi90eXBlX3BhcmFtZXRlcl9lbWl0dGVyJztcblxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlVHlwZUN0b3JEZWNsYXJhdGlvbkZuKFxuICAgIG5vZGU6IENsYXNzRGVjbGFyYXRpb248dHMuQ2xhc3NEZWNsYXJhdGlvbj4sIG1ldGE6IFR5cGVDdG9yTWV0YWRhdGEsIG5vZGVUeXBlUmVmOiB0cy5FbnRpdHlOYW1lLFxuICAgIHR5cGVQYXJhbXM6IHRzLlR5cGVQYXJhbWV0ZXJEZWNsYXJhdGlvbltdfHVuZGVmaW5lZCwgcmVmbGVjdG9yOiBSZWZsZWN0aW9uSG9zdCk6IHRzLlN0YXRlbWVudCB7XG4gIGlmIChyZXF1aXJlc0lubGluZVR5cGVDdG9yKG5vZGUsIHJlZmxlY3RvcikpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYCR7bm9kZS5uYW1lLnRleHR9IHJlcXVpcmVzIGFuIGlubGluZSB0eXBlIGNvbnN0cnVjdG9yYCk7XG4gIH1cblxuICBjb25zdCByYXdUeXBlQXJncyA9IHR5cGVQYXJhbXMgIT09IHVuZGVmaW5lZCA/IGdlbmVyYXRlR2VuZXJpY0FyZ3ModHlwZVBhcmFtcykgOiB1bmRlZmluZWQ7XG4gIGNvbnN0IHJhd1R5cGUgPSB0cy5jcmVhdGVUeXBlUmVmZXJlbmNlTm9kZShub2RlVHlwZVJlZiwgcmF3VHlwZUFyZ3MpO1xuXG4gIGNvbnN0IGluaXRQYXJhbSA9IGNvbnN0cnVjdFR5cGVDdG9yUGFyYW1ldGVyKG5vZGUsIG1ldGEsIHJhd1R5cGUpO1xuXG4gIGNvbnN0IHR5cGVQYXJhbWV0ZXJzID0gdHlwZVBhcmFtZXRlcnNXaXRoRGVmYXVsdFR5cGVzKHR5cGVQYXJhbXMpO1xuXG4gIGlmIChtZXRhLmJvZHkpIHtcbiAgICBjb25zdCBmblR5cGUgPSB0cy5jcmVhdGVGdW5jdGlvblR5cGVOb2RlKFxuICAgICAgICAvKiB0eXBlUGFyYW1ldGVycyAqLyB0eXBlUGFyYW1ldGVycyxcbiAgICAgICAgLyogcGFyYW1ldGVycyAqL1tpbml0UGFyYW1dLFxuICAgICAgICAvKiB0eXBlICovIHJhd1R5cGUsXG4gICAgKTtcblxuICAgIGNvbnN0IGRlY2wgPSB0cy5jcmVhdGVWYXJpYWJsZURlY2xhcmF0aW9uKFxuICAgICAgICAvKiBuYW1lICovIG1ldGEuZm5OYW1lLFxuICAgICAgICAvKiB0eXBlICovIGZuVHlwZSxcbiAgICAgICAgLyogYm9keSAqLyB0cy5jcmVhdGVOb25OdWxsRXhwcmVzc2lvbih0cy5jcmVhdGVOdWxsKCkpKTtcbiAgICBjb25zdCBkZWNsTGlzdCA9IHRzLmNyZWF0ZVZhcmlhYmxlRGVjbGFyYXRpb25MaXN0KFtkZWNsXSwgdHMuTm9kZUZsYWdzLkNvbnN0KTtcbiAgICByZXR1cm4gdHMuY3JlYXRlVmFyaWFibGVTdGF0ZW1lbnQoXG4gICAgICAgIC8qIG1vZGlmaWVycyAqLyB1bmRlZmluZWQsXG4gICAgICAgIC8qIGRlY2xhcmF0aW9uTGlzdCAqLyBkZWNsTGlzdCk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHRzLmNyZWF0ZUZ1bmN0aW9uRGVjbGFyYXRpb24oXG4gICAgICAgIC8qIGRlY29yYXRvcnMgKi8gdW5kZWZpbmVkLFxuICAgICAgICAvKiBtb2RpZmllcnMgKi9bdHMuY3JlYXRlTW9kaWZpZXIodHMuU3ludGF4S2luZC5EZWNsYXJlS2V5d29yZCldLFxuICAgICAgICAvKiBhc3Rlcmlza1Rva2VuICovIHVuZGVmaW5lZCxcbiAgICAgICAgLyogbmFtZSAqLyBtZXRhLmZuTmFtZSxcbiAgICAgICAgLyogdHlwZVBhcmFtZXRlcnMgKi8gdHlwZVBhcmFtZXRlcnMsXG4gICAgICAgIC8qIHBhcmFtZXRlcnMgKi9baW5pdFBhcmFtXSxcbiAgICAgICAgLyogdHlwZSAqLyByYXdUeXBlLFxuICAgICAgICAvKiBib2R5ICovIHVuZGVmaW5lZCk7XG4gIH1cbn1cblxuLyoqXG4gKiBHZW5lcmF0ZSBhbiBpbmxpbmUgdHlwZSBjb25zdHJ1Y3RvciBmb3IgdGhlIGdpdmVuIGNsYXNzIGFuZCBtZXRhZGF0YS5cbiAqXG4gKiBBbiBpbmxpbmUgdHlwZSBjb25zdHJ1Y3RvciBpcyBhIHNwZWNpYWxseSBzaGFwZWQgVHlwZVNjcmlwdCBzdGF0aWMgbWV0aG9kLCBpbnRlbmRlZCB0byBiZSBwbGFjZWRcbiAqIHdpdGhpbiBhIGRpcmVjdGl2ZSBjbGFzcyBpdHNlbGYsIHRoYXQgcGVybWl0cyB0eXBlIGluZmVyZW5jZSBvZiBhbnkgZ2VuZXJpYyB0eXBlIHBhcmFtZXRlcnMgb2ZcbiAqIHRoZSBjbGFzcyBmcm9tIHRoZSB0eXBlcyBvZiBleHByZXNzaW9ucyBib3VuZCB0byBpbnB1dHMgb3Igb3V0cHV0cywgYW5kIHRoZSB0eXBlcyBvZiBlbGVtZW50c1xuICogdGhhdCBtYXRjaCBxdWVyaWVzIHBlcmZvcm1lZCBieSB0aGUgZGlyZWN0aXZlLiBJdCBhbHNvIGNhdGNoZXMgYW55IGVycm9ycyBpbiB0aGUgdHlwZXMgb2YgdGhlc2VcbiAqIGV4cHJlc3Npb25zLiBUaGlzIG1ldGhvZCBpcyBuZXZlciBjYWxsZWQgYXQgcnVudGltZSwgYnV0IGlzIHVzZWQgaW4gdHlwZS1jaGVjayBibG9ja3MgdG9cbiAqIGNvbnN0cnVjdCBkaXJlY3RpdmUgdHlwZXMuXG4gKlxuICogQW4gaW5saW5lIHR5cGUgY29uc3RydWN0b3IgZm9yIE5nRm9yIGxvb2tzIGxpa2U6XG4gKlxuICogc3RhdGljIG5nVHlwZUN0b3I8VD4oaW5pdDogUGljazxOZ0Zvck9mPFQ+LCAnbmdGb3JPZid8J25nRm9yVHJhY2tCeSd8J25nRm9yVGVtcGxhdGUnPik6XG4gKiAgIE5nRm9yT2Y8VD47XG4gKlxuICogQSB0eXBpY2FsIGNvbnN0cnVjdG9yIHdvdWxkIGJlOlxuICpcbiAqIE5nRm9yT2YubmdUeXBlQ3Rvcihpbml0OiB7XG4gKiAgIG5nRm9yT2Y6IFsnZm9vJywgJ2JhciddLFxuICogICBuZ0ZvclRyYWNrQnk6IG51bGwgYXMgYW55LFxuICogICBuZ0ZvclRlbXBsYXRlOiBudWxsIGFzIGFueSxcbiAqIH0pOyAvLyBJbmZlcnMgYSB0eXBlIG9mIE5nRm9yT2Y8c3RyaW5nPi5cbiAqXG4gKiBBbnkgaW5wdXRzIGRlY2xhcmVkIG9uIHRoZSB0eXBlIGZvciB3aGljaCBubyBwcm9wZXJ0eSBiaW5kaW5nIGlzIHByZXNlbnQgYXJlIGFzc2lnbmVkIGEgdmFsdWUgb2ZcbiAqIHR5cGUgYGFueWAsIHRvIGF2b2lkIHByb2R1Y2luZyBhbnkgdHlwZSBlcnJvcnMgZm9yIHVuc2V0IGlucHV0cy5cbiAqXG4gKiBJbmxpbmUgdHlwZSBjb25zdHJ1Y3RvcnMgYXJlIHVzZWQgd2hlbiB0aGUgdHlwZSBiZWluZyBjcmVhdGVkIGhhcyBib3VuZGVkIGdlbmVyaWMgdHlwZXMgd2hpY2hcbiAqIG1ha2Ugd3JpdGluZyBhIGRlY2xhcmVkIHR5cGUgY29uc3RydWN0b3IgKHZpYSBgZ2VuZXJhdGVUeXBlQ3RvckRlY2xhcmF0aW9uRm5gKSBkaWZmaWN1bHQgb3JcbiAqIGltcG9zc2libGUuXG4gKlxuICogQHBhcmFtIG5vZGUgdGhlIGBDbGFzc0RlY2xhcmF0aW9uPHRzLkNsYXNzRGVjbGFyYXRpb24+YCBmb3Igd2hpY2ggYSB0eXBlIGNvbnN0cnVjdG9yIHdpbGwgYmVcbiAqIGdlbmVyYXRlZC5cbiAqIEBwYXJhbSBtZXRhIGFkZGl0aW9uYWwgbWV0YWRhdGEgcmVxdWlyZWQgdG8gZ2VuZXJhdGUgdGhlIHR5cGUgY29uc3RydWN0b3IuXG4gKiBAcmV0dXJucyBhIGB0cy5NZXRob2REZWNsYXJhdGlvbmAgZm9yIHRoZSB0eXBlIGNvbnN0cnVjdG9yLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVJbmxpbmVUeXBlQ3RvcihcbiAgICBub2RlOiBDbGFzc0RlY2xhcmF0aW9uPHRzLkNsYXNzRGVjbGFyYXRpb24+LCBtZXRhOiBUeXBlQ3Rvck1ldGFkYXRhKTogdHMuTWV0aG9kRGVjbGFyYXRpb24ge1xuICAvLyBCdWlsZCByYXdUeXBlLCBhIGB0cy5UeXBlTm9kZWAgb2YgdGhlIGNsYXNzIHdpdGggaXRzIGdlbmVyaWMgcGFyYW1ldGVycyBwYXNzZWQgdGhyb3VnaCBmcm9tXG4gIC8vIHRoZSBkZWZpbml0aW9uIHdpdGhvdXQgYW55IHR5cGUgYm91bmRzLiBGb3IgZXhhbXBsZSwgaWYgdGhlIGNsYXNzIGlzXG4gIC8vIGBGb29EaXJlY3RpdmU8VCBleHRlbmRzIEJhcj5gLCBpdHMgcmF3VHlwZSB3b3VsZCBiZSBgRm9vRGlyZWN0aXZlPFQ+YC5cbiAgY29uc3QgcmF3VHlwZUFyZ3MgPVxuICAgICAgbm9kZS50eXBlUGFyYW1ldGVycyAhPT0gdW5kZWZpbmVkID8gZ2VuZXJhdGVHZW5lcmljQXJncyhub2RlLnR5cGVQYXJhbWV0ZXJzKSA6IHVuZGVmaW5lZDtcbiAgY29uc3QgcmF3VHlwZSA9IHRzLmNyZWF0ZVR5cGVSZWZlcmVuY2VOb2RlKG5vZGUubmFtZSwgcmF3VHlwZUFyZ3MpO1xuXG4gIGNvbnN0IGluaXRQYXJhbSA9IGNvbnN0cnVjdFR5cGVDdG9yUGFyYW1ldGVyKG5vZGUsIG1ldGEsIHJhd1R5cGUpO1xuXG4gIC8vIElmIHRoaXMgY29uc3RydWN0b3IgaXMgYmVpbmcgZ2VuZXJhdGVkIGludG8gYSAudHMgZmlsZSwgdGhlbiBpdCBuZWVkcyBhIGZha2UgYm9keS4gVGhlIGJvZHlcbiAgLy8gaXMgc2V0IHRvIGEgcmV0dXJuIG9mIGBudWxsIWAuIElmIHRoZSB0eXBlIGNvbnN0cnVjdG9yIGlzIGJlaW5nIGdlbmVyYXRlZCBpbnRvIGEgLmQudHMgZmlsZSxcbiAgLy8gaXQgbmVlZHMgbm8gYm9keS5cbiAgbGV0IGJvZHk6IHRzLkJsb2NrfHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgaWYgKG1ldGEuYm9keSkge1xuICAgIGJvZHkgPSB0cy5jcmVhdGVCbG9jayhbXG4gICAgICB0cy5jcmVhdGVSZXR1cm4odHMuY3JlYXRlTm9uTnVsbEV4cHJlc3Npb24odHMuY3JlYXRlTnVsbCgpKSksXG4gICAgXSk7XG4gIH1cblxuICAvLyBDcmVhdGUgdGhlIHR5cGUgY29uc3RydWN0b3IgbWV0aG9kIGRlY2xhcmF0aW9uLlxuICByZXR1cm4gdHMuY3JlYXRlTWV0aG9kKFxuICAgICAgLyogZGVjb3JhdG9ycyAqLyB1bmRlZmluZWQsXG4gICAgICAvKiBtb2RpZmllcnMgKi9bdHMuY3JlYXRlTW9kaWZpZXIodHMuU3ludGF4S2luZC5TdGF0aWNLZXl3b3JkKV0sXG4gICAgICAvKiBhc3Rlcmlza1Rva2VuICovIHVuZGVmaW5lZCxcbiAgICAgIC8qIG5hbWUgKi8gbWV0YS5mbk5hbWUsXG4gICAgICAvKiBxdWVzdGlvblRva2VuICovIHVuZGVmaW5lZCxcbiAgICAgIC8qIHR5cGVQYXJhbWV0ZXJzICovIHR5cGVQYXJhbWV0ZXJzV2l0aERlZmF1bHRUeXBlcyhub2RlLnR5cGVQYXJhbWV0ZXJzKSxcbiAgICAgIC8qIHBhcmFtZXRlcnMgKi9baW5pdFBhcmFtXSxcbiAgICAgIC8qIHR5cGUgKi8gcmF3VHlwZSxcbiAgICAgIC8qIGJvZHkgKi8gYm9keSxcbiAgKTtcbn1cblxuZnVuY3Rpb24gY29uc3RydWN0VHlwZUN0b3JQYXJhbWV0ZXIoXG4gICAgbm9kZTogQ2xhc3NEZWNsYXJhdGlvbjx0cy5DbGFzc0RlY2xhcmF0aW9uPiwgbWV0YTogVHlwZUN0b3JNZXRhZGF0YSxcbiAgICByYXdUeXBlOiB0cy5UeXBlUmVmZXJlbmNlTm9kZSk6IHRzLlBhcmFtZXRlckRlY2xhcmF0aW9uIHtcbiAgLy8gaW5pdFR5cGUgaXMgdGhlIHR5cGUgb2YgJ2luaXQnLCB0aGUgc2luZ2xlIGFyZ3VtZW50IHRvIHRoZSB0eXBlIGNvbnN0cnVjdG9yIG1ldGhvZC5cbiAgLy8gSWYgdGhlIERpcmVjdGl2ZSBoYXMgYW55IGlucHV0cywgaXRzIGluaXRUeXBlIHdpbGwgYmU6XG4gIC8vXG4gIC8vIFBpY2s8cmF3VHlwZSwgJ2lucHV0QSd8J2lucHV0Qic+XG4gIC8vXG4gIC8vIFBpY2sgaGVyZSBpcyB1c2VkIHRvIHNlbGVjdCBvbmx5IHRob3NlIGZpZWxkcyBmcm9tIHdoaWNoIHRoZSBnZW5lcmljIHR5cGUgcGFyYW1ldGVycyBvZiB0aGVcbiAgLy8gZGlyZWN0aXZlIHdpbGwgYmUgaW5mZXJyZWQuXG4gIC8vXG4gIC8vIEluIHRoZSBzcGVjaWFsIGNhc2UgdGhlcmUgYXJlIG5vIGlucHV0cywgaW5pdFR5cGUgaXMgc2V0IHRvIHt9LlxuICBsZXQgaW5pdFR5cGU6IHRzLlR5cGVOb2RlfG51bGwgPSBudWxsO1xuXG4gIGNvbnN0IGtleXM6IHN0cmluZ1tdID0gbWV0YS5maWVsZHMuaW5wdXRzO1xuICBjb25zdCBwbGFpbktleXM6IHRzLkxpdGVyYWxUeXBlTm9kZVtdID0gW107XG4gIGNvbnN0IGNvZXJjZWRLZXlzOiB0cy5Qcm9wZXJ0eVNpZ25hdHVyZVtdID0gW107XG4gIGZvciAoY29uc3Qga2V5IG9mIGtleXMpIHtcbiAgICBpZiAoIW1ldGEuY29lcmNlZElucHV0RmllbGRzLmhhcyhrZXkpKSB7XG4gICAgICBwbGFpbktleXMucHVzaCh0cy5jcmVhdGVMaXRlcmFsVHlwZU5vZGUodHMuY3JlYXRlU3RyaW5nTGl0ZXJhbChrZXkpKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvZXJjZWRLZXlzLnB1c2godHMuY3JlYXRlUHJvcGVydHlTaWduYXR1cmUoXG4gICAgICAgICAgLyogbW9kaWZpZXJzICovIHVuZGVmaW5lZCxcbiAgICAgICAgICAvKiBuYW1lICovIGtleSxcbiAgICAgICAgICAvKiBxdWVzdGlvblRva2VuICovIHVuZGVmaW5lZCxcbiAgICAgICAgICAvKiB0eXBlICovXG4gICAgICAgICAgdHMuY3JlYXRlVHlwZVF1ZXJ5Tm9kZShcbiAgICAgICAgICAgICAgdHMuY3JlYXRlUXVhbGlmaWVkTmFtZShyYXdUeXBlLnR5cGVOYW1lLCBgbmdBY2NlcHRJbnB1dFR5cGVfJHtrZXl9YCkpLFxuICAgICAgICAgIC8qIGluaXRpYWxpemVyICovIHVuZGVmaW5lZCkpO1xuICAgIH1cbiAgfVxuICBpZiAocGxhaW5LZXlzLmxlbmd0aCA+IDApIHtcbiAgICAvLyBDb25zdHJ1Y3QgYSB1bmlvbiBvZiBhbGwgdGhlIGZpZWxkIG5hbWVzLlxuICAgIGNvbnN0IGtleVR5cGVVbmlvbiA9IHRzLmNyZWF0ZVVuaW9uVHlwZU5vZGUocGxhaW5LZXlzKTtcblxuICAgIC8vIENvbnN0cnVjdCB0aGUgUGljazxyYXdUeXBlLCBrZXlUeXBlVW5pb24+LlxuICAgIGluaXRUeXBlID0gdHMuY3JlYXRlVHlwZVJlZmVyZW5jZU5vZGUoJ1BpY2snLCBbcmF3VHlwZSwga2V5VHlwZVVuaW9uXSk7XG4gIH1cbiAgaWYgKGNvZXJjZWRLZXlzLmxlbmd0aCA+IDApIHtcbiAgICBjb25zdCBjb2VyY2VkTGl0ZXJhbCA9IHRzLmNyZWF0ZVR5cGVMaXRlcmFsTm9kZShjb2VyY2VkS2V5cyk7XG5cbiAgICBpbml0VHlwZSA9XG4gICAgICAgIGluaXRUeXBlICE9PSBudWxsID8gdHMuY3JlYXRlVW5pb25UeXBlTm9kZShbaW5pdFR5cGUsIGNvZXJjZWRMaXRlcmFsXSkgOiBjb2VyY2VkTGl0ZXJhbDtcbiAgfVxuXG4gIGlmIChpbml0VHlwZSA9PT0gbnVsbCkge1xuICAgIC8vIFNwZWNpYWwgY2FzZSAtIG5vIGlucHV0cywgb3V0cHV0cywgb3Igb3RoZXIgZmllbGRzIHdoaWNoIGNvdWxkIGluZmx1ZW5jZSB0aGUgcmVzdWx0IHR5cGUuXG4gICAgaW5pdFR5cGUgPSB0cy5jcmVhdGVUeXBlTGl0ZXJhbE5vZGUoW10pO1xuICB9XG5cbiAgLy8gQ3JlYXRlIHRoZSAnaW5pdCcgcGFyYW1ldGVyIGl0c2VsZi5cbiAgcmV0dXJuIHRzLmNyZWF0ZVBhcmFtZXRlcihcbiAgICAgIC8qIGRlY29yYXRvcnMgKi8gdW5kZWZpbmVkLFxuICAgICAgLyogbW9kaWZpZXJzICovIHVuZGVmaW5lZCxcbiAgICAgIC8qIGRvdERvdERvdFRva2VuICovIHVuZGVmaW5lZCxcbiAgICAgIC8qIG5hbWUgKi8gJ2luaXQnLFxuICAgICAgLyogcXVlc3Rpb25Ub2tlbiAqLyB1bmRlZmluZWQsXG4gICAgICAvKiB0eXBlICovIGluaXRUeXBlLFxuICAgICAgLyogaW5pdGlhbGl6ZXIgKi8gdW5kZWZpbmVkKTtcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVHZW5lcmljQXJncyhwYXJhbXM6IFJlYWRvbmx5QXJyYXk8dHMuVHlwZVBhcmFtZXRlckRlY2xhcmF0aW9uPik6IHRzLlR5cGVOb2RlW10ge1xuICByZXR1cm4gcGFyYW1zLm1hcChwYXJhbSA9PiB0cy5jcmVhdGVUeXBlUmVmZXJlbmNlTm9kZShwYXJhbS5uYW1lLCB1bmRlZmluZWQpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlcXVpcmVzSW5saW5lVHlwZUN0b3IoXG4gICAgbm9kZTogQ2xhc3NEZWNsYXJhdGlvbjx0cy5DbGFzc0RlY2xhcmF0aW9uPiwgaG9zdDogUmVmbGVjdGlvbkhvc3QpOiBib29sZWFuIHtcbiAgLy8gVGhlIGNsYXNzIHJlcXVpcmVzIGFuIGlubGluZSB0eXBlIGNvbnN0cnVjdG9yIGlmIGl0IGhhcyBnZW5lcmljIHR5cGUgYm91bmRzIHRoYXQgY2FuIG5vdCBiZVxuICAvLyBlbWl0dGVkIGludG8gYSBkaWZmZXJlbnQgY29udGV4dC5cbiAgcmV0dXJuICFjaGVja0lmR2VuZXJpY1R5cGVCb3VuZHNBcmVDb250ZXh0RnJlZShub2RlLCBob3N0KTtcbn1cblxuZnVuY3Rpb24gY2hlY2tJZkdlbmVyaWNUeXBlQm91bmRzQXJlQ29udGV4dEZyZWUoXG4gICAgbm9kZTogQ2xhc3NEZWNsYXJhdGlvbjx0cy5DbGFzc0RlY2xhcmF0aW9uPiwgcmVmbGVjdG9yOiBSZWZsZWN0aW9uSG9zdCk6IGJvb2xlYW4ge1xuICAvLyBHZW5lcmljIHR5cGUgcGFyYW1ldGVycyBhcmUgY29uc2lkZXJlZCBjb250ZXh0IGZyZWUgaWYgdGhleSBjYW4gYmUgZW1pdHRlZCBpbnRvIGFueSBjb250ZXh0LlxuICByZXR1cm4gbmV3IFR5cGVQYXJhbWV0ZXJFbWl0dGVyKG5vZGUudHlwZVBhcmFtZXRlcnMsIHJlZmxlY3RvcikuY2FuRW1pdCgpO1xufVxuXG4vKipcbiAqIEFkZCBhIGRlZmF1bHQgYD0gYW55YCB0byB0eXBlIHBhcmFtZXRlcnMgdGhhdCBkb24ndCBoYXZlIGEgZGVmYXVsdCB2YWx1ZSBhbHJlYWR5LlxuICpcbiAqIFR5cGVTY3JpcHQgdXNlcyB0aGUgZGVmYXVsdCB0eXBlIG9mIGEgdHlwZSBwYXJhbWV0ZXIgd2hlbmV2ZXIgaW5mZXJlbmNlIG9mIHRoYXQgcGFyYW1ldGVyIGZhaWxzLlxuICogVGhpcyBjYW4gaGFwcGVuIHdoZW4gaW5mZXJyaW5nIGEgY29tcGxleCB0eXBlIGZyb20gJ2FueScuIEZvciBleGFtcGxlLCBpZiBgTmdGb3JgJ3MgaW5mZXJlbmNlIGlzXG4gKiBkb25lIHdpdGggdGhlIFRDQiBjb2RlOlxuICpcbiAqIGBgYFxuICogY2xhc3MgTmdGb3I8VD4ge1xuICogICBuZ0Zvck9mOiBUW107XG4gKiB9XG4gKlxuICogZGVjbGFyZSBmdW5jdGlvbiBjdG9yPFQ+KG86IFBpY2s8TmdGb3I8VD4sICduZ0Zvck9mJ3wnbmdGb3JUcmFja0J5J3wnbmdGb3JUZW1wbGF0ZSc+KTogTmdGb3I8VD47XG4gKiBgYGBcbiAqXG4gKiBBbiBpbnZvY2F0aW9uIGxvb2tzIGxpa2U6XG4gKlxuICogYGBgXG4gKiB2YXIgX3QxID0gY3Rvcih7bmdGb3JPZjogWzEsIDJdLCBuZ0ZvclRyYWNrQnk6IG51bGwgYXMgYW55LCBuZ0ZvclRlbXBsYXRlOiBudWxsIGFzIGFueX0pO1xuICogYGBgXG4gKlxuICogVGhpcyBjb3JyZWN0bHkgaW5mZXJzIHRoZSB0eXBlIGBOZ0ZvcjxudW1iZXI+YCBmb3IgYF90MWAsIHNpbmNlIGBUYCBpcyBpbmZlcnJlZCBmcm9tIHRoZVxuICogYXNzaWdubWVudCBvZiB0eXBlIGBudW1iZXJbXWAgdG8gYG5nRm9yT2ZgJ3MgdHlwZSBgVFtdYC4gSG93ZXZlciwgaWYgYGFueWAgaXMgcGFzc2VkIGluc3RlYWQ6XG4gKlxuICogYGBgXG4gKiB2YXIgX3QyID0gY3Rvcih7bmdGb3JPZjogWzEsIDJdIGFzIGFueSwgbmdGb3JUcmFja0J5OiBudWxsIGFzIGFueSwgbmdGb3JUZW1wbGF0ZTogbnVsbCBhcyBhbnl9KTtcbiAqIGBgYFxuICpcbiAqIHRoZW4gaW5mZXJlbmNlIGZvciBgVGAgZmFpbHMgKGl0IGNhbm5vdCBiZSBpbmZlcnJlZCBmcm9tIGBUW10gPSBhbnlgKS4gSW4gdGhpcyBjYXNlLCBgVGAgdGFrZXNcbiAqIHRoZSB0eXBlIGB7fWAsIGFuZCBzbyBgX3QyYCBpcyBpbmZlcnJlZCBhcyBgTmdGb3I8e30+YC4gVGhpcyBpcyBvYnZpb3VzbHkgd3JvbmcuXG4gKlxuICogQWRkaW5nIGEgZGVmYXVsdCB0eXBlIHRvIHRoZSBnZW5lcmljIGRlY2xhcmF0aW9uIGluIHRoZSBjb25zdHJ1Y3RvciBzb2x2ZXMgdGhpcyBwcm9ibGVtLCBhcyB0aGVcbiAqIGRlZmF1bHQgdHlwZSB3aWxsIGJlIHVzZWQgaW4gdGhlIGV2ZW50IHRoYXQgaW5mZXJlbmNlIGZhaWxzLlxuICpcbiAqIGBgYFxuICogZGVjbGFyZSBmdW5jdGlvbiBjdG9yPFQgPSBhbnk+KG86IFBpY2s8TmdGb3I8VD4sICduZ0Zvck9mJz4pOiBOZ0ZvcjxUPjtcbiAqXG4gKiB2YXIgX3QzID0gY3Rvcih7bmdGb3JPZjogWzEsIDJdIGFzIGFueX0pO1xuICogYGBgXG4gKlxuICogVGhpcyBjb3JyZWN0bHkgaW5mZXJzIGBUYCBhcyBgYW55YCwgYW5kIHRoZXJlZm9yZSBgX3QzYCBhcyBgTmdGb3I8YW55PmAuXG4gKi9cbmZ1bmN0aW9uIHR5cGVQYXJhbWV0ZXJzV2l0aERlZmF1bHRUeXBlcyhwYXJhbXM6IFJlYWRvbmx5QXJyYXk8dHMuVHlwZVBhcmFtZXRlckRlY2xhcmF0aW9uPnxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bmRlZmluZWQpOiB0cy5UeXBlUGFyYW1ldGVyRGVjbGFyYXRpb25bXXx1bmRlZmluZWQge1xuICBpZiAocGFyYW1zID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG5cbiAgcmV0dXJuIHBhcmFtcy5tYXAocGFyYW0gPT4ge1xuICAgIGlmIChwYXJhbS5kZWZhdWx0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiB0cy51cGRhdGVUeXBlUGFyYW1ldGVyRGVjbGFyYXRpb24oXG4gICAgICAgICAgLyogbm9kZSAqLyBwYXJhbSxcbiAgICAgICAgICAvKiBuYW1lICovIHBhcmFtLm5hbWUsXG4gICAgICAgICAgLyogY29uc3RyYWludCAqLyBwYXJhbS5jb25zdHJhaW50LFxuICAgICAgICAgIC8qIGRlZmF1bHRUeXBlICovIHRzLmNyZWF0ZUtleXdvcmRUeXBlTm9kZSh0cy5TeW50YXhLaW5kLkFueUtleXdvcmQpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHBhcmFtO1xuICAgIH1cbiAgfSk7XG59XG4iXX0=
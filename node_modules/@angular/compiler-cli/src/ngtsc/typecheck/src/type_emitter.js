(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define("@angular/compiler-cli/src/ngtsc/typecheck/src/type_emitter", ["require", "exports", "typescript", "@angular/compiler-cli/src/ngtsc/imports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var ts = require("typescript");
    var imports_1 = require("@angular/compiler-cli/src/ngtsc/imports");
    /**
     * Determines whether the provided type can be emitted, which means that it can be safely emitted
     * into a different location.
     *
     * If this function returns true, a `TypeEmitter` should be able to succeed. Vice versa, if this
     * function returns false, then using the `TypeEmitter` should not be attempted as it is known to
     * fail.
     */
    function canEmitType(type, resolver) {
        return canEmitTypeWorker(type);
        function canEmitTypeWorker(type) {
            return visitTypeNode(type, {
                visitTypeReferenceNode: function (type) { return canEmitTypeReference(type); },
                visitArrayTypeNode: function (type) { return canEmitTypeWorker(type.elementType); },
                visitKeywordType: function () { return true; },
                visitOtherType: function () { return false; },
            });
        }
        function canEmitTypeReference(type) {
            var reference = resolver(type);
            // If the type could not be resolved, it can not be emitted.
            if (reference === null) {
                return false;
            }
            // If the type is a reference without a owning module, consider the type not to be eligible for
            // emitting.
            if (reference instanceof imports_1.Reference && !reference.hasOwningModuleGuess) {
                return false;
            }
            // The type can be emitted if either it does not have any type arguments, or all of them can be
            // emitted.
            return type.typeArguments === undefined || type.typeArguments.every(canEmitTypeWorker);
        }
    }
    exports.canEmitType = canEmitType;
    /**
     * Given a `ts.TypeNode`, this class derives an equivalent `ts.TypeNode` that has been emitted into
     * a different context.
     *
     * For example, consider the following code:
     *
     * ```
     * import {NgIterable} from '@angular/core';
     *
     * class NgForOf<T, U extends NgIterable<T>> {}
     * ```
     *
     * Here, the generic type parameters `T` and `U` can be emitted into a different context, as the
     * type reference to `NgIterable` originates from an absolute module import so that it can be
     * emitted anywhere, using that same module import. The process of emitting translates the
     * `NgIterable` type reference to a type reference that is valid in the context in which it is
     * emitted, for example:
     *
     * ```
     * import * as i0 from '@angular/core';
     * import * as i1 from '@angular/common';
     *
     * const _ctor1: <T, U extends i0.NgIterable<T>>(o: Pick<i1.NgForOf<T, U>, 'ngForOf'>):
     * i1.NgForOf<T, U>;
     * ```
     *
     * Notice how the type reference for `NgIterable` has been translated into a qualified name,
     * referring to the namespace import that was created.
     */
    var TypeEmitter = /** @class */ (function () {
        function TypeEmitter(resolver, emitReference) {
            this.resolver = resolver;
            this.emitReference = emitReference;
        }
        TypeEmitter.prototype.emitType = function (type) {
            var _this = this;
            return visitTypeNode(type, {
                visitTypeReferenceNode: function (type) { return _this.emitTypeReference(type); },
                visitArrayTypeNode: function (type) { return ts.updateArrayTypeNode(type, _this.emitType(type.elementType)); },
                visitKeywordType: function (type) { return type; },
                visitOtherType: function () {
                    throw new Error('Unable to emit a complex type');
                },
            });
        };
        TypeEmitter.prototype.emitTypeReference = function (type) {
            var _this = this;
            // Determine the reference that the type corresponds with.
            var reference = this.resolver(type);
            if (reference === null) {
                throw new Error('Unable to emit an unresolved reference');
            }
            // Emit the type arguments, if any.
            var typeArguments = undefined;
            if (type.typeArguments !== undefined) {
                typeArguments = ts.createNodeArray(type.typeArguments.map(function (typeArg) { return _this.emitType(typeArg); }));
            }
            // Emit the type name.
            var typeName = type.typeName;
            if (reference instanceof imports_1.Reference) {
                if (!reference.hasOwningModuleGuess) {
                    throw new Error('A type reference to emit must be imported from an absolute module');
                }
                var emittedType = this.emitReference(reference);
                if (!ts.isTypeReferenceNode(emittedType)) {
                    throw new Error("Expected TypeReferenceNode for emitted reference, got " + ts.SyntaxKind[emittedType.kind]);
                }
                typeName = emittedType.typeName;
            }
            return ts.updateTypeReferenceNode(type, typeName, typeArguments);
        };
        return TypeEmitter;
    }());
    exports.TypeEmitter = TypeEmitter;
    function visitTypeNode(type, visitor) {
        if (ts.isTypeReferenceNode(type)) {
            return visitor.visitTypeReferenceNode(type);
        }
        else if (ts.isArrayTypeNode(type)) {
            return visitor.visitArrayTypeNode(type);
        }
        switch (type.kind) {
            case ts.SyntaxKind.AnyKeyword:
            case ts.SyntaxKind.UnknownKeyword:
            case ts.SyntaxKind.NumberKeyword:
            case ts.SyntaxKind.ObjectKeyword:
            case ts.SyntaxKind.BooleanKeyword:
            case ts.SyntaxKind.StringKeyword:
            case ts.SyntaxKind.UndefinedKeyword:
            case ts.SyntaxKind.NullKeyword:
                return visitor.visitKeywordType(type);
            default:
                return visitor.visitOtherType(type);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZV9lbWl0dGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29tcGlsZXItY2xpL3NyYy9uZ3RzYy90eXBlY2hlY2svc3JjL3R5cGVfZW1pdHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztJQUFBOzs7Ozs7T0FNRztJQUNILCtCQUFpQztJQUNqQyxtRUFBd0M7SUFjeEM7Ozs7Ozs7T0FPRztJQUNILFNBQWdCLFdBQVcsQ0FBQyxJQUFpQixFQUFFLFFBQStCO1FBQzVFLE9BQU8saUJBQWlCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFL0IsU0FBUyxpQkFBaUIsQ0FBQyxJQUFpQjtZQUMxQyxPQUFPLGFBQWEsQ0FBQyxJQUFJLEVBQUU7Z0JBQ3pCLHNCQUFzQixFQUFFLFVBQUEsSUFBSSxJQUFJLE9BQUEsb0JBQW9CLENBQUMsSUFBSSxDQUFDLEVBQTFCLENBQTBCO2dCQUMxRCxrQkFBa0IsRUFBRSxVQUFBLElBQUksSUFBSSxPQUFBLGlCQUFpQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBbkMsQ0FBbUM7Z0JBQy9ELGdCQUFnQixFQUFFLGNBQU0sT0FBQSxJQUFJLEVBQUosQ0FBSTtnQkFDNUIsY0FBYyxFQUFFLGNBQU0sT0FBQSxLQUFLLEVBQUwsQ0FBSzthQUM1QixDQUFDLENBQUM7UUFDTCxDQUFDO1FBRUQsU0FBUyxvQkFBb0IsQ0FBQyxJQUEwQjtZQUN0RCxJQUFNLFNBQVMsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7WUFFakMsNERBQTREO1lBQzVELElBQUksU0FBUyxLQUFLLElBQUksRUFBRTtnQkFDdEIsT0FBTyxLQUFLLENBQUM7YUFDZDtZQUVELCtGQUErRjtZQUMvRixZQUFZO1lBQ1osSUFBSSxTQUFTLFlBQVksbUJBQVMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxvQkFBb0IsRUFBRTtnQkFDckUsT0FBTyxLQUFLLENBQUM7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T0FBTyxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzdDO2FBQU0sSUFBSSxFQUFFLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ25DLE9BQU8sT0FBTyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3pDO1FBRUQsUUFBUSxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ2pCLEtBQUssRUFBRSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUM7WUFDOUIsS0FBSyxFQUFFLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQztZQUNsQyxLQUFLLEVBQUUsQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDO1lBQ2pDLEtBQUssRUFBRSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUM7WUFDakMsS0FBSyxFQUFFLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQztZQUNsQyxLQUFLLEVBQUUsQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDO1lBQ2pDLEtBQUssRUFBRSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQztZQUNwQyxLQUFLLEVBQUUsQ0FBQyxVQUFVLENBQUMsV0FBVztnQkFDNUIsT0FBTyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsSUFBMEIsQ0FBQyxDQUFDO1lBQzlEO2dCQUNFLE9BQU8sT0FBTyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN2QztJQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5pbXBvcnQgKiBhcyB0cyBmcm9tICd0eXBlc2NyaXB0JztcbmltcG9ydCB7UmVmZXJlbmNlfSBmcm9tICcuLi8uLi9pbXBvcnRzJztcblxuLyoqXG4gKiBBIHJlc29sdmVkIHR5cGUgcmVmZXJlbmNlIGNhbiBlaXRoZXIgYmUgYSBgUmVmZXJlbmNlYCwgdGhlIG9yaWdpbmFsIGB0cy5UeXBlUmVmZXJlbmNlTm9kZWAgaXRzZWxmXG4gKiBvciBudWxsIHRvIGluZGljYXRlIHRoZSBubyByZWZlcmVuY2UgY291bGQgYmUgcmVzb2x2ZWQuXG4gKi9cbmV4cG9ydCB0eXBlIFJlc29sdmVkVHlwZVJlZmVyZW5jZSA9IFJlZmVyZW5jZXx0cy5UeXBlUmVmZXJlbmNlTm9kZXxudWxsO1xuXG4vKipcbiAqIEEgdHlwZSByZWZlcmVuY2UgcmVzb2x2ZXIgZnVuY3Rpb24gaXMgcmVzcG9uc2libGUgZm9yIGZpbmRpbmcgdGhlIGRlY2xhcmF0aW9uIG9mIHRoZSB0eXBlXG4gKiByZWZlcmVuY2UgYW5kIHZlcmlmeWluZyB3aGV0aGVyIGl0IGNhbiBiZSBlbWl0dGVkLlxuICovXG5leHBvcnQgdHlwZSBUeXBlUmVmZXJlbmNlUmVzb2x2ZXIgPSAodHlwZTogdHMuVHlwZVJlZmVyZW5jZU5vZGUpID0+IFJlc29sdmVkVHlwZVJlZmVyZW5jZTtcblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIHByb3ZpZGVkIHR5cGUgY2FuIGJlIGVtaXR0ZWQsIHdoaWNoIG1lYW5zIHRoYXQgaXQgY2FuIGJlIHNhZmVseSBlbWl0dGVkXG4gKiBpbnRvIGEgZGlmZmVyZW50IGxvY2F0aW9uLlxuICpcbiAqIElmIHRoaXMgZnVuY3Rpb24gcmV0dXJucyB0cnVlLCBhIGBUeXBlRW1pdHRlcmAgc2hvdWxkIGJlIGFibGUgdG8gc3VjY2VlZC4gVmljZSB2ZXJzYSwgaWYgdGhpc1xuICogZnVuY3Rpb24gcmV0dXJucyBmYWxzZSwgdGhlbiB1c2luZyB0aGUgYFR5cGVFbWl0dGVyYCBzaG91bGQgbm90IGJlIGF0dGVtcHRlZCBhcyBpdCBpcyBrbm93biB0b1xuICogZmFpbC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNhbkVtaXRUeXBlKHR5cGU6IHRzLlR5cGVOb2RlLCByZXNvbHZlcjogVHlwZVJlZmVyZW5jZVJlc29sdmVyKTogYm9vbGVhbiB7XG4gIHJldHVybiBjYW5FbWl0VHlwZVdvcmtlcih0eXBlKTtcblxuICBmdW5jdGlvbiBjYW5FbWl0VHlwZVdvcmtlcih0eXBlOiB0cy5UeXBlTm9kZSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB2aXNpdFR5cGVOb2RlKHR5cGUsIHtcbiAgICAgIHZpc2l0VHlwZVJlZmVyZW5jZU5vZGU6IHR5cGUgPT4gY2FuRW1pdFR5cGVSZWZlcmVuY2UodHlwZSksXG4gICAgICB2aXNpdEFycmF5VHlwZU5vZGU6IHR5cGUgPT4gY2FuRW1pdFR5cGVXb3JrZXIodHlwZS5lbGVtZW50VHlwZSksXG4gICAgICB2aXNpdEtleXdvcmRUeXBlOiAoKSA9PiB0cnVlLFxuICAgICAgdmlzaXRPdGhlclR5cGU6ICgpID0+IGZhbHNlLFxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gY2FuRW1pdFR5cGVSZWZlcmVuY2UodHlwZTogdHMuVHlwZVJlZmVyZW5jZU5vZGUpOiBib29sZWFuIHtcbiAgICBjb25zdCByZWZlcmVuY2UgPSByZXNvbHZlcih0eXBlKTtcblxuICAgIC8vIElmIHRoZSB0eXBlIGNvdWxkIG5vdCBiZSByZXNvbHZlZCwgaXQgY2FuIG5vdCBiZSBlbWl0dGVkLlxuICAgIGlmIChyZWZlcmVuY2UgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgdHlwZSBpcyBhIHJlZmVyZW5jZSB3aXRob3V0IGEgb3duaW5nIG1vZHVsZSwgY29uc2lkZXIgdGhlIHR5cGUgbm90IHRvIGJlIGVsaWdpYmxlIGZvclxuICAgIC8vIGVtaXR0aW5nLlxuICAgIGlmIChyZWZlcmVuY2UgaW5zdGFuY2VvZiBSZWZlcmVuY2UgJiYgIXJlZmVyZW5jZS5oYXNPd25pbmdNb2R1bGVHdWVzcykge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8vIFRoZSB0eXBlIGNhbiBiZSBlbWl0dGVkIGlmIGVpdGhlciBpdCBkb2VzIG5vdCBoYXZlIGFueSB0eXBlIGFyZ3VtZW50cywgb3IgYWxsIG9mIHRoZW0gY2FuIGJlXG4gICAgLy8gZW1pdHRlZC5cbiAgICByZXR1cm4gdHlwZS50eXBlQXJndW1lbnRzID09PSB1bmRlZmluZWQgfHwgdHlwZS50eXBlQXJndW1lbnRzLmV2ZXJ5KGNhbkVtaXRUeXBlV29ya2VyKTtcbiAgfVxufVxuXG4vKipcbiAqIEdpdmVuIGEgYHRzLlR5cGVOb2RlYCwgdGhpcyBjbGFzcyBkZXJpdmVzIGFuIGVxdWl2YWxlbnQgYHRzLlR5cGVOb2RlYCB0aGF0IGhhcyBiZWVuIGVtaXR0ZWQgaW50b1xuICogYSBkaWZmZXJlbnQgY29udGV4dC5cbiAqXG4gKiBGb3IgZXhhbXBsZSwgY29uc2lkZXIgdGhlIGZvbGxvd2luZyBjb2RlOlxuICpcbiAqIGBgYFxuICogaW1wb3J0IHtOZ0l0ZXJhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbiAqXG4gKiBjbGFzcyBOZ0Zvck9mPFQsIFUgZXh0ZW5kcyBOZ0l0ZXJhYmxlPFQ+PiB7fVxuICogYGBgXG4gKlxuICogSGVyZSwgdGhlIGdlbmVyaWMgdHlwZSBwYXJhbWV0ZXJzIGBUYCBhbmQgYFVgIGNhbiBiZSBlbWl0dGVkIGludG8gYSBkaWZmZXJlbnQgY29udGV4dCwgYXMgdGhlXG4gKiB0eXBlIHJlZmVyZW5jZSB0byBgTmdJdGVyYWJsZWAgb3JpZ2luYXRlcyBmcm9tIGFuIGFic29sdXRlIG1vZHVsZSBpbXBvcnQgc28gdGhhdCBpdCBjYW4gYmVcbiAqIGVtaXR0ZWQgYW55d2hlcmUsIHVzaW5nIHRoYXQgc2FtZSBtb2R1bGUgaW1wb3J0LiBUaGUgcHJvY2VzcyBvZiBlbWl0dGluZyB0cmFuc2xhdGVzIHRoZVxuICogYE5nSXRlcmFibGVgIHR5cGUgcmVmZXJlbmNlIHRvIGEgdHlwZSByZWZlcmVuY2UgdGhhdCBpcyB2YWxpZCBpbiB0aGUgY29udGV4dCBpbiB3aGljaCBpdCBpc1xuICogZW1pdHRlZCwgZm9yIGV4YW1wbGU6XG4gKlxuICogYGBgXG4gKiBpbXBvcnQgKiBhcyBpMCBmcm9tICdAYW5ndWxhci9jb3JlJztcbiAqIGltcG9ydCAqIGFzIGkxIGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG4gKlxuICogY29uc3QgX2N0b3IxOiA8VCwgVSBleHRlbmRzIGkwLk5nSXRlcmFibGU8VD4+KG86IFBpY2s8aTEuTmdGb3JPZjxULCBVPiwgJ25nRm9yT2YnPik6XG4gKiBpMS5OZ0Zvck9mPFQsIFU+O1xuICogYGBgXG4gKlxuICogTm90aWNlIGhvdyB0aGUgdHlwZSByZWZlcmVuY2UgZm9yIGBOZ0l0ZXJhYmxlYCBoYXMgYmVlbiB0cmFuc2xhdGVkIGludG8gYSBxdWFsaWZpZWQgbmFtZSxcbiAqIHJlZmVycmluZyB0byB0aGUgbmFtZXNwYWNlIGltcG9ydCB0aGF0IHdhcyBjcmVhdGVkLlxuICovXG5leHBvcnQgY2xhc3MgVHlwZUVtaXR0ZXIge1xuICAvKipcbiAgICogUmVzb2x2ZXIgZnVuY3Rpb24gdGhhdCBjb21wdXRlcyBhIGBSZWZlcmVuY2VgIGNvcnJlc3BvbmRpbmcgd2l0aCBhIGB0cy5UeXBlUmVmZXJlbmNlTm9kZWAuXG4gICAqL1xuICBwcml2YXRlIHJlc29sdmVyOiBUeXBlUmVmZXJlbmNlUmVzb2x2ZXI7XG5cbiAgLyoqXG4gICAqIEdpdmVuIGEgYFJlZmVyZW5jZWAsIHRoaXMgZnVuY3Rpb24gaXMgcmVzcG9uc2libGUgZm9yIHRoZSBhY3R1YWwgZW1pdHRpbmcgd29yay4gSXQgc2hvdWxkXG4gICAqIHByb2R1Y2UgYSBgdHMuVHlwZU5vZGVgIHRoYXQgaXMgdmFsaWQgd2l0aGluIHRoZSBkZXNpcmVkIGNvbnRleHQuXG4gICAqL1xuICBwcml2YXRlIGVtaXRSZWZlcmVuY2U6IChyZWY6IFJlZmVyZW5jZSkgPT4gdHMuVHlwZU5vZGU7XG5cbiAgY29uc3RydWN0b3IocmVzb2x2ZXI6IFR5cGVSZWZlcmVuY2VSZXNvbHZlciwgZW1pdFJlZmVyZW5jZTogKHJlZjogUmVmZXJlbmNlKSA9PiB0cy5UeXBlTm9kZSkge1xuICAgIHRoaXMucmVzb2x2ZXIgPSByZXNvbHZlcjtcbiAgICB0aGlzLmVtaXRSZWZlcmVuY2UgPSBlbWl0UmVmZXJlbmNlO1xuICB9XG5cbiAgZW1pdFR5cGUodHlwZTogdHMuVHlwZU5vZGUpOiB0cy5UeXBlTm9kZSB7XG4gICAgcmV0dXJuIHZpc2l0VHlwZU5vZGUodHlwZSwge1xuICAgICAgdmlzaXRUeXBlUmVmZXJlbmNlTm9kZTogdHlwZSA9PiB0aGlzLmVtaXRUeXBlUmVmZXJlbmNlKHR5cGUpLFxuICAgICAgdmlzaXRBcnJheVR5cGVOb2RlOiB0eXBlID0+IHRzLnVwZGF0ZUFycmF5VHlwZU5vZGUodHlwZSwgdGhpcy5lbWl0VHlwZSh0eXBlLmVsZW1lbnRUeXBlKSksXG4gICAgICB2aXNpdEtleXdvcmRUeXBlOiB0eXBlID0+IHR5cGUsXG4gICAgICB2aXNpdE90aGVyVHlwZTogKCkgPT4ge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VuYWJsZSB0byBlbWl0IGEgY29tcGxleCB0eXBlJyk7XG4gICAgICB9LFxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBlbWl0VHlwZVJlZmVyZW5jZSh0eXBlOiB0cy5UeXBlUmVmZXJlbmNlTm9kZSk6IHRzLlR5cGVOb2RlIHtcbiAgICAvLyBEZXRlcm1pbmUgdGhlIHJlZmVyZW5jZSB0aGF0IHRoZSB0eXBlIGNvcnJlc3BvbmRzIHdpdGguXG4gICAgY29uc3QgcmVmZXJlbmNlID0gdGhpcy5yZXNvbHZlcih0eXBlKTtcbiAgICBpZiAocmVmZXJlbmNlID09PSBudWxsKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VuYWJsZSB0byBlbWl0IGFuIHVucmVzb2x2ZWQgcmVmZXJlbmNlJyk7XG4gICAgfVxuXG4gICAgLy8gRW1pdCB0aGUgdHlwZSBhcmd1bWVudHMsIGlmIGFueS5cbiAgICBsZXQgdHlwZUFyZ3VtZW50czogdHMuTm9kZUFycmF5PHRzLlR5cGVOb2RlPnx1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gICAgaWYgKHR5cGUudHlwZUFyZ3VtZW50cyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0eXBlQXJndW1lbnRzID0gdHMuY3JlYXRlTm9kZUFycmF5KHR5cGUudHlwZUFyZ3VtZW50cy5tYXAodHlwZUFyZyA9PiB0aGlzLmVtaXRUeXBlKHR5cGVBcmcpKSk7XG4gICAgfVxuXG4gICAgLy8gRW1pdCB0aGUgdHlwZSBuYW1lLlxuICAgIGxldCB0eXBlTmFtZSA9IHR5cGUudHlwZU5hbWU7XG4gICAgaWYgKHJlZmVyZW5jZSBpbnN0YW5jZW9mIFJlZmVyZW5jZSkge1xuICAgICAgaWYgKCFyZWZlcmVuY2UuaGFzT3duaW5nTW9kdWxlR3Vlc3MpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdBIHR5cGUgcmVmZXJlbmNlIHRvIGVtaXQgbXVzdCBiZSBpbXBvcnRlZCBmcm9tIGFuIGFic29sdXRlIG1vZHVsZScpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBlbWl0dGVkVHlwZSA9IHRoaXMuZW1pdFJlZmVyZW5jZShyZWZlcmVuY2UpO1xuICAgICAgaWYgKCF0cy5pc1R5cGVSZWZlcmVuY2VOb2RlKGVtaXR0ZWRUeXBlKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEV4cGVjdGVkIFR5cGVSZWZlcmVuY2VOb2RlIGZvciBlbWl0dGVkIHJlZmVyZW5jZSwgZ290ICR7XG4gICAgICAgICAgICB0cy5TeW50YXhLaW5kW2VtaXR0ZWRUeXBlLmtpbmRdfWApO1xuICAgICAgfVxuXG4gICAgICB0eXBlTmFtZSA9IGVtaXR0ZWRUeXBlLnR5cGVOYW1lO1xuICAgIH1cblxuICAgIHJldHVybiB0cy51cGRhdGVUeXBlUmVmZXJlbmNlTm9kZSh0eXBlLCB0eXBlTmFtZSwgdHlwZUFyZ3VtZW50cyk7XG4gIH1cbn1cblxuLyoqXG4gKiBWaXNpdG9yIGludGVyZmFjZSB0aGF0IGFsbG93cyBmb3IgdW5pZmllZCByZWNvZ25pdGlvbiBvZiB0aGUgZGlmZmVyZW50IHR5cGVzIG9mIGB0cy5UeXBlTm9kZWBzLFxuICogc28gdGhhdCBgdmlzaXRUeXBlTm9kZWAgaXMgYSBjZW50cmFsaXplZCBwaWVjZSBvZiByZWNvZ25pdGlvbiBsb2dpYyB0byBiZSB1c2VkIGluIGJvdGhcbiAqIGBjYW5FbWl0VHlwZWAgYW5kIGBUeXBlRW1pdHRlcmAuXG4gKi9cbmludGVyZmFjZSBUeXBlRW1pdHRlclZpc2l0b3I8Uj4ge1xuICB2aXNpdFR5cGVSZWZlcmVuY2VOb2RlKHR5cGU6IHRzLlR5cGVSZWZlcmVuY2VOb2RlKTogUjtcbiAgdmlzaXRBcnJheVR5cGVOb2RlKHR5cGU6IHRzLkFycmF5VHlwZU5vZGUpOiBSO1xuICB2aXNpdEtleXdvcmRUeXBlKHR5cGU6IHRzLktleXdvcmRUeXBlTm9kZSk6IFI7XG4gIHZpc2l0T3RoZXJUeXBlKHR5cGU6IHRzLlR5cGVOb2RlKTogUjtcbn1cblxuZnVuY3Rpb24gdmlzaXRUeXBlTm9kZTxSPih0eXBlOiB0cy5UeXBlTm9kZSwgdmlzaXRvcjogVHlwZUVtaXR0ZXJWaXNpdG9yPFI+KTogUiB7XG4gIGlmICh0cy5pc1R5cGVSZWZlcmVuY2VOb2RlKHR5cGUpKSB7XG4gICAgcmV0dXJuIHZpc2l0b3IudmlzaXRUeXBlUmVmZXJlbmNlTm9kZSh0eXBlKTtcbiAgfSBlbHNlIGlmICh0cy5pc0FycmF5VHlwZU5vZGUodHlwZSkpIHtcbiAgICByZXR1cm4gdmlzaXRvci52aXNpdEFycmF5VHlwZU5vZGUodHlwZSk7XG4gIH1cblxuICBzd2l0Y2ggKHR5cGUua2luZCkge1xuICAgIGNhc2UgdHMuU3ludGF4S2luZC5BbnlLZXl3b3JkOlxuICAgIGNhc2UgdHMuU3ludGF4S2luZC5Vbmtub3duS2V5d29yZDpcbiAgICBjYXNlIHRzLlN5bnRheEtpbmQuTnVtYmVyS2V5d29yZDpcbiAgICBjYXNlIHRzLlN5bnRheEtpbmQuT2JqZWN0S2V5d29yZDpcbiAgICBjYXNlIHRzLlN5bnRheEtpbmQuQm9vbGVhbktleXdvcmQ6XG4gICAgY2FzZSB0cy5TeW50YXhLaW5kLlN0cmluZ0tleXdvcmQ6XG4gICAgY2FzZSB0cy5TeW50YXhLaW5kLlVuZGVmaW5lZEtleXdvcmQ6XG4gICAgY2FzZSB0cy5TeW50YXhLaW5kLk51bGxLZXl3b3JkOlxuICAgICAgcmV0dXJuIHZpc2l0b3IudmlzaXRLZXl3b3JkVHlwZSh0eXBlIGFzIHRzLktleXdvcmRUeXBlTm9kZSk7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiB2aXNpdG9yLnZpc2l0T3RoZXJUeXBlKHR5cGUpO1xuICB9XG59XG4iXX0=
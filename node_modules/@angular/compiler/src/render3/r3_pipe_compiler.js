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
        define("@angular/compiler/src/render3/r3_pipe_compiler", ["require", "exports", "tslib", "@angular/compiler/src/compile_metadata", "@angular/compiler/src/output/output_ast", "@angular/compiler/src/util", "@angular/compiler/src/render3/r3_factory", "@angular/compiler/src/render3/r3_identifiers", "@angular/compiler/src/render3/util"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = require("tslib");
    var compile_metadata_1 = require("@angular/compiler/src/compile_metadata");
    var o = require("@angular/compiler/src/output/output_ast");
    var util_1 = require("@angular/compiler/src/util");
    var r3_factory_1 = require("@angular/compiler/src/render3/r3_factory");
    var r3_identifiers_1 = require("@angular/compiler/src/render3/r3_identifiers");
    var util_2 = require("@angular/compiler/src/render3/util");
    function compilePipeFromMetadata(metadata) {
        var definitionMapValues = [];
        // e.g. `name: 'myPipe'`
        definitionMapValues.push({ key: 'name', value: o.literal(metadata.pipeName), quoted: false });
        // e.g. `type: MyPipe`
        definitionMapValues.push({ key: 'type', value: metadata.type.value, quoted: false });
        // e.g. `pure: true`
        definitionMapValues.push({ key: 'pure', value: o.literal(metadata.pure), quoted: false });
        var expression = o.importExpr(r3_identifiers_1.Identifiers.definePipe).callFn([o.literalMap(definitionMapValues)]);
        var type = new o.ExpressionType(o.importExpr(r3_identifiers_1.Identifiers.PipeDefWithMeta, [
            util_2.typeWithParameters(metadata.type.type, metadata.typeArgumentCount),
            new o.ExpressionType(new o.LiteralExpr(metadata.pipeName)),
        ]));
        return { expression: expression, type: type };
    }
    exports.compilePipeFromMetadata = compilePipeFromMetadata;
    /**
     * Write a pipe definition to the output context.
     */
    function compilePipeFromRender2(outputCtx, pipe, reflector) {
        var name = compile_metadata_1.identifierName(pipe.type);
        if (!name) {
            return util_1.error("Cannot resolve the name of " + pipe.type);
        }
        var type = outputCtx.importExpr(pipe.type.reference);
        var metadata = {
            name: name,
            type: util_2.wrapReference(type),
            internalType: type,
            pipeName: pipe.name,
            typeArgumentCount: 0,
            deps: r3_factory_1.dependenciesFromGlobalMetadata(pipe.type, outputCtx, reflector),
            pure: pipe.pure,
        };
        var res = compilePipeFromMetadata(metadata);
        var factoryRes = r3_factory_1.compileFactoryFunction(tslib_1.__assign(tslib_1.__assign({}, metadata), { injectFn: r3_identifiers_1.Identifiers.directiveInject, target: r3_factory_1.R3FactoryTarget.Pipe }));
        var definitionField = outputCtx.constantPool.propertyNameOf(3 /* Pipe */);
        var ngFactoryDefStatement = new o.ClassStmt(
        /* name */ name, 
        /* parent */ null, 
        /* fields */
        [new o.ClassField(
            /* name */ 'ɵfac', 
            /* type */ o.INFERRED_TYPE, 
            /* modifiers */ [o.StmtModifier.Static], 
            /* initializer */ factoryRes.factory)], 
        /* getters */ [], 
        /* constructorMethod */ new o.ClassMethod(null, [], []), 
        /* methods */ []);
        var pipeDefStatement = new o.ClassStmt(
        /* name */ name, 
        /* parent */ null, 
        /* fields */ [new o.ClassField(
            /* name */ definitionField, 
            /* type */ o.INFERRED_TYPE, 
            /* modifiers */ [o.StmtModifier.Static], 
            /* initializer */ res.expression)], 
        /* getters */ [], 
        /* constructorMethod */ new o.ClassMethod(null, [], []), 
        /* methods */ []);
        outputCtx.statements.push(ngFactoryDefStatement, pipeDefStatement);
    }
    exports.compilePipeFromRender2 = compilePipeFromRender2;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicjNfcGlwZV9jb21waWxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbXBpbGVyL3NyYy9yZW5kZXIzL3IzX3BpcGVfY29tcGlsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HOzs7Ozs7Ozs7Ozs7O0lBRUgsMkVBQXdFO0lBR3hFLDJEQUEwQztJQUMxQyxtREFBNkM7SUFFN0MsdUVBQTJIO0lBQzNILCtFQUFtRDtJQUNuRCwyREFBc0U7SUEyQ3RFLFNBQWdCLHVCQUF1QixDQUFDLFFBQXdCO1FBQzlELElBQU0sbUJBQW1CLEdBQTBELEVBQUUsQ0FBQztRQUV0Rix3QkFBd0I7UUFDeEIsbUJBQW1CLENBQUMsSUFBSSxDQUFDLEVBQUMsR0FBRyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBQyxDQUFDLENBQUM7UUFFNUYsc0JBQXNCO1FBQ3RCLG1CQUFtQixDQUFDLElBQUksQ0FBQyxFQUFDLEdBQUcsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUMsQ0FBQyxDQUFDO1FBRW5GLG9CQUFvQjtRQUNwQixtQkFBbUIsQ0FBQyxJQUFJLENBQUMsRUFBQyxHQUFHLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFDLENBQUMsQ0FBQztRQUV4RixJQUFNLFVBQVUsR0FBRyxDQUFDLENBQUMsVUFBVSxDQUFDLDRCQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsQ0FB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QyxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztRQUN2RCxhQUFhLENBQUEsRUFBRSxDQUFDLENBQUM7UUFFckIsU0FBUyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMscUJBQXFCLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztJQUNyRSxDQUFDO0lBL0NELHdEQStDQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtDb21waWxlUGlwZU1ldGFkYXRhLCBpZGVudGlmaWVyTmFtZX0gZnJvbSAnLi4vY29tcGlsZV9tZXRhZGF0YSc7XG5pbXBvcnQge0NvbXBpbGVSZWZsZWN0b3J9IGZyb20gJy4uL2NvbXBpbGVfcmVmbGVjdG9yJztcbmltcG9ydCB7RGVmaW5pdGlvbktpbmR9IGZyb20gJy4uL2NvbnN0YW50X3Bvb2wnO1xuaW1wb3J0ICogYXMgbyBmcm9tICcuLi9vdXRwdXQvb3V0cHV0X2FzdCc7XG5pbXBvcnQge2Vycm9yLCBPdXRwdXRDb250ZXh0fSBmcm9tICcuLi91dGlsJztcblxuaW1wb3J0IHtjb21waWxlRmFjdG9yeUZ1bmN0aW9uLCBkZXBlbmRlbmNpZXNGcm9tR2xvYmFsTWV0YWRhdGEsIFIzRGVwZW5kZW5jeU1ldGFkYXRhLCBSM0ZhY3RvcnlUYXJnZXR9IGZyb20gJy4vcjNfZmFjdG9yeSc7XG5pbXBvcnQge0lkZW50aWZpZXJzIGFzIFIzfSBmcm9tICcuL3IzX2lkZW50aWZpZXJzJztcbmltcG9ydCB7UjNSZWZlcmVuY2UsIHR5cGVXaXRoUGFyYW1ldGVycywgd3JhcFJlZmVyZW5jZX0gZnJvbSAnLi91dGlsJztcblxuZXhwb3J0IGludGVyZmFjZSBSM1BpcGVNZXRhZGF0YSB7XG4gIC8qKlxuICAgKiBOYW1lIG9mIHRoZSBwaXBlIHR5cGUuXG4gICAqL1xuICBuYW1lOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEFuIGV4cHJlc3Npb24gcmVwcmVzZW50aW5nIGEgcmVmZXJlbmNlIHRvIHRoZSBwaXBlIGl0c2VsZi5cbiAgICovXG4gIHR5cGU6IFIzUmVmZXJlbmNlO1xuXG4gIC8qKlxuICAgKiBBbiBleHByZXNzaW9uIHJlcHJlc2VudGluZyB0aGUgcGlwZSBiZWluZyBjb21waWxlZCwgaW50ZW5kZWQgZm9yIHVzZSB3aXRoaW4gYSBjbGFzcyBkZWZpbml0aW9uXG4gICAqIGl0c2VsZi5cbiAgICpcbiAgICogVGhpcyBjYW4gZGlmZmVyIGZyb20gdGhlIG91dGVyIGB0eXBlYCBpZiB0aGUgY2xhc3MgaXMgYmVpbmcgY29tcGlsZWQgYnkgbmdjYyBhbmQgaXMgaW5zaWRlIGFuXG4gICAqIElJRkUgc3RydWN0dXJlIHRoYXQgdXNlcyBhIGRpZmZlcmVudCBuYW1lIGludGVybmFsbHkuXG4gICAqL1xuICBpbnRlcm5hbFR5cGU6IG8uRXhwcmVzc2lvbjtcblxuICAvKipcbiAgICogTnVtYmVyIG9mIGdlbmVyaWMgdHlwZSBwYXJhbWV0ZXJzIG9mIHRoZSB0eXBlIGl0c2VsZi5cbiAgICovXG4gIHR5cGVBcmd1bWVudENvdW50OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIE5hbWUgb2YgdGhlIHBpcGUuXG4gICAqL1xuICBwaXBlTmFtZTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBEZXBlbmRlbmNpZXMgb2YgdGhlIHBpcGUncyBjb25zdHJ1Y3Rvci5cbiAgICovXG4gIGRlcHM6IFIzRGVwZW5kZW5jeU1ldGFkYXRhW118bnVsbDtcblxuICAvKipcbiAgICogV2hldGhlciB0aGUgcGlwZSBpcyBtYXJrZWQgYXMgcHVyZS5cbiAgICovXG4gIHB1cmU6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21waWxlUGlwZUZyb21NZXRhZGF0YShtZXRhZGF0YTogUjNQaXBlTWV0YWRhdGEpIHtcbiAgY29uc3QgZGVmaW5pdGlvbk1hcFZhbHVlczoge2tleTogc3RyaW5nLCBxdW90ZWQ6IGJvb2xlYW4sIHZhbHVlOiBvLkV4cHJlc3Npb259W10gPSBbXTtcblxuICAvLyBlLmcuIGBuYW1lOiAnbXlQaXBlJ2BcbiAgZGVmaW5pdGlvbk1hcFZhbHVlcy5wdXNoKHtrZXk6ICduYW1lJywgdmFsdWU6IG8ubGl0ZXJhbChtZXRhZGF0YS5waXBlTmFtZSksIHF1b3RlZDogZmFsc2V9KTtcblxuICAvLyBlLmcuIGB0eXBlOiBNeVBpcGVgXG4gIGRlZmluaXRpb25NYXBWYWx1ZXMucHVzaCh7a2V5OiAndHlwZScsIHZhbHVlOiBtZXRhZGF0YS50eXBlLnZhbHVlLCBxdW90ZWQ6IGZhbHNlfSk7XG5cbiAgLy8gZS5nLiBgcHVyZTogdHJ1ZWBcbiAgZGVmaW5pdGlvbk1hcFZhbHVlcy5wdXNoKHtrZXk6ICdwdXJlJywgdmFsdWU6IG8ubGl0ZXJhbChtZXRhZGF0YS5wdXJlKSwgcXVvdGVkOiBmYWxzZX0pO1xuXG4gIGNvbnN0IGV4cHJlc3Npb24gPSBvLmltcG9ydEV4cHIoUjMuZGVmaW5lUGlwZSkuY2FsbEZuKFtvLmxpdGVyYWxNYXAoZGVmaW5pdGlvbk1hcFZhbHVlcyldKTtcbiAgY29uc3QgdHlwZSA9IG5ldyBvLkV4cHJlc3Npb25UeXBlKG8uaW1wb3J0RXhwcihSMy5QaXBlRGVmV2l0aE1ldGEsIFtcbiAgICB0eXBlV2l0aFBhcmFtZXRlcnMobWV0YWRhdGEudHlwZS50eXBlLCBtZXRhZGF0YS50eXBlQXJndW1lbnRDb3VudCksXG4gICAgbmV3IG8uRXhwcmVzc2lvblR5cGUobmV3IG8uTGl0ZXJhbEV4cHIobWV0YWRhdGEucGlwZU5hbWUpKSxcbiAgXSkpO1xuXG4gIHJldHVybiB7ZXhwcmVzc2lvbiwgdHlwZX07XG59XG5cbi8qKlxuICogV3JpdGUgYSBwaXBlIGRlZmluaXRpb24gdG8gdGhlIG91dHB1dCBjb250ZXh0LlxuICovXG5leHBvcnQgZnVuY3Rpb24gY29tcGlsZVBpcGVGcm9tUmVuZGVyMihcbiAgICBvdXRwdXRDdHg6IE91dHB1dENvbnRleHQsIHBpcGU6IENvbXBpbGVQaXBlTWV0YWRhdGEsIHJlZmxlY3RvcjogQ29tcGlsZVJlZmxlY3Rvcikge1xuICBjb25zdCBuYW1lID0gaWRlbnRpZmllck5hbWUocGlwZS50eXBlKTtcblxuICBpZiAoIW5hbWUpIHtcbiAgICByZXR1cm4gZXJyb3IoYENhbm5vdCByZXNvbHZlIHRoZSBuYW1lIG9mICR7cGlwZS50eXBlfWApO1xuICB9XG5cbiAgY29uc3QgdHlwZSA9IG91dHB1dEN0eC5pbXBvcnRFeHByKHBpcGUudHlwZS5yZWZlcmVuY2UpO1xuICBjb25zdCBtZXRhZGF0YTogUjNQaXBlTWV0YWRhdGEgPSB7XG4gICAgbmFtZSxcbiAgICB0eXBlOiB3cmFwUmVmZXJlbmNlKHR5cGUpLFxuICAgIGludGVybmFsVHlwZTogdHlwZSxcbiAgICBwaXBlTmFtZTogcGlwZS5uYW1lLFxuICAgIHR5cGVBcmd1bWVudENvdW50OiAwLFxuICAgIGRlcHM6IGRlcGVuZGVuY2llc0Zyb21HbG9iYWxNZXRhZGF0YShwaXBlLnR5cGUsIG91dHB1dEN0eCwgcmVmbGVjdG9yKSxcbiAgICBwdXJlOiBwaXBlLnB1cmUsXG4gIH07XG4gIGNvbnN0IHJlcyA9IGNvbXBpbGVQaXBlRnJvbU1ldGFkYXRhKG1ldGFkYXRhKTtcbiAgY29uc3QgZmFjdG9yeVJlcyA9IGNvbXBpbGVGYWN0b3J5RnVuY3Rpb24oXG4gICAgICB7Li4ubWV0YWRhdGEsIGluamVjdEZuOiBSMy5kaXJlY3RpdmVJbmplY3QsIHRhcmdldDogUjNGYWN0b3J5VGFyZ2V0LlBpcGV9KTtcbiAgY29uc3QgZGVmaW5pdGlvbkZpZWxkID0gb3V0cHV0Q3R4LmNvbnN0YW50UG9vbC5wcm9wZXJ0eU5hbWVPZihEZWZpbml0aW9uS2luZC5QaXBlKTtcbiAgY29uc3QgbmdGYWN0b3J5RGVmU3RhdGVtZW50ID0gbmV3IG8uQ2xhc3NTdG10KFxuICAgICAgLyogbmFtZSAqLyBuYW1lLFxuICAgICAgLyogcGFyZW50ICovIG51bGwsXG4gICAgICAvKiBmaWVsZHMgKi9cbiAgICAgIFtuZXcgby5DbGFzc0ZpZWxkKFxuICAgICAgICAgIC8qIG5hbWUgKi8gJ8m1ZmFjJyxcbiAgICAgICAgICAvKiB0eXBlICovIG8uSU5GRVJSRURfVFlQRSxcbiAgICAgICAgICAvKiBtb2RpZmllcnMgKi9bby5TdG10TW9kaWZpZXIuU3RhdGljXSxcbiAgICAgICAgICAvKiBpbml0aWFsaXplciAqLyBmYWN0b3J5UmVzLmZhY3RvcnkpXSxcbiAgICAgIC8qIGdldHRlcnMgKi9bXSxcbiAgICAgIC8qIGNvbnN0cnVjdG9yTWV0aG9kICovIG5ldyBvLkNsYXNzTWV0aG9kKG51bGwsIFtdLCBbXSksXG4gICAgICAvKiBtZXRob2RzICovW10pO1xuICBjb25zdCBwaXBlRGVmU3RhdGVtZW50ID0gbmV3IG8uQ2xhc3NTdG10KFxuICAgICAgLyogbmFtZSAqLyBuYW1lLFxuICAgICAgLyogcGFyZW50ICovIG51bGwsXG4gICAgICAvKiBmaWVsZHMgKi9bbmV3IG8uQ2xhc3NGaWVsZChcbiAgICAgICAgICAvKiBuYW1lICovIGRlZmluaXRpb25GaWVsZCxcbiAgICAgICAgICAvKiB0eXBlICovIG8uSU5GRVJSRURfVFlQRSxcbiAgICAgICAgICAvKiBtb2RpZmllcnMgKi9bby5TdG10TW9kaWZpZXIuU3RhdGljXSxcbiAgICAgICAgICAvKiBpbml0aWFsaXplciAqLyByZXMuZXhwcmVzc2lvbildLFxuICAgICAgLyogZ2V0dGVycyAqL1tdLFxuICAgICAgLyogY29uc3RydWN0b3JNZXRob2QgKi8gbmV3IG8uQ2xhc3NNZXRob2QobnVsbCwgW10sIFtdKSxcbiAgICAgIC8qIG1ldGhvZHMgKi9bXSk7XG5cbiAgb3V0cHV0Q3R4LnN0YXRlbWVudHMucHVzaChuZ0ZhY3RvcnlEZWZTdGF0ZW1lbnQsIHBpcGVEZWZTdGF0ZW1lbnQpO1xufVxuIl19
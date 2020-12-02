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
        define("@angular/compiler/src/render3/util", ["require", "exports", "@angular/compiler/src/aot/static_symbol", "@angular/compiler/src/output/output_ast"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var static_symbol_1 = require("@angular/compiler/src/aot/static_symbol");
    var o = require("@angular/compiler/src/output/output_ast");
    /**
     * Convert an object map with `Expression` values into a `LiteralMapExpr`.
     */
    function mapToMapExpression(map) {
        var result = Object.keys(map).map(function (key) { return ({
            key: key,
            // The assertion here is because really TypeScript doesn't allow us to express that if the
            // key is present, it will have a value, but this is true in reality.
            value: map[key],
            quoted: false,
        }); });
        return o.literalMap(result);
    }
    exports.mapToMapExpression = mapToMapExpression;
    /**
     * Convert metadata into an `Expression` in the given `OutputContext`.
     *
     * This operation will handle arrays, references to symbols, or literal `null` or `undefined`.
     */
    function convertMetaToOutput(meta, ctx) {
        if (Array.isArray(meta)) {
            return o.literalArr(meta.map(function (entry) { return convertMetaToOutput(entry, ctx); }));
        }
        if (meta instanceof static_symbol_1.StaticSymbol) {
            return ctx.importExpr(meta);
        }
        if (meta == null) {
            return o.literal(meta);
        }
        throw new Error("Internal error: Unsupported or unknown metadata: " + meta);
    }
    exports.convertMetaToOutput = convertMetaToOutput;
    function typeWithParameters(type, numParams) {
        var params = null;
        if (numParams > 0) {
            params = [];
            for (var i = 0; i < numParams; i++) {
                params.push(o.DYNAMIC_TYPE);
            }
        }
        return o.expressionType(type, null, params);
    }
    exports.typeWithParameters = typeWithParameters;
    var ANIMATE_SYMBOL_PREFIX = '@';
    function prepareSyntheticPropertyName(name) {
        return "" + ANIMATE_SYMBOL_PREFIX + name;
    }
    exports.prepareSyntheticPropertyName = prepareSyntheticPropertyName;
    function prepareSyntheticListenerName(name, phase) {
        return "" + ANIMATE_SYMBOL_PREFIX + name + "." + phase;
    }
    exports.prepareSyntheticListenerName = prepareSyntheticListenerName;
    function isSyntheticPropertyOrListener(name) {
        return name.charAt(0) == ANIMATE_SYMBOL_PREFIX;
    }
    exports.isSyntheticPropertyOrListener = isSyntheticPropertyOrListener;
    function getSyntheticPropertyName(name) {
        // this will strip out listener phase values...
        // @foo.start => @foo
        var i = name.indexOf('.');
        name = i > 0 ? name.substring(0, i) : name;
        if (name.charAt(0) !== ANIMATE_SYMBOL_PREFIX) {
            name = ANIMATE_SYMBOL_PREFIX + name;
        }
        return name;
    }
    exports.getSyntheticPropertyName = getSyntheticPropertyName;
    function prepareSyntheticListenerFunctionName(name, phase) {
        return "animation_" + name + "_" + phase;
    }
    exports.prepareSyntheticListenerFunctionName = prepareSyntheticListenerFunctionName;
    function jitOnlyGuardedExpression(expr) {
        var ngJitMode = new o.ExternalExpr({ name: 'ngJitMode', moduleName: null });
        var jitFlagNotDefined = new o.BinaryOperatorExpr(o.BinaryOperator.Identical, new o.TypeofExpr(ngJitMode), o.literal('undefined'));
        var jitFlagUndefinedOrTrue = new o.BinaryOperatorExpr(o.BinaryOperator.Or, jitFlagNotDefined, ngJitMode, /* type */ undefined, 
        /* sourceSpan */ undefined, true);
        return new o.BinaryOperatorExpr(o.BinaryOperator.And, jitFlagUndefinedOrTrue, expr);
    }
    exports.jitOnlyGuardedExpression = jitOnlyGuardedExpression;
    function wrapReference(value) {
        var wrapped = new o.WrappedNodeExpr(value);
        return { value: wrapped, type: wrapped };
    }
    exports.wrapReference = wrapReference;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbXBpbGVyL3NyYy9yZW5kZXIzL3V0aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HOzs7Ozs7Ozs7Ozs7SUFFSCx5RUFBa0Q7SUFDbEQsMkRBQTBDO0lBRzFDOztPQUVHO0lBQ0gsU0FBZ0Isa0JBQWtCLENBQUMsR0FBNEM7UUFDN0UsSUFBTSxNQUFNLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQy9CLFVBQUEsR0FBRyxJQUFJLE9BQUEsQ0FBQztZQUNOLEdBQUcsS0FBQTtZQUNILDBGQUEwRjtZQUMxRixxRUFBcUU7WUFDckUsS0FBSyxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUU7WUFDaEIsTUFBTSxFQUFFLEtBQUs7U0FDZCxDQUFDLEVBTkssQ0FNTCxDQUFDLENBQUM7UUFDUixPQUFPLENBQUMsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQVZELGdEQVVDO0lBRUQ7Ozs7T0FJRztJQUNILFNBQWdCLG1CQUFtQixDQUFDLElBQVMsRUFBRSxHQUFrQjtRQUMvRCxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDdkIsT0FBTyxDQUFDLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxtQkFBbUIsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLEVBQS9CLENBQStCLENBQUMsQ0FBQyxDQUFDO1NBQ3pFO1FBQ0QsSUFBSSxJQUFJLFlBQVksNEJBQVksRUFBRTtZQUNoQyxPQUFPLEdBQUcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDN0I7UUFDRCxJQUFJLElBQUksSUFBSSxJQUFJLEVBQUU7WUFDaEIsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLElB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UUM7SUFFRCxTQUFnQixhQUFhLENBQUMsS0FBVTtRQUN0QyxJQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDN0MsT0FBTyxFQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBQyxDQUFDO0lBQ3pDLENBQUM7SUFIRCxzQ0FHQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtTdGF0aWNTeW1ib2x9IGZyb20gJy4uL2FvdC9zdGF0aWNfc3ltYm9sJztcbmltcG9ydCAqIGFzIG8gZnJvbSAnLi4vb3V0cHV0L291dHB1dF9hc3QnO1xuaW1wb3J0IHtPdXRwdXRDb250ZXh0fSBmcm9tICcuLi91dGlsJztcblxuLyoqXG4gKiBDb252ZXJ0IGFuIG9iamVjdCBtYXAgd2l0aCBgRXhwcmVzc2lvbmAgdmFsdWVzIGludG8gYSBgTGl0ZXJhbE1hcEV4cHJgLlxuICovXG5leHBvcnQgZnVuY3Rpb24gbWFwVG9NYXBFeHByZXNzaW9uKG1hcDoge1trZXk6IHN0cmluZ106IG8uRXhwcmVzc2lvbnx1bmRlZmluZWR9KTogby5MaXRlcmFsTWFwRXhwciB7XG4gIGNvbnN0IHJlc3VsdCA9IE9iamVjdC5rZXlzKG1hcCkubWFwKFxuICAgICAga2V5ID0+ICh7XG4gICAgICAgIGtleSxcbiAgICAgICAgLy8gVGhlIGFzc2VydGlvbiBoZXJlIGlzIGJlY2F1c2UgcmVhbGx5IFR5cGVTY3JpcHQgZG9lc24ndCBhbGxvdyB1cyB0byBleHByZXNzIHRoYXQgaWYgdGhlXG4gICAgICAgIC8vIGtleSBpcyBwcmVzZW50LCBpdCB3aWxsIGhhdmUgYSB2YWx1ZSwgYnV0IHRoaXMgaXMgdHJ1ZSBpbiByZWFsaXR5LlxuICAgICAgICB2YWx1ZTogbWFwW2tleV0hLFxuICAgICAgICBxdW90ZWQ6IGZhbHNlLFxuICAgICAgfSkpO1xuICByZXR1cm4gby5saXRlcmFsTWFwKHJlc3VsdCk7XG59XG5cbi8qKlxuICogQ29udmVydCBtZXRhZGF0YSBpbnRvIGFuIGBFeHByZXNzaW9uYCBpbiB0aGUgZ2l2ZW4gYE91dHB1dENvbnRleHRgLlxuICpcbiAqIFRoaXMgb3BlcmF0aW9uIHdpbGwgaGFuZGxlIGFycmF5cywgcmVmZXJlbmNlcyB0byBzeW1ib2xzLCBvciBsaXRlcmFsIGBudWxsYCBvciBgdW5kZWZpbmVkYC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnRNZXRhVG9PdXRwdXQobWV0YTogYW55LCBjdHg6IE91dHB1dENvbnRleHQpOiBvLkV4cHJlc3Npb24ge1xuICBpZiAoQXJyYXkuaXNBcnJheShtZXRhKSkge1xuICAgIHJldHVybiBvLmxpdGVyYWxBcnIobWV0YS5tYXAoZW50cnkgPT4gY29udmVydE1ldGFUb091dHB1dChlbnRyeSwgY3R4KSkpO1xuICB9XG4gIGlmIChtZXRhIGluc3RhbmNlb2YgU3RhdGljU3ltYm9sKSB7XG4gICAgcmV0dXJuIGN0eC5pbXBvcnRFeHByKG1ldGEpO1xuICB9XG4gIGlmIChtZXRhID09IG51bGwpIHtcbiAgICByZXR1cm4gby5saXRlcmFsKG1ldGEpO1xuICB9XG5cbiAgdGhyb3cgbmV3IEVycm9yKGBJbnRlcm5hbCBlcnJvcjogVW5zdXBwb3J0ZWQgb3IgdW5rbm93biBtZXRhZGF0YTogJHttZXRhfWApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHlwZVdpdGhQYXJhbWV0ZXJzKHR5cGU6IG8uRXhwcmVzc2lvbiwgbnVtUGFyYW1zOiBudW1iZXIpOiBvLkV4cHJlc3Npb25UeXBlIHtcbiAgbGV0IHBhcmFtczogby5UeXBlW118bnVsbCA9IG51bGw7XG4gIGlmIChudW1QYXJhbXMgPiAwKSB7XG4gICAgcGFyYW1zID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1QYXJhbXM7IGkrKykge1xuICAgICAgcGFyYW1zLnB1c2goby5EWU5BTUlDX1RZUEUpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gby5leHByZXNzaW9uVHlwZSh0eXBlLCBudWxsLCBwYXJhbXMpO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFIzUmVmZXJlbmNlIHtcbiAgdmFsdWU6IG8uRXhwcmVzc2lvbjtcbiAgdHlwZTogby5FeHByZXNzaW9uO1xufVxuXG5jb25zdCBBTklNQVRFX1NZTUJPTF9QUkVGSVggPSAnQCc7XG5leHBvcnQgZnVuY3Rpb24gcHJlcGFyZVN5bnRoZXRpY1Byb3BlcnR5TmFtZShuYW1lOiBzdHJpbmcpIHtcbiAgcmV0dXJuIGAke0FOSU1BVEVfU1lNQk9MX1BSRUZJWH0ke25hbWV9YDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByZXBhcmVTeW50aGV0aWNMaXN0ZW5lck5hbWUobmFtZTogc3RyaW5nLCBwaGFzZTogc3RyaW5nKSB7XG4gIHJldHVybiBgJHtBTklNQVRFX1NZTUJPTF9QUkVGSVh9JHtuYW1lfS4ke3BoYXNlfWA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1N5bnRoZXRpY1Byb3BlcnR5T3JMaXN0ZW5lcihuYW1lOiBzdHJpbmcpIHtcbiAgcmV0dXJuIG5hbWUuY2hhckF0KDApID09IEFOSU1BVEVfU1lNQk9MX1BSRUZJWDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFN5bnRoZXRpY1Byb3BlcnR5TmFtZShuYW1lOiBzdHJpbmcpIHtcbiAgLy8gdGhpcyB3aWxsIHN0cmlwIG91dCBsaXN0ZW5lciBwaGFzZSB2YWx1ZXMuLi5cbiAgLy8gQGZvby5zdGFydCA9PiBAZm9vXG4gIGNvbnN0IGkgPSBuYW1lLmluZGV4T2YoJy4nKTtcbiAgbmFtZSA9IGkgPiAwID8gbmFtZS5zdWJzdHJpbmcoMCwgaSkgOiBuYW1lO1xuICBpZiAobmFtZS5jaGFyQXQoMCkgIT09IEFOSU1BVEVfU1lNQk9MX1BSRUZJWCkge1xuICAgIG5hbWUgPSBBTklNQVRFX1NZTUJPTF9QUkVGSVggKyBuYW1lO1xuICB9XG4gIHJldHVybiBuYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJlcGFyZVN5bnRoZXRpY0xpc3RlbmVyRnVuY3Rpb25OYW1lKG5hbWU6IHN0cmluZywgcGhhc2U6IHN0cmluZykge1xuICByZXR1cm4gYGFuaW1hdGlvbl8ke25hbWV9XyR7cGhhc2V9YDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGppdE9ubHlHdWFyZGVkRXhwcmVzc2lvbihleHByOiBvLkV4cHJlc3Npb24pOiBvLkV4cHJlc3Npb24ge1xuICBjb25zdCBuZ0ppdE1vZGUgPSBuZXcgby5FeHRlcm5hbEV4cHIoe25hbWU6ICduZ0ppdE1vZGUnLCBtb2R1bGVOYW1lOiBudWxsfSk7XG4gIGNvbnN0IGppdEZsYWdOb3REZWZpbmVkID0gbmV3IG8uQmluYXJ5T3BlcmF0b3JFeHByKFxuICAgICAgby5CaW5hcnlPcGVyYXRvci5JZGVudGljYWwsIG5ldyBvLlR5cGVvZkV4cHIobmdKaXRNb2RlKSwgby5saXRlcmFsKCd1bmRlZmluZWQnKSk7XG4gIGNvbnN0IGppdEZsYWdVbmRlZmluZWRPclRydWUgPSBuZXcgby5CaW5hcnlPcGVyYXRvckV4cHIoXG4gICAgICBvLkJpbmFyeU9wZXJhdG9yLk9yLCBqaXRGbGFnTm90RGVmaW5lZCwgbmdKaXRNb2RlLCAvKiB0eXBlICovIHVuZGVmaW5lZCxcbiAgICAgIC8qIHNvdXJjZVNwYW4gKi8gdW5kZWZpbmVkLCB0cnVlKTtcbiAgcmV0dXJuIG5ldyBvLkJpbmFyeU9wZXJhdG9yRXhwcihvLkJpbmFyeU9wZXJhdG9yLkFuZCwgaml0RmxhZ1VuZGVmaW5lZE9yVHJ1ZSwgZXhwcik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB3cmFwUmVmZXJlbmNlKHZhbHVlOiBhbnkpOiBSM1JlZmVyZW5jZSB7XG4gIGNvbnN0IHdyYXBwZWQgPSBuZXcgby5XcmFwcGVkTm9kZUV4cHIodmFsdWUpO1xuICByZXR1cm4ge3ZhbHVlOiB3cmFwcGVkLCB0eXBlOiB3cmFwcGVkfTtcbn0iXX0=
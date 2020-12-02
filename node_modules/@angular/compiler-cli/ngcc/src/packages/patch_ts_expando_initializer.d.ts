/// <amd-module name="@angular/compiler-cli/ngcc/src/packages/patch_ts_expando_initializer" />
/**
 * Consider the following ES5 code that may have been generated for a class:
 *
 * ```
 * var A = (function(){
 *   function A() {}
 *   return A;
 * }());
 * A.staticProp = true;
 * ```
 *
 * Here, TypeScript marks the symbol for "A" as a so-called "expando symbol", which causes
 * "staticProp" to be added as an export of the "A" symbol.
 *
 * In the example above, symbol "A" has been assigned some flags to indicate that it represents a
 * class. Due to this flag, the symbol is considered an expando symbol and as such, "staticProp" is
 * stored in `ts.Symbol.exports`.
 *
 * A problem arises when "A" is not at the top-level, i.e. in UMD bundles. In that case, the symbol
 * does not have the flag that marks the symbol as a class. Therefore, TypeScript inspects "A"'s
 * initializer expression, which is an IIFE in the above example. Unfortunately however, only IIFEs
 * of the form `(function(){})()` qualify as initializer for an "expando symbol"; the slightly
 * different form seen in the example above, `(function(){}())`, does not. This prevents the "A"
 * symbol from being considered an expando symbol, in turn preventing "staticProp" from being stored
 * in `ts.Symbol.exports`.
 *
 * The logic for identifying symbols as "expando symbols" can be found here:
 * https://github.com/microsoft/TypeScript/blob/v3.4.5/src/compiler/binder.ts#L2656-L2685
 *
 * Notice how the `getExpandoInitializer` function is available on the "ts" namespace in the
 * compiled bundle, so we are able to override this function to accommodate for the alternative
 * IIFE notation. The original implementation can be found at:
 * https://github.com/Microsoft/TypeScript/blob/v3.4.5/src/compiler/utilities.ts#L1864-L1887
 *
 * Issue tracked in https://github.com/microsoft/TypeScript/issues/31778
 *
 * @returns the function to pass to `restoreGetExpandoInitializer` to undo the patch, or null if
 * the issue is known to have been fixed.
 */
export declare function patchTsGetExpandoInitializer(): unknown;
export declare function restoreGetExpandoInitializer(originalGetExpandoInitializer: unknown): void;

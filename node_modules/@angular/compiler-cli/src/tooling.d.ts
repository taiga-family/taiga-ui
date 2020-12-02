/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/// <amd-module name="@angular/compiler-cli/src/tooling" />
/**
 * @module
 * @description
 * Tooling support helpers.
 */
/**
 * Known values for global variables in `@angular/core` that Terser should set using
 * https://github.com/terser-js/terser#conditional-compilation
 */
export declare const GLOBAL_DEFS_FOR_TERSER: {
    ngDevMode: boolean;
    ngI18nClosureMode: boolean;
};
export declare const GLOBAL_DEFS_FOR_TERSER_WITH_AOT: {
    ngJitMode: boolean;
    ngDevMode: boolean;
    ngI18nClosureMode: boolean;
};

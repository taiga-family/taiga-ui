/**
 * @fileoverview added by tsickle
 * Generated from: packages/platform-browser/animations/src/module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BROWSER_ANIMATIONS_PROVIDERS, BROWSER_NOOP_ANIMATIONS_PROVIDERS } from './providers';
/**
 * Exports `BrowserModule` with additional [dependency-injection providers](guide/glossary#provider)
 * for use with animations. See [Animations](guide/animations).
 * \@publicApi
 */
export class BrowserAnimationsModule {
}
BrowserAnimationsModule.decorators = [
    { type: NgModule, args: [{
                exports: [BrowserModule],
                providers: BROWSER_ANIMATIONS_PROVIDERS,
            },] }
];
/**
 * A null player that must be imported to allow disabling of animations.
 * \@publicApi
 */
export class NoopAnimationsModule {
}
NoopAnimationsModule.decorators = [
    { type: NgModule, args: [{
                exports: [BrowserModule],
                providers: BROWSER_NOOP_ANIMATIONS_PROVIDERS,
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvcGxhdGZvcm0tYnJvd3Nlci9hbmltYXRpb25zL3NyYy9tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBT0EsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sMkJBQTJCLENBQUM7QUFFeEQsT0FBTyxFQUFDLDRCQUE0QixFQUFFLGlDQUFpQyxFQUFDLE1BQU0sYUFBYSxDQUFDOzs7Ozs7QUFXNUYsTUFBTSxPQUFPLHVCQUF1Qjs7O1lBSm5DLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUUsQ0FBQyxhQUFhLENBQUM7Z0JBQ3hCLFNBQVMsRUFBRSw0QkFBNEI7YUFDeEM7Ozs7OztBQVlELE1BQU0sT0FBTyxvQkFBb0I7OztZQUpoQyxRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFLENBQUMsYUFBYSxDQUFDO2dCQUN4QixTQUFTLEVBQUUsaUNBQWlDO2FBQzdDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Jyb3dzZXJNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuXG5pbXBvcnQge0JST1dTRVJfQU5JTUFUSU9OU19QUk9WSURFUlMsIEJST1dTRVJfTk9PUF9BTklNQVRJT05TX1BST1ZJREVSU30gZnJvbSAnLi9wcm92aWRlcnMnO1xuXG4vKipcbiAqIEV4cG9ydHMgYEJyb3dzZXJNb2R1bGVgIHdpdGggYWRkaXRpb25hbCBbZGVwZW5kZW5jeS1pbmplY3Rpb24gcHJvdmlkZXJzXShndWlkZS9nbG9zc2FyeSNwcm92aWRlcilcbiAqIGZvciB1c2Ugd2l0aCBhbmltYXRpb25zLiBTZWUgW0FuaW1hdGlvbnNdKGd1aWRlL2FuaW1hdGlvbnMpLlxuICogQHB1YmxpY0FwaVxuICovXG5ATmdNb2R1bGUoe1xuICBleHBvcnRzOiBbQnJvd3Nlck1vZHVsZV0sXG4gIHByb3ZpZGVyczogQlJPV1NFUl9BTklNQVRJT05TX1BST1ZJREVSUyxcbn0pXG5leHBvcnQgY2xhc3MgQnJvd3NlckFuaW1hdGlvbnNNb2R1bGUge1xufVxuXG4vKipcbiAqIEEgbnVsbCBwbGF5ZXIgdGhhdCBtdXN0IGJlIGltcG9ydGVkIHRvIGFsbG93IGRpc2FibGluZyBvZiBhbmltYXRpb25zLlxuICogQHB1YmxpY0FwaVxuICovXG5ATmdNb2R1bGUoe1xuICBleHBvcnRzOiBbQnJvd3Nlck1vZHVsZV0sXG4gIHByb3ZpZGVyczogQlJPV1NFUl9OT09QX0FOSU1BVElPTlNfUFJPVklERVJTLFxufSlcbmV4cG9ydCBjbGFzcyBOb29wQW5pbWF0aW9uc01vZHVsZSB7XG59XG4iXX0=
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Patches an elements focus and blur methods to emit events consistently and predictably.
 * This is necessary, because some browsers, like IE11, will call the focus handlers asynchronously,
 * while others won't fire them at all if the browser window is not focused.
 * @docs-private
 */
export declare function patchElementFocus(element: HTMLElement): void;
/** @docs-private */
export declare function triggerFocus(element: HTMLElement): void;
/** @docs-private */
export declare function triggerBlur(element: HTMLElement): void;

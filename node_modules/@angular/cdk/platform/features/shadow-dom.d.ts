/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Checks whether the user's browser support Shadow DOM. */
export declare function _supportsShadowDom(): boolean;
/** Gets the shadow root of an element, if supported and the element is inside the Shadow DOM. */
export declare function _getShadowRoot(element: HTMLElement): Node | null;

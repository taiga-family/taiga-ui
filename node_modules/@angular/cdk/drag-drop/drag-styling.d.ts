/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
declare type Writeable<T> = {
    -readonly [P in keyof T]-?: T[P];
};
/**
 * Extended CSSStyleDeclaration that includes a couple of drag-related
 * properties that aren't in the built-in TS typings.
 */
interface DragCSSStyleDeclaration extends CSSStyleDeclaration {
    webkitUserDrag: string;
    MozUserSelect: string;
}
/**
 * Shallow-extends a stylesheet object with another stylesheet object.
 * @docs-private
 */
export declare function extendStyles(dest: Writeable<CSSStyleDeclaration>, source: Partial<DragCSSStyleDeclaration>): Writeable<CSSStyleDeclaration>;
/**
 * Toggles whether the native drag interactions should be enabled for an element.
 * @param element Element on which to toggle the drag interactions.
 * @param enable Whether the drag interactions should be enabled.
 * @docs-private
 */
export declare function toggleNativeDragInteractions(element: HTMLElement, enable: boolean): void;
export {};

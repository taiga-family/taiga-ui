/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { ModifierKeys } from '@angular/cdk/testing';
/**
 * Utility to dispatch any event on a Node.
 * @docs-private
 */
export declare function dispatchEvent<T extends Event>(node: Node | Window, event: T): T;
/**
 * Shorthand to dispatch a fake event on a specified node.
 * @docs-private
 */
export declare function dispatchFakeEvent(node: Node | Window, type: string, canBubble?: boolean): Event;
/**
 * Shorthand to dispatch a keyboard event with a specified key code.
 * @docs-private
 */
export declare function dispatchKeyboardEvent(node: Node, type: string, keyCode?: number, key?: string, target?: Element, modifiers?: ModifierKeys): KeyboardEvent;
/**
 * Shorthand to dispatch a mouse event on the specified coordinates.
 * @docs-private
 */
export declare function dispatchMouseEvent(node: Node, type: string, clientX?: number, clientY?: number): MouseEvent;
/**
 * Shorthand to dispatch a pointer event on the specified coordinates.
 * @docs-private
 */
export declare function dispatchPointerEvent(node: Node, type: string, clientX?: number, clientY?: number, options?: PointerEventInit): PointerEvent;
/**
 * Shorthand to dispatch a touch event on the specified coordinates.
 * @docs-private
 */
export declare function dispatchTouchEvent(node: Node, type: string, x?: number, y?: number): UIEvent;

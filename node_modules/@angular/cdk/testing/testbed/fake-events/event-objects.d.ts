/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { ModifierKeys } from '@angular/cdk/testing';
/**
 * Creates a browser MouseEvent with the specified options.
 * @docs-private
 */
export declare function createMouseEvent(type: string, clientX?: number, clientY?: number, button?: number): MouseEvent;
/**
 * Creates a browser `PointerEvent` with the specified options. Pointer events
 * by default will appear as if they are the primary pointer of their type.
 * https://www.w3.org/TR/pointerevents2/#dom-pointerevent-isprimary.
 *
 * For example, if pointer events for a multi-touch interaction are created, the non-primary
 * pointer touches would need to be represented by non-primary pointer events.
 *
 * @docs-private
 */
export declare function createPointerEvent(type: string, clientX?: number, clientY?: number, options?: PointerEventInit): PointerEvent;
/**
 * Creates a browser TouchEvent with the specified pointer coordinates.
 * @docs-private
 */
export declare function createTouchEvent(type: string, pageX?: number, pageY?: number): UIEvent;
/**
 * Dispatches a keydown event from an element.
 * @docs-private
 */
export declare function createKeyboardEvent(type: string, keyCode?: number, key?: string, target?: Element, modifiers?: ModifierKeys): any;
/**
 * Creates a fake event object with any desired event type.
 * @docs-private
 */
export declare function createFakeEvent(type: string, canBubble?: boolean, cancelable?: boolean): Event;

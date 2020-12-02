/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { ModifierKeys } from '@angular/cdk/testing';
/**
 * Checks whether the given Element is a text input element.
 * @docs-private
 */
export declare function isTextInput(element: Element): element is HTMLInputElement | HTMLTextAreaElement;
/**
 * Focuses an input, sets its value and dispatches
 * the `input` event, simulating the user typing.
 * @param element Element onto which to set the value.
 * @param keys The keys to send to the element.
 * @docs-private
 */
export declare function typeInElement(element: HTMLElement, ...keys: (string | {
    keyCode?: number;
    key?: string;
})[]): void;
/**
 * Focuses an input, sets its value and dispatches
 * the `input` event, simulating the user typing.
 * @param element Element onto which to set the value.
 * @param modifiers Modifier keys that are held while typing.
 * @param keys The keys to send to the element.
 * @docs-private
 */
export declare function typeInElement(element: HTMLElement, modifiers: ModifierKeys, ...keys: (string | {
    keyCode?: number;
    key?: string;
})[]): void;
/**
 * Clears the text in an input or textarea element.
 * @docs-private
 */
export declare function clearElement(element: HTMLInputElement | HTMLTextAreaElement): void;

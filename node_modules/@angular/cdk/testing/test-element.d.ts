/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { ElementDimensions } from './element-dimensions';
/** Modifier keys that may be held while typing. */
export interface ModifierKeys {
    control?: boolean;
    alt?: boolean;
    shift?: boolean;
    meta?: boolean;
}
/** An enum of non-text keys that can be used with the `sendKeys` method. */
export declare enum TestKey {
    BACKSPACE = 0,
    TAB = 1,
    ENTER = 2,
    SHIFT = 3,
    CONTROL = 4,
    ALT = 5,
    ESCAPE = 6,
    PAGE_UP = 7,
    PAGE_DOWN = 8,
    END = 9,
    HOME = 10,
    LEFT_ARROW = 11,
    UP_ARROW = 12,
    RIGHT_ARROW = 13,
    DOWN_ARROW = 14,
    INSERT = 15,
    DELETE = 16,
    F1 = 17,
    F2 = 18,
    F3 = 19,
    F4 = 20,
    F5 = 21,
    F6 = 22,
    F7 = 23,
    F8 = 24,
    F9 = 25,
    F10 = 26,
    F11 = 27,
    F12 = 28,
    META = 29
}
/**
 * This acts as a common interface for DOM elements across both unit and e2e tests. It is the
 * interface through which the ComponentHarness interacts with the component's DOM.
 */
export interface TestElement {
    /** Blur the element. */
    blur(): Promise<void>;
    /** Clear the element's input (for input and textarea elements only). */
    clear(): Promise<void>;
    /** Click the element at the element's center. */
    click(): Promise<void>;
    /**
     * Click the element at the specified coordinates relative to the top-left of the element.
     * @param relativeX Coordinate within the element, along the X-axis at which to click.
     * @param relativeY Coordinate within the element, along the Y-axis at which to click.
     */
    click(relativeX: number, relativeY: number): Promise<void>;
    /** Focus the element. */
    focus(): Promise<void>;
    /** Get the computed value of the given CSS property for the element. */
    getCssValue(property: string): Promise<string>;
    /** Hovers the mouse over the element. */
    hover(): Promise<void>;
    /**
     * Sends the given string to the input as a series of key presses. Also fires input events
     * and attempts to add the string to the Element's value.
     */
    sendKeys(...keys: (string | TestKey)[]): Promise<void>;
    /**
     * Sends the given string to the input as a series of key presses. Also fires input events
     * and attempts to add the string to the Element's value.
     */
    sendKeys(modifiers: ModifierKeys, ...keys: (string | TestKey)[]): Promise<void>;
    /** Gets the text from the element. */
    text(): Promise<string>;
    /** Gets the value for the given attribute from the element. */
    getAttribute(name: string): Promise<string | null>;
    /** Checks whether the element has the given class. */
    hasClass(name: string): Promise<boolean>;
    /** Gets the dimensions of the element. */
    getDimensions(): Promise<ElementDimensions>;
    /** Gets the value of a property of an element. */
    getProperty(name: string): Promise<any>;
    /** Checks whether this element matches the given selector. */
    matchesSelector(selector: string): Promise<boolean>;
    /** Checks whether the element is focused. */
    isFocused(): Promise<boolean>;
}

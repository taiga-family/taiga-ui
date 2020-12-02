/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { ElementDimensions, ModifierKeys, TestElement, TestKey } from '@angular/cdk/testing';
import { ElementFinder } from 'protractor';
/** A `TestElement` implementation for Protractor. */
export declare class ProtractorElement implements TestElement {
    readonly element: ElementFinder;
    constructor(element: ElementFinder);
    blur(): Promise<void>;
    clear(): Promise<void>;
    click(...args: number[]): Promise<void>;
    focus(): Promise<void>;
    getCssValue(property: string): Promise<string>;
    hover(): Promise<void>;
    sendKeys(...keys: (string | TestKey)[]): Promise<void>;
    sendKeys(modifiers: ModifierKeys, ...keys: (string | TestKey)[]): Promise<void>;
    text(): Promise<string>;
    getAttribute(name: string): Promise<string | null>;
    hasClass(name: string): Promise<boolean>;
    getDimensions(): Promise<ElementDimensions>;
    getProperty(name: string): Promise<any>;
    matchesSelector(selector: string): Promise<boolean>;
    isFocused(): Promise<boolean>;
}

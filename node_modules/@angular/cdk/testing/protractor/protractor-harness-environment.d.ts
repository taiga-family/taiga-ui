/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { HarnessEnvironment, HarnessLoader, TestElement } from '@angular/cdk/testing';
import { ElementArrayFinder, ElementFinder } from 'protractor';
/** Options to configure the environment. */
export interface ProtractorHarnessEnvironmentOptions {
    /** The query function used to find DOM elements. */
    queryFn: (selector: string, root: ElementFinder) => ElementArrayFinder;
}
/** A `HarnessEnvironment` implementation for Protractor. */
export declare class ProtractorHarnessEnvironment extends HarnessEnvironment<ElementFinder> {
    /** The options for this environment. */
    private _options;
    protected constructor(rawRootElement: ElementFinder, options?: ProtractorHarnessEnvironmentOptions);
    /** Creates a `HarnessLoader` rooted at the document root. */
    static loader(options?: ProtractorHarnessEnvironmentOptions): HarnessLoader;
    forceStabilize(): Promise<void>;
    waitForTasksOutsideAngular(): Promise<void>;
    protected getDocumentRoot(): ElementFinder;
    protected createTestElement(element: ElementFinder): TestElement;
    protected createEnvironment(element: ElementFinder): HarnessEnvironment<ElementFinder>;
    protected getAllRawElements(selector: string): Promise<ElementFinder[]>;
}

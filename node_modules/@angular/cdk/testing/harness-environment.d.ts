/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { AsyncFactoryFn, ComponentHarness, ComponentHarnessConstructor, HarnessLoader, HarnessQuery, LocatorFactory, LocatorFnResult } from './component-harness';
import { TestElement } from './test-element';
/**
 * Base harness environment class that can be extended to allow `ComponentHarness`es to be used in
 * different test environments (e.g. testbed, protractor, etc.). This class implements the
 * functionality of both a `HarnessLoader` and `LocatorFactory`. This class is generic on the raw
 * element type, `E`, used by the particular test environment.
 */
export declare abstract class HarnessEnvironment<E> implements HarnessLoader, LocatorFactory {
    protected rawRootElement: E;
    rootElement: TestElement;
    protected constructor(rawRootElement: E);
    documentRootLocatorFactory(): LocatorFactory;
    locatorFor<T extends (HarnessQuery<any> | string)[]>(...queries: T): AsyncFactoryFn<LocatorFnResult<T>>;
    locatorForOptional<T extends (HarnessQuery<any> | string)[]>(...queries: T): AsyncFactoryFn<LocatorFnResult<T> | null>;
    locatorForAll<T extends (HarnessQuery<any> | string)[]>(...queries: T): AsyncFactoryFn<LocatorFnResult<T>[]>;
    harnessLoaderFor(selector: string): Promise<HarnessLoader>;
    harnessLoaderForOptional(selector: string): Promise<HarnessLoader | null>;
    harnessLoaderForAll(selector: string): Promise<HarnessLoader[]>;
    getHarness<T extends ComponentHarness>(query: HarnessQuery<T>): Promise<T>;
    getAllHarnesses<T extends ComponentHarness>(query: HarnessQuery<T>): Promise<T[]>;
    getChildLoader(selector: string): Promise<HarnessLoader>;
    getAllChildLoaders(selector: string): Promise<HarnessLoader[]>;
    /** Creates a `ComponentHarness` for the given harness type with the given raw host element. */
    protected createComponentHarness<T extends ComponentHarness>(harnessType: ComponentHarnessConstructor<T>, element: E): T;
    abstract forceStabilize(): Promise<void>;
    abstract waitForTasksOutsideAngular(): Promise<void>;
    /** Gets the root element for the document. */
    protected abstract getDocumentRoot(): E;
    /** Creates a `TestElement` from a raw element. */
    protected abstract createTestElement(element: E): TestElement;
    /** Creates a `HarnessLoader` rooted at the given raw element. */
    protected abstract createEnvironment(element: E): HarnessEnvironment<E>;
    /**
     * Gets a list of all elements matching the given selector under this environment's root element.
     */
    protected abstract getAllRawElements(selector: string): Promise<E[]>;
    /**
     * Matches the given raw elements with the given list of element and harness queries to produce a
     * list of matched harnesses and test elements.
     */
    private _getAllHarnessesAndTestElements;
    /**
     * Check whether the given query matches the given element, if it does return the matched
     * `TestElement` or `ComponentHarness`, if it does not, return null. In cases where the caller
     * knows for sure that the query matches the element's selector, `skipSelectorCheck` can be used
     * to skip verification and optimize performance.
     */
    private _getQueryResultForElement;
}

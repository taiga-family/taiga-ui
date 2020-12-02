/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { ComponentHarness, ComponentHarnessConstructor, HarnessEnvironment, HarnessLoader, TestElement } from '@angular/cdk/testing';
import { ComponentFixture } from '@angular/core/testing';
/** Options to configure the environment. */
export interface TestbedHarnessEnvironmentOptions {
    /** The query function used to find DOM elements. */
    queryFn: (selector: string, root: Element) => Iterable<Element> | ArrayLike<Element>;
}
/** A `HarnessEnvironment` implementation for Angular's Testbed. */
export declare class TestbedHarnessEnvironment extends HarnessEnvironment<Element> {
    private _fixture;
    /** Whether the environment has been destroyed. */
    private _destroyed;
    /** Observable that emits whenever the test task state changes. */
    private _taskState;
    /** The options for this environment. */
    private _options;
    protected constructor(rawRootElement: Element, _fixture: ComponentFixture<unknown>, options?: TestbedHarnessEnvironmentOptions);
    /** Creates a `HarnessLoader` rooted at the given fixture's root element. */
    static loader(fixture: ComponentFixture<unknown>, options?: TestbedHarnessEnvironmentOptions): HarnessLoader;
    /**
     * Creates a `HarnessLoader` at the document root. This can be used if harnesses are
     * located outside of a fixture (e.g. overlays appended to the document body).
     */
    static documentRootLoader(fixture: ComponentFixture<unknown>, options?: TestbedHarnessEnvironmentOptions): HarnessLoader;
    /**
     * Creates an instance of the given harness type, using the fixture's root element as the
     * harness's host element. This method should be used when creating a harness for the root element
     * of a fixture, as components do not have the correct selector when they are created as the root
     * of the fixture.
     */
    static harnessForFixture<T extends ComponentHarness>(fixture: ComponentFixture<unknown>, harnessType: ComponentHarnessConstructor<T>, options?: TestbedHarnessEnvironmentOptions): Promise<T>;
    forceStabilize(): Promise<void>;
    waitForTasksOutsideAngular(): Promise<void>;
    protected getDocumentRoot(): Element;
    protected createTestElement(element: Element): TestElement;
    protected createEnvironment(element: Element): HarnessEnvironment<Element>;
    protected getAllRawElements(selector: string): Promise<Element[]>;
}

import { Type } from '@angular/core';
import { ComponentFixture } from '@angular/core/testing';
/**
 * Reconfigures current test suit to prevent angular components re-compilation after every test run.
 * Forces angular test bed to re-create zone and all injectable services by directly
 * setting _instantiated variable to false after every test run.
 * Cleanups all the changes and reverts test bed configuration after suite has finished.
 *
 * @param configureAction an optional delegate which can be used to configure test bed for the current test suite
 * directly in the configureTestSuite call (you don't need extra BeforeAll in this case)
 */
export declare const configureTestSuite: (configureAction?: (() => void) | undefined) => void;
/**
 * A wrapper class around ComponentFixture, which provides useful accessros:
 * component - to access component instance of current the fixture
 * element - to access underlying native element of the current component
 * detectChanges - to run change detections using current fixture
 * resolve - to resolve a type using current fixture's injector
 */
export declare class TestCtx<T> {
    fixture: ComponentFixture<T>;
    constructor(fixture: ComponentFixture<T>);
    readonly component: T;
    readonly element: HTMLElement;
    detectChanges(): void;
    resolve(component: Type<any>): any;
}
/**
 * Creates TestCtx instance for the Angular Component which is not initialized yet (no ngOnInit called)
 * Use case: you can override Component's providers before hooks are called.
 *
 * @param component - type of component to create instance of
 * **/
export declare const createTestContext: <T>(component: Type<T>) => TestCtx<T>;
/**Same as @function createTestContext, but waits till fixture becomes stable */
export declare const createStableTestContext: <T>(component: Type<T>) => Promise<TestCtx<T>>;

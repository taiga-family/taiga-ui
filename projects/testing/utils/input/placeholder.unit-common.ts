import type {DebugElement} from '@angular/core';
import type {ComponentFixture} from '@angular/core/testing';
import type {FormControl} from '@angular/forms';

import type {TuiPageObject} from '../page-object';

interface TestParams {
    pageObject: TuiPageObject<unknown>;
    fixture: ComponentFixture<unknown>;
    testComponent: TestComponent;
    prefix: string;
}

interface TestComponent {
    control?: FormControl;
    value?: unknown;
    labelOutside: boolean;
    size: 's' | 'm' | 'l';
}

export function tuiTestPlaceholder(
    context: TestParams,
    setValue: unknown = `value`,
    clearValue: unknown = ``,
): void {
    let pageObject: TuiPageObject<unknown>;
    let fixture: ComponentFixture<unknown>;
    let testComponent: TestComponent;

    describe(`Placeholder`, () => {
        beforeEach(() => {
            pageObject = context.pageObject;
            fixture = context.fixture;
            testComponent = context.testComponent;

            fixture.detectChanges();
        });

        describe(`in size S`, () => {
            beforeEach(() => {
                testComponent.size = `s`;
                fixture.detectChanges();
            });

            it(`if no value, then shown`, () => {
                updateValue(clearValue);
                fixture.detectChanges();

                expect(getPlaceholder()).not.toBeNull();
            });

            it(`if specified, not shown`, () => {
                updateValue(setValue);
                fixture.detectChanges();

                expect(getPlaceholder()).toBeNull();
            });
        });

        describe(`in size M`, () => {
            beforeEach(() => {
                testComponent.size = `m`;
                fixture.detectChanges();
            });

            it(`if no value, then shown`, () => {
                updateValue(clearValue);
                fixture.detectChanges();

                expect(getPlaceholder()).not.toBeNull();
            });

            it(`if a value is given, then`, () => {
                updateValue(setValue);
                testComponent.labelOutside = false;
                fixture.detectChanges();

                expect(getPlaceholder()).not.toBeNull();
            });

            it(`if value is given but label is outside, then not shown`, () => {
                updateValue(setValue);
                testComponent.labelOutside = true;
                fixture.detectChanges();

                expect(getPlaceholder()).toBeNull();
            });
        });

        describe(`in size L`, () => {
            beforeEach(() => {
                testComponent.size = `l`;
                fixture.detectChanges();
            });

            it(`if no value, then shown`, () => {
                updateValue(clearValue);
                fixture.detectChanges();

                expect(getPlaceholder()).not.toBeNull();
            });

            it(`if a value is given, then`, () => {
                updateValue(setValue);
                testComponent.labelOutside = false;
                fixture.detectChanges();

                expect(getPlaceholder()).not.toBeNull();
            });

            it(`if value is given but label is outside, then not shown`, () => {
                updateValue(setValue);
                testComponent.labelOutside = true;
                fixture.detectChanges();

                expect(getPlaceholder()).toBeNull();
            });
        });
    });

    function updateValue(value: unknown): void {
        if (testComponent.control) {
            testComponent.control.setValue(value);
        } else {
            testComponent.value = value;
        }
    }

    function getPlaceholder(): DebugElement | null {
        return pageObject.getByAutomationId(`${context.prefix}placeholder`);
    }
}

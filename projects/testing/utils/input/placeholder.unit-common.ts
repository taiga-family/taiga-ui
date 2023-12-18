import {DebugElement} from '@angular/core';
import {ComponentFixture} from '@angular/core/testing';
import {UntypedFormControl} from '@angular/forms';

import {TuiPageObject} from '../page-object';

interface TestParams {
    fixture: ComponentFixture<unknown>;
    pageObject: TuiPageObject<unknown>;
    prefix: string;
    testComponent: TestComponent;
}

interface TestComponent {
    control?: UntypedFormControl;
    labelOutside: boolean;
    size: 'l' | 'm' | 's';
    value?: unknown;
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

            fixture.autoDetectChanges();
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

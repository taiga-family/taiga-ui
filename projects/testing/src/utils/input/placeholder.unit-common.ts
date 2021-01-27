import {DebugElement} from '@angular/core';
import {ComponentFixture} from '@angular/core/testing';
import {FormControl} from '@angular/forms';
import {PageObject} from '../page-object';

interface TestParams {
    pageObject: PageObject<any>;
    fixture: ComponentFixture<any>;
    testComponent: TestComponent;
    prefix: string;
}

interface TestComponent {
    control?: FormControl;
    value?: any;
    labelOutside: boolean;
    size: any;
}

export function testPlaceholder(
    context: TestParams,
    setValue: any = 'value',
    clearValue: any = null,
) {
    let pageObject: PageObject<any>;
    let fixture: ComponentFixture<any>;
    let testComponent: TestComponent;

    describe('Placeholder', () => {
        beforeEach(() => {
            pageObject = context.pageObject;
            fixture = context.fixture;
            testComponent = context.testComponent;

            fixture.detectChanges();
        });

        describe('in size S', () => {
            beforeEach(() => {
                testComponent.size = 's';
                fixture.detectChanges();
            });

            it('if no value, then shown', () => {
                updateValue(clearValue);
                fixture.detectChanges();

                expect(getPlaceholder()).not.toBeNull();
            });

            it('if specified, not shown', () => {
                updateValue(setValue);
                fixture.detectChanges();

                expect(getPlaceholder()).toBeNull();
            });
        });

        describe('in size M', () => {
            beforeEach(() => {
                testComponent.size = 'm';
                fixture.detectChanges();
            });

            it('if no value, then shown', () => {
                updateValue(clearValue);
                fixture.detectChanges();

                expect(getPlaceholder()).not.toBeNull();
            });

            it('if a value is given, then', () => {
                updateValue(setValue);
                testComponent.labelOutside = false;
                fixture.detectChanges();

                expect(getPlaceholder()).not.toBeNull();
            });

            it('if value is given but label is outside, then not shown', () => {
                updateValue(setValue);
                testComponent.labelOutside = true;
                fixture.detectChanges();

                expect(getPlaceholder()).toBeNull();
            });
        });

        describe('in size L', () => {
            beforeEach(() => {
                testComponent.size = 'l';
                fixture.detectChanges();
            });

            it('if no value, then shown', () => {
                updateValue(clearValue);
                fixture.detectChanges();

                expect(getPlaceholder()).not.toBeNull();
            });

            it('if a value is given, then', () => {
                updateValue(setValue);
                testComponent.labelOutside = false;
                fixture.detectChanges();

                expect(getPlaceholder()).not.toBeNull();
            });

            it('if value is given but label is outside, then not shown', () => {
                updateValue(setValue);
                testComponent.labelOutside = true;
                fixture.detectChanges();

                expect(getPlaceholder()).toBeNull();
            });
        });
    });

    function updateValue(value: any) {
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

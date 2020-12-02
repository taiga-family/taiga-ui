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

        describe('в размере S', () => {
            beforeEach(() => {
                testComponent.size = 's';
                fixture.detectChanges();
            });

            it('если значения нет, то показан', () => {
                updateValue(clearValue);
                fixture.detectChanges();

                expect(getPlaceholder()).not.toBeNull();
            });

            it('если значение задано, то не показан', () => {
                updateValue(setValue);
                fixture.detectChanges();

                expect(getPlaceholder()).toBeNull();
            });
        });

        describe('в размере M', () => {
            beforeEach(() => {
                testComponent.size = 'm';
                fixture.detectChanges();
            });

            it('если значения нет, то показан', () => {
                updateValue(clearValue);
                fixture.detectChanges();

                expect(getPlaceholder()).not.toBeNull();
            });

            it('если значение задано, то показан', () => {
                updateValue(setValue);
                testComponent.labelOutside = false;
                fixture.detectChanges();

                expect(getPlaceholder()).not.toBeNull();
            });

            it('если значение задано, но лейбл снаружи, то не показан', () => {
                updateValue(setValue);
                testComponent.labelOutside = true;
                fixture.detectChanges();

                expect(getPlaceholder()).toBeNull();
            });
        });

        describe('в размере L', () => {
            beforeEach(() => {
                testComponent.size = 'l';
                fixture.detectChanges();
            });

            it('если значения нет, то показан', () => {
                updateValue(clearValue);
                fixture.detectChanges();

                expect(getPlaceholder()).not.toBeNull();
            });

            it('если значение задано, то показан', () => {
                updateValue(setValue);
                testComponent.labelOutside = false;
                fixture.detectChanges();

                expect(getPlaceholder()).not.toBeNull();
            });

            it('если значение задано, но лейбл снаружи, то не показан', () => {
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

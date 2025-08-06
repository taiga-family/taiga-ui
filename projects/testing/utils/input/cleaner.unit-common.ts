/// <reference types="jest" />

import {type DebugElement} from '@angular/core';
import {type ComponentFixture} from '@angular/core/testing';
import {type FormControl} from '@angular/forms';

import {type TuiNativeInputPO} from '../native-input.page-object';
import {type TuiPageObject} from '../page-object';

interface TestParams {
    fixture: ComponentFixture<unknown>;
    inputPO: TuiNativeInputPO;
    pageObject: TuiPageObject<unknown>;
    prefix: string;
    testComponent: Test;
}

interface Test {
    cleaner: boolean;
    control?: FormControl;
    disabled?: boolean;
    readOnly: boolean;
    value?: unknown;
}

export function tuiTestCleaner(
    context: TestParams,
    setValue: any = 'value',
    clearValue: any = null,
): void {
    let pageObject: TuiPageObject<unknown>;
    let fixture: ComponentFixture<unknown>;
    let testComponent: Test;
    let inputPO: TuiNativeInputPO;

    describe('Cross for field cleaning', () => {
        beforeEach(() => {
            pageObject = context.pageObject;
            fixture = context.fixture;
            testComponent = context.testComponent;
            inputPO = context.inputPO;

            fixture.autoDetectChanges();
        });

        describe('Cross included', () => {
            beforeEach(() => {
                testComponent.cleaner = true;
            });

            it('If no value is specified, the cross is not shown', () => {
                updateValue(clearValue);

                fixture.detectChanges();

                expect(getCleaner()).toBeNull();
            });

            it('If the field is readonly, the cross is not shown', () => {
                updateValue(setValue);

                testComponent.readOnly = true;
                fixture.detectChanges();

                expect(getCleaner()).toBeNull();
            });

            it('If the field is disabled, the cross is not shown', () => {
                updateValue(setValue);

                if (testComponent.control) {
                    testComponent.control.disable();
                }

                testComponent.disabled = true;
                fixture.detectChanges();

                expect(getCleaner()).toBeNull();
            });

            it('If a value is specified, a cross is shown', () => {
                updateValue(setValue);

                fixture.detectChanges();

                expect(getCleaner()).not.toBeNull();
            });

            it('When you click on the cross, the field value is cleared', () => {
                updateValue(setValue);

                fixture.detectChanges();

                getCleaner()!.nativeElement.click();
                fixture.detectChanges();

                expect(inputPO.value).toBe('');

                if (testComponent.control !== undefined) {
                    expect(testComponent.control.value).toEqual(clearValue);
                }

                if (testComponent.value !== undefined) {
                    expect(testComponent.value).toEqual(clearValue);
                }
            });
        });

        describe('Cross disabled', () => {
            it('The value is set, the cross is not shown', () => {
                updateValue(setValue);

                testComponent.cleaner = false;
                fixture.detectChanges();

                expect(getCleaner()).toBeNull();
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

    function getCleaner(): DebugElement | null {
        return pageObject.getByAutomationId(`${context.prefix}cleaner`);
    }
}

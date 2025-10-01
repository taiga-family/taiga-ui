/// <reference types="@types/jest" />
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
    control: FormControl;
}

export function tuiTestFiller(
    context: TestParams,
    setValue: unknown = 'value',
    clearValue: unknown = null,
): void {
    let pageObject: TuiPageObject<unknown>;
    let fixture: ComponentFixture<unknown>;
    let testComponent: Test;
    let inputPO: TuiNativeInputPO;

    describe('Filler (mask)', () => {
        beforeEach(() => {
            pageObject = context.pageObject;
            fixture = context.fixture;
            testComponent = context.testComponent;
            inputPO = context.inputPO;

            fixture.detectChanges();
        });

        describe('if there is no value in the field', () => {
            beforeEach(() => {
                testComponent.control.setValue(clearValue);
                fixture.detectChanges();
            });

            it('not visible', () => {
                expect(getFiller()).toBeNull();
            });

            it('when focusing appears', async () => {
                inputPO.focus();
                fixture.detectChanges();
                await fixture.whenStable();
                expect(getFiller()).not.toBeNull();
            });
        });

        describe('if the field has a value', () => {
            beforeEach(() => {
                testComponent.control.setValue(setValue);
                fixture.detectChanges();
            });

            it('not visible', () => {
                expect(getFiller()).toBeNull();
            });

            it('also not visible when focusing', () => {
                inputPO.nativeElement?.focus();
                fixture.detectChanges();

                expect(getFiller()).toBeNull();
            });
        });
    });

    function getFiller(): DebugElement | null {
        return pageObject.getByAutomationId(`${context.prefix}filler`);
    }
}

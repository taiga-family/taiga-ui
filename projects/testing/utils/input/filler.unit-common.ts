import {DebugElement} from '@angular/core';
import {ComponentFixture} from '@angular/core/testing';
import {FormControl} from '@angular/forms';

import {TuiNativeInputPO} from '../native-input.page-object';
import {TuiPageObject} from '../page-object';

interface TestParams {
    pageObject: TuiPageObject<unknown>;
    fixture: ComponentFixture<unknown>;
    testComponent: TestComponent;
    inputPO: TuiNativeInputPO;
    prefix: string;
}

interface TestComponent {
    control: FormControl;
}

export function tuiTestFiller(
    context: TestParams,
    setValue: unknown = 'value',
    clearValue: unknown = null,
): void {
    let pageObject: TuiPageObject<unknown>;
    let fixture: ComponentFixture<unknown>;
    let testComponent: TestComponent;
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
                inputPO.nativeElement.focus();
                fixture.detectChanges();

                expect(getFiller()).toBeNull();
            });
        });
    });

    function getFiller(): DebugElement | null {
        return pageObject.getByAutomationId(`${context.prefix}filler`);
    }
}

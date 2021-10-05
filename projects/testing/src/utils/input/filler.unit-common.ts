import {DebugElement} from '@angular/core';
import {ComponentFixture} from '@angular/core/testing';
import {FormControl} from '@angular/forms';
import {NativeInputPO} from '../native-input.page-object';
import {PageObject} from '../page-object';

interface TestParams {
    pageObject: PageObject<any>;
    fixture: ComponentFixture<any>;
    testComponent: TestComponent;
    inputPO: NativeInputPO;
    prefix: string;
}

interface TestComponent {
    control: FormControl;
}

export function testFiller(
    context: TestParams,
    setValue: any = 'value',
    clearValue: any = null,
) {
    let pageObject: PageObject<any>;
    let fixture: ComponentFixture<any>;
    let testComponent: TestComponent;
    let inputPO: NativeInputPO;

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

            it('when focusing appears', done => {
                inputPO.focus();
                fixture.detectChanges();
                fixture.whenStable().then(() => {
                    expect(getFiller()).not.toBeNull();
                    done();
                });
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

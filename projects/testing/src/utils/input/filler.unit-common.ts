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

    describe('Филлер(маска)', () => {
        beforeEach(() => {
            pageObject = context.pageObject;
            fixture = context.fixture;
            testComponent = context.testComponent;
            inputPO = context.inputPO;

            fixture.detectChanges();
        });

        describe('если в поле нет значения', () => {
            beforeEach(() => {
                testComponent.control.setValue(clearValue);
                fixture.detectChanges();
            });

            it('не виден', () => {
                expect(getFiller()).toBeNull();
            });

            it('при фокусировании появляется', done => {
                inputPO.focus();
                fixture.detectChanges();
                fixture.whenStable().then(() => {
                    expect(getFiller()).not.toBeNull();
                    done();
                });
            });
        });

        describe('если в поле есть значение', () => {
            beforeEach(() => {
                testComponent.control.setValue(setValue);
                fixture.detectChanges();
            });

            it('не виден', () => {
                expect(getFiller()).toBeNull();
            });

            it('при фокусировании также не виден', () => {
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

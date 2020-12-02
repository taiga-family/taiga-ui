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
    control?: FormControl;
    value?: any;
    size?: any;
    exampleText: string;
}

export function testExampleText(
    context: TestParams,
    setValue: any = 'value',
    clearValue: any = null,
    visibleExampleTextSize: any = 'l',
) {
    let pageObject: PageObject<any>;
    let fixture: ComponentFixture<any>;
    let testComponent: TestComponent;
    let inputPO: NativeInputPO;

    describe('Пример заполнения в поле (example-text)', () => {
        beforeEach(() => {
            pageObject = context.pageObject;
            fixture = context.fixture;
            testComponent = context.testComponent;
            inputPO = context.inputPO;

            fixture.detectChanges();
        });

        it('если инпут не сфокусирован, то example-text не показан', done => {
            fixture.whenStable().then(() => {
                expect(getExampleText()).toBeNull();
                done();
            });
        });

        it('если инпут имеет value, то example-text не показан', done => {
            updateValue(setValue);
            fixture.whenStable().then(() => {
                fixture.detectChanges();
                expect(getExampleText()).toBeNull();
                done();
            });
        });

        it('если инпут сфокусирован, то example-text показан', done => {
            updateValue(clearValue);
            testComponent.size = visibleExampleTextSize;
            inputPO.focus();
            fixture.whenStable().then(() => {
                fixture.detectChanges();
                expect(getExampleText()).not.toBeNull();
                done();
            });
        });

        it('В example-text корректно передается текст', done => {
            updateValue(clearValue);
            testComponent.size = visibleExampleTextSize;
            inputPO.focus();
            fixture.whenStable().then(() => {
                fixture.detectChanges();
                expect(getExampleText()!.nativeElement.textContent.trim()).toBe(
                    testComponent.exampleText,
                );
                done();
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

    function getExampleText(): DebugElement | null {
        return pageObject.getByAutomationId(`${context.prefix}example-text`);
    }
}

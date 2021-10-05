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

    describe('Example of filling in the field (example-text)', () => {
        beforeEach(() => {
            pageObject = context.pageObject;
            fixture = context.fixture;
            testComponent = context.testComponent;
            inputPO = context.inputPO;

            fixture.detectChanges();
        });

        it('if the input is not focused, then example-text is not shown', done => {
            fixture.whenStable().then(() => {
                expect(getExampleText()).toBeNull();
                done();
            });
        });

        it('if the input has value, then example-text is not shown', done => {
            updateValue(setValue);
            fixture.whenStable().then(() => {
                fixture.detectChanges();
                expect(getExampleText()).toBeNull();
                done();
            });
        });

        it('if the input is focused, then example-text is shown', done => {
            updateValue(clearValue);
            testComponent.size = visibleExampleTextSize;
            inputPO.focus();
            fixture.whenStable().then(() => {
                fixture.detectChanges();
                expect(getExampleText()).not.toBeNull();
                done();
            });
        });

        it('In example-text, the text is correctly passed', done => {
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

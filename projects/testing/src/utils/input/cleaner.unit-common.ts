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
    disabled?: boolean;
    cleaner: boolean;
    readOnly: boolean;
}

export function testCleaner(
    context: TestParams,
    setValue: any = 'value',
    clearValue: any = null,
) {
    let pageObject: PageObject<any>;
    let fixture: ComponentFixture<any>;
    let testComponent: TestComponent;
    let inputPO: NativeInputPO;

    describe('Крестик для очистки поля', () => {
        beforeEach(() => {
            pageObject = context.pageObject;
            fixture = context.fixture;
            testComponent = context.testComponent;
            inputPO = context.inputPO;

            fixture.detectChanges();
        });

        describe('Крестик включен', () => {
            beforeEach(() => {
                testComponent.cleaner = true;
            });

            it('Если значение не задано, крестик не показан', () => {
                updateValue(clearValue);

                fixture.detectChanges();

                expect(getCleaner()).toBeNull();
            });

            it('Если поле readonly, крестик не показан', () => {
                updateValue(setValue);

                testComponent.readOnly = true;
                fixture.detectChanges();

                expect(getCleaner()).toBeNull();
            });

            it('Если поле disabled, крестик не показан', () => {
                updateValue(setValue);

                if (testComponent.control) {
                    testComponent.control.disable();
                }

                testComponent.disabled = true;
                fixture.detectChanges();

                expect(getCleaner()).toBeNull();
            });

            it('Если значение задано, крестик показан', () => {
                updateValue(setValue);

                fixture.detectChanges();

                expect(getCleaner()).not.toBeNull();
            });

            it('При нажатии на крестик значение поля очищается', () => {
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

        describe('Крестик отключен', () => {
            it('Значение задано, крестик не показывается', () => {
                updateValue(setValue);

                testComponent.cleaner = false;
                fixture.detectChanges();

                expect(getCleaner()).toBeNull();
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

    function getCleaner(): DebugElement | null {
        return pageObject.getByAutomationId(`${context.prefix}cleaner`);
    }
}

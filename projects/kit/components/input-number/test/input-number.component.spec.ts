import type {DebugElement} from '@angular/core';
import {Component, ViewChild} from '@angular/core';
import type {ComponentFixture} from '@angular/core/testing';
import {TestBed} from '@angular/core/testing';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {CHAR_MINUS, CHAR_NO_BREAK_SPACE} from '@taiga-ui/cdk';
import type {TuiDecimalMode, TuiSizeL, TuiSizeS} from '@taiga-ui/core';
import {
    TuiHint,
    TuiNumberFormatDirective,
    TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {TuiInputNumberComponent, TuiInputNumberModule} from '@taiga-ui/kit';
import {TuiNativeInputPO, TuiPageObject} from '@taiga-ui/testing';
import {NG_EVENT_PLUGINS} from '@tinkoff/ng-event-plugins';

describe('InputNumber', () => {
    @Component({
        template: `
            <ng-container [formGroup]="form">
                <tui-input-number
                    *ngIf="!defaultValues"
                    formControlName="control"
                    [readOnly]="readOnly"
                    [tuiHintContent]="hintContent"
                    [tuiNumberFormat]="{decimalMode: decimalMode, precision}"
                    [tuiTextfieldCleaner]="cleaner"
                    [tuiTextfieldSize]="size"
                >
                    Enter the amount
                </tui-input-number>
                <tui-input-number
                    *ngIf="defaultValues"
                    formControlName="control"
                ></tui-input-number>
            </ng-container>
        `,
    })
    class TestComponent {
        @ViewChild(TuiInputNumberComponent)
        public component!: TuiInputNumberComponent;

        public control = new FormControl(12345.0);
        public form = new FormGroup({
            control: this.control,
        });

        public readOnly = false;
        public decimalMode: TuiDecimalMode = 'pad';
        public precision = NaN;
        public cleaner = true;
        public defaultValues = false;
        public size: TuiSizeL | TuiSizeS = 'm';
        public hintContent: string | null = 'prompt';
    }

    let fixture: ComponentFixture<TestComponent>;
    let testComponent: TestComponent;
    let component: TuiInputNumberComponent;
    let pageObject: TuiPageObject<TestComponent>;
    let inputPO: TuiNativeInputPO;

    beforeEach(async () => {
        TestBed.configureTestingModule({
            imports: [
                NoopAnimationsModule,
                TuiInputNumberModule,
                TuiNumberFormatDirective,
                ReactiveFormsModule,
                TuiTextfieldControllerModule,
                TuiHint,
            ],
            providers: [NG_EVENT_PLUGINS],
            declarations: [TestComponent],
        });
        await TestBed.compileComponents();
        fixture = TestBed.createComponent(TestComponent);
        pageObject = new TuiPageObject(fixture);
        testComponent = fixture.componentInstance;
        fixture.detectChanges();
        component = testComponent.component;

        inputPO = new TuiNativeInputPO(fixture, 'tui-primitive-textfield__native-input');

        document.querySelectorAll('input').forEach(el => {
            const maxlength = el.getAttribute('maxlength');
            const oldSpecification = 52488; // Note: https://bugs.chromium.org/p/chromium/issues/detail?id=450544

            if (typeof maxlength !== 'number' || maxlength === oldSpecification) {
                /**
                 * -1 is a standard for all browsers
                 */
                el.setAttribute('maxlength', '-1');
            }
        });
    });

    describe('Default values:', () => {
        beforeEach(() => {
            testComponent.defaultValues = true;
            fixture.detectChanges();
        });

        it('Zero pennies are not shown', async () => {
            testComponent.control.setValue(1234.0);
            fixture.detectChanges();

            await fixture.whenStable();

            fixture.detectChanges();
            expect(getNativeInput()!.nativeElement.value).toBe(
                `1${CHAR_NO_BREAK_SPACE}234`,
            );
        });

        it('Non-zero pennies are shown', async () => {
            testComponent.control.setValue(12.345);
            fixture.detectChanges();

            await fixture.whenStable();

            fixture.detectChanges();
            expect(getNativeInput()!.nativeElement.value).toBe('12,34');
        });

        it('Default min and max are safe integers', async () => {
            await fixture.whenStable();

            fixture.detectChanges();

            expect(testComponent.component.min).toBe(Number.MIN_SAFE_INTEGER);
            expect(testComponent.component.max).toBe(Number.MAX_SAFE_INTEGER);
        });
    });

    it('Non-zero pennies are not shown when precision = 0', async () => {
        testComponent.control.setValue(12.3);
        testComponent.precision = 0;
        fixture.detectChanges();

        await fixture.whenStable();

        fixture.detectChanges();

        expect(getNativeInput()!.nativeElement.value).toBe('12');
    });

    it('There is no minus sign for negative values with min> = 0', async () => {
        testComponent.component.min = 0;
        fixture.detectChanges();

        inputPO.sendText('-12345678');
        await fixture.whenStable();

        expect(getNativeInput()!.nativeElement.value).toBe(
            `12${CHAR_NO_BREAK_SPACE}345${CHAR_NO_BREAK_SPACE}678`,
        );
    });

    it('No minus sign for non-negative min', async () => {
        testComponent.component.min = 10;
        fixture.detectChanges();

        inputPO.sendText('-12345678');
        await fixture.whenStable();

        expect(getNativeInput()!.nativeElement.value).toBe(
            `12${CHAR_NO_BREAK_SPACE}345${CHAR_NO_BREAK_SPACE}678`,
        );
    });

    describe('onValueChange | updating form values', () => {
        describe('An incomplete value is passed to the form null', () => {
            it("Value ''", () => {
                component.onValueChange('');

                expect(testComponent.control.value).toBeNull();
            });

            it("Value '-'", () => {
                component.onValueChange('-');

                expect(testComponent.control.value).toBeNull();
            });

            it("Value ','", () => {
                component.onValueChange(',');

                expect(testComponent.control.value).toBeNull();
            });

            it("Value '-,'", () => {
                component.onValueChange('-,');

                expect(testComponent.control.value).toBeNull();
            });

            it('Value does not depend on the separator', () => {
                testComponent.decimalMode = 'not-zero';

                inputPO.sendText('123456,50');
                expect(testComponent.control.value).toBe(123456.5);

                inputPO.sendText('123456.50');
                expect(testComponent.control.value).toBe(123456.5);
            });
        });

        describe('The min and max properties', () => {
            beforeEach(() => {
                inputPO.sendText('');
                testComponent.control.setValue(null);
                fixture.autoDetectChanges();
            });

            it('A value less than positive min does not update the control', () => {
                testComponent.component.min = 15;
                inputPO.sendText('10');

                expect(testComponent.control.value).toBeNull();
            });

            it('A value less than positive min is clipped to min when element lose focus', () => {
                testComponent.component.min = 15;
                inputPO.sendText('10');
                inputPO.blur();

                expect(testComponent.control.value).toBe(15);
            });

            it('A value greater than max is clipped to max', async () => {
                const savedMax = 25;

                testComponent.component.max = savedMax;
                await fixture.whenStable();
                inputPO.sendText('50');

                expect(testComponent.control.value).toBe(savedMax);
            });

            it('A value greater than negative max does not update the control', () => {
                testComponent.component.max = -15;
                inputPO.sendText('-10');

                expect(testComponent.control.value).toBeNull();
            });

            it('A value greater than negative max is clipped to max when element lose focus', () => {
                testComponent.component.max = -15;
                inputPO.sendText('-10');
                inputPO.blur();

                expect(testComponent.control.value).toBe(-15);
            });

            it('A value less than negative min is truncated to min', async () => {
                const savedMin = -25;

                testComponent.component.min = savedMin;
                await fixture.whenStable();
                inputPO.sendText('-50');

                expect(testComponent.control.value).toBe(savedMin);
            });
        });

        it('The correctly filled value is passed to the form number', () => {
            testComponent.decimalMode = 'not-zero';
            inputPO.sendText(`-12${CHAR_NO_BREAK_SPACE}345,67`);

            expect(testComponent.control.value).toBe(-12345.67);
        });
    });

    describe('computedValue | value to display', () => {
        it('The given value from the form is correctly converted to a string', () => {
            testComponent.precision = 0;
            fixture.detectChanges();
            testComponent.control.setValue(-12345.67);

            expect(component.computedValue).toBe(
                `${CHAR_MINUS}12${CHAR_NO_BREAK_SPACE}345`,
            );
        });

        it("The given value from the form is correctly converted to a string with 0's at start", () => {
            inputPO.sendTextAndBlur('00 002 025');

            expect(component.computedValue).toBe(`2${CHAR_NO_BREAK_SPACE}025`);

            inputPO.sendTextAndBlur(' 005');

            expect(component.computedValue).toBe('5');
        });

        it('The given value from the form is correctly converted to a string with 0', () => {
            inputPO.sendText('0');

            expect(component.computedValue).toBe('0');
        });

        it("Doesn't trim zeros if the input is focused", () => {
            testComponent.decimalMode = 'not-zero';

            inputPO.focus();
            inputPO.sendText('10,07');
            inputPO.sendText('10,0');

            expect(component.computedValue).toBe('10,0');
        });

        it('formats a value if the element is out of focus', () => {
            testComponent.decimalMode = 'not-zero';

            inputPO.sendTextAndBlur('10,0');

            expect(component.computedValue).toBe('10');

            inputPO.sendText('10,0');

            expect(component.computedValue).toBe('10,0');
        });
    });

    describe('Format value when element lose focus with precision > 6', () => {
        beforeEach(() => {
            testComponent.decimalMode = 'always';
            testComponent.precision = 10;
            inputPO.sendText('');
            inputPO.focus();
        });

        it('Positive value', () => {
            inputPO.sendText('0,0000000001');
            inputPO.blur();

            expect(component.computedValue).toBe('0,0000000001');
        });

        it('Negative value', () => {
            inputPO.sendText('-0,0000000001');
            inputPO.blur();

            expect(component.computedValue).toBe(`${CHAR_MINUS}0,0000000001`);
        });

        it('Value with precision less than 10', () => {
            inputPO.sendText('-0,00000052');
            inputPO.blur();

            expect(component.computedValue).toBe(`${CHAR_MINUS}0,0000005200`);
        });
    });

    it('maxlength is set to 23 by default (18 digits + 5 default separators)', () => {
        fixture.detectChanges();
        const nativeInput = getNativeInput()!.nativeElement;

        expect(nativeInput.getAttribute('maxlength')).toBe('23');
    });

    describe('When decimalMode === always', () => {
        it('Adds the number of zeros specified by the precision property when updating Value (123) with an integer', () => {
            const value = '123';
            const precision = 2;

            testComponent.decimalMode = 'always';
            testComponent.precision = precision;
            inputPO.sendText(value);
            inputPO.blur();

            expect(component.computedValue).toBe(`${value},00`);
        });

        it('Adds the number of zeros specified by the precision property when updating Value (0) with an integer', () => {
            const value = '0';
            const precision = 2;

            testComponent.decimalMode = 'always';
            testComponent.precision = precision;
            inputPO.sendText(value);
            inputPO.blur();

            expect(component.computedValue).toBe(`${value},00`);
        });
    });

    function getNativeInput(): DebugElement | null {
        return pageObject.getByAutomationId('tui-primitive-textfield__native-input');
    }
});

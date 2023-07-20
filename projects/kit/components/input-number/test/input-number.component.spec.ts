import {Component, DebugElement, ViewChild} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {CHAR_MINUS, CHAR_NO_BREAK_SPACE} from '@taiga-ui/cdk';
import {
    TuiDecimal,
    TuiHintModule,
    TuiSizeL,
    TuiSizeS,
    TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {TuiInputNumberComponent, TuiInputNumberModule} from '@taiga-ui/kit';
import {configureTestSuite, TuiNativeInputPO, TuiPageObject} from '@taiga-ui/testing';

describe(`InputNumber`, () => {
    @Component({
        template: `
            <ng-container [formGroup]="form">
                <tui-input-number
                    *ngIf="!defaultValues"
                    formControlName="control"
                    [readOnly]="readOnly"
                    [decimal]="decimal"
                    [tuiTextfieldCleaner]="cleaner"
                    [tuiTextfieldSize]="size"
                    [tuiHintContent]="hintContent"
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
        component!: TuiInputNumberComponent;

        control = new FormControl(12345.0);
        form = new FormGroup({
            control: this.control,
        });

        readOnly = false;
        decimal: TuiDecimal = `never`;
        cleaner = true;
        defaultValues = false;
        size: TuiSizeL | TuiSizeS = `m`;
        hintContent: string | null = `prompt`;
    }

    let fixture: ComponentFixture<TestComponent>;
    let testComponent: TestComponent;
    let component: TuiInputNumberComponent;
    let pageObject: TuiPageObject<TestComponent>;
    let inputPO: TuiNativeInputPO;

    configureTestSuite(() => {
        TestBed.configureTestingModule({
            imports: [
                NoopAnimationsModule,
                TuiInputNumberModule,
                ReactiveFormsModule,
                TuiTextfieldControllerModule,
                TuiHintModule,
            ],
            declarations: [TestComponent],
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TestComponent);
        pageObject = new TuiPageObject(fixture);
        testComponent = fixture.componentInstance;
        fixture.detectChanges();
        component = testComponent.component;

        inputPO = new TuiNativeInputPO(fixture, `tui-primitive-textfield__native-input`);
    });

    describe(`Default values:`, () => {
        beforeEach(() => {
            testComponent.defaultValues = true;
            fixture.detectChanges();
        });

        it(`Zero pennies are not shown`, async () => {
            testComponent.control.setValue(1234.0);
            fixture.detectChanges();

            await fixture.whenStable();

            fixture.detectChanges();
            expect(getNativeInput()!.nativeElement.value).toBe(
                `1${CHAR_NO_BREAK_SPACE}234`,
            );
        });

        it(`Non-zero pennies are shown`, async () => {
            testComponent.control.setValue(12.345);
            fixture.detectChanges();

            await fixture.whenStable();

            fixture.detectChanges();
            expect(getNativeInput()!.nativeElement.value).toBe(`12,34`);
        });

        it(`Default min and max are safe integers`, async () => {
            await fixture.whenStable();

            fixture.detectChanges();

            expect(testComponent.component.min).toBe(Number.MIN_SAFE_INTEGER);
            expect(testComponent.component.max).toBe(Number.MAX_SAFE_INTEGER);
        });
    });

    it(`Non-zero pennies are not shown when decimal = 'never'`, async () => {
        testComponent.control.setValue(12.3);
        fixture.detectChanges();

        await fixture.whenStable();

        fixture.detectChanges();

        expect(getNativeInput()!.nativeElement.value).toBe(`12`);
    });

    it(`There is no minus sign for negative values with min> = 0`, async () => {
        testComponent.component.min = 0;
        inputPO.sendText(`-12345678`);

        await fixture.whenStable();

        expect(getNativeInput()!.nativeElement.value).toBe(
            `12${CHAR_NO_BREAK_SPACE}345${CHAR_NO_BREAK_SPACE}678`,
        );
    });

    it(`No minus sign for non-negative min`, async () => {
        testComponent.component.min = 10;
        inputPO.sendText(`-12345678`);

        await fixture.whenStable();

        expect(getNativeInput()!.nativeElement.value).toBe(
            `12${CHAR_NO_BREAK_SPACE}345${CHAR_NO_BREAK_SPACE}678`,
        );
    });

    describe(`onValueChange | updating form values`, () => {
        describe(`An incomplete value is passed to the form null`, () => {
            it(`Value ''`, () => {
                component.onValueChange(``);

                expect(testComponent.control.value).toBe(null);
            });

            it(`Value '-'`, () => {
                component.onValueChange(`-`);

                expect(testComponent.control.value).toBe(null);
            });

            it(`Value ','`, () => {
                component.onValueChange(`,`);

                expect(testComponent.control.value).toBe(null);
            });

            it(`Value '-,'`, () => {
                component.onValueChange(`-,`);

                expect(testComponent.control.value).toBe(null);
            });

            it(`Value does not depend on the separator`, () => {
                testComponent.decimal = `not-zero`;

                inputPO.sendText(`123456,50`);
                expect(testComponent.control.value).toBe(123456.5);

                inputPO.sendText(`123456.50`);
                expect(testComponent.control.value).toBe(123456.5);
            });
        });

        describe(`The min and max properties`, () => {
            beforeEach(() => {
                inputPO.sendText(``);
                testComponent.control.setValue(null);
            });

            it(`A value less than positive min does not update the control`, () => {
                testComponent.component.min = 15;
                inputPO.sendText(`10`);

                expect(testComponent.control.value).toBe(null);
            });

            it(`A value less than positive min is clipped to min when element lose focus`, () => {
                testComponent.component.min = 15;
                inputPO.sendText(`10`);
                inputPO.blur();

                expect(testComponent.control.value).toBe(15);
            });

            it(`A value greater than max is clipped to max`, () => {
                const savedMax = 25;

                testComponent.component.max = savedMax;
                inputPO.sendText(`50`);

                expect(testComponent.control.value).toBe(savedMax);
            });

            it(`A value greater than negative max does not update the control`, () => {
                testComponent.component.max = -15;
                inputPO.sendText(`-10`);

                expect(testComponent.control.value).toBe(null);
            });

            it(`A value greater than negative max is clipped to max when element lose focus`, () => {
                testComponent.component.max = -15;
                inputPO.sendText(`-10`);
                inputPO.blur();

                expect(testComponent.control.value).toBe(-15);
            });

            it(`A value less than negative min is truncated to min`, () => {
                const savedMin = -25;

                testComponent.component.min = savedMin;
                inputPO.sendText(`-50`);

                expect(testComponent.control.value).toBe(savedMin);
            });
        });

        it(`The correctly filled value is passed to the form number`, () => {
            testComponent.component.decimal = `not-zero`;
            inputPO.sendText(`-12${CHAR_NO_BREAK_SPACE}345,67`);

            expect(testComponent.control.value).toBe(-12345.67);
        });
    });

    describe(`computedValue | value to display`, () => {
        it(`The given value from the form is correctly converted to a string`, () => {
            testComponent.control.setValue(-12345.67);

            expect(component.computedValue).toBe(
                `${CHAR_MINUS}12${CHAR_NO_BREAK_SPACE}345`,
            );
        });

        it(`The given value from the form is correctly converted to a string with 0's at start`, () => {
            inputPO.sendTextAndBlur(`00 002 025`);

            expect(component.computedValue).toBe(`2${CHAR_NO_BREAK_SPACE}025`);

            inputPO.sendTextAndBlur(` 005`);

            expect(component.computedValue).toBe(`5`);
        });

        it(`The given value from the form is correctly converted to a string with 0`, () => {
            inputPO.sendText(`0`);

            expect(component.computedValue).toBe(`0`);
        });

        it(`Doesn't trim zeros if the input is focused`, () => {
            component.decimal = `not-zero`;

            inputPO.focus();
            inputPO.sendText(`10,07`);
            inputPO.sendText(`10,0`);

            expect(component.computedValue).toBe(`10,0`);
        });

        it(`formats a value if the element is out of focus`, () => {
            component.decimal = `not-zero`;

            inputPO.sendTextAndBlur(`10,0`);

            expect(component.computedValue).toBe(`10`);

            inputPO.sendText(`10,0`);

            expect(component.computedValue).toBe(`10,0`);
        });
    });

    describe(`Format value when element lose focus with precision > 6`, () => {
        beforeEach(() => {
            component.decimal = `always`;
            component.precision = 10;
            inputPO.sendText(``);
            inputPO.focus();
        });

        it(`Positive value`, () => {
            inputPO.sendText(`0,0000000001`);
            inputPO.blur();

            expect(component.computedValue).toBe(`0,0000000001`);
        });

        it(`Negative value`, () => {
            inputPO.sendText(`-0,0000000001`);
            inputPO.blur();

            expect(component.computedValue).toBe(`${CHAR_MINUS}0,0000000001`);
        });

        it(`Value with precision less than 10`, () => {
            inputPO.sendText(`-0,00000052`);
            inputPO.blur();

            expect(component.computedValue).toBe(`${CHAR_MINUS}0,0000005200`);
        });
    });

    it(`maxlength is set to 23 by default (18 digits + 5 default separators)`, () => {
        fixture.detectChanges();
        const nativeInput = getNativeInput()!.nativeElement;

        expect(nativeInput.getAttribute(`maxlength`)).toBe(`23`);
    });

    describe(`When decimal === always`, () => {
        it(`Adds the number of zeros specified by the precision property when updating Value with an integer`, () => {
            const value = `123`;
            const precision = 2;

            component.decimal = `always`;
            component.precision = precision;
            inputPO.sendText(value);

            expect(component.computedValue).toBe(`${value},00`);
        });

        it(`Adds the number of zeros specified by the precision property when updating Value with an integer`, () => {
            const value = `0`;
            const precision = 2;

            component.decimal = `always`;
            component.precision = precision;
            inputPO.sendText(value);

            expect(component.computedValue).toBe(`${value},00`);
        });
    });

    function getNativeInput(): DebugElement | null {
        return pageObject.getByAutomationId(`tui-primitive-textfield__native-input`);
    }
});

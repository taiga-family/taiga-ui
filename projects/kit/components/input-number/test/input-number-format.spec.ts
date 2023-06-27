import {Component, ViewChild} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {CHAR_NO_BREAK_SPACE} from '@taiga-ui/cdk';
import {TuiDecimal, tuiNumberFormatProvider} from '@taiga-ui/core';
import {TuiInputNumberComponent, TuiInputNumberModule} from '@taiga-ui/kit';
import {configureTestSuite, TuiNativeInputPO} from '@taiga-ui/testing';

describe(`InputNumber - backward compatibility for separators`, () => {
    @Component({
        template: `
            <ng-container [formGroup]="form">
                <tui-input-number
                    formControlName="control"
                    [decimal]="decimal"
                    [precision]="precision"
                ></tui-input-number>
            </ng-container>
        `,
    })
    class TestComponent {
        @ViewChild(TuiInputNumberComponent)
        component!: TuiInputNumberComponent;

        control = new FormControl(12345.0);
        form = new FormGroup({control: this.control});

        decimal: TuiDecimal = `always`;
        precision = 2;
    }

    let fixture: ComponentFixture<TestComponent>;
    let testComponent: TestComponent;
    let component: TuiInputNumberComponent;
    let inputPO: TuiNativeInputPO;

    describe(`Format - {d d d,d}`, () => {
        configureTestSuite(() => {
            TestBed.configureTestingModule({
                imports: [
                    NoopAnimationsModule,
                    TuiInputNumberModule,
                    ReactiveFormsModule,
                ],
                declarations: [TestComponent],
            });
        });

        beforeEach(() => {
            fixture = TestBed.createComponent(TestComponent);
            testComponent = fixture.componentInstance;
            fixture.detectChanges();
            component = testComponent.component;
            fixture.detectChanges();

            inputPO = new TuiNativeInputPO(
                fixture,
                `tui-primitive-textfield__native-input`,
            );
        });

        it(`comma usage`, () => {
            inputPO.sendText(`55666,7777`);
            inputPO.focus();

            expect(component.computedValue).toBe(`55${CHAR_NO_BREAK_SPACE}666,77`);
        });

        it(`dot usage`, () => {
            inputPO.sendText(`55666.7777`);
            inputPO.focus();

            expect(component.computedValue).toBe(`55${CHAR_NO_BREAK_SPACE}666,77`);
        });
    });

    describe(`Format - {d d d,d}`, () => {
        configureTestSuite(() => {
            TestBed.configureTestingModule({
                imports: [
                    NoopAnimationsModule,
                    TuiInputNumberModule,
                    ReactiveFormsModule,
                ],
                declarations: [TestComponent],
            });
        });

        beforeEach(() => {
            fixture = TestBed.createComponent(TestComponent);
            testComponent = fixture.componentInstance;
            fixture.detectChanges();
            component = testComponent.component;
            fixture.detectChanges();
            inputPO = new TuiNativeInputPO(
                fixture,
                `tui-primitive-textfield__native-input`,
            );
        });

        it(`comma usage`, () => {
            inputPO.sendText(`55666,7777`);
            inputPO.focus();

            expect(component.computedValue).toBe(`55${CHAR_NO_BREAK_SPACE}666,77`);
        });

        it(`dot usage`, () => {
            inputPO.sendText(`55666.7777`);
            inputPO.focus();

            expect(component.computedValue).toBe(`55${CHAR_NO_BREAK_SPACE}666,77`);
        });
    });

    describe(`Format - {d,d,d.d}`, () => {
        configureTestSuite(() => {
            TestBed.configureTestingModule({
                imports: [
                    NoopAnimationsModule,
                    TuiInputNumberModule,
                    ReactiveFormsModule,
                ],
                declarations: [TestComponent],
                providers: [
                    tuiNumberFormatProvider({
                        decimalSeparator: `.`,
                        thousandSeparator: `,`,
                    }),
                ],
            });
        });

        beforeEach(() => {
            fixture = TestBed.createComponent(TestComponent);
            testComponent = fixture.componentInstance;
            fixture.detectChanges();
            component = testComponent.component;
            fixture.detectChanges();
            inputPO = new TuiNativeInputPO(
                fixture,
                `tui-primitive-textfield__native-input`,
            );
        });

        it(`comma usage`, () => {
            inputPO.sendText(`556,667,777`);
            inputPO.focus();

            expect(component.computedValue).toBe(`556,667,777.00`);
        });

        it(`dot usage`, () => {
            inputPO.sendText(`556,667,777.99`);
            inputPO.focus();

            expect(component.computedValue).toBe(`556,667,777.99`);
        });
    });
});

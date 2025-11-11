import {ChangeDetectionStrategy, Component, ViewChild} from '@angular/core';
import {type ComponentFixture, TestBed} from '@angular/core/testing';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {CHAR_NO_BREAK_SPACE} from '@taiga-ui/cdk';
import {
    provideTaiga,
    type TuiDecimalMode,
    TuiNumberFormat,
    tuiNumberFormatProvider,
} from '@taiga-ui/core';
import {TuiInputNumberComponent, TuiInputNumberModule} from '@taiga-ui/legacy';
import {TuiNativeInputPO} from '@taiga-ui/testing';

describe('InputNumber - backward compatibility for separators', () => {
    @Component({
        imports: [ReactiveFormsModule, TuiInputNumberModule, TuiNumberFormat],
        template: `
            <ng-container [formGroup]="form">
                <tui-input-number
                    formControlName="control"
                    [tuiNumberFormat]="{decimalMode, precision}"
                />
            </ng-container>
        `,
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
    class Test {
        @ViewChild(TuiInputNumberComponent)
        public component!: TuiInputNumberComponent;

        public control = new FormControl(12345.0);
        public form = new FormGroup({control: this.control});

        public decimalMode: TuiDecimalMode = 'always';
        public precision = 2;
    }

    let fixture: ComponentFixture<Test>;
    let testComponent: Test;
    let component: TuiInputNumberComponent;
    let inputPO: TuiNativeInputPO;

    describe('Format - {d d d,d}', () => {
        beforeEach(async () => {
            TestBed.configureTestingModule({
                imports: [Test],
                providers: [
                    provideTaiga(),
                    tuiNumberFormatProvider({decimalSeparator: ','}),
                ],
            });
            await TestBed.compileComponents();
            fixture = TestBed.createComponent(Test);
            testComponent = fixture.componentInstance;
            fixture.detectChanges();
            component = testComponent.component;
            fixture.detectChanges();

            inputPO = new TuiNativeInputPO(
                fixture,
                'tui-primitive-textfield__native-input',
            );
        });

        it('comma usage', () => {
            inputPO.sendText('55666,7777');
            inputPO.focus();

            expect(component.computedValue).toBe(`55${CHAR_NO_BREAK_SPACE}666,77`);
        });

        it('dot usage', () => {
            inputPO.sendText('55666.7777');
            inputPO.focus();

            expect(component.computedValue).toBe(`55${CHAR_NO_BREAK_SPACE}666,77`);
        });
    });

    describe('Format - {d,d,d.d}', () => {
        beforeEach(async () => {
            TestBed.configureTestingModule({
                imports: [Test],
                providers: [
                    provideTaiga(),
                    tuiNumberFormatProvider({
                        decimalSeparator: '.',
                        thousandSeparator: ',',
                    }),
                ],
            });
            await TestBed.compileComponents();
            fixture = TestBed.createComponent(Test);
            testComponent = fixture.componentInstance;
            fixture.detectChanges();
            component = testComponent.component;
            fixture.detectChanges();
            inputPO = new TuiNativeInputPO(
                fixture,
                'tui-primitive-textfield__native-input',
            );
        });

        it('comma usage', () => {
            inputPO.sendText('556,667,777');
            inputPO.focus();

            expect(component.computedValue).toBe('556,667,777.00');
        });

        it('dot usage', () => {
            inputPO.sendText('556,667,777.99');
            inputPO.focus();

            expect(component.computedValue).toBe('556,667,777.99');
        });
    });
});

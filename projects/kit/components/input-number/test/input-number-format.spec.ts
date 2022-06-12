import {Component, DebugElement, ViewChild} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {CHAR_NO_BREAK_SPACE} from '@taiga-ui/cdk';
import {TUI_NUMBER_FORMAT, TuiDecimalT} from '@taiga-ui/core';
import {TuiInputNumberComponent, TuiInputNumberModule} from '@taiga-ui/kit';
import {configureTestSuite, PageObject} from '@taiga-ui/testing';

describe('InputNumber - backward compatibility for separators', () => {
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

        control = new FormControl(12345);
        form = new FormGroup({control: this.control});

        decimal: TuiDecimalT = 'always';
        precision = 2;
    }

    let fixture: ComponentFixture<TestComponent>;
    let testComponent: TestComponent;
    let component: TuiInputNumberComponent;
    let pageObject: PageObject<TestComponent>;
    let nativeInput: HTMLInputElement;

    describe('Format - {d d d,d}', () => {
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
            pageObject = new PageObject(fixture);
            testComponent = fixture.componentInstance;
            fixture.detectChanges();
            component = testComponent.component;
            nativeInput = getNativeInput()!.nativeElement;
            fixture.detectChanges();
        });

        it('comma usage', () => {
            nativeInput.value = '55666,7777';
            nativeInput.focus();
            fixture.detectChanges();

            expect(component.computedValue).toBe(`55${CHAR_NO_BREAK_SPACE}666,77`);
        });

        it('dot usage', () => {
            nativeInput.value = '55666.7777';
            nativeInput.focus();
            fixture.detectChanges();

            expect(component.computedValue).toBe(`55${CHAR_NO_BREAK_SPACE}666,77`);
        });
    });

    describe('Format - {d d d,d}', () => {
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
            pageObject = new PageObject(fixture);
            testComponent = fixture.componentInstance;
            fixture.detectChanges();
            component = testComponent.component;
            nativeInput = getNativeInput()!.nativeElement;
            fixture.detectChanges();
        });

        it('comma usage', () => {
            nativeInput.value = '55666,7777';
            nativeInput.focus();
            fixture.detectChanges();

            expect(component.computedValue).toBe(`55${CHAR_NO_BREAK_SPACE}666,77`);
        });

        it('dot usage', () => {
            nativeInput.value = '55666.7777';
            nativeInput.focus();
            fixture.detectChanges();

            expect(component.computedValue).toBe(`55${CHAR_NO_BREAK_SPACE}666,77`);
        });
    });

    describe('Format - {d,d,d.d}', () => {
        configureTestSuite(() => {
            TestBed.configureTestingModule({
                imports: [
                    NoopAnimationsModule,
                    TuiInputNumberModule,
                    ReactiveFormsModule,
                ],
                declarations: [TestComponent],
                providers: [
                    {
                        provide: TUI_NUMBER_FORMAT,
                        useValue: {decimalSeparator: '.', thousandSeparator: ','},
                    },
                ],
            });
        });

        beforeEach(() => {
            fixture = TestBed.createComponent(TestComponent);
            pageObject = new PageObject(fixture);
            testComponent = fixture.componentInstance;
            fixture.detectChanges();
            component = testComponent.component;
            nativeInput = getNativeInput()!.nativeElement;
            fixture.detectChanges();
        });

        it('comma usage', () => {
            nativeInput.value = '556,667,777';
            nativeInput.focus();
            fixture.detectChanges();

            expect(component.computedValue).toBe(`556,667,777.00`);
        });

        it('dot usage', () => {
            nativeInput.value = '556,667,777.99';
            nativeInput.focus();
            fixture.detectChanges();

            expect(component.computedValue).toBe(`556,667,777.99`);
        });
    });

    function getNativeInput(): DebugElement | null {
        return pageObject.getByAutomationId('tui-primitive-textfield__native-input');
    }
});

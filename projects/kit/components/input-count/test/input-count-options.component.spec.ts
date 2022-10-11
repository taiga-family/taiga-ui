import {Component, ViewChild} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {
    TUI_INPUT_COUNT_DEFAULT_OPTIONS,
    TUI_INPUT_COUNT_OPTIONS,
    TuiInputCountComponent,
    TuiInputCountModule,
} from '@taiga-ui/kit';
import {configureTestSuite, TuiNativeInputPO} from '@taiga-ui/testing';

describe(`InputCount with TUI_INPUT_COUNT_OPTIONS`, () => {
    @Component({
        template: `
            <tui-input-count
                [formControl]="control"
                [readOnly]="readOnly"
            ></tui-input-count>
        `,
    })
    class TestComponent {
        @ViewChild(TuiInputCountComponent)
        component!: TuiInputCountComponent;

        control = new FormControl();
        readOnly = false;
    }

    let fixture: ComponentFixture<TestComponent>;
    let testComponent: TestComponent;
    let inputPO: TuiNativeInputPO;

    const min = 0;
    const max = 12;
    const step = 5;

    configureTestSuite(() => {
        TestBed.configureTestingModule({
            imports: [ReactiveFormsModule, TuiInputCountModule],
            declarations: [TestComponent],
            providers: [
                {
                    provide: TUI_INPUT_COUNT_OPTIONS,
                    useValue: {
                        ...TUI_INPUT_COUNT_DEFAULT_OPTIONS,
                        icons: {
                            up: `tuiIconChevronUp`,
                            down: `tuiIconChevronDown`,
                        },
                        step,
                        min,
                        max,
                    },
                },
            ],
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TestComponent);
        testComponent = fixture.componentInstance;

        inputPO = new TuiNativeInputPO(fixture, `tui-primitive-textfield__native-input`);
    });

    describe(`A step other than 1 is set`, () => {
        beforeEach(() => {
            testComponent.control.setValue(6);
            fixture.detectChanges();
        });

        it(`Increase the value by the specified step`, () => {
            testComponent.component.increaseValue();

            expect(inputPO.value).toBe(`11`);
            expect(testComponent.control.value).toBe(11);
        });

        it(`Decrease the value by a given step`, () => {
            testComponent.component.decreaseValue();

            expect(inputPO.value).toBe(`1`);
            expect(testComponent.control.value).toBe(1);
        });

        it(`Cannot make value greater than maxValue`, () => {
            testComponent.component.increaseValue(); // the new value is 11
            testComponent.component.increaseValue(); // the new value would be 16, but it is greater than maxValue

            expect(inputPO.value).toBe(max.toString());
            expect(testComponent.control.value).toBe(max);
        });

        it(`Cannot make value less than min`, () => {
            testComponent.component.decreaseValue(); // value became === 1
            testComponent.component.decreaseValue(); // the new value would be -4, but it's less than min

            expect(inputPO.value).toBe(min.toString());
            expect(testComponent.control.value).toBe(min);
        });
    });
});

import {Component, TemplateRef, ViewChild} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {TuiContextWithImplicit} from '@taiga-ui/cdk';
import {TuiRootModule, TuiTextfieldControllerModule} from '@taiga-ui/core';
import {TuiInputSliderComponent, TuiInputSliderModule} from '@taiga-ui/kit';
import {configureTestSuite, NativeInputPO, PageObject} from '@taiga-ui/testing';

@Component({
    template: `
        <tui-root>
            <tui-input-slider
                new
                [formControl]="control"
                [max]="max"
                [min]="min"
                [quantum]="quantum"
                [steps]="steps"
                [valueContent]="valueContent"
                [tuiTextfieldCustomContent]="textfieldCustomContent"
            ></tui-input-slider>

            <ng-template #progressPercent>{{ percent }}%</ng-template>
        </tui-root>
    `,
})
class TestComponent {
    @ViewChild(TuiInputSliderComponent)
    component!: TuiInputSliderComponent;

    @ViewChild('progressPercent')
    progressPercentCustomContent!: TemplateRef<unknown>;

    control = new FormControl(0);

    min = -100;
    max = 100;
    quantum = 10;
    steps = 0;
    valueContent: unknown = '';
    textfieldCustomContent: unknown = '';

    get percent(): number {
        return Math.round((this.control.value / (this.max - this.min)) * 100);
    }
}

const testContext = {
    get textInputInsideAutoId() {
        return 'tui-primitive-textfield__native-input';
    },

    get textInputCustomValueAutoId() {
        return 'tui-primitive-textfield__value';
    },

    get customContentAutoId() {
        return 'tui-primitive-textfield__custom-content';
    },
};

let fixture: ComponentFixture<TestComponent>;
let testComponent: TestComponent;
let pageObject: PageObject<TestComponent>;
let inputPO: NativeInputPO;

describe('InputSlider[new]', () => {
    configureTestSuite(() => {
        TestBed.configureTestingModule({
            imports: [
                TuiRootModule,
                TuiTextfieldControllerModule,
                TuiInputSliderModule,
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
        inputPO = new NativeInputPO(fixture, testContext.textInputInsideAutoId);
    });

    describe('`quantum` prop', () => {
        beforeEach(() => {
            testComponent.control = new FormControl(0);
            testComponent.quantum = 10;
            testComponent.steps = 0;
        });

        it('Pressing `Arrow Up` increases value by `quantum`-value if property `step` was not provided', () => {
            inputPO.focus();

            inputPO.sendKeydown('arrowUp');
            expect(testComponent.control.value).toBe(10);

            inputPO.sendKeydown('arrowUp');
            expect(testComponent.control.value).toBe(20);

            inputPO.sendKeydown('arrowUp');
            expect(testComponent.control.value).toBe(30);
        });

        it('Pressing `Arrow Down` decreases value by `quantum`-value if property `step` was not provided', () => {
            inputPO.focus();

            inputPO.sendKeydown('arrowDown');
            expect(testComponent.control.value).toBe(-10);

            inputPO.sendKeydown('arrowDown');
            expect(testComponent.control.value).toBe(-20);

            inputPO.sendKeydown('arrowDown');
            expect(testComponent.control.value).toBe(-30);
        });

        it('cannot type decimal number if `quantum` is integer', () => {
            testComponent.quantum = 1;
            fixture.detectChanges();

            inputPO.sendTextAndBlur('0,1234412');
            expect(testComponent.control.value).toBe(0);
        });

        it('can type decimal number if `quantum` is decimal', () => {
            testComponent.quantum = 0.000001;
            fixture.detectChanges();

            inputPO.sendTextAndBlur('0,123456');
            expect(testComponent.control.value).toBe(0.123456);
        });

        it('cannot type more digits after comma than digits after comma in `quantum`', () => {
            testComponent.quantum = 0.001;
            fixture.detectChanges();

            inputPO.sendTextAndBlur('0,123456');
            expect(testComponent.control.value).toBe(0.123);
        });

        describe('rounds to the nearest `quantum` on blur', () => {
            describe('`quantum` = 20 | `max` = 100 | `min` = 0', () => {
                beforeEach(() => {
                    testComponent.quantum = 20;
                    testComponent.min = 0;
                    testComponent.max = 100;
                });

                it('16 => 20', () => {
                    inputPO.sendTextAndBlur('16');
                    expect(testComponent.control.value).toBe(20);
                });

                it('27 => 20', () => {
                    inputPO.sendTextAndBlur('27');
                    expect(testComponent.control.value).toBe(20);
                });

                it('42 => 40', () => {
                    inputPO.sendTextAndBlur('42');
                    expect(testComponent.control.value).toBe(40);
                });

                it('78 => 80', () => {
                    inputPO.sendTextAndBlur('78');
                    expect(testComponent.control.value).toBe(80);
                });
            });

            describe('`quantum` = 0.25 | `max` = 10 | `min` = -10', () => {
                beforeEach(() => {
                    testComponent.quantum = 0.25;
                    testComponent.min = -10;
                    testComponent.max = 10;
                });

                it('7.59 => 7.5', () => {
                    inputPO.sendTextAndBlur('7.59');
                    expect(testComponent.control.value).toBe(7.5);
                });

                it('-2.44 => -2.5', () => {
                    inputPO.sendTextAndBlur('-2.44');
                    expect(testComponent.control.value).toBe(-2.5);
                });

                it('-9.99 => -10', () => {
                    inputPO.sendTextAndBlur('-9.99');
                    expect(testComponent.control.value).toBe(-10);
                });

                it('4.13 => 4.25', () => {
                    inputPO.sendTextAndBlur('4.13');
                    expect(testComponent.control.value).toBe(4.25);
                });
            });
        });
    });

    describe('`valueContent` prop', () => {
        const customLabel = ({
            $implicit,
        }: TuiContextWithImplicit<number>): number | string => {
            switch ($implicit) {
                case 100:
                    return 'MAX';
                case 75:
                    return 'Three quarters';
                case 50:
                    return 'Middle';
                case 10:
                    return 'TEN';
                default:
                    return $implicit;
            }
        };

        beforeEach(() => {
            testComponent.min = 0;
            testComponent.max = 100;
            testComponent.quantum = 1;
            testComponent.valueContent = customLabel;

            fixture.detectChanges();
        });

        const checkValueContent = async (
            value: number,
            expectedContent: string,
        ): Promise<void> => {
            inputPO.sendTextAndBlur(`${value}`);

            fixture.detectChanges();
            await fixture.whenStable();

            expect(testComponent.control.value).toBe(value);
            expect(getTextInputCustomValue()).toBe(expectedContent);
        };

        it('100 => MAX', async () => {
            await checkValueContent(100, 'MAX');
        });

        it('90 => 90', async () => {
            await checkValueContent(90, '90');
        });

        it('78 => 78', async () => {
            await checkValueContent(78, '78');
        });

        it('75 => `Three quarters`', async () => {
            await checkValueContent(75, 'Three quarters');
        });

        it('60 => 60', async () => {
            await checkValueContent(60, '60');
        });

        it('50 => `Middle`', async () => {
            await checkValueContent(50, 'Middle');
        });

        it('30 => 30', async () => {
            await checkValueContent(30, '30');
        });

        it('10 => `Ten`', async () => {
            await checkValueContent(10, 'TEN');
        });
    });

    describe('`min` prop', () => {
        describe('positive numbers', () => {
            beforeEach(() => {
                testComponent.min = 10;
                testComponent.max = 100;
                testComponent.quantum = 0.001;

                fixture.detectChanges();
            });

            it('cannot type number less than `min` property', async () => {
                inputPO.sendTextAndBlur('9.999');
                await fixture.whenStable();
                expect(testComponent.control.value).toBe(10);
            });

            it('cannot even type minus if `min` is positive', async () => {
                inputPO.sendTextAndBlur('-11');
                await fixture.whenStable();
                expect(testComponent.control.value).toBe(11);
            });

            it('cannot set value less than min using ArrowDown', async () => {
                inputPO.sendTextAndBlur('10');

                await fixture.whenStable();

                inputPO.focus();
                inputPO.sendKeydown('arrowDown');

                fixture.detectChanges();
                await fixture.whenStable();

                expect(testComponent.control.value).toBe(10);
                expect(inputPO.value).toBe('10');
            });
        });

        describe('negative numbers', () => {
            beforeEach(() => {
                testComponent.min = -10;
                testComponent.max = 100;
                testComponent.quantum = 0.001;

                fixture.detectChanges();
            });

            it('can type negative number more than `min`', () => {
                inputPO.sendTextAndBlur('-5');
                expect(testComponent.control.value).toBe(-5);
            });

            it('cannot type negative number less than `min`', () => {
                inputPO.sendTextAndBlur('-11');
                expect(testComponent.control.value).toBe(-10);
            });
        });
    });

    describe('`max` prop', () => {
        beforeEach(() => {
            testComponent.min = -200;
            testComponent.max = 100;
            testComponent.quantum = 0.001;

            fixture.detectChanges();
        });

        it('cannot type float number more than `max` property', () => {
            inputPO.sendTextAndBlur('100.001');
            expect(testComponent.control.value).toBe(100);
        });

        it('cannot type integer number more than `max` property', () => {
            inputPO.sendTextAndBlur('150');
            expect(testComponent.control.value).toBe(100);
        });

        it('can type large negative number', () => {
            inputPO.sendTextAndBlur('-200');
            expect(testComponent.control.value).toBe(-200);
        });

        it('cannot set value more than max using ArrowUp', async () => {
            inputPO.sendTextAndBlur('100');

            await fixture.whenStable();

            inputPO.focus();
            inputPO.sendKeydown('arrowUp');

            fixture.detectChanges();
            await fixture.whenStable();

            expect(testComponent.control.value).toBe(100);
            expect(inputPO.value).toBe('100');
        });
    });

    describe('`tuiTextfieldCustomContent` controller', () => {
        describe('progress percent case', () => {
            beforeEach(() => {
                testComponent.textfieldCustomContent =
                    testComponent.progressPercentCustomContent;
                testComponent.min = 0;
                testComponent.max = 10;
                testComponent.quantum = 0.1;

                fixture.detectChanges();
            });

            it('0 => 0%', () => {
                inputPO.sendTextAndBlur('0');
                expect(getTextfieldCustomContent()).toBe('0%');
            });

            it('1.5 => 15%', () => {
                inputPO.sendTextAndBlur('1.5');
                expect(getTextfieldCustomContent()).toBe('15%');
            });

            it('4.8 => 48%', () => {
                inputPO.sendTextAndBlur('4.8');
                expect(getTextfieldCustomContent()).toBe('48%');
            });

            it('6.3 => 63%', () => {
                inputPO.sendTextAndBlur('6.3');
                expect(getTextfieldCustomContent()).toBe('63%');
            });

            it('8 => 80%', () => {
                inputPO.sendTextAndBlur('8');
                expect(getTextfieldCustomContent()).toBe('80%');
            });

            it('10 => 100%', () => {
                inputPO.sendTextAndBlur('10');
                expect(getTextfieldCustomContent()).toBe('100%');
            });
        });
    });
});

function getTextInputCustomValue(): string {
    return (
        pageObject.getByAutomationId(testContext.textInputCustomValueAutoId)
            ?.nativeElement.textContent || ''
    );
}

function getTextfieldCustomContent(): string {
    return (
        pageObject.getByAutomationId(testContext.customContentAutoId)?.nativeElement
            .textContent || ''
    );
}

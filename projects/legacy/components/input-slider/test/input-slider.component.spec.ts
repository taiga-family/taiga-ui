import type {TemplateRef} from '@angular/core';
import {Component, ViewChild} from '@angular/core';
import type {ComponentFixture} from '@angular/core/testing';
import {TestBed} from '@angular/core/testing';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import type {TuiContext} from '@taiga-ui/cdk';
import {CHAR_MINUS} from '@taiga-ui/cdk';
import {TuiRoot} from '@taiga-ui/core';
import {NG_EVENT_PLUGINS} from '@taiga-ui/event-plugins';
import {
    TuiInputSliderComponent,
    TuiInputSliderModule,
    TuiTextfieldControllerModule,
} from '@taiga-ui/legacy';
import {TuiNativeInputPO, TuiPageObject} from '@taiga-ui/testing';

@Component({
    standalone: true,
    imports: [
        TuiRoot,
        TuiInputSliderModule,
        ReactiveFormsModule,
        TuiTextfieldControllerModule,
    ],
    template: `
        <tui-root>
            <tui-input-slider
                [formControl]="control"
                [max]="max"
                [min]="min"
                [quantum]="quantum"
                [steps]="steps"
                [tuiTextfieldCustomContent]="textfieldCustomContent"
                [tuiTextfieldPostfix]="postfix"
                [tuiTextfieldPrefix]="prefix"
                [valueContent]="valueContent"
            ></tui-input-slider>

            <ng-template #progressPercent>{{ percent }}%</ng-template>
        </tui-root>
    `,
})
class Test {
    @ViewChild(TuiInputSliderComponent)
    public component!: TuiInputSliderComponent;

    @ViewChild('progressPercent')
    public progressPercentCustomContent!: TemplateRef<Record<string, unknown>>;

    public control = new FormControl(0);

    public min = -100;
    public max = 100;
    public quantum = 10;
    public steps = 0;
    public valueContent: unknown = '';
    public textfieldCustomContent: unknown = '';
    public prefix = '$';
    public postfix = 'things';

    public get percent(): number {
        return Math.round(((this.control.value || 0) / (this.max - this.min)) * 100);
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

let fixture: ComponentFixture<Test>;
let testComponent: Test;
let pageObject: TuiPageObject<Test>;
let inputPO: TuiNativeInputPO;

describe('InputSlider', () => {
    beforeEach(async () => {
        TestBed.configureTestingModule({
            imports: [Test],
            providers: [NG_EVENT_PLUGINS],
        });
        await TestBed.compileComponents();
        fixture = TestBed.createComponent(Test);
        pageObject = new TuiPageObject(fixture);
        testComponent = fixture.componentInstance;
        fixture.detectChanges();
        inputPO = new TuiNativeInputPO(fixture, testContext.textInputInsideAutoId);
    });

    describe('[quantum] prop', () => {
        beforeEach(async () => {
            testComponent.control = new FormControl(0);
            testComponent.prefix = '';
            testComponent.postfix = '';
            testComponent.quantum = 10;
            testComponent.steps = 0;

            fixture.detectChanges();
            await fixture.whenStable();
        });

        it('pressing `Arrow Up` increases value by `quantum`-value if property `step` was not provided', () => {
            inputPO.focus();

            inputPO.sendKeydown('arrowUp');
            expect(testComponent.control.value).toBe(10);

            inputPO.sendKeydown('arrowUp');
            expect(testComponent.control.value).toBe(20);

            inputPO.sendKeydown('arrowUp');
            expect(testComponent.control.value).toBe(30);
        });

        it('pressing `Arrow Down` decreases value by `quantum`-value if property `step` was not provided', () => {
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
                beforeEach(async () => {
                    testComponent.quantum = 20;
                    testComponent.min = 0;
                    testComponent.max = 100;

                    fixture.detectChanges();
                    await fixture.whenStable();
                });

                it('16 => 20', async () => {
                    inputPO.sendTextAndBlur('16');
                    await fixture.whenStable();

                    expect(testComponent.control.value).toBe(20);
                    expect(inputPO.value).toBe('20');
                });

                it('27 => 20', async () => {
                    inputPO.sendTextAndBlur('27');
                    await fixture.whenStable();

                    expect(testComponent.control.value).toBe(20);
                    expect(inputPO.value).toBe('20');
                });

                it('42 => 40', async () => {
                    inputPO.sendTextAndBlur('42');
                    await fixture.whenStable();

                    expect(testComponent.control.value).toBe(40);
                    expect(inputPO.value).toBe('40');
                });

                it('78 => 80', async () => {
                    inputPO.sendTextAndBlur('78');
                    await fixture.whenStable();

                    expect(testComponent.control.value).toBe(80);
                    expect(inputPO.value).toBe('80');
                });
            });

            describe('`quantum` = 0.25 | `max` = 10 | `min` = -10', () => {
                beforeEach(async () => {
                    testComponent.quantum = 0.25;
                    testComponent.min = -10;
                    testComponent.max = 10;

                    fixture.detectChanges();
                    await fixture.whenStable();
                });

                it('7.59 => 7.50', async () => {
                    inputPO.sendTextAndBlur('7.59');
                    await fixture.whenStable();

                    expect(testComponent.control.value).toBe(7.5);
                    expect(inputPO.value).toBe('7,50');
                });

                it('-2.44 => -2.50', async () => {
                    inputPO.sendTextAndBlur('-2.44');
                    await fixture.whenStable();

                    expect(testComponent.control.value).toBe(-2.5);
                    expect(inputPO.value).toBe(`${CHAR_MINUS}2,50`);
                });

                it('-9.99 => -10', async () => {
                    inputPO.sendTextAndBlur('-9.99');
                    await fixture.whenStable();

                    expect(testComponent.control.value).toBe(-10);
                    expect(inputPO.value).toBe(`${CHAR_MINUS}10`);
                });

                it('4.13 => 4.25', async () => {
                    inputPO.sendTextAndBlur('4.13');
                    await fixture.whenStable();

                    expect(testComponent.control.value).toBe(4.25);
                    expect(inputPO.value).toBe('4,25');
                });
            });

            describe('`quantum` = 1000 | `max` = 10000 | `min` = 1000', () => {
                beforeEach(async () => {
                    testComponent.quantum = 1000;
                    testComponent.min = 1000;
                    testComponent.max = 10_000;
                    testComponent.control = new FormControl(5_000);

                    fixture.detectChanges();
                    await fixture.whenStable();
                });

                it('5_001 => 5_000', async () => {
                    inputPO.sendTextAndBlur('5001');
                    await fixture.whenStable();

                    expect(testComponent.control.value).toBe(5_000);
                    expect(inputPO.value).toBe('5 000');
                });

                it('1_499 => 1_000', async () => {
                    inputPO.focus();
                    await fixture.whenStable();

                    inputPO.sendText('1499');
                    await fixture.whenStable();

                    expect(testComponent.control.value).toBe(1_000);
                    expect(inputPO.value).toBe('1 499');

                    inputPO.blur();
                    await fixture.whenStable();

                    expect(testComponent.control.value).toBe(1_000);
                    expect(inputPO.value).toBe('1 000');
                });

                it('2_800 => 3_000', async () => {
                    inputPO.focus();
                    await fixture.whenStable();

                    inputPO.sendText('2800');
                    await fixture.whenStable();

                    expect(testComponent.control.value).toBe(3_000);
                    expect(inputPO.value).toBe('2 800');

                    inputPO.blur();
                    await fixture.whenStable();

                    expect(testComponent.control.value).toBe(3_000);
                    expect(inputPO.value).toBe('3 000');
                });
            });
        });

        it('does not rounds to nearest multiple of [quantum] until text field losses focus', async () => {
            testComponent.quantum = 100;
            testComponent.min = 0;
            testComponent.max = 1000;
            fixture.detectChanges();

            inputPO.sendText('150');

            expect(inputPO.value).toBe('150');
            expect(testComponent.control.value).toBe(200);

            inputPO.blur();
            await fixture.whenStable();

            expect(inputPO.value).toBe('200');
            expect(testComponent.control.value).toBe(200);
        });
    });

    describe('[valueContent] prop', () => {
        const customLabel = ({$implicit}: TuiContext<number>): number | string => {
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

        beforeEach(async () => {
            testComponent.min = 0;
            testComponent.max = 100;
            testComponent.quantum = 1;
            testComponent.valueContent = customLabel;

            fixture.detectChanges();
            await fixture.whenStable();
        });

        const checkValueContent = async (
            value: number,
            expectedContent: string,
        ): Promise<void> => {
            inputPO.focus();
            expect(getTextfieldValueContent()).toBe('');
            inputPO.sendText(`${value}`);
            await fixture.whenStable();

            expect(getTextfieldValueContent()).toBe('');
            inputPO.blur();
            await fixture.whenStable();

            expect(testComponent.control.value).toBe(value);
            expect(getTextfieldValueContent()).toBe(expectedContent);
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

    describe('[max] prop', () => {
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
            expect(inputPO.value).toBe('$100 things');
        });
    });

    describe('[tuiTextfieldCustomContent] controller', () => {
        describe('progress percent case', () => {
            beforeEach(() => {
                testComponent.textfieldCustomContent =
                    testComponent.progressPercentCustomContent;
                testComponent.min = 0;
                testComponent.max = 10;
                testComponent.quantum = 0.1;

                fixture.detectChanges();
            });

            it('0 => 0%', async () => {
                inputPO.sendTextAndBlur('0');
                await fixture.whenStable();
                expect(getTextfieldCustomContent()).toBe('0%');
            });

            it('1.5 => 15%', async () => {
                inputPO.sendTextAndBlur('1.5');
                await fixture.whenStable();
                expect(getTextfieldCustomContent()).toBe('15%');
            });

            it('4.8 => 48%', async () => {
                inputPO.sendTextAndBlur('4.8');
                await fixture.whenStable();
                expect(getTextfieldCustomContent()).toBe('48%');
            });

            it('6.3 => 63%', async () => {
                inputPO.sendTextAndBlur('6.3');
                await fixture.whenStable();
                expect(getTextfieldCustomContent()).toBe('63%');
            });

            it('8 => 80%', async () => {
                inputPO.sendTextAndBlur('8');
                await fixture.whenStable();
                expect(getTextfieldCustomContent()).toBe('80%');
            });

            it('10 => 100%', async () => {
                inputPO.sendTextAndBlur('10');
                await fixture.whenStable();
                expect(getTextfieldCustomContent()).toBe('100%');
            });
        });
    });

    it('programmatic FormControl updates should also update textfield value', async () => {
        testComponent.control.patchValue(42);

        fixture.detectChanges();
        await fixture.whenStable();

        expect(inputPO.value).toBe('$42 things');
        expect(testComponent.control.value).toBe(42);
    });
});

function getTextfieldValueContent(): string {
    return (
        pageObject
            .getByAutomationId(testContext.textInputCustomValueAutoId)
            ?.nativeElement.textContent.trim() || ''
    );
}

function getTextfieldCustomContent(): string {
    return (
        pageObject
            .getByAutomationId(testContext.customContentAutoId)
            ?.nativeElement.textContent.trim() || ''
    );
}

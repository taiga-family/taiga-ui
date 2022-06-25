import {Component, DebugElement, ViewChild} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {configureTestSuite, TuiNativeInputPO, TuiPageObject} from '@taiga-ui/testing';

import {TuiInputCountComponent} from '../input-count.component';
import {TuiInputCountModule} from '../input-count.module';
import {
    TUI_INPUT_COUNT_DEFAULT_OPTIONS,
    TUI_INPUT_COUNT_OPTIONS,
} from '../input-count-options';

describe('InputCount', () => {
    @Component({
        template: `
            <tui-input-count
                *ngIf="defaultStep"
                [formControl]="control"
                [min]="min"
                [max]="max"
                [readOnly]="readOnly"
            ></tui-input-count>
            <tui-input-count
                *ngIf="customStep"
                [formControl]="control"
                [step]="step"
                [min]="min"
                [max]="max"
            ></tui-input-count>
        `,
    })
    class TestComponent {
        @ViewChild(TuiInputCountComponent)
        component!: TuiInputCountComponent;

        control = new FormControl();

        defaultStep = false;
        customStep = false;
        readOnly = false;

        min = 0;
        max = 999;
        step = 5;
    }

    let fixture: ComponentFixture<TestComponent>;
    let testComponent: TestComponent;
    let pageObject: TuiPageObject<TestComponent>;
    let inputPO: TuiNativeInputPO;
    const testContext = {
        get prefix() {
            return 'tui-input-count__';
        },
    };

    configureTestSuite(() => {
        TestBed.configureTestingModule({
            imports: [ReactiveFormsModule, TuiInputCountModule],
            declarations: [TestComponent],
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TestComponent);
        pageObject = new TuiPageObject(fixture);
        testComponent = fixture.componentInstance;

        inputPO = new TuiNativeInputPO(fixture, `tui-primitive-textfield__native-input`);
    });

    describe('Initialization', () => {
        describe('Value not passed', () => {
            beforeEach(() => {
                testComponent.defaultStep = true;
                fixture.detectChanges();
            });

            it('During initialization, fallback value 0 is displayed, control does not change values', async () => {
                await fixture.whenStable();

                expect(inputPO.value).toBe('0');
                expect(testComponent.control.value).toBe(null);
            });
        });

        describe('The value was passed when creating the control', () => {
            beforeEach(() => {
                testComponent.control.setValue(12);
                testComponent.defaultStep = true;
                fixture.detectChanges();
            });

            it('Value does not change during initialization', async () => {
                await fixture.whenStable();
                expect(inputPO.value).toBe('12');
                expect(testComponent.control.value).toBe(12);
            });
        });
    });

    describe('Change value using buttons', () => {
        describe('step not set', () => {
            beforeEach(async () => {
                testComponent.defaultStep = true;
                testComponent.control.setValue(1);
                fixture.detectChanges();
                await fixture.whenStable();
            });

            it('Pressing the plus increases the value by 1', () => {
                clickPlusButton();

                expect(inputPO.value).toBe('2');
                expect(testComponent.control.value).toBe(2);
            });

            it('Pressing the minus decreases the value by 1', () => {
                clickMinusButton();

                expect(inputPO.value).toBe('0');
                expect(testComponent.control.value).toBe(0);
            });

            it('With readOnly, plus and minus presses are ignored', () => {
                testComponent.readOnly = true;
                fixture.detectChanges();

                clickPlusButton();

                expect(inputPO.value).toBe('1');
                expect(testComponent.control.value).toBe(1);

                clickMinusButton();

                expect(inputPO.value).toBe('1');
                expect(testComponent.control.value).toBe(1);
            });
        });

        describe('Negative range is set', () => {
            beforeEach(() => {
                testComponent.defaultStep = true;
                testComponent.control.setValue(-17);
                testComponent.min = -100;
                testComponent.max = -10;
                fixture.detectChanges();
            });

            it('Pressing the plus increases the value by 1', async () => {
                clickPlusButton();

                // Should wait for the mask updating
                await fixture.whenStable();
                expect(inputPO.value).toBe('-16');
                expect(testComponent.control.value).toBe(-16);
            });

            it('Pressing the minus decreases the value by 1', async () => {
                clickMinusButton();

                await fixture.whenStable();
                expect(inputPO.value).toBe('-18');
                expect(testComponent.control.value).toBe(-18);
            });
        });

        describe('A step other than 1 is set', () => {
            beforeEach(() => {
                testComponent.customStep = true;
                testComponent.control.setValue(6);
                testComponent.step = 5;
                testComponent.min = -1;
                testComponent.max = 12;
                fixture.detectChanges();
            });

            it('Pressing the plus increases the value by the specified step', () => {
                clickPlusButton();

                expect(inputPO.value).toBe('11');
                expect(testComponent.control.value).toBe(11);
            });

            it('Pressing the "minus" decreases the value by a given step', () => {
                clickMinusButton();

                expect(inputPO.value).toBe('1');
                expect(testComponent.control.value).toBe(1);
            });

            it('Cannot make value greater than maxValue', () => {
                clickPlusButton(); // the new value is 11
                clickPlusButton(); // the new value would be 16, but it is greater than maxValue

                expect(inputPO.value).toBe('12');
                expect(testComponent.control.value).toBe(12);
            });

            it('Cannot make value less than min', () => {
                clickMinusButton(); // value became === 1
                clickMinusButton(); // the new value would be -4, but it's less than min

                expect(inputPO.value).toBe(testComponent.min.toString());
                expect(testComponent.control.value).toBe(testComponent.min);
            });

            it('If the value is equal to the maximum, the "plus" button is disabled', async () => {
                testComponent.control.setValue(12);
                fixture.detectChanges();

                await fixture.whenStable();
                fixture.detectChanges();
                expect(testComponent.component.plusButtonDisabled).toBe(true);
            });

            it('If the value is equal to the minimum, the "minus" button is disabled', async () => {
                testComponent.control.setValue(testComponent.min);
                fixture.detectChanges();

                await fixture.whenStable();
                fixture.detectChanges();
                expect(testComponent.component.minusButtonDisabled).toBe(true);
            });
        });
    });

    describe('Changing a value using a text box', () => {
        beforeEach(() => {
            testComponent.defaultStep = true;
        });

        it('Entering in the field changes the valuecontrol', () => {
            fixture.detectChanges();

            inputPO.sendText('12');

            expect(testComponent.control.value).toBe(12);
        });

        it('Entering a large number in the field changes the value to the limit', () => {
            fixture.detectChanges();

            inputPO.sendText('43000789');

            expect(testComponent.control.value).toBe(testComponent.max);
        });

        it('If you enter a number less than min, the new value is min', async () => {
            testComponent.min = 10;
            fixture.detectChanges();

            inputPO.sendTextAndBlur('7');

            await fixture.whenStable();

            expect(inputPO.value).toBe('10');
            expect(testComponent.control.value).toBe(10);
        });

        it('If you enter a number greater than max, the new value is max', () => {
            testComponent.max = 10;
            fixture.detectChanges();

            inputPO.sendTextAndBlur('15');

            expect(inputPO.value).toBe('10');
            expect(testComponent.control.value).toBe(10);
        });

        it('If you erase the field contents, the minimum value is restored', async () => {
            testComponent.control.setValue(123);
            fixture.detectChanges();

            inputPO.sendText('');
            testComponent.component.onFocused(false);

            fixture.detectChanges();

            await fixture.whenStable();

            fixture.detectChanges();
            expect(testComponent.control.value).toBe(0);
        });

        it('Entering in the field negative value changes the valuecontrol correctly', () => {
            testComponent.min = -100;
            fixture.detectChanges();

            inputPO.sendText('-12');

            expect(testComponent.control.value).toBe(-12);
        });
    });

    describe('Changing the value using the arrows on the keyboard', () => {
        beforeEach(() => {
            testComponent.customStep = true;
            testComponent.control.setValue(10);
            testComponent.step = 5;
            testComponent.min = 2;
            testComponent.max = 17;
            fixture.detectChanges();
        });

        it('Pressing the up arrow increases the value by the specified step', () => {
            inputPO.sendKeydown('ArrowUp');

            expect(inputPO.value).toBe('15');
            expect(testComponent.control.value).toBe(15);
        });

        it('Pressing the down arrow decreases the value by the specified step', () => {
            inputPO.sendKeydown('ArrowDown');

            expect(inputPO.value).toBe('5');
            expect(testComponent.control.value).toBe(5);
        });

        it('Cannot make value greater than maxValue', () => {
            inputPO.sendKeydown('ArrowUp'); // value became === 15
            inputPO.sendKeydown('ArrowUp'); // value should have become 20, but it's > maxValue

            expect(inputPO.value).toBe('17');
            expect(testComponent.control.value).toBe(17);
        });

        it('Cannot make value less than min', () => {
            inputPO.sendKeydown('ArrowDown'); // value became === 5
            inputPO.sendKeydown('ArrowDown'); // value should have become 0, but it's < min

            expect(inputPO.value).toBe('2');
            expect(testComponent.control.value).toBe(2);
        });

        it('Pressing the up arrow increases the negative value by the specified step', async () => {
            testComponent.control.setValue(-10);
            testComponent.step = 5;
            testComponent.min = -20;
            testComponent.max = 17;
            fixture.detectChanges();
            clickPlusButton();

            await fixture.whenStable();

            expect(inputPO.value).toBe('-5');
            expect(testComponent.control.value).toBe(-5);
        });

        it('Pressing the down arrow decreases the negative value by the specified step', async () => {
            testComponent.control.setValue(-10);
            testComponent.step = 5;
            testComponent.min = -20;
            testComponent.max = 17;
            fixture.detectChanges();
            clickMinusButton();

            await fixture.whenStable();

            expect(inputPO.value).toBe('-15');
            expect(testComponent.control.value).toBe(-15);
        });
    });

    it('maxlength is set to 18 by default', () => {
        testComponent.defaultStep = true;
        fixture.detectChanges();

        expect(inputPO.nativeElement.getAttribute('maxlength')).toBe('18');
    });

    function clickPlusButton(): void {
        const plusButton = getPlusButton();

        plusButton!.nativeElement.click();
        fixture.detectChanges();
    }

    function clickMinusButton(): void {
        const minusButton = getMinusButton();

        minusButton!.nativeElement.click();
        fixture.detectChanges();
    }

    function getPlusButton(): DebugElement | null {
        return pageObject.getByAutomationId(`${testContext.prefix}plus-button`);
    }

    function getMinusButton(): DebugElement | null {
        return pageObject.getByAutomationId(`${testContext.prefix}minus-button`);
    }
});

describe('InputCount with TUI_INPUT_COUNT_OPTIONS', () => {
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
                            up: 'tuiIconChevronUp',
                            down: 'tuiIconChevronDown',
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

    describe('A step other than 1 is set', () => {
        beforeEach(() => {
            testComponent.control.setValue(6);
            fixture.detectChanges();
        });

        it('Increase the value by the specified step', () => {
            testComponent.component.increaseValue();

            expect(inputPO.value).toBe('11');
            expect(testComponent.control.value).toBe(11);
        });

        it('Decrease the value by a given step', () => {
            testComponent.component.decreaseValue();

            expect(inputPO.value).toBe('1');
            expect(testComponent.control.value).toBe(1);
        });

        it('Cannot make value greater than maxValue', () => {
            testComponent.component.increaseValue(); // the new value is 11
            testComponent.component.increaseValue(); // the new value would be 16, but it is greater than maxValue

            expect(inputPO.value).toBe(max.toString());
            expect(testComponent.control.value).toBe(max);
        });

        it('Cannot make value less than min', () => {
            testComponent.component.decreaseValue(); // value became === 1
            testComponent.component.decreaseValue(); // the new value would be -4, but it's less than min

            expect(inputPO.value).toBe(min.toString());
            expect(testComponent.control.value).toBe(min);
        });
    });
});

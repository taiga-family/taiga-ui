import {NgIf} from '@angular/common';
import type {DebugElement} from '@angular/core';
import {Component, ViewChild} from '@angular/core';
import type {ComponentFixture} from '@angular/core/testing';
import {TestBed} from '@angular/core/testing';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {CHAR_HYPHEN, CHAR_MINUS} from '@taiga-ui/cdk';
import {tuiNumberFormatProvider} from '@taiga-ui/core';
import {NG_EVENT_PLUGINS} from '@taiga-ui/event-plugins';
import {TuiInputRangeComponent, TuiInputRangeModule} from '@taiga-ui/legacy';
import {TuiNativeInputPO, TuiPageObject} from '@taiga-ui/testing';

describe('InputRange', () => {
    @Component({
        standalone: true,
        imports: [TuiInputRangeModule, NgIf, ReactiveFormsModule],
        template: `
            <tui-input-range
                *ngIf="default"
                [formControl]="control"
            ></tui-input-range>
            <tui-input-range
                *ngIf="!default"
                [formControl]="control"
                [max]="max"
                [min]="min"
                [pluralize]="pluralize"
                [quantum]="quantum"
                [readOnly]="readOnly"
                [steps]="steps"
            ></tui-input-range>
        `,
    })
    class Test {
        @ViewChild(TuiInputRangeComponent, {static: true})
        public component!: TuiInputRangeComponent;

        public control = new FormControl([0, 1]);
        public default = false;
        public max = 10;
        public min = -10;
        public quantum = 5;
        public readOnly = false;
        public steps = 0;
        public pluralize = {one: 'год', few: 'года', many: 'лет', other: 'лет'};
    }

    let fixture: ComponentFixture<Test>;
    let testComponent: Test;
    let pageObject: TuiPageObject<Test>;

    let leftInputWrapper: DebugElement;
    let rightInputWrapper: DebugElement;

    let inputPOLeft: TuiNativeInputPO;
    let inputPORight: TuiNativeInputPO;

    const testContext = {
        get prefix() {
            return 'tui-input-range__';
        },
        get nativeInputAutoId() {
            return 'tui-primitive-textfield__native-input';
        },
        get valueContentAutoId() {
            return 'tui-primitive-textfield__value';
        },
        get valueDecorationAutoId() {
            return 'tui-primitive-textfield__value-decoration';
        },
    };

    beforeEach(async () => {
        TestBed.configureTestingModule({
            imports: [Test],
            providers: [
                NG_EVENT_PLUGINS,
                tuiNumberFormatProvider({decimalSeparator: ','}),
            ],
        });
        await TestBed.compileComponents();
        fixture = TestBed.createComponent(Test);
        pageObject = new TuiPageObject(fixture);
        testComponent = fixture.componentInstance;

        fixture.detectChanges();
        await fixture.whenStable();

        initializeInputsPO();
    });

    describe('Default values', () => {
        beforeEach(() => {
            testComponent.default = true;
            fixture.autoDetectChanges();

            initializeInputsPO();
        });

        it('[leftValueContent] is missing', () => {
            expect(getLeftValueContent()).toBeNull();
        });

        it('[rightValueContent] is missing', () => {
            testComponent.control.setValue([0, 10]);
            fixture.detectChanges();

            expect(getRightValueContent()).toBeNull();
        });

        it('plural signature missing', () => {
            expect(getLeftValueContent()).toBeNull();
            expect(getRightValueContent()).toBeNull();
        });
    });

    describe('Labels', () => {
        beforeEach(() => fixture.autoDetectChanges());

        it('plural signature is present', () => {
            expect(getLeftValueDecoration()).toContain('лет');
            expect(getRightValueDecoration()).toContain('год');
        });

        it('[rightValueContent] missing on focus', () => {
            testComponent.control.setValue([-10, 10]);
            inputPORight.focus();

            expect(getRightValueContent()).toBeNull();
            expect(getRightValueDecoration()).toBe('10 лет');
        });
    });

    describe('quantum', () => {
        beforeEach(() => fixture.autoDetectChanges());

        it('rounds the left value to the nearest quantum on loss of focus', () => {
            inputPOLeft.sendTextAndBlur('-7');

            expect(testComponent.control.value?.[0]).toBe(-5);
        });

        it('rounds the left value of an input field to the nearest quantum when focus is lost', () => {
            inputPOLeft.sendTextAndBlur('-7');

            expect(inputPOLeft.value).toBe(`${CHAR_MINUS}5 лет`);
        });

        it('rounds the right value to the nearest quantum on loss of focus', () => {
            inputPORight.sendTextAndBlur('7');

            expect(testComponent.control.value?.[1]).toBe(5);
        });

        it('rounds the right value of an input field to the nearest quantum on loss of focus', () => {
            inputPORight.sendTextAndBlur('7');

            expect(inputPORight.value).toBe('5 лет');
        });

        it('does not rounds to nearest multiple of [quantum] until text field losses focus', () => {
            inputPORight.sendText('8 лет');

            expect(inputPORight.value).toBe('8 лет');
            expect(testComponent.control.value?.[1]).toBe(10);

            inputPORight.blur();

            expect(inputPORight.value).toBe('10 лет');
            expect(testComponent.control.value?.[1]).toBe(10);
        });
    });

    describe('Deleting Values', () => {
        beforeEach(() => fixture.autoDetectChanges());

        it("doesn't change value when left content is removed", () => {
            inputPOLeft.sendTextAndBlur('-5');
            inputPOLeft.sendTextAndBlur('');

            expect(testComponent.control.value?.[0]).toBe(-5);
            expect(inputPOLeft.value).toBe(`${CHAR_MINUS}5 лет`);
        });

        it("doesn't change value when deleting right content", () => {
            inputPORight.sendTextAndBlur('5');
            inputPORight.sendTextAndBlur('');

            expect(testComponent.control.value?.[1]).toBe(5);
            expect(inputPORight.value).toBe('5 лет');
        });
    });

    describe('Changing values', () => {
        beforeEach(() => fixture.autoDetectChanges());

        it('prevents the left value from exceeding the right value when typing', () => {
            inputPORight.sendTextAndBlur('5');
            inputPOLeft.sendTextAndBlur('123');

            expect(testComponent.control.value?.[0]).toBe(
                testComponent.control.value?.[1],
            );
            expect(inputPOLeft.value).toBe(
                `${testComponent.control.value?.[1].toString()} лет`,
            );
        });

        it('prevents the right value from becoming less than the left value when leaving the field', () => {
            inputPOLeft.sendTextAndBlur('-5');
            fixture.detectChanges();

            inputPORight.sendTextAndBlur('-10');

            expect(testComponent.control.value?.[1]).toBe(
                testComponent.control.value?.[0],
            );
            expect(inputPORight.value).toBe(
                `${testComponent.control.value?.[0]
                    .toString()
                    .replace(CHAR_HYPHEN, CHAR_MINUS)} лет`,
            );
        });

        it('programmatic FormControl updates should also update textfield value', async () => {
            testComponent.control.patchValue([5, 10]);
            await fixture.whenStable();

            expect(inputPOLeft.value).toBe('5 лет');
            expect(inputPORight.value).toBe('10 лет');
        });
    });

    describe('Format', () => {
        beforeEach(() => {
            testComponent.max = 100000;
            testComponent.quantum = 0.01;
            fixture.autoDetectChanges();
            inputPORight.sendTextAndBlur('12345.67');
        });

        it('formats input', () => {
            expect(inputPORight.value).toBe('12 345,67 лет');
        });

        it("doesn't format the value", () => {
            expect(testComponent.control.value?.[1]).toBe(12345.67);
        });
    });

    describe('Arrows', () => {
        beforeEach(() => {
            testComponent.min = 0;
            testComponent.max = 10;
            testComponent.quantum = 1;
            testComponent.control.setValue([2, 6]);
            fixture.autoDetectChanges();
        });

        describe('readOnly', () => {
            beforeEach(() => {
                testComponent.readOnly = true;
                fixture.detectChanges();
            });

            it('the up arrow on the left margin does not increase the value', () => {
                inputPOLeft.sendKeydown('arrowUp');

                expect(testComponent.control.value?.[0]).toBe(2);
            });

            it('down arrow on left margin does not decrease value', () => {
                inputPOLeft.sendKeydown('arrowDown');

                expect(testComponent.control.value?.[0]).toBe(2);
            });

            it('the up arrow on the right margin does not increase the value', () => {
                inputPORight.sendKeydown('arrowUp');

                expect(testComponent.control.value?.[1]).toBe(6);
            });

            it('down arrow on right margin does not decrease value', () => {
                inputPORight.sendKeydown('arrowDown');

                expect(testComponent.control.value?.[1]).toBe(6);
            });
        });

        describe('Quantum', () => {
            beforeEach(() => fixture.autoDetectChanges());

            it('the up arrow on the left margin increases start by a quantum', () => {
                inputPOLeft.sendKeydown('arrowUp');

                expect(testComponent.control.value?.[0]).toBe(3);
            });

            it('the down arrow on the left margin decreases start by a quantum', () => {
                inputPOLeft.sendKeydown('arrowDown');

                expect(testComponent.control.value?.[0]).toBe(1);
            });

            it('the up arrow on the right margin increases end by a quantum', () => {
                inputPORight.sendKeydown('arrowUp');

                expect(testComponent.control.value?.[1]).toBe(7);
            });

            it('the down arrow on the right margin decreases end by a quantum', () => {
                inputPORight.sendKeydown('arrowDown');

                expect(testComponent.control.value?.[1]).toBe(5);
            });
        });

        describe('Steps', () => {
            beforeEach(() => {
                testComponent.steps = 5;
                fixture.autoDetectChanges();
            });

            it('the up arrow on the left margin increases start by one step', () => {
                inputPOLeft.sendKeydown('arrowUp');

                expect(testComponent.control.value?.[0]).toBe(4);
            });

            it('down arrow on the left margin decreases start by one step', () => {
                inputPOLeft.sendKeydown('arrowDown');

                expect(testComponent.control.value?.[0]).toBe(0);
            });

            it('the up arrow on the right margin increases end by one step', () => {
                inputPORight.sendKeydown('arrowUp');

                expect(testComponent.control.value?.[1]).toBe(8);
            });

            it('down arrow on the right margin decreases end by one step', () => {
                inputPORight.sendKeydown('arrowDown');

                expect(testComponent.control.value?.[1]).toBe(4);
            });
        });

        describe('Limitations', () => {
            beforeEach(() => fixture.autoDetectChanges());

            it('the up arrow on the left margin does not increase start to a value greater than end', () => {
                testComponent.control.setValue([6, 6]);
                inputPOLeft.sendKeydown('arrowUp');

                expect(testComponent.control.value?.[0]).toBe(6);
            });

            it('the down arrow on the left margin does not decrease start to a value less than min', () => {
                testComponent.control.setValue([0, 6]);
                inputPOLeft.sendKeydown('arrowDown');

                expect(testComponent.control.value?.[0]).toBe(0);
            });

            it('the up arrow on the right margin does not increase end to a value greater than max', () => {
                testComponent.control.setValue([6, 10]);
                inputPORight.sendKeydown('arrowUp');

                expect(testComponent.control.value?.[1]).toBe(10);
            });

            it('the down arrow on the right margin does not decrease end to a value less than start', () => {
                testComponent.control.setValue([6, 6]);
                inputPORight.sendKeydown('arrowDown');

                expect(testComponent.control.value?.[1]).toBe(6);
            });

            it('keyboard input does not exceed max', () => {
                inputPORight.sendText('12345');

                expect(inputPORight.value).toBe('10 лет');
            });

            it('keyboard input does not exceed min', () => {
                testComponent.min = -10;
                inputPOLeft.sendText('-123');

                expect(inputPOLeft.value).toBe(`${CHAR_MINUS}10 лет`);
            });

            it('keyboard input does not go beyond value[1]', () => {
                inputPOLeft.sendText('12345');

                expect(inputPOLeft.value).toBe('6 лет');
            });

            it('keyboard input does not output value[1] beyond value[0]', () => {
                inputPORight.sendText('1');

                expect(inputPORight.value).toBe(
                    '1 лет', // this plural form is expected because it is intermediate state and form control is not updated yet
                );
                expect(testComponent.control.value?.[1]).toBe(6);
            });
        });
    });

    function getLeftValueContent(): string | null {
        const valueContent = pageObject.getByAutomationId(
            testContext.valueContentAutoId,
            leftInputWrapper,
        );

        return valueContent?.nativeElement.textContent.trim() || null;
    }

    function getRightValueContent(): string | null {
        const valueContent = pageObject.getByAutomationId(
            testContext.valueContentAutoId,
            rightInputWrapper,
        );

        return valueContent?.nativeElement.textContent.trim() || null;
    }

    function getLeftValueDecoration(): string {
        return pageObject
            .getByAutomationId(testContext.valueDecorationAutoId, leftInputWrapper)
            ?.nativeElement.textContent.trim()
            .replace('\n ', '');
    }

    function getRightValueDecoration(): string {
        return pageObject
            .getByAutomationId(testContext.valueDecorationAutoId, rightInputWrapper)
            ?.nativeElement.textContent.trim()
            .replace('\n ', '');
    }

    function initializeInputsPO(): void {
        leftInputWrapper = pageObject.getByAutomationId('tui-input-range__left-input')!;
        rightInputWrapper = pageObject.getByAutomationId('tui-input-range__right-input')!;

        inputPOLeft = new TuiNativeInputPO(
            fixture,
            pageObject.getByAutomationId(
                testContext.nativeInputAutoId,
                leftInputWrapper,
            )!,
        );
        inputPORight = new TuiNativeInputPO(
            fixture,
            pageObject.getByAutomationId(
                testContext.nativeInputAutoId,
                rightInputWrapper,
            )!,
        );
    }
});

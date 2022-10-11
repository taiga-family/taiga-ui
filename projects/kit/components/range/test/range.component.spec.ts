import {Component, ElementRef, ViewChild} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {TuiRootModule} from '@taiga-ui/core';
import {TuiKeySteps, TuiRangeComponent, TuiRangeModule} from '@taiga-ui/kit';
import {tuiCreateKeyboardEvent, TuiPageObject} from '@taiga-ui/testing';

// TODO: TypeError: getComputedStyle(...).getPropertyValue is not a function
// TODO: move to cypress component testing
xdescribe(`Range`, () => {
    @Component({
        template: `
            <tui-root>
                <tui-range
                    [formControl]="testValue"
                    [max]="max"
                    [min]="min"
                    [segments]="segments"
                    [step]="step"
                    [keySteps]="keySteps"
                ></tui-range>
            </tui-root>
        `,
    })
    class TestComponent {
        @ViewChild(TuiRangeComponent, {static: true})
        component!: TuiRangeComponent;

        @ViewChild(TuiRangeComponent, {static: true, read: ElementRef})
        elementRef!: ElementRef<HTMLElement>;

        testValue = new FormControl([3, 5]);
        max = 11;
        min = 1;
        segments = 10;
        step = 1;
        keySteps: TuiKeySteps | null = null;
    }

    let fixture: ComponentFixture<TestComponent>;
    let testComponent: TestComponent;
    let pageObject: TuiPageObject<TestComponent>;
    const keydownArrowLeft = tuiCreateKeyboardEvent(`ArrowLeft`, `keydown`);
    const keydownArrowRight = tuiCreateKeyboardEvent(`ArrowRight`, `keydown`);
    const testContext = {
        get prefix() {
            return `tui-range__`;
        },
    };

    function getLeft(): HTMLElement {
        return pageObject.getByAutomationId(`${testContext.prefix}left`)!.nativeElement;
    }

    function getRight(): HTMLElement {
        return pageObject.getByAutomationId(`${testContext.prefix}right`)!.nativeElement;
    }

    function getFilledRangeOffeset(): {left: string; right: string} {
        const computedStyles = testComponent.elementRef.nativeElement;

        return {
            left: getComputedStyle(computedStyles).getPropertyValue(`--left`),
            right: getComputedStyle(computedStyles).getPropertyValue(`--right`),
        };
    }

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [ReactiveFormsModule, TuiRootModule, TuiRangeModule],
            declarations: [TestComponent],
        });

        fixture = TestBed.createComponent(TestComponent);
        pageObject = new TuiPageObject(fixture);
        testComponent = fixture.componentInstance;
        fixture.detectChanges();
    });

    it(`The bar is filled from 20% to 40%`, () => {
        expect(getFilledRangeOffeset().left).toBe(`20%`);
        expect(getFilledRangeOffeset().right).toBe(`60%`);
    });

    describe(`Changing values`, () => {
        describe(`Left point`, () => {
            it(`Pressing the left arrow decreases the value by one step`, () => {
                getLeft().dispatchEvent(keydownArrowLeft);

                expect(testComponent.testValue.value[0]).toBe(2);
                expect(testComponent.testValue.value[1]).toBe(5);
            });

            it(`Pressing the right arrow increases the value by one step`, () => {
                getLeft().dispatchEvent(keydownArrowRight);

                expect(testComponent.testValue.value[0]).toBe(4);
                expect(testComponent.testValue.value[1]).toBe(5);
            });

            it(`Pressing the left arrow correctly paints the strip`, () => {
                getLeft().dispatchEvent(keydownArrowLeft);
                fixture.detectChanges();

                expect(getFilledRangeOffeset().left).toBe(`10%`);
                expect(getFilledRangeOffeset().right).toBe(`60%`);
            });

            it(`Pressing the right arrow correctly paints the strip`, () => {
                getLeft().dispatchEvent(keydownArrowRight);
                fixture.detectChanges();

                expect(getFilledRangeOffeset().left).toBe(`30%`);
                expect(getFilledRangeOffeset().right).toBe(`60%`);
            });
        });

        describe(`Right point`, () => {
            it(`Pressing the left arrow decreases the value by one step`, () => {
                getRight().dispatchEvent(keydownArrowLeft);

                expect(testComponent.testValue.value[0]).toBe(3);
                expect(testComponent.testValue.value[1]).toBe(4);
            });

            it(`Pressing the right arrow increases the value by one step`, () => {
                getRight().dispatchEvent(keydownArrowRight);

                expect(testComponent.testValue.value[0]).toBe(3);
                expect(testComponent.testValue.value[1]).toBe(6);
            });

            it(`Pressing the left arrow correctly paints the strip`, () => {
                getRight().dispatchEvent(keydownArrowLeft);
                fixture.detectChanges();

                expect(getFilledRangeOffeset().left).toBe(`20%`);
                expect(getFilledRangeOffeset().right).toBe(`70%`);
            });

            it(`Pressing the right arrow correctly paints the strip`, () => {
                getRight().dispatchEvent(keydownArrowRight);
                fixture.detectChanges();

                expect(getFilledRangeOffeset().left).toBe(`20%`);
                expect(getFilledRangeOffeset().right).toBe(`50%`);
            });
        });

        describe(`Borders`, () => {
            it(`Prevents the left border from exceeding the right`, () => {
                testComponent.testValue.setValue([5, 5]);
                getLeft().dispatchEvent(keydownArrowRight);
                fixture.detectChanges();

                expect(testComponent.testValue.value[0]).toBe(5);
            });

            it(`Prevents the right border from dropping below the left`, () => {
                testComponent.testValue.setValue([5, 5]);
                getRight().dispatchEvent(keydownArrowLeft);
                fixture.detectChanges();

                expect(testComponent.testValue.value[1]).toBe(5);
            });

            it(`Prevents the value from decreasing below the minimum`, () => {
                testComponent.testValue.setValue([1, 11]);
                getLeft().dispatchEvent(keydownArrowLeft);
                fixture.detectChanges();

                expect(testComponent.testValue.value[0]).toBe(1);
            });

            it(`Prevents the value from exceeding the maximum`, () => {
                testComponent.testValue.setValue([1, 11]);
                getRight().dispatchEvent(keydownArrowRight);
                fixture.detectChanges();

                expect(testComponent.testValue.value[1]).toBe(11);
            });

            it(`Adds a value to the closest allowed step`, () => {
                testComponent.testValue.setValue([3.3, 5]);
                getLeft().dispatchEvent(keydownArrowRight);
                fixture.detectChanges();

                expect(testComponent.testValue.value[0]).toBe(4);
            });
        });

        describe(`[step] prop`, () => {
            beforeEach(() => {
                testComponent.min = 0;
                testComponent.max = 10;
                testComponent.step = 0.1;
                testComponent.testValue.setValue([1, 5]);
                fixture.detectChanges();
            });

            it(`Pressing the right arrow increases the value by one step (step = 1)`, () => {
                getLeft().dispatchEvent(keydownArrowRight);
                fixture.detectChanges();

                expect(testComponent.testValue.value[0]).toBe(1.1);
            });

            it(`Pressing the left arrow decreases the value by one step`, () => {
                getRight().dispatchEvent(keydownArrowLeft);
                fixture.detectChanges();

                expect(testComponent.testValue.value[1]).toBe(4.9);
            });

            it(`Pressing the right arrow increases the value by one step (step = 3)`, () => {
                testComponent.testValue.setValue([0, 10]);
                testComponent.step = 3;
                fixture.detectChanges();

                getLeft().dispatchEvent(keydownArrowRight);
                fixture.detectChanges();

                expect(testComponent.testValue.value[0]).toBe(3);
            });
        });

        describe(`keySteps`, () => {
            beforeEach(() => {
                testComponent.keySteps = [
                    [0, 0],
                    [25, 10_000],
                    [50, 100_000],
                    [75, 500_000],
                    [100, 1_000_000],
                ];
                testComponent.step = (testComponent.max - testComponent.min) / 10;
                testComponent.testValue.setValue([0, 0]);
                fixture.detectChanges();
            });

            const testsContexts = [
                {
                    value: [0, 10_000],
                    leftOffset: `0%`,
                    rightOffset: `75%`,
                },
                {
                    value: [10_000, 10_000],
                    leftOffset: `25%`,
                    rightOffset: `75%`,
                },
                {
                    value: [10_000, 100_000],
                    leftOffset: `25%`,
                    rightOffset: `50%`,
                },
                {
                    value: [100_000, 100_000],
                    leftOffset: `50%`,
                    rightOffset: `50%`,
                },
                {
                    value: [100_000, 500_000],
                    leftOffset: `50%`,
                    rightOffset: `25%`,
                },
                {
                    value: [500_000, 500_000],
                    leftOffset: `75%`,
                    rightOffset: `25%`,
                },
                {
                    value: [500_000, 750_000],
                    leftOffset: `75%`,
                    rightOffset: `12.5%`,
                },
                {
                    value: [750_000, 1_000_000],
                    leftOffset: `87.5%`,
                    rightOffset: `0%`,
                },
            ] as const;

            for (const {value, leftOffset, rightOffset} of testsContexts) {
                it(`${JSON.stringify(value)}`, () => {
                    testComponent.testValue.setValue(value);
                    fixture.detectChanges();

                    expect(getFilledRangeOffeset().left).toBe(leftOffset);
                    expect(getFilledRangeOffeset().right).toBe(rightOffset);
                });
            }
        });
    });
});

import {Component, ElementRef, ViewChild} from '@angular/core';
import type {ComponentFixture} from '@angular/core/testing';
import {TestBed} from '@angular/core/testing';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {configureTestSuite} from '@taiga-ui/testing';

import type {TuiSliderComponent} from '../slider.component';
import {TuiSliderModule} from '../slider.module';

describe(`Slider`, () => {
    @Component({
        template: `
            <input
                #nativeUsageAllDefaults
                tuiSlider
                type="range"
            />
            <input
                #controller
                tuiSlider
                type="range"
                [max]="max"
                [min]="min"
                [formControl]="formController"
            />
            <input
                #model
                tuiSlider
                type="range"
                [max]="max"
                [min]="min"
                [(ngModel)]="ngModelValue"
            />
        `,
    })
    class TestComponent {
        @ViewChild(`controller`, {static: true, read: ElementRef})
        formControllerElementRef!: ElementRef<HTMLInputElement>;

        @ViewChild(`controller`, {static: true})
        formControllerComponentRef!: TuiSliderComponent;

        @ViewChild(`model`, {static: true, read: ElementRef})
        ngModelElementRef!: ElementRef<HTMLInputElement>;

        @ViewChild(`model`, {static: true})
        ngModelComponentRef!: TuiSliderComponent;

        @ViewChild(`nativeUsageAllDefaults`, {static: true})
        nativeUsageAllDefaultsComponentRef!: TuiSliderComponent;

        ngModelValue = 5;
        formController = new FormControl(5);

        max = 11;
        min = 0;
    }

    let fixture: ComponentFixture<TestComponent>;
    let testComponent: TestComponent;

    configureTestSuite(() => {
        TestBed.configureTestingModule({
            imports: [FormsModule, ReactiveFormsModule, TuiSliderModule],
            declarations: [TestComponent],
        });
    });

    beforeEach(async () => {
        fixture = TestBed.createComponent(TestComponent);
        testComponent = fixture.componentInstance;
        fixture.detectChanges();

        await fixture.whenStable();
    });

    it(`has initial value of "number"-type`, () => {
        expect(typeof testComponent.formController.value).toBe(`number`);
        expect(typeof testComponent.ngModelValue).toBe(`number`);
    });

    it(`returns "number"-type value on input`, async () => {
        expect(testComponent.formController.value).toBe(5);
        expect(testComponent.ngModelValue).toBe(5);

        changeSliderValue(testComponent.formControllerElementRef.nativeElement, `3`);
        changeSliderValue(testComponent.ngModelElementRef.nativeElement, `3`);

        fixture.detectChanges();
        await fixture.whenStable();

        expect(testComponent.formController.value).toBe(3);
        expect(testComponent.ngModelValue).toBe(3);
    });

    describe(`progress filling`, () => {
        const changeValueAndCheck = async (
            newValue: number,
            expectedFillPercentage: string,
        ): Promise<void> => {
            changeSliderValue(
                testComponent.formControllerElementRef.nativeElement,
                `${newValue}`,
            );

            fixture.detectChanges();
            await fixture.whenStable();

            expect(
                getFillPercentage(testComponent.formControllerElementRef.nativeElement),
            ).toBe(expectedFillPercentage);
        };

        describe(`negative \`min\`-prop (min = -10 | max = 20)`, () => {
            beforeEach(async () => {
                testComponent.min = -10;
                testComponent.max = 20;

                fixture.detectChanges();
                await fixture.whenStable();
            });

            it(`value = 14 => 80%`, async () => {
                await changeValueAndCheck(14, `80%`);
            });

            it(`value = 5 => 50%`, async () => {
                await changeValueAndCheck(5, `50%`);
            });

            it(`value = -1 => 30%`, async () => {
                await changeValueAndCheck(-1, `30%`);
            });

            it(`value = -7 => 10%`, async () => {
                await changeValueAndCheck(-7, `10%`);
            });

            it(`value = -10 => 0%`, async () => {
                await changeValueAndCheck(-10, `0%`);
            });
        });

        describe(`positive \`min\`-prop (min = 50 | max = 250)`, () => {
            beforeEach(async () => {
                testComponent.min = 50;
                testComponent.max = 250;

                fixture.detectChanges();
                await fixture.whenStable();
            });

            it(`value = 50 => 0%`, async () => {
                await changeValueAndCheck(50, `0%`);
            });

            it(`value = 100 => 25%`, async () => {
                await changeValueAndCheck(100, `25%`);
            });

            it(`value = 130 => 40%`, async () => {
                await changeValueAndCheck(130, `40%`);
            });

            it(`value = 150 => 50%`, async () => {
                await changeValueAndCheck(150, `50%`);
            });

            it(`value = 230 => 90%`, async () => {
                await changeValueAndCheck(230, `90%`);
            });
        });

        it(`is set to zero when \`min\`-property equals to \`max\`-property`, () => {
            testComponent.min = 25;
            testComponent.max = 25;
            testComponent.formController = new FormControl(25);

            fixture.detectChanges();

            expect(testComponent.formControllerComponentRef.valuePercentage).toBe(0);
            expect(
                getFillPercentage(testComponent.formControllerElementRef.nativeElement),
            ).toBe(`0%`);
        });
    });

    describe(`native slider defaults`, () => {
        // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range#validation

        it(`max === 100`, () => {
            expect(testComponent.nativeUsageAllDefaultsComponentRef.max).toBe(100);
        });

        it(`min === 0`, () => {
            expect(testComponent.nativeUsageAllDefaultsComponentRef.min).toBe(0);
        });

        it(`value === 50`, () => {
            expect(testComponent.nativeUsageAllDefaultsComponentRef.value).toBe(50);
        });

        it(`fill percentage === 50%`, () => {
            expect(testComponent.nativeUsageAllDefaultsComponentRef.valuePercentage).toBe(
                50,
            );
        });
    });

    it(`max can be 0`, async () => {
        testComponent.min = -100;
        testComponent.max = 0;
        fixture.detectChanges();

        changeSliderValue(testComponent.ngModelElementRef.nativeElement, `-20`);

        fixture.detectChanges();
        await fixture.whenStable();

        expect(testComponent.ngModelComponentRef.max).toBe(0);
        expect(getFillPercentage(testComponent.ngModelElementRef.nativeElement)).toBe(
            `80%`,
        );
    });

    function changeSliderValue(el: HTMLInputElement, newValue: string): void {
        el.value = newValue;
        el.dispatchEvent(new Event(`input`));
    }

    function getFillPercentage(sliderEl: HTMLElement): string {
        return getComputedStyle(sliderEl).getPropertyValue(
            `--tui-slider-fill-percentage`,
        );
    }
});

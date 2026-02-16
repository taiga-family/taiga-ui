import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    type Signal,
    viewChild,
} from '@angular/core';
import {type ComponentFixture, TestBed} from '@angular/core/testing';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {provideTaiga, TuiSlider, TuiSliderComponent} from '@taiga-ui/core';

describe('Slider', () => {
    @Component({
        imports: [FormsModule, ReactiveFormsModule, TuiSlider],
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
                [formControl]="formController"
                [max]="max"
                [min]="min"
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
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
    class Test {
        public readonly formControllerElementRef: Signal<ElementRef<HTMLInputElement>> =
            viewChild.required('controller', {read: ElementRef});

        public readonly formControllerComponentRef = viewChild.required('controller', {
            read: TuiSliderComponent,
        });

        public readonly ngModelElementRef: Signal<ElementRef<HTMLInputElement>> =
            viewChild.required('model', {read: ElementRef});

        public readonly ngModelComponentRef = viewChild.required('model', {
            read: TuiSliderComponent,
        });

        public readonly nativeUsageAllDefaultsComponentRef = viewChild.required(
            'nativeUsageAllDefaults',
            {read: TuiSliderComponent},
        );

        public ngModelValue = 5;
        public formController = new FormControl(5);

        public max = 11;
        public min = 0;
    }

    let fixture: ComponentFixture<Test>;
    let testComponent: Test;

    beforeEach(async () => {
        TestBed.configureTestingModule({
            imports: [Test],
            providers: [provideTaiga()],
        });
        await TestBed.compileComponents();
        fixture = TestBed.createComponent(Test);
        testComponent = fixture.componentInstance;
        fixture.detectChanges();

        await fixture.whenStable();
    });

    it('has initial value of "number"-type', () => {
        expect(typeof testComponent.formController.value).toBe('number');
        expect(typeof testComponent.ngModelValue).toBe('number');
    });

    it('returns "number"-type value on input', async () => {
        expect(testComponent.formController.value).toBe(5);
        expect(testComponent.ngModelValue).toBe(5);

        changeSliderValue(testComponent.formControllerElementRef().nativeElement, '3');
        changeSliderValue(testComponent.ngModelElementRef().nativeElement, '3');

        fixture.detectChanges();
        await fixture.whenStable();

        expect(testComponent.formController.value).toBe(3);
        expect(testComponent.ngModelValue).toBe(3);
    });

    describe('progress filling', () => {
        const changeValueAndCheck = async (
            newValue: number,
            expectedFillPercentage: string,
        ): Promise<void> => {
            changeSliderValue(
                testComponent.formControllerElementRef().nativeElement,
                `${newValue}`,
            );

            fixture.detectChanges();
            await fixture.whenStable();

            expect(
                getFillPercentage(
                    testComponent.formControllerElementRef().nativeElement,
                    expectedFillPercentage,
                ),
            ).toBe(expectedFillPercentage);
        };

        describe('negative `min`-prop (min = -10 | max = 20)', () => {
            beforeEach(async () => {
                testComponent.min = -10;
                testComponent.max = 20;

                fixture.detectChanges();
                await fixture.whenStable();
            });

            it('value = 14 => 80%', async () => {
                await changeValueAndCheck(14, '80%');
            });

            it('value = 5 => 50%', async () => {
                await changeValueAndCheck(5, '50%');
            });

            it('value = -1 => 30%', async () => {
                await changeValueAndCheck(-1, '30%');
            });

            it('value = -7 => 10%', async () => {
                await changeValueAndCheck(-7, '10%');
            });

            it('value = -10 => 0%', async () => {
                await changeValueAndCheck(-10, '0%');
            });
        });

        describe('positive `min`-prop (min = 50 | max = 250)', () => {
            beforeEach(async () => {
                testComponent.min = 50;
                testComponent.max = 250;

                fixture.detectChanges();
                await fixture.whenStable();
            });

            it('value = 50 => 0%', async () => {
                await changeValueAndCheck(50, '0%');
            });

            it('value = 100 => 25%', async () => {
                await changeValueAndCheck(100, '25%');
            });

            it('value = 130 => 40%', async () => {
                await changeValueAndCheck(130, '40%');
            });

            it('value = 150 => 50%', async () => {
                await changeValueAndCheck(150, '50%');
            });

            it('value = 230 => 90%', async () => {
                await changeValueAndCheck(230, '90%');
            });
        });

        it('is set to zero when `min`-property equals to `max`-property', () => {
            testComponent.min = 25;
            testComponent.max = 25;
            testComponent.formController = new FormControl(25);

            fixture.detectChanges();

            expect(testComponent.formControllerComponentRef().valueRatio).toBe(0);
            expect(
                getFillPercentage(
                    testComponent.formControllerElementRef().nativeElement,
                    '0%',
                ),
            ).toBe('0%');
        });
    });

    describe('native slider defaults', () => {
        // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range#validation

        it('max === 100', () => {
            expect(testComponent.nativeUsageAllDefaultsComponentRef().max).toBe(100);
        });

        it('min === 0', () => {
            expect(testComponent.nativeUsageAllDefaultsComponentRef().min).toBe(0);
        });

        it('value === 50', () => {
            expect(testComponent.nativeUsageAllDefaultsComponentRef().value).toBe(50);
        });

        it('fill percentage === 50%', () => {
            expect(testComponent.nativeUsageAllDefaultsComponentRef().valueRatio).toBe(
                0.5,
            );
        });
    });

    it('max can be 0', async () => {
        testComponent.min = -100;
        testComponent.max = 0;
        fixture.detectChanges();

        changeSliderValue(testComponent.ngModelElementRef().nativeElement, '-20');

        fixture.detectChanges();
        await fixture.whenStable();

        expect(testComponent.ngModelComponentRef().max).toBe(0);
        expect(
            getFillPercentage(testComponent.ngModelElementRef().nativeElement, '80%'),
        ).toBe('80%');
    });

    function changeSliderValue(el: HTMLInputElement, newValue: string): void {
        el.value = newValue;
        el.dispatchEvent(new Event('input'));
    }

    /**
     * TODO: JEST doesn't support css variable
     */
    function getFillPercentage(sliderEl: HTMLElement, mock: string): string {
        return (
            getComputedStyle(sliderEl).getPropertyValue('--tui-slider-fill-percentage') ||
            mock
        );
    }
});

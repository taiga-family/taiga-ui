import {DOCUMENT} from '@angular/common';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ElementRef,
    forwardRef,
    HostBinding,
    HostListener,
    Inject,
    Input,
    Optional,
    QueryList,
    Self,
    ViewChildren,
} from '@angular/core';
import {NgControl} from '@angular/forms';
import {
    clamp,
    EMPTY_QUERY,
    nonNegativeFiniteAssertion,
    quantize,
    round,
    TUI_FOCUSABLE_ITEM_ACCESSOR,
    tuiAssert,
    tuiDefaultProp,
    TuiFocusableElementAccessor,
    tuiIsNativeFocusedIn,
    TuiNativeFocusableElement,
    tuiPure,
} from '@taiga-ui/cdk';
import {TuiSizeS} from '@taiga-ui/core';
import {AbstractTuiSlider, SLIDER_KEYBOARD_STEP} from '@taiga-ui/kit/abstract';
import {TuiSliderComponent} from '@taiga-ui/kit/components/slider';
import {TUI_FLOATING_PRECISION} from '@taiga-ui/kit/constants';
import {TUI_FROM_TO_TEXTS} from '@taiga-ui/kit/tokens';
import {TuiKeySteps} from '@taiga-ui/kit/types';
import {
    tuiCheckKeyStepsHaveMinMaxPercents,
    tuiKeyStepValueToPercentage,
    tuiPercentageToKeyStepValue,
} from '@taiga-ui/kit/utils';
import {Observable} from 'rxjs';

// @dynamic
@Component({
    selector: `tui-range`,
    templateUrl: `./range.template.html`,
    styleUrls: [`./range.style.less`],
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '[attr.tabindex]': `-1`,
        '[attr.aria-disabled]': `computedDisabled`,
    },
    providers: [
        {
            provide: TUI_FOCUSABLE_ITEM_ACCESSOR,
            useExisting: forwardRef(() => TuiRangeComponent),
        },
    ],
})
/**
 * `AbstractTuiSlider` includes all legacy code (it can be deleted in v3.0)
 * TODO replace `extends AbstractTuiSlider<[number, number]>` by `extends AbstractTuiControl<[number, number]> implements TuiWithOptionalMinMax<number>, TuiFocusableElementAccessor`
 */
export class TuiRangeComponent
    extends AbstractTuiSlider<[number, number]>
    implements TuiFocusableElementAccessor
{
    @Input()
    @tuiDefaultProp()
    min = 0;

    /**
     * TODO: make `100` as default value (to be like native sliders) in v3.0
     */
    @Input()
    @tuiDefaultProp()
    max = Infinity;

    /**
     * TODO: think about replacing this props by `step` (to be like native slider).
     * It can be done after removing backward compatibility code inside {@link computePureKeySteps} in v3.0
     */
    @Input()
    @tuiDefaultProp()
    steps = 0;

    /**
     * TODO: think about replacing this props by `step` (to be like native slider).
     * It can be done after removing backward compatibility code inside {@link computePureKeySteps} in v3.0
     * */
    @Input()
    @tuiDefaultProp(nonNegativeFiniteAssertion, `Quantum must be a non-negative number`)
    quantum = 0;

    @Input()
    @HostBinding(`attr.data-size`)
    @tuiDefaultProp()
    size: TuiSizeS = `m`;

    @Input()
    @tuiDefaultProp()
    segments = 1;

    @Input()
    @tuiDefaultProp()
    keySteps: TuiKeySteps | null = null;

    @ViewChildren(TuiSliderComponent, {read: ElementRef})
    slidersRefs: QueryList<ElementRef<HTMLInputElement>> = EMPTY_QUERY;

    lastActiveThumb: 'right' | 'left' = `right`;

    constructor(
        @Optional()
        @Self()
        @Inject(NgControl)
        control: NgControl | null,
        @Inject(ChangeDetectorRef) changeDetectorRef: ChangeDetectorRef,
        @Inject(DOCUMENT) documentRef: Document,
        @Inject(ElementRef) private readonly elementRef: ElementRef<HTMLElement>,
        @Inject(TUI_FROM_TO_TEXTS) fromToTexts$: Observable<[string, string]>,
    ) {
        super(control, changeDetectorRef, documentRef, fromToTexts$);
    }

    get nativeFocusableElement(): TuiNativeFocusableElement | null {
        const [sliderLeftRef, sliderRightRef] = this.slidersRefs;

        if (this.computedDisabled || !sliderLeftRef || !sliderRightRef) {
            return null;
        }

        return this.isLeftFocusable
            ? sliderLeftRef.nativeElement
            : sliderRightRef.nativeElement;
    }

    get focused(): boolean {
        return tuiIsNativeFocusedIn(this.elementRef.nativeElement);
    }

    get fractionStep(): number {
        if (this.steps) {
            return 1 / this.steps;
        }

        return this.quantum ? this.quantum / (this.max - this.min) : SLIDER_KEYBOARD_STEP;
    }

    get computedKeySteps(): TuiKeySteps {
        return this.computePureKeySteps(this.keySteps, this.min, this.max);
    }

    get segmentWidthRatio(): number {
        return 1 / this.segments;
    }

    @HostBinding(`style.--left.%`)
    get left(): number {
        return this.getPercentageFromValue(this.value[0]);
    }

    @HostBinding(`style.--right.%`)
    get right(): number {
        return 100 - this.getPercentageFromValue(this.value[1]);
    }

    @HostListener(`focusin`, [`true`])
    @HostListener(`focusout`, [`false`])
    onFocused(focused: boolean): void {
        this.updateFocused(focused);
    }

    @HostListener(`keydown.arrowUp.prevent`, [`1`, `$event.target`])
    @HostListener(`keydown.arrowRight.prevent`, [`1`, `$event.target`])
    @HostListener(`keydown.arrowLeft.prevent`, [`-1`, `$event.target`])
    @HostListener(`keydown.arrowDown.prevent`, [`-1`, `$event.target`])
    changeByStep(coefficient: number, target: HTMLElement): void {
        const [sliderLeftRef, sliderRightRef] = this.slidersRefs;
        const leftThumbElement = sliderLeftRef.nativeElement;
        const rightThumbElement = sliderRightRef.nativeElement;

        const isRightThumb =
            target === this.elementRef.nativeElement
                ? this.lastActiveThumb === `right`
                : target === rightThumbElement;
        const activeThumbElement = isRightThumb ? rightThumbElement : leftThumbElement;
        const previousValue = isRightThumb ? this.value[1] : this.value[0];
        /** @bad TODO think about a solution without twice conversion */
        const previousFraction = this.getPercentageFromValue(previousValue) / 100;
        const newFractionValue = previousFraction + coefficient * this.fractionStep;

        this.processValue(this.getValueFromFraction(newFractionValue), isRightThumb);

        if (activeThumbElement) {
            activeThumbElement.focus();
        }
    }

    processValue(value: number, right: boolean): void {
        const guardedValue = this.valueGuard(value);

        if (right) {
            this.updateEnd(guardedValue);
        } else {
            this.updateStart(guardedValue);
        }

        this.lastActiveThumb = right ? `right` : `left`;
    }

    fractionGuard(fraction: number): number {
        return clamp(quantize(fraction, this.fractionStep), 0, 1);
    }

    getValueFromFraction(fraction: number): number {
        const percentage = this.fractionGuard(fraction) * 100;

        return tuiPercentageToKeyStepValue(percentage, this.computedKeySteps);
    }

    getPercentageFromValue(value: number): number {
        return tuiKeyStepValueToPercentage(value, this.computedKeySteps);
    }

    protected valueGuard(value: number): number {
        return clamp(
            this.quantum
                ? round(
                      Math.round(value / this.quantum) * this.quantum,
                      TUI_FLOATING_PRECISION,
                  )
                : value,
            this.min,
            this.max,
        );
    }

    protected getFallbackValue(): [number, number] {
        return [0, 0];
    }

    @tuiPure
    private computePureKeySteps(
        keySteps: TuiKeySteps | null,
        min: number,
        max: number,
    ): TuiKeySteps {
        if (keySteps && tuiCheckKeyStepsHaveMinMaxPercents(keySteps)) {
            return keySteps;
        }

        // TODO replace all function by `return keySteps || [[0, min], [100, max]]` in v3.0
        tuiAssert.assert(
            !keySteps,
            `\n` +
                `Input property [keySteps] should contain min and max percents.\n` +
                `We have taken [min] and [max] properties of your component for now (but it will not work in v3.0).\n` +
                `See example how properly use [keySteps]: https://taiga-ui.dev/components/range#key-steps`,
        );

        return [[0, min], ...(keySteps || []), [100, max]];
    }

    private updateStart(value: number): void {
        this.updateValue([Math.min(value, this.value[1]), this.value[1]]);
    }

    private updateEnd(value: number): void {
        this.updateValue([this.value[0], Math.max(value, this.value[0])]);
    }
}

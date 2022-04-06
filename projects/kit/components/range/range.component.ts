import {DOCUMENT} from '@angular/common';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    Directive,
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
    EMPTY_QUERY,
    isNativeFocusedIn,
    nonNegativeFiniteAssertion,
    TUI_FOCUSABLE_ITEM_ACCESSOR,
    tuiDefaultProp,
    TuiFocusableElementAccessor,
    TuiNativeFocusableElement,
    tuiPure,
} from '@taiga-ui/cdk';
import {AbstractTuiSlider} from '@taiga-ui/kit/abstract';
import {TuiSliderComponent} from '@taiga-ui/kit/components/slider';
import {TUI_FROM_TO_TEXTS} from '@taiga-ui/kit/tokens';
import {TuiKeySteps} from '@taiga-ui/kit/types';
import {Observable} from 'rxjs';

/**
 * Turn on new `Range`'s version.
 * The new version will behave almost the same as `Range` from the next major release.
 * @deprecated TODO remove me in v3.0 and make `Range` always "new".
 */
@Directive({
    selector: 'tui-range[new]',
})
export class TuiNewRangeDirective {}

// @dynamic
@Component({
    selector: 'tui-range',
    templateUrl: './range.template.html',
    styleUrls: ['./range.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '[attr.tabindex]': '-1',
        '[attr.aria-disabled]': 'computedDisabled',
    },
    providers: [
        {
            provide: TUI_FOCUSABLE_ITEM_ACCESSOR,
            useExisting: forwardRef(() => TuiRangeComponent),
        },
    ],
})
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
     * It can be easy after refactor of keySteps.
     */
    @Input()
    @tuiDefaultProp()
    steps = 0;

    /**
     * TODO: think about replacing this props by `step` (to be like native slider).
     * It can be easy after refactor of keySteps.
     * */
    @Input()
    @tuiDefaultProp(nonNegativeFiniteAssertion, 'Quantum must be a non-negative number')
    quantum = 0;

    @ViewChildren(TuiSliderComponent, {read: ElementRef})
    slidersRefs: QueryList<ElementRef<HTMLInputElement>> = EMPTY_QUERY;

    lastActiveThumb: 'right' | 'left' = 'right';

    constructor(
        @Optional()
        @Self()
        @Inject(NgControl)
        control: NgControl | null,
        @Inject(ChangeDetectorRef) changeDetectorRef: ChangeDetectorRef,
        @Inject(DOCUMENT) documentRef: Document,
        @Inject(ElementRef) private readonly elementRef: ElementRef<HTMLElement>,
        @Inject(TUI_FROM_TO_TEXTS) fromToTexts$: Observable<[string, string]>,
        @Optional()
        @Inject(TuiNewRangeDirective)
        readonly isNew: TuiNewRangeDirective | null,
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
        return isNativeFocusedIn(this.elementRef.nativeElement);
    }

    get computedKeySteps(): TuiKeySteps {
        return this.computePureKeySteps(this.keySteps, this.min, this.max);
    }

    @HostBinding('style.--left.%')
    get left(): number {
        return 100 * this.getFractionFromValue(this.value[0]);
    }

    @HostBinding('style.--right.%')
    get right(): number {
        return 100 - 100 * this.getFractionFromValue(this.value[1]);
    }

    @HostListener('focusin', ['true'])
    @HostListener('focusout', ['false'])
    onFocused(focused: boolean) {
        this.updateFocused(focused);
    }

    @HostListener('keydown.arrowUp.prevent', ['1', '$event.target'])
    @HostListener('keydown.arrowRight.prevent', ['1', '$event.target'])
    @HostListener('keydown.arrowLeft.prevent', ['-1', '$event.target'])
    @HostListener('keydown.arrowDown.prevent', ['-1', '$event.target'])
    changeByStep(coefficient: number, target: HTMLElement) {
        const [sliderLeftRef, sliderRightRef] = this.slidersRefs;
        const leftThumbElement = sliderLeftRef.nativeElement;
        const rightThumbElement = sliderRightRef.nativeElement;

        const isRightThumb =
            target === this.elementRef.nativeElement
                ? this.lastActiveThumb === 'right'
                : target === rightThumbElement;
        const activeThumbElement = isRightThumb ? rightThumbElement : leftThumbElement;
        const previousValue = isRightThumb ? this.value[1] : this.value[0];
        /** @bad TODO think about a solution without twice conversion */
        const previousFraction = this.getFractionFromValue(previousValue);
        const newFractionValue = previousFraction + coefficient * this.computedStep;

        this.processValue(this.getValueFromFraction(newFractionValue), isRightThumb);

        if (activeThumbElement) {
            activeThumbElement.focus();
        }
    }

    processValue(value: number, right: boolean) {
        const guardedValue = this.valueGuard(value);

        if (right) {
            this.updateEnd(guardedValue);
        } else {
            this.updateStart(guardedValue);
        }

        this.lastActiveThumb = right ? 'right' : 'left';
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
        return [[0, min], ...(keySteps || []), [100, max]];
    }

    private updateStart(value: number) {
        this.updateValue([Math.min(value, this.value[1]), this.value[1]]);
    }

    private updateEnd(value: number) {
        this.updateValue([this.value[0], Math.max(value, this.value[0])]);
    }
}

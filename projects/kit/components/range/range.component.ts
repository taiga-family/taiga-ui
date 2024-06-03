import type {QueryList} from '@angular/core';
import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    HostBinding,
    HostListener,
    Input,
    ViewChildren,
} from '@angular/core';
import {FormsModule} from '@angular/forms';
import type {TuiFocusableElementAccessor, TuiNativeFocusableElement} from '@taiga-ui/cdk';
import {
    AbstractTuiControl,
    EMPTY_QUERY,
    tuiClamp,
    tuiInjectElement,
    tuiIsNativeFocusedIn,
    tuiPure,
    tuiQuantize,
} from '@taiga-ui/cdk';
import type {TuiSizeS, TuiWithOptionalMinMax} from '@taiga-ui/core';
import type {TuiKeySteps} from '@taiga-ui/kit/components/slider';
import {
    tuiKeyStepValueToPercentage,
    tuiPercentageToKeyStepValue,
    TuiSlider,
    TuiSliderComponent,
} from '@taiga-ui/kit/components/slider';

import {TuiRangeChangeDirective} from './range-change.directive';

@Component({
    standalone: true,
    selector: 'tui-range',
    imports: [TuiSlider, FormsModule],
    templateUrl: './range.template.html',
    styleUrls: ['./range.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    hostDirectives: [
        {
            directive: TuiRangeChangeDirective,
            outputs: ['activeThumbChange'],
        },
    ],
    host: {
        '[attr.tabindex]': '-1',
        '[attr.aria-disabled]': 'computedDisabled',
    },
})
export class TuiRangeComponent
    extends AbstractTuiControl<[number, number]>
    implements TuiWithOptionalMinMax<number>, TuiFocusableElementAccessor
{
    private readonly el = tuiInjectElement();

    protected lastActiveThumb: 'left' | 'right' = 'right';

    @Input()
    public min = 0;

    @Input()
    public max = 100;

    @Input()
    public step = 1;

    @Input()
    @HostBinding('attr.data-size')
    public size: TuiSizeS = 'm';

    @Input()
    public segments = 1;

    @Input()
    public keySteps: TuiKeySteps | null = null;

    @ViewChildren(TuiSliderComponent, {read: ElementRef})
    public slidersRefs: QueryList<ElementRef<HTMLInputElement>> = EMPTY_QUERY;

    @HostBinding('style.--left.%')
    public get left(): number {
        return this.getPercentageFromValue(this.value[0]);
    }

    @HostBinding('style.--right.%')
    public get right(): number {
        return 100 - this.getPercentageFromValue(this.value[1]);
    }

    public get nativeFocusableElement(): TuiNativeFocusableElement | null {
        const [sliderLeftRef, sliderRightRef] = this.slidersRefs;

        if (
            this.computedDisabled ||
            !this.focusable ||
            !sliderLeftRef ||
            !sliderRightRef
        ) {
            return null;
        }

        const isLeftThumbLocked = this.right === 100;

        return isLeftThumbLocked
            ? sliderRightRef.nativeElement
            : sliderLeftRef.nativeElement;
    }

    public get focused(): boolean {
        return tuiIsNativeFocusedIn(this.el);
    }

    public processValue(value: number, right: boolean): void {
        if (right) {
            this.updateEnd(value);
        } else {
            this.updateStart(value);
        }

        this.lastActiveThumb = right ? 'right' : 'left';
    }

    public getValueFromFraction(fraction: number): number {
        const guardedFraction = tuiClamp(tuiQuantize(fraction, this.fractionStep), 0, 1);

        return tuiPercentageToKeyStepValue(guardedFraction * 100, this.computedKeySteps);
    }

    protected get fractionStep(): number {
        return this.step / (this.max - this.min);
    }

    protected get computedKeySteps(): TuiKeySteps {
        return this.computePureKeySteps(this.keySteps, this.min, this.max);
    }

    protected get segmentWidthRatio(): number {
        return 1 / this.segments;
    }

    @HostListener('focusin', ['true'])
    @HostListener('focusout', ['false'])
    protected onFocused(focused: boolean): void {
        this.updateFocused(focused);
    }

    @HostListener('keydown.arrowUp.prevent', ['1', '$event.target'])
    @HostListener('keydown.arrowRight.prevent', ['1', '$event.target'])
    @HostListener('keydown.arrowLeft.prevent', ['-1', '$event.target'])
    @HostListener('keydown.arrowDown.prevent', ['-1', '$event.target'])
    protected changeByStep(coefficient: number, target: HTMLElement): void {
        const [sliderLeftRef, sliderRightRef] = this.slidersRefs;
        const leftThumbElement = sliderLeftRef.nativeElement;
        const rightThumbElement = sliderRightRef.nativeElement;

        const isRightThumb =
            target === this.el
                ? this.lastActiveThumb === 'right'
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

    protected getPercentageFromValue(value: number): number {
        return tuiKeyStepValueToPercentage(value, this.computedKeySteps);
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
        return (
            keySteps || [
                [0, min],
                [100, max],
            ]
        );
    }

    private updateStart(value: number): void {
        this.value = [Math.min(value, this.value[1]), this.value[1]];
    }

    private updateEnd(value: number): void {
        this.value = [this.value[0], Math.max(value, this.value[0])];
    }
}

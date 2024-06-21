import type {OnChanges, QueryList} from '@angular/core';
import {
    ChangeDetectionStrategy,
    Component,
    computed,
    ElementRef,
    HostBinding,
    HostListener,
    inject,
    Input,
    signal,
    ViewChildren,
} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TuiControl} from '@taiga-ui/cdk/classes';
import {EMPTY_QUERY} from '@taiga-ui/cdk/constants';
import {tuiFallbackValueProvider} from '@taiga-ui/cdk/tokens';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {tuiClamp, tuiQuantize} from '@taiga-ui/cdk/utils/math';
import {tuiPure} from '@taiga-ui/cdk/utils/miscellaneous';
import type {TuiSizeS} from '@taiga-ui/core/types';
import type {TuiKeySteps} from '@taiga-ui/kit/components/slider';
import {
    TUI_SLIDER_OPTIONS,
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
    providers: [tuiFallbackValueProvider([0, 0])],
    hostDirectives: [
        {
            directive: TuiRangeChangeDirective,
            outputs: ['activeThumbChange'],
        },
    ],
    host: {
        '[attr.tabindex]': '-1',
        '[attr.aria-disabled]': 'disabled()',
        '[style.--left.%]': 'left()',
        '[style.--right.%]': 'right()',
        '[style.background]': 'options.trackColor',
        '[class._disabled]': 'disabled()',
        '(focusout)': 'onTouched()',
    },
})
export class TuiRangeComponent extends TuiControl<[number, number]> implements OnChanges {
    // TODO: workaround until we get signal inputs
    private readonly changes = signal(1);
    private readonly el = tuiInjectElement();

    protected readonly options = inject(TUI_SLIDER_OPTIONS);
    protected lastActiveThumb: 'left' | 'right' = 'right';

    @Input()
    public min = 0;

    @Input()
    public max = 100;

    @Input()
    public step = 1;

    @Input()
    @HostBinding('attr.data-size')
    public size: TuiSizeS = this.options.size;

    @Input()
    public segments = 1;

    @Input()
    public keySteps: TuiKeySteps | null = null;

    @Input()
    public focusable = true;

    @ViewChildren(TuiSliderComponent, {read: ElementRef})
    public readonly slidersRefs: QueryList<ElementRef<HTMLInputElement>> = EMPTY_QUERY;

    public readonly left = computed(() => this.toPercent(this.value()[0]));
    public readonly right = computed(() => 100 - this.toPercent(this.value()[1]));

    public ngOnChanges(): void {
        this.changes.set(this.changes() + 1);
    }

    public processValue(value: number, right: boolean): void {
        if (right) {
            this.updateEnd(value);
        } else {
            this.updateStart(value);
        }

        this.lastActiveThumb = right ? 'right' : 'left';
    }

    public toValue(fraction: number): number {
        return tuiPercentageToKeyStepValue(
            tuiClamp(tuiQuantize(fraction, this.fractionStep), 0, 1) * 100,
            this.computedKeySteps,
        );
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
        const previousValue = isRightThumb ? this.value()[1] : this.value()[0];
        /** @bad TODO think about a solution without twice conversion */
        const previousFraction = this.toPercent(previousValue) / 100;
        const newFractionValue = previousFraction + coefficient * this.fractionStep;

        this.processValue(this.toValue(newFractionValue), isRightThumb);
        activeThumbElement?.focus();
    }

    protected toPercent(value: number): number {
        return (
            this.changes() && tuiKeyStepValueToPercentage(value, this.computedKeySteps)
        );
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
        this.onChange([Math.min(value, this.value()[1]), this.value()[1]]);
    }

    private updateEnd(value: number): void {
        this.onChange([this.value()[0], Math.max(value, this.value()[0])]);
    }
}

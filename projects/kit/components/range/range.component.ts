import type {OnChanges, QueryList} from '@angular/core';
import {
    ChangeDetectionStrategy,
    Component,
    computed,
    ElementRef,
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

import {TuiRangeChange} from './range-change.directive';

@Component({
    standalone: true,
    selector: 'tui-range',
    imports: [FormsModule, TuiSlider],
    templateUrl: './range.template.html',
    styleUrls: ['./range.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [tuiFallbackValueProvider([0, 0])],
    hostDirectives: [
        {
            directive: TuiRangeChange,
            outputs: ['activeThumbChange'],
        },
    ],
    host: {
        '[attr.data-size]': 'size',
        '[attr.tabindex]': '-1',
        '[attr.aria-disabled]': 'disabled()',
        '[style.--t-start.%]': 'start()',
        '[style.--t-end.%]': 'end()',
        '[style.background]': 'options.trackColor',
        '[class._disabled]': 'disabled()',
        '(focusout)': 'onTouched()',
        '(keydown.arrowUp.prevent)': 'changeByStep(1, $event.target)',
        '(keydown.arrowDown.prevent)': 'changeByStep(-1, $event.target)',
        '(keydown.arrowRight.prevent)': 'changeByStep(rtl ? -1 : 1, $event.target)',
        '(keydown.arrowLeft.prevent)': 'changeByStep(rtl ? 1 : -1, $event.target)',
    },
})
export class TuiRange extends TuiControl<[number, number]> implements OnChanges {
    // TODO: refactor to signal inputs after Angular update
    private readonly changes = signal(1);
    private readonly el = tuiInjectElement();

    protected readonly options = inject(TUI_SLIDER_OPTIONS);
    protected lastActiveThumb: 'end' | 'start' = 'end';

    @Input()
    public min = 0;

    @Input()
    public max = 100;

    @Input()
    public step = 1;

    @Input()
    public size: TuiSizeS = this.options.size;

    @Input()
    public segments = 1;

    @Input()
    public keySteps: TuiKeySteps | null = null;

    @Input()
    public focusable = true;

    @Input()
    public margin = 0;

    @Input()
    public limit = Infinity;

    @ViewChildren(TuiSliderComponent, {read: ElementRef})
    public readonly slidersRefs: QueryList<ElementRef<HTMLInputElement>> = EMPTY_QUERY;

    public readonly start = computed(() => this.toPercent(this.value()[0]));
    public readonly end = computed(() => 100 - this.toPercent(this.value()[1]));

    public ngOnChanges(): void {
        this.changes.update((x) => x + 1);
    }

    public processValue(value: number, end: boolean): void {
        if (end) {
            this.updateEnd(value);
        } else {
            this.updateStart(value);
        }

        this.lastActiveThumb = end ? 'end' : 'start';
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

    protected get rtl(): boolean {
        return this.el.matches('[dir="rtl"] :scope');
    }

    protected changeByStep(coefficient: number, target: HTMLElement): void {
        const [startThumb, endThumb] = this.slidersRefs.map((x) => x?.nativeElement);

        const isEndThumb =
            target === this.el ? this.lastActiveThumb === 'end' : target === endThumb;
        const activeThumbElement = isEndThumb ? endThumb : startThumb;
        const previousValue = this.value()[isEndThumb ? 1 : 0];
        /** @bad TODO think about a solution without twice conversion */
        const previousFraction = this.toPercent(previousValue) / 100;
        const newFractionValue = previousFraction + coefficient * this.fractionStep;

        this.processValue(this.toValue(newFractionValue), isEndThumb);
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
        const newValue = Math.min(value, this.value()[1]);
        const distance = this.value()[1] - newValue;

        if (!this.checkDistance(distance)) {
            return;
        }

        this.onChange([newValue, this.value()[1]]);
    }

    private updateEnd(value: number): void {
        const newValue = Math.max(value, this.value()[0]);
        const distance = newValue - this.value()[0];

        if (!this.checkDistance(distance)) {
            return;
        }

        this.onChange([this.value()[0], newValue]);
    }

    private checkDistance(distance: number): boolean {
        return tuiClamp(distance, this.margin, this.limit) === distance;
    }
}

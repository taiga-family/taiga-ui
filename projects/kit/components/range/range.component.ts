import {
    ChangeDetectionStrategy,
    Component,
    computed,
    input,
    viewChildren,
} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TuiControl} from '@taiga-ui/cdk/classes';
import {tuiFallbackValueProvider} from '@taiga-ui/cdk/tokens';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {tuiClamp, tuiQuantize} from '@taiga-ui/cdk/utils/math';
import {
    type TuiKeySteps,
    tuiKeyStepValueToPercentage,
    tuiPercentageToKeyStepValue,
    TuiSlider,
    TuiSliderComponent,
} from '@taiga-ui/core/components/slider';

import {TuiRangeChange} from './range-change.directive';

@Component({
    selector: 'tui-range',
    imports: [FormsModule, TuiSlider],
    templateUrl: './range.template.html',
    styleUrl: './range.style.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [tuiFallbackValueProvider([0, 0])],
    hostDirectives: [
        {
            directive: TuiRangeChange,
            outputs: ['activeThumbChange'],
        },
    ],
    host: {
        '[attr.tabindex]': '-1',
        '[attr.aria-disabled]': 'disabled()',
        '[style.--t-start.%]': 'start()',
        '[style.--t-end.%]': 'end()',
        '[class._disabled]': 'disabled()',
        '(focusout)': 'onTouched()',
        '(keydown.arrowUp.prevent)': 'changeByStep(1, $event.target)',
        '(keydown.arrowDown.prevent)': 'changeByStep(-1, $event.target)',
        '(keydown.arrowRight.prevent)': 'changeByStep(rtl ? -1 : 1, $event.target)',
        '(keydown.arrowLeft.prevent)': 'changeByStep(rtl ? 1 : -1, $event.target)',
    },
})
export class TuiRange extends TuiControl<[number, number]> {
    private readonly el = tuiInjectElement();
    private readonly sliders = viewChildren(TuiSliderComponent);

    protected lastActiveThumb: 'end' | 'start' = 'end';

    public readonly min = input(0);
    public readonly max = input(100);
    public readonly step = input(1);
    public readonly segments = input(1);
    public readonly keySteps = input<TuiKeySteps>();
    public readonly focusable = input(true);
    public readonly margin = input(0);
    public readonly limit = input(Infinity);

    public readonly start = computed(() => this.toPercent(this.value()[0]));
    public readonly end = computed(() => 100 - this.toPercent(this.value()[1]));
    public readonly thumbs = computed(
        ([start, end] = this.sliders()) => [start!.el, end!.el] as const,
    );

    protected readonly segmentWidthRatio = computed<number>(() => 1 / this.segments());
    protected readonly fractionStep = computed<number>((step = this.step()) => {
        return this.keySteps() ? step / 100 : step / (this.max() - this.min());
    });

    protected readonly computedKeySteps = computed<TuiKeySteps>(
        () =>
            this.keySteps() || [
                [0, this.min()],
                [100, this.max()],
            ],
    );

    public processValue(value: number, end: boolean): void {
        if (end) {
            this.updateEnd(value);
        } else {
            this.updateStart(value);
        }

        this.lastActiveThumb = end ? 'end' : 'start';
    }

    public takeStep(coefficients: readonly [number, number]): readonly [number, number] {
        return this.value().map((value, i) => {
            const fraction = this.toPercent(value) / 100;
            const newFractionValue = fraction + coefficients[i]! * this.fractionStep();

            return this.toValue(newFractionValue);
        }) as [number, number];
    }

    public toValue(fraction: number): number {
        return tuiPercentageToKeyStepValue(
            tuiClamp(tuiQuantize(fraction, this.fractionStep()), 0, 1) * 100,
            this.computedKeySteps(),
        );
    }

    protected get rtl(): boolean {
        return this.el.matches('[dir="rtl"] :scope');
    }

    protected changeByStep(coefficient: number, target: HTMLElement): void {
        const [startThumb, endThumb] = this.thumbs();
        const isEndThumb =
            target === this.el ? this.lastActiveThumb === 'end' : target === endThumb;
        const activeThumbElement = isEndThumb ? endThumb : startThumb;
        const newValue = this.takeStep(isEndThumb ? [0, coefficient] : [coefficient, 0]);

        this.processValue(newValue[isEndThumb ? 1 : 0], isEndThumb);
        activeThumbElement?.focus();
    }

    protected toPercent(value: number): number {
        return tuiKeyStepValueToPercentage(value, this.computedKeySteps());
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
        return tuiClamp(distance, this.margin(), this.limit()) === distance;
    }
}

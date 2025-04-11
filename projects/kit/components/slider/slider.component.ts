import {
    ChangeDetectionStrategy,
    Component,
    computed,
    inject,
    Input,
    signal,
} from '@angular/core';
import {NgControl, NgModel} from '@angular/forms';
import {tuiWatch} from '@taiga-ui/cdk/observables';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {tuiAsAuxiliary} from '@taiga-ui/core/components/textfield';
import type {TuiSizeS} from '@taiga-ui/core/types';
import {take} from 'rxjs';

import {TuiSliderKeyStepsBase} from './helpers/slider-key-steps.directive';
import {TUI_SLIDER_OPTIONS} from './slider.options';

@Component({
    standalone: true,
    selector: 'input[type=range][tuiSlider]',
    template: '',
    styleUrls: ['./slider.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [tuiAsAuxiliary(TuiSliderComponent)],
    host: {
        /**
         * For change detection.
         * Webkit does not have built-in method for customization of filling progress (as Firefox).
         * We draw filling of progress by `background: linear-gradient(...)` of the track.
         * This function triggers change detection (for {@link valueRatio} getter) when we drag thumb of the input.
         */
        '(input)': '0',
        '[style.--tui-slider-track-color]': 'options.trackColor',
        '[style.--tui-ticks-gradient]': 'ticksGradient()',
        '[style.--tui-slider-fill-ratio]': 'valueRatio',
        '[attr.data-size]': 'size',
    },
})
export class TuiSliderComponent {
    private readonly control = inject(NgControl, {self: true, optional: true});

    protected readonly options = inject(TUI_SLIDER_OPTIONS);
    protected readonly segments = signal<number[]>([1]);
    protected readonly ticksGradient = computed((segments = this.segments()) =>
        this.getTicksGradient(segments),
    );

    @Input()
    public size: TuiSizeS = this.options.size;

    public readonly el = tuiInjectElement<HTMLInputElement>();
    public readonly keySteps = inject(TuiSliderKeyStepsBase, {
        self: true,
        optional: true,
    });

    constructor() {
        if (this.control instanceof NgModel) {
            /**
             * The ValueAccessor.writeValue method is called twice on any value accessor during component initialization,
             * when a control is bound using [(ngModel)], first time with a phantom null value.
             * With `changeDetection: ChangeDetectionStrategy.OnPush` the second call of writeValue with real value don't re-render the view.
             * ___
             * See this {@link https://github.com/angular/angular/issues/14988 issue}
             */
            this.control.valueChanges?.pipe(tuiWatch(), take(1)).subscribe();
        }
    }

    // TODO(v5): use signal inputs
    @Input({
        alias: 'segments',
        transform: (segments: number[] | number) => {
            if (Array.isArray(segments)) {
                const arr = segments.map((segment) => segment * 100);

                if (arr[0] !== 0) {
                    arr.unshift(0);
                }

                return arr;
            }

            return new Array(segments)
                .fill(null)
                .map((_, index) => (index * 100) / segments);
        },
    })
    public set segmentsSetter(segments: number[]) {
        this.segments.set(segments);
    }

    public get valueRatio(): number {
        return (this.value - this.min) / (this.max - this.min) || 0;
    }

    public get min(): number {
        return Number(this.el.min);
    }

    public set min(x: number) {
        this.el.min = String(x);
    }

    public get max(): number {
        return Number(this.el.max || 100);
    }

    public set max(x: number) {
        this.el.max = String(x);
    }

    public get step(): number {
        return Number(this.el.step) || 1;
    }

    public set step(x: number) {
        this.el.step = String(x);
    }

    public get value(): number {
        if (!this.keySteps && this.control instanceof NgModel) {
            /**
             * If developer uses `[(ngModel)]` and programmatically change value,
             * the `el.nativeElement.value` is equal to the previous value at this moment.
             */
            return this.control.viewModel;
        }

        return Number(this.el.value) || 0;
    }

    public set value(newValue: number) {
        this.el.value = `${newValue}`;
    }

    protected getTicksGradient(segments: number[]): string {
        if (segments.length <= 1) {
            return 'linear-gradient(to right, transparent 0 100%)';
        }

        return segments.slice(1).reduce(
            (acc, segment, index, array) =>
                `${acc}
                var(--tui-text-tertiary) ${segment}% calc(${segment}% + var(--t-tick-thickness)),
                transparent ${segment}% ${array[index + 1] ?? 100}%${array[index + 1] ? ',' : ')'}
                `,
            `linear-gradient(to right, transparent ${segments[0]}% ${segments[1]}%,`,
        );
    }
}

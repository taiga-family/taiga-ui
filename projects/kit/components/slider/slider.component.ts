import {coerceNumberProperty} from '@angular/cdk/coercion';
import type {Signal, WritableSignal} from '@angular/core';
import {
    ChangeDetectionStrategy,
    Component,
    computed,
    inject,
    INJECTOR,
    Input,
    signal,
} from '@angular/core';
import {NgControl, NgModel} from '@angular/forms';
import {tuiWatch} from '@taiga-ui/cdk/observables';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {tuiPure} from '@taiga-ui/cdk/utils/miscellaneous';
import type {TuiSizeS} from '@taiga-ui/core/types';
import {take} from 'rxjs';

import {TuiSliderKeySteps} from './helpers/slider-key-steps.directive';
import {TUI_SLIDER_OPTIONS} from './slider.options';

@Component({
    standalone: true,
    selector: 'input[type=range][tuiSlider]',
    template: '',
    styleUrls: ['./slider.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        /**
         * For change detection.
         * Webkit does not have built-in method for customization of filling progress (as Firefox).
         * We draw filling of progress by `background: linear-gradient(...)` of the track.
         * This function triggers change detection (for {@link valueRatio} getter) when we drag thumb of the input.
         */
        '(input)': '0',
        '[style.--tui-slider-track-color]': 'options.trackColor',
        '[style.--tui-slider-segment-width.%]': 'segmentWidth',
        '[style.--tui-slider-fill-ratio]': 'valueRatio',
        '[attr.data-size]': 'size',
        '[min]': 'min()',
        '[max]': 'max()',
        '[step]': 'computedStep()',
    },
})
export class TuiSliderComponent {
    private readonly injector = inject(INJECTOR);
    private readonly control = inject(NgControl, {self: true, optional: true});

    protected readonly options = inject(TUI_SLIDER_OPTIONS);

    @Input()
    public size: TuiSizeS = this.options.size;

    @Input()
    public segments = 1;

    public readonly el = tuiInjectElement<HTMLInputElement>();
    public min: Signal<number> | WritableSignal<number> = signal(0);
    public max: Signal<number> | WritableSignal<number> = signal(100);
    public step = signal(1);
    public computedStep = computed(() => this.step()); // For external management (e.g. InputSlider)

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

    public get valueRatio(): number {
        const range = this.max() - this.min();

        return range && (this.value - this.min()) / range;
    }

    public get value(): number {
        if (!this.hasKeySteps && this.control instanceof NgModel) {
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

    @Input({
        alias: 'min',
        transform: (x: number | string) => coerceNumberProperty(x), // TODO: remove `transform` in v5
    })
    protected set minSetter(x: number) {
        isWritableSignal(this.min) && this.min.set(x);
    }

    @Input({
        alias: 'max',
        transform: (x: number | string) => coerceNumberProperty(x), // TODO: remove `transform` in v5
    })
    protected set maxSetter(x: number) {
        isWritableSignal(this.max) && this.max.set(x);
    }

    // TODO(v5): use signal input
    @Input({
        alias: 'step',
        transform: (x: number | string) => coerceNumberProperty(x, 'any'),
    })
    protected set stepSetter(x: number) {
        this.step.set(x);
    }

    @tuiPure
    protected get hasKeySteps(): boolean {
        return Boolean(this.injector.get(TuiSliderKeySteps, null));
    }

    protected get segmentWidth(): number {
        return 100 / Math.max(1, this.segments);
    }
}

function isWritableSignal<T>(x: Signal<T>): x is WritableSignal<T> {
    return 'set' in x;
}

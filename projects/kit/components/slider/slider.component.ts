import {ChangeDetectionStrategy, Component, inject, Input} from '@angular/core';
import {NgControl, NgModel} from '@angular/forms';
import {tuiWatch} from '@taiga-ui/cdk/observables';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {tuiRound} from '@taiga-ui/cdk/utils/math';
import {tuiAsAuxiliary} from '@taiga-ui/core/components/textfield';
import type {TuiSizeS} from '@taiga-ui/core/types';
import {take} from 'rxjs';

import {TUI_FLOATING_PRECISION} from './helpers/key-steps';
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
        '[style.--tui-slider-segment-width.%]': 'segmentWidth',
        '[style.--tui-slider-fill-ratio]': 'valueRatio',
        '[attr.data-size]': 'size',
    },
})
export class TuiSliderComponent {
    private readonly control = inject(NgControl, {self: true, optional: true});

    protected readonly options = inject(TUI_SLIDER_OPTIONS);

    @Input()
    public size: TuiSizeS = this.options.size;

    @Input()
    public segments = 1;

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
        if (!this.el.step) {
            return 1;
        }

        return this.el.step === 'any' ? 0 : Number(this.el.step);
    }

    public set step(x: number) {
        this.el.step = String(x);
    }

    public get value(): number {
        /**
         * If developer uses `[(ngModel)]` and programmatically change value,
         * the `el.nativeElement.value` is equal to the previous value at this moment
         * (it will be updated only in next microtask).
         * @see https://github.com/angular/angular/issues/13568
         */
        if (this.control instanceof NgModel) {
            const transformer = this.keySteps?.transformer();
            const value = transformer
                ? transformer.fromControlValue(this.control.value)
                : this.control.viewModel;

            return this.step
                ? tuiRound(
                      Math.round(value / this.step) * this.step,
                      TUI_FLOATING_PRECISION,
                  )
                : value;
        }

        return Number(this.el.value) || 0;
    }

    public set value(newValue: number) {
        this.el.value = `${newValue}`;
    }

    protected get segmentWidth(): number {
        return 100 / Math.max(1, this.segments);
    }
}

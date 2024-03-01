import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ElementRef,
    HostBinding,
    inject,
    INJECTOR,
    Input,
} from '@angular/core';
import {NgControl, NgModel} from '@angular/forms';
import {tuiPure, tuiWatch} from '@taiga-ui/cdk';
import {TuiSizeS} from '@taiga-ui/core';
import {take} from 'rxjs';

import {TuiSliderKeyStepsDirective} from './helpers/slider-key-steps.directive';
import {TUI_SLIDER_OPTIONS} from './slider.options';

@Component({
    /**
     * We have to call our component as `<input tuiSlider type="range" ... />`
     * because otherwise built-in angular
     * {@link https://github.com/angular/angular/blob/master/packages/forms/src/directives/range_value_accessor.ts#L45 RangeValueAccessor}
     * cannot be matched by its CSS selector.
     */
    selector: 'input[type=range][tuiSlider]',
    template: '',
    styleUrls: ['./slider.style.less'],
    host: {
        /**
         * For change detection.
         * Webkit does not have built-in method for customization of filling progress (as Firefox).
         * We draw filling of progress by `background: linear-gradient(...)` of the track.
         * This function triggers change detection (for {@link valuePercentage} function) when we drag thumb of the input.
         */
        '(input)': '0',
        '[style.--tui-slider-track-color]': 'trackColor',
    },
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiSliderComponent {
    private readonly injector = inject(INJECTOR);
    private readonly control = inject(NgControl, {self: true, optional: true});
    private readonly options = inject(TUI_SLIDER_OPTIONS);

    @Input()
    @HostBinding('attr.data-size')
    public size: TuiSizeS = this.options.size;

    @Input()
    public segments = 1;

    public readonly el: HTMLInputElement = inject(ElementRef).nativeElement;

    constructor() {
        if (this.control instanceof NgModel) {
            /**
             * The ValueAccessor.writeValue method is called twice on any value accessor during component initialization,
             * when a control is bound using [(ngModel)], first time with a phantom null value.
             * With `changeDetection: ChangeDetectionStrategy.OnPush` the second call of writeValue with real value don't re-render the view.
             * ___
             * See this {@link https://github.com/angular/angular/issues/14988 issue}
             */
            this.control.valueChanges
                ?.pipe(tuiWatch(inject(ChangeDetectorRef)), take(1))
                .subscribe();
        }
    }

    @HostBinding('style.--tui-slider-fill-ratio')
    public get valueRatio(): number {
        return (this.value - this.min) / (this.max - this.min) || 0;
    }

    @HostBinding('style.--tui-slider-fill-percentage.%')
    public get valuePercentage(): number {
        return 100 * this.valueRatio;
    }

    public get trackColor(): string {
        return this.options.trackColor;
    }

    public get min(): number {
        return Number(this.el.min);
    }

    public get max(): number {
        return Number(this.el.max || 100);
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

    @HostBinding('style.--tui-slider-segment-width.%')
    protected get segmentWidth(): number {
        return 100 / Math.max(1, this.segments);
    }

    @tuiPure
    protected get hasKeySteps(): boolean {
        return Boolean(this.injector.get(TuiSliderKeyStepsDirective, null));
    }

    protected get step(): number {
        return Number(this.el.step) || 1;
    }
}

import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ElementRef,
    HostBinding,
    Inject,
    Injector,
    Input,
    Optional,
    Self,
} from '@angular/core';
import {NgControl, NgModel} from '@angular/forms';
import {USER_AGENT} from '@ng-web-apis/common';
import {
    CHROMIUM_EDGE_START_VERSION,
    tuiDefaultProp,
    tuiPure,
    tuiIsEdgeOlderThan,
    tuiWatch,
} from '@taiga-ui/cdk';
import {TuiSizeS} from '@taiga-ui/core';
import {take} from 'rxjs/operators';

import {TuiSliderKeyStepsDirective} from './helpers/slider-key-steps.directive';
import {TUI_SLIDER_OPTIONS, TuiSliderOptions} from './slider-options';

@Component({
    /**
     * We have to call our component as `<input tuiSlider type="range" ... />`
     * because otherwise built-in angular
     * {@link https://github.com/angular/angular/blob/master/packages/forms/src/directives/range_value_accessor.ts#L45 RangeValueAccessor}
     * cannot be matched by its CSS selector.
     */
    selector: `input[type=range][tuiSlider]`,
    template: ``,
    styleUrls: [`./slider.style.less`],
    host: {
        /**
         * For change detection.
         * Webkit does not have built-in method for customization of filling progress (as Firefox).
         * We draw filling of progress by `background: linear-gradient(...)` of the track.
         * This function triggers change detection (for {@link valuePercentage} function) when we drag thumb of the input.
         */
        '(input)': `0`,
        '[style.--tui-slider-track-color]': `options.trackColor`,
    },
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiSliderComponent {
    @Input()
    @HostBinding(`attr.data-size`)
    @tuiDefaultProp()
    size: TuiSizeS = this.options.size;

    @Input()
    @tuiDefaultProp()
    segments = 1;

    get min(): number {
        return Number(this.elementRef.nativeElement.min);
    }

    get max(): number {
        return Number(this.elementRef.nativeElement.max || 100);
    }

    get step(): number {
        return Number(this.elementRef.nativeElement.step) || 1;
    }

    get value(): number {
        const {elementRef, control, hasKeySteps} = this;

        if (!hasKeySteps && control instanceof NgModel) {
            /**
             * If developer uses `[(ngModel)]` and programmatically change value,
             * the `elementRef.nativeElement.value` is equal to the previous value at this moment.
             */
            return control.viewModel;
        }

        return Number(elementRef.nativeElement.value) || 0;
    }

    set value(newValue: number) {
        this.elementRef.nativeElement.value = `${newValue}`;
    }

    @HostBinding(`style.--tui-slider-fill-percentage.%`)
    get valuePercentage(): number {
        return (100 * (this.value - this.min)) / (this.max - this.min) || 0;
    }

    @HostBinding(`style.--tui-slider-segment-width.%`)
    get segmentWidth(): number {
        return 100 / Math.max(1, this.segments);
    }

    @HostBinding(`class._old-edge`)
    get isOldEdge(): boolean {
        return tuiIsEdgeOlderThan(CHROMIUM_EDGE_START_VERSION, this.userAgent);
    }

    @tuiPure
    get hasKeySteps(): boolean {
        return Boolean(this.injector.get(TuiSliderKeyStepsDirective, null));
    }

    constructor(
        @Optional()
        @Self()
        @Inject(NgControl)
        private readonly control: NgControl | null,
        @Inject(ChangeDetectorRef) changeDetectorRef: ChangeDetectorRef,
        @Inject(TUI_SLIDER_OPTIONS) readonly options: TuiSliderOptions,
        @Inject(ElementRef) readonly elementRef: ElementRef<HTMLInputElement>,
        @Inject(USER_AGENT) private readonly userAgent: string,
        @Inject(Injector) private readonly injector: Injector,
    ) {
        if (control instanceof NgModel) {
            /**
             * The ValueAccessor.writeValue method is called twice on any value accessor during component initialization,
             * when a control is bound using [(ngModel)], first time with a phantom null value.
             * With `changeDetection: ChangeDetectionStrategy.OnPush` the second call of writeValue with real value don't re-render the view.
             * ___
             * See this {@link https://github.com/angular/angular/issues/14988 issue}
             */
            control.valueChanges?.pipe(tuiWatch(changeDetectorRef), take(1)).subscribe();
        }
    }
}

import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    HostBinding,
    Inject,
    Input,
    Optional,
    Self,
} from '@angular/core';
import {NgControl, NgModel} from '@angular/forms';
import {USER_AGENT} from '@ng-web-apis/common';
import {
    CHROMIUM_EDGE_START_VERSION,
    isEdgeOlderThan,
    tuiDefaultProp,
} from '@taiga-ui/cdk';
import {TuiSizeS} from '@taiga-ui/core';

@Component({
    /**
     * We have to call our component as `<input tuiSlider type="range" ... />`
     * because otherwise built-in angular
     * {@link https://github.com/angular/angular/blob/master/packages/forms/src/directives/range_value_accessor.ts#L45 RangeValueAccessor}
     * cannot be matched by its CSS selector.
     */
    selector: 'input[type=range][tuiSlider]',
    template: ``,
    styleUrls: ['./slider.style.less'],
    host: {
        /**
         * For change detection.
         * Webkit does not have built-in method for customization of filling progress (as Firefox).
         * We draw filling of progress by `background: linear-gradient(...)` of the track.
         * This function triggers change detection (for `fillPercentage` function) when we drag thumb of the input.
         */
        '(input)': '0',
    },
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiSliderComponent {
    @Input()
    @HostBinding('attr.data-size')
    @tuiDefaultProp()
    size: TuiSizeS = 'm';

    @Input()
    @tuiDefaultProp()
    segments = 1;

    get min(): number {
        return Number(this.elementRef.nativeElement.min);
    }

    get max(): number {
        return Number(this.elementRef.nativeElement.max) || 100;
    }

    get step(): number {
        return Number(this.elementRef.nativeElement.step) || 1;
    }

    @HostBinding('style.--tui-slider-fill-percentage.%')
    get fillPercentage(): number {
        return (100 * this.value) / (this.max - this.min);
    }

    @HostBinding('style.--tui-slider-segment-width.%')
    get stepPercentage(): number {
        return 100 / this.segments - 0.1;
    }

    @HostBinding('class._old-edge')
    get isOldEdge(): boolean {
        return isEdgeOlderThan(CHROMIUM_EDGE_START_VERSION, this.userAgent);
    }

    get value(): number {
        const {control} = this;
        const controlValue =
            control instanceof NgModel ? control.viewModel : control?.value;

        return controlValue || Number(this.elementRef.nativeElement.value) || 0;
    }

    constructor(
        @Optional()
        @Self()
        @Inject(NgControl)
        private readonly control: NgControl | null,
        @Inject(ElementRef) private readonly elementRef: ElementRef<HTMLInputElement>,
        @Inject(USER_AGENT) private readonly userAgent: string,
    ) {}
}

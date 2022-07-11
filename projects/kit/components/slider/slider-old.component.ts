import {ChangeDetectionStrategy, Component, forwardRef} from '@angular/core';
import {
    TUI_FOCUSABLE_ITEM_ACCESSOR,
    TuiFocusableElementAccessor,
    tuiIsNativeFocused,
    TuiNativeFocusableElement,
} from '@taiga-ui/cdk';
import {AbstractTuiSlider} from '@taiga-ui/kit/abstract';

/**
 * @deprecated use {@link TuiSliderComponent} instead
 * TODO: 3.0 remove
 */
// @dynamic
@Component({
    selector: 'tui-slider',
    templateUrl: '../../abstract/slider/slider.common.template.html',
    styleUrls: [
        '../../abstract/slider/slider.common.style.less',
        './slider-old.style.less',
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: TUI_FOCUSABLE_ITEM_ACCESSOR,
            useExisting: forwardRef(() => TuiSliderOldComponent),
        },
    ],
})
export class TuiSliderOldComponent
    extends AbstractTuiSlider<number>
    implements TuiFocusableElementAccessor
{
    get nativeFocusableElement(): TuiNativeFocusableElement | null {
        return this.dotRight ? this.dotRight.nativeElement : null;
    }

    get focused(): boolean {
        return tuiIsNativeFocused(this.nativeFocusableElement);
    }

    get left(): number {
        return 0;
    }

    get right(): number {
        return 100 - 100 * this.getFractionFromValue(this.value);
    }

    processValue(value: number): void {
        this.updateValue(this.valueGuard(value));
    }

    decrement(): void {
        this.processStep(false);
    }

    increment(): void {
        this.processStep(true);
    }

    protected getFallbackValue(): number {
        return 0;
    }

    protected processStep(increment: boolean): void {
        const fraction = this.getFractionFromValue(this.value);
        const step = this.computedStep;
        const value = this.getValueFromFraction(
            increment ? fraction + step : fraction - step,
        );

        this.processValue(value);
    }
}

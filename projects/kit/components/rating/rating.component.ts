import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    forwardRef,
    Inject,
    Input,
    Optional,
    Self,
} from '@angular/core';
import {NgControl} from '@angular/forms';
import {AbstractTuiControl, TUI_FOCUSABLE_ITEM_ACCESSOR} from '@taiga-ui/cdk';

import {RatingOptions, TUI_RATING_OPTIONS} from './rating.options';
import {roundFocusedBy} from './utils/round-focused-by';
import {roundRatingBy} from './utils/round-rating-by';

@Component({
    selector: 'tui-rating',
    templateUrl: './rating.template.html',
    styleUrls: ['./rating.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: TUI_FOCUSABLE_ITEM_ACCESSOR,
            useExisting: forwardRef(() => TuiRatingComponent),
        },
    ],
})
export class TuiRatingComponent extends AbstractTuiControl<number> {
    private previousValue: number = this.getFallbackValue();
    @Input() max: number = this.options.max;
    @Input() iconNormal: string = this.options.iconNormal;
    @Input() iconFilled: string = this.options.iconFilled;
    focused: boolean = false;
    focusedValue: number = 0;

    constructor(
        @Optional()
        @Self()
        @Inject(NgControl)
        ngControl: NgControl | null,
        @Inject(ChangeDetectorRef)
        changeDetectorRef: ChangeDetectorRef,
        @Inject(TUI_RATING_OPTIONS)
        private readonly options: RatingOptions,
    ) {
        super(ngControl, changeDetectorRef);
    }

    writeValue(value: number): void {
        const computed = this.getComputedRatingValue(value);

        /**
         * @note: force update view model, when set invalid value
         * ~ 7.5 (double), -1 (negative), 100 (greater than max)
         */
        this.updateValue(computed);
    }

    setValue(value: number): void {
        const computed = this.getComputedRatingValue(value);

        this.updateValue(computed);
    }

    toggleValueByFocus(): void {
        const newValue = this.previousValue === this.focusedValue ? 0 : this.focusedValue;

        this.setValue(newValue);
        this.setPreviousValue();

        if (this.value === 0) {
            this.unsetValue();
        }
    }

    resetFocusedValue(): void {
        this.focusedValue = 0;
    }

    updateFocusedValue(offsetX: number, widthPx: number): void {
        this.focusedValue = roundFocusedBy({max: this.max, offsetX, widthPx});
        this.setPreviousValue();
    }

    updateValueWhenUseKeyboard(value: number): void {
        if (this.focusedValue > 0) {
            /**
             * @note: prevent call twice (ngModelChange) when trigger (click) event
             * if we use the keyboard, then we don't use mouseover
             * and can use (ngModelChange) safely
             */
            return;
        }

        this.setValue(value);
    }

    protected getFallbackValue(): number {
        return 0;
    }

    private getComputedRatingValue(value: number): number {
        return roundRatingBy({value, max: this.max});
    }

    private unsetValue(): void {
        this.setValue(0);
        this.focusedValue = 0;
        this.previousValue = 0;
        this.changeDetectorRef.detectChanges();
    }

    private setPreviousValue(): void {
        this.previousValue = this.value;
    }
}

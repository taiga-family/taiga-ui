import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ElementRef,
    forwardRef,
    Inject,
    Input,
    Optional,
    Self,
    ViewChild,
} from '@angular/core';
import {NgControl} from '@angular/forms';
import {
    AbstractTuiControl,
    isNativeFocused,
    TUI_FOCUSABLE_ITEM_ACCESSOR,
    tuiDefaultProp,
} from '@taiga-ui/cdk';

import {TUI_RATING_OPTIONS, TuiRatingOptions} from './rating-options';

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
    @ViewChild('range')
    private readonly rangeElement?: ElementRef<HTMLInputElement>;

    @Input()
    @tuiDefaultProp()
    min = this.options.min;

    @Input()
    @tuiDefaultProp()
    max = this.options.max;

    @Input()
    @tuiDefaultProp()
    iconNormal = this.options.iconNormal;

    @Input()
    @tuiDefaultProp()
    iconFilled = this.options.iconFilled;

    constructor(
        @Optional()
        @Self()
        @Inject(NgControl)
        ngControl: NgControl | null,
        @Inject(ChangeDetectorRef)
        changeDetectorRef: ChangeDetectorRef,
        @Inject(TUI_RATING_OPTIONS)
        private readonly options: TuiRatingOptions,
    ) {
        super(ngControl, changeDetectorRef);
    }

    get nativeRangeElement(): HTMLInputElement | null {
        return this.computedDisabled || !this.rangeElement
            ? null
            : this.rangeElement.nativeElement;
    }

    get focused(): boolean {
        return isNativeFocused(this.nativeRangeElement);
    }

    get isFocusable(): boolean {
        return !(this.readOnly || this.disabled);
    }

    get percent(): number {
        return (100 * this.value) / this.max;
    }

    setRateByReverseIndex(index: number): void {
        this.updateValue(this.max - index);
        this.onTouchedByUpdateOnBlur();
    }

    setRate(value: number | string): void {
        this.updateValue(Number(value));
        this.onTouchedByUpdateOnBlur();
    }

    onTouchedByUpdateOnBlur(): void {
        if (this.control?.updateOn === 'blur') {
            this.updateFocused(false);
        }
    }

    protected getFallbackValue(): number {
        return 0;
    }
}

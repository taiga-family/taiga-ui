import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    forwardRef,
    HostListener,
    Inject,
    Input,
    Optional,
    Self,
    ViewChild,
} from '@angular/core';
import {NgControl} from '@angular/forms';
import {
    AbstractTuiNullableControl,
    TUI_FOCUSABLE_ITEM_ACCESSOR,
    tuiDefaultProp,
    TuiFocusableElementAccessor,
    TuiInputModeT,
    TuiMapper,
} from '@taiga-ui/cdk';
import {
    formatNumber,
    maskedMoneyValueIsEmpty,
    maskedNumberStringToNumber,
    NumberFormatSettings,
    TUI_DECIMAL_SYMBOLS,
    TUI_NUMBER_FORMAT,
    tuiCreateAutoCorrectedNumberPipe,
    tuiCreateNumberMask,
    TuiDecimalT,
    TuiPrimitiveTextfieldComponent,
    TuiTextMaskOptions,
} from '@taiga-ui/core';

const DEFAULT_MAX_LENGTH = 18;

// @dynamic
@Component({
    selector: 'tui-input-number',
    templateUrl: './input-number.template.html',
    styleUrls: ['./input-number.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: TUI_FOCUSABLE_ITEM_ACCESSOR,
            useExisting: forwardRef(() => TuiInputNumberComponent),
        },
    ],
})
export class TuiInputNumberComponent
    extends AbstractTuiNullableControl<number>
    implements TuiFocusableElementAccessor {
    @Input()
    @tuiDefaultProp()
    min = -Infinity;

    @Input()
    @tuiDefaultProp()
    max = Infinity;

    @Input()
    @tuiDefaultProp()
    decimal: TuiDecimalT = 'not-zero';

    @Input()
    @tuiDefaultProp()
    precision = 2;

    @Input()
    @tuiDefaultProp()
    postfix = '';

    mask: TuiMapper<boolean, TuiTextMaskOptions> = (
        allowNegative: boolean,
        decimal: TuiDecimalT,
        precision: number,
        nativeFocusableElement: HTMLInputElement | null,
    ) => ({
        mask: tuiCreateNumberMask({
            allowNegative: allowNegative,
            allowDecimal: decimal !== 'never',
            decimalLimit: precision,
            requireDecimal: decimal === 'always',
            decimalSymbol: this.numberFormat.decimalSeparator,
            thousandSymbol: this.numberFormat.thousandSeparator,
        }),
        pipe: tuiCreateAutoCorrectedNumberPipe(
            decimal === 'always' ? precision : 0,
            this.numberFormat.decimalSeparator,
            this.numberFormat.thousandSeparator,
            nativeFocusableElement || undefined,
        ),
        guide: false,
    });

    @ViewChild(TuiPrimitiveTextfieldComponent)
    private readonly primitiveTextfield?: TuiPrimitiveTextfieldComponent;

    constructor(
        @Optional()
        @Self()
        @Inject(NgControl)
        control: NgControl | null,
        @Inject(ChangeDetectorRef)
        changeDetectorRef: ChangeDetectorRef,
        @Inject(TUI_NUMBER_FORMAT)
        private readonly numberFormat: NumberFormatSettings,
    ) {
        super(control, changeDetectorRef);
    }

    get nativeFocusableElement(): HTMLInputElement | null {
        return !this.primitiveTextfield || this.computedDisabled
            ? null
            : this.primitiveTextfield.nativeFocusableElement;
    }

    get focused(): boolean {
        return !!this.primitiveTextfield && this.primitiveTextfield.focused;
    }

    get isNegativeAllowed(): boolean {
        return this.min < 0;
    }

    get inputMode(): TuiInputModeT {
        return this.decimal === 'never' ? 'numeric' : 'decimal';
    }

    get calculatedMaxLength(): number {
        return (
            DEFAULT_MAX_LENGTH +
            (this.decimal !== 'never' &&
            this.nativeValue.includes(this.numberFormat.decimalSeparator)
                ? this.precision + 1
                : 0)
        );
    }

    get formattedValue(): string {
        const value = this.value || 0;
        const absValue = Math.abs(value);
        const hasFraction = absValue % 1 > 0;
        let limit = this.decimal === 'always' || hasFraction ? this.precision : 0;

        const fraction = hasFraction
            ? value.toString().split('.')[1].substr(0, this.precision)
            : '';

        if (this.focused && this.decimal !== 'always') {
            limit = fraction.length;
        }

        return formatNumber(
            value,
            limit,
            this.numberFormat.decimalSeparator,
            this.numberFormat.thousandSeparator,
        );
    }

    get computedValue(): string {
        if (this.focused || !this.isNativeValueInLimit) {
            return this.nativeValue;
        }

        if (this.value === null) {
            return maskedMoneyValueIsEmpty(this.nativeValue) ? this.nativeValue : '';
        }

        return this.formattedValue;
    }

    onValue(value: string) {
        if (maskedMoneyValueIsEmpty(value)) {
            this.updateValue(null);

            return;
        }

        if (this.isNativeValueNotFinished) {
            return;
        }

        const capped = this.absoluteCapInputValue(value);

        if (capped === null || isNaN(capped)) {
            return;
        }

        this.updateValue(capped);

        if (
            capped !==
            maskedNumberStringToNumber(
                value,
                this.numberFormat.decimalSeparator,
                this.numberFormat.thousandSeparator,
            )
        ) {
            this.nativeValue = this.formattedValue;
        }
    }

    onKeyDown(event: KeyboardEvent) {
        if (TUI_DECIMAL_SYMBOLS.indexOf(event.key) === -1) {
            return;
        }

        if (this.decimal === 'never') {
            event.preventDefault();

            return;
        }

        if (this.nativeValue.includes(this.numberFormat.decimalSeparator)) {
            event.preventDefault();
            this.setCaretAfterComma();
        }
    }

    onFocused(focused: boolean) {
        this.updateFocused(focused);

        if (focused) {
            return;
        }

        const nativeNumberValue = this.nativeNumberValue;

        if (isNaN(nativeNumberValue)) {
            this.clear();

            return;
        }

        const clamped = Math.min(this.max, Math.max(this.min, nativeNumberValue));

        this.updateValue(clamped);
        this.nativeValue = this.formattedValue;
    }

    onHovered(hovered: boolean) {
        this.updateHovered(hovered);
    }

    onPressed(pressed: boolean) {
        this.updatePressed(pressed);
    }

    @HostListener('keydown.0', ['$event'])
    onZero(event: KeyboardEvent) {
        const decimal =
            this.nativeValue.split(this.numberFormat.decimalSeparator)[1] || '';
        const {nativeFocusableElement} = this;

        if (
            decimal.length < this.precision ||
            !nativeFocusableElement ||
            !nativeFocusableElement.selectionStart ||
            this.nativeValue[nativeFocusableElement.selectionStart] !== '0'
        ) {
            return;
        }

        event.preventDefault();
        nativeFocusableElement.selectionStart++;
    }

    private get isNativeValueInLimit(): boolean {
        if (this.nativeValue === '') {
            return true;
        }

        const nativeNumberValue = this.nativeNumberValue;

        return nativeNumberValue >= this.min && nativeNumberValue <= this.max;
    }

    private get isNativeValueNotFinished(): boolean {
        const nativeNumberValue = this.nativeNumberValue;

        return nativeNumberValue < 0
            ? nativeNumberValue > this.max
            : nativeNumberValue < this.min;
    }

    private get nativeValue(): string {
        return this.nativeFocusableElement ? this.nativeFocusableElement.value : '';
    }

    private get nativeNumberValue(): number {
        return maskedNumberStringToNumber(
            this.nativeValue,
            this.numberFormat.decimalSeparator,
            this.numberFormat.thousandSeparator,
        );
    }

    private set nativeValue(value: string) {
        if (!this.primitiveTextfield || !this.nativeFocusableElement) {
            return;
        }

        this.primitiveTextfield.value = value;
        this.nativeFocusableElement.value = value;
    }

    private clear() {
        this.nativeValue = '';
        this.updateValue(null);
    }

    private absoluteCapInputValue(inputValue: string): number | null {
        const value = maskedNumberStringToNumber(
            inputValue,
            this.numberFormat.decimalSeparator,
            this.numberFormat.thousandSeparator,
        );
        const capped = value < 0 ? Math.max(this.min, value) : Math.min(value, this.max);
        const ineligibleValue = isNaN(capped) || capped < this.min || capped > this.max;

        return ineligibleValue ? null : capped;
    }

    private setCaretAfterComma() {
        if (!this.nativeFocusableElement) {
            return;
        }

        const afterCommaPosition = this.nativeValue.length - this.precision;

        this.nativeFocusableElement.setSelectionRange(
            afterCommaPosition,
            afterCommaPosition,
        );
    }
}

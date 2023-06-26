import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ContentChildren,
    HostListener,
    Inject,
    Input,
    Optional,
    QueryList,
    Self,
    ViewChild,
} from '@angular/core';
import {NgControl} from '@angular/forms';
import {MaskitoOptions} from '@maskito/core';
import {maskitoNumberOptionsGenerator, maskitoParseNumber} from '@maskito/kit';
import {
    AbstractTuiNullableControl,
    CHAR_HYPHEN,
    CHAR_MINUS,
    EMPTY_QUERY,
    TUI_IS_IOS,
    tuiAsControl,
    tuiAsFocusableItemAccessor,
    tuiClamp,
    tuiDefaultProp,
    TuiFocusableElementAccessor,
    TuiInputMode,
    tuiPure,
} from '@taiga-ui/cdk';
import {
    TUI_DECIMAL_SYMBOLS,
    TUI_NUMBER_FORMAT,
    TuiDecimal,
    tuiFormatNumber,
    tuiGetFractionPartPadded,
    TuiNumberFormatSettings,
    TuiPrimitiveTextfieldComponent,
} from '@taiga-ui/core';
import {PolymorpheusOutletDirective} from '@tinkoff/ng-polymorpheus';

import {TUI_INPUT_NUMBER_OPTIONS, TuiInputNumberOptions} from './input-number-options';

const DEFAULT_MAX_LENGTH = 18;

@Component({
    selector: 'tui-input-number',
    templateUrl: './input-number.template.html',
    styleUrls: ['./input-number.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        tuiAsFocusableItemAccessor(TuiInputNumberComponent),
        tuiAsControl(TuiInputNumberComponent),
    ],
})
export class TuiInputNumberComponent
    extends AbstractTuiNullableControl<number>
    implements TuiFocusableElementAccessor
{
    @ViewChild(TuiPrimitiveTextfieldComponent)
    private readonly primitiveTextfield?: TuiPrimitiveTextfieldComponent;

    private unfinishedValue: string | null = '';

    @Input()
    @tuiDefaultProp()
    min = this.options.min;

    @Input()
    @tuiDefaultProp()
    max = this.options.max;

    @Input()
    @tuiDefaultProp()
    decimal = this.options.decimal;

    @Input()
    @tuiDefaultProp()
    precision = this.options.precision;

    @Input()
    step = this.options.step;

    /** @deprecated use `tuiTextfieldPrefix` from {@link TuiTextfieldControllerModule} instead */
    @Input()
    @tuiDefaultProp()
    prefix = '';

    /** @deprecated use `tuiTextfieldPostfix` from {@link TuiTextfieldControllerModule} instead */
    @Input()
    @tuiDefaultProp()
    postfix = '';

    @ContentChildren(PolymorpheusOutletDirective, {descendants: true})
    readonly polymorpheusValueContent: QueryList<unknown> = EMPTY_QUERY;

    constructor(
        @Optional()
        @Self()
        @Inject(NgControl)
        control: NgControl | null,
        @Inject(ChangeDetectorRef)
        cdr: ChangeDetectorRef,
        @Inject(TUI_INPUT_NUMBER_OPTIONS)
        readonly options: TuiInputNumberOptions,
        @Inject(TUI_NUMBER_FORMAT)
        private readonly numberFormat: TuiNumberFormatSettings,
        @Inject(TUI_IS_IOS) private readonly isIOS: boolean,
    ) {
        super(control, cdr);
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

    get inputMode(): TuiInputMode {
        if (this.isIOS && this.isNegativeAllowed) {
            // iPhone does not have minus sign if inputMode is equal to 'numeric' / 'decimal'
            return 'text';
        }

        return this.decimal === 'never' ? 'numeric' : 'decimal';
    }

    get calculatedMaxLength(): number {
        const decimalPart =
            this.decimal !== 'never' &&
            this.nativeValue.includes(this.numberFormat.decimalSeparator);
        const precision = decimalPart ? Math.min(this.precision + 1, 20) : 0;
        const takeThousand = this.numberFormat.thousandSeparator.repeat(5).length;

        return DEFAULT_MAX_LENGTH + precision + takeThousand;
    }

    get formattedValue(): string {
        return this.value !== null ? this.getFormattedValue(this.value || 0) : '';
    }

    get computedValue(): string {
        return this.focused ? this.nativeValue : this.formattedValue;
    }

    get canDecrement(): boolean {
        return this.interactive && (this.value || 0) > this.min;
    }

    get canIncrement(): boolean {
        return this.interactive && (this.value || 0) < this.max;
    }

    get mask(): MaskitoOptions {
        return this.calculateMask(
            this.precision,
            this.decimal,
            this.numberFormat.decimalSeparator,
            this.numberFormat.thousandSeparator,
            this.min,
            this.max,
        );
    }

    @HostListener('keydown.arrowDown', ['-step'])
    @HostListener('keydown.arrowUp', ['step'])
    onArrow(step: number | null): void {
        if (!step) {
            return;
        }

        this.value = tuiClamp((this.value || 0) + step, this.min, this.max);
        this.nativeValue = this.formattedValue;
    }

    onValueChange(nativeValue: string): void {
        const parsedValue = maskitoParseNumber(
            nativeValue,
            this.numberFormat.decimalSeparator,
        );

        this.unfinishedValue = null;

        if (Number.isNaN(parsedValue)) {
            this.value = null;

            return;
        }

        if (this.isNativeValueNotFinished) {
            this.unfinishedValue = nativeValue;

            return;
        }

        if (parsedValue < this.min || parsedValue > this.max) {
            return;
        }

        this.value = parsedValue;
    }

    // TODO: delete this method after fix: https://github.com/Tinkoff/maskito/issues/330
    onKeyDown(event: KeyboardEvent): void {
        if (
            TUI_DECIMAL_SYMBOLS.includes(event.key) &&
            this.nativeValue.includes(this.numberFormat.decimalSeparator)
        ) {
            event.preventDefault();
            this.setCaretAfterComma();
        }
    }

    onFocused(focused: boolean): void {
        this.updateFocused(focused);

        if (focused) {
            return;
        }

        const nativeNumberValue = this.unfinishedValue
            ? maskitoParseNumber(this.unfinishedValue, this.numberFormat.decimalSeparator)
            : this.nativeNumberValue;

        this.unfinishedValue = null;

        if (Number.isNaN(nativeNumberValue)) {
            this.clear();

            return;
        }

        this.value = nativeNumberValue;
        this.nativeValue = this.formattedValue;
    }

    getFormattedValue(value: number): string {
        const absValue = Math.abs(value);
        const hasFraction = absValue % 1 > 0;
        let decimalLimit =
            this.decimal === 'always' || (hasFraction && this.decimal !== 'never')
                ? this.precision
                : 0;

        const fraction = hasFraction
            ? tuiGetFractionPartPadded(value, this.precision)
            : '';

        if (this.focused && this.decimal !== 'always') {
            decimalLimit = fraction.length;
        }

        return tuiFormatNumber(value, {
            ...this.numberFormat,
            decimalLimit,
        }).replace(CHAR_HYPHEN, CHAR_MINUS);
    }

    private get isNativeValueNotFinished(): boolean {
        const nativeNumberValue = this.nativeNumberValue;

        return nativeNumberValue < 0
            ? nativeNumberValue > this.max
            : nativeNumberValue < this.min;
    }

    get nativeValue(): string {
        return this.nativeFocusableElement ? this.nativeFocusableElement.value : '';
    }

    set nativeValue(value: string) {
        if (!this.primitiveTextfield || !this.nativeFocusableElement) {
            return;
        }

        this.primitiveTextfield.value = value;
        this.nativeFocusableElement.value = value;
    }

    override writeValue(value: number | null): void {
        super.writeValue(value);
        this.nativeValue = this.formattedValue;
    }

    private get nativeNumberValue(): number {
        return maskitoParseNumber(this.nativeValue, this.numberFormat.decimalSeparator);
    }

    @tuiPure
    private calculateMask(
        precision: number,
        decimalMode: TuiDecimal,
        decimalSeparator: string,
        thousandSeparator: string,
        min: number,
        max: number,
    ): MaskitoOptions {
        return maskitoNumberOptionsGenerator({
            decimalSeparator,
            thousandSeparator,
            min,
            max,
            precision: decimalMode === 'never' ? 0 : precision,
            decimalZeroPadding: decimalMode === 'always',
        });
    }

    private clear(): void {
        this.nativeValue = '';
        this.value = null;
    }

    // TODO: delete this method after fix: https://github.com/Tinkoff/maskito/issues/330
    private setCaretAfterComma(): void {
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

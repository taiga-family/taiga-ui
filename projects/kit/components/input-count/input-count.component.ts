import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    HostBinding,
    Inject,
    Input,
    Optional,
    Self,
    ViewChild,
} from '@angular/core';
import {NgControl} from '@angular/forms';
import {
    AbstractTuiNullableControl,
    TUI_IS_MOBILE,
    tuiAsControl,
    tuiAsFocusableItemAccessor,
    tuiClamp,
    tuiDefaultProp,
    TuiFocusableElementAccessor,
    tuiIsNativeFocused,
    tuiIsPresent,
    tuiPure,
} from '@taiga-ui/cdk';
import {
    TEXTFIELD_CONTROLLER_PROVIDER,
    TUI_NUMBER_FORMAT,
    TUI_TEXTFIELD_WATCHED_CONTROLLER,
    tuiCreateNumberMask,
    tuiEnableAutoCorrectDecimalSymbol,
    tuiFormatNumber,
    tuiMaskedNumberStringToNumber,
    TuiNumberFormatSettings,
    TuiSizeL,
    TuiSizeS,
    TuiTextfieldController,
    TuiTextMaskOptions,
    TuiWithOptionalMinMax,
} from '@taiga-ui/core';
import {TuiInputNumberComponent} from '@taiga-ui/kit/components/input-number';
import {TUI_PLUS_MINUS_TEXTS} from '@taiga-ui/kit/tokens';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {Observable} from 'rxjs';

import {TUI_INPUT_COUNT_OPTIONS, TuiInputCountOptions} from './input-count-options';

@Component({
    selector: 'tui-input-count',
    templateUrl: './input-count.template.html',
    styleUrls: ['./input-count.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        tuiAsFocusableItemAccessor(TuiInputCountComponent),
        tuiAsControl(TuiInputCountComponent),
        TEXTFIELD_CONTROLLER_PROVIDER,
    ],
})
export class TuiInputCountComponent
    extends AbstractTuiNullableControl<number>
    implements TuiWithOptionalMinMax<number>, TuiFocusableElementAccessor
{
    @ViewChild(TuiInputNumberComponent)
    private readonly inputNumber?: TuiInputNumberComponent;

    @Input()
    @tuiDefaultProp()
    step = this.options.step;

    @Input()
    @tuiDefaultProp()
    min = this.options.min;

    @Input()
    @tuiDefaultProp()
    max = this.options.max;

    @Input()
    @tuiDefaultProp()
    hideButtons = this.options.hideButtons;

    /** @deprecated use `tuiTextfieldPrefix` from {@link TuiTextfieldControllerModule} instead */
    @Input()
    @tuiDefaultProp()
    prefix = '';

    /** @deprecated use `tuiTextfieldPostfix` from {@link TuiTextfieldControllerModule} instead */
    @Input()
    @tuiDefaultProp()
    postfix = this.options.postfix;

    constructor(
        @Optional()
        @Self()
        @Inject(NgControl)
        control: NgControl | null,
        @Inject(ChangeDetectorRef) changeDetectorRef: ChangeDetectorRef,
        @Inject(TUI_TEXTFIELD_WATCHED_CONTROLLER)
        private readonly textfieldController: TuiTextfieldController,
        @Inject(TUI_PLUS_MINUS_TEXTS)
        readonly minusTexts$: Observable<[string, string]>,
        @Inject(TUI_IS_MOBILE) private readonly isMobile: boolean,
        @Inject(TUI_INPUT_COUNT_OPTIONS)
        readonly options: TuiInputCountOptions,
        @Inject(TUI_NUMBER_FORMAT)
        private readonly numberFormat: TuiNumberFormatSettings,
    ) {
        super(control, changeDetectorRef);
    }

    @tuiPure
    getMask(allowNegative: boolean): TuiTextMaskOptions {
        return {
            mask: tuiCreateNumberMask({
                allowNegative,
                decimalSymbol: this.numberFormat.decimalSeparator,
                thousandSymbol: this.numberFormat.thousandSeparator,
                autoCorrectDecimalSymbol: tuiEnableAutoCorrectDecimalSymbol(
                    this.numberFormat,
                ),
            }),
            guide: false,
        };
    }

    @HostBinding('class._hide-buttons')
    get buttonsHidden(): boolean {
        return this.hideButtons || this.textfieldController.appearance === 'table';
    }

    get iconUp(): PolymorpheusContent<Record<string, unknown>> {
        return this.options.icons.up;
    }

    get iconDown(): PolymorpheusContent<Record<string, unknown>> {
        return this.options.icons.down;
    }

    get nativeFocusableElement(): HTMLInputElement | null {
        return !this.inputNumber || this.computedDisabled
            ? null
            : this.inputNumber.nativeFocusableElement;
    }

    @HostBinding('attr.data-size')
    get size(): TuiSizeL | TuiSizeS {
        return this.textfieldController.size;
    }

    get focused(): boolean {
        return tuiIsNativeFocused(this.nativeFocusableElement);
    }

    get minusButtonDisabled(): boolean {
        return !this.interactive || (tuiIsPresent(this.value) && this.value <= this.min);
    }

    get plusButtonDisabled(): boolean {
        return !this.interactive || (tuiIsPresent(this.value) && this.value >= this.max);
    }

    onButtonMouseDown(event: MouseEvent, disabled: boolean = false): void {
        if (disabled || !this.nativeFocusableElement || this.isMobile) {
            return;
        }

        event.preventDefault();
        this.nativeFocusableElement.focus();
    }

    onInputNumberChange(value: number | null): void {
        this.updateValue(value);
    }

    onValueChange(value: string): void {
        this.updateValue(
            tuiMaskedNumberStringToNumber(
                value,
                this.numberFormat.decimalSeparator,
                this.numberFormat.thousandSeparator,
            ),
        );
    }

    decreaseValue(): void {
        if (this.readOnly) {
            return;
        }

        const newValue = (this.value || 0) - this.step;

        this.safeUpdateValue(newValue);
    }

    increaseValue(): void {
        if (this.readOnly) {
            return;
        }

        const newValue = (this.value || 0) + this.step;

        this.safeUpdateValue(newValue);
    }

    onKeydown(event: KeyboardEvent): void {
        switch (event.key) {
            case 'ArrowUp':
            case 'Up': {
                this.increaseValue();
                event.preventDefault();
                break;
            }
            case 'ArrowDown':
            case 'Down': {
                this.decreaseValue();
                event.preventDefault();
                break;
            }
            default: {
                break;
            }
        }
    }

    private set nativeValue(value: string) {
        if (!this.nativeFocusableElement) {
            return;
        }

        this.nativeFocusableElement.value = value;
    }

    private safeUpdateValue(newValue: number): void {
        const value = tuiClamp(newValue, this.min, this.max);

        this.updateValue(value);
        this.nativeValue = this.formatNumber(value);
    }

    private formatNumber(value: number | null): string {
        return this.isNotNumber(value) ? '' : tuiFormatNumber(value, this.numberFormat);
    }

    private isNotNumber(value: number | null): value is null {
        return Number.isNaN(value) || !tuiIsPresent(value);
    }
}

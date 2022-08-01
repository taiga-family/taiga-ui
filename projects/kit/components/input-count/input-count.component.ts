import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    forwardRef,
    HostBinding,
    Inject,
    Input,
    Optional,
    Self,
    ViewChild,
} from '@angular/core';
import {NgControl} from '@angular/forms';
import {
    AbstractTuiControl,
    clamp,
    isPresent,
    setNativeFocused,
    TUI_FOCUSABLE_ITEM_ACCESSOR,
    TUI_IS_MOBILE,
    tuiDefaultProp,
    TuiFocusableElementAccessor,
    tuiIsNativeFocused,
    tuiPure,
} from '@taiga-ui/cdk';
import {
    formatNumber,
    TUI_NUMBER_FORMAT,
    TUI_TEXTFIELD_APPEARANCE,
    TUI_TEXTFIELD_SIZE,
    tuiCreateNumberMask,
    TuiNumberFormatSettings,
    TuiPrimitiveTextfieldComponent,
    TuiSizeL,
    TuiSizeS,
    TuiTextfieldSizeDirective,
    TuiTextMaskOptions,
    TuiWithOptionalMinMax,
} from '@taiga-ui/core';
import {TUI_PLUS_MINUS_TEXTS} from '@taiga-ui/kit/tokens';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {TextMaskConfig} from 'angular2-text-mask';
import {Observable} from 'rxjs';

import {TUI_INPUT_COUNT_OPTIONS, TuiInputCountOptions} from './input-count-options';

@Component({
    selector: `tui-input-count`,
    templateUrl: `./input-count.template.html`,
    styleUrls: [`./input-count.style.less`],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: TUI_FOCUSABLE_ITEM_ACCESSOR,
            useExisting: forwardRef(() => TuiInputCountComponent),
        },
        {
            provide: AbstractTuiControl,
            useExisting: forwardRef(() => TuiInputCountComponent),
        },
    ],
})
export class TuiInputCountComponent
    extends AbstractTuiControl<number>
    implements TuiWithOptionalMinMax<number>, TuiFocusableElementAccessor
{
    @ViewChild(TuiPrimitiveTextfieldComponent)
    private readonly primitiveTextfield?: TuiPrimitiveTextfieldComponent;

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

    @Input()
    @tuiDefaultProp()
    prefix = ``;

    @Input()
    @tuiDefaultProp()
    postfix = this.options.postfix;

    constructor(
        @Optional()
        @Self()
        @Inject(NgControl)
        control: NgControl | null,
        @Inject(ChangeDetectorRef) changeDetectorRef: ChangeDetectorRef,
        @Inject(TUI_TEXTFIELD_APPEARANCE)
        private readonly appearance: string,
        @Inject(TUI_TEXTFIELD_SIZE)
        private readonly textfieldSize: TuiTextfieldSizeDirective,
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
    getMask(allowNegative: boolean): TextMaskConfig {
        return {
            mask: tuiCreateNumberMask({
                allowNegative,
                decimalSymbol: this.numberFormat.decimalSeparator,
                thousandSymbol: this.numberFormat.thousandSeparator,
            }),
            guide: false,
        } as TuiTextMaskOptions as unknown as TextMaskConfig;
    }

    // TODO: 3.0 Remove in v.3
    @HostBinding(`class._hide-buttons`)
    get buttonsHidden(): boolean {
        return this.hideButtons || this.appearance === `table`;
    }

    get iconUp(): PolymorpheusContent<Record<string, unknown>> {
        return this.options.icons.up;
    }

    get iconDown(): PolymorpheusContent<Record<string, unknown>> {
        return this.options.icons.down;
    }

    get nativeFocusableElement(): HTMLInputElement | null {
        return !this.primitiveTextfield || this.computedDisabled
            ? null
            : this.primitiveTextfield.nativeFocusableElement;
    }

    @HostBinding(`attr.data-size`)
    get size(): TuiSizeL | TuiSizeS {
        return this.textfieldSize.size;
    }

    get focused(): boolean {
        return tuiIsNativeFocused(this.nativeFocusableElement);
    }

    get exampleText(): string {
        return String(this.min);
    }

    get computedValue(): string {
        return this.focused ? this.nativeValue : this.formatNumber(this.value);
    }

    get minusButtonDisabled(): boolean {
        return !this.interactive || (isPresent(this.value) && this.value <= this.min);
    }

    get plusButtonDisabled(): boolean {
        return !this.interactive || (isPresent(this.value) && this.value >= this.max);
    }

    onButtonMouseDown(event: MouseEvent, disabled: boolean = false): void {
        if (disabled || !this.nativeFocusableElement || this.isMobile) {
            return;
        }

        event.preventDefault();
        setNativeFocused(this.nativeFocusableElement);
    }

    onFocused(focused: boolean): void {
        if (!focused) {
            this.onBlur();
        }

        this.updateFocused(focused);
    }

    onValueChange(): void {
        const capped = this.capValue(this.nativeNumberValue);

        if (capped === null || isNaN(capped)) {
            return;
        }

        const newValue = this.formatNumber(capped);

        if (this.nativeValue !== newValue) {
            this.nativeValue = newValue;
        }

        this.updateValue(capped);
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
            case `ArrowUp`:
            case `Up`:
                this.increaseValue();
                event.preventDefault();
                break;
            case `ArrowDown`:
            case `Down`:
                this.decreaseValue();
                event.preventDefault();
                break;
            default:
                break;
        }
    }

    protected getFallbackValue(): number {
        return 0;
    }

    private get nativeNumberValue(): number {
        return parseInt(
            this.nativeValue.split(this.numberFormat.thousandSeparator).join(``),
            10,
        );
    }

    private get nativeValue(): string {
        return this.nativeFocusableElement ? this.nativeFocusableElement.value : ``;
    }

    private set nativeValue(value: string) {
        if (!this.nativeFocusableElement) {
            return;
        }

        this.nativeFocusableElement.value = value;
    }

    private safeUpdateValue(newValue: number): void {
        const value = clamp(newValue, this.min, this.max);

        this.updateValue(value);
        this.nativeValue = this.formatNumber(value);
    }

    private capValue(value: number): number | null {
        const capped = Math.min(value, this.max);

        return isNaN(capped) || capped < this.min ? null : capped;
    }

    private onBlur(): void {
        const value = Math.max(this.nativeNumberValue || 0, this.min);
        const formattedValue = this.formatNumber(value);

        this.nativeValue = formattedValue;
        this.updateValue(value);

        if (this.primitiveTextfield) {
            this.primitiveTextfield.value = formattedValue;
        }
    }

    private formatNumber(value: number): string {
        return formatNumber(
            value,
            null,
            this.numberFormat.decimalSeparator,
            this.numberFormat.thousandSeparator,
        );
    }
}

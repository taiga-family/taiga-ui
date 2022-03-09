import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    Directive,
    ElementRef,
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
    isNativeFocused,
    setNativeFocused,
    TUI_FOCUSABLE_ITEM_ACCESSOR,
    tuiDefaultProp,
    TuiFocusableElementAccessor,
    TuiNativeFocusableElement,
} from '@taiga-ui/cdk';
import {
    formatNumber,
    HINT_CONTROLLER_PROVIDER,
    maskedMoneyValueIsEmpty,
    maskedNumberStringToNumber,
    NumberFormatSettings,
    TEXTFIELD_CONTROLLER_PROVIDER,
    TUI_HINT_WATCHED_CONTROLLER,
    TUI_NUMBER_FORMAT,
    TUI_TEXTFIELD_APPEARANCE,
    TUI_TEXTFIELD_WATCHED_CONTROLLER,
    TuiHintControllerDirective,
    TuiModeDirective,
    TuiTextfieldController,
} from '@taiga-ui/core';
import {AbstractTuiInputSlider} from '@taiga-ui/kit/abstract';
import {
    TuiSliderComponent,
    tuiSliderOptionsProvider,
} from '@taiga-ui/kit/components/slider';
import {TUI_FROM_TO_TEXTS} from '@taiga-ui/kit/tokens';
import {Observable} from 'rxjs';

/**
 * Turn on new `InputSlider`'s version.
 * The new version will behave almost the same as `InputSlider` from the next major release.
 * @deprecated TODO remove me in v3.0 and make `InputSlider` always "new".
 */
@Directive({
    selector: 'tui-input-slider[new]',
})
export class TuiNewInputSliderDirective {}

// @dynamic
@Component({
    selector: 'tui-input-slider',
    templateUrl: './input-slider.template.html',
    styleUrls: ['./input-slider.style.less'],
    host: {
        /**
         * TODO delete it in v3.0
         * Dont forget to clear html-tags
         */
        '[class._show-ticks-labels]': '!isNew',
    },
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: TUI_FOCUSABLE_ITEM_ACCESSOR,
            useExisting: forwardRef(() => TuiInputSliderComponent),
        },
        tuiSliderOptionsProvider({trackColor: 'transparent'}),
        HINT_CONTROLLER_PROVIDER,
        TEXTFIELD_CONTROLLER_PROVIDER,
    ],
})
export class TuiInputSliderComponent
    extends AbstractTuiInputSlider<number>
    implements TuiFocusableElementAccessor
{
    @ViewChild('focusableElement')
    private readonly focusableElement?: ElementRef<HTMLInputElement>;

    @ViewChild(TuiSliderComponent, {read: ElementRef})
    private readonly sliderRef?: ElementRef<HTMLInputElement>;

    /**
     * @deprecated use `tuiTextfieldCustomContent` instead
     * TODO delete in v3.0
     */
    @Input()
    @tuiDefaultProp()
    secondary = '';

    constructor(
        @Optional()
        @Self()
        @Inject(NgControl)
        control: NgControl | null,
        @Inject(ChangeDetectorRef) changeDetectorRef: ChangeDetectorRef,
        @Optional()
        @Inject(TuiModeDirective)
        protected readonly modeDirective: TuiModeDirective | null,
        @Inject(TUI_HINT_WATCHED_CONTROLLER)
        readonly hintController: TuiHintControllerDirective,
        @Inject(TUI_TEXTFIELD_WATCHED_CONTROLLER)
        readonly controller: TuiTextfieldController,
        @Inject(TUI_NUMBER_FORMAT)
        protected readonly numberFormat: NumberFormatSettings,
        @Inject(TUI_TEXTFIELD_APPEARANCE)
        readonly appearance: string,
        @Inject(TUI_FROM_TO_TEXTS) readonly fromToTexts$: Observable<[string, string]>,
        @Optional()
        @Inject(TuiNewInputSliderDirective)
        readonly isNew: TuiNewInputSliderDirective | null,
    ) {
        super(control, changeDetectorRef);
    }

    get nativeFocusableElement(): TuiNativeFocusableElement | null {
        return !this.focusableElement || this.computedDisabled
            ? null
            : this.focusableElement.nativeElement;
    }

    get focused(): boolean {
        return (
            isNativeFocused(this.nativeFocusableElement) ||
            isNativeFocused(this.sliderRef?.nativeElement || null)
        );
    }

    @HostBinding('class._has-tooltip')
    get hasTooltip(): boolean {
        return !!this.hintController.content && !this.disabled;
    }

    @HostBinding('class._min-label')
    get showMinLabel(): boolean {
        return !this.focused && this.value === this.min && !!this.minLabel;
    }

    @HostBinding('class._max-label')
    get showMaxLabel(): boolean {
        return !this.focused && this.value === this.max && !!this.maxLabel;
    }

    get computedValue(): string {
        if (this.focused && this.isInputValueNotFinished) {
            return this.inputValue;
        }

        return this.formattedValue;
    }

    get showValue(): boolean {
        return !this.showMinLabel && !this.showMaxLabel;
    }

    get inputValue(): string {
        return this.focusableElement ? this.focusableElement.nativeElement.value : '';
    }

    set inputValue(value: string) {
        if (this.focusableElement) {
            this.focusableElement.nativeElement.value = value;
        }
    }

    focusTextInput() {
        if (this.focusableElement) {
            setNativeFocused(this.focusableElement.nativeElement);
        }
    }

    onKeyDownArrowUp(event: KeyboardEvent) {
        if (this.readOnly) {
            return;
        }

        event.preventDefault();
        this.processStep(true);
        this.inputValue = this.formattedValue;
    }

    onKeyDownArrowDown(event: KeyboardEvent) {
        if (this.readOnly) {
            return;
        }

        event.preventDefault();
        this.processStep(false);
        this.inputValue = this.formattedValue;
    }

    onFocused(focused: boolean) {
        this.updateFocused(focused);

        if (focused) {
            return;
        }

        const inputValue = maskedNumberStringToNumber(
            this.computedValue,
            this.numberFormat.decimalSeparator,
            this.numberFormat.thousandSeparator,
        );
        const value = isNaN(inputValue) ? this.min : this.valueGuard(inputValue);

        this.updateValue(value);
        this.inputValue = this.formattedValue;
    }

    onValue(value: string) {
        const capped = this.capInputValue(value);
        const postfix = value.slice(-1)[0] === ',' ? ',' : '';

        if (maskedMoneyValueIsEmpty(value) || capped === null) {
            return;
        }

        const newValue = this.formatNumber(capped) + postfix;

        if (value !== newValue) {
            this.inputValue = newValue;
        }

        this.updateValue(capped);
    }

    onSliderValue(value: number) {
        this.updateValue(this.valueGuard(value));
        this.inputValue = this.formattedValue;
    }

    protected getFallbackValue(): number {
        return 0;
    }

    private get formattedValue(): string {
        return this.formatNumber(this.value);
    }

    private get isInputValueNotFinished(): boolean {
        if (this.inputValue === '') {
            return true;
        }

        const nativeNumberValue = maskedNumberStringToNumber(
            this.inputValue,
            this.numberFormat.decimalSeparator,
            this.numberFormat.thousandSeparator,
        );

        return nativeNumberValue < 0
            ? nativeNumberValue > this.max
            : nativeNumberValue < this.min;
    }

    private processStep(increment: boolean) {
        const value = this.valueGuard(
            increment ? this.value + this.step : this.value - this.step,
        );

        if (value !== this.value) {
            this.updateValue(value);
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

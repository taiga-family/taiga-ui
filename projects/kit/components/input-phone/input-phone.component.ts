import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ContentChild,
    EventEmitter,
    HostBinding,
    Inject,
    Input,
    Optional,
    Output,
    Self,
    TemplateRef,
    ViewChild,
} from '@angular/core';
import {NgControl} from '@angular/forms';
import {MASKITO_DEFAULT_OPTIONS, MaskitoOptions, maskitoTransform} from '@maskito/core';
import {maskitoCaretGuard, maskitoPrefixPostprocessorGenerator} from '@maskito/kit';
import {
    AbstractTuiControl,
    TuiActiveZoneDirective,
    tuiAsControl,
    tuiAsFocusableItemAccessor,
    TuiContextWithImplicit,
    TuiFocusableElementAccessor,
    TuiInputMode,
    tuiIsNativeFocused,
    tuiPure,
} from '@taiga-ui/cdk';
import {
    TUI_MASK_SYMBOLS_REGEXP,
    TUI_TEXTFIELD_CLEANER,
    TUI_TEXTFIELD_SIZE,
    tuiAsDataListHost,
    TuiDataListDirective,
    TuiDataListHost,
    TuiHostedDropdownComponent,
    TuiPrimitiveTextfieldComponent,
    TuiSizeL,
    TuiSizeS,
    TuiTextfieldCleanerDirective,
    TuiTextfieldSizeDirective,
} from '@taiga-ui/core';
import {FIXED_DROPDOWN_CONTROLLER_PROVIDER} from '@taiga-ui/kit/providers';

import {TUI_INPUT_PHONE_OPTIONS, TuiInputPhoneOptions} from './input-phone.options';
import {
    tuiCreateCompletePhoneInsertionPreprocessor,
    tuiCreatePhoneMaskExpression,
} from './utils';

@Component({
    selector: 'tui-input-phone',
    templateUrl: './input-phone.template.html',
    styleUrls: ['./input-phone.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        tuiAsFocusableItemAccessor(TuiInputPhoneComponent),
        tuiAsControl(TuiInputPhoneComponent),
        tuiAsDataListHost(TuiInputPhoneComponent),
    ],
    viewProviders: [FIXED_DROPDOWN_CONTROLLER_PROVIDER],
})
export class TuiInputPhoneComponent
    extends AbstractTuiControl<string>
    implements TuiFocusableElementAccessor, TuiDataListHost<string>
{
    @ViewChild(TuiHostedDropdownComponent)
    private readonly dropdown?: TuiHostedDropdownComponent;

    @ViewChild(TuiPrimitiveTextfieldComponent)
    private readonly textfield?: TuiPrimitiveTextfieldComponent;

    @Input('countryCode')
    set countryCodeSetter(newCountryCode: string) {
        const prevCountryCode = this.countryCode;

        this.countryCode = newCountryCode;
        this.updateValueWithNewCountryCode(prevCountryCode, newCountryCode);
    }

    @Input()
    phoneMaskAfterCountryCode = this.options.phoneMaskAfterCountryCode;

    @Input()
    allowText = this.options.allowText;

    @Input()
    search = '';

    @Output()
    readonly searchChange = new EventEmitter<string>();

    @ContentChild(TuiDataListDirective, {read: TemplateRef})
    readonly datalist?: TemplateRef<TuiContextWithImplicit<TuiActiveZoneDirective>>;

    countryCode = this.options.countryCode;

    open = false;

    constructor(
        @Optional() @Self() @Inject(NgControl) control: NgControl | null,
        @Inject(ChangeDetectorRef) cdr: ChangeDetectorRef,
        @Inject(TUI_TEXTFIELD_CLEANER)
        private readonly textfieldCleaner: TuiTextfieldCleanerDirective,
        @Inject(TUI_INPUT_PHONE_OPTIONS) private readonly options: TuiInputPhoneOptions,
        @Inject(TUI_TEXTFIELD_SIZE)
        private readonly textfieldSize: TuiTextfieldSizeDirective,
    ) {
        super(control, cdr);
    }

    @HostBinding('attr.data-size')
    get size(): TuiSizeL | TuiSizeS {
        return this.textfieldSize.size;
    }

    get nativeFocusableElement(): HTMLInputElement | null {
        return !this.textfield || this.computedDisabled
            ? null
            : this.textfield.nativeFocusableElement;
    }

    get focused(): boolean {
        return (
            tuiIsNativeFocused(this.nativeFocusableElement) ||
            (!!this.dropdown && this.dropdown.focused)
        );
    }

    get nativeValue(): string {
        return this.nativeFocusableElement
            ? this.nativeFocusableElement.value
            : maskitoTransform(this.value, this.maskOptions);
    }

    set nativeValue(value: string) {
        if (this.nativeFocusableElement) {
            this.nativeFocusableElement.value = value;
        }
    }

    get inputMode(): TuiInputMode {
        return this.allowText ? 'text' : 'numeric';
    }

    get canOpen(): boolean {
        return this.interactive && !!this.datalist;
    }

    get canClean(): boolean {
        return (
            this.nativeValue !== this.nonRemovablePrefix && this.textfieldCleaner.cleaner
        );
    }

    get maskOptions(): MaskitoOptions {
        return this.calculateMask(
            this.countryCode,
            this.phoneMaskAfterCountryCode,
            this.nonRemovablePrefix,
            this.allowText,
        );
    }

    onActiveZone(active: boolean): void {
        this.updateFocused(active);

        if (active && !this.nativeValue && !this.readOnly && !this.allowText) {
            this.updateSearch(this.nonRemovablePrefix);
            this.nativeValue = this.nonRemovablePrefix;

            return;
        }

        if (this.nativeValue === this.nonRemovablePrefix || this.isTextValue) {
            this.updateSearch('');
            this.nativeValue = '';
        }

        if (!active && !this.allowText && this.nativeFocusableElement) {
            this.nativeValue = this.nativeValue.replace(/\D$/, '');
        }
    }

    onValueChange(value: string): void {
        const parsed = isText(value)
            ? value
            : value.replace(TUI_MASK_SYMBOLS_REGEXP, '').slice(0, this.maxPhoneLength);

        this.updateSearch(parsed);
        this.value = parsed === this.countryCode || isText(parsed) ? '' : parsed;
        this.open = true;
    }

    handleOption(item: string): void {
        this.focusInput();
        this.value = item;
        this.nativeValue = maskitoTransform(this.value, this.maskOptions);
        this.updateSearch('');
        this.open = false;
    }

    override setDisabledState(): void {
        super.setDisabledState();
        this.open = false;
    }

    override writeValue(value: string | null): void {
        super.writeValue(value);
        this.nativeValue = maskitoTransform(value || '', this.maskOptions);
        this.updateSearch('');
    }

    protected getFallbackValue(): string {
        return '';
    }

    private get nonRemovablePrefix(): string {
        return `${this.countryCode} `;
    }

    private get maxPhoneLength(): number {
        return (
            this.countryCode.length +
            this.phoneMaskAfterCountryCode.replace(/[^#]+/g, '').length
        );
    }

    private get isTextValue(): boolean {
        return !!this.search && isText(this.search);
    }

    @tuiPure
    private calculateMask(
        countryCode: string,
        phoneMaskAfterCountryCode: string,
        nonRemovablePrefix: string,
        allowText: boolean,
    ): MaskitoOptions {
        const mask = tuiCreatePhoneMaskExpression(countryCode, phoneMaskAfterCountryCode);
        const preprocessors = [
            tuiCreateCompletePhoneInsertionPreprocessor(
                countryCode,
                phoneMaskAfterCountryCode,
            ),
        ];

        return allowText
            ? {
                  mask: ({value}) =>
                      isText(value) && value !== '+'
                          ? (MASKITO_DEFAULT_OPTIONS.mask as RegExp)
                          : mask,
                  preprocessors,
              }
            : {
                  mask,
                  preprocessors,
                  postprocessors: [
                      maskitoPrefixPostprocessorGenerator(nonRemovablePrefix),
                  ],
                  plugins: [
                      maskitoCaretGuard((value, [from, to]) => [
                          from === to ? nonRemovablePrefix.length : 0,
                          value.length,
                      ]),
                  ],
              };
    }

    private focusInput(): void {
        if (this.nativeFocusableElement) {
            this.nativeFocusableElement.focus({preventScroll: true});
        }
    }

    private updateSearch(search: string): void {
        if (this.search === search) {
            return;
        }

        this.search = search;
        this.searchChange.emit(search);
    }

    private updateValueWithNewCountryCode(
        prevCountryCode: string,
        newCountryCode: string,
    ): void {
        if (!this.isTextValue) {
            this.value = this.value.replace(prevCountryCode, newCountryCode);
            this.nativeValue = maskitoTransform(this.value, this.maskOptions);
        }
    }
}

function isText(value: string): boolean {
    return Number.isNaN(parseInt(value.replace(TUI_MASK_SYMBOLS_REGEXP, ''), 10));
}

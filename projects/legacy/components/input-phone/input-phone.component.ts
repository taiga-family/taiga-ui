import {
    ChangeDetectionStrategy,
    Component,
    ContentChild,
    EventEmitter,
    HostBinding,
    inject,
    Input,
    Output,
    TemplateRef,
    ViewChild,
} from '@angular/core';
import type {MaskitoOptions} from '@maskito/core';
import {MASKITO_DEFAULT_OPTIONS, maskitoTransform} from '@maskito/core';
import {maskitoCaretGuard, maskitoPrefixPostprocessorGenerator} from '@maskito/kit';
import type {
    TuiActiveZoneDirective,
    TuiContext,
    TuiFocusableElementAccessor,
    TuiInputMode,
} from '@taiga-ui/cdk';
import {
    AbstractTuiControl,
    tuiAsControl,
    tuiAsFocusableItemAccessor,
    tuiIsNativeFocused,
    tuiPure,
} from '@taiga-ui/cdk';
import type {TuiDataListHost, TuiSizeL, TuiSizeS} from '@taiga-ui/core';
import {
    TUI_TEXTFIELD_CLEANER,
    TUI_TEXTFIELD_SIZE,
    tuiAsDataListHost,
    TuiDataListDirective,
    TuiHostedDropdownComponent,
    TuiPrimitiveTextfieldComponent,
} from '@taiga-ui/core';
import {FIXED_DROPDOWN_CONTROLLER_PROVIDER} from '@taiga-ui/legacy/utils';

import {TUI_INPUT_PHONE_OPTIONS} from './input-phone.options';
import {
    tuiCreateCompletePhoneInsertionPreprocessor,
    tuiCreatePhoneMaskExpression,
} from './utils';

const MASK_SYMBOLS = /[ \-_()]/g;

function isText(value: string): boolean {
    return Number.isNaN(parseInt(value.replaceAll(MASK_SYMBOLS, ''), 10));
}

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

    private readonly textfieldCleaner = inject(TUI_TEXTFIELD_CLEANER);
    private readonly options = inject(TUI_INPUT_PHONE_OPTIONS);
    private readonly textfieldSize = inject(TUI_TEXTFIELD_SIZE);

    @Input()
    public phoneMaskAfterCountryCode = this.options.phoneMaskAfterCountryCode;

    @Input()
    public allowText = this.options.allowText;

    @Input()
    public search = '';

    @Output()
    public readonly searchChange = new EventEmitter<string>();

    public countryCode = this.options.countryCode;

    @ContentChild(TuiDataListDirective, {read: TemplateRef})
    protected readonly datalist?: TemplateRef<TuiContext<TuiActiveZoneDirective>>;

    protected open = false;

    @Input('countryCode')
    public set countryCodeSetter(newCountryCode: string) {
        const prevCountryCode = this.countryCode;

        this.countryCode = newCountryCode;
        this.updateValueWithNewCountryCode(prevCountryCode, newCountryCode);
    }

    public get nativeFocusableElement(): HTMLInputElement | null {
        return !this.textfield || this.computedDisabled
            ? null
            : this.textfield.nativeFocusableElement;
    }

    public get focused(): boolean {
        return (
            tuiIsNativeFocused(this.nativeFocusableElement) ||
            (!!this.dropdown && this.dropdown.focused)
        );
    }

    public get nativeValue(): string {
        return (
            this.nativeFocusableElement?.value ||
            maskitoTransform(this.value, this.maskOptions)
        );
    }

    public set nativeValue(value: string) {
        if (this.nativeFocusableElement) {
            this.nativeFocusableElement.value = value;
        }
    }

    public get inputMode(): TuiInputMode {
        return this.allowText ? 'text' : 'numeric';
    }

    public onValueChange(value: string): void {
        const parsed = isText(value)
            ? value
            : value.replaceAll(MASK_SYMBOLS, '').slice(0, this.maxPhoneLength);

        this.updateSearch(parsed);
        this.value = parsed === this.countryCode || isText(parsed) ? '' : parsed;
        this.open = true;

        if (!this.value && !this.allowText) {
            this.nativeValue = this.nonRemovablePrefix;
        }
    }

    public handleOption(item: string): void {
        this.focusInput();
        this.value = item;
        this.nativeValue = maskitoTransform(this.value, this.maskOptions);
        this.updateSearch('');
        this.open = false;
    }

    public override setDisabledState(): void {
        super.setDisabledState();
        this.open = false;
    }

    public override writeValue(value: string | null): void {
        super.writeValue(value);
        this.nativeValue = maskitoTransform(value || '', this.maskOptions);
        this.updateSearch('');
    }

    @HostBinding('attr.data-size')
    protected get size(): TuiSizeL | TuiSizeS {
        return this.textfieldSize.size;
    }

    protected get canOpen(): boolean {
        return this.interactive && !!this.datalist;
    }

    protected get canClean(): boolean {
        return (
            this.nativeValue !== this.nonRemovablePrefix && this.textfieldCleaner.cleaner
        );
    }

    protected get maskOptions(): MaskitoOptions {
        return this.calculateMask(
            this.countryCode,
            this.phoneMaskAfterCountryCode,
            this.nonRemovablePrefix,
            this.allowText,
        );
    }

    protected onActiveZone(active: boolean): void {
        this.updateFocused(active);

        if (active && !this.nativeValue && !this.readOnly && !this.allowText) {
            this.updateSearch(this.nonRemovablePrefix);
            this.nativeValue = this.nonRemovablePrefix;

            return;
        }

        if (this.nativeValue === this.nonRemovablePrefix || this.isTextValue) {
            this.updateSearch('');
            this.nativeValue = '';

            return;
        }

        if (!active && !this.allowText && this.nativeFocusableElement) {
            this.nativeValue = this.nativeValue.replace(/\D$/, '');
        }
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
            this.phoneMaskAfterCountryCode.replaceAll(/[^#]+/g, '').length
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

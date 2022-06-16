import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ContentChild,
    EventEmitter,
    Inject,
    Input,
    Optional,
    Output,
    Self,
    TemplateRef,
    ViewChild,
} from '@angular/core';
import {NgControl} from '@angular/forms';
import {
    AbstractTuiControl,
    getClipboardDataText,
    isNativeFocused,
    setNativeFocused,
    TuiActiveZoneDirective,
    TuiContextWithImplicit,
    tuiDefaultProp,
    TuiFocusableElementAccessor,
    TuiInputModeT,
    tuiRequiredSetter,
} from '@taiga-ui/cdk';
import {
    formatPhone,
    TUI_MASK_SYMBOLS_REGEXP,
    TUI_TEXTFIELD_CLEANER,
    TuiDataListDirective,
    TuiDataListHost,
    TuiHostedDropdownComponent,
    TuiPrimitiveTextfieldComponent,
    TuiTextfieldCleanerDirective,
    TuiTextMaskOptions,
} from '@taiga-ui/core';
import {TextMaskConfig} from 'angular2-text-mask';
import {Observable} from 'rxjs';

import {TUI_INPUT_PHONE_OPTIONS, TuiInputPhoneOptions} from './input-phone.options';
import {INPUT_PHONE_PROVIDERS, SELECTION_STREAM} from './input-phone.providers';

// @dynamic
@Component({
    selector: 'tui-input-phone',
    templateUrl: './input-phone.template.html',
    styleUrls: ['./input-phone.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: INPUT_PHONE_PROVIDERS,
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
    @tuiRequiredSetter()
    set countryCodeSetter(countryCode: string) {
        this.updateValueWithNewCountryCode(countryCode);
        this.countryCode = countryCode;
    }

    @Input()
    @tuiDefaultProp()
    phoneMaskAfterCountryCode = this.options.phoneMaskAfterCountryCode;

    @Input()
    @tuiDefaultProp()
    allowText = this.options.allowText;

    @Input()
    @tuiDefaultProp()
    search = '';

    @Output()
    readonly searchChange = new EventEmitter<string>();

    @ContentChild(TuiDataListDirective, {read: TemplateRef})
    readonly datalist?: TemplateRef<TuiContextWithImplicit<TuiActiveZoneDirective>>;

    readonly textMaskOptions: TextMaskConfig = {
        mask: value =>
            this.allowText && !this.value && isText(value) && value !== '+'
                ? false
                : [
                      ...this.countryCode.split(''),
                      ' ',
                      ...this.phoneMaskAfterCountryCode
                          .replace(/[^#\- ()]+/g, '')
                          .split('')
                          .map(item => (item === '#' ? /\d/ : item)),
                  ],
        pipe: value => {
            if (this.allowText) {
                return value;
            }

            return value === '' && this.focused && !this.readOnly
                ? `${this.countryCode} `
                : value.replace(/-$/, '');
        },
        guide: false,
    } as TuiTextMaskOptions as unknown as TextMaskConfig;

    countryCode = this.options.countryCode;

    open = false;

    constructor(
        @Optional()
        @Self()
        @Inject(NgControl)
        control: NgControl | null,
        @Inject(ChangeDetectorRef) changeDetectorRef: ChangeDetectorRef,
        @Inject(SELECTION_STREAM)
        selection$: Observable<unknown>,
        @Inject(TUI_TEXTFIELD_CLEANER)
        private readonly textfieldCleaner: TuiTextfieldCleanerDirective,
        @Inject(TUI_INPUT_PHONE_OPTIONS)
        private readonly options: TuiInputPhoneOptions,
    ) {
        super(control, changeDetectorRef);

        selection$.subscribe(() => {
            this.setCaretPosition();
        });
    }

    get nativeFocusableElement(): HTMLInputElement | null {
        return !this.textfield || this.computedDisabled
            ? null
            : this.textfield.nativeFocusableElement;
    }

    get focused(): boolean {
        return (
            isNativeFocused(this.nativeFocusableElement) ||
            (!!this.dropdown && this.dropdown.focused)
        );
    }

    get computedValue(): string {
        return this.value
            ? formatPhone(this.value, this.countryCode, this.phoneMaskAfterCountryCode)
            : this.search || '';
    }

    get inputMode(): TuiInputModeT {
        return this.allowText ? 'text' : 'numeric';
    }

    get canOpen(): boolean {
        return this.interactive && !!this.datalist;
    }

    get canClean(): boolean {
        return this.computedValue !== this.countryCode && this.textfieldCleaner.cleaner;
    }

    onHovered(hovered: boolean): void {
        this.updateHovered(hovered);
    }

    onDrop(event: DragEvent): void {
        if (!event.dataTransfer) {
            return;
        }

        this.setValueWithoutPrefix(event.dataTransfer.getData('text'));
        event.preventDefault();
    }

    onPaste(event: Event): void {
        this.setValueWithoutPrefix(getClipboardDataText(event as ClipboardEvent));
    }

    onActiveZone(active: boolean): void {
        this.updateFocused(active);

        if (active && !this.computedValue && !this.readOnly && !this.allowText) {
            this.updateSearch(this.countryCode);

            return;
        }

        if (
            this.computedValue === this.countryCode ||
            (this.search !== null &&
                isNaN(parseInt(this.search.replace(TUI_MASK_SYMBOLS_REGEXP, ''), 10)))
        ) {
            this.updateSearch('');
        }
    }

    onBackspace(event: Event): void {
        const target = event.target as HTMLInputElement;

        if (
            (target.selectionStart || 0) <= this.nonRemovableLength &&
            target.selectionStart === target.selectionEnd
        ) {
            event.preventDefault();
        }
    }

    onValueChange(value: string): void {
        value = value === '' ? this.countryCode : value;

        const parsed = isText(value) ? value : value.replace(TUI_MASK_SYMBOLS_REGEXP, '');

        this.updateSearch(parsed);
        this.updateValue(parsed === this.countryCode || isText(parsed) ? '' : parsed);
        this.open = true;
    }

    handleOption(item: string): void {
        this.focusInput();
        this.updateValue(item);
        this.updateSearch('');
        this.open = false;
    }

    setDisabledState(): void {
        super.setDisabledState();
        this.open = false;
    }

    writeValue(value: string | null): void {
        super.writeValue(value);
        this.updateSearch('');
    }

    protected getFallbackValue(): string {
        return '';
    }

    private get caretIsInForbiddenArea(): boolean {
        const {nativeFocusableElement} = this;

        if (!nativeFocusableElement) {
            return false;
        }

        const {selectionStart, selectionEnd} = nativeFocusableElement;

        return (
            isNativeFocused(nativeFocusableElement) &&
            selectionStart !== null &&
            selectionStart < this.nonRemovableLength &&
            selectionStart === selectionEnd
        );
    }

    private get nonRemovableLength(): number {
        return this.isTextValue ? 0 : this.countryCode.length + 1;
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

    private setCaretPosition(): void {
        if (this.caretIsInForbiddenArea && !!this.nativeFocusableElement) {
            this.nativeFocusableElement.setSelectionRange(
                this.nonRemovableLength,
                this.nonRemovableLength,
            );
        }
    }

    private setValueWithoutPrefix(value: string): void {
        if (this.readOnly) {
            return;
        }

        this.open = true;
        this.updateValue(this.cleanValue(value));
        this.updateSearch(
            this.allowText && isText(value)
                ? value
                : value.replace(TUI_MASK_SYMBOLS_REGEXP, ''),
        );
    }

    private cleanValue(value: string): string {
        const reg: RegExp =
            this.countryCode === '+7' ? /^7|^8/ : new RegExp(this.countryCode.slice(1));
        const oldValueExist =
            this.value.length > this.countryCode.length &&
            this.value.length < this.maxPhoneLength;
        const newValueLength = value.replace(TUI_MASK_SYMBOLS_REGEXP, '').length;
        const cleanNewValue = value.replace(/[^0-9]+/g, '');
        const selectionLength = String(getSelection()).length;

        if (oldValueExist && selectionLength === 0) {
            return `${this.value}${cleanNewValue}`.slice(0, this.maxPhoneLength);
        }

        if (newValueLength < this.maxPhoneLength - 1) {
            return `${this.countryCode}${cleanNewValue}`.slice(0, this.maxPhoneLength);
        }

        return `${this.countryCode}${cleanNewValue.replace(reg, '')}`.slice(
            0,
            this.maxPhoneLength,
        );
    }

    private focusInput(): void {
        if (this.nativeFocusableElement) {
            setNativeFocused(this.nativeFocusableElement, true, true);
        }
    }

    private updateSearch(search: string): void {
        if (this.search === search) {
            return;
        }

        this.search = search;
        this.searchChange.emit(search);
    }

    private updateValueWithNewCountryCode(newCountryCode: string): void {
        if (!this.isTextValue) {
            this.updateValue(this.value.replace(this.countryCode, newCountryCode));
        }
    }
}

function isText(value: string): boolean {
    return isNaN(parseInt(value.replace(TUI_MASK_SYMBOLS_REGEXP, ''), 10));
}

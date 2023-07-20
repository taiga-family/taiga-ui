import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    EventEmitter,
    HostBinding,
    HostListener,
    Inject,
    Input,
    Optional,
    Output,
    Self,
    ViewChild,
} from '@angular/core';
import {NgControl} from '@angular/forms';
import {
    AbstractTuiControl,
    CHAR_PLUS,
    tuiAsControl,
    tuiAsFocusableItemAccessor,
    TuiContextWithImplicit,
    TuiFocusableElementAccessor,
    TuiMapper,
    tuiPure,
} from '@taiga-ui/cdk';
import {
    TUI_MASK_SYMBOLS_REGEXP,
    TUI_NON_DIGITS_REGEXP,
    TUI_TEXTFIELD_SIZE,
    TuiFlagPipe,
    TuiPrimitiveTextfieldComponent,
    TuiSizeL,
    TuiSizeM,
    TuiSizeS,
    TuiTextfieldSizeDirective,
} from '@taiga-ui/core';
import {TuiCountryIsoCode} from '@taiga-ui/i18n';
import {TUI_ARROW} from '@taiga-ui/kit/components/arrow';
import {TuiInputPhoneComponent} from '@taiga-ui/kit/components/input-phone';
import {TuiToCountryCodePipe} from '@taiga-ui/kit/pipes';
import {FIXED_DROPDOWN_CONTROLLER_PROVIDER} from '@taiga-ui/kit/providers';
import {TUI_COUNTRIES, TUI_COUNTRIES_MASKS} from '@taiga-ui/kit/tokens';
import {tuiGetMaxAllowedPhoneLength, tuiIsoToCountryCode} from '@taiga-ui/kit/utils';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {Observable} from 'rxjs';

import {
    TUI_INPUT_PHONE_INTERNATIONAL_OPTIONS,
    TuiInputPhoneInternationalOptions,
} from './input-phone-international.options';
import {tuiExtractValueFromEvent} from './utils/extract-value-from-event';

@Component({
    selector: 'tui-input-phone-international',
    templateUrl: './input-phone-international.template.html',
    styleUrls: ['./input-phone-international.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        tuiAsFocusableItemAccessor(TuiInputPhoneInternationalComponent),
        tuiAsControl(TuiInputPhoneInternationalComponent),
        // TODO: for backward compatibility only. Drop in v4.0
        TuiFlagPipe,
        TuiToCountryCodePipe,
    ],
    viewProviders: [FIXED_DROPDOWN_CONTROLLER_PROVIDER],
})
export class TuiInputPhoneInternationalComponent
    extends AbstractTuiControl<string>
    implements TuiFocusableElementAccessor
{
    @ViewChild(TuiInputPhoneComponent)
    private readonly inputPhoneComponent?: TuiInputPhoneComponent;

    @ViewChild(TuiPrimitiveTextfieldComponent)
    private readonly primitiveTextfield?: TuiPrimitiveTextfieldComponent;

    @Input('countryIsoCode')
    set isoCode(code: TuiCountryIsoCode) {
        if (this.countryIsoCode === code) {
            return;
        }

        this.inputPhoneComponent?.writeValue(this.value);
        this.countryIsoCode = code;
    }

    @Input()
    countries = this.options.countries;

    @Output()
    readonly countryIsoCodeChange = new EventEmitter<TuiCountryIsoCode>();

    countryIsoCode = this.options.countryIsoCode;

    open = false;

    readonly arrow: PolymorpheusContent<
        TuiContextWithImplicit<TuiSizeL | TuiSizeM | TuiSizeS>
    > = TUI_ARROW;

    constructor(
        @Optional()
        @Self()
        @Inject(NgControl)
        control: NgControl | null,
        @Inject(ChangeDetectorRef) cdr: ChangeDetectorRef,
        @Inject(TUI_COUNTRIES)
        readonly countriesNames$: Observable<Record<TuiCountryIsoCode, string>>,
        @Inject(TUI_COUNTRIES_MASKS)
        readonly countriesMasks: Record<TuiCountryIsoCode, string>,
        @Inject(TUI_INPUT_PHONE_INTERNATIONAL_OPTIONS)
        private readonly options: TuiInputPhoneInternationalOptions,
        @Inject(TuiFlagPipe)
        private readonly flagPipe: TuiFlagPipe,
        @Inject(TuiToCountryCodePipe)
        private readonly extractCountryCodePipe: TuiToCountryCodePipe,
        @Inject(TUI_TEXTFIELD_SIZE)
        private readonly textfieldSize: TuiTextfieldSizeDirective,
    ) {
        super(control, cdr);
    }

    @HostBinding('attr.data-size')
    get size(): TuiSizeL | TuiSizeS {
        return this.textfieldSize.size;
    }

    get nativeFocusableElement(): HTMLElement | null {
        return this.inputPhoneComponent && !this.computedDisabled
            ? this.inputPhoneComponent.nativeFocusableElement
            : null;
    }

    get focused(): boolean {
        return (
            (!!this.primitiveTextfield && this.primitiveTextfield.focused) ||
            (!!this.inputPhoneComponent && this.inputPhoneComponent.focused)
        );
    }

    get inputPhoneCountryCode(): string {
        return tuiIsoToCountryCode(this.countriesMasks, this.countryIsoCode);
    }

    get phoneMaskAfterCountryCode(): string {
        const countryCode = this.inputPhoneCountryCode;

        return this.calculateMaskAfterCountryCode(
            this.countriesMasks[this.countryIsoCode],
            countryCode,
        );
    }

    /**
     * @deprecated use `<img [src]="countryIsoCode | tuiFlagPipe" />`
     * TODO drop in v4.0
     */
    get countryFlagPath(): string {
        return this.getFlagPath(this.countryIsoCode);
    }

    @HostListener('paste.capture.prevent.stop', ['$event'])
    @HostListener('drop.capture.prevent.stop', ['$event'])
    onPaste(event: ClipboardEvent | DragEvent): void {
        let value = tuiExtractValueFromEvent(event).replace(TUI_NON_DIGITS_REGEXP, '');
        const countryIsoCode = this.extractCountryCodePipe.transform(
            value,
            this.countries,
        );

        if (!countryIsoCode) {
            this.value = `${this.inputPhoneCountryCode}${value}`
                .replace(TUI_MASK_SYMBOLS_REGEXP, '')
                .slice(
                    0,
                    tuiGetMaxAllowedPhoneLength(this.countriesMasks, this.countryIsoCode),
                );

            return;
        }

        if (countryIsoCode === TuiCountryIsoCode.RU) {
            value = value.replace(/^8/, '7');
        }

        this.updateCountryIsoCode(countryIsoCode);
        this.value = `${CHAR_PLUS}${value}`;
    }

    readonly isoToCountryCodeMapper: TuiMapper<TuiCountryIsoCode, string> = item =>
        tuiIsoToCountryCode(this.countriesMasks, item);

    /**
     * @deprecated use `<img [src]="countryIsoCode | tuiFlagPipe" />`
     * TODO drop in v4.0
     */
    getFlagPath(code: TuiCountryIsoCode): string {
        return this.flagPipe.transform(code);
    }

    onItemClick(isoCode: TuiCountryIsoCode): void {
        this.open = false;
        this.updateCountryIsoCode(isoCode);
        // recalculates mask inside inputPhone to prevent isoCode conflict
        this.cdr.detectChanges();

        const maxLength = tuiGetMaxAllowedPhoneLength(this.countriesMasks, isoCode);

        if (this.value.length > maxLength) {
            this.value = this.value.slice(0, maxLength);
        }

        if (this.nativeFocusableElement) {
            this.nativeFocusableElement.focus();
        }
    }

    override setDisabledState(): void {
        super.setDisabledState();
        this.close();
    }

    /**
     * @deprecated use `{{ countryIsoCode | tuiIsoToCountryCode }}`
     * TODO drop in v4.0
     */
    isoToCountryCode(isoCode: TuiCountryIsoCode): string {
        return tuiIsoToCountryCode(this.countriesMasks, isoCode);
    }

    /** @deprecated use 'value' setter */
    onModelChange(value: string): void {
        this.value = value;
    }

    onActiveZone(active: boolean): void {
        this.updateFocused(active);
    }

    protected getFallbackValue(): string {
        return '';
    }

    @tuiPure
    private calculateMaskAfterCountryCode(mask: string, countryCode: string): string {
        return mask.replace(countryCode, '').trim();
    }

    private close(): void {
        this.open = false;
    }

    private updateCountryIsoCode(code: TuiCountryIsoCode): void {
        this.countryIsoCode = code;
        this.countryIsoCodeChange.emit(code);
    }
}

import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    EventEmitter,
    HostListener,
    Inject,
    Input,
    Optional,
    Output,
    Self,
    ViewChild,
} from '@angular/core';
import {NgControl} from '@angular/forms';
import type {
    TuiContextWithImplicit,
    TuiFocusableElementAccessor,
    TuiInjectionTokenType,
} from '@taiga-ui/cdk';
import {
    AbstractTuiControl,
    CHAR_PLUS,
    tuiAsControl,
    tuiAsFocusableItemAccessor,
    tuiDefaultProp,
    TuiMapper,
    tuiPure,
    TuiStringHandler,
} from '@taiga-ui/cdk';
import type {TuiSizeL, TuiSizeM, TuiSizeS} from '@taiga-ui/core';
import {
    TUI_ICONS_PATH,
    TUI_MASK_SYMBOLS_REGEXP,
    TUI_NON_DIGITS_REGEXP,
    TuiPrimitiveTextfieldComponent,
} from '@taiga-ui/core';
import {TuiCountryIsoCode} from '@taiga-ui/i18n';
import {TUI_ARROW} from '@taiga-ui/kit/components/arrow';
import {TuiInputPhoneComponent} from '@taiga-ui/kit/components/input-phone';
import {FIXED_DROPDOWN_CONTROLLER_PROVIDER} from '@taiga-ui/kit/providers';
import {TUI_COUNTRIES} from '@taiga-ui/kit/tokens';
import type {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

import {MASK_AFTER_CODE_REGEXP} from './const/mask-after-code-regexp';
import {
    TUI_INPUT_PHONE_INTERNATIONAL_OPTIONS,
    TuiInputPhoneInternationalOptions,
} from './input-phone-international.options';
import {TUI_COUNTRIES_MASKS} from './tokens/countries-masks';
import {tuiExtractValueFromEvent} from './utils/extract-value-from-event';

@Component({
    selector: `tui-input-phone-international`,
    templateUrl: `./input-phone-international.template.html`,
    styleUrls: [`./input-phone-international.style.less`],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        tuiAsFocusableItemAccessor(TuiInputPhoneInternationalComponent),
        tuiAsControl(TuiInputPhoneInternationalComponent),
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

    private readonly staticPath: string | null = null;

    @Input(`countryIsoCode`)
    @tuiDefaultProp()
    set isoCode(code: TuiCountryIsoCode) {
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
        TuiContextWithImplicit<TuiSizeS | TuiSizeM | TuiSizeL>
    > = TUI_ARROW;

    constructor(
        @Optional()
        @Self()
        @Inject(NgControl)
        control: NgControl | null,
        @Inject(ChangeDetectorRef) changeDetectorRef: ChangeDetectorRef,
        @Inject(TUI_ICONS_PATH)
        iconsPath: TuiStringHandler<string>,
        @Inject(TUI_COUNTRIES)
        readonly countriesNames$: TuiInjectionTokenType<typeof TUI_COUNTRIES>,
        @Inject(TUI_COUNTRIES_MASKS)
        readonly countriesMasks: TuiInjectionTokenType<typeof TUI_COUNTRIES_MASKS>,
        @Inject(TUI_INPUT_PHONE_INTERNATIONAL_OPTIONS)
        private readonly options: TuiInputPhoneInternationalOptions,
    ) {
        super(control, changeDetectorRef);

        this.staticPath = iconsPath(`tuiIcon`).replace(`tuiIcon.svg#tuiIcon`, ``);
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
        return this.isoToCountryCode(this.countryIsoCode);
    }

    get phoneMaskAfterCountryCode(): string {
        const countryCode = this.isoToCountryCode(this.countryIsoCode);

        return this.calculateMaskAfterCountryCode(
            this.countriesMasks[this.countryIsoCode],
            countryCode,
        );
    }

    get countryFlagPath(): string {
        return this.getFlagPath(this.countryIsoCode);
    }

    @HostListener(`paste.capture.prevent.stop`, [`$event`])
    @HostListener(`drop.capture.prevent.stop`, [`$event`])
    onPaste(event: ClipboardEvent | DragEvent): void {
        let value = tuiExtractValueFromEvent(event).replace(TUI_NON_DIGITS_REGEXP, ``);
        const countryIsoCode = this.extractCountryCode(value);

        if (!countryIsoCode) {
            this.updateValue(
                `${this.inputPhoneCountryCode}${value}`
                    .replace(TUI_MASK_SYMBOLS_REGEXP, ``)
                    .slice(0, this.getMaxAllowedLength(this.countryIsoCode)),
            );

            return;
        }

        if (countryIsoCode === TuiCountryIsoCode.RU) {
            value = value.replace(/^8/, `7`);
        }

        this.updateCountryIsoCode(countryIsoCode);
        this.updateValue(`${CHAR_PLUS}${value}`);
    }

    readonly isoToCountryCodeMapper: TuiMapper<TuiCountryIsoCode, string> = item =>
        this.isoToCountryCode(item);

    getFlagPath(code: TuiCountryIsoCode): string {
        return `${this.staticPath}${code}.png`;
    }

    onItemClick(isoCode: TuiCountryIsoCode): void {
        this.open = false;
        this.updateCountryIsoCode(isoCode);
        // recalculates mask inside inputPhone to prevent isoCode conflict
        this.changeDetectorRef.detectChanges();

        const maxLength = this.getMaxAllowedLength(isoCode);

        if (this.value.length > maxLength) {
            this.updateValue(this.value.slice(0, maxLength));
        }

        if (this.nativeFocusableElement) {
            this.nativeFocusableElement.focus();
        }
    }

    override setDisabledState(): void {
        super.setDisabledState();
        this.close();
    }

    isoToCountryCode(isoCode: TuiCountryIsoCode): string {
        return this.countriesMasks[isoCode].replace(MASK_AFTER_CODE_REGEXP, ``);
    }

    onModelChange(value: string): void {
        this.updateValue(value);
    }

    onActiveZone(active: boolean): void {
        this.updateFocused(active);
    }

    protected getFallbackValue(): string {
        return ``;
    }

    @tuiPure
    private calculateMaskAfterCountryCode(mask: string, countryCode: string): string {
        return mask.replace(countryCode, ``).trim();
    }

    private close(): void {
        this.open = false;
    }

    private getMaxAllowedLength(isoCode: TuiCountryIsoCode): number {
        return this.countriesMasks[isoCode].replace(/[()\- ]/g, ``).length;
    }

    private updateCountryIsoCode(code: TuiCountryIsoCode): void {
        this.countryIsoCode = code;
        this.countryIsoCodeChange.emit(code);
    }

    private extractCountryCode(value: string): TuiCountryIsoCode | undefined {
        return this.countries.find(countryIsoCode => {
            const ruCodeTest =
                countryIsoCode === TuiCountryIsoCode.RU &&
                /^[7 | 8]/.test(value) &&
                /^(?!880[1-9 ])/.test(value) &&
                value.length + 1 === this.getMaxAllowedLength(TuiCountryIsoCode.RU);

            return (
                ruCodeTest ||
                (value.startsWith(
                    this.isoToCountryCode(countryIsoCode).replace(CHAR_PLUS, ``),
                ) &&
                    value.length + 1 === this.getMaxAllowedLength(countryIsoCode))
            );
        });
    }
}

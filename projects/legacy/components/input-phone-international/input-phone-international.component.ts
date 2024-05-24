import {CommonModule} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    HostBinding,
    inject,
    Input,
    Output,
    ViewChild,
} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MaskitoDirective} from '@maskito/angular';
import type {MaskitoOptions} from '@maskito/core';
import {maskitoInitialCalibrationPlugin} from '@maskito/core';
import {maskitoGetCountryFromNumber, maskitoPhoneOptionsGenerator} from '@maskito/phone';
import type {TuiContext, TuiFocusableElementAccessor} from '@taiga-ui/cdk';
import {
    AbstractTuiControl,
    CHAR_PLUS,
    TuiActiveZoneDirective,
    tuiAsControl,
    tuiAsFocusableItemAccessor,
    tuiIsInputEvent,
    TuiLetDirective,
    tuiPure,
} from '@taiga-ui/cdk';
import type {TuiSizeL, TuiSizeM, TuiSizeS} from '@taiga-ui/core';
import {
    TUI_TEXTFIELD_SIZE,
    TuiAppearanceDirective,
    TuiDataList,
    TuiDropdownModule,
    TuiFlagPipe,
    TuiGroupDirective,
    TuiHint,
    TuiPrimitiveTextfieldComponent,
    TuiPrimitiveTextfieldModule,
    TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import type {TuiCountryIsoCode} from '@taiga-ui/i18n';
import {
    FIXED_DROPDOWN_CONTROLLER_PROVIDER,
} from '@taiga-ui/legacy/utils';
import {TUI_ARROW, TuiArrowComponent} from '@taiga-ui/legacy/components/arrow';
import {TuiInputComponent, TuiInputModule} from '@taiga-ui/legacy/components/input';
import type {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';
import {validatePhoneNumberLength} from 'libphonenumber-js';
import type {MetadataJson} from 'libphonenumber-js/core';
import {getCountryCallingCode} from 'libphonenumber-js/core';

import {TuiGetCountryCallingCodePipe} from './get-country-calling-code.pipe';
import {TUI_INPUT_PHONE_INTERNATIONAL_OPTIONS} from './input-phone-international.options';

const NOT_FORM_CONTROL_SYMBOLS = /[^+\d]/g;

@Component({
    standalone: true,
    selector: 'tui-input-phone-international',
    imports: [
        CommonModule,
        FormsModule,
        PolymorpheusModule,
        TuiInputModule,
        TuiGroupDirective,
        TuiPrimitiveTextfieldModule,
        TuiTextfieldControllerModule,
        TuiHint,
        TuiDropdownModule,
        TuiDataList,
        TuiArrowComponent,
        TuiAppearanceDirective,
        TuiActiveZoneDirective,
        TuiFlagPipe,
        TuiLetDirective,
        TuiGetCountryCallingCodePipe,
        MaskitoDirective,
    ],
    templateUrl: './input-phone-international.template.html',
    styleUrls: ['./input-phone-international.style.less'],
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
    @ViewChild(TuiInputComponent)
    private readonly inputPhone?: TuiInputComponent;

    @ViewChild(TuiPrimitiveTextfieldComponent)
    private readonly countrySelect?: TuiPrimitiveTextfieldComponent;

    /* eslint-disable @typescript-eslint/member-ordering */
    protected readonly options = inject(TUI_INPUT_PHONE_INTERNATIONAL_OPTIONS);
    private readonly textfieldSize = inject(TUI_TEXTFIELD_SIZE);

    @Input()
    public countries = this.options.countries;

    @Output()
    public readonly countryIsoCodeChange = new EventEmitter<TuiCountryIsoCode>();

    public countryIsoCode = this.options.countryIsoCode;

    protected open = false;

    protected readonly countriesNames$ = inject(TUI_COUNTRIES);
    protected readonly arrow: PolymorpheusContent<
        TuiContext<TuiSizeL | TuiSizeM | TuiSizeS>
    > = TUI_ARROW;

    protected textfieldValue = '';

    @Input('countryIsoCode')
    public set isoCode(code: TuiCountryIsoCode) {
        if (this.countryIsoCode === code) {
            return;
        }

        this.countryIsoCode = code;
    }

    public get nativeFocusableElement(): HTMLElement | null {
        return this.inputPhone && !this.computedDisabled
            ? this.inputPhone.nativeFocusableElement
            : null;
    }

    public get focused(): boolean {
        return (
            (!!this.countrySelect && this.countrySelect.focused) ||
            (!!this.inputPhone && this.inputPhone.focused)
        );
    }

    public onPaste(event: Event, phonesMetadata: MetadataJson | null): void {
        if (
            !tuiIsInputEvent(event) ||
            !phonesMetadata ||
            (!event.inputType.includes('Drop') && !event.inputType.includes('Paste'))
        ) {
            return;
        }

        const newValue = event.data || '';
        const prefixedValue =
            newValue.startsWith(CHAR_PLUS) || newValue.startsWith('8')
                ? newValue
                : CHAR_PLUS + newValue;

        if (validatePhoneNumberLength(prefixedValue) === 'TOO_SHORT') {
            return;
        }

        const countryIsoCode = maskitoGetCountryFromNumber(prefixedValue, phonesMetadata);

        if (countryIsoCode && countryIsoCode !== this.countryIsoCode) {
            this.updateCountryIsoCode(countryIsoCode);
        }
    }

    public onItemClick(isoCode: TuiCountryIsoCode): void {
        this.open = false;
        this.updateCountryIsoCode(isoCode);

        if (this.nativeFocusableElement) {
            this.nativeFocusableElement.focus();
        }
    }

    public override setDisabledState(): void {
        super.setDisabledState();
        this.close();
    }

    public override writeValue(unmaskedValue: string): void {
        super.writeValue(unmaskedValue);
        this.textfieldValue = unmaskedValue; // it will be calibrated later when mask is ready
    }

    @HostBinding('attr.data-size')
    protected get size(): TuiSizeL | TuiSizeS {
        return this.textfieldSize.size;
    }

    @tuiPure
    protected calculateMask(
        countryIsoCode: TuiCountryIsoCode,
        metadata: MetadataJson,
    ): MaskitoOptions {
        const {plugins, ...restOptions} = maskitoPhoneOptionsGenerator({
            countryIsoCode,
            metadata,
        });
        /**
         * TODO: temporary workaround for @maskito/phone@2 (eliminate after update to @maskito/phone@3)
         * https://github.com/taiga-family/maskito/issues/1134
         * ___
         * We should manage focus event by itself (not built-in maskito focus plugin) because there is race condition
         * (after selection country from dropdown and before mask recalculation)
         */
        const [caretPlugin, blurPlugin] = plugins;

        return {
            ...restOptions,
            plugins: [caretPlugin, blurPlugin, maskitoInitialCalibrationPlugin()],
        };
    }

    protected onActiveZone(active: boolean): void {
        this.updateFocused(active);
    }

    protected onFocus(phonesMetadata: MetadataJson): void {
        const countryCallingCode = `${CHAR_PLUS + getCountryCallingCode(this.countryIsoCode, phonesMetadata)} `;

        if (!this.textfieldValue) {
            this.textfieldValue = countryCallingCode;
        }
    }

    protected onValueChange(
        maskedValue: string,
        phonesMetadata: MetadataJson | null,
    ): void {
        const unmaskedValue = maskedValue.replaceAll(NOT_FORM_CONTROL_SYMBOLS, '');
        const countryCallingCode = phonesMetadata
            ? CHAR_PLUS + getCountryCallingCode(this.countryIsoCode, phonesMetadata)
            : '';

        this.value = unmaskedValue === countryCallingCode ? '' : unmaskedValue;
    }

    protected getFallbackValue(): string {
        return '';
    }

    private close(): void {
        this.open = false;
    }

    private updateCountryIsoCode(code: TuiCountryIsoCode): void {
        this.countryIsoCode = code;
        this.countryIsoCodeChange.emit(code);
    }
}

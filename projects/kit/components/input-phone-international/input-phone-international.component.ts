import {CommonModule} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    computed,
    ElementRef,
    inject,
    Input,
    Output,
    signal,
    ViewChild,
} from '@angular/core';
import {toObservable, toSignal} from '@angular/core/rxjs-interop';
import {FormsModule} from '@angular/forms';
import {MaskitoDirective} from '@maskito/angular';
import type {MaskitoOptions} from '@maskito/core';
import {maskitoInitialCalibrationPlugin, maskitoTransform} from '@maskito/core';
import {maskitoGetCountryFromNumber, maskitoPhoneOptionsGenerator} from '@maskito/phone';
import {tuiAsControl, TuiControl} from '@taiga-ui/cdk/classes';
import {CHAR_PLUS} from '@taiga-ui/cdk/constants';
import {tuiFallbackValueProvider} from '@taiga-ui/cdk/tokens';
import {tuiIsInputEvent} from '@taiga-ui/cdk/utils/dom';
import {TuiDataList} from '@taiga-ui/core/components/data-list';
import {TuiGroup, tuiGroupOptionsProvider} from '@taiga-ui/core/components/group';
import {
    TUI_TEXTFIELD_OPTIONS,
    TuiTextfield,
    tuiTextfieldOptionsProvider,
} from '@taiga-ui/core/components/textfield';
import {
    TuiDropdown,
    tuiDropdownOptionsProvider,
} from '@taiga-ui/core/directives/dropdown';
import {TuiFlagPipe} from '@taiga-ui/core/pipes/flag';
import type {TuiCountryIsoCode} from '@taiga-ui/i18n/enums';
import {TuiChevron} from '@taiga-ui/kit/directives';
import {TUI_COUNTRIES} from '@taiga-ui/kit/tokens';
import {validatePhoneNumberLength} from 'libphonenumber-js';
import type {MetadataJson} from 'libphonenumber-js/core';
import {getCountryCallingCode} from 'libphonenumber-js/core';
import {from, skip} from 'rxjs';

import {TuiGetCountryCallingCodePipe} from './get-country-calling-code.pipe';
import {TUI_INPUT_PHONE_INTERNATIONAL_OPTIONS} from './input-phone-international.options';

const NOT_FORM_CONTROL_SYMBOLS = /[^+\d]/g;

@Component({
    standalone: true,
    selector: 'tui-input-phone-international',
    imports: [
        CommonModule,
        FormsModule,
        MaskitoDirective,
        TuiChevron,
        TuiDataList,
        TuiDropdown,
        TuiFlagPipe,
        TuiGetCountryCallingCodePipe,
        TuiGroup,
        TuiTextfield,
    ],
    templateUrl: './input-phone-international.template.html',
    styleUrls: ['./input-phone-international.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        tuiAsControl(TuiInputPhoneInternationalComponent),
        tuiFallbackValueProvider(''),
        tuiTextfieldOptionsProvider({cleaner: false}),
        tuiGroupOptionsProvider({size: 'l'}),
    ],
    viewProviders: [
        tuiDropdownOptionsProvider({
            limitWidth: 'fixed',
            align: 'right',
        }),
    ],
    host: {
        '[attr.data-size]': 'textfieldOptions?.size',
    },
})
export class TuiInputPhoneInternationalComponent extends TuiControl<string> {
    @ViewChild(MaskitoDirective, {read: ElementRef})
    private readonly input?: ElementRef<HTMLInputElement>;

    protected readonly options = inject(TUI_INPUT_PHONE_INTERNATIONAL_OPTIONS);
    protected readonly countriesNames$ = inject(TUI_COUNTRIES);
    protected readonly textfieldOptions = inject(TUI_TEXTFIELD_OPTIONS);

    protected readonly metadata = toSignal(from(this.options.metadata));
    protected readonly countryIsoCode = signal(this.options.countryIsoCode);
    protected readonly mask = computed(() =>
        this.computeMask(this.countryIsoCode(), this.metadata()),
    );

    protected open = false;
    protected textfieldValue = '';

    @Input()
    public countries = this.options.countries;

    @Output()
    public readonly countryIsoCodeChange = toObservable(this.countryIsoCode).pipe(
        skip(1),
    );

    @Input('countryIsoCode')
    public set isoCode(code: TuiCountryIsoCode) {
        this.countryIsoCode.set(code);
    }

    public onPaste(event: Event): void {
        const phonesMetadata = this.metadata();

        if (
            !tuiIsInputEvent(event) ||
            !phonesMetadata ||
            (!event.inputType.includes('Drop') && !event.inputType.includes('Paste'))
        ) {
            return;
        }

        const newValue = event.data || '';
        const prefixedValue = newValue.startsWith(CHAR_PLUS)
            ? newValue
            : CHAR_PLUS + newValue;

        if (validatePhoneNumberLength(prefixedValue) === 'TOO_SHORT') {
            return;
        }

        const countryIsoCode = maskitoGetCountryFromNumber(prefixedValue, phonesMetadata);

        if (countryIsoCode) {
            this.countryIsoCode.set(countryIsoCode);
        }
    }

    public onItemClick(isoCode: TuiCountryIsoCode): void {
        this.open = false;
        this.countryIsoCode.set(isoCode);
        this.input?.nativeElement.focus();
    }

    public override writeValue(unmaskedValue: string): void {
        super.writeValue(unmaskedValue);

        const maskOptions = this.mask();

        this.textfieldValue = maskOptions
            ? maskitoTransform(unmaskedValue, maskOptions)
            : unmaskedValue; // it will be calibrated later when mask is ready (by maskitoInitialCalibrationPlugin)
        this.cdr.detectChanges();
    }

    protected onFocus(): void {
        const phoneMetadata = this.metadata();

        if (!this.textfieldValue && phoneMetadata) {
            this.textfieldValue = `${CHAR_PLUS + getCountryCallingCode(this.countryIsoCode(), phoneMetadata)} `;
        }
    }

    protected onValueChange(maskedValue: string): void {
        const unmaskedValue = maskedValue.replaceAll(NOT_FORM_CONTROL_SYMBOLS, '');
        const phonesMetadata = this.metadata();
        const countryCallingCode = phonesMetadata
            ? CHAR_PLUS + getCountryCallingCode(this.countryIsoCode(), phonesMetadata)
            : '';

        this.onChange(unmaskedValue === countryCallingCode ? '' : unmaskedValue);
    }

    protected onOpenChange(open: boolean): void {
        this.open = open;
    }

    private computeMask(
        countryIsoCode: TuiCountryIsoCode,
        metadata?: MetadataJson,
    ): MaskitoOptions | null {
        if (!metadata) {
            return null;
        }

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
}

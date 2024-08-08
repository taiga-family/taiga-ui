import {CommonModule} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    computed,
    ElementRef,
    forwardRef,
    inject,
    Input,
    Output,
    signal,
    TemplateRef,
    ViewChild,
} from '@angular/core';
import {toObservable, toSignal} from '@angular/core/rxjs-interop';
import {FormsModule} from '@angular/forms';
import {MaskitoDirective} from '@maskito/angular';
import type {MaskitoOptions} from '@maskito/core';
import {maskitoInitialCalibrationPlugin, maskitoTransform} from '@maskito/core';
import {maskitoRemoveOnBlurPlugin} from '@maskito/kit';
import {maskitoGetCountryFromNumber, maskitoPhoneOptionsGenerator} from '@maskito/phone';
import {tuiAsControl, TuiControl} from '@taiga-ui/cdk/classes';
import {CHAR_PLUS} from '@taiga-ui/cdk/constants';
import {tuiFallbackValueProvider} from '@taiga-ui/cdk/tokens';
import {tuiIsInputEvent} from '@taiga-ui/cdk/utils/dom';
import {TuiDataList} from '@taiga-ui/core/components/data-list';
import {TuiGroup, tuiGroupSize} from '@taiga-ui/core/components/group';
import {
    TUI_TEXTFIELD_OPTIONS,
    TuiTextfield,
    TuiTextfieldDropdownDirective,
    tuiTextfieldOptionsProvider,
} from '@taiga-ui/core/components/textfield';
import {
    TuiDropdown,
    tuiDropdown,
    TuiDropdownDirective,
    tuiDropdownOpen,
    tuiDropdownOptionsProvider,
    TuiWithDropdownOpen,
} from '@taiga-ui/core/directives/dropdown';
import {TuiFlagPipe} from '@taiga-ui/core/pipes/flag';
import type {TuiCountryIsoCode} from '@taiga-ui/i18n/types';
import {TuiChevron} from '@taiga-ui/kit/directives';
import {TUI_COUNTRIES} from '@taiga-ui/kit/tokens';
import type {PolymorpheusContent} from '@taiga-ui/polymorpheus';
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
        tuiAsControl(TuiInputPhoneInternational),
        tuiFallbackValueProvider(''),
        tuiTextfieldOptionsProvider({cleaner: signal(false)}),
        tuiDropdownOptionsProvider({
            limitWidth: 'fixed',
            align: 'right',
        }),
    ],
    hostDirectives: [TuiGroup, TuiDropdownDirective, TuiWithDropdownOpen],
    host: {
        '[attr.data-size]': 'size()',
    },
})
export class TuiInputPhoneInternational extends TuiControl<string> {
    @ViewChild(MaskitoDirective, {read: ElementRef})
    private readonly input?: ElementRef<HTMLInputElement>;

    protected readonly dropdown = tuiDropdown(null);
    protected readonly options = inject(TUI_INPUT_PHONE_INTERNATIONAL_OPTIONS);
    protected readonly size = tuiGroupSize(inject(TUI_TEXTFIELD_OPTIONS).size);
    protected readonly open = tuiDropdownOpen();
    protected readonly names = toSignal(inject(TUI_COUNTRIES));
    protected readonly metadata = toSignal(from(this.options.metadata));
    protected readonly countryIsoCode = signal(this.options.countryIsoCode);
    protected readonly mask = computed(() =>
        this.computeMask(this.countryIsoCode(), this.metadata()),
    );

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
        this.open.set(false);
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

    @ViewChild(forwardRef(() => TuiTextfieldDropdownDirective), {read: TemplateRef})
    protected set template(template: PolymorpheusContent) {
        this.dropdown.set(template);
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

        return {
            ...restOptions,
            plugins: [
                ...plugins,
                maskitoRemoveOnBlurPlugin(
                    `${CHAR_PLUS}${getCountryCallingCode(countryIsoCode, metadata)} `,
                ),
                maskitoInitialCalibrationPlugin(),
            ],
        };
    }
}

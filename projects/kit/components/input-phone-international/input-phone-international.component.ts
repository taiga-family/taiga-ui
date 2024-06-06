import {CommonModule} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    inject,
    Input,
    Output,
    ViewChild,
} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {FormsModule} from '@angular/forms';
import {MaskitoDirective} from '@maskito/angular';
import type {MaskitoOptions} from '@maskito/core';
import {maskitoInitialCalibrationPlugin, maskitoTransform} from '@maskito/core';
import {maskitoGetCountryFromNumber, maskitoPhoneOptionsGenerator} from '@maskito/phone';
import type {TuiFocusableElementAccessor} from '@taiga-ui/cdk';
import {
    AbstractTuiControl,
    CHAR_PLUS,
    tuiAsControl,
    tuiAsFocusableItemAccessor,
    tuiIsInputEvent,
    tuiIsNativeFocused,
    TuiLetDirective,
} from '@taiga-ui/cdk';
import {
    TUI_TEXTFIELD_OPTIONS,
    TuiDataList,
    TuiDropdownModule,
    tuiDropdownOptionsProvider,
    TuiFlagPipe,
    TuiGroupDirective,
    TuiHint,
    TuiSelectDirective,
    TuiTextfield,
    tuiTextfieldOptionsProvider,
} from '@taiga-ui/core';
import type {TuiCountryIsoCode} from '@taiga-ui/i18n';
import {TuiChevronDirective} from '@taiga-ui/kit/directives';
import {TUI_COUNTRIES} from '@taiga-ui/kit/tokens';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';
import {validatePhoneNumberLength} from 'libphonenumber-js';
import type {MetadataJson} from 'libphonenumber-js/core';
import {getCountryCallingCode} from 'libphonenumber-js/core';
import {BehaviorSubject, combineLatest, distinctUntilChanged, map, skip} from 'rxjs';

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
        PolymorpheusModule,
        TuiChevronDirective,
        TuiDataList,
        TuiDropdownModule,
        TuiFlagPipe,
        TuiGetCountryCallingCodePipe,
        TuiGroupDirective,
        TuiHint,
        TuiLetDirective,
        TuiTextfield,
    ],
    templateUrl: './input-phone-international.template.html',
    styleUrls: ['./input-phone-international.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        tuiAsFocusableItemAccessor(TuiInputPhoneInternationalComponent),
        tuiAsControl(TuiInputPhoneInternationalComponent),
        tuiTextfieldOptionsProvider({cleaner: false}),
    ],
    host: {
        '[attr.data-size]': 'textfieldOptions?.size',
    },
    viewProviders: [
        tuiDropdownOptionsProvider({
            limitWidth: 'fixed',
            align: 'right',
        }),
    ],
})
export class TuiInputPhoneInternationalComponent
    extends AbstractTuiControl<string>
    implements TuiFocusableElementAccessor
{
    /* eslint-disable @typescript-eslint/member-ordering */
    protected readonly options = inject(TUI_INPUT_PHONE_INTERNATIONAL_OPTIONS);
    protected readonly countryIsoCode$ = new BehaviorSubject(this.options.countryIsoCode);
    protected readonly mask$ = new BehaviorSubject<MaskitoOptions | null>(null);
    protected readonly countriesNames$ = inject(TUI_COUNTRIES);
    protected readonly textfieldOptions = inject(TUI_TEXTFIELD_OPTIONS);

    protected open = false;
    protected textfieldValue = '';

    @ViewChild(MaskitoDirective, {read: ElementRef})
    private readonly inputPhone?: ElementRef<HTMLInputElement>;

    @ViewChild(TuiSelectDirective, {read: ElementRef})
    private readonly countrySelect?: ElementRef<HTMLSelectElement>;

    @Input()
    public countries = this.options.countries;

    @Output()
    public readonly countryIsoCodeChange = this.countryIsoCode$.pipe(
        distinctUntilChanged(),
        skip(1),
    );

    @Input('countryIsoCode')
    public set isoCode(code: TuiCountryIsoCode) {
        this.countryIsoCode$.next(code);
    }

    public get nativeFocusableElement(): HTMLElement | null {
        return this.inputPhone && !this.computedDisabled
            ? this.inputPhone.nativeElement
            : null;
    }

    public get focused(): boolean {
        return Boolean(
            tuiIsNativeFocused(this.countrySelect?.nativeElement) ||
                tuiIsNativeFocused(this.inputPhone?.nativeElement) ||
                this.open,
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
        const prefixedValue = newValue.startsWith(CHAR_PLUS)
            ? newValue
            : CHAR_PLUS + newValue;

        if (validatePhoneNumberLength(prefixedValue) === 'TOO_SHORT') {
            return;
        }

        const countryIsoCode = maskitoGetCountryFromNumber(prefixedValue, phonesMetadata);

        if (countryIsoCode) {
            this.countryIsoCode$.next(countryIsoCode);
        }
    }

    public onItemClick(isoCode: TuiCountryIsoCode): void {
        this.open = false;
        this.countryIsoCode$.next(isoCode);
        this.nativeFocusableElement?.focus();
    }

    constructor() {
        super();
        combineLatest([this.countryIsoCode$, this.options.metadata])
            .pipe(
                map(args => this.computeMask(...args)),
                takeUntilDestroyed(),
            )
            .subscribe(this.mask$);
    }

    public override writeValue(unmaskedValue: string): void {
        super.writeValue(unmaskedValue);

        const maskOptions = this.mask$.value;

        this.textfieldValue = maskOptions
            ? maskitoTransform(unmaskedValue, maskOptions)
            : unmaskedValue; // it will be calibrated later when mask is ready (by maskitoInitialCalibrationPlugin)
        this.cdr.detectChanges();
    }

    protected onActiveZone(active: boolean): void {
        this.updateFocused(active);
    }

    protected onFocus(phonesMetadata: MetadataJson): void {
        const countryCallingCode = `${CHAR_PLUS + getCountryCallingCode(this.countryIsoCode$.value, phonesMetadata)} `;

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
            ? CHAR_PLUS +
              getCountryCallingCode(this.countryIsoCode$.value, phonesMetadata)
            : '';

        this.value = unmaskedValue === countryCallingCode ? '' : unmaskedValue;
    }

    protected getFallbackValue(): string {
        return '';
    }

    private computeMask(
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
}

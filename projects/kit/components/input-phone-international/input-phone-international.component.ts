import {NgTemplateOutlet} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    computed,
    effect,
    ElementRef,
    inject,
    input,
    model,
    signal,
    viewChildren,
    ViewEncapsulation,
} from '@angular/core';
import {takeUntilDestroyed, toSignal} from '@angular/core/rxjs-interop';
import {FormsModule} from '@angular/forms';
import {MaskitoDirective} from '@maskito/angular';
import {
    MASKITO_DEFAULT_OPTIONS,
    maskitoInitialCalibrationPlugin,
    type MaskitoOptions,
    maskitoTransform,
} from '@maskito/core';
import {maskitoGetCountryFromNumber, maskitoPhoneOptionsGenerator} from '@maskito/phone';
import {tuiAsControl, TuiControl} from '@taiga-ui/cdk/classes';
import {CHAR_PLUS, TUI_DEFAULT_MATCHER} from '@taiga-ui/cdk/constants';
import {TuiActiveZone} from '@taiga-ui/cdk/directives/active-zone';
import {
    TuiAutoFocus,
    tuiAutoFocusOptionsProvider,
} from '@taiga-ui/cdk/directives/auto-focus';
import {TUI_IS_IOS, tuiFallbackValueProvider} from '@taiga-ui/cdk/tokens';
import {tuiInjectElement, tuiIsInputEvent, tuiValue} from '@taiga-ui/cdk/utils/dom';
import {TuiButton} from '@taiga-ui/core/components/button';
import {TuiDataList, TuiOption} from '@taiga-ui/core/components/data-list';
import {TuiInput, TuiWithInput} from '@taiga-ui/core/components/input';
import {
    TUI_TEXTFIELD_OPTIONS,
    TuiTextfieldContent,
} from '@taiga-ui/core/components/textfield';
import {TuiTitle} from '@taiga-ui/core/components/title';
import {tuiDropdownEnabled, TuiDropdownOpen} from '@taiga-ui/core/portals/dropdown';
import {TUI_COMMON_ICONS} from '@taiga-ui/core/tokens';
import {type TuiCountryIsoCode} from '@taiga-ui/i18n/types';
import {TuiAppearanceProxy} from '@taiga-ui/kit/directives/appearance-proxy';
import {TuiChevron} from '@taiga-ui/kit/directives/chevron';
import {TuiFlagPipe} from '@taiga-ui/kit/pipes/flag';
import {TUI_COUNTRIES, TUI_INTERNATIONAL_SEARCH} from '@taiga-ui/kit/tokens';
import {tuiMaskito} from '@taiga-ui/kit/utils';
import {validatePhoneNumberLength} from 'libphonenumber-js';
import {getCountryCallingCode, type MetadataJson} from 'libphonenumber-js/core';
import {filter, from} from 'rxjs';

import {TUI_INPUT_PHONE_INTERNATIONAL_OPTIONS} from './input-phone-international.options';

const NOT_FORM_CONTROL_SYMBOLS = /[^+\d]/g;

@Component({
    selector: 'input[tuiInputPhoneInternational]',
    imports: [
        FormsModule,
        NgTemplateOutlet,
        TuiAutoFocus,
        TuiButton,
        TuiChevron,
        TuiDataList,
        TuiFlagPipe,
        TuiInput,
        TuiTextfieldContent,
        TuiTitle,
    ],
    templateUrl: './input-phone-international.template.html',
    styleUrl: './input-phone-international.style.less',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        tuiAsControl(TuiInputPhoneInternationalComponent),
        tuiFallbackValueProvider(''),
        tuiAutoFocusOptionsProvider({preventScroll: true}),
    ],
    hostDirectives: [MaskitoDirective, TuiWithInput, TuiAppearanceProxy],
    host: {
        type: 'tel',
        ngSkipHydration: 'true',
        '[attr.inputmode]': '!ios && open() ? "none" : null',
        '[disabled]': 'disabled()',
        '(input)': 'masked.set($event.target.value)',
        '(click)': 'open.set(false)',
        '(beforeinput.capture)': 'onPaste($event)',
    },
})
export class TuiInputPhoneInternationalComponent extends TuiControl<string> {
    protected readonly list = viewChildren(TuiOption, {read: ElementRef});
    protected readonly el = tuiInjectElement<HTMLInputElement>();
    protected readonly ios = inject(TUI_IS_IOS);
    protected readonly icons = inject(TUI_COMMON_ICONS);
    protected readonly options = inject(TUI_INPUT_PHONE_INTERNATIONAL_OPTIONS);
    protected readonly label = inject(TUI_INTERNATIONAL_SEARCH);
    protected readonly metadata = toSignal(from(this.options.metadata));
    protected readonly names = inject(TUI_COUNTRIES);
    protected readonly open = inject(TuiDropdownOpen).open;
    protected readonly dropdownEnabled = tuiDropdownEnabled(this.interactive);
    protected readonly change = effect(() => this.onChange(this.unmask(this.masked())));
    protected readonly search = signal<string>('');
    protected readonly size = inject(TUI_TEXTFIELD_OPTIONS).size;
    protected readonly masked = tuiValue(this.el);
    protected readonly mask = tuiMaskito(
        computed(() => this.computeMask(this.countryIsoCode(), this.metadata())),
    );

    protected readonly filtered = computed(() =>
        this.countries()
            .map((iso) => ({
                iso,
                name: this.names()?.[iso] || '',
                code: getCallingCode(iso, this.metadata()),
            }))
            .filter(({name, code}) => TUI_DEFAULT_MATCHER(name + code, this.search())),
    );

    protected readonly $ = inject(TuiActiveZone)
        .tuiActiveZoneChange.pipe(
            filter(() => !this.readOnly()),
            takeUntilDestroyed(),
        )
        .subscribe((active) => {
            const prefix = `${getCallingCode(this.countryIsoCode(), this.metadata())} `;

            this.search.set('');
            this.masked.update((value) => {
                const fallback = active ? value || prefix : value;

                return value === prefix ? '' : fallback;
            });
        });

    public readonly countrySearch = input(this.options.countrySearch);
    public readonly countryIsoCode = model(this.options.countryIsoCode);
    public readonly countries = input(this.options.countries);

    public override writeValue(unmasked: string | null): void {
        const code = this.getCountryCode(unmasked ?? '');

        if (code) {
            this.countryIsoCode.set(code);
        }

        super.writeValue(unmasked);
        this.masked.set(
            maskitoTransform(this.value() ?? '', this.mask() || MASKITO_DEFAULT_OPTIONS),
        );
    }

    protected onPaste(event: Event): void {
        const data = tuiIsInputEvent(event) && event.data;

        if (
            !data ||
            (!event.inputType.includes('Drop') && !event.inputType.includes('Paste'))
        ) {
            return;
        }

        const code = this.getCountryCode(data);

        if (code) {
            this.countryIsoCode.set(code);
        }
    }

    protected onItemClick(code: TuiCountryIsoCode): void {
        this.el.focus();
        this.open.set(false);
        this.countryIsoCode.set(code);
        this.search.set('');
        this.masked.set(
            maskitoTransform(
                this.value() || getCallingCode(code, this.metadata()),
                this.mask() || MASKITO_DEFAULT_OPTIONS,
            ),
        );
    }

    private computeMask(
        countryIsoCode: TuiCountryIsoCode,
        metadata?: MetadataJson,
    ): MaskitoOptions {
        if (!metadata) {
            return MASKITO_DEFAULT_OPTIONS;
        }

        const {plugins, ...options} = maskitoPhoneOptionsGenerator({
            countryIsoCode,
            metadata,
            separator: this.options.separator,
        });

        return {
            ...options,
            plugins: [...plugins, maskitoInitialCalibrationPlugin()],
        };
    }

    private unmask(maskedValue: string): string {
        const value = maskedValue.replaceAll(NOT_FORM_CONTROL_SYMBOLS, '');
        const code = getCallingCode(this.countryIsoCode(), this.metadata());

        return value === code ? '' : value;
    }

    private getCountryCode(value: string): TuiCountryIsoCode | null {
        const metadata = this.metadata();
        const phone = value.startsWith(CHAR_PLUS) ? value : CHAR_PLUS + value;

        return metadata && validatePhoneNumberLength(phone) !== 'TOO_SHORT'
            ? (maskitoGetCountryFromNumber(phone, metadata) ?? null)
            : null;
    }
}

function getCallingCode(iso: TuiCountryIsoCode, metadata?: MetadataJson | null): string {
    return metadata ? CHAR_PLUS + getCountryCallingCode(iso, metadata) : '';
}

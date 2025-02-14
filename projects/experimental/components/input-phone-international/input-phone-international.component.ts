import {NgForOf, NgIf} from '@angular/common';
import type {QueryList} from '@angular/core';
import {
    ChangeDetectionStrategy,
    Component,
    computed,
    effect,
    ElementRef,
    inject,
    Input,
    Output,
    signal,
    TemplateRef,
    ViewChild,
    ViewChildren,
    ViewEncapsulation,
} from '@angular/core';
import {takeUntilDestroyed, toObservable, toSignal} from '@angular/core/rxjs-interop';
import {FormsModule} from '@angular/forms';
import {MaskitoDirective} from '@maskito/angular';
import type {MaskitoOptions} from '@maskito/core';
import {
    MASKITO_DEFAULT_OPTIONS,
    maskitoInitialCalibrationPlugin,
    maskitoTransform,
} from '@maskito/core';
import {maskitoGetCountryFromNumber, maskitoPhoneOptionsGenerator} from '@maskito/phone';
import {tuiAsControl, TuiControl} from '@taiga-ui/cdk/classes';
import {
    CHAR_PLUS,
    EMPTY_QUERY,
    TUI_ALLOW_SIGNAL_WRITES,
    TUI_DEFAULT_MATCHER,
} from '@taiga-ui/cdk/constants';
import {TuiActiveZone} from '@taiga-ui/cdk/directives/active-zone';
import {
    TuiAutoFocus,
    tuiAutoFocusOptionsProvider,
} from '@taiga-ui/cdk/directives/auto-focus';
import {TUI_IS_IOS, tuiFallbackValueProvider} from '@taiga-ui/cdk/tokens';
import {
    tuiInjectElement,
    tuiIsInputEvent,
    tuiValueBinding,
} from '@taiga-ui/cdk/utils/dom';
import {tuiDirectiveBinding} from '@taiga-ui/cdk/utils/miscellaneous';
import {TuiButton} from '@taiga-ui/core/components/button';
import {TuiDataList, TuiOption} from '@taiga-ui/core/components/data-list';
import {
    TUI_TEXTFIELD_OPTIONS,
    TuiTextfield,
    TuiTextfieldContent,
    TuiTextfieldDropdownDirective,
    TuiWithTextfield,
} from '@taiga-ui/core/components/textfield';
import {
    tuiDropdown,
    TuiDropdownOpen,
    tuiDropdownOpen,
} from '@taiga-ui/core/directives/dropdown';
import {TuiTitle} from '@taiga-ui/core/directives/title';
import {TuiFlagPipe} from '@taiga-ui/core/pipes';
import {TUI_COMMON_ICONS} from '@taiga-ui/core/tokens';
import type {TuiCountryIsoCode} from '@taiga-ui/i18n/types';
import {TUI_INPUT_PHONE_INTERNATIONAL_OPTIONS} from '@taiga-ui/kit/components/input-phone-international';
import {TuiChevron} from '@taiga-ui/kit/directives/chevron';
import {TUI_COUNTRIES, TUI_INTERNATIONAL_SEARCH} from '@taiga-ui/kit/tokens';
import {tuiGetCallingCode, tuiMaskito} from '@taiga-ui/kit/utils';
import {TuiCell} from '@taiga-ui/layout/components/cell';
import type {PolymorpheusContent} from '@taiga-ui/polymorpheus';
import {validatePhoneNumberLength} from 'libphonenumber-js';
import type {MetadataJson} from 'libphonenumber-js/core';
import {filter, from, skip} from 'rxjs';

const NOT_FORM_CONTROL_SYMBOLS = /[^+\d]/g;

@Component({
    standalone: true,
    selector: 'input[tuiInputPhoneInternational]',
    imports: [
        FormsModule,
        NgForOf,
        NgIf,
        TuiAutoFocus,
        TuiButton,
        TuiCell,
        TuiChevron,
        TuiDataList,
        TuiFlagPipe,
        TuiTextfield,
        TuiTextfieldContent,
        TuiTitle,
    ],
    templateUrl: './input-phone-international.template.html',
    styleUrls: ['./input-phone-international.style.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        tuiAsControl(TuiInputPhoneInternational),
        tuiFallbackValueProvider(''),
        tuiAutoFocusOptionsProvider({preventScroll: true}),
    ],
    hostDirectives: [MaskitoDirective, TuiWithTextfield],
    host: {
        type: 'tel',
        '[attr.readonly]': 'readOnly() || null',
        '[attr.inputmode]': '!ios && open() ? "none" : null',
        '[disabled]': 'disabled()',
        '(blur)': 'onTouched()',
        '(input)': 'masked.set($event.target.value)',
        '(click)': 'open.set(false)',
        '(beforeinput.capture)': 'onPaste($event)',
    },
})
export class TuiInputPhoneInternational extends TuiControl<string> {
    @ViewChildren(TuiOption, {read: ElementRef})
    protected readonly list: QueryList<ElementRef<HTMLButtonElement>> = EMPTY_QUERY;

    protected readonly el = tuiInjectElement<HTMLInputElement>();
    protected readonly ios = inject(TUI_IS_IOS);
    protected readonly icons = inject(TUI_COMMON_ICONS);
    protected readonly options = inject(TUI_INPUT_PHONE_INTERNATIONAL_OPTIONS);
    protected readonly countries = signal(this.options.countries);
    protected readonly code = signal(this.options.countryIsoCode);
    protected readonly label = toSignal(inject(TUI_INTERNATIONAL_SEARCH));
    protected readonly metadata = toSignal(from(this.options.metadata));
    protected readonly names = toSignal(inject(TUI_COUNTRIES));
    protected readonly open = tuiDropdownOpen();
    protected readonly dropdown = tuiDropdown(null);
    protected readonly search = signal<string>('');
    protected readonly size = inject(TUI_TEXTFIELD_OPTIONS).size;

    protected readonly mask = tuiMaskito(
        computed(() => this.computeMask(this.code(), this.metadata())),
    );

    protected readonly masked = tuiValueBinding();

    protected valueChangeEffect = effect(() => {
        this.onChange(this.unmask(this.masked()));
    }, TUI_ALLOW_SIGNAL_WRITES);

    protected readonly filtered = computed(() =>
        this.countries()
            .map((iso) => ({
                iso,
                name: this.names()?.[iso] || '',
                code: tuiGetCallingCode(iso, this.metadata()),
            }))
            .filter(({name, code}) => TUI_DEFAULT_MATCHER(name + code, this.search())),
    );

    protected readonly enabled = tuiDirectiveBinding(
        TuiDropdownOpen,
        'tuiDropdownEnabled',
        this.interactive,
        {},
    );

    protected readonly $ = inject(TuiActiveZone)
        .tuiActiveZoneChange.pipe(
            filter(() => !this.readOnly()),
            takeUntilDestroyed(),
        )
        .subscribe((active) => {
            const prefix = `${tuiGetCallingCode(this.code(), this.metadata())} `;

            this.search.set('');
            this.masked.update((value) => {
                const fallback = active ? value || prefix : value;

                return value === prefix ? '' : fallback;
            });
        });

    @Input()
    public countrySearch = false;

    @Output()
    public readonly countryIsoCodeChange = toObservable(this.code).pipe(skip(1));

    @Input('countries')
    public set countriesValue(value: readonly TuiCountryIsoCode[]) {
        this.countries.set(value);
    }

    @Input('countryIsoCode')
    public set isoCode(code: TuiCountryIsoCode) {
        this.code.set(code);
    }

    public override writeValue(unmasked: string | null): void {
        const code = this.getCountryCode(unmasked ?? '');

        if (code) {
            this.code.set(code);
        }

        super.writeValue(unmasked);
        this.masked.set(
            maskitoTransform(this.value() ?? '', this.mask() || MASKITO_DEFAULT_OPTIONS),
        );
    }

    @ViewChild(TuiTextfieldDropdownDirective, {read: TemplateRef})
    protected set template(template: PolymorpheusContent) {
        this.dropdown.set(template);
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
            this.code.set(code);
        }
    }

    protected onItemClick(code: TuiCountryIsoCode): void {
        this.el.focus();
        this.open.set(false);
        this.code.set(code);
        this.search.set('');
        this.masked.set(
            maskitoTransform(
                this.value() || tuiGetCallingCode(code, this.metadata()),
                this.mask() || MASKITO_DEFAULT_OPTIONS,
            ),
        );
    }

    private computeMask(
        countryIsoCode: TuiCountryIsoCode,
        metadata?: MetadataJson,
    ): MaskitoOptions | null {
        if (!metadata) {
            return null;
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

        return value === tuiGetCallingCode(this.code(), this.metadata()) ? '' : value;
    }

    private getCountryCode(value: string): TuiCountryIsoCode | null {
        const metadata = this.metadata();
        const phone = value.startsWith(CHAR_PLUS) ? value : CHAR_PLUS + value;

        return metadata && validatePhoneNumberLength(phone) !== 'TOO_SHORT'
            ? (maskitoGetCountryFromNumber(phone, metadata) ?? null)
            : null;
    }
}

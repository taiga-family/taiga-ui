import {NgForOf, NgIf} from '@angular/common';
import type {QueryList} from '@angular/core';
import {
    ChangeDetectionStrategy,
    Component,
    computed,
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
import {maskitoInitialCalibrationPlugin, maskitoTransform} from '@maskito/core';
import {maskitoGetCountryFromNumber, maskitoPhoneOptionsGenerator} from '@maskito/phone';
import {tuiAsControl, TuiControl} from '@taiga-ui/cdk/classes';
import {CHAR_PLUS, EMPTY_QUERY, TUI_DEFAULT_MATCHER} from '@taiga-ui/cdk/constants';
import {TuiActiveZone} from '@taiga-ui/cdk/directives/active-zone';
import {
    TuiAutoFocus,
    tuiAutoFocusOptionsProvider,
} from '@taiga-ui/cdk/directives/auto-focus';
import {TuiInputMode} from '@taiga-ui/cdk/directives/input-mode';
import {tuiFallbackValueProvider} from '@taiga-ui/cdk/tokens';
import {tuiInjectElement, tuiIsInputEvent} from '@taiga-ui/cdk/utils/dom';
import {tuiDirectiveBinding} from '@taiga-ui/cdk/utils/miscellaneous';
import {TuiButton} from '@taiga-ui/core/components/button';
import {TuiDataList, TuiOption} from '@taiga-ui/core/components/data-list';
import {TuiIcon} from '@taiga-ui/core/components/icon';
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
        TuiIcon,
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
    hostDirectives: [MaskitoDirective, TuiWithTextfield, TuiInputMode],
    host: {
        '[attr.readonly]': 'readOnly() || null',
        '[disabled]': 'disabled()',
        '[value]': 'masked()',
        '(blur)': 'onTouched()',
        '(input)': 'onInput()',
        '(click)': 'open.set(false)',
        '(beforeinput.capture)': 'onPaste($event)',
    },
})
export class TuiInputPhoneInternational extends TuiControl<string> {
    @ViewChildren(TuiOption, {read: ElementRef})
    protected readonly list: QueryList<ElementRef<HTMLButtonElement>> = EMPTY_QUERY;

    protected readonly el = tuiInjectElement<HTMLInputElement>();
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

    protected readonly masked = computed(
        () =>
            maskitoTransform(this.value(), this.mask() || {mask: /.*/}) || this.el.value,
    );

    protected readonly inputMode = tuiDirectiveBinding(
        TuiInputMode,
        'tuiInputMode',
        computed(() => (this.open() ? 'none' : 'numeric')),
    );

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
            const fallback = active ? this.el.value || prefix : this.el.value;

            this.search.set('');
            this.el.value = this.el.value === prefix ? '' : fallback;
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

    @ViewChild(TuiTextfieldDropdownDirective, {read: TemplateRef})
    protected set template(template: PolymorpheusContent) {
        this.dropdown.set(template);
    }

    protected onInput(): void {
        const value = this.el.value.replaceAll(NOT_FORM_CONTROL_SYMBOLS, '');

        this.onChange(
            value === tuiGetCallingCode(this.code(), this.metadata()) ? '' : value,
        );
    }

    protected onPaste(event: Event): void {
        const metadata = this.metadata();
        const data = tuiIsInputEvent(event) && event.data;

        if (
            !data ||
            !metadata ||
            (!event.inputType.includes('Drop') && !event.inputType.includes('Paste'))
        ) {
            return;
        }

        const value = data.startsWith(CHAR_PLUS) ? data : CHAR_PLUS + data;
        const code = maskitoGetCountryFromNumber(value, metadata);

        if (code && validatePhoneNumberLength(value) !== 'TOO_SHORT') {
            this.code.set(code);
        }
    }

    protected onItemClick(isoCode: TuiCountryIsoCode): void {
        this.el.focus();
        this.el.value = this.el.value || tuiGetCallingCode(this.code(), this.metadata());
        this.open.set(false);
        this.code.set(isoCode);
        this.search.set('');
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
}

import {CommonModule} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    inject,
    Input,
    Output,
    ViewChild,
} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CHAR_PLUS, TUI_NON_DIGITS_REGEXP} from '@taiga-ui/cdk/constants';
import {type TuiContext} from '@taiga-ui/cdk/types';
import {tuiPure} from '@taiga-ui/cdk/utils/miscellaneous';
import {TuiDataList} from '@taiga-ui/core/components/data-list';
import {TuiAppearance} from '@taiga-ui/core/directives/appearance';
import {TuiDropdown, TuiDropdownFixed} from '@taiga-ui/core/directives/dropdown';
import {TuiGroup} from '@taiga-ui/core/directives/group';
import {TuiHint} from '@taiga-ui/core/directives/hint';
import {TuiFlagPipe} from '@taiga-ui/core/pipes/flag';
import {type TuiSizeL, type TuiSizeM, type TuiSizeS} from '@taiga-ui/core/types';
import {type TuiCountryIsoCode} from '@taiga-ui/i18n/types';
import {TUI_COUNTRIES} from '@taiga-ui/kit/tokens';
import {AbstractTuiControl, tuiAsControl} from '@taiga-ui/legacy/classes';
import {TUI_ARROW} from '@taiga-ui/legacy/components/arrow';
import {
    TuiInputPhoneComponent,
    TuiInputPhoneModule,
} from '@taiga-ui/legacy/components/input-phone';
import {
    TuiPrimitiveTextfieldComponent,
    TuiPrimitiveTextfieldModule,
} from '@taiga-ui/legacy/components/primitive-textfield';
import {
    TUI_TEXTFIELD_SIZE,
    TuiLegacyDropdownOpenMonitorDirective,
    TuiTextfieldControllerModule,
} from '@taiga-ui/legacy/directives';
import {TuiIsoToCountryCodePipe, TuiToCountryCodePipe} from '@taiga-ui/legacy/pipes';
import {
    TUI_COUNTRIES_MASKS,
    tuiAsFocusableItemAccessor,
    type TuiFocusableElementAccessor,
} from '@taiga-ui/legacy/tokens';
import {tuiGetMaxAllowedPhoneLength, tuiIsoToCountryCode} from '@taiga-ui/legacy/utils';
import {type PolymorpheusContent, PolymorpheusOutlet} from '@taiga-ui/polymorpheus';

import {TUI_INPUT_PHONE_INTERNATIONAL_OPTIONS} from './input-phone-international.options';
import {tuiExtractValueFromEvent} from './utils/extract-value-from-event';

const MASK_SYMBOLS = /[ \-_()]/g;

/**
 * @deprecated: drop in v5.0 use {@link TuiInputPhoneInternational}
 * https://taiga-ui.dev/components/input-phone-international
 */
@Component({
    selector: 'tui-input-phone-international',
    imports: [
        CommonModule,
        FormsModule,
        PolymorpheusOutlet,
        TuiAppearance,
        TuiDataList,
        TuiDropdown,
        TuiFlagPipe,
        TuiGroup,
        TuiHint,
        TuiInputPhoneModule,
        TuiIsoToCountryCodePipe,
        TuiLegacyDropdownOpenMonitorDirective,
        TuiPrimitiveTextfieldModule,
        TuiTextfieldControllerModule,
    ],
    templateUrl: './input-phone-international.template.html',
    styleUrls: ['./input-phone-international.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        tuiAsFocusableItemAccessor(TuiInputPhoneInternationalComponent),
        tuiAsControl(TuiInputPhoneInternationalComponent),
        TuiToCountryCodePipe,
    ],
    hostDirectives: [TuiDropdownFixed],
    host: {
        '[attr.data-size]': 'size',
        '(paste.capture.prevent.stop)': 'onPaste($event)',
        '(drop.capture.prevent.stop)': 'onPaste($event)',
    },
})
export class TuiInputPhoneInternationalComponent
    extends AbstractTuiControl<string>
    implements TuiFocusableElementAccessor
{
    @ViewChild(TuiInputPhoneComponent)
    private readonly inputPhoneComponent?: TuiInputPhoneComponent;

    @ViewChild(TuiPrimitiveTextfieldComponent)
    private readonly primitiveTextfield?: TuiPrimitiveTextfieldComponent;

    private readonly options = inject(TUI_INPUT_PHONE_INTERNATIONAL_OPTIONS);
    private readonly extractCountryCodePipe = inject(TuiToCountryCodePipe);
    private readonly textfieldSize = inject(TUI_TEXTFIELD_SIZE);

    protected open = false;
    protected readonly countriesNames$ = inject(TUI_COUNTRIES);
    protected readonly countriesMasks = inject(TUI_COUNTRIES_MASKS);
    protected readonly arrow: PolymorpheusContent<
        TuiContext<TuiSizeL | TuiSizeM | TuiSizeS>
    > = TUI_ARROW;

    @Input()
    public countries = this.options.countries;

    @Output()
    public readonly countryIsoCodeChange = new EventEmitter<TuiCountryIsoCode>();

    public countryIsoCode = this.options.countryIsoCode;

    @Input('countryIsoCode')
    public set isoCode(code: TuiCountryIsoCode) {
        if (this.countryIsoCode === code) {
            return;
        }

        this.inputPhoneComponent?.writeValue(this.value);
        this.countryIsoCode = code;
    }

    public get nativeFocusableElement(): HTMLElement | null {
        return this.inputPhoneComponent && !this.computedDisabled
            ? this.inputPhoneComponent.nativeFocusableElement
            : null;
    }

    public get focused(): boolean {
        return (
            (!!this.primitiveTextfield && this.primitiveTextfield.focused) ||
            (!!this.inputPhoneComponent && this.inputPhoneComponent.focused)
        );
    }

    public get inputPhoneCountryCode(): string {
        return tuiIsoToCountryCode(this.countriesMasks, this.countryIsoCode);
    }

    public get phoneMaskAfterCountryCode(): string {
        const countryCode = this.inputPhoneCountryCode;

        return this.calculateMaskAfterCountryCode(
            this.countriesMasks[this.countryIsoCode],
            countryCode,
        );
    }

    public onPaste(event: ClipboardEvent | DragEvent): void {
        let value = tuiExtractValueFromEvent(event).replace(TUI_NON_DIGITS_REGEXP, '');
        const countryIsoCode = this.extractCountryCodePipe.transform(
            value,
            this.countries,
        );

        if (!countryIsoCode) {
            this.value = `${this.inputPhoneCountryCode}${value}`
                .replaceAll(MASK_SYMBOLS, '')
                .slice(
                    0,
                    tuiGetMaxAllowedPhoneLength(this.countriesMasks, this.countryIsoCode),
                );

            return;
        }

        if (countryIsoCode === 'RU') {
            value = value.replace(/^8/, '7');
        }

        this.updateCountryIsoCode(countryIsoCode);
        this.value = `${CHAR_PLUS}${value}`;
    }

    public onItemClick(isoCode: TuiCountryIsoCode): void {
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

    public override setDisabledState(): void {
        super.setDisabledState();
        this.close();
    }

    protected get size(): TuiSizeL | TuiSizeS {
        return this.textfieldSize.size;
    }

    protected onActiveZone(active: boolean): void {
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

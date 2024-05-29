import {CommonModule} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    HostBinding,
    HostListener,
    inject,
    Input,
    Output,
    ViewChild,
} from '@angular/core';
import {FormsModule} from '@angular/forms';
import type {TuiContext, TuiFocusableElementAccessor} from '@taiga-ui/cdk';
import {
    AbstractTuiControl,
    CHAR_PLUS,
    TUI_NON_DIGITS_REGEXP,
    TuiActiveZoneDirective,
    tuiAsControl,
    tuiAsFocusableItemAccessor,
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
    TUI_COUNTRIES,
    TUI_COUNTRIES_MASKS,
} from '@taiga-ui/kit';
import {TUI_ARROW, TuiArrowComponent} from '@taiga-ui/legacy/components/arrow';
import {
    TuiInputPhoneComponent,
    TuiInputPhoneModule,
} from '@taiga-ui/legacy/components/input-phone';
import {TuiIsoToCountryCodePipe, TuiToCountryCodePipe} from '@taiga-ui/legacy/pipes';
import {tuiGetMaxAllowedPhoneLength, tuiIsoToCountryCode} from '@taiga-ui/legacy/utils';
import type {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {TUI_INPUT_PHONE_INTERNATIONAL_OPTIONS} from './input-phone-international.options';
import {tuiExtractValueFromEvent} from './utils/extract-value-from-event';

const MASK_SYMBOLS = /[ \-_()]/g;

@Component({
    standalone: true,
    selector: 'tui-input-phone-international',
    imports: [
        CommonModule,
        FormsModule,
        PolymorpheusModule,
        TuiInputPhoneModule,
        TuiGroupDirective,
        TuiPrimitiveTextfieldModule,
        TuiTextfieldControllerModule,
        TuiHint,
        TuiDropdownModule,
        TuiDataList,
        TuiArrowComponent,
        TuiAppearanceDirective,
        TuiIsoToCountryCodePipe,
        TuiActiveZoneDirective,
        TuiFlagPipe,
    ],
    templateUrl: './input-phone-international.template.html',
    styleUrls: ['./input-phone-international.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        tuiAsFocusableItemAccessor(TuiInputPhoneInternationalComponent),
        tuiAsControl(TuiInputPhoneInternationalComponent),
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

    private readonly options = inject(TUI_INPUT_PHONE_INTERNATIONAL_OPTIONS);
    private readonly extractCountryCodePipe = inject(TuiToCountryCodePipe);
    private readonly textfieldSize = inject(TUI_TEXTFIELD_SIZE);

    @Input()
    public countries = this.options.countries;

    @Output()
    public readonly countryIsoCodeChange = new EventEmitter<TuiCountryIsoCode>();

    public countryIsoCode = this.options.countryIsoCode;

    protected open = false;

    protected readonly countriesNames$ = inject(TUI_COUNTRIES);
    protected readonly countriesMasks = inject(TUI_COUNTRIES_MASKS);
    protected readonly arrow: PolymorpheusContent<
        TuiContext<TuiSizeL | TuiSizeM | TuiSizeS>
    > = TUI_ARROW;

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

    @HostListener('paste.capture.prevent.stop', ['$event'])
    @HostListener('drop.capture.prevent.stop', ['$event'])
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

    @HostBinding('attr.data-size')
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

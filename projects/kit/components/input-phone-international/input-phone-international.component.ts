import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    forwardRef,
    Inject,
    Input,
    Optional,
    Self,
    ViewChild,
} from '@angular/core';
import {NgControl} from '@angular/forms';
import {
    AbstractTuiControl,
    setNativeFocused,
    TUI_FOCUSABLE_ITEM_ACCESSOR,
    tuiDefaultProp,
    TuiFocusableElementAccessor,
    tuiPure,
    TuiStringHandler,
} from '@taiga-ui/cdk';
import {
    TUI_DIGIT_REGEXP,
    TUI_ICONS_PATH,
    TuiPrimitiveTextfieldComponent,
} from '@taiga-ui/core';
import {TUI_ARROW} from '@taiga-ui/kit/components/arrow';
import {TuiInputPhoneComponent} from '@taiga-ui/kit/components/input-phone';
import {FIXED_DROPDOWN_CONTROLLER_PROVIDER} from '@taiga-ui/kit/providers';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {COUNTRIES} from './const/countries';
import {TuiCountryIsoCode} from './country-iso-code';

@Component({
    selector: 'tui-input-phone-international',
    templateUrl: './input-phone-international.template.html',
    styleUrls: ['./input-phone-international.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: TUI_FOCUSABLE_ITEM_ACCESSOR,
            useExisting: forwardRef(() => TuiInputPhoneInternationalComponent),
        },
        FIXED_DROPDOWN_CONTROLLER_PROVIDER,
    ],
})
export class TuiInputPhoneInternationalComponent
    extends AbstractTuiControl<string>
    implements TuiFocusableElementAccessor {
    @Input()
    @tuiDefaultProp()
    countryIsoCode: TuiCountryIsoCode = TuiCountryIsoCode.RU;

    @Input()
    countries: ReadonlyArray<TuiCountryIsoCode> = [];

    open = false;

    readonly arrow: PolymorpheusContent = TUI_ARROW;

    private staticPath: string | null = null;

    @ViewChild(TuiInputPhoneComponent)
    private readonly inputPhoneComponent?: TuiInputPhoneComponent;

    @ViewChild(TuiPrimitiveTextfieldComponent)
    private readonly primitiveTextfield?: TuiPrimitiveTextfieldComponent;

    constructor(
        @Optional()
        @Self()
        @Inject(NgControl)
        control: NgControl | null,
        @Inject(ChangeDetectorRef) changeDetectorRef: ChangeDetectorRef,
        @Inject(TUI_ICONS_PATH)
        iconsPath: TuiStringHandler<string>,
    ) {
        super(control, changeDetectorRef);

        this.staticPath = iconsPath('tuiIcon').replace('tuiIcon.svg#tuiIcon', '');
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
            COUNTRIES[this.countryIsoCode].mask,
            countryCode,
        );
    }

    get countryFlagPath(): string {
        return this.getFlagPath(this.countryIsoCode);
    }

    getFlagPath(code: TuiCountryIsoCode): string {
        return `${this.staticPath}${code}.png`;
    }

    getCountryName(isoCode: TuiCountryIsoCode): string {
        return COUNTRIES[isoCode].name;
    }

    onItemClick(isoCode: TuiCountryIsoCode) {
        this.open = false;
        this.countryIsoCode = isoCode;
        // recalculates mask inside inputPhone to prevent isoCode conflict
        this.changeDetectorRef.detectChanges();

        if (this.nativeFocusableElement) {
            setNativeFocused(this.nativeFocusableElement);
        }
    }

    setDisabledState() {
        super.setDisabledState();
        this.close();
    }

    @tuiPure
    isoToCountryCode(isoCode: TuiCountryIsoCode): string {
        return (
            '+' +
            COUNTRIES[isoCode].mask
                .split('')
                .filter(symbol => TUI_DIGIT_REGEXP.test(symbol))
                .join('')
        );
    }

    protected getFallbackValue(): string {
        return '';
    }

    private close() {
        this.open = false;
    }

    @tuiPure
    private calculateMaskAfterCountryCode(mask: string, countryCode: string): string {
        return mask.replace(countryCode, '');
    }
}

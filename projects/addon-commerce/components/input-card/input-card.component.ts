import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    EventEmitter,
    Inject,
    Input,
    Optional,
    Output,
    Self,
    ViewChild,
} from '@angular/core';
import {NgControl} from '@angular/forms';
import {TUI_CARD_MASK} from '@taiga-ui/addon-commerce/constants';
import {TuiPaymentSystem} from '@taiga-ui/addon-commerce/types';
import {tuiGetPaymentSystem} from '@taiga-ui/addon-commerce/utils';
import {
    AbstractTuiControl,
    tuiAsFocusableItemAccessor,
    TuiCreditCardAutofillName,
    tuiDefaultProp,
    TuiFocusableElementAccessor,
} from '@taiga-ui/cdk';
import {
    TUI_TEXTFIELD_EXAMPLE_TEXT,
    TuiPrimitiveTextfieldComponent,
    TuiTextfieldExampleTextDirective,
} from '@taiga-ui/core';
import {TextMaskConfig} from 'angular2-text-mask';

const icons: Record<TuiPaymentSystem, string> = {
    mir: `tuiIconMir`,
    visa: `tuiIconVisa`,
    electron: `tuiIconElectron`,
    mastercard: `tuiIconMastercard`,
    maestro: `tuiIconMaestro`,
};

@Component({
    selector: `tui-input-card`,
    templateUrl: `./input-card.template.html`,
    styleUrls: [`./input-card.style.less`],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        tuiAsFocusableItemAccessor(TuiInputCardComponent),
        {
            provide: TUI_TEXTFIELD_EXAMPLE_TEXT,
            deps: [[new Optional(), TuiTextfieldExampleTextDirective]],
            useFactory: (
                directive: TuiTextfieldExampleTextDirective | null,
            ): TuiTextfieldExampleTextDirective => {
                directive = directive || new TuiTextfieldExampleTextDirective();
                directive.exampleText = `0000 0000 0000 0000`;

                return directive;
            },
        },
    ],
})
export class TuiInputCardComponent
    extends AbstractTuiControl<string>
    implements TuiFocusableElementAccessor
{
    @ViewChild(TuiPrimitiveTextfieldComponent)
    private readonly input?: TuiPrimitiveTextfieldComponent;

    @Input()
    @tuiDefaultProp()
    cardSrc: string | null = null;

    @Input()
    @tuiDefaultProp()
    autocompleteEnabled = false;

    @Output()
    readonly binChange = new EventEmitter<string | null>();

    readonly textMaskOptions: TextMaskConfig = {
        mask: TUI_CARD_MASK,
        guide: false,
        pipe: conformedValue => conformedValue.trim(),
    };

    constructor(
        @Optional()
        @Self()
        @Inject(NgControl)
        control: NgControl | null,
        @Inject(ChangeDetectorRef) changeDetectorRef: ChangeDetectorRef,
    ) {
        super(control, changeDetectorRef);
    }

    get nativeFocusableElement(): HTMLInputElement | null {
        return this.input ? this.input.nativeFocusableElement : null;
    }

    get focused(): boolean {
        return !!this.input && this.input.focused;
    }

    get icon(): string | null {
        if (this.cardSrc !== null) {
            return this.cardSrc;
        }

        const {paymentSystem} = this;

        return paymentSystem ? icons[paymentSystem] : null;
    }

    get autocomplete(): TuiCreditCardAutofillName {
        return this.autocompleteEnabled
            ? TuiCreditCardAutofillName.CcNumber
            : TuiCreditCardAutofillName.Off;
    }

    get paymentSystem(): TuiPaymentSystem | null {
        return tuiGetPaymentSystem(this.value);
    }

    get bin(): string | null {
        return this.value.length < 6 ? null : this.value.slice(0, 6);
    }

    get formattedCard(): string {
        return this.value
            .split(``)
            .map((char, index) => (index && index % 4 === 0 ? ` ${char}` : char))
            .join(``);
    }

    onValueChange(value: string): void {
        const parsed = value.split(` `).join(``);
        const currentBin = this.bin;

        this.updateValue(parsed);

        const newBin = this.bin;

        if (currentBin !== newBin) {
            this.binChange.emit(newBin);
        }
    }

    onFocused(focused: boolean): void {
        this.updateFocused(focused);
    }

    writeValue(value: string | null): void {
        const currentBin = this.bin;

        super.writeValue(value);

        const newBin = this.bin;

        if (currentBin !== newBin) {
            this.binChange.emit(newBin);
        }
    }

    protected getFallbackValue(): string {
        return ``;
    }
}

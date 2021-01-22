import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ElementRef,
    EventEmitter,
    forwardRef,
    HostBinding,
    Inject,
    Input,
    Optional,
    Output,
    Self,
    ViewChild,
} from '@angular/core';
import {NgControl} from '@angular/forms';
import {TUI_CARD_MASK} from '@taiga-ui/addon-commerce/constants';
import {TuiPaymentSystem} from '@taiga-ui/addon-commerce/enums';
import {TuiCard} from '@taiga-ui/addon-commerce/interfaces';
import {
    TUI_CARD_EXPIRY_TEXTS,
    TUI_CARD_NUMBER_TEXTS,
} from '@taiga-ui/addon-commerce/tokens';
import {
    getPaymentSystem,
    isCardLengthValid,
    isCardNumberValid,
    tuiCreateAutoCorrectedExpirePipe,
} from '@taiga-ui/addon-commerce/utils';
import {
    AbstractTuiNullableControl,
    isNativeFocused,
    isNativeFocusedIn,
    setNativeFocused,
    TUI_FOCUSABLE_ITEM_ACCESSOR,
    TUI_IS_MOBILE,
    TuiCreditCardAutofillName,
    tuiDefaultProp,
    TuiDestroyService,
    TuiFocusableElementAccessor,
    tuiPure,
    tuiRequiredSetter,
} from '@taiga-ui/cdk';
import {
    MODE_PROVIDER,
    TUI_DIGIT_REGEXP,
    TUI_MODE,
    TuiBrightness,
    TuiTextMaskOptions,
} from '@taiga-ui/core';
import {Observable} from 'rxjs';

const icons = {
    [TuiPaymentSystem.Mir]: 'tuiIconMir',
    [TuiPaymentSystem.Visa]: 'tuiIconVisa',
    [TuiPaymentSystem.Electron]: 'tuiIconElectron',
    [TuiPaymentSystem.Mastercard]: 'tuiIconMastercard',
    [TuiPaymentSystem.Maestro]: 'tuiIconMaestro',
};

// @dynamic
@Component({
    selector: 'tui-input-card-grouped',
    templateUrl: './input-card-grouped.template.html',
    styleUrls: ['./input-card-grouped.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        TuiDestroyService,
        MODE_PROVIDER,
        {
            provide: TUI_FOCUSABLE_ITEM_ACCESSOR,
            useExisting: forwardRef(() => TuiInputCardGroupedComponent),
        },
    ],
    host: {
        'data-tui-host-size': 'l',
    },
})
export class TuiInputCardGroupedComponent
    extends AbstractTuiNullableControl<TuiCard>
    implements TuiFocusableElementAccessor {
    @Input()
    @tuiDefaultProp()
    autocompleteEnabled = false;

    @Input()
    @tuiDefaultProp()
    cardSrc: string | null = null;

    @Input()
    @tuiDefaultProp()
    exampleText = '0000 0000 0000 0000';

    @Input()
    @tuiRequiredSetter()
    set codeLength(length: 3 | 4) {
        this.exampleTextCVC = '0'.repeat(length);
        this.maskCVC = {
            mask: new Array(length).fill(TUI_DIGIT_REGEXP),
            guide: false,
        };
    }

    @Output()
    readonly autofilledChange = new EventEmitter<boolean>();

    @Output()
    readonly binChange = new EventEmitter<string | null>();

    exampleTextCVC = '000';

    maskCVC: TuiTextMaskOptions = {
        mask: new Array(3).fill(TUI_DIGIT_REGEXP),
        guide: false,
    };

    @HostBinding('attr.data-tui-host-mode')
    mode: TuiBrightness | null = null;

    readonly maskCard: TuiTextMaskOptions = {
        mask: TUI_CARD_MASK,
        guide: false,
        pipe: conformedValue => conformedValue.trim(),
    };

    readonly maskExpire: TuiTextMaskOptions = {
        mask: [
            TUI_DIGIT_REGEXP,
            TUI_DIGIT_REGEXP,
            '/',
            TUI_DIGIT_REGEXP,
            TUI_DIGIT_REGEXP,
        ],
        pipe: tuiCreateAutoCorrectedExpirePipe(),
        guide: false,
    };

    @HostBinding('class._mobile')
    readonly isMobile: boolean;

    @ViewChild('inputCard')
    private readonly inputCard?: ElementRef<HTMLInputElement>;

    @ViewChild('inputExpire')
    private readonly inputExpire?: ElementRef<HTMLInputElement>;

    @ViewChild('inputCVC')
    private readonly inputCVC?: ElementRef<HTMLInputElement>;

    private autofilled = false;

    constructor(
        @Optional()
        @Self()
        @Inject(NgControl)
        control: NgControl | null,
        @Inject(ChangeDetectorRef) changeDetectorRef: ChangeDetectorRef,
        @Inject(TUI_IS_MOBILE) isMobile: boolean,
        @Inject(ElementRef) private readonly elementRef: ElementRef<HTMLElement>,
        @Inject(TUI_MODE) mode$: Observable<TuiBrightness | null>,
        @Inject(TUI_CARD_NUMBER_TEXTS)
        readonly cardNumberTexts$: Observable<[string, string]>,
        @Inject(TUI_CARD_EXPIRY_TEXTS)
        readonly cardExpiryTexts$: Observable<[string, string]>,
    ) {
        super(control, changeDetectorRef);

        this.isMobile = isMobile;

        mode$.subscribe(mode => {
            this.mode = mode;
        });
    }

    get nativeFocusableElement(): HTMLInputElement | null {
        return this.inputCard ? this.inputCard.nativeElement : null;
    }

    get focused(): boolean {
        return isNativeFocusedIn(this.elementRef.nativeElement);
    }

    get cardFocused(): boolean {
        return !!this.inputCard && isNativeFocused(this.inputCard.nativeElement);
    }

    get expireFocused(): boolean {
        return !!this.inputExpire && isNativeFocused(this.inputExpire.nativeElement);
    }

    get cvcFocused(): boolean {
        return !!this.inputCVC && isNativeFocused(this.inputCVC.nativeElement);
    }

    get hasCardExampleText(): boolean {
        return !this.readOnly && this.cardFocused && !this.card;
    }

    get hasExpireExampleText(): boolean {
        return !this.readOnly && this.expireFocused && !this.expire;
    }

    get hasCVCExampleText(): boolean {
        return !this.readOnly && this.cvcFocused && !this.cvc;
    }

    get hasCleaner(): boolean {
        return !!this.value && !this.readOnly && !this.computedDisabled;
    }

    get isCardSmall(): boolean {
        return this.card.length < 16;
    }

    get icon(): string | null {
        if (this.cardSrc !== null) {
            return this.cardSrc;
        }

        const {paymentSystem} = this;

        if (paymentSystem === null) {
            return null;
        }

        return icons[paymentSystem];
    }

    get bin(): string | null {
        return !this.value || this.value.card.length < 6
            ? null
            : this.value.card.substr(0, 6);
    }

    get paymentSystem(): TuiPaymentSystem | null {
        return this.value ? getPaymentSystem(this.value.card) : null;
    }

    get placeholderRaised(): boolean {
        return (
            (this.computedFocused && !this.readOnly) || !!this.value || this.autofilled
        );
    }

    get card(): string {
        return this.value ? this.value.card : '';
    }

    get formattedCard(): string {
        return this.value
            ? this.value.card
                  .split('')
                  .map((char, index) => (index && index % 4 === 0 ? ` ${char}` : char))
                  .join('')
            : '';
    }

    get expire(): string {
        return this.value ? this.value.expire : '';
    }

    get cvc(): string {
        return this.value ? this.value.cvc : '';
    }

    get idCard(): string {
        return this.id + '_card';
    }

    get idExpire(): string {
        return this.id + '_expire';
    }

    get idCVC(): string {
        return this.id + '_cvc';
    }

    get isCardValid(): boolean {
        return !!this.card && this.isCardNumberValid(this.card);
    }

    get isFullyFocusable(): boolean {
        return this.focusable && this.isCardValid;
    }

    get isCardCollapsed(): boolean {
        return this.isFullyFocusable && !this.cardFocused;
    }

    get autocompleteCard(): TuiCreditCardAutofillName {
        return this.autocompleteEnabled
            ? TuiCreditCardAutofillName.CcNumber
            : TuiCreditCardAutofillName.Off;
    }

    get autocompleteExpire(): TuiCreditCardAutofillName {
        return this.autocompleteEnabled
            ? TuiCreditCardAutofillName.CcExp
            : TuiCreditCardAutofillName.Off;
    }

    get autocompleteCVC(): TuiCreditCardAutofillName {
        return this.autocompleteEnabled
            ? TuiCreditCardAutofillName.CcCsc
            : TuiCreditCardAutofillName.Off;
    }

    // Safari expiration date autofill workaround
    get name(): 'ccexpiryyear' | null {
        return this.autocompleteEnabled ? 'ccexpiryyear' : null;
    }

    onCardChange(card: string) {
        const {value, bin} = this;
        const parsed = card.split(' ').join('');

        if (value && value.card === parsed) {
            return;
        }

        this.updateProperty(parsed, 'card');

        if (this.isFullyFocusable && !this.expire && this.inputExpire) {
            setNativeFocused(this.inputExpire.nativeElement, true, true);
        }

        const newBin = this.bin;

        if (bin !== newBin) {
            this.binChange.emit(newBin);
        }
    }

    onExpireChange(expire: string) {
        // @bad TODO: Workaround until mask pipe can replace chars and keep caret position
        // @bad TODO: Think about a solution without mask at all
        if (!this.inputExpire) {
            return;
        }

        if (parseInt(expire.substr(0, 2), 10) > 12) {
            expire = '12' + expire.substr(2);
        }

        if (expire.substr(0, 2) === '00') {
            expire = '01' + expire.substr(2);
        }

        this.inputExpire.nativeElement.value = expire;
        this.updateProperty(expire, 'expire');

        if (expire.length === 5 && this.inputCVC) {
            setNativeFocused(this.inputCVC.nativeElement);
        }
    }

    onCVCChange(cvc: string) {
        this.updateProperty(cvc, 'cvc');
    }

    onActiveZoneChange(active: boolean) {
        this.updateFocused(active);
    }

    onHovered(hovered: boolean) {
        this.updateHovered(hovered);
    }

    onAutofilled(autofilled: boolean) {
        this.updateAutofilled(autofilled);
    }

    onMouseDown() {
        if (this.inputCard) {
            setNativeFocused(this.inputCard.nativeElement);
        }
    }

    onFocus() {
        // This is needed to trigger change detection only
    }

    clear() {
        this.updateValue(null);
    }

    writeValue(value: TuiCard | null) {
        const currentBin = this.bin;

        super.writeValue(value);

        const newBin = this.bin;

        if (currentBin !== newBin) {
            this.binChange.emit(newBin);
        }
    }

    @tuiPure
    private isCardNumberValid(cardNumber: string): boolean {
        return (
            cardNumber.length > 11 &&
            isCardLengthValid(cardNumber) &&
            isCardNumberValid(cardNumber)
        );
    }

    private updateProperty(propValue: string, propName: 'card' | 'expire' | 'cvc') {
        const {card, expire, cvc} = this.value || {
            card: '',
            expire: '',
            cvc: '',
        };
        const newValue: TuiCard = {
            card,
            expire,
            cvc,
        };

        newValue[propName] = propValue;

        if (!newValue.expire && !newValue.cvc && !newValue.card) {
            this.updateValue(null);
        } else {
            this.updateValue(newValue);
        }
    }

    private updateAutofilled(autofilled: boolean) {
        if (this.autofilled === autofilled) {
            return;
        }

        this.autofilled = autofilled;
        this.autofilledChange.emit(autofilled);
    }
}

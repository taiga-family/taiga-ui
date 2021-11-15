import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ContentChild,
    ElementRef,
    EventEmitter,
    forwardRef,
    HostListener,
    Inject,
    Input,
    Optional,
    Output,
    Self,
    TemplateRef,
    ViewChild,
} from '@angular/core';
import {NgControl} from '@angular/forms';
import {TUI_CARD_MASK, tuiDefaultCardValidator} from '@taiga-ui/addon-commerce/constants';
import {TuiPaymentSystem} from '@taiga-ui/addon-commerce/enums';
import {TuiCard} from '@taiga-ui/addon-commerce/interfaces';
import {TuiCodeCVCLength} from '@taiga-ui/addon-commerce/types';
import {
    getPaymentSystem,
    tuiCreateAutoCorrectedExpirePipe,
} from '@taiga-ui/addon-commerce/utils';
import {
    AbstractTuiNullableControl,
    isNativeFocused,
    isNativeFocusedIn,
    setNativeFocused,
    TUI_FOCUSABLE_ITEM_ACCESSOR,
    TuiBooleanHandler,
    TuiCreditCardAutofillName,
    tuiDefaultProp,
    TuiFocusableElementAccessor,
    tuiPure,
    tuiRequiredSetter,
} from '@taiga-ui/cdk';
import {
    MODE_PROVIDER,
    TUI_DATA_LIST_HOST,
    TUI_DIGIT_REGEXP,
    TUI_MODE,
    TUI_NON_DIGIT_REGEXP,
    TuiBrightness,
    TuiDataListComponent,
    TuiDataListDirective,
    TuiDataListHost,
    TuiTextMaskOptions,
} from '@taiga-ui/core';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {Observable} from 'rxjs';
import {
    TUI_INPUT_CARD_GROUPED_TEXTS,
    TuiCardGroupedTexts,
} from './input-card-grouped.providers';

const STUB: TuiCard = {
    card: '',
    expire: '',
    cvc: '',
};
const ICONS = {
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
        MODE_PROVIDER,
        {
            provide: TUI_FOCUSABLE_ITEM_ACCESSOR,
            useExisting: forwardRef(() => TuiInputCardGroupedComponent),
        },
        {
            provide: TUI_DATA_LIST_HOST,
            useExisting: forwardRef(() => TuiInputCardGroupedComponent),
        },
    ],
    host: {
        '($.data-mode.attr)': 'mode$',
        'data-tui-host-size': 'l',
    },
})
export class TuiInputCardGroupedComponent
    extends AbstractTuiNullableControl<TuiCard>
    implements TuiFocusableElementAccessor, TuiDataListHost<Partial<TuiCard>>
{
    @Input()
    @tuiDefaultProp()
    autocompleteEnabled = false;

    @Input()
    @tuiDefaultProp()
    cardSrc: PolymorpheusContent | null = null; // TODO(splincode): will be deleted `null` in v3.0

    @Input()
    @tuiDefaultProp()
    exampleText = '0000 0000 0000 0000';

    @Input()
    @tuiDefaultProp()
    cardValidator: TuiBooleanHandler<string> = tuiDefaultCardValidator;

    @Input()
    @tuiRequiredSetter()
    set codeLength(length: TuiCodeCVCLength) {
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

    open = false;

    @ContentChild(TuiDataListDirective, {read: TemplateRef})
    readonly dropdown: PolymorpheusContent = '';

    @ContentChild(TuiDataListComponent)
    readonly datalist?: TuiDataListComponent<TuiCard>;

    @ViewChild('inputCard')
    private readonly inputCard?: ElementRef<HTMLInputElement>;

    @ViewChild('inputExpire')
    private readonly inputExpire?: ElementRef<HTMLInputElement>;

    @ViewChild('inputCVC')
    private readonly inputCVC?: ElementRef<HTMLInputElement>;

    private expireInert = false;

    constructor(
        @Optional()
        @Self()
        @Inject(NgControl)
        control: NgControl | null,
        @Inject(ChangeDetectorRef) changeDetectorRef: ChangeDetectorRef,
        @Inject(ElementRef) private readonly elementRef: ElementRef<HTMLElement>,
        @Inject(TUI_MODE) readonly mode$: Observable<TuiBrightness | null>,
        @Inject(TUI_INPUT_CARD_GROUPED_TEXTS)
        readonly cardGroupedTexts$: Observable<TuiCardGroupedTexts>,
    ) {
        super(control, changeDetectorRef);
    }

    get nativeFocusableElement(): HTMLInputElement | null {
        return this.inputCard ? this.inputCard.nativeElement : null;
    }

    get focused(): boolean {
        return this.open || isNativeFocusedIn(this.elementRef.nativeElement);
    }

    get card(): string {
        return this.value?.card ?? '';
    }

    get expire(): string {
        return this.value?.expire ?? '';
    }

    get cvc(): string {
        return this.value?.cvc ?? '';
    }

    get hasCleaner(): boolean {
        return !!this.value && !this.readOnly && !this.computedDisabled;
    }

    get hasDropdown(): boolean {
        return !!this.dropdown;
    }

    get defaultIcon(): string | null {
        const {paymentSystem} = this;

        return paymentSystem && ICONS[paymentSystem];
    }

    get icon(): PolymorpheusContent | null {
        return this.cardSrc ?? this.defaultIcon;
    }

    get bin(): string | null {
        return !this.value || this.value.card.length < 6
            ? null
            : this.value.card.substr(0, 6);
    }

    get placeholderRaised(): boolean {
        return (this.computedFocused && !this.readOnly) || !!this.value;
    }

    get formattedCard(): string {
        return this.value && !this.cardPrefilled
            ? this.value.card
                  .split('')
                  .map((char, index) => (index && index % 4 === 0 ? ` ${char}` : char))
                  .join('')
            : '';
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

    get isCardCollapsed(): boolean {
        return this.isFocusable(this.card) && !this.cardFocused;
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

    get cardPrefilled(): boolean {
        return !!this.card.match(TUI_NON_DIGIT_REGEXP);
    }

    get cvcPrefilled(): boolean {
        return !!this.cvc.match(TUI_NON_DIGIT_REGEXP);
    }

    get cardFocusable(): boolean {
        return this.focusable && !this.cardPrefilled;
    }

    get expireFocusable(): boolean {
        return this.isFocusable(this.card) && !this.expireInert;
    }

    get cvcFocusable(): boolean {
        return this.isFocusable(this.card);
    }

    get masked(): string {
        return this.cardPrefilled ? `*${this.card.slice(-4)}` : '*';
    }

    handleOption(option: Partial<TuiCard>) {
        const {card = '', expire = '', cvc = ''} = option;
        const {bin} = this;
        const element =
            (!expire && this.inputExpire?.nativeElement) || this.inputCVC?.nativeElement;

        this.updateValue({card, expire, cvc});
        this.updateBin(bin);
        this.open = false;
        this.expireInert = !!expire;

        if (element) {
            setNativeFocused(element);
        }
    }

    onCardChange(card: string) {
        const {value, bin} = this;
        const parsed = card.split(' ').join('');

        if (value && value.card === parsed) {
            return;
        }

        this.updateProperty(parsed, 'card');
        this.updateBin(bin);

        if (this.cardValidator(this.card) && !this.expire && this.inputExpire) {
            setNativeFocused(this.inputExpire.nativeElement, true, true);
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
        this.open = active && this.open;
    }

    onHovered(hovered: boolean) {
        this.updateHovered(hovered);
    }

    onMouseDown(event: MouseEvent) {
        if ((event.target as HTMLElement).matches('input')) {
            return;
        }

        event.preventDefault();
        this.focusInput();
    }

    onScroll(element: HTMLElement) {
        element.scrollLeft = 0;
    }

    @HostListener('keydown.esc')
    onEsc() {
        this.open = false;
    }

    @HostListener('keydown.arrowDown.prevent', ['$event.target', '1'])
    @HostListener('keydown.arrowUp.prevent', ['$event.target', '-1'])
    onArrow(element: HTMLElement, step: number) {
        this.open = this.hasDropdown;
        this.changeDetectorRef.detectChanges();
        this.datalist?.onKeyDownArrow(element, step);
    }

    clear() {
        this.updateValue(null);

        if (this.inputCard) {
            setNativeFocused(this.inputCard.nativeElement);
        }
    }

    toggle() {
        this.open = !this.open;
    }

    writeValue(value: TuiCard | null) {
        const {bin} = this;

        super.writeValue(value);
        this.updateBin(bin);
        this.expireInert = !!this.expire && this.cardPrefilled;
    }

    private get cardFocused(): boolean {
        return !!this.inputCard && isNativeFocused(this.inputCard.nativeElement);
    }

    private get paymentSystem(): TuiPaymentSystem | null {
        return this.value && getPaymentSystem(this.value.card);
    }

    @tuiPure
    private isFocusable(card: string): boolean {
        return this.focusable && (this.cardValidator(card) || this.cardPrefilled);
    }

    private updateBin(oldBin: string | null) {
        const {bin} = this;

        if (bin !== oldBin && !this.cardPrefilled) {
            this.binChange.emit(bin);
        }
    }

    private updateProperty(propValue: string, propName: 'card' | 'expire' | 'cvc') {
        const {card, expire, cvc} = this.value || STUB;
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

    private focusInput() {
        const element =
            (this.cardFocusable && this.inputCard?.nativeElement) ||
            (this.expireFocusable && this.inputExpire?.nativeElement) ||
            this.inputCVC?.nativeElement;

        if (element) {
            setNativeFocused(element);
        }
    }
}

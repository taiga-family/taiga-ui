import {
    ChangeDetectionStrategy,
    Component,
    ContentChild,
    ElementRef,
    EventEmitter,
    HostListener,
    inject,
    Input,
    Output,
    TemplateRef,
    ViewChild,
} from '@angular/core';
import {MaskitoOptions} from '@maskito/core';
import {maskitoDateOptionsGenerator} from '@maskito/kit';
import {AbstractTuiInputCard} from '@taiga-ui/addon-commerce/components/input-card';
import {TUI_CARD_MASK} from '@taiga-ui/addon-commerce/constants';
import {TuiCard} from '@taiga-ui/addon-commerce/interfaces';
import {TuiCodeCVCLength} from '@taiga-ui/addon-commerce/types';
import {
    tuiAsControl,
    tuiAsFocusableItemAccessor,
    TuiAutofillFieldName,
    TuiAutoFocusDirective,
    TuiFocusableElementAccessor,
    tuiIsElement,
    tuiIsInput,
    tuiIsNativeFocused,
    tuiIsNativeFocusedIn,
    tuiPure,
} from '@taiga-ui/cdk';
import {
    MODE_PROVIDER,
    TEXTFIELD_CONTROLLER_PROVIDER,
    TUI_COMMON_ICONS,
    TUI_DIGIT_REGEXP,
    TUI_MODE,
    TUI_NON_DIGIT_REGEXP,
    TUI_TEXTFIELD_WATCHED_CONTROLLER,
    tuiAsDataListHost,
    TuiDataListComponent,
    TuiDataListDirective,
    TuiDataListHost,
} from '@taiga-ui/core';
import {TUI_ARROW_OPTIONS} from '@taiga-ui/kit';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

import {
    TUI_INPUT_CARD_GROUPED_OPTIONS,
    TuiInputCardGroupedOptions,
} from './input-card-grouped.options';
import {TUI_INPUT_CARD_GROUPED_TEXTS} from './input-card-grouped.providers';

const EXPIRE_COMPLETE_LENGTH = 5; // MM/YY

@Component({
    selector: 'tui-input-card-grouped',
    templateUrl: './input-card-grouped.template.html',
    styleUrls: ['./input-card-grouped.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        tuiAsFocusableItemAccessor(TuiInputCardGroupedComponent),
        tuiAsControl(TuiInputCardGroupedComponent),
        tuiAsDataListHost(TuiInputCardGroupedComponent),
        MODE_PROVIDER,
        TEXTFIELD_CONTROLLER_PROVIDER,
    ],
    host: {
        '($.data-mode.attr)': 'mode$',
        'data-size': 'l',
    },
})
export class TuiInputCardGroupedComponent
    extends AbstractTuiInputCard<TuiCard, TuiInputCardGroupedOptions>
    implements TuiFocusableElementAccessor, TuiDataListHost<Partial<TuiCard>>
{
    @ViewChild('inputCard')
    private readonly inputCard?: ElementRef<HTMLInputElement>;

    @ViewChild('inputCard', {read: TuiAutoFocusDirective})
    private readonly cardNumberAutofocusRef?: TuiAutoFocusDirective;

    @ViewChild('inputExpire')
    private readonly inputExpire?: ElementRef<HTMLInputElement>;

    @ViewChild('inputExpire', {read: TuiAutoFocusDirective})
    private readonly expireCardAutofocusRef?: TuiAutoFocusDirective;

    @ViewChild('inputCVC')
    private readonly inputCVC?: ElementRef<HTMLInputElement>;

    @ViewChild('inputCVC', {read: TuiAutoFocusDirective})
    private readonly cvcCardAutofocusRef?: TuiAutoFocusDirective;

    private readonly el: HTMLElement = inject(ElementRef).nativeElement;
    private expireInert = false;

    @Input()
    public exampleText = this.options.exampleText;

    @Input()
    public cardValidator = this.options.cardValidator;

    @Input()
    public set codeLength(length: TuiCodeCVCLength) {
        this.exampleTextCVC = '0'.repeat(length);
        this.maskCVC = {
            mask: new Array(length).fill(TUI_DIGIT_REGEXP),
        };
    }

    @Output()
    public readonly autofilledChange = new EventEmitter<boolean>();

    @ContentChild(TuiDataListDirective, {read: TemplateRef})
    protected readonly dropdown: PolymorpheusContent;

    @ContentChild(TuiDataListComponent)
    protected readonly datalist?: TuiDataListComponent<TuiCard>;

    protected exampleTextCVC = this.options.exampleTextCVC;

    protected maskCVC: MaskitoOptions = {
        mask: new Array(3).fill(TUI_DIGIT_REGEXP),
    };

    protected readonly maskCard: MaskitoOptions = {
        mask: TUI_CARD_MASK,
    };

    protected readonly maskExpire: MaskitoOptions = maskitoDateOptionsGenerator({
        mode: 'mm/yy',
        separator: '/',
    });

    public open = false;

    protected readonly mode$ = inject(TUI_MODE);
    protected readonly cardGroupedTexts$ = inject(TUI_INPUT_CARD_GROUPED_TEXTS);
    protected readonly controller = inject(TUI_TEXTFIELD_WATCHED_CONTROLLER);
    protected readonly icons = inject(TUI_COMMON_ICONS);
    protected readonly arrowOptions = inject(TUI_ARROW_OPTIONS);

    constructor() {
        super(inject(TUI_INPUT_CARD_GROUPED_OPTIONS));
    }

    public get nativeFocusableElement(): HTMLInputElement | null {
        return this.inputCard?.nativeElement ?? null;
    }

    public get focused(): boolean {
        return this.open || tuiIsNativeFocusedIn(this.el);
    }

    protected get appearance(): string {
        return this.controller.appearance;
    }

    public get card(): string {
        return this.value?.card || '';
    }

    protected get expire(): string {
        return this.value?.expire || '';
    }

    protected get cvc(): string {
        return this.value?.cvc || '';
    }

    protected get hasCleaner(): boolean {
        return !!this.value?.card?.trim() && !this.readOnly && !this.computedDisabled;
    }

    protected get hasDropdown(): boolean {
        return !!this.dropdown;
    }

    protected get placeholderRaised(): boolean {
        return (this.computedFocused && !this.readOnly) || this.hasCardNumber;
    }

    protected get hasCardNumber(): boolean {
        return !!this.value?.card?.trim();
    }

    protected get idCard(): string {
        return `${this.id}_card`;
    }

    protected get idExpire(): string {
        return `${this.id}_expire`;
    }

    protected get idCVC(): string {
        return `${this.id}_cvc`;
    }

    protected get isCardCollapsed(): boolean {
        return this.isFocusable(this.card) && !this.cardFocused;
    }

    protected get autocompleteExpire(): TuiAutofillFieldName {
        return this.autocompleteEnabled ? 'cc-exp' : 'off';
    }

    protected get autocompleteCVC(): TuiAutofillFieldName {
        return this.autocompleteEnabled ? 'cc-csc' : 'off';
    }

    protected get tailLength(): number {
        return this.hasExtraSpace ? 5 : 4;
    }

    // Safari expiration date autofill workaround
    protected get name(): 'ccexpiryyear' | null {
        return this.autocompleteEnabled ? 'ccexpiryyear' : null;
    }

    protected get cardPrefilled(): boolean {
        return !!this.card.match(TUI_NON_DIGIT_REGEXP);
    }

    protected get cvcPrefilled(): boolean {
        return !!this.cvc.match(TUI_NON_DIGIT_REGEXP);
    }

    protected get cardFocusable(): boolean {
        return this.focusable && !this.cardPrefilled;
    }

    protected get expireFocusable(): boolean {
        return this.isFocusable(this.card) && !this.expireInert;
    }

    protected get cvcFocusable(): boolean {
        return this.isFocusable(this.card);
    }

    protected get masked(): string {
        return this.cardPrefilled ? `*${this.card.slice(-4)}` : '*';
    }

    private get expireSelectionStart(): number {
        return this.inputExpire?.nativeElement.selectionStart || 0;
    }

    @HostListener('keydown.esc')
    protected onEsc(): void {
        this.open = false;
    }

    @HostListener('keydown.arrowDown.prevent', ['$event.target', '1'])
    @HostListener('keydown.arrowUp.prevent', ['$event.target', '-1'])
    protected onArrow(element: HTMLElement, step: number): void {
        this.open = this.hasDropdown;
        this.cdr.detectChanges();
        this.datalist?.onKeyDownArrow(element, step);
    }

    public handleOption(option: Partial<TuiCard>): void {
        const {card = '', expire = '', cvc = ''} = option;
        const {bin} = this;
        const element =
            (!expire && this.inputExpire?.nativeElement) || this.inputCVC?.nativeElement;

        this.value = {card, expire, cvc};
        this.updateBin(bin);
        this.open = false;
        this.expireInert = !!expire;

        element?.focus();
    }

    protected onCardChange(card: string): void {
        const {value, bin} = this;
        const parsed = card.split(' ').join('');

        if (value && value.card === parsed) {
            return;
        }

        this.updateProperty(parsed, 'card');
        this.updateBin(bin);

        if (this.cardValidator(this.card) && !this.expire && this.inputExpire) {
            this.focusExpire();
        }
    }

    protected onExpireChange(expire: string): void {
        this.updateProperty(expire, 'expire');

        if (
            expire.length === EXPIRE_COMPLETE_LENGTH &&
            this.expireSelectionStart >= EXPIRE_COMPLETE_LENGTH
        ) {
            this.focusCVC();
        }
    }

    protected onCVCChange(cvc: string): void {
        this.updateProperty(cvc, 'cvc');
    }

    protected transform({offsetWidth}: HTMLSpanElement): string {
        return this.isCardCollapsed ? `translate3d(${offsetWidth}px, 0, 0)` : '';
    }

    protected onActiveZoneChange(active: boolean): void {
        this.updateFocused(active);
        this.open = active && this.open;
    }

    protected onMouseDown(event: MouseEvent): void {
        if (tuiIsElement(event.target) && tuiIsInput(event.target)) {
            return;
        }

        event.preventDefault();
        this.focusInput();
    }

    protected onScroll({currentTarget}: Event): void {
        if (tuiIsElement(currentTarget)) {
            currentTarget.scrollLeft = 0;
        }
    }

    protected clear(): void {
        this.expireInert = false;
        this.value = null;
        this.focusCard();
    }

    protected toggle(): void {
        this.open = !this.open;
    }

    public override writeValue(value: TuiCard | null): void {
        const {bin} = this;

        super.writeValue(value);
        this.updateBin(bin);
        this.expireInert = !!this.expire && this.cardPrefilled;
    }

    /** Public API for manual focus management */
    public focusCard(): void {
        this.cardNumberAutofocusRef?.focus();
    }

    public focusExpire(): void {
        this.expireCardAutofocusRef?.focus();
    }

    public focusCVC(): void {
        this.cvcCardAutofocusRef?.focus();
    }

    private get cardFocused(): boolean {
        return !!this.inputCard && tuiIsNativeFocused(this.inputCard.nativeElement);
    }

    private get hasExtraSpace(): boolean {
        return this.card.length % 4 > 0;
    }

    @tuiPure
    private isFocusable(card: string): boolean {
        return this.focusable && (this.cardValidator(card) || this.cardPrefilled);
    }

    private updateBin(oldBin: string | null): void {
        const {bin} = this;

        if (bin !== oldBin && !this.cardPrefilled) {
            this.binChange.emit(bin);
        }
    }

    private updateProperty(value: string, propName: 'card' | 'cvc' | 'expire'): void {
        const {card = '', expire = '', cvc = ''} = this.value || {};
        const newValue: TuiCard = {card, expire, cvc};

        newValue[propName] = value;

        this.value = newValue.expire || newValue.cvc || newValue.card ? newValue : null;
    }

    private focusInput(): void {
        const element =
            (this.cardFocusable && this.inputCard?.nativeElement) ||
            (this.expireFocusable && this.inputExpire?.nativeElement) ||
            this.inputCVC?.nativeElement;

        element?.focus();
    }
}

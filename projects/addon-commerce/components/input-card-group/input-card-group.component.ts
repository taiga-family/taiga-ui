import {NgIf} from '@angular/common';
import type {ElementRef, Signal} from '@angular/core';
import {
    ChangeDetectionStrategy,
    Component,
    computed,
    EventEmitter,
    inject,
    Input,
    Output,
    ViewChild,
} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {FormsModule} from '@angular/forms';
import {MaskitoDirective} from '@maskito/angular';
import {WaResizeObserver} from '@ng-web-apis/resize-observer';
import {
    TUI_MASK_CARD,
    TUI_MASK_CVC,
    TUI_MASK_EXPIRE,
} from '@taiga-ui/addon-commerce/constants';
import {TuiFormatCardPipe} from '@taiga-ui/addon-commerce/pipes';
import {TUI_PAYMENT_SYSTEM_ICONS} from '@taiga-ui/addon-commerce/tokens';
import type {TuiPaymentSystem} from '@taiga-ui/addon-commerce/types';
import {tuiAsControl, TuiControl} from '@taiga-ui/cdk/classes';
import {TUI_NON_DIGIT_REGEXP} from '@taiga-ui/cdk/constants';
import {TuiActiveZone} from '@taiga-ui/cdk/directives/active-zone';
import {tuiHovered, TuiHoveredService} from '@taiga-ui/cdk/directives/hovered';
import {TuiLet} from '@taiga-ui/cdk/directives/let';
import {tuiTypedFromEvent} from '@taiga-ui/cdk/observables';
import {TuiMapperPipe} from '@taiga-ui/cdk/pipes/mapper';
import {TuiIdService} from '@taiga-ui/cdk/services';
import type {TuiBooleanHandler} from '@taiga-ui/cdk/types';
import {tuiInjectElement, tuiIsElement, tuiIsInput} from '@taiga-ui/cdk/utils/dom';
import {tuiIsNativeFocused, tuiIsNativeFocusedIn} from '@taiga-ui/cdk/utils/focus';
import {tuiPure} from '@taiga-ui/cdk/utils/miscellaneous';
import type {TuiDataListHost} from '@taiga-ui/core/components/data-list';
import {tuiAsDataListHost} from '@taiga-ui/core/components/data-list';
import {TuiIcon, TuiIconPipe} from '@taiga-ui/core/components/icon';
import {
    TUI_TEXTFIELD_OPTIONS,
    TuiWithTextfieldDropdown,
} from '@taiga-ui/core/components/textfield';
import {
    TuiAppearance,
    tuiAppearance,
    tuiAppearanceFocus,
    tuiAppearanceState,
} from '@taiga-ui/core/directives/appearance';
import {
    TuiDropdownDirective,
    tuiDropdownOpen,
    tuiDropdownOptionsProvider,
    TuiWithDropdownOpen,
} from '@taiga-ui/core/directives/dropdown';
import {TUI_COMMON_ICONS} from '@taiga-ui/core/tokens';
import {TuiChevron} from '@taiga-ui/kit/directives/chevron';
import type {PolymorpheusContent} from '@taiga-ui/polymorpheus';
import {PolymorpheusOutlet, PolymorpheusTemplate} from '@taiga-ui/polymorpheus';
import {map, merge} from 'rxjs';

import {TUI_INPUT_CARD_GROUP_OPTIONS} from './input-card-group.options';
import {TUI_INPUT_CARD_GROUP_TEXTS} from './input-card-group.providers';

export interface TuiCard {
    card: string;
    cvc: string;
    expire: string;
}

@Component({
    standalone: true,
    selector: 'tui-input-card-group',
    imports: [
        NgIf,
        FormsModule,
        MaskitoDirective,
        WaResizeObserver,
        PolymorpheusOutlet,
        PolymorpheusTemplate,
        TuiActiveZone,
        TuiFormatCardPipe,
        TuiMapperPipe,
        TuiLet,
        TuiIcon,
        TuiChevron,
        TuiAppearance,
        TuiIconPipe,
    ],
    templateUrl: './input-card-group.template.html',
    styleUrls: ['./input-card-group.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        tuiAsDataListHost(TuiInputCardGroup),
        tuiAsControl(TuiInputCardGroup),
        tuiDropdownOptionsProvider({limitWidth: 'fixed'}),
        TuiHoveredService,
    ],
    hostDirectives: [
        TuiAppearance,
        TuiDropdownDirective,
        TuiWithTextfieldDropdown,
        TuiWithDropdownOpen,
    ],
    host: {
        'data-size': 'l',
        '[attr.data-mode]': 'mode()',
        '(mousedown)': 'onMouseDown($event)',
    },
})
export class TuiInputCardGroup
    extends TuiControl<TuiCard | null>
    implements TuiDataListHost<Partial<TuiCard>>
{
    @ViewChild('inputCard')
    private readonly inputCard?: ElementRef<HTMLInputElement>;

    @ViewChild('inputExpire')
    private readonly inputExpire?: ElementRef<HTMLInputElement>;

    @ViewChild('inputCVC')
    private readonly inputCVC?: ElementRef<HTMLInputElement>;

    private expirePrefilled = false;
    private readonly paymentSystems = inject(TUI_PAYMENT_SYSTEM_ICONS);
    private readonly options = inject(TUI_INPUT_CARD_GROUP_OPTIONS);
    private readonly el = tuiInjectElement();
    private readonly hover = tuiHovered();
    private readonly focusedIn = toSignal(
        merge(
            tuiTypedFromEvent(this.el, 'focusin'),
            tuiTypedFromEvent(this.el, 'focusout'),
        ).pipe(map(() => tuiIsNativeFocusedIn(this.el))),
        {initialValue: false},
    );

    protected exampleTextCVC = this.options.exampleTextCVC;
    protected cvcHidden = this.options.cvcHidden;
    protected maskCVC = TUI_MASK_CVC(3);
    protected readonly dropdown = inject(TuiDropdownDirective);
    protected readonly maskCard = TUI_MASK_CARD;
    protected readonly maskExpire = TUI_MASK_EXPIRE;
    protected readonly icons = inject(TUI_COMMON_ICONS);
    protected readonly texts = toSignal(inject(TUI_INPUT_CARD_GROUP_TEXTS));
    protected readonly open = tuiDropdownOpen();

    protected readonly appearance = tuiAppearance(
        inject(TUI_TEXTFIELD_OPTIONS).appearance,
    );

    protected readonly state: Signal<unknown> = tuiAppearanceState(
        // eslint-disable-next-line no-nested-ternary
        computed(() => (this.disabled() ? 'disabled' : this.hover() ? 'hover' : null)),
    );

    protected readonly focus = tuiAppearanceFocus(
        computed(() => this.open() || this.focusedIn()),
    );

    protected readonly labelRaised = computed(
        () => (this.focus() && !this.readOnly()) || !!this.value()?.card,
    );

    protected readonly hasCleaner = computed(
        () => !!this.value()?.card && this.interactive(),
    );

    @Input()
    public exampleText = this.options.exampleText;

    @Input()
    public cardValidator: TuiBooleanHandler<string> = this.options.cardValidator;

    @Input()
    public icon: PolymorpheusContent = this.options.icon;

    @Input()
    public id = inject(TuiIdService).generate();

    @Input()
    public autocomplete = this.options.autocomplete;

    @Output()
    public readonly binChange = new EventEmitter<string | null>();

    @Input()
    public set codeLength(length: 3 | 4) {
        this.exampleTextCVC = '0'.repeat(length);
        this.maskCVC = TUI_MASK_CVC(length);
    }

    public get bin(): string | null {
        return this.card.length < 6 ? null : this.card.slice(0, 6);
    }

    public override writeValue(value: TuiCard | null): void {
        const {bin} = this;

        super.writeValue(value);
        this.updateBin(bin);
        this.expirePrefilled = !!this.expire && this.cardPrefilled;
    }

    /** Public API for manual focus management */
    public focusCard(): void {
        this.inputCard?.nativeElement.focus({preventScroll: true});
    }

    public focusExpire(): void {
        this.inputExpire?.nativeElement.focus({preventScroll: true});
    }

    public focusCVC(): void {
        this.inputCVC?.nativeElement.focus({preventScroll: true});
    }

    public handleOption(option: Partial<TuiCard> | null): void {
        const {card = '', expire = '', cvc = ''} = option || {};
        const {bin} = this;
        const element =
            (!card && this.inputCard?.nativeElement) ||
            (!expire && this.inputExpire?.nativeElement) ||
            this.inputCVC?.nativeElement;

        this.onChange({card, expire, cvc});
        this.updateBin(bin);
        this.open.set(false);
        this.expirePrefilled = !!expire;

        element?.focus();
    }

    public clear(): void {
        this.expirePrefilled = false;
        this.onChange(null);
        this.focusCard();
    }

    protected get content(): PolymorpheusContent {
        const system = this.getPaymentSystem(this.card);

        return this.icon || (system && this.paymentSystems[system]);
    }

    protected get card(): string {
        return this.value()?.card || '';
    }

    protected get expire(): string {
        return this.value()?.expire || '';
    }

    protected get cvc(): string {
        return this.value()?.cvc || '';
    }

    protected get cardCollapsed(): boolean {
        return (
            this.isFocusable(this.card) &&
            !tuiIsNativeFocused(this.inputCard?.nativeElement)
        );
    }

    protected get tailLength(): number {
        return this.card.length % 4 > 0 ? 5 : 4;
    }

    protected get cardPrefilled(): boolean {
        return !!this.card.match(TUI_NON_DIGIT_REGEXP);
    }

    protected get cvcPrefilled(): boolean {
        return !!this.cvc.match(TUI_NON_DIGIT_REGEXP);
    }

    protected get cardFocusable(): boolean {
        return !this.cardPrefilled;
    }

    protected get expireFocusable(): boolean {
        return this.isFocusable(this.card) && !this.expirePrefilled;
    }

    protected get cvcFocusable(): boolean {
        return this.isFocusable(this.card);
    }

    protected get masked(): string {
        return this.cardPrefilled ? `*${this.card.slice(-4)}` : '*';
    }

    protected onCardChange(card: string): void {
        const {value, bin} = this;
        const parsed = card.split(' ').join('');

        if (value()?.card === parsed) {
            return;
        }

        this.updateProperty(parsed, 'card');
        this.updateBin(bin);

        if (this.cardValidator(this.card) && !value()?.expire && this.inputExpire) {
            this.focusExpire();
        }
    }

    protected onExpireChange(expire: string): void {
        this.updateProperty(expire, 'expire');

        if (
            Number(this.inputExpire?.nativeElement.selectionStart) === 5 // MM/YY
        ) {
            this.focusCVC();
        }
    }

    protected onCVCChange(cvc: string): void {
        this.updateProperty(cvc, 'cvc');
    }

    protected transform({offsetWidth}: HTMLSpanElement): string {
        return this.cardCollapsed ? `translate3d(${offsetWidth}px, 0, 0)` : '';
    }

    protected onMouseDown(event: MouseEvent): void {
        if (tuiIsElement(event.target) && tuiIsInput(event.target)) {
            return;
        }

        event.preventDefault();
        this.focusInput();
    }

    protected toggle(): void {
        this.open.set(!this.open());
    }

    @tuiPure
    private isFocusable(card: string): boolean {
        return this.cardValidator(card) || this.cardPrefilled;
    }

    @tuiPure
    private getPaymentSystem(value: string): TuiPaymentSystem | null {
        return this.options.paymentSystemHandler(value);
    }

    private updateBin(oldBin: string | null): void {
        const {bin} = this;

        if (bin !== oldBin && !this.cardPrefilled) {
            this.binChange.emit(bin);
        }
    }

    private updateProperty(value: string, propName: 'card' | 'cvc' | 'expire'): void {
        const {card = '', expire = '', cvc = ''} = this.value() || {};
        const newValue: TuiCard = {card, expire, cvc};

        newValue[propName] = value;

        this.onChange(newValue.expire || newValue.cvc || newValue.card ? newValue : null);
    }

    private focusInput(): void {
        const element =
            (this.cardFocusable && this.inputCard?.nativeElement) ||
            (this.expireFocusable && this.inputExpire?.nativeElement) ||
            this.inputCVC?.nativeElement;

        element?.focus();
    }
}

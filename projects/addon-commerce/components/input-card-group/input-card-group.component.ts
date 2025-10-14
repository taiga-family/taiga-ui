import {DOCUMENT, isPlatformServer} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    computed,
    type ElementRef,
    EventEmitter,
    inject,
    Input,
    Output,
    PLATFORM_ID,
    type Signal,
    viewChild,
} from '@angular/core';
import {takeUntilDestroyed, toSignal} from '@angular/core/rxjs-interop';
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
import {type TuiPaymentSystem} from '@taiga-ui/addon-commerce/types';
import {tuiGetPaymentSystem} from '@taiga-ui/addon-commerce/utils';
import {tuiAsControl, TuiControl} from '@taiga-ui/cdk/classes';
import {CHAR_NO_BREAK_SPACE, TUI_NON_DIGIT_REGEXP} from '@taiga-ui/cdk/constants';
import {tuiHovered, TuiHoveredService} from '@taiga-ui/cdk/directives/hovered';
import {TuiTransitioned} from '@taiga-ui/cdk/directives/transitioned';
import {TuiMapperPipe} from '@taiga-ui/cdk/pipes/mapper';
import {tuiInjectId} from '@taiga-ui/cdk/services';
import {TUI_IS_MOBILE, TUI_IS_WEBKIT} from '@taiga-ui/cdk/tokens';
import {type TuiBooleanHandler} from '@taiga-ui/cdk/types';
import {tuiInjectElement, tuiIsElement, tuiIsInput} from '@taiga-ui/cdk/utils/dom';
import {tuiFocusedIn, tuiIsFocused} from '@taiga-ui/cdk/utils/focus';
import {tuiPure} from '@taiga-ui/cdk/utils/miscellaneous';
import {
    tuiAsDataListHost,
    type TuiDataListHost,
} from '@taiga-ui/core/components/data-list';
import {TuiIcon, TuiIconPipe} from '@taiga-ui/core/components/icon';
import {TUI_TEXTFIELD_OPTIONS} from '@taiga-ui/core/components/textfield';
import {
    TuiAppearance,
    tuiAppearance,
    tuiAppearanceFocus,
    tuiAppearanceMode,
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
import {type PolymorpheusContent, PolymorpheusOutlet} from '@taiga-ui/polymorpheus';
import {EMPTY, Subject, switchMap, timer} from 'rxjs';

import {TUI_INPUT_CARD_GROUP_OPTIONS} from './input-card-group.options';
import {TUI_INPUT_CARD_GROUP_TEXTS} from './input-card-group.providers';

export interface TuiCard {
    card: string;
    cvc: string;
    expire: string;
}

@Component({
    selector: 'tui-input-card-group',
    imports: [
        FormsModule,
        MaskitoDirective,
        PolymorpheusOutlet,
        TuiAppearance,
        TuiChevron,
        TuiFormatCardPipe,
        TuiIcon,
        TuiIconPipe,
        TuiMapperPipe,
        TuiTransitioned,
        WaResizeObserver,
    ],
    templateUrl: './input-card-group.template.html',
    styleUrl: './input-card-group.style.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        tuiAsDataListHost(TuiInputCardGroup),
        tuiAsControl(TuiInputCardGroup),
        tuiDropdownOptionsProvider({limitWidth: 'fixed'}),
        TuiHoveredService,
    ],
    hostDirectives: [TuiAppearance, TuiDropdownDirective, TuiWithDropdownOpen],
    host: {
        '[attr.data-size]': 'textfield.size()',
        '(pointerdown)': 'onPointerDown($event)',
        '(scroll.zoneless)': '$event.target.scrollLeft = 0',
    },
})
export class TuiInputCardGroup
    extends TuiControl<TuiCard | null>
    implements TuiDataListHost<Partial<TuiCard>>
{
    private readonly inputCard = viewChild<ElementRef<HTMLInputElement>>('inputCard');

    private readonly inputExpire = viewChild<ElementRef<HTMLInputElement>>('inputExpire');

    private readonly inputCVC = viewChild<ElementRef<HTMLInputElement>>('inputCVC');

    private readonly doc = inject(DOCUMENT);
    private readonly isServer = isPlatformServer(inject(PLATFORM_ID));
    private readonly focus$ = new Subject<void>();
    private expirePrefilled = false;
    private readonly paymentSystems = inject(TUI_PAYMENT_SYSTEM_ICONS);
    private readonly options = inject(TUI_INPUT_CARD_GROUP_OPTIONS);
    private readonly el = tuiInjectElement();
    private readonly hover = tuiHovered();
    private readonly focusedIn = tuiFocusedIn(this.el);

    protected exampleTextCVC = this.options.exampleTextCVC;
    protected cvcHidden = this.options.cvcHidden;
    protected maskCVC = TUI_MASK_CVC(3);
    protected readonly isMobile = inject(TUI_IS_MOBILE);
    protected readonly isWebkit = inject(TUI_IS_WEBKIT);
    protected readonly dropdown = inject(TuiDropdownDirective);
    protected readonly maskCard = TUI_MASK_CARD;
    protected readonly maskExpire = TUI_MASK_EXPIRE;
    protected readonly icons = inject(TUI_COMMON_ICONS);
    protected readonly textfield = inject(TUI_TEXTFIELD_OPTIONS);
    protected readonly texts = toSignal(inject(TUI_INPUT_CARD_GROUP_TEXTS));
    protected readonly open = tuiDropdownOpen();
    protected readonly $ = this.isWebkit
        ? this.focus$
              .pipe(
                  switchMap(() => timer(100)),
                  takeUntilDestroyed(),
              )
              .subscribe(() => (this.expire ? this.focusCVC() : this.focusExpire()))
        : EMPTY;

    protected readonly m = tuiAppearanceMode(this.mode);
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

    /**
     * @deprecated use 'placeholder' instead
     */
    @Input()
    public exampleText = this.options.exampleText;

    @Input()
    public placeholder = this.options.exampleText;

    @Input()
    public inputs = this.options.inputs;

    @Input()
    public cardValidator: TuiBooleanHandler<string> = this.options.cardValidator;

    @Input()
    public icon: PolymorpheusContent = '';

    @Input()
    public id = tuiInjectId();

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
        const {activeElement} = this.doc;

        super.writeValue(value);
        this.updateBin(bin);
        this.expirePrefilled = !!this.expire && this.cardPrefilled;

        // Programmatic setting of expire input value breaks autofill in Chrome
        const inputExpire = this.inputExpire();

        if (
            !inputExpire ||
            this.isMobile ||
            this.isWebkit ||
            this.isServer ||
            inputExpire.nativeElement.value === this.expire
        ) {
            return;
        }

        inputExpire.nativeElement.focus({preventScroll: true});
        inputExpire.nativeElement.select();
        this.doc.execCommand('insertText', false, this.expire);
        inputExpire.nativeElement.blur();
        (activeElement as HTMLElement | null)?.focus({preventScroll: true});
    }

    /** Public API for manual focus management */
    public focusCard(): void {
        this.inputCard()?.nativeElement.focus({preventScroll: true});
    }

    public focusExpire(): void {
        if (this.inputs.expire) {
            this.inputExpire()?.nativeElement.focus({preventScroll: true});
        } else {
            this.inputCVC()?.nativeElement.focus({preventScroll: true});
        }
    }

    public focusCVC(): void {
        this.inputCVC()?.nativeElement.focus({preventScroll: true});
    }

    public handleOption(option: Partial<TuiCard> | null): void {
        const {card = '', expire = '', cvc = ''} = option || {};
        const {bin} = this;
        const element =
            (!card && this.inputCard()?.nativeElement) ||
            (!expire && this.inputExpire()?.nativeElement) ||
            this.inputCVC()?.nativeElement;

        this.onChange({card, expire, cvc});
        this.updateBin(bin);
        this.open.set(false);
        this.expirePrefilled = !!expire;

        element?.focus();
    }

    public clear(): void {
        this.expirePrefilled = false;

        [this.inputCVC(), this.inputExpire(), this.inputCard()].forEach((e) => {
            e?.nativeElement.focus();
            e?.nativeElement.select();
            e?.nativeElement.ownerDocument.execCommand('delete');
        });

        this.onChange(null);
    }

    public onResize(): void {
        this.cdr.detectChanges();
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
            this.isFocusable(this.card) && !tuiIsFocused(this.inputCard()?.nativeElement)
        );
    }

    protected get tailLength(): number {
        return this.card.length % 4 > 0 ? 5 : 4;
    }

    protected get cardPrefilled(): boolean {
        return !!this.card.match(TUI_NON_DIGIT_REGEXP);
    }

    protected get cvcPrefilled(): boolean {
        return !this.inputs.cvc || !!this.cvc.match(TUI_NON_DIGIT_REGEXP);
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
        return this.cardPrefilled ? `${this.card.slice(-4)}` : '';
    }

    protected onCardChange(card: string): void {
        const {value, bin} = this;
        const parsed = card.split(CHAR_NO_BREAK_SPACE).join('');

        if (value()?.card === parsed) {
            return;
        }

        this.updateProperty(parsed, 'card');
        this.updateBin(bin);

        if (this.cardValidator(this.card) && !value()?.expire && this.inputExpire()) {
            this.focusExpire();
            // Safari autofill focus jerk workaround
            this.focus$.next();
        }
    }

    protected onExpireChange(expire: string): void {
        this.updateProperty(expire, 'expire');

        // MM/YY
        if (Number(this.inputExpire()?.nativeElement.selectionStart) === 5) {
            this.focusCVC();
        }
    }

    protected onCVCChange(cvc: string): void {
        this.updateProperty(cvc, 'cvc');
    }

    protected getStyle({offsetWidth}: HTMLSpanElement): string {
        return this.cardCollapsed
            ? `transform: translate3d(calc(${offsetWidth}px * var(--tui-inline)), 0, 0); clip-path: inset(0 0 0 calc(100% - ${offsetWidth}px));`
            : '';
    }

    protected onPointerDown(event: MouseEvent): void {
        if (tuiIsElement(event.target) && tuiIsInput(event.target)) {
            return;
        }

        event.preventDefault();
        this.focusInput();
    }

    protected toggle(): void {
        this.open.update((open) => !open);
    }

    @tuiPure
    private isFocusable(card: string): boolean {
        return this.cardValidator(card) || this.cardPrefilled;
    }

    @tuiPure
    private getPaymentSystem(value: string): TuiPaymentSystem | null {
        return tuiGetPaymentSystem(value);
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
            (this.cardFocusable && this.inputCard()?.nativeElement) ||
            (this.expireFocusable && this.inputExpire()?.nativeElement) ||
            this.inputCVC()?.nativeElement;

        element?.focus();
    }
}

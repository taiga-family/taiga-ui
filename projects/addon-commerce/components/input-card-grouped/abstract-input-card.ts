import {Directive, EventEmitter, inject, Input, Output} from '@angular/core';
import type {TuiInputCardOptions} from '@taiga-ui/addon-commerce/components/input-card';
import type {TuiPaymentSystem} from '@taiga-ui/addon-commerce/types';
import {TUI_PAYMENT_SYSTEM_ICONS} from '@taiga-ui/addon-commerce/utils';
import type {TuiFocusableElementAccessor, TuiNativeFocusableElement} from '@taiga-ui/cdk';
import {AbstractTuiNullableControl, tuiPure} from '@taiga-ui/cdk';
import type {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

@Directive()
export abstract class AbstractTuiInputCard<
        T,
        Options extends TuiInputCardOptions = TuiInputCardOptions,
    >
    extends AbstractTuiNullableControl<T>
    implements TuiFocusableElementAccessor
{
    protected paymentIcons: Record<TuiPaymentSystem, string> = inject(
        TUI_PAYMENT_SYSTEM_ICONS,
    );

    @Input()
    public cardSrc: PolymorpheusContent;

    @Input()
    public autocompleteEnabled = this.options.autocomplete;

    @Output()
    public readonly binChange = new EventEmitter<string | null>();

    protected constructor(protected readonly options: Options) {
        super();
    }

    public abstract get card(): string;

    public abstract get nativeFocusableElement(): TuiNativeFocusableElement | null;

    public get bin(): string | null {
        return this.card.length < 6 ? null : this.card.slice(0, 6);
    }

    public get defaultIcon(): string | null {
        const paymentSystem = this.getPaymentSystem(this.card);

        return paymentSystem && this.paymentIcons[paymentSystem];
    }

    public get paymentSystem(): TuiPaymentSystem | null {
        return this.getPaymentSystem(this.card);
    }

    /** @deprecated remove in 4.0 */
    public get icon(): PolymorpheusContent {
        return this.cardSrc || this.defaultIcon;
    }

    protected get autocomplete(): string {
        return this.autocompleteEnabled ? 'cc-number' : 'off';
    }

    @tuiPure
    protected getPaymentSystem(cardNumber?: string | null): TuiPaymentSystem | null {
        return this.options.paymentSystemHandler(cardNumber);
    }
}

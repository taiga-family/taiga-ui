import {Directive, EventEmitter, Input, Output} from '@angular/core';
import type {TuiPaymentSystem} from '@taiga-ui/addon-commerce/types';
import type {
    TuiAutofillFieldName,
    TuiFocusableElementAccessor,
    TuiNativeFocusableElement,
} from '@taiga-ui/cdk';
import {AbstractTuiNullableControl, tuiPure} from '@taiga-ui/cdk';
import type {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

import type {TuiInputCardOptions} from './input-card.options';

@Directive()
export abstract class AbstractTuiInputCard<
        T,
        Options extends TuiInputCardOptions = TuiInputCardOptions,
    >
    extends AbstractTuiNullableControl<T>
    implements TuiFocusableElementAccessor
{
    @Input()
    public cardSrc: PolymorpheusContent;

    @Input()
    public autocompleteEnabled = this.options.autocompleteEnabled;

    @Output()
    public readonly binChange = new EventEmitter<string | null>();

    protected constructor(protected readonly options: Options) {
        super();
    }

    public abstract get card(): string;

    public abstract get nativeFocusableElement(): TuiNativeFocusableElement | null;

    /**
     * @deprecated: drop in v4.0
     * use {@link autocomplete}
     */
    public get autocompleteCard(): TuiAutofillFieldName {
        return this.autocomplete;
    }

    public get bin(): string | null {
        return this.card.length < 6 ? null : this.card.slice(0, 6);
    }

    public get defaultIcon(): string | null {
        const paymentSystem = this.getPaymentSystem(this.card);

        return paymentSystem && this.options.icons[paymentSystem];
    }

    public get paymentSystem(): TuiPaymentSystem | null {
        return this.getPaymentSystem(this.card);
    }

    /** @deprecated remove in 4.0 */
    public get icon(): PolymorpheusContent {
        return this.cardSrc || this.defaultIcon;
    }

    protected get autocomplete(): TuiAutofillFieldName {
        return this.autocompleteEnabled ? 'cc-number' : 'off';
    }

    @tuiPure
    protected getPaymentSystem(cardNumber?: string | null): TuiPaymentSystem | null {
        return this.options.paymentSystemHandler(cardNumber);
    }
}

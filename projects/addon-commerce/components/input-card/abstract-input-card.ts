import {
    ChangeDetectorRef,
    Directive,
    EventEmitter,
    Inject,
    Input,
    Optional,
    Output,
    Self,
} from '@angular/core';
import {NgControl} from '@angular/forms';
import {TuiPaymentSystem} from '@taiga-ui/addon-commerce/types';
import {
    AbstractTuiNullableControl,
    TuiAutofillFieldName,
    TuiFocusableElementAccessor,
    TuiNativeFocusableElement,
    tuiPure,
} from '@taiga-ui/cdk';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

import {TuiInputCardOptions} from './input-card.providers';

@Directive()
export abstract class AbstractTuiInputCard<
        T,
        Options extends TuiInputCardOptions = TuiInputCardOptions,
    >
    extends AbstractTuiNullableControl<T>
    implements TuiFocusableElementAccessor
{
    @Input()
    cardSrc: PolymorpheusContent;

    @Input()
    autocompleteEnabled = this.options.autocompleteEnabled;

    @Output()
    readonly binChange = new EventEmitter<string | null>();

    constructor(
        @Optional()
        @Self()
        @Inject(NgControl)
        control: NgControl | null,
        @Inject(ChangeDetectorRef) cdr: ChangeDetectorRef,
        protected readonly options: Options,
    ) {
        super(control, cdr);
    }

    abstract get card(): string;

    abstract get nativeFocusableElement(): TuiNativeFocusableElement | null;

    get defaultIcon(): string | null {
        const paymentSystem = this.getPaymentSystem(this.card);

        return paymentSystem && this.options.icons[paymentSystem];
    }

    get paymentSystem(): TuiPaymentSystem | null {
        return this.getPaymentSystem(this.card);
    }

    get icon(): PolymorpheusContent {
        return this.cardSrc || this.defaultIcon;
    }

    get autocomplete(): TuiAutofillFieldName {
        return this.autocompleteEnabled ? `cc-number` : `off`;
    }

    /**
     * @deprecated: drop in v4.0
     * use {@link autocomplete}
     */
    get autocompleteCard(): TuiAutofillFieldName {
        return this.autocomplete;
    }

    get bin(): string | null {
        return this.card.length < 6 ? null : this.card.slice(0, 6);
    }

    @tuiPure
    protected getPaymentSystem(cardNumber?: string | null): TuiPaymentSystem | null {
        return this.options.paymentSystemHandler(cardNumber);
    }
}

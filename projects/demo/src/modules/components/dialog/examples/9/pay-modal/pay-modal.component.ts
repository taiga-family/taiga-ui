import {
    ChangeDetectionStrategy,
    Component,
    Inject,
    OnInit,
    Self,
    ViewChild,
} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {
    tuiCardNumberValidator,
    tuiDefaultCardValidator,
    TuiInputCardGroupedComponent,
} from '@taiga-ui/addon-commerce';
import {TUI_IS_IOS, TuiDestroyService} from '@taiga-ui/cdk';
import {TuiDialogContext} from '@taiga-ui/core';
import {POLYMORPHEUS_CONTEXT} from '@tinkoff/ng-polymorpheus';
import {BehaviorSubject} from 'rxjs';
import {map, switchMap, takeUntil} from 'rxjs/operators';

import {
    AccountCard,
    DataForPayCardModal,
    FetchedCards,
    PaymentMode,
} from '../helpers/models';
import {PayService} from '../helpers/pay.service';
import {inputCardGroupedCVCValidator} from '../helpers/validator';

@Component({
    selector: 'pay-modal',
    templateUrl: './pay-modal.component.html',
    styleUrls: ['./pay-modal.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [TuiDestroyService],
})
export class PayModalComponent implements OnInit {
    @ViewChild('cardGroupedInput')
    private readonly cardGroupedInput?: TuiInputCardGroupedComponent;

    readonly form = new FormGroup({
        card: new FormControl(null, [
            Validators.required,
            inputCardGroupedCVCValidator(),
        ]),
        saveCard: new FormControl(true),
    });

    cards: AccountCard[] = [];
    paymentMode: PaymentMode = PaymentMode.ByNewCard;
    loading$ = new BehaviorSubject(false);
    payProcessing$ = new BehaviorSubject(false);
    amount: number = this.context?.data?.amount ?? 0;
    readonly PAYMENT_MODE = PaymentMode;

    constructor(
        @Inject(POLYMORPHEUS_CONTEXT)
        readonly context: TuiDialogContext<void, DataForPayCardModal>,
        @Inject(TUI_IS_IOS) readonly iOS: boolean,
        @Inject(PayService) private readonly payService: PayService,
        @Self() @Inject(TuiDestroyService) private readonly destroy$: TuiDestroyService,
    ) {}

    ngOnInit(): void {
        this.fetchCardsAndSetPrimaryCard();
    }

    payBySelectedCard(card: AccountCard): void {
        this.form.patchValue({
            card: {card: this.maskedNumber(card), expire: '**/**', cvc: ''},
        });

        this.form.controls.card.removeValidators(tuiCardNumberValidator);
        this.paymentMode = PaymentMode.BySavedCard;
        this.cardGroupedInput?.focusCVC();
    }

    payByNewCard(): void {
        this.form.patchValue({card: null});
        this.form.controls.card.addValidators(tuiCardNumberValidator);
        this.paymentMode = PaymentMode.ByNewCard;
        this.cardGroupedInput?.focusCard();
    }

    pay(): void {
        if (!this.form.controls.card.valid) {
            return;
        }

        this.payProcessing$.next(true);
        this.payService
            .pay()
            .pipe(takeUntil(this.destroy$))
            .subscribe(
                () => {
                    this.payProcessing$.next(false);
                    this.context.$implicit.complete();
                },
                () => this.payProcessing$.next(false),
            );
    }

    cardValidator(card: string): boolean {
        return tuiDefaultCardValidator(card) && card.length === 16;
    }

    private maskedNumber(savedCard: AccountCard): string {
        return `${savedCard.firstSix.toString().slice(0, -2)}***${savedCard.lastFour}`;
    }

    private fetchCardsAndSetPrimaryCard(): void {
        this.loading$.next(true);
        this.payService
            .preparePayment(this.context.data.amount)
            .pipe(
                switchMap(amount =>
                    this.payService
                        .getPrimaryCard()
                        .pipe(map(data => [amount, data] as [number, FetchedCards])),
                ),
                takeUntil(this.destroy$),
            )
            .subscribe({
                next: ([, data]: [number, FetchedCards]) => {
                    this.cards = data.cards;

                    if (data.primary) {
                        this.payBySelectedCard(data.primary);
                    } else {
                        this.payByNewCard();
                    }
                },
                complete: () => this.loading$.next(false),
            });
    }
}

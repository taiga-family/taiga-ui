import {AsyncPipe} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    DestroyRef,
    inject,
    type OnInit,
    ViewChild,
} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {
    type TuiCard,
    tuiCardNumberValidator,
    tuiDefaultCardValidator,
    TuiInputCardGroup,
} from '@taiga-ui/addon-commerce';
import {TUI_IS_IOS, TuiAutoFocus, TuiLet, type TuiValuesOf} from '@taiga-ui/cdk';
import {
    TuiButton,
    TuiFormatNumberPipe,
    TuiIconPipe,
    TuiLink,
    TuiLoader,
    TuiTextfield,
} from '@taiga-ui/core';
import {TuiButtonLoading, TuiCheckbox} from '@taiga-ui/kit';
import {type TuiDialogContext} from '@taiga-ui/legacy';
import {injectContext} from '@taiga-ui/polymorpheus';
import {BehaviorSubject, map, switchMap} from 'rxjs';

import {
    type AccountCard,
    type DataForPayCardModal,
    type FetchedCards,
    PaymentMode,
} from '../helpers/models';
import {PayService} from '../helpers/pay.service';
import {inputCardGroupedCVCValidator} from '../helpers/validator';

@Component({
    selector: 'pay-modal',
    imports: [
        AsyncPipe,
        ReactiveFormsModule,
        TuiAutoFocus,
        TuiButton,
        TuiButtonLoading,
        TuiCheckbox,
        TuiFormatNumberPipe,
        TuiIconPipe,
        TuiInputCardGroup,
        TuiLet,
        TuiLink,
        TuiLoader,
        TuiTextfield,
    ],
    templateUrl: './pay-modal.component.html',
    styleUrl: './pay-modal.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PayModal implements OnInit {
    @ViewChild('cardGroupedInput')
    private readonly cardGroupedInput?: TuiInputCardGroup;

    private readonly payService = inject(PayService);
    private readonly destroyRef = inject(DestroyRef);

    protected readonly form = new FormGroup({
        card: new FormControl<TuiCard | null>(null, [
            Validators.required,
            inputCardGroupedCVCValidator(),
        ]),
        saveCard: new FormControl(true),
    });

    protected readonly iOS = inject(TUI_IS_IOS);

    protected cards: AccountCard[] = [];
    protected paymentMode: TuiValuesOf<typeof PaymentMode> = PaymentMode.ByNewCard;
    protected loading$ = new BehaviorSubject(false);
    protected payProcessing$ = new BehaviorSubject(false);
    protected readonly paymentModeTypes = PaymentMode;

    public readonly context =
        injectContext<TuiDialogContext<void, DataForPayCardModal>>();

    public readonly amount = this.context.data.amount;

    public ngOnInit(): void {
        this.fetchCardsAndSetPrimaryCard();
    }

    protected payBySelectedCard(card: AccountCard): void {
        this.form.patchValue({
            card: {card: this.maskedNumber(card), expire: '**/**', cvc: ''},
        });

        this.form.controls.card.removeValidators(tuiCardNumberValidator);
        this.paymentMode = PaymentMode.BySavedCard;
        this.cardGroupedInput?.focusCVC();
    }

    protected payByNewCard(): void {
        this.form.patchValue({card: null});
        this.form.controls.card.addValidators(tuiCardNumberValidator);
        this.paymentMode = PaymentMode.ByNewCard;
        this.cardGroupedInput?.focusCard();
    }

    protected pay(): void {
        if (!this.form.controls.card.valid) {
            return;
        }

        this.payProcessing$.next(true);
        this.payService
            .pay()
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe({
                next: () => {
                    this.payProcessing$.next(false);
                    this.context.$implicit.complete();
                },
                error: () => {
                    this.payProcessing$.next(false);
                },
            });
    }

    protected cardValidator(card: string): boolean {
        return tuiDefaultCardValidator(card) && card.length === 16;
    }

    private maskedNumber(savedCard: AccountCard): string {
        return `${(savedCard.firstSix satisfies string).slice(0, -2)}***${savedCard.lastFour}`;
    }

    private fetchCardsAndSetPrimaryCard(): void {
        this.loading$.next(true);
        this.payService
            .preparePayment(this.context.data.amount)
            .pipe(
                switchMap((amount) =>
                    this.payService
                        .getPrimaryCard()
                        .pipe(map((data) => [amount, data] as [number, FetchedCards])),
                ),
                takeUntilDestroyed(this.destroyRef),
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

import {AsyncPipe, NgForOf, NgIf} from '@angular/common';
import type {OnInit} from '@angular/core';
import {
    ChangeDetectionStrategy,
    Component,
    DestroyRef,
    inject,
    ViewChild,
} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import type {TuiCard} from '@taiga-ui/addon-commerce';
import {
    tuiCardNumberValidator,
    tuiDefaultCardValidator,
    TuiInputCardGroupedComponent,
} from '@taiga-ui/addon-commerce';
import type {TuiValuesOf} from '@taiga-ui/cdk';
import {TUI_IS_IOS, TuiAutoFocusDirective, TuiLet} from '@taiga-ui/cdk';
import type {TuiDialogContext} from '@taiga-ui/core';
import {
    TuiButtonDirective,
    TuiFormatNumberPipe,
    TuiIconPipe,
    TuiLabelDirective,
    TuiLinkDirective,
    TuiLoader,
    TuiTextfieldOptionsDirective,
} from '@taiga-ui/core';
import {TuiButtonLoadingComponent, TuiCheckboxComponent} from '@taiga-ui/kit';
import {POLYMORPHEUS_CONTEXT} from '@taiga-ui/polymorpheus';
import {BehaviorSubject, map, switchMap} from 'rxjs';

import type {AccountCard, DataForPayCardModal, FetchedCards} from '../helpers/models';
import {PaymentMode} from '../helpers/models';
import {PayService} from '../helpers/pay.service';
import {inputCardGroupedCVCValidator} from '../helpers/validator';

@Component({
    standalone: true,
    selector: 'pay-modal',
    imports: [
        ReactiveFormsModule,
        NgForOf,
        NgIf,
        TuiLinkDirective,
        TuiButtonDirective,
        TuiButtonLoadingComponent,
        AsyncPipe,
        TuiFormatNumberPipe,
        TuiLet,
        TuiAutoFocusDirective,
        TuiLoader,
        TuiInputCardGroupedComponent,
        TuiTextfieldOptionsDirective,
        TuiLabelDirective,
        TuiCheckboxComponent,
        TuiIconPipe,
    ],
    templateUrl: './pay-modal.component.html',
    styleUrls: ['./pay-modal.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PayModalComponent implements OnInit {
    @ViewChild('cardGroupedInput')
    private readonly cardGroupedInput?: TuiInputCardGroupedComponent;

    private readonly payService = inject(PayService);
    private readonly destroyRef = inject(DestroyRef);

    protected readonly form = new FormGroup({
        card: new FormControl<TuiCard | null>(null, [
            Validators.required,
            inputCardGroupedCVCValidator(),
        ]),
        saveCard: new FormControl(true),
    });

    protected readonly context =
        inject<TuiDialogContext<void, DataForPayCardModal>>(POLYMORPHEUS_CONTEXT);

    protected readonly iOS = inject(TUI_IS_IOS);

    protected cards: AccountCard[] = [];
    protected paymentMode: TuiValuesOf<typeof PaymentMode> = PaymentMode.ByNewCard;
    protected loading$ = new BehaviorSubject(false);
    protected payProcessing$ = new BehaviorSubject(false);
    protected amount: number = this.context?.data?.amount ?? 0;
    protected readonly PAYMENT_MODE = PaymentMode;

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
            .subscribe(
                () => {
                    this.payProcessing$.next(false);
                    this.context.$implicit.complete();
                },
                () => this.payProcessing$.next(false),
            );
    }

    protected cardValidator(card: string): boolean {
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

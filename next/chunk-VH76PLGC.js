import"./chunk-42JZD6NG.js";var t=`<div class="modal-container">
    <h1 class="title">Pay by card</h1>

    <form [formGroup]="form">
        @for (card of cards; track card) {
            <div class="form-block">
                <div
                    class="saved-card-preset"
                    (click)="payBySelectedCard(card)"
                >
                    <div class="saved-card-preset__item">
                        <div class="saved-card-preset__item__inner">
                            <div class="saved-card-preset__item__placeholder">Card number</div>
                            <div class="saved-card-preset__item__info">
                                <img
                                    alt="card"
                                    class="saved-card-preset__item__info__icon"
                                    [src]="
                                        (card.cardType === 'MasterCard'
                                            ? '@tui.maestro'
                                            : card.cardType === 'Visa'
                                              ? '@tui.visa'
                                              : '@tui.mir'
                                        ) | tuiIcon
                                    "
                                />
                                <div class="saved-card-preset__item__info__number">
                                    {{ card.firstSix }}****{{ card.lastFour }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        }

        <div class="form-block">
            @if (iOS) {
                <!-- hack: open keyboard on iOS before focus target card input -->
                <!-- hack: use autocomplete/inputmode attrs if you want autofill in keyboard  -->
                <input
                    autocomplete="cc-number"
                    inputmode="numeric"
                    maxlength="0"
                    tuiAutoFocus
                    class="fake-input"
                />
                <!-- required:
        You don't need to use this hack for iOS if your input-card elements
        already exist in DOM, because you don't need to wait for them asynchronously.
        In our example we wait loading$ state before focus real card number / card cvc.
        -->
            }
            @let loading = (loading$ | async) ?? false;
            @if (loading) {
                <p>Please wait, we are loading fake cards...</p>
            }

            <tui-loader
                [loading]="loading"
                [overlay]="true"
            >
                <tui-input-card-group
                    #cardGroupedInput
                    formControlName="card"
                    [cardValidator]="cardValidator"
                    [class.without-date]="paymentMode === paymentModeTypes.BySavedCard"
                    [tuiTextfieldCleaner]="paymentMode === paymentModeTypes.ByNewCard"
                />
            </tui-loader>
        </div>

        @if (paymentMode === paymentModeTypes.ByNewCard) {
            <div class="form-block">
                <label tuiLabel>
                    <input
                        formControlName="saveCard"
                        tuiCheckbox
                        type="checkbox"
                    />
                    Remember card
                </label>
            </div>
        }

        @if (paymentMode === paymentModeTypes.BySavedCard) {
            <div class="form-block is--links">
                <button
                    iconStart="@tui.plus"
                    tuiLink
                    type="button"
                    (click)="payByNewCard()"
                >
                    New card
                </button>
            </div>
        }
    </form>
    <button
        appearance="primary"
        size="l"
        tuiButton
        type="submit"
        [loading]="!!(payProcessing$ | async)"
        (click)="pay()"
    >
        Pay {{ amount | tuiFormatNumber }} \u20BD
    </button>
</div>
`;export{t as default};

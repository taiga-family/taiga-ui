export const PaymentMode = {
    ByNewCard: 0,
    BySavedCard: 1,
} as const;

export interface FetchedCards {
    cards: AccountCard[];
    primary: AccountCard | null;
}

export interface AccountCard {
    cardId: string;
    cardType: string;
    firstSix: string;
    lastFour: string;
}

export interface DataForPayCardModal {
    amount: number;
}

export enum PaymentMode {
    ByNewCard = 0,
    BySavedCard = 1,
}

export interface FetchedCards {
    cards: AccountCard[];
    primary: AccountCard | null;
}

export interface AccountCard {
    cardId: string;
    firstSix: string;
    lastFour: string;
    cardType: string;
}

export interface DataForPayCardModal {
    amount: number;
}

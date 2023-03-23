import type {AccountCard} from './models';

export const MOCK_CARDS: AccountCard[] = [
    {
        cardId: `1`,
        firstSix: `4242`,
        lastFour: `4242`,
        cardType: `Visa`,
    },
    {
        cardId: `2`,
        firstSix: `5555`,
        lastFour: `4444`,
        cardType: `MasterCard`,
    },
    {
        cardId: `3`,
        firstSix: `2200`,
        lastFour: `6404`,
        cardType: `Mir`,
    },
];

import {TuiPaymentSystem} from '@taiga-ui/addon-commerce/types';

// https://en.wikipedia.org/wiki/Payment_card_number#Issuer_identification_number_(IIN)
export const TUI_BIN_TABLE: ReadonlyArray<
    [start: number, end: number | null, paymentSystem: TuiPaymentSystem]
> = [
    [2200, 2204, `mir`],
    [2221, 2720, `mastercard`],
    [4026, null, `electron`],
    [4175, null, `electron`],
    [4405, null, `electron`],
    [4508, null, `electron`],
    [4844, null, `electron`],
    [4913, null, `electron`],
    [4917, null, `electron`],
    [4, null, `visa`],
    [5018, null, `maestro`],
    [5020, null, `maestro`],
    [5038, null, `maestro`],
    [5090, null, `maestro`],
    [5890, null, `maestro`],
    [5893, null, `maestro`],
    [50, null, `maestro`],
    [51, 55, `mastercard`],
    [56, null, `maestro`],
    [58, null, `maestro`],
    [5, null, `mastercard`],
    [6304, null, `maestro`],
    [6759, 6763, `maestro`],
    [676770, null, `maestro`],
    [676774, null, `maestro`],
    [629157, null, `mir`],
    [6, null, `maestro`],
];

export function tuiGetPaymentSystem(
    cardNumber?: string | null,
    supported?: TuiPaymentSystem[],
): TuiPaymentSystem | null {
    if (!cardNumber) {
        return null;
    }

    for (const [start, end, paymentSystem] of TUI_BIN_TABLE) {
        const cardNumberNumeric = Number.parseInt(
            cardNumber.slice(0, start.toString().length),
            10,
        );

        const matches = cardNumberNumeric >= start && cardNumberNumeric <= (end || start);

        if (!matches) {
            continue;
        }

        if (supported && supported.length > 0 && !supported.includes(paymentSystem)) {
            continue;
        }

        return paymentSystem;
    }

    return null;
}

export function tuiIsMaestro(three: number, two: number, one: number): boolean {
    if (one === 6) {
        return true;
    }

    if (two === 50 || (two > 55 && two < 59)) {
        return true;
    }

    if (three < 500) {
        return false;
    }

    return three < 510;
}

export function tuiIsMastercard(four: number, two: number, one: number): boolean {
    if (one === 5) {
        return true;
    }

    if (two < 10) {
        return false;
    }

    if (two > 50 && two < 56) {
        return true;
    }

    if (four < 1000) {
        return false;
    }

    return four > 2220 && four < 2721;
}

export function tuiIsMir(four: number): boolean {
    return four > 2199 && four < 2205;
}

export function tuiIsElectron(four: number): boolean {
    switch (four) {
        case 4026:
        case 4175:
        case 4405:
        case 4508:
        case 4844:
        case 4913:
        case 4917:
            return true;
        default:
            return false;
    }
}

export function tuiIsVisa(one: number): boolean {
    return one === 4;
}

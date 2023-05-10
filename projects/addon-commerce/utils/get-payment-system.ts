import {TuiPaymentSystem} from '@taiga-ui/addon-commerce/types';

// https://en.wikipedia.org/wiki/Payment_card_number#Issuer_identification_number_(IIN)
export const TUI_BIN_TABLE: ReadonlyArray<
    [paymentSystem: TuiPaymentSystem, start: number, end?: number]
> = [
    [`mir`, 2200, 2204],
    [`mastercard`, 2221, 2720],
    [`jcb`, 3528, 3589],
    [`amex`, 34],
    [`amex`, 37],
    [`dinersclub`, 36],
    [`electron`, 4026],
    [`electron`, 4175],
    [`electron`, 4405],
    [`electron`, 4508],
    [`electron`, 4844],
    [`electron`, 4913],
    [`electron`, 4917],
    [`visa`, 4],
    [`verve`, 506099, 506198],
    [`verve`, 507865, 507964],
    [`maestro`, 5018],
    [`maestro`, 5020],
    [`maestro`, 5038],
    [`maestro`, 5090],
    [`maestro`, 5890],
    [`maestro`, 5893],
    [`rupay`, 508],
    [`maestro`, 50],
    [`dinersclub`, 54],
    [`mastercard`, 51, 55],
    [`maestro`, 56],
    [`maestro`, 58],
    [`mastercard`, 5],
    [`maestro`, 6000],
    [`maestro`, 6304],
    [`maestro`, 6759, 6763],
    [`verve`, 650002, 650027],
    [`maestro`, 676770],
    [`maestro`, 676774],
    [`discover`, 644, 649],
    [`discover`, 6011],
    [`rupay`, 60],
    [`unionpay`, 62],
    [`discover`, 65],
    [`maestro`, 6],
    [`rupay`, 81, 82],
    [`uzcard`, 8600],
    [`humo`, 9860],
];

export function tuiGetPaymentSystem(
    cardNumber?: string | null,
    supported?: TuiPaymentSystem[],
): TuiPaymentSystem | null {
    if (!cardNumber) {
        return null;
    }

    const row = TUI_BIN_TABLE.find(([paymentSystem, start, end = start]) => {
        const cardNumberNumeric = Number.parseInt(
            cardNumber.slice(0, String(start).length),
            10,
        );

        const match = cardNumberNumeric >= start && cardNumberNumeric <= end;

        return match && (!supported?.length || supported.includes(paymentSystem));
    });

    return row?.[0] ?? null;
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

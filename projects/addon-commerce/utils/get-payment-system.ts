import {TuiPaymentSystem} from '@taiga-ui/addon-commerce/types';

export function tuiGetPaymentSystem(cardNumber: string): TuiPaymentSystem | null {
    if (cardNumber === ``) {
        return null;
    }

    const one = Number.parseInt(cardNumber[0], 10);
    const two = Number.parseInt(cardNumber.slice(0, 2), 10);
    const three = Number.parseInt(cardNumber.slice(0, 3), 10);
    const four = Number.parseInt(cardNumber.slice(0, 4), 10);

    if (tuiIsMaestro(three, two, one)) {
        return `maestro`;
    }

    if (tuiIsMastercard(four, two, one)) {
        return `mastercard`;
    }

    if (tuiIsMir(four)) {
        return `mir`;
    }

    if (tuiIsElectron(four)) {
        return `electron`;
    }

    if (tuiIsVisa(one)) {
        return `visa`;
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

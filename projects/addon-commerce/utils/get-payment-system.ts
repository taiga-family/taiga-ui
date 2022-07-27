import {TuiPaymentSystem} from '@taiga-ui/addon-commerce/enums';

/**
 * @deprecated: use {@link tuiGetPaymentSystem} instead
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export function getPaymentSystem(cardNumber: string): TuiPaymentSystem | null {
    if (cardNumber === ``) {
        return null;
    }

    const one = Number.parseInt(cardNumber[0], 10);
    const two = Number.parseInt(cardNumber.slice(0, 2), 10);
    const three = Number.parseInt(cardNumber.slice(0, 3), 10);
    const four = Number.parseInt(cardNumber.slice(0, 4), 10);

    if (isMaestro(three, two, one)) {
        return TuiPaymentSystem.Maestro;
    }

    if (isMastercard(four, two, one)) {
        return TuiPaymentSystem.Mastercard;
    }

    if (isMir(four)) {
        return TuiPaymentSystem.Mir;
    }

    if (isElectron(four)) {
        return TuiPaymentSystem.Electron;
    }

    if (isVisa(one)) {
        return TuiPaymentSystem.Visa;
    }

    return null;
}

export const tuiGetPaymentSystem = getPaymentSystem;

/**
 * @deprecated: use {@link tuiIsMaestro} instead
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export function isMaestro(three: number, two: number, one: number): boolean {
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

export const tuiIsMaestro = isMaestro;

/**
 * @deprecated: use {@link tuiIsMastercard} instead
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export function isMastercard(four: number, two: number, one: number): boolean {
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

export const tuiIsMastercard = isMastercard;

/**
 * @deprecated: use {@link tuiIsMir} instead
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export function isMir(four: number): boolean {
    return four > 2199 && four < 2205;
}

export const tuiIsMir = isMir;

/**
 * @deprecated: use {@link tuiIsElectron} instead
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export function isElectron(four: number): boolean {
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

export const tuiIsElectron = isElectron;

/**
 * @deprecated: use {@link tuiIsVisa} instead
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export function isVisa(one: number): boolean {
    return one === 4;
}

export const tuiIsVisa = isVisa;

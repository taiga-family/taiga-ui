import {tuiGetPaymentSystem} from './get-payment-system';

/**
 * Validates card number length using payment system dictionary
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export function tuiIsCardLengthValid(cardNumber: string): boolean {
    const {length} = cardNumber;
    const paymentSystem = tuiGetPaymentSystem(cardNumber);

    switch (paymentSystem) {
        case `electron`:
            return length === 16;
        case `maestro`:
            return length > 11 && length < 20;
        case `mastercard`:
        case `mir`:
            return length > 15 && length < 20;
        case `visa`:
            return length > 12 && length < 20;
        default:
            return length > 8 && length < 20;
    }
}

import {TuiPaymentSystem} from '@taiga-ui/addon-commerce/enums';

import {tuiGetPaymentSystem} from './get-payment-system';

/**
 * Validates card number length using payment system dictionary
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export function tuiIsCardLengthValid(cardNumber: string): boolean {
    const {length} = cardNumber;
    const paymentSystem = tuiGetPaymentSystem(cardNumber);

    switch (paymentSystem) {
        case TuiPaymentSystem.Electron:
            return length === 16;
        case TuiPaymentSystem.Maestro:
            return length > 11 && length < 20;
        case TuiPaymentSystem.Mastercard:
        case TuiPaymentSystem.Mir:
            return length > 15 && length < 20;
        case TuiPaymentSystem.Visa:
            return length > 12 && length < 20;
        default:
            return length > 8 && length < 20;
    }
}

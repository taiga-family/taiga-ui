import {TuiPaymentSystem} from '@taiga-ui/addon-commerce/enums';

import {getPaymentSystem} from './get-payment-system';

/**
 * Validates card number length using payment system dictionary
 */
export function isCardLengthValid(cardNumber: string): boolean {
    const {length} = cardNumber;
    const paymentSystem = getPaymentSystem(cardNumber);

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

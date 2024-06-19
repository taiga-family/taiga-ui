import {
    tuiCreateToken,
    tuiCreateTokenFromFactory,
} from '@taiga-ui/cdk/utils/miscellaneous';
import {tuiExtractI18n} from '@taiga-ui/i18n/tools';
import type {Observable} from 'rxjs';
import {of} from 'rxjs';

/**
 * Number and card number i18n
 */
export const TUI_CARD_NUMBER_TEXTS = tuiCreateTokenFromFactory(
    tuiExtractI18n('cardNumber'),
);

/**
 * Expiry and card expiry i18n
 */
export const TUI_CARD_EXPIRY_TEXTS = tuiCreateTokenFromFactory(
    tuiExtractI18n('cardExpiry'),
);

/**
 * Card CVC number text [mobile, desktop]
 */
export const TUI_CARD_CVC_TEXTS = tuiCreateToken<Observable<[string, string]>>(
    of(['CVC', 'CVC/CVV']),
);

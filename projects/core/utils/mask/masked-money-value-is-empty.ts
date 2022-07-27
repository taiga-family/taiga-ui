import {CHAR_HYPHEN} from '@taiga-ui/cdk';

/**
 * @deprecated: use {@link tuiMaskedMoneyValueIsEmpty} instead
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export function maskedMoneyValueIsEmpty(value: string): boolean {
    switch (value) {
        case ``:
        case CHAR_HYPHEN:
        case `,`:
        case `${CHAR_HYPHEN},`:
            return true;
        default:
            return false;
    }
}

export const tuiMaskedMoneyValueIsEmpty = maskedMoneyValueIsEmpty;

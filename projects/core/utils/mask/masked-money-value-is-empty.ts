import {CHAR_HYPHEN} from '@taiga-ui/cdk';

export function maskedMoneyValueIsEmpty(value: string): boolean {
    switch (value) {
        case '':
        case CHAR_HYPHEN:
        case ',':
        case `${CHAR_HYPHEN},`:
            return true;
        default:
            return false;
    }
}

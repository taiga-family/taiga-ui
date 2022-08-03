import {CHAR_HYPHEN} from '@taiga-ui/cdk';

export function tuiMaskedMoneyValueIsEmpty(value: string): boolean {
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

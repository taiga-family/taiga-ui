import {CHAR_HYPHEN} from '@taiga-ui/cdk';

/**
 * TODO: delete in v4.0
 * @deprecated use {@link https://maskito.dev/kit/number maskitoParseNumber} instead
 * ```ts
 * Number.isNaN(maskitoParseNumber(value, decimalSeparator))
 * ```
 */
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

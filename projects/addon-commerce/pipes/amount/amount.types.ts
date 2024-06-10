import type {CHAR_MINUS, CHAR_PLUS} from '@taiga-ui/cdk';

export type TuiAmountSign =
    | 'always'
    | 'force-negative'
    | 'force-positive'
    | 'negative-only'
    | 'never';

export type TuiAmountSignSymbol = typeof CHAR_MINUS | typeof CHAR_PLUS | '';

import {CHAR_MINUS, CHAR_PLUS} from '@taiga-ui/cdk';

export type TuiMoneySign =
    | 'negative-only'
    | 'always'
    | 'never'
    | 'force-negative'
    | 'force-positive';

export type TuiMoneySignSymbol = '' | typeof CHAR_MINUS | typeof CHAR_PLUS;

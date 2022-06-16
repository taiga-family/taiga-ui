import {CHAR_EN_DASH, CHAR_PLUS} from '@taiga-ui/cdk';

export type TuiMoneySignT =
    | 'negative-only'
    | 'always'
    | 'never'
    | 'force-negative'
    | 'force-positive';

export type TuiMoneySignSymbol = '' | typeof CHAR_EN_DASH | typeof CHAR_PLUS;

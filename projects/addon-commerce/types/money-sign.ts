import {CHAR_MINUS, CHAR_PLUS} from '@taiga-ui/cdk';

export type TuiMoneySign =
    'always' | 'force-negative' | 'force-positive' | 'negative-only' | 'never';

export type TuiMoneySignSymbol = typeof CHAR_MINUS | typeof CHAR_PLUS | '';

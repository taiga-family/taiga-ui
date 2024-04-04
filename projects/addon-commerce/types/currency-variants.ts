import type {TuiCurrencyCode, TuiCurrencyType} from '@taiga-ui/addon-commerce/enums';

export type TuiCurrencyAutocompletion =
    | keyof Record<TuiCurrencyCode, string>
    | keyof Record<TuiCurrencyType, string>;

export type TuiCurrencyVariants =
    | TuiCurrencyAutocompletion
    | (TuiCurrencyCode | TuiCurrencyType | number | string | null);

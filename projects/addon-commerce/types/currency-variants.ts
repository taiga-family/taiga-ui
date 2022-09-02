import type {TuiCurrency, TuiCurrencyCode} from '@taiga-ui/addon-commerce/enums';

export type TuiCurrencyAutocompletion =
    | keyof Record<TuiCurrency, string>
    | keyof Record<TuiCurrencyCode, string>;

export type TuiCurrencyVariants =
    | TuiCurrencyAutocompletion
    | (TuiCurrency | TuiCurrencyCode | number | string | null);

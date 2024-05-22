import type {TuiCurrency} from './currency';
import type {TuiCurrencyCode} from './currency-code';

export type TuiCurrencyAutocompletion =
    | keyof Record<TuiCurrency, string>
    | keyof Record<TuiCurrencyCode, string>;

export type TuiCurrencyVariants =
    | TuiCurrencyAutocompletion
    | (TuiCurrency | TuiCurrencyCode | number | string | null);

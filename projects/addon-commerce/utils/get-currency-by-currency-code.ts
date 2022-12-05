import {TuiCurrency, TuiCurrencyCode} from '@taiga-ui/addon-commerce/enums';

// eslint-disable-next-line complexity
export function tuiGetCurrencyByCurrencyCode(currency: TuiCurrencyCode): TuiCurrency | null {
    switch (currency) {
        case TuiCurrencyCode.Ruble:
            return TuiCurrency.Ruble;
        case TuiCurrencyCode.Dollar:
            return TuiCurrency.Dollar;
        case TuiCurrencyCode.MexicanPeso:
            return TuiCurrency.MexicanPeso;
        case TuiCurrencyCode.SingaporeDollar:
            return TuiCurrency.SingaporeDollar;
        case TuiCurrencyCode.AustralianDollar:
            return TuiCurrency.AustralianDollar;
        case TuiCurrencyCode.HongKongDollar:
            return TuiCurrency.HongKongDollar;
        case TuiCurrencyCode.CanadianDollar:
            return TuiCurrency.CanadianDollar;
        case TuiCurrencyCode.Euro:
            return TuiCurrency.Euro;
        case TuiCurrencyCode.Pound:
            return TuiCurrency.Pound;
        case TuiCurrencyCode.Baht:
            return TuiCurrency.Baht;
        case TuiCurrencyCode.TurkishLira:
            return TuiCurrency.TurkishLira;
        case TuiCurrencyCode.YuanRenminbi:
            return TuiCurrency.YuanRenminbi;
        case TuiCurrencyCode.Yen:
            return TuiCurrency.Yen;
        case TuiCurrencyCode.IsraeliShekel:
            return TuiCurrency.IsraeliShekel;
        case TuiCurrencyCode.IndianRupee:
            return TuiCurrency.IndianRupee;
        case TuiCurrencyCode.SwissFranc:
            return TuiCurrency.SwissFranc;
        case TuiCurrencyCode.ArmenianDram:
            return TuiCurrency.ArmenianDram;
        case TuiCurrencyCode.Won:
            return TuiCurrency.Won;
        case TuiCurrencyCode.Tenge:
            return TuiCurrency.Tenge;
        case TuiCurrencyCode.Hryvnia:
            return TuiCurrency.Hryvnia;
        case TuiCurrencyCode.UzbekSum:
            return TuiCurrency.UzbekSum;
        case TuiCurrencyCode.KyrgyzstanSom:
            return TuiCurrency.KyrgyzstanSom;
        case TuiCurrencyCode.Dirham:
            return TuiCurrency.Dirham;
        default:
            return null;
    }
}

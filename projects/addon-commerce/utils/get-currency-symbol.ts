import {TuiCurrency, TuiCurrencyCode} from '@taiga-ui/addon-commerce/enums';
import {TuiCurrencyVariants} from '@taiga-ui/addon-commerce/types';

export function getCurrencySymbol(currency: TuiCurrencyVariants): string | null {
    switch (currency) {
        case TuiCurrency.Ruble:
        case TuiCurrencyCode.Ruble:
            return '₽';
        case TuiCurrency.Dollar:
        case TuiCurrencyCode.Dollar:
            return '$';
        case TuiCurrency.SingaporeDollar:
        case TuiCurrencyCode.SingaporeDollar:
            return 'S$';
        case TuiCurrency.AustralianDollar:
        case TuiCurrencyCode.AustralianDollar:
            return 'A$';
        case TuiCurrency.HongKong_dollar:
        case TuiCurrencyCode.HongKong_dollar:
            return 'HK$';
        case TuiCurrency.CanadianDollar:
        case TuiCurrencyCode.CanadianDollar:
            return 'C$';
        case TuiCurrency.Euro:
        case TuiCurrencyCode.Euro:
            return '€';
        case TuiCurrency.Pound:
        case TuiCurrencyCode.Pound:
            return '£';
        case TuiCurrency.Baht:
        case TuiCurrencyCode.Baht:
            return '฿';
        case TuiCurrency.TurkishLira:
        case TuiCurrencyCode.TurkishLira:
            return '₺';
        case TuiCurrency.YuanRenminbi:
        case TuiCurrencyCode.YuanRenminbi:
            return 'CN¥';
        case TuiCurrency.Yen:
        case TuiCurrencyCode.Yen:
            return '¥';
        case TuiCurrency.IsraeliShekel:
        case TuiCurrencyCode.IsraeliShekel:
            return '₪';
        case TuiCurrency.IndianRupee:
        case TuiCurrencyCode.IndianRupee:
            return '₹';
        case TuiCurrency.SwissFranc:
        case TuiCurrencyCode.SwissFranc:
            return '₣';
        case TuiCurrency.ArmenianDram:
        case TuiCurrencyCode.ArmenianDram:
            return '֏';
        case TuiCurrency.Won:
        case TuiCurrencyCode.Won:
            return '₩';
        case TuiCurrency.Tenge:
        case TuiCurrencyCode.Tenge:
            return '₸';
        case TuiCurrency.Hryvnia:
        case TuiCurrencyCode.Hryvnia:
            return '₴';
        default:
            return null;
    }
}

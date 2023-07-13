// cspell:disable
import {TuiCurrency, TuiCurrencyCode} from '@taiga-ui/addon-commerce/enums';

export const TUI_CURRENCY_DICTIONARY: Record<TuiCurrencyCode, TuiCurrency> = {
    [TuiCurrencyCode.Ruble]: TuiCurrency.Ruble,
    [TuiCurrencyCode.Dollar]: TuiCurrency.Dollar,
    [TuiCurrencyCode.MexicanPeso]: TuiCurrency.MexicanPeso,
    [TuiCurrencyCode.SingaporeDollar]: TuiCurrency.SingaporeDollar,
    [TuiCurrencyCode.SingaporeDollar]: TuiCurrency.SingaporeDollar,
    [TuiCurrencyCode.AustralianDollar]: TuiCurrency.AustralianDollar,
    [TuiCurrencyCode.HongKongDollar]: TuiCurrency.HongKongDollar,
    [TuiCurrencyCode.CanadianDollar]: TuiCurrency.CanadianDollar,
    [TuiCurrencyCode.Euro]: TuiCurrency.Euro,
    [TuiCurrencyCode.Pound]: TuiCurrency.Pound,
    [TuiCurrencyCode.Baht]: TuiCurrency.Baht,
    [TuiCurrencyCode.TurkishLira]: TuiCurrency.TurkishLira,
    [TuiCurrencyCode.YuanRenminbi]: TuiCurrency.YuanRenminbi,
    [TuiCurrencyCode.Yen]: TuiCurrency.Yen,
    [TuiCurrencyCode.IsraeliShekel]: TuiCurrency.IsraeliShekel,
    [TuiCurrencyCode.IsraeliShekel]: TuiCurrency.IsraeliShekel,
    [TuiCurrencyCode.IndianRupee]: TuiCurrency.IndianRupee,
    [TuiCurrencyCode.SwissFranc]: TuiCurrency.SwissFranc,
    [TuiCurrencyCode.ArmenianDram]: TuiCurrency.ArmenianDram,
    [TuiCurrencyCode.Won]: TuiCurrency.Won,
    [TuiCurrencyCode.Tenge]: TuiCurrency.Tenge,
    [TuiCurrencyCode.Hryvnia]: TuiCurrency.Hryvnia,
    [TuiCurrencyCode.UzbekSum]: TuiCurrency.UzbekSum,
    [TuiCurrencyCode.KyrgyzstanSom]: TuiCurrency.KyrgyzstanSom,
    [TuiCurrencyCode.Dirham]: TuiCurrency.Dirham,
    [TuiCurrencyCode.TajikistaniSomoni]: TuiCurrency.TajikistaniSomoni,
    [TuiCurrencyCode.MalaysianRinggit]: TuiCurrency.MalaysianRinggit,
    [TuiCurrencyCode.BelarusianRuble]: TuiCurrency.BelarusianRuble,
    [TuiCurrencyCode.GeorgianLari]: TuiCurrency.GeorgianLari,
    [TuiCurrencyCode.AzerbaijaniManat]: TuiCurrency.AzerbaijaniManat,
    [TuiCurrencyCode.SriLankanRupee]: TuiCurrency.SriLankanRupee,
    [TuiCurrencyCode.SerbianDinar]: TuiCurrency.SerbianDinar,
    [TuiCurrencyCode.SaudiRiyal]: TuiCurrency.SaudiRiyal,
    [TuiCurrencyCode.MongolianTugrik]: TuiCurrency.MongolianTugrik,
    [TuiCurrencyCode.SouthAfricanRand]: TuiCurrency.SouthAfricanRand,
    [TuiCurrencyCode.IranianRial]: TuiCurrency.IranianRial,
    [TuiCurrencyCode.IndonesianRupiah]: TuiCurrency.IndonesianRupiah,
    [TuiCurrencyCode.VietnameseDong]: TuiCurrency.VietnameseDong,
    [TuiCurrencyCode.NewTurkmenManat]: TuiCurrency.NewTurkmenManat,
    [TuiCurrencyCode.BrazilianReal]: TuiCurrency.BrazilianReal,
};

export function tuiGetCurrencyByCode(currency: TuiCurrencyCode): TuiCurrency | null {
    return TUI_CURRENCY_DICTIONARY[currency] ?? null;
}

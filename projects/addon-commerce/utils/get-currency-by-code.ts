// cspell:disable
import {TuiCurrency, TuiCurrencyCode} from '@taiga-ui/addon-commerce/enums';

export const TUI_CURRENCY_DICTIONARY: Record<TuiCurrencyCode, TuiCurrency> = {
    [TuiCurrencyCode.ArmenianDram]: TuiCurrency.ArmenianDram,
    [TuiCurrencyCode.AustralianDollar]: TuiCurrency.AustralianDollar,
    [TuiCurrencyCode.AzerbaijaniManat]: TuiCurrency.AzerbaijaniManat,
    [TuiCurrencyCode.Baht]: TuiCurrency.Baht,
    [TuiCurrencyCode.BelarusianRuble]: TuiCurrency.BelarusianRuble,
    [TuiCurrencyCode.BrazilianReal]: TuiCurrency.BrazilianReal,
    [TuiCurrencyCode.CanadianDollar]: TuiCurrency.CanadianDollar,
    [TuiCurrencyCode.Dirham]: TuiCurrency.Dirham,
    [TuiCurrencyCode.Dollar]: TuiCurrency.Dollar,
    [TuiCurrencyCode.Euro]: TuiCurrency.Euro,
    [TuiCurrencyCode.GeorgianLari]: TuiCurrency.GeorgianLari,
    [TuiCurrencyCode.HongKongDollar]: TuiCurrency.HongKongDollar,
    [TuiCurrencyCode.Hryvnia]: TuiCurrency.Hryvnia,
    [TuiCurrencyCode.IndianRupee]: TuiCurrency.IndianRupee,
    [TuiCurrencyCode.IndonesianRupiah]: TuiCurrency.IndonesianRupiah,
    [TuiCurrencyCode.IranianRial]: TuiCurrency.IranianRial,
    [TuiCurrencyCode.IsraeliShekel]: TuiCurrency.IsraeliShekel,
    [TuiCurrencyCode.IsraeliShekel]: TuiCurrency.IsraeliShekel,
    [TuiCurrencyCode.KyrgyzstanSom]: TuiCurrency.KyrgyzstanSom,
    [TuiCurrencyCode.MalaysianRinggit]: TuiCurrency.MalaysianRinggit,
    [TuiCurrencyCode.MexicanPeso]: TuiCurrency.MexicanPeso,
    [TuiCurrencyCode.MongolianTugrik]: TuiCurrency.MongolianTugrik,
    [TuiCurrencyCode.NewTurkmenManat]: TuiCurrency.NewTurkmenManat,
    [TuiCurrencyCode.Pound]: TuiCurrency.Pound,
    [TuiCurrencyCode.Ruble]: TuiCurrency.Ruble,
    [TuiCurrencyCode.SaudiRiyal]: TuiCurrency.SaudiRiyal,
    [TuiCurrencyCode.SerbianDinar]: TuiCurrency.SerbianDinar,
    [TuiCurrencyCode.SingaporeDollar]: TuiCurrency.SingaporeDollar,
    [TuiCurrencyCode.SingaporeDollar]: TuiCurrency.SingaporeDollar,
    [TuiCurrencyCode.SouthAfricanRand]: TuiCurrency.SouthAfricanRand,
    [TuiCurrencyCode.SriLankanRupee]: TuiCurrency.SriLankanRupee,
    [TuiCurrencyCode.SwissFranc]: TuiCurrency.SwissFranc,
    [TuiCurrencyCode.TajikistaniSomoni]: TuiCurrency.TajikistaniSomoni,
    [TuiCurrencyCode.Tenge]: TuiCurrency.Tenge,
    [TuiCurrencyCode.TurkishLira]: TuiCurrency.TurkishLira,
    [TuiCurrencyCode.UzbekSum]: TuiCurrency.UzbekSum,
    [TuiCurrencyCode.VietnameseDong]: TuiCurrency.VietnameseDong,
    [TuiCurrencyCode.Won]: TuiCurrency.Won,
    [TuiCurrencyCode.Yen]: TuiCurrency.Yen,
    [TuiCurrencyCode.YuanRenminbi]: TuiCurrency.YuanRenminbi,
};

export function tuiGetCurrencyByCode(currency: TuiCurrencyCode): TuiCurrency | null {
    return TUI_CURRENCY_DICTIONARY[currency] ?? null;
}

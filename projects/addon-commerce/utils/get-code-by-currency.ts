// cspell:disable
import {TuiCurrency, TuiCurrencyCode} from '@taiga-ui/addon-commerce/enums';

export const TUI_CODE_DICTIONARY: Record<TuiCurrency, TuiCurrencyCode> = {
    [TuiCurrency.ArmenianDram]: TuiCurrencyCode.ArmenianDram,
    [TuiCurrency.AustralianDollar]: TuiCurrencyCode.AustralianDollar,
    [TuiCurrency.AzerbaijaniManat]: TuiCurrencyCode.AzerbaijaniManat,
    [TuiCurrency.Baht]: TuiCurrencyCode.Baht,
    [TuiCurrency.BelarusianRuble]: TuiCurrencyCode.BelarusianRuble,
    [TuiCurrency.BrazilianReal]: TuiCurrencyCode.BrazilianReal,
    [TuiCurrency.CanadianDollar]: TuiCurrencyCode.CanadianDollar,
    [TuiCurrency.Dirham]: TuiCurrencyCode.Dirham,
    [TuiCurrency.Dollar]: TuiCurrencyCode.Dollar,
    [TuiCurrency.Euro]: TuiCurrencyCode.Euro,
    [TuiCurrency.GeorgianLari]: TuiCurrencyCode.GeorgianLari,
    [TuiCurrency.HongKongDollar]: TuiCurrencyCode.HongKongDollar,
    [TuiCurrency.Hryvnia]: TuiCurrencyCode.Hryvnia,
    [TuiCurrency.IndianRupee]: TuiCurrencyCode.IndianRupee,
    [TuiCurrency.IndonesianRupiah]: TuiCurrencyCode.IndonesianRupiah,
    [TuiCurrency.IranianRial]: TuiCurrencyCode.IranianRial,
    [TuiCurrency.IsraeliShekel]: TuiCurrencyCode.IsraeliShekel,
    [TuiCurrency.KyrgyzstanSom]: TuiCurrencyCode.KyrgyzstanSom,
    [TuiCurrency.MalaysianRinggit]: TuiCurrencyCode.MalaysianRinggit,
    [TuiCurrency.MexicanPeso]: TuiCurrencyCode.MexicanPeso,
    [TuiCurrency.MongolianTugrik]: TuiCurrencyCode.MongolianTugrik,
    [TuiCurrency.NewTurkmenManat]: TuiCurrencyCode.NewTurkmenManat,
    [TuiCurrency.Pound]: TuiCurrencyCode.Pound,
    [TuiCurrency.Ruble]: TuiCurrencyCode.Ruble,
    [TuiCurrency.SaudiRiyal]: TuiCurrencyCode.SaudiRiyal,
    [TuiCurrency.SerbianDinar]: TuiCurrencyCode.SerbianDinar,
    [TuiCurrency.SingaporeDollar]: TuiCurrencyCode.SingaporeDollar,
    [TuiCurrency.SouthAfricanRand]: TuiCurrencyCode.SouthAfricanRand,
    [TuiCurrency.SriLankanRupee]: TuiCurrencyCode.SriLankanRupee,
    [TuiCurrency.SwissFranc]: TuiCurrencyCode.SwissFranc,
    [TuiCurrency.TajikistaniSomoni]: TuiCurrencyCode.TajikistaniSomoni,
    [TuiCurrency.Tenge]: TuiCurrencyCode.Tenge,
    [TuiCurrency.TurkishLira]: TuiCurrencyCode.TurkishLira,
    [TuiCurrency.UzbekSum]: TuiCurrencyCode.UzbekSum,
    [TuiCurrency.VietnameseDong]: TuiCurrencyCode.VietnameseDong,
    [TuiCurrency.Won]: TuiCurrencyCode.Won,
    [TuiCurrency.Yen]: TuiCurrencyCode.Yen,
    [TuiCurrency.YuanRenminbi]: TuiCurrencyCode.YuanRenminbi,
};

export function tuiGetCodeByCurrency(code: TuiCurrency): TuiCurrencyCode | null {
    return TUI_CODE_DICTIONARY[code] ?? null;
}

import {TuiLanguageCore} from '@taiga-ui/i18n/interfaces';
import {TUI_ENGLISH_LANGUAGE_COUNTRIES} from '@taiga-ui/i18n/languages/english';

export const TUI_TURKISH_LANGUAGE_CORE: TuiLanguageCore = {
    close: `Kapat`,
    // TODO: i18n replace with current language countries list
    countries: TUI_ENGLISH_LANGUAGE_COUNTRIES,
    defaultErrorMessage: `Değer hatalı`,
    months: [
        `Ocak`,
        `Şubat`,
        `Mart`,
        `Nisan`,
        `Mayıs`,
        `Haziran`,
        `Temmuz`,
        `Ağustos`,
        `Eylül`,
        `Ekim`,
        `Kasım`,
        `Aralık`,
    ],
    nothingFoundMessage: `Kayıt Bulunamadı`,
    shortWeekDays: [`Ptsi`, `Salı`, `Çrş`, `Prş`, `Cma`, `Ctsi`, `Pzr`],
    spinTexts: [`Geri`, `İleri`],
};

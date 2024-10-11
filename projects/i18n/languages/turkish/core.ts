import {TUI_ENGLISH_LANGUAGE_COUNTRIES} from '@taiga-ui/i18n/languages/english';
import type {TuiLanguageCore} from '@taiga-ui/i18n/types';

export const TUI_TURKISH_LANGUAGE_CORE: TuiLanguageCore = {
    months: [
        'Ocak',
        'Şubat',
        'Mart',
        'Nisan',
        'Mayıs',
        'Haziran',
        'Temmuz',
        'Ağustos',
        'Eylül',
        'Ekim',
        'Kasım',
        'Aralık',
    ],
    close: 'Kapat',
    clear: 'Alanı temizle',
    nothingFoundMessage: 'Kayıt Bulunamadı',
    defaultErrorMessage: 'Değer hatalı',
    spinTexts: ['Geri', 'İleri'],
    shortWeekDays: ['Ptsi', 'Salı', 'Çrş', 'Prş', 'Cma', 'Ctsi', 'Pzr'],
    // TODO: i18n replace with current language countries list
    countries: TUI_ENGLISH_LANGUAGE_COUNTRIES,
};

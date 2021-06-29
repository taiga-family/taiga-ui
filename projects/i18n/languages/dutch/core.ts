import {LanguageCore} from '@taiga-ui/i18n/interfaces';
import {TUI_ENGLISH_LANGUAGE_COUNTRIES} from '@taiga-ui/i18n/languages/english';

export const TUI_DUTCH_LANGUAGE_CORE: LanguageCore = {
    months: [
        'Januari',
        'Februari',
        'Maart',
        'April',
        'Mei',
        'Juni',
        'Juli',
        'Augustus',
        'September',
        'Oktober',
        'November',
        'December',
    ],
    close: 'Sluiten',
    nothingFoundMessage: 'Niets gevonden',
    defaultErrorMessage: 'Ongeldige waarde',
    spinTexts: ['Vorige', 'Volgende'],
    shortWeekDays: ['Maa', 'Din', 'Woe', 'Don', 'Vri', 'Zat', 'Zon'],
    // TODO: i18n replace with current language countries list
    countries: TUI_ENGLISH_LANGUAGE_COUNTRIES,
};

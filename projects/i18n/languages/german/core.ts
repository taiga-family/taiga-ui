import {TUI_ENGLISH_LANGUAGE_COUNTRIES} from '@taiga-ui/i18n/languages/english';
import type {TuiLanguageCore} from '@taiga-ui/i18n/types';

export const TUI_GERMAN_LANGUAGE_CORE: TuiLanguageCore = {
    months: [
        'Januar',
        'Februar',
        'März',
        'April',
        'Mai',
        'Juni',
        'Juli',
        'August',
        'September',
        'Oktober',
        'November',
        'Dezember',
    ],
    close: 'Schließen',
    clear: 'Leeres Feld',
    nothingFoundMessage: 'Keine Ergebnisse',
    defaultErrorMessage: 'Wert ist ungültig',
    spinTexts: ['Zurück', 'Weiter'],
    shortWeekDays: ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'],
    // TODO: i18n replace with current language countries list
    countries: TUI_ENGLISH_LANGUAGE_COUNTRIES,
};

import {TuiLanguageCore} from '@taiga-ui/i18n/interfaces';
import {TUI_ENGLISH_LANGUAGE_COUNTRIES} from '@taiga-ui/i18n/languages/english';

export const TUI_GERMAN_LANGUAGE_CORE: TuiLanguageCore = {
    close: `Schließen`,
    // TODO: i18n replace with current language countries list
    countries: TUI_ENGLISH_LANGUAGE_COUNTRIES,
    defaultErrorMessage: `Wert ist ungültig`,
    months: [
        `Januar`,
        `Februar`,
        `März`,
        `April`,
        `Mai`,
        `Juni`,
        `Juli`,
        `August`,
        `September`,
        `Oktober`,
        `November`,
        `Dezember`,
    ],
    nothingFoundMessage: `Keine Ergebnisse`,
    shortWeekDays: [`Mo`, `Di`, `Mi`, `Do`, `Fr`, `Sa`, `So`],
    spinTexts: [`Zurück`, `Weiter`],
};

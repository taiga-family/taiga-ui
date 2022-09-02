import type {TuiLanguageCore} from '@taiga-ui/i18n/interfaces';

import {TUI_DUTCH_LANGUAGE_COUNTRIES} from './countries';

export const TUI_DUTCH_LANGUAGE_CORE: TuiLanguageCore = {
    months: [
        `Januari`,
        `Februari`,
        `Maart`,
        `April`,
        `Mei`,
        `Juni`,
        `Juli`,
        `Augustus`,
        `September`,
        `Oktober`,
        `November`,
        `December`,
    ],
    close: `Sluiten`,
    nothingFoundMessage: `Niets gevonden`,
    defaultErrorMessage: `Ongeldige waarde`,
    spinTexts: [`Vorige`, `Volgende`],
    shortWeekDays: [`Maa`, `Din`, `Woe`, `Don`, `Vri`, `Zat`, `Zon`],
    countries: TUI_DUTCH_LANGUAGE_COUNTRIES,
};

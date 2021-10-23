import {TUI_LANGUAGE_CODE} from '@taiga-ui/i18n/constants';
import {LanguageCore} from '@taiga-ui/i18n/interfaces';

import {TUI_DUTCH_LANGUAGE_COUNTRIES} from './countries';

export const TUI_DUTCH_LANGUAGE_CORE: LanguageCore = {
    code: TUI_LANGUAGE_CODE.DUTCH,
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
    countries: TUI_DUTCH_LANGUAGE_COUNTRIES,
};

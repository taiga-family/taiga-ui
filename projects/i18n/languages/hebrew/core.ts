import type {TuiLanguageCore} from '@taiga-ui/i18n/types';

import {TUI_HEBREW_LANGUAGE_COUNTRIES} from './countries';

export const TUI_HEBREW_LANGUAGE_CORE: TuiLanguageCore = {
    months: [
        'יָנוּאָר',
        'פברואר',
        'מרץ',
        'אַפּרִיל',
        'מאי',
        'יוני',
        'יולי',
        'אוגוסט',
        'סֶפּטֶמבֶּר',
        'אוֹקְטוֹבֶּר',
        'נוֹבֶמבֶּר',
        'דֵצֶמבֶּר',
    ],
    close: 'סגור',
    clear: 'נקה שדה',
    nothingFoundMessage: 'שום דבר לא נמצא',
    defaultErrorMessage: 'הערך לא חוקי',
    spinTexts: ['קודם', 'הַבָּא'],
    shortWeekDays: ['יום שני', "ג'", 'היינו עושים', "יום ה'", 'שישי', 'ישב', 'שמש'],
    countries: TUI_HEBREW_LANGUAGE_COUNTRIES,
};

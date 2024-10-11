import type {TuiLanguageCore} from '@taiga-ui/i18n/types';

import {TUI_JAPAN_LANGUAGE_COUNTRIES} from './countries';

export const TUI_JAPAN_LANGUAGE_CORE: TuiLanguageCore = {
    months: [
        '1月',
        '2月',
        '3月',
        '4月',
        '5月',
        '6月',
        '7月',
        '8月',
        '9月',
        '10月',
        '11月',
        '12月',
    ],
    close: '近い',
    clear: 'フィールドをクリアする',
    nothingFoundMessage: '何も見つかりません',
    defaultErrorMessage: '値が無効です',
    spinTexts: ['前の', '次'],
    shortWeekDays: ['月曜日', '火曜日', '水曜日', '木曜日', '金曜日', '土曜日', '日曜日'],
    countries: TUI_JAPAN_LANGUAGE_COUNTRIES,
};

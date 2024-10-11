import type {TuiLanguageCore} from '@taiga-ui/i18n/types';

import {TUI_KOREAN_LANGUAGE_COUNTRIES} from './countries';

export const TUI_KOREAN_LANGUAGE_CORE: TuiLanguageCore = {
    months: [
        '1월',
        '2월',
        '3월',
        '4월',
        '5월',
        '6월',
        '7월',
        '8월',
        '9월',
        '10월',
        '11월',
        '12월',
    ],
    close: '닫다',
    clear: '필드 지우기',
    nothingFoundMessage: '아무것도 발견되지 않았습니다',
    defaultErrorMessage: '값이 잘못되었습니다',
    spinTexts: ['이전의', '다음'],
    shortWeekDays: ['월요일', '화요일', '수요일', '목요일', '금요일', '토요일', '일요일'],
    countries: TUI_KOREAN_LANGUAGE_COUNTRIES,
};

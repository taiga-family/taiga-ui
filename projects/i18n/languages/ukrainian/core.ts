import {TUI_ENGLISH_LANGUAGE_COUNTRIES} from '@taiga-ui/i18n/languages/english';
import type {TuiLanguageCore} from '@taiga-ui/i18n/types';

export const TUI_UKRAINIAN_LANGUAGE_CORE: TuiLanguageCore = {
    months: [
        'Січень',
        'Лютий',
        'Березень',
        'Квітень',
        'Травень',
        'Червень',
        'Липень',
        'Серпень',
        'Вересень',
        'Жовтень',
        'Листопад',
        'Грудень',
    ],
    close: 'Закрити',
    clear: 'Очистити',
    nothingFoundMessage: 'Нічого не знайдено',
    defaultErrorMessage: 'Поле заповнено невірно',
    spinTexts: ['Попередній', 'Наступний'],
    shortWeekDays: ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'НД'],
    // TODO: i18n replace with current language countries list
    countries: TUI_ENGLISH_LANGUAGE_COUNTRIES,
};

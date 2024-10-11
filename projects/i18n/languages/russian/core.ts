import type {TuiLanguageCore} from '@taiga-ui/i18n/types';

import {TUI_RUSSIAN_LANGUAGE_COUNTRIES} from './countries';

export const TUI_RUSSIAN_LANGUAGE_CORE: TuiLanguageCore = {
    months: [
        'Январь',
        'Февраль',
        'Март',
        'Апрель',
        'Май',
        'Июнь',
        'Июль',
        'Август',
        'Сентябрь',
        'Октябрь',
        'Ноябрь',
        'Декабрь',
    ],
    close: 'Закрыть',
    clear: 'Очистить',
    nothingFoundMessage: 'Ничего не найдено',
    defaultErrorMessage: 'Поле заполнено неверно',
    spinTexts: ['Предыдущий', 'Следующий'],
    shortWeekDays: ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'],
    countries: TUI_RUSSIAN_LANGUAGE_COUNTRIES,
};

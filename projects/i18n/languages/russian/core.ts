import {TUI_LANGUAGE_CODE} from '@taiga-ui/i18n/constants';
import {LanguageCore} from '@taiga-ui/i18n/interfaces';

import {TUI_RUSSIAN_LANGUAGE_COUNTRIES} from './countries';

export const TUI_RUSSIAN_LANGUAGE_CORE: LanguageCore = {
    code: TUI_LANGUAGE_CODE.RUSSIAN,
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
    nothingFoundMessage: 'Ничего не найдено',
    defaultErrorMessage: 'Поле заполнено неверно',
    spinTexts: ['Предыдущий', 'Следующий'],
    shortWeekDays: ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'],
    countries: TUI_RUSSIAN_LANGUAGE_COUNTRIES,
};

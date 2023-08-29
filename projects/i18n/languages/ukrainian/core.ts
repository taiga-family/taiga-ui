import {TuiLanguageCore} from '@taiga-ui/i18n/interfaces';
import {TUI_ENGLISH_LANGUAGE_COUNTRIES} from '@taiga-ui/i18n/languages/english';

export const TUI_UKRAINIAN_LANGUAGE_CORE: TuiLanguageCore = {
    close: `Закрити`,
    // TODO: i18n replace with current language countries list
    countries: TUI_ENGLISH_LANGUAGE_COUNTRIES,
    defaultErrorMessage: `Поле заповнено невірно`,
    months: [
        `Січень`,
        `Лютий`,
        `Березень`,
        `Квітень`,
        `Травень`,
        `Червень`,
        `Липень`,
        `Серпень`,
        `Вересень`,
        `Жовтень`,
        `Листопад`,
        `Грудень`,
    ],
    nothingFoundMessage: `Нічого не знайдено`,
    shortWeekDays: [`ПН`, `ВТ`, `СР`, `ЧТ`, `ПТ`, `СБ`, `НД`],
    spinTexts: [`Попередній`, `Наступний`],
};

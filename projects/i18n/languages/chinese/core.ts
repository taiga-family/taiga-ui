import type {TuiLanguageCore} from '@taiga-ui/i18n/interfaces';

import {TUI_CHINESE_LANGUAGE_COUNTRIES} from './countries';

export const TUI_CHINESE_LANGUAGE_CORE: TuiLanguageCore = {
    months: [
        `一月`,
        `二月`,
        `三月`,
        `四月`,
        `五月`,
        `六月`,
        `七月`,
        `八月`,
        `九月`,
        `十月`,
        `十一月`,
        `十二月`,
    ],
    close: `关闭`,
    nothingFoundMessage: `什么都没找到`,
    defaultErrorMessage: `无效值`,
    spinTexts: [`前`, `后`],
    shortWeekDays: [`周一`, `周二`, `周三`, `周四`, `周五`, `周六`, `周日`],
    countries: TUI_CHINESE_LANGUAGE_COUNTRIES,
};

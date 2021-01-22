import {Language} from '@taiga-ui/i18n/interfaces';
import {TUI_RUSSIAN_LANGUAGE_ADDON_COMMERCE} from './addon-commerce';
import {TUI_RUSSIAN_LANGUAGE_ADDON_TABLE} from './addon-table';
import {TUI_RUSSIAN_LANGUAGE_CORE} from './core';
import {TUI_RUSSIAN_LANGUAGE_KIT} from './kit';

export const TUI_RUSSIAN_LANGUAGE: Language = {
    ...TUI_RUSSIAN_LANGUAGE_CORE,
    ...TUI_RUSSIAN_LANGUAGE_KIT,
    ...TUI_RUSSIAN_LANGUAGE_ADDON_COMMERCE,
    ...TUI_RUSSIAN_LANGUAGE_ADDON_TABLE,
};

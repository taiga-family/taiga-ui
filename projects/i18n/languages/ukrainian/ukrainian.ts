import {Language} from '@taiga-ui/i18n/interfaces';
import {TUI_UKRAINIAN_LANGUAGE_ADDON_COMMERCE} from './addon-commerce';
import {TUI_UKRAINIAN_LANGUAGE_ADDON_TABLE} from './addon-table';
import {TUI_UKRAINIAN_LANGUAGE_CORE} from './core';
import {TUI_UKRAINIAN_LANGUAGE_KIT} from './kit';

export const TUI_UKRAINIAN_LANGUAGE: Language = {
    ...TUI_UKRAINIAN_LANGUAGE_CORE,
    ...TUI_UKRAINIAN_LANGUAGE_KIT,
    ...TUI_UKRAINIAN_LANGUAGE_ADDON_COMMERCE,
    ...TUI_UKRAINIAN_LANGUAGE_ADDON_TABLE,
};

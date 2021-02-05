import {Language} from '@taiga-ui/i18n/interfaces';
import {TUI_TURKISH_LANGUAGE_ADDON_COMMERCE} from './addon-commerce';
import {TUI_TURKISH_LANGUAGE_ADDON_TABLE} from './addon-table';
import {TUI_TURKISH_LANGUAGE_CORE} from './core';
import {TUI_TURKISH_LANGUAGE_KIT} from './kit';

export const TUI_TURKISH_LANGUAGE: Language = {
    ...TUI_TURKISH_LANGUAGE_CORE,
    ...TUI_TURKISH_LANGUAGE_KIT,
    ...TUI_TURKISH_LANGUAGE_ADDON_TABLE,
    ...TUI_TURKISH_LANGUAGE_ADDON_COMMERCE,
};

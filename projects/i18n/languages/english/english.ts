import {Language} from '@taiga-ui/i18n/interfaces';
import {TUI_ENGLISH_LANGUAGE_ADDON_COMMERCE} from './addon-commerce';
import {TUI_ENGLISH_LANGUAGE_ADDON_TABLE} from './addon-table';
import {TUI_ENGLISH_LANGUAGE_CORE} from './core';
import {TUI_ENGLISH_LANGUAGE_KIT} from './kit';

export const TUI_ENGLISH_LANGUAGE: Language = {
    ...TUI_ENGLISH_LANGUAGE_CORE,
    ...TUI_ENGLISH_LANGUAGE_KIT,
    ...TUI_ENGLISH_LANGUAGE_ADDON_TABLE,
    ...TUI_ENGLISH_LANGUAGE_ADDON_COMMERCE,
};

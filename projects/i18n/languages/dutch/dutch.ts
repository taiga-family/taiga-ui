import {Language} from '@taiga-ui/i18n/interfaces';
import {TUI_DUTCH_LANGUAGE_ADDON_COMMERCE} from './addon-commerce';
import {TUI_DUTCH_LANGUAGE_ADDON_TABLE} from './addon-table';
import {TUI_DUTCH_LANGUAGE_CORE} from './core';
import {TUI_DUTCH_LANGUAGE_KIT} from './kit';

export const TUI_DUTCH_LANGUAGE: Language = {
    ...TUI_DUTCH_LANGUAGE_CORE,
    ...TUI_DUTCH_LANGUAGE_KIT,
    ...TUI_DUTCH_LANGUAGE_ADDON_TABLE,
    ...TUI_DUTCH_LANGUAGE_ADDON_COMMERCE,
};

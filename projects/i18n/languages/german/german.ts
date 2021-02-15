import {Language} from '@taiga-ui/i18n/interfaces';
import {TUI_GERMAN_LANGUAGE_ADDON_COMMERCE} from './addon-commerce';
import {TUI_GERMAN_LANGUAGE_ADDON_TABLE} from './addon-table';
import {TUI_GERMAN_LANGUAGE_CORE} from './core';
import {TUI_GERMAN_LANGUAGE_KIT} from './kit';

export const TUI_GERMAN_LANGUAGE: Language = {
    ...TUI_GERMAN_LANGUAGE_CORE,
    ...TUI_GERMAN_LANGUAGE_KIT,
    ...TUI_GERMAN_LANGUAGE_ADDON_TABLE,
    ...TUI_GERMAN_LANGUAGE_ADDON_COMMERCE,
};

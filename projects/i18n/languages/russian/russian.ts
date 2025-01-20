import type {TuiLanguage} from '@taiga-ui/i18n/types';

import {TUI_RUSSIAN_LANGUAGE_ADDON_COMMERCE} from './addon-commerce';
import {TUI_RUSSIAN_LANGUAGE_ADDON_EDITOR} from './addon-editor';
import {TUI_RUSSIAN_LANGUAGE_ADDON_TABLE} from './addon-table';
import {TUI_RUSSIAN_LANGUAGE_CORE} from './core';
import {TUI_RUSSIAN_LANGUAGE_KIT} from './kit';
import {TUI_RUSSIAN_LANGUAGE_LAYOUT} from './layout';

export const TUI_RUSSIAN_LANGUAGE: TuiLanguage = {
    name: 'russian',
    ...TUI_RUSSIAN_LANGUAGE_CORE,
    ...TUI_RUSSIAN_LANGUAGE_KIT,
    ...TUI_RUSSIAN_LANGUAGE_ADDON_COMMERCE,
    ...TUI_RUSSIAN_LANGUAGE_ADDON_TABLE,
    ...TUI_RUSSIAN_LANGUAGE_ADDON_EDITOR,
    ...TUI_RUSSIAN_LANGUAGE_LAYOUT,
};

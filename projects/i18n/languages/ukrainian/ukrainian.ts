import type {TuiLanguage} from '@taiga-ui/i18n/types';

import {TUI_UKRAINIAN_LANGUAGE_ADDON_COMMERCE} from './addon-commerce';
import {TUI_UKRAINIAN_LANGUAGE_ADDON_EDITOR} from './addon-editor';
import {TUI_UKRAINIAN_LANGUAGE_ADDON_TABLE} from './addon-table';
import {TUI_UKRAINIAN_LANGUAGE_CORE} from './core';
import {TUI_UKRAINIAN_LANGUAGE_KIT} from './kit';
import {TUI_UKRAINIAN_LANGUAGE_LAYOUT} from './layout';

export const TUI_UKRAINIAN_LANGUAGE: TuiLanguage = {
    name: 'ukrainian',
    ...TUI_UKRAINIAN_LANGUAGE_CORE,
    ...TUI_UKRAINIAN_LANGUAGE_KIT,
    ...TUI_UKRAINIAN_LANGUAGE_ADDON_COMMERCE,
    ...TUI_UKRAINIAN_LANGUAGE_ADDON_TABLE,
    ...TUI_UKRAINIAN_LANGUAGE_ADDON_EDITOR,
    ...TUI_UKRAINIAN_LANGUAGE_LAYOUT,
};

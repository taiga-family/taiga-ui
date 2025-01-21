import type {TuiLanguage} from '@taiga-ui/i18n/types';

import {TUI_GREEK_LANGUAGE_ADDON_COMMERCE} from './addon-commerce';
import {TUI_GREEK_LANGUAGE_ADDON_EDITOR} from './addon-editor';
import {TUI_GREEK_LANGUAGE_ADDON_TABLE} from './addon-table';
import {TUI_GREEK_LANGUAGE_CORE} from './core';
import {TUI_GREEK_LANGUAGE_KIT} from './kit';
import {TUI_GREEK_LANGUAGE_LAYOUT} from './layout';

export const TUI_GREEK_LANGUAGE: TuiLanguage = {
    name: 'greek',
    ...TUI_GREEK_LANGUAGE_CORE,
    ...TUI_GREEK_LANGUAGE_KIT,
    ...TUI_GREEK_LANGUAGE_ADDON_TABLE,
    ...TUI_GREEK_LANGUAGE_ADDON_COMMERCE,
    ...TUI_GREEK_LANGUAGE_ADDON_EDITOR,
    ...TUI_GREEK_LANGUAGE_LAYOUT,
};

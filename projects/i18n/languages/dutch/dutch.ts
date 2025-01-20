import type {TuiLanguage} from '@taiga-ui/i18n/types';

import {TUI_DUTCH_LANGUAGE_ADDON_COMMERCE} from './addon-commerce';
import {TUI_DUTCH_LANGUAGE_ADDON_EDITOR} from './addon-editor';
import {TUI_DUTCH_LANGUAGE_ADDON_TABLE} from './addon-table';
import {TUI_DUTCH_LANGUAGE_CORE} from './core';
import {TUI_DUTCH_LANGUAGE_KIT} from './kit';
import {TUI_DUTCH_LANGUAGE_LAYOUT} from './layout';

export const TUI_DUTCH_LANGUAGE: TuiLanguage = {
    name: 'dutch',
    ...TUI_DUTCH_LANGUAGE_CORE,
    ...TUI_DUTCH_LANGUAGE_KIT,
    ...TUI_DUTCH_LANGUAGE_ADDON_TABLE,
    ...TUI_DUTCH_LANGUAGE_ADDON_COMMERCE,
    ...TUI_DUTCH_LANGUAGE_ADDON_EDITOR,
    ...TUI_DUTCH_LANGUAGE_LAYOUT,
};

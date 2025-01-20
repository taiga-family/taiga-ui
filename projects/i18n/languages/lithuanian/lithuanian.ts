import type {TuiLanguage} from '@taiga-ui/i18n/types';

import {TUI_LITHUANIAN_LANGUAGE_ADDON_COMMERCE} from './addon-commerce';
import {TUI_LITHUANIAN_LANGUAGE_ADDON_EDITOR} from './addon-editor';
import {TUI_LITHUANIAN_LANGUAGE_ADDON_TABLE} from './addon-table';
import {TUI_LITHUANIAN_LANGUAGE_CORE} from './core';
import {TUI_LITHUANIAN_LANGUAGE_KIT} from './kit';
import {TUI_LITHUANIAN_LANGUAGE_LAYOUT} from './layout';

export const TUI_LITHUANIAN_LANGUAGE: TuiLanguage = {
    name: 'lithuanian',
    ...TUI_LITHUANIAN_LANGUAGE_CORE,
    ...TUI_LITHUANIAN_LANGUAGE_KIT,
    ...TUI_LITHUANIAN_LANGUAGE_ADDON_TABLE,
    ...TUI_LITHUANIAN_LANGUAGE_ADDON_COMMERCE,
    ...TUI_LITHUANIAN_LANGUAGE_ADDON_EDITOR,
    ...TUI_LITHUANIAN_LANGUAGE_LAYOUT,
};

import type {TuiLanguage} from '@taiga-ui/i18n/types';

import {TUI_ITALIAN_LANGUAGE_ADDON_COMMERCE} from './addon-commerce';
import {TUI_ITALIAN_LANGUAGE_ADDON_EDITOR} from './addon-editor';
import {TUI_ITALIAN_LANGUAGE_ADDON_TABLE} from './addon-table';
import {TUI_ITALIAN_LANGUAGE_CORE} from './core';
import {TUI_ITALIAN_LANGUAGE_KIT} from './kit';
import {TUI_ITALIAN_LANGUAGE_LAYOUT} from './layout';

export const TUI_ITALIAN_LANGUAGE: TuiLanguage = {
    name: 'italian',
    ...TUI_ITALIAN_LANGUAGE_CORE,
    ...TUI_ITALIAN_LANGUAGE_KIT,
    ...TUI_ITALIAN_LANGUAGE_ADDON_TABLE,
    ...TUI_ITALIAN_LANGUAGE_ADDON_COMMERCE,
    ...TUI_ITALIAN_LANGUAGE_ADDON_EDITOR,
    ...TUI_ITALIAN_LANGUAGE_LAYOUT,
};

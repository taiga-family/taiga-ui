import type {TuiLanguage} from '@taiga-ui/i18n/types';

import {TUI_FRENCH_LANGUAGE_ADDON_COMMERCE} from './addon-commerce';
import {TUI_FRENCH_LANGUAGE_ADDON_EDITOR} from './addon-editor';
import {TUI_FRENCH_LANGUAGE_ADDON_TABLE} from './addon-table';
import {TUI_FRENCH_LANGUAGE_CORE} from './core';
import {TUI_FRENCH_LANGUAGE_KIT} from './kit';
import {TUI_FRENCH_LANGUAGE_LAYOUT} from './layout';

export const TUI_FRENCH_LANGUAGE: TuiLanguage = {
    name: 'french',
    ...TUI_FRENCH_LANGUAGE_CORE,
    ...TUI_FRENCH_LANGUAGE_KIT,
    ...TUI_FRENCH_LANGUAGE_ADDON_TABLE,
    ...TUI_FRENCH_LANGUAGE_ADDON_COMMERCE,
    ...TUI_FRENCH_LANGUAGE_ADDON_EDITOR,
    ...TUI_FRENCH_LANGUAGE_LAYOUT,
};

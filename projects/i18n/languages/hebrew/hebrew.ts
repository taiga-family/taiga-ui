import type {TuiLanguage} from '@taiga-ui/i18n/types';

import {TUI_HEBREW_LANGUAGE_ADDON_COMMERCE} from './addon-commerce';
import {TUI_HEBREW_LANGUAGE_ADDON_EDITOR} from './addon-editor';
import {TUI_HEBREW_LANGUAGE_ADDON_TABLE} from './addon-table';
import {TUI_HEBREW_LANGUAGE_CORE} from './core';
import {TUI_HEBREW_LANGUAGE_KIT} from './kit';

export const TUI_HEBREW_LANGUAGE: TuiLanguage = {
    name: 'hebrew',
    ...TUI_HEBREW_LANGUAGE_CORE,
    ...TUI_HEBREW_LANGUAGE_KIT,
    ...TUI_HEBREW_LANGUAGE_ADDON_TABLE,
    ...TUI_HEBREW_LANGUAGE_ADDON_COMMERCE,
    ...TUI_HEBREW_LANGUAGE_ADDON_EDITOR,
};

import type {TuiLanguage} from '@taiga-ui/i18n/types';

import {TUI_SPANISH_LANGUAGE_ADDON_COMMERCE} from './addon-commerce';
import {TUI_SPANISH_LANGUAGE_ADDON_EDITOR} from './addon-editor';
import {TUI_SPANISH_LANGUAGE_ADDON_TABLE} from './addon-table';
import {TUI_SPANISH_LANGUAGE_CORE} from './core';
import {TUI_SPANISH_LANGUAGE_KIT} from './kit';

export const TUI_SPANISH_LANGUAGE: TuiLanguage = {
    name: 'spanish',
    ...TUI_SPANISH_LANGUAGE_CORE,
    ...TUI_SPANISH_LANGUAGE_KIT,
    ...TUI_SPANISH_LANGUAGE_ADDON_TABLE,
    ...TUI_SPANISH_LANGUAGE_ADDON_COMMERCE,
    ...TUI_SPANISH_LANGUAGE_ADDON_EDITOR,
};

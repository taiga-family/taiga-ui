import type {TuiLanguage} from '@taiga-ui/i18n/interfaces';

import {TUI_ENGLISH_LANGUAGE_ADDON_COMMERCE} from './addon-commerce';
import {TUI_ENGLISH_LANGUAGE_ADDON_EDITOR} from './addon-editor';
import {TUI_ENGLISH_LANGUAGE_ADDON_PREVIEW} from './addon-preview';
import {TUI_ENGLISH_LANGUAGE_ADDON_TABLE} from './addon-table';
import {TUI_ENGLISH_LANGUAGE_CORE} from './core';
import {TUI_ENGLISH_LANGUAGE_KIT} from './kit';

export const TUI_ENGLISH_LANGUAGE: TuiLanguage = {
    name: `english`,
    ...TUI_ENGLISH_LANGUAGE_CORE,
    ...TUI_ENGLISH_LANGUAGE_KIT,
    ...TUI_ENGLISH_LANGUAGE_ADDON_TABLE,
    ...TUI_ENGLISH_LANGUAGE_ADDON_COMMERCE,
    ...TUI_ENGLISH_LANGUAGE_ADDON_EDITOR,
    ...TUI_ENGLISH_LANGUAGE_ADDON_PREVIEW,
};

import type {TuiLanguage} from '@taiga-ui/i18n/interfaces';

import {TUI_KAZAKH_LANGUAGE_ADDON_COMMERCE} from './addon-commerce';
import {TUI_KAZAKH_LANGUAGE_ADDON_EDITOR} from './addon-editor';
import {TUI_KAZAKH_LANGUAGE_ADDON_PREVIEW} from './addon-preview';
import {TUI_KAZAKH_LANGUAGE_ADDON_TABLE} from './addon-table';
import {TUI_KAZAKH_LANGUAGE_CORE} from './core';
import {TUI_KAZAKH_LANGUAGE_KIT} from './kit';

export const TUI_KAZAKH_LANGUAGE: TuiLanguage = {
    name: 'kazakh',
    ...TUI_KAZAKH_LANGUAGE_CORE,
    ...TUI_KAZAKH_LANGUAGE_KIT,
    ...TUI_KAZAKH_LANGUAGE_ADDON_TABLE,
    ...TUI_KAZAKH_LANGUAGE_ADDON_COMMERCE,
    ...TUI_KAZAKH_LANGUAGE_ADDON_EDITOR,
    ...TUI_KAZAKH_LANGUAGE_ADDON_PREVIEW,
};

import {TuiLanguage} from '@taiga-ui/i18n/interfaces';

import {TUI_POLISH_LANGUAGE_ADDON_COMMERCE} from './addon-commerce';
import {TUI_POLISH_LANGUAGE_ADDON_EDITOR} from './addon-editor';
import {TUI_POLISH_LANGUAGE_ADDON_PREVIEW} from './addon-preview';
import {TUI_POLISH_LANGUAGE_ADDON_TABLE} from './addon-table';
import {TUI_POLISH_LANGUAGE_CORE} from './core';
import {TUI_POLISH_LANGUAGE_KIT} from './kit';

export const TUI_POLISH_LANGUAGE: TuiLanguage = {
    ...TUI_POLISH_LANGUAGE_CORE,
    ...TUI_POLISH_LANGUAGE_KIT,
    ...TUI_POLISH_LANGUAGE_ADDON_TABLE,
    ...TUI_POLISH_LANGUAGE_ADDON_COMMERCE,
    ...TUI_POLISH_LANGUAGE_ADDON_EDITOR,
    ...TUI_POLISH_LANGUAGE_ADDON_PREVIEW,
};

import {TuiLanguage} from '@taiga-ui/i18n/interfaces';

import {TUI_TURKISH_LANGUAGE_ADDON_COMMERCE} from './addon-commerce';
import {TUI_TURKISH_LANGUAGE_ADDON_EDITOR} from './addon-editor';
import {TUI_TURKISH_LANGUAGE_ADDON_PREVIEW} from './addon-preview';
import {TUI_TURKISH_LANGUAGE_ADDON_TABLE} from './addon-table';
import {TUI_TURKISH_LANGUAGE_CORE} from './core';
import {TUI_TURKISH_LANGUAGE_KIT} from './kit';

export const TUI_TURKISH_LANGUAGE: TuiLanguage = {
    name: `turkish`,
    ...TUI_TURKISH_LANGUAGE_CORE,
    ...TUI_TURKISH_LANGUAGE_KIT,
    ...TUI_TURKISH_LANGUAGE_ADDON_TABLE,
    ...TUI_TURKISH_LANGUAGE_ADDON_COMMERCE,
    ...TUI_TURKISH_LANGUAGE_ADDON_EDITOR,
    ...TUI_TURKISH_LANGUAGE_ADDON_PREVIEW,
};

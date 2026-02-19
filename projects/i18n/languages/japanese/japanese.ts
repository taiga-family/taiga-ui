import {type TuiLanguage} from '@taiga-ui/i18n/types';

import {TUI_JAPANESE_LANGUAGE_ADDON_COMMERCE} from './addon-commerce';
import {TUI_JAPANESE_LANGUAGE_ADDON_EDITOR} from './addon-editor';
import {TUI_JAPANESE_LANGUAGE_ADDON_TABLE} from './addon-table';
import {TUI_JAPANESE_LANGUAGE_CORE} from './core';
import {TUI_JAPANESE_LANGUAGE_KIT} from './kit';
import {TUI_JAPANESE_LANGUAGE_LAYOUT} from './layout';

export const TUI_JAPANESE_LANGUAGE: TuiLanguage = {
    name: 'japanese',
    ...TUI_JAPANESE_LANGUAGE_CORE,
    ...TUI_JAPANESE_LANGUAGE_KIT,
    ...TUI_JAPANESE_LANGUAGE_ADDON_TABLE,
    ...TUI_JAPANESE_LANGUAGE_ADDON_COMMERCE,
    ...TUI_JAPANESE_LANGUAGE_ADDON_EDITOR,
    ...TUI_JAPANESE_LANGUAGE_LAYOUT,
};

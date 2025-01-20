import type {TuiLanguage} from '@taiga-ui/i18n/types';

import {TUI_KOREAN_LANGUAGE_ADDON_COMMERCE} from './addon-commerce';
import {TUI_KOREAN_LANGUAGE_ADDON_EDITOR} from './addon-editor';
import {TUI_KOREAN_LANGUAGE_ADDON_TABLE} from './addon-table';
import {TUI_KOREAN_LANGUAGE_CORE} from './core';
import {TUI_KOREAN_LANGUAGE_KIT} from './kit';
import {TUI_KOREAN_LANGUAGE_LAYOUT} from './layout';

export const TUI_KOREAN_LANGUAGE: TuiLanguage = {
    name: 'korean',
    ...TUI_KOREAN_LANGUAGE_CORE,
    ...TUI_KOREAN_LANGUAGE_KIT,
    ...TUI_KOREAN_LANGUAGE_ADDON_TABLE,
    ...TUI_KOREAN_LANGUAGE_ADDON_COMMERCE,
    ...TUI_KOREAN_LANGUAGE_ADDON_EDITOR,
    ...TUI_KOREAN_LANGUAGE_LAYOUT,
};

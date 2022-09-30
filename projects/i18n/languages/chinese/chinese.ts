import {TuiLanguage} from '@taiga-ui/i18n/interfaces';

import {TUI_CHINESE_LANGUAGE_ADDON_COMMERCE} from './addon-commerce';
import {TUI_CHINESE_LANGUAGE_ADDON_EDITOR} from './addon-editor';
import {TUI_CHINESE_LANGUAGE_ADDON_PREVIEW} from './addon-preview';
import {TUI_CHINESE_LANGUAGE_ADDON_TABLE} from './addon-table';
import {TUI_CHINESE_LANGUAGE_CORE} from './core';
import {TUI_CHINESE_LANGUAGE_KIT} from './kit';

export const TUI_CHINESE_LANGUAGE: TuiLanguage = {
    name: `chinese`,
    ...TUI_CHINESE_LANGUAGE_CORE,
    ...TUI_CHINESE_LANGUAGE_KIT,
    ...TUI_CHINESE_LANGUAGE_ADDON_TABLE,
    ...TUI_CHINESE_LANGUAGE_ADDON_COMMERCE,
    ...TUI_CHINESE_LANGUAGE_ADDON_EDITOR,
    ...TUI_CHINESE_LANGUAGE_ADDON_PREVIEW,
};

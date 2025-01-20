import type {TuiLanguage} from '@taiga-ui/i18n/types';

import {TUI_BELARUSIAN_LANGUAGE_ADDON_COMMERCE} from './addon-commerce';
import {TUI_BELARUSIAN_LANGUAGE_ADDON_EDITOR} from './addon-editor';
import {TUI_BELARUSIAN_LANGUAGE_ADDON_TABLE} from './addon-table';
import {TUI_BELARUSIAN_LANGUAGE_CORE} from './core';
import {TUI_BELARUSIAN_LANGUAGE_KIT} from './kit';
import {TUI_BELARUSIAN_LANGUAGE_LAYOUT} from './layout';

export const TUI_BELARUSIAN_LANGUAGE: TuiLanguage = {
    name: 'belarusian',
    ...TUI_BELARUSIAN_LANGUAGE_CORE,
    ...TUI_BELARUSIAN_LANGUAGE_KIT,
    ...TUI_BELARUSIAN_LANGUAGE_ADDON_COMMERCE,
    ...TUI_BELARUSIAN_LANGUAGE_ADDON_TABLE,
    ...TUI_BELARUSIAN_LANGUAGE_ADDON_EDITOR,
    ...TUI_BELARUSIAN_LANGUAGE_LAYOUT,
};

import {type TuiLanguage} from '@taiga-ui/i18n/types';

import {TUI_ARABIC_LANGUAGE_ADDON_COMMERCE} from './addon-commerce';
import {TUI_ARABIC_LANGUAGE_ADDON_EDITOR} from './addon-editor';
import {TUI_ARABIC_LANGUAGE_ADDON_TABLE} from './addon-table';
import {TUI_ARABIC_LANGUAGE_CORE} from './core';
import {TUI_ARABIC_LANGUAGE_KIT} from './kit';
import {TUI_ARABIC_LANGUAGE_LAYOUT} from './layout';

export const TUI_ARABIC_LANGUAGE: TuiLanguage = {
    name: 'arabic',
    ...TUI_ARABIC_LANGUAGE_CORE,
    ...TUI_ARABIC_LANGUAGE_KIT,
    ...TUI_ARABIC_LANGUAGE_ADDON_TABLE,
    ...TUI_ARABIC_LANGUAGE_ADDON_COMMERCE,
    ...TUI_ARABIC_LANGUAGE_ADDON_EDITOR,
    ...TUI_ARABIC_LANGUAGE_LAYOUT,
};

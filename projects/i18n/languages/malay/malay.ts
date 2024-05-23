import type {TuiLanguage} from '@taiga-ui/i18n/interfaces';

import {TUI_MALAY_LANGUAGE_ADDON_COMMERCE} from './addon-commerce';
import {TUI_MALAY_LANGUAGE_ADDON_EDITOR} from './addon-editor';
import {TUI_MALAY_LANGUAGE_ADDON_TABLE} from './addon-table';
import {TUI_MALAY_LANGUAGE_CORE} from './core';
import {TUI_MALAY_LANGUAGE_KIT} from './kit';

export const TUI_MALAY_LANGUAGE: TuiLanguage = {
    name: 'malay',
    ...TUI_MALAY_LANGUAGE_CORE,
    ...TUI_MALAY_LANGUAGE_KIT,
    ...TUI_MALAY_LANGUAGE_ADDON_TABLE,
    ...TUI_MALAY_LANGUAGE_ADDON_COMMERCE,
    ...TUI_MALAY_LANGUAGE_ADDON_EDITOR,
};

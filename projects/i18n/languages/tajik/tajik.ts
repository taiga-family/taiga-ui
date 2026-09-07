import {type TuiLanguage} from '@taiga-ui/i18n/types';

import {TUI_TAJIK_LANGUAGE_ADDON_COMMERCE} from './addon-commerce';
import {TUI_TAJIK_LANGUAGE_ADDON_DOC} from './addon-doc';
import {TUI_TAJIK_LANGUAGE_ADDON_EDITOR} from './addon-editor';
import {TUI_TAJIK_LANGUAGE_ADDON_TABLE} from './addon-table';
import {TUI_TAJIK_LANGUAGE_CORE} from './core';
import {TUI_TAJIK_LANGUAGE_KIT} from './kit';
import {TUI_TAJIK_LANGUAGE_LAYOUT} from './layout';

export const TUI_TAJIK_LANGUAGE: TuiLanguage = {
    name: 'tajik',
    ...TUI_TAJIK_LANGUAGE_CORE,
    ...TUI_TAJIK_LANGUAGE_KIT,
    ...TUI_TAJIK_LANGUAGE_ADDON_COMMERCE,
    ...TUI_TAJIK_LANGUAGE_ADDON_TABLE,
    ...TUI_TAJIK_LANGUAGE_ADDON_EDITOR,
    ...TUI_TAJIK_LANGUAGE_ADDON_DOC,
    ...TUI_TAJIK_LANGUAGE_LAYOUT,
};

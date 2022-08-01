import {Language} from '@taiga-ui/i18n/interfaces';

import {TUI_GERMAN_LANGUAGE_ADDON_COMMERCE} from './addon-commerce';
import {TUI_GERMAN_LANGUAGE_ADDON_EDITOR} from './addon-editor';
import {TUI_GERMAN_LANGUAGE_ADDON_PREVIEW} from './addon-preview';
import {TUI_GERMAN_LANGUAGE_ADDON_TABLE} from './addon-table';
import {TUI_GERMAN_LANGUAGE_CORE} from './core';
import {TUI_GERMAN_LANGUAGE_KIT} from './kit';

export const TUI_GERMAN_LANGUAGE: Language = {
    name: `german`,
    ...TUI_GERMAN_LANGUAGE_CORE,
    ...TUI_GERMAN_LANGUAGE_KIT,
    ...TUI_GERMAN_LANGUAGE_ADDON_TABLE,
    ...TUI_GERMAN_LANGUAGE_ADDON_COMMERCE,
    ...TUI_GERMAN_LANGUAGE_ADDON_EDITOR,
    ...TUI_GERMAN_LANGUAGE_ADDON_PREVIEW,
};

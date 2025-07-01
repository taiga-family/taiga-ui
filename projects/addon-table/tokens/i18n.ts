import {tuiExtractI18n} from '@taiga-ui/i18n/utils';
import {InjectionToken} from '@angular/core';

/**
 * tui-reorder i18n button
 */
export const TUI_TABLE_SHOW_HIDE_MESSAGE = new InjectionToken(
    ngDevMode ? 'TUI_TABLE_SHOW_HIDE_MESSAGE' : '',
    {
        factory: tuiExtractI18n('showHideText'),
    },
);

/**
 * tui-table-pagination i18n texts
 */
export const TUI_TABLE_PAGINATION_TEXTS = new InjectionToken(
    ngDevMode ? 'TUI_TABLE_PAGINATION_TEXTS' : '',
    {
        factory: tuiExtractI18n('paginationTexts'),
    },
);

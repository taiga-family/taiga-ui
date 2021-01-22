import {InjectionToken} from '@angular/core';
import {extractI18n} from '@taiga-ui/i18n';

export const TUI_TABLE_SHOW_HIDE_MESSAGE = new InjectionToken(`tui-reorder i18n button`, {
    factory: extractI18n('showHideText'),
});

export const TUI_TABLE_PAGINATION_TEXTS = new InjectionToken(
    'tui-table-pagination i18n texts',
    {
        factory: extractI18n('paginationTexts'),
    },
);

import {InjectionToken} from '@angular/core';
import {tuiExtractI18n} from '@taiga-ui/i18n';

export const TUI_TABLE_SHOW_HIDE_MESSAGE = new InjectionToken(
    `[TUI_TABLE_SHOW_HIDE_MESSAGE]: tui-reorder i18n button`,
    {
        factory: tuiExtractI18n(`showHideText`),
    },
);

export const TUI_TABLE_PAGINATION_TEXTS = new InjectionToken(
    `[TUI_TABLE_PAGINATION_TEXTS]: tui-table-pagination i18n texts`,
    {
        factory: tuiExtractI18n(`paginationTexts`),
    },
);

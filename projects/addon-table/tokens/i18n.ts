import {InjectionToken} from '@angular/core';

export const TUI_TABLE_SHOW_HIDE_MESSAGE = new InjectionToken<string>(
    `tui-reorder i18n button`,
    {
        factory: () => 'Show/hide',
    },
);

export const TUI_TABLE_PAGINATION_TEXTS = new InjectionToken<
    Record<'pages' | 'linesPerPage' | 'of', string>
>('tui-table-pagination i18n texts', {
    factory: () => ({
        pages: 'Pages',
        linesPerPage: 'Lines per page',
        of: 'of',
    }),
});

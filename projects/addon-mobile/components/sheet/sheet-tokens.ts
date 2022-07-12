import {InjectionToken} from '@angular/core';

import {TuiSheetRequiredProps} from './sheet';

export const TUI_SHEET = new InjectionToken<TuiSheetRequiredProps>(
    '[TUI_SHEET] Sheet main component',
);

export const TUI_SHEET_SCROLL = new InjectionToken<number>(
    'Current scrollTop of a sheet',
);

export const TUI_SHEET_DRAGGED = new InjectionToken<boolean>(
    'The sheet is being dragged',
);

/** @deprecated use option argument for each Sheet */
export const TUI_SHEET_OFFSET = new InjectionToken<number>(
    'Offset from the top at which the sheet stops',
    {
        factory: () => 16,
    },
);

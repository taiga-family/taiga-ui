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

import {InjectionToken} from '@angular/core';
import type {Observable} from 'rxjs';

import type {TuiSheetRequiredProps} from './sheet';

export const TUI_SHEET = new InjectionToken<TuiSheetRequiredProps>(
    `[TUI_SHEET] Sheet main component`,
);

export const TUI_SHEET_SCROLL = new InjectionToken<Observable<number>>(
    `Current scrollTop of a sheet`,
);

export const TUI_SHEET_DRAGGED = new InjectionToken<Observable<boolean>>(
    `The sheet is being dragged`,
);

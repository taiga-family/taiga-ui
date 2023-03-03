import {InjectionToken} from '@angular/core';
import {TuiDateMode} from '@taiga-ui/cdk/types';

/**
 * Active date format for Taiga UI
 */
export const TUI_DATE_FORMAT = new InjectionToken<TuiDateMode>(`[TUI_DATE_FORMAT]`, {
    factory: () => `DMY`,
});

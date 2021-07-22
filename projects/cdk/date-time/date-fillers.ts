import {inject, InjectionToken} from '@angular/core';
import {RANGE_SEPARATOR_CHAR} from './date-time';

/**
 * @deprecated dont use it. See {@link TUI_DATE_FORMAT}
 * TODO: get rid of this in v3.0
 */
export const TUI_DATE_FILLER = new InjectionToken<string>('date filler for Taiga UI', {
    factory: () => `dd.mm.yyyy`,
});

/**
 * @deprecated dont use it
 * TODO: get rid of this in v3.0
 */
export const TUI_DATE_RANGE_FILLER = new InjectionToken<string>(
    'date range filler for Taiga UI',
    {
        factory: () => {
            const dateFiller = inject(TUI_DATE_FILLER);

            return `${dateFiller}${RANGE_SEPARATOR_CHAR}${dateFiller}`;
        },
    },
);

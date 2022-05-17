import {inject, InjectionToken} from '@angular/core';

import {RANGE_SEPARATOR_CHAR} from './date-time';

/**
 * @deprecated dont use it. See {@link TUI_DATE_FORMAT}
 */
export const TUI_DATE_FILLER = new InjectionToken<string>('date filler for Taiga UI', {
    factory: () => `dd.mm.yyyy`,
});

/**
 * @deprecated dont use it
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

/**
 * @internal 'dd.mm.yyyy'.length
 * Used in:
 * - {@link TuiInputDateComponent}
 * - {@link TuiInputDateRangeComponent}
 * - {@link TuiInputDateTimeComponent}
 */
export const DATE_FILLER_LENGTH = 10;
/**
 * @internal
 * Used in {@link TuiInputDateRangeComponent}
 */
export const DATE_RANGE_FILLER_LENGTH =
    2 * DATE_FILLER_LENGTH + RANGE_SEPARATOR_CHAR.length;

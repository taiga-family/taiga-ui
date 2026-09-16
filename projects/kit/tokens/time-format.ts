import {
    computed,
    inject,
    InjectionToken,
    type Provider,
    type Signal,
    signal,
} from '@angular/core';
import {type MaskitoTimeParams} from '@maskito/kit';

/**
 * TODO(v6): move `mode`, `timeSegmentMinValues` and `timeSegmentMaxValues`
 * from `TUI_INPUT_TIME_OPTIONS` / `TUI_INPUT_DATE_TIME_OPTIONS` here
 */
export type TuiTimeFormatSettings = Pick<Required<MaskitoTimeParams>, 'dayPeriod'>;

const TUI_DEFAULT_TIME_FORMAT: TuiTimeFormatSettings = {dayPeriod: ['', '']};

export const TUI_TIME_FORMAT = new InjectionToken<Signal<TuiTimeFormatSettings>>(
    ngDevMode ? 'TUI_TIME_FORMAT' : '',
    {factory: () => signal(TUI_DEFAULT_TIME_FORMAT)},
);

export function tuiTimeFormatProvider(options: Partial<TuiTimeFormatSettings>): Provider {
    return {
        provide: TUI_TIME_FORMAT,
        useFactory: (): Signal<TuiTimeFormatSettings> => {
            const parent = inject(TUI_TIME_FORMAT, {optional: true, skipSelf: true});

            return computed(() => ({
                ...(parent?.() || TUI_DEFAULT_TIME_FORMAT),
                ...options,
            }));
        },
    };
}

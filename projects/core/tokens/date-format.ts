import {
    computed,
    inject,
    InjectionToken,
    type Provider,
    type Signal,
    signal,
} from '@angular/core';
import {type TuiDateMode} from '@taiga-ui/cdk/date-time';

/**
 * Formatting configuration for displayed dates
 */
export interface TuiDateFormatSettings {
    /**
     * Date format mode.
     */
    readonly mode: TuiDateMode;
    /**
     * Separator between date segments
     * @example 10.02 ('.' by default)
     */
    readonly separator: string;
}

export const TUI_DEFAULT_DATE_FORMAT: TuiDateFormatSettings = {
    mode: 'dd/mm/yyyy',
    separator: '.',
};

/**
 * Formatting configuration for displayed dates
 */
export const TUI_DATE_FORMAT = new InjectionToken<Signal<TuiDateFormatSettings>>(
    ngDevMode ? 'TUI_DATE_FORMAT' : '',
    {
        factory: () => signal(TUI_DEFAULT_DATE_FORMAT),
    },
);

export function tuiDateFormatProvider(options: Partial<TuiDateFormatSettings>): Provider {
    return {
        provide: TUI_DATE_FORMAT,
        useFactory: (): Signal<TuiDateFormatSettings> => {
            const parent = inject(TUI_DATE_FORMAT, {optional: true, skipSelf: true});

            return computed(() => ({
                ...(parent?.() || TUI_DEFAULT_DATE_FORMAT),
                ...options,
            }));
        },
    };
}

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
 * TODO(v6): move to @taiga-ui/kit and refactor to
 * ```ts
 * import {type MaskitoDateParams} from '@maskito/kit';
 *
 * export type TuiDateFormatSettings = Pick<
 *  Required<MaskitoDateParams>,
 *  'mode' | 'separator'
 * >;
 * ```
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

// TODO(v6): delete
export const TUI_DEFAULT_DATE_FORMAT: TuiDateFormatSettings = {
    mode: 'dd/mm/yyyy',
    separator: '.',
};

/**
 * Formatting configuration for displayed dates
 * TODO(v6): move to @taiga-ui/kit and refactor to
 * ```ts
 * import {maskitoWithDateDefaults} from '@maskito/kit';
 * import {LOCALE_ID} from '@angular/core';
 *
 * export const TUI_DATE_FORMAT = new InjectionToken<Signal<TuiDateFormatSettings>>(
 *  ngDevMode ? 'TUI_DATE_FORMAT' : '',
 *  {factory: () => signal(maskitoWithDateDefaults({locale: inject(LOCALE_ID)}))}
 * );
 * ```
 */
export const TUI_DATE_FORMAT = new InjectionToken<Signal<TuiDateFormatSettings>>(
    ngDevMode ? 'TUI_DATE_FORMAT' : '',
    {factory: () => signal(TUI_DEFAULT_DATE_FORMAT)},
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

import {computed, inject, InjectionToken, type Signal} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {tuiZoneOptimized} from '@taiga-ui/cdk/observables';
import {TUI_WINDOW_SIZE} from '@taiga-ui/cdk/tokens';
import {distinctUntilChanged, map} from 'rxjs';

import {TUI_MEDIA, type TuiMedia} from './media';

export type TuiBreakpointMediaKey = keyof Omit<TuiMedia, 'tablet'>;

export const TUI_BREAKPOINT = new InjectionToken<Signal<TuiBreakpointMediaKey>>(
    ngDevMode ? 'TUI_BREAKPOINT' : '',
    {
        factory: () => {
            const media = inject(TUI_MEDIA);
            const sorted: number[] = Object.values(media).sort((a, b) => a - b);
            const invert: Record<number, TuiBreakpointMediaKey> = Object.keys(
                media,
            ).reduce(
                (ret, key) => ({
                    ...ret,
                    [media[key as TuiBreakpointMediaKey]]: key,
                }),
                {},
            );

            const stream$ = inject(TUI_WINDOW_SIZE).pipe(
                map(({width}) => sorted.find((size) => size > width)),
                map(
                    (key) =>
                        invert[key || sorted[sorted.length - 1] || 0] ?? 'desktopLarge',
                ),
                distinctUntilChanged(),
                tuiZoneOptimized(),
            );

            return toSignal(stream$, {initialValue: 'desktopLarge'});
        },
    },
);

export const TUI_MOBILE_BREAKPOINT = new InjectionToken<Signal<boolean>>(
    ngDevMode ? 'TUI_MOBILE_BREAKPOINT' : '',
    {
        factory: () => {
            const breakpoint = inject(TUI_BREAKPOINT);

            return computed(() => breakpoint() === 'mobile');
        },
    },
);

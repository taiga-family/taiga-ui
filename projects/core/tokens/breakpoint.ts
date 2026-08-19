import {computed, inject, InjectionToken, type Signal} from '@angular/core';
import {WA_WINDOW} from '@ng-web-apis/common';
import {tuiWindowSize} from '@taiga-ui/cdk/utils/dom';

import {TUI_MEDIA, type TuiMedia} from './media';

export type TuiBreakpointMediaKey = keyof Omit<TuiMedia, 'tablet'>;

export const TUI_BREAKPOINT = new InjectionToken<Signal<TuiBreakpointMediaKey>>(
    ngDevMode ? 'TUI_BREAKPOINT' : '',
    {
        factory: () => {
            const size = tuiWindowSize(inject(WA_WINDOW));
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

            return computed(() => {
                const {width} = size();
                const key = sorted.find((size) => size > width);
                const index = key || sorted[sorted.length - 1] || 0;

                return invert[index] ?? 'desktopLarge';
            });
        },
    },
);

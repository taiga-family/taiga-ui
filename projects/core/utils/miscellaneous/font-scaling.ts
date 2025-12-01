import {DOCUMENT} from '@angular/common';
import {
    inject,
    InjectionToken,
    type Provider,
    signal,
    type WritableSignal,
} from '@angular/core';
import {TUI_FONT_SIZE_HANDLER} from '@taiga-ui/cdk/directives/font-size';
import {tuiClamp} from '@taiga-ui/cdk/utils/math';
import {tuiPx} from '@taiga-ui/cdk/utils/miscellaneous';

export const TUI_FONT_OFFSET = new InjectionToken<WritableSignal<number>>(
    ngDevMode ? 'TUI_FONT_OFFSET' : '',
    {factory: () => signal(0)},
);

export function tuiEnableFontScaling(): Provider {
    return {
        provide: TUI_FONT_SIZE_HANDLER,
        useFactory: () => {
            const offset = inject(TUI_FONT_OFFSET);
            const {documentElement} = inject(DOCUMENT);

            return (size: number): void => {
                const current = tuiClamp(size, 17, 28) - 17;

                offset.set(current);

                return documentElement.style.setProperty(
                    '--tui-font-offset',
                    tuiPx(current),
                );
            };
        },
    };
}

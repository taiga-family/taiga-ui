import {DOCUMENT} from '@angular/common';
import {inject, type Provider} from '@angular/core';
import {TUI_FONT_SIZE_HANDLER, tuiClamp} from '@taiga-ui/cdk';

export function tuiEnableFontScaling(): Provider {
    return {
        provide: TUI_FONT_SIZE_HANDLER,
        useFactory:
            ({documentElement} = inject(DOCUMENT)) =>
            (size: number): void =>
                documentElement.style.setProperty(
                    '--tui-font-offset',
                    `${tuiClamp(size, 17, 28) - 17}px`,
                ),
    };
}

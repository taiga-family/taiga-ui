import {DOCUMENT} from '@angular/common';
import type {Provider} from '@angular/core';
import {inject} from '@angular/core';
import {TUI_FONT_SIZE_HANDLER} from '@taiga-ui/cdk/directives/font-size';
import {tuiClamp} from '@taiga-ui/cdk/utils/math';

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

import {ValueProvider} from '@angular/core';

import type {TuiArrowMode} from './arrow-options';
import {TUI_ARROW} from './constants/arrow';
import {TUI_ARROW_MODE} from './tokens/arrow-mode.token';

export const tuiArrowModeProvider: (options: Partial<TuiArrowMode>) => ValueProvider = (
    options: Partial<TuiArrowMode>,
) => ({
    provide: TUI_ARROW_MODE,
    useValue: {
        interactive: TUI_ARROW,
        disabled: TUI_ARROW,
        ...options,
    },
});

import {InjectionToken} from '@angular/core';

import type {TuiArrowMode} from '../arrow-options';
import {TUI_ARROW} from '../constants/arrow';

export const TUI_ARROW_MODE: InjectionToken<TuiArrowMode> = new InjectionToken(
    `[TUI_ARROW_MODE]: Type of icon in dropdowns for interactive or disable mode`,
    {
        factory: () => ({
            interactive: TUI_ARROW,
            disabled: TUI_ARROW,
        }),
    },
);

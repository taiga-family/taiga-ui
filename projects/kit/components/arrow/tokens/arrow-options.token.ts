import {InjectionToken} from '@angular/core';

import {TuiArrowOptions} from '../arrow-options';
import {TUI_ARROW_DEFAULT_OPTIONS} from '../constants/arrow-default';

export const TUI_ARROW_OPTIONS = new InjectionToken<TuiArrowOptions>(
    `[TUI_ARROW_OPTIONS]: Default parameters for arrow component`,
    {
        factory: () => TUI_ARROW_DEFAULT_OPTIONS,
    },
);

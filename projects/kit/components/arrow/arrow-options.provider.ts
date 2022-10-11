import {ValueProvider} from '@angular/core';

import type {TuiArrowOptions} from './arrow-options';
import {TUI_ARROW_DEFAULT_OPTIONS} from './constants/arrow-default';
import {TUI_ARROW_OPTIONS} from './tokens/arrow-options.token';

export const tuiArrowOptionsProvider: (
    options: Partial<TuiArrowOptions>,
) => ValueProvider = (options: Partial<TuiArrowOptions>) => ({
    provide: TUI_ARROW_OPTIONS,
    useValue: {...TUI_ARROW_DEFAULT_OPTIONS, ...options},
});

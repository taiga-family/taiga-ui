import {InjectionToken} from '@angular/core';
import type {TuiLanguageLoader} from '@taiga-ui/i18n/interfaces';

// @note: cannot be transferred to a shared file
// ReferenceError: Cannot access 'TUI_LANGUAGE_LOADER' before initialization
export const TUI_LANGUAGE_LOADER = new InjectionToken<TuiLanguageLoader>(
    `[TUI_LANGUAGE_LOADER]: Webpack chunk loader for Taiga UI libraries i18n`,
);

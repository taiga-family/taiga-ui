import type {TuiLanguageLoader} from '@taiga-ui/i18n/types';
import {InjectionToken} from '@angular/core';

/**
 * Webpack chunk loader for Taiga UI libraries i18n
 * @note: cannot be transferred to a shared file
 * ReferenceError: Cannot access 'TUI_LANGUAGE_LOADER' before initialization
 */
export const TUI_LANGUAGE_LOADER = new InjectionToken<TuiLanguageLoader>(
    ngDevMode ? 'TUI_LANGUAGE_LOADER' : '',
);

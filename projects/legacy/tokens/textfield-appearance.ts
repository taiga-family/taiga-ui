import {InjectionToken} from '@angular/core';

/**
 * @deprecated: drop in v5.0
 * Appearance for inputs
 * use {@link TUI_TEXTFIELD_APPEARANCE_DIRECTIVE} instead
 */
export const TUI_TEXTFIELD_APPEARANCE = new InjectionToken<string>(
    ngDevMode ? 'TUI_TEXTFIELD_APPEARANCE' : '',
    {
        factory: () => 'textfield',
    },
);

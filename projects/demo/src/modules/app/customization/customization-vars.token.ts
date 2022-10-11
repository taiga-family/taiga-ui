import {InjectionToken} from '@angular/core';

export const TUI_DOC_CUSTOMIZATION_VARS = new InjectionToken<Record<string, string>>(
    `[TUI_DOC_CUSTOMIZATION_VARS]: CSS variables map`,
);

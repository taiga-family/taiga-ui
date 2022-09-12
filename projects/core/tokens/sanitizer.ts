import {InjectionToken, Sanitizer} from '@angular/core';

export const TUI_SANITIZER = new InjectionToken<Sanitizer>(
    `[TUI_SANITIZER]: A custom Sanitizer to sanitize source before inlining`,
);

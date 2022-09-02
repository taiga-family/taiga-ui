import type {Sanitizer} from '@angular/core';
import {InjectionToken} from '@angular/core';

export const TUI_SANITIZER = new InjectionToken<Sanitizer>(
    `A custom Sanitizer to sanitize source before inlining`,
);

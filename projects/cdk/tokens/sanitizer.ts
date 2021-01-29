import {InjectionToken, Sanitizer} from '@angular/core';

/* @deprecated export token from @taiga-ui/core package **/
export const TUI_SANITIZER = new InjectionToken<Sanitizer>(
    'A custom Sanitizer to sanitize source before inlining',
);

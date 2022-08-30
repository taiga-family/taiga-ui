import {SecurityContext} from '@angular/core';
import {TUI_SANITIZER} from '@taiga-ui/core';

export const TUI_SANITIZER_MOCK = {
    provide: TUI_SANITIZER,
    useValue: {
        sanitize(_context: SecurityContext, src: string) {
            // Skip error
            // WARNING: sanitizing HTML stripped some content, see
            // https://g.co/ng/security#xss
            return src;
        },
    },
};

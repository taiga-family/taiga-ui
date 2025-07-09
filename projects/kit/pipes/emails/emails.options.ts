import {InjectionToken} from '@angular/core';

export const TUI_EMAIL_PIPE_OPTIONS = new InjectionToken(
    ngDevMode ? 'TUI_EMAIL_PIPE_OPTIONS' : '',
    {
        factory: () => [
            'gmail.com',
            'outlook.com',
            'icloud.com',
            'me.com',
            'yahoo.com',
            'mail.com',
            'proton.me',
        ],
    },
);

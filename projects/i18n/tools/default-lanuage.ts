import {InjectionToken} from '@angular/core';
import {Language} from '@taiga-ui/i18n/interfaces';
import {TUI_ENGLISH_LANGUAGE} from '@taiga-ui/i18n/languages';

export const TUI_DEFAULT_LANGUAGE = new InjectionToken<Language>(
    `Default language for Taiga UI libraries i18n`,
    {
        factory: () => {
            return TUI_ENGLISH_LANGUAGE;
        },
    },
);

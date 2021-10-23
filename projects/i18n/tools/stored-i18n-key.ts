import {InjectionToken} from '@angular/core';

const TUI_I18N_STORAGE_DEFAULT_KEY = 'taiga_ui_i18n';

export const TUI_I18N_STORAGE_KEY = new InjectionToken<string>(
    `Storage key for language of Taiga UI libraries i18n`,
    {
        factory: () => {
            return TUI_I18N_STORAGE_DEFAULT_KEY;
        },
    },
);

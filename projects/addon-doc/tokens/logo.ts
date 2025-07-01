import type {PolymorpheusContent} from '@taiga-ui/polymorpheus';
import {InjectionToken} from '@angular/core';

/**
 * Main logo
 */
export const TUI_DOC_LOGO = new InjectionToken<PolymorpheusContent>(
    ngDevMode ? 'TUI_DOC_LOGO' : '',
    {
        factory: () => '',
    },
);

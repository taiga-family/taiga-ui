import {InjectionToken} from '@angular/core';
import type {PolymorpheusContent} from '@taiga-ui/polymorpheus';

/**
 * Main logo
 */
export const TUI_DOC_LOGO = new InjectionToken<PolymorpheusContent>('TUI_DOC_LOGO', {
    factory: () => '',
});

import {InjectionToken} from '@angular/core';
import {type PolymorpheusContent} from '@taiga-ui/polymorpheus';

/**
 * Content rendered in the page header, pinned to the trailing edge (e.g. a "Copy page" action).
 */
export const TUI_DOC_ACTIONS = new InjectionToken<PolymorpheusContent>(
    ngDevMode ? 'TUI_DOC_ACTIONS' : '',
    {factory: () => ''},
);

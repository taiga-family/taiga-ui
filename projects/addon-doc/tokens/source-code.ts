import type {TuiDocSourceCodePathOptions} from '@taiga-ui/addon-doc/types';
import type {PolymorpheusContent} from '@taiga-ui/polymorpheus';
import {InjectionToken} from '@angular/core';

/**
 * Source code link
 */
export const TUI_DOC_SOURCE_CODE = new InjectionToken<
    PolymorpheusContent<TuiDocSourceCodePathOptions>
>(ngDevMode ? 'TUI_DOC_SOURCE_CODE' : '', {
    factory: () => null,
});

import {InjectionToken} from '@angular/core';
import type {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

import type {TuiDocSourceCodePathOptions} from '../interfaces/source-code-path-options';

/**
 * Source code link
 */
export const TUI_DOC_SOURCE_CODE: InjectionToken<
    PolymorpheusContent<TuiDocSourceCodePathOptions>
> = new InjectionToken<PolymorpheusContent<TuiDocSourceCodePathOptions>>(
    `[TUI_DOC_SOURCE_CODE]`,
    {
        factory: () => null,
    },
);

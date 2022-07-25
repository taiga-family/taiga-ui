import {InjectionToken} from '@angular/core';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

import {TuiDocSourceCodePathOptions} from '../interfaces/source-code-path-options';

export const TUI_DOC_SOURCE_CODE: InjectionToken<
    PolymorpheusContent<TuiDocSourceCodePathOptions>
> = new InjectionToken<PolymorpheusContent<TuiDocSourceCodePathOptions>>(
    'Source code link',
    {
        factory: () => null,
    },
);

import {InjectionToken} from '@angular/core';
import {TuiDocSourceCodePathOptions} from '@taiga-ui/addon-doc/interfaces';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

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

import {InjectionToken} from '@angular/core';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

export const TUI_DOC_LOGO = new InjectionToken<PolymorpheusContent>(
    `[TUI_DOC_LOGO]: Main logo`,
    {
        factory: () => ``,
    },
);

import {InjectionToken} from '@angular/core';
import type {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

export const TUI_DOC_LOGO = new InjectionToken<PolymorpheusContent>(`Main logo`, {
    factory: () => ``,
});

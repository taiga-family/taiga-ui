import {InjectionToken} from '@angular/core';
import type {TuiContextWithImplicit} from '@taiga-ui/cdk';
import type {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

export const TUI_DOC_CODE_ACTIONS = new InjectionToken<
    PolymorpheusContent<TuiContextWithImplicit<string>>
>(`Code actions for the opened tab with code example`, {
    factory: () => ``,
});

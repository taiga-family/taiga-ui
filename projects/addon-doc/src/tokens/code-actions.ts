import {InjectionToken} from '@angular/core';
import {TuiContextWithImplicit} from '@taiga-ui/cdk';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

export const TUI_DOC_CODE_ACTIONS = new InjectionToken<
    PolymorpheusContent<TuiContextWithImplicit<string>>
>(`[TUI_DOC_CODE_ACTIONS]: Code actions for the opened tab with code example`, {
    factory: () => ``,
});

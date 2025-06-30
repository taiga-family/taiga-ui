import {InjectionToken} from '@angular/core';
import type {TuiContext} from '@taiga-ui/cdk/types';
import type {PolymorpheusContent} from '@taiga-ui/polymorpheus';

/**
 * Code actions for the opened tab with code example
 */
export const TUI_DOC_CODE_ACTIONS = new InjectionToken<
    PolymorpheusContent<TuiContext<string>>
>('TUI_DOC_CODE_ACTIONS', {
    factory: () => '',
});

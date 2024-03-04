import {type TuiContext, tuiCreateToken} from '@taiga-ui/cdk';
import {type PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

/**
 * Code actions for the opened tab with code example
 */
export const TUI_DOC_CODE_ACTIONS =
    tuiCreateToken<PolymorpheusContent<TuiContext<string>>>('');

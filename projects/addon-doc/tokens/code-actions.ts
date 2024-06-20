import type {TuiContext} from '@taiga-ui/cdk/types';
import {tuiCreateToken} from '@taiga-ui/cdk/utils/miscellaneous';
import type {PolymorpheusContent} from '@taiga-ui/polymorpheus';

/**
 * Code actions for the opened tab with code example
 */
export const TUI_DOC_CODE_ACTIONS =
    tuiCreateToken<PolymorpheusContent<TuiContext<string>>>('');

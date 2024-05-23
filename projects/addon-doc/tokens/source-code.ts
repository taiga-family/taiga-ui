import type {TuiDocSourceCodePathOptions} from '@taiga-ui/addon-doc/types';
import {tuiCreateToken} from '@taiga-ui/cdk';
import type {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

/**
 * Source code link
 */
export const TUI_DOC_SOURCE_CODE =
    tuiCreateToken<PolymorpheusContent<TuiDocSourceCodePathOptions>>(null);

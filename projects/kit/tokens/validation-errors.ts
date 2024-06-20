import {tuiCreateToken} from '@taiga-ui/cdk/utils/miscellaneous';
import type {PolymorpheusContent} from '@taiga-ui/polymorpheus';
import type {Observable} from 'rxjs';

/**
 * Validation errors
 */
export const TUI_VALIDATION_ERRORS = tuiCreateToken<
    Record<string, Observable<PolymorpheusContent> | PolymorpheusContent>
>({});

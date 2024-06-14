import {tuiCreateToken} from '@taiga-ui/cdk';
import type {PolymorpheusContent} from '@taiga-ui/polymorpheus';
import type {Observable} from 'rxjs';

/**
 * Validation errors
 */
export const TUI_VALIDATION_ERRORS = tuiCreateToken<
    Record<string, Observable<PolymorpheusContent> | PolymorpheusContent>
>({});

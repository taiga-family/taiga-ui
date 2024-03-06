import {tuiCreateToken} from '@taiga-ui/cdk';
import type {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import type {Observable} from 'rxjs';

/**
 * Validation errors
 */
export const TUI_VALIDATION_ERRORS = tuiCreateToken<
    Record<string, Observable<PolymorpheusContent> | PolymorpheusContent>
>({});

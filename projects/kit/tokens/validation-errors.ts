import {tuiCreateToken} from '@taiga-ui/cdk';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {Observable} from 'rxjs';

/**
 * Validation errors
 */
export const TUI_VALIDATION_ERRORS = tuiCreateToken<
    Record<string, Observable<PolymorpheusContent> | PolymorpheusContent>
>({});

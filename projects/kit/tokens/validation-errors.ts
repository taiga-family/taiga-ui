import type {Provider} from '@angular/core';
import {tuiCreateToken} from '@taiga-ui/cdk/utils/miscellaneous';
import type {PolymorpheusContent} from '@taiga-ui/polymorpheus';
import type {Observable} from 'rxjs';

export const TUI_VALIDATION_ERRORS = tuiCreateToken<
    Record<string, Observable<PolymorpheusContent> | PolymorpheusContent>
>({});

export const tuiValidationErrorsProvider = (
    useValue: Record<string, Observable<PolymorpheusContent> | PolymorpheusContent>,
): Provider => ({provide: TUI_VALIDATION_ERRORS, useValue});
